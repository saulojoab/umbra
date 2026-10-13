import * as FileSystem from "expo-file-system/legacy";
import { Platform } from "react-native";
import { useState } from "react";

import { readLibraryBooks } from "@/data/libraryRepository";
import type { LibraryFolder } from "@/domain/onboarding.type";
import { useOnboardingStore } from "@/stores/onboardingStore";

function getNameFromUri(uri: string) {
  const treePath = uri.split("/tree/")[1] ?? uri.split("/").pop() ?? "Books";
  const decoded = decodeURIComponent(treePath.split("/document/")[0]);
  return decoded.split("/").pop()?.split(":").pop() || "Books";
}

export async function chooseLibraryFolder() {
  if (Platform.OS !== "android") {
    throw new Error("Folder selection is currently available on Android.");
  }

  const result =
    await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!result.granted) return null;

  const folder: LibraryFolder = {
    uri: result.directoryUri,
    name: getNameFromUri(result.directoryUri),
  };
  const books = await readLibraryBooks(folder.uri);

  return { folder, books };
}

export function useLibraryFolderService() {
  const folder = useOnboardingStore((state) => state.libraryFolder);
  const books = useOnboardingStore((state) => state.books);
  const setLibrary = useOnboardingStore((state) => state.setLibrary);
  const [isChoosing, setIsChoosing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleChooseFolder() {
    setIsChoosing(true);
    setError(null);
    try {
      const result = await chooseLibraryFolder();
      if (result) setLibrary(result.folder, result.books);
    } catch (chooseError) {
      setError(
        chooseError instanceof Error
          ? chooseError.message
          : "Unable to open this folder.",
      );
    } finally {
      setIsChoosing(false);
    }
  }

  return {
    folder,
    books,
    isChoosing,
    error,
    handleChooseFolder,
  };
}
