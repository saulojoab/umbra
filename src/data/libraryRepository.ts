import * as FileSystem from "expo-file-system/legacy";
import { strFromU8, unzipSync } from "fflate";

import type { CoverTextTone, ImportedBook } from "@/domain/onboarding.type";

function getBookFromUri(uri: string): ImportedBook | null {
  const documentId = uri.split("/document/")[1] ?? uri.split("/").pop() ?? "";
  const decodedName =
    decodeURIComponent(documentId).split(":").pop() ?? documentId;
  const fileName = decodedName.split("/").pop() ?? decodedName;
  const extension = fileName.split(".").pop()?.toLowerCase();
  const format =
    extension === "pdf" ? "PDF" : extension === "epub" ? "EPUB" : null;
  if (!format) return null;

  return {
    id: uri,
    title: fileName.replace(/\.(epub|pdf)$/i, "").trim() || "Untitled book",
    format,
    uri,
    size: null,
    author: null,
    mimeType: format === "PDF" ? "application/pdf" : "application/epub+zip",
    lastModified: null,
    coverUri: null,
    coverTextTone: null,
  };
}

function decodeBase64(value: string) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function encodeBase64(bytes: Uint8Array) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getAttribute(attributes: string, name: string) {
  const match = attributes.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i"));
  return match ? decodeXml(match[1]) : null;
}

function normalizePath(path: string) {
  const parts: string[] = [];
  for (const part of path.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return parts.join("/");
}

function getHexLuminance(color: string) {
  const normalized = color.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((part) => `${part}${part}`).join("")
    : normalized;
  if (!/^[0-9a-f]{6}$/i.test(value)) return null;

  const red = Number.parseInt(value.slice(0, 2), 16) / 255;
  const green = Number.parseInt(value.slice(2, 4), 16) / 255;
  const blue = Number.parseInt(value.slice(4, 6), 16) / 255;
  const linearize = (channel: number) =>
    channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;

  return 0.2126 * linearize(red) + 0.7152 * linearize(green) + 0.0722 * linearize(blue);
}

async function getCoverTextTone(coverUri: string, bookId: string): Promise<CoverTextTone> {
  try {
    const { getColors } = await import("react-native-image-colors");
    const colors = await getColors(coverUri, {
      fallback: "#000000",
      cache: true,
      key: `umbra-cover-colors-${bookId}`,
      pixelSpacing: 8,
      quality: "low",
    });
    const representativeColor =
      colors.platform === "ios"
        ? colors.background
        : colors.platform === "android"
          ? colors.average
          : colors.dominant;
    const luminance = getHexLuminance(representativeColor);
    return luminance !== null && luminance > 0.42 ? "dark" : "light";
  } catch {
    return "light";
  }
}

function getCoverEntry(files: Record<string, Uint8Array>) {
  const container = files["META-INF/container.xml"];
  if (!container) return null;

  const containerXml = strFromU8(container);
  const rootFileMatch = containerXml.match(/<rootfile\b([^>]+)>/i);
  const rootFilePath = rootFileMatch
    ? getAttribute(rootFileMatch[1], "full-path")
    : null;
  if (!rootFilePath) return null;

  const opf = files[rootFilePath];
  if (!opf) return null;
  const opfXml = strFromU8(opf);
  const opfDirectory = rootFilePath.includes("/")
    ? rootFilePath.slice(0, rootFilePath.lastIndexOf("/") + 1)
    : "";
  const coverId =
    opfXml.match(/<meta\b([^>]*?name=["']cover["'][^>]*)\/?\s*>/i)?.[1] ??
    opfXml.match(/<meta\b([^>]*?property=["']cover-image["'][^>]*)\/?\s*>/i)?.[1];
  const declaredCoverId = coverId ? getAttribute(coverId, "content") : null;
  const items = [...opfXml.matchAll(/<item\b([^>]+)\/?\s*>/gi)].map((match) => ({
    id: getAttribute(match[1], "id"),
    href: getAttribute(match[1], "href"),
    mediaType: getAttribute(match[1], "media-type"),
    properties: getAttribute(match[1], "properties"),
  }));
  const coverItem =
    items.find((item) => item.id === declaredCoverId) ??
    items.find((item) => item.properties?.split(/\s+/).includes("cover-image")) ??
    items.find((item) => item.mediaType?.startsWith("image/"));

  if (!coverItem?.href || !coverItem.mediaType) return null;
  const entryPath = normalizePath(`${opfDirectory}${decodeURIComponent(coverItem.href)}`);
  const bytes = files[entryPath];
  if (!bytes) return null;

  return { bytes, mediaType: coverItem.mediaType };
}

async function extractCoverUri(book: ImportedBook) {
  if (book.format !== "EPUB" || book.coverUri) {
    return {
      coverUri: book.coverUri ?? null,
      coverTextTone: book.coverTextTone ?? null,
    };
  }

  try {
    const base64 = await readBookAsBase64(book.uri);
    const cover = getCoverEntry(unzipSync(decodeBase64(base64)));
    if (!cover) return null;

    const coverBase64 = encodeBase64(cover.bytes);
    if (!FileSystem.cacheDirectory) {
      const coverUri = `data:${cover.mediaType};base64,${coverBase64}`;
      return { coverUri, coverTextTone: await getCoverTextTone(coverUri, book.id) };
    }

    const cachePath = `${FileSystem.cacheDirectory}umbra-cover-${encodeURIComponent(book.id)}.${cover.mediaType.split("/")[1] ?? "jpg"}`;
    try {
      await FileSystem.writeAsStringAsync(cachePath, coverBase64, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return {
        coverUri: cachePath,
        coverTextTone: await getCoverTextTone(cachePath, book.id),
      };
    } catch {
      const coverUri = `data:${cover.mediaType};base64,${coverBase64}`;
      return { coverUri, coverTextTone: await getCoverTextTone(coverUri, book.id) };
    }
  } catch {
    return { coverUri: null, coverTextTone: null };
  }
}

async function readBookAsBase64(uri: string) {
  try {
    return await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  } catch {
    if (!FileSystem.cacheDirectory) throw new Error("No cache directory available");

    const temporaryPath = `${FileSystem.cacheDirectory}umbra-source-${encodeURIComponent(uri)}.epub`;
    await FileSystem.copyAsync({ from: uri, to: temporaryPath });
    try {
      return await FileSystem.readAsStringAsync(temporaryPath, {
        encoding: FileSystem.EncodingType.Base64,
      });
    } finally {
      await FileSystem.deleteAsync(temporaryPath, { idempotent: true });
    }
  }
}

export async function readLibraryBooks(folderUri: string) {
  const contents =
    await FileSystem.StorageAccessFramework.readDirectoryAsync(folderUri);

  const books = contents
    .map(getBookFromUri)
    .filter((book): book is ImportedBook => book !== null);

  return Promise.all(
    books.map(async (book) => ({
      ...book,
      ...(await extractCoverUri(book)),
    })),
  );
}
