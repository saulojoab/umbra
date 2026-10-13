import * as FileSystem from "expo-file-system/legacy";

import type { ImportedBook } from "@/domain/onboarding.type";

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
  };
}

export async function readLibraryBooks(folderUri: string) {
  const contents =
    await FileSystem.StorageAccessFramework.readDirectoryAsync(folderUri);

  return contents
    .map(getBookFromUri)
    .filter((book): book is ImportedBook => book !== null);
}
