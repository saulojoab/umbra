import { create } from "zustand";

import {
  readLibraryBooks,
} from "@/data/libraryRepository";
import {
  loadOnboardingData,
  saveOnboardingData,
} from "@/data/onboardingRepository";
import type {
  ImportedBook,
  LibraryFolder,
  ReadingAppearance,
} from "@/domain/onboarding.type";

type OnboardingState = {
  readerName: string;
  appearance: ReadingAppearance;
  books: ImportedBook[];
  libraryFolder: LibraryFolder | null;
  completed: boolean;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  setAppearance: (appearance: ReadingAppearance) => void;
  setReaderName: (readerName: string) => void;
  setLibrary: (folder: LibraryFolder, books: ImportedBook[]) => void;
  refreshLibrary: () => Promise<void>;
  complete: () => Promise<void>;
};

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  readerName: "",
  appearance: "dark",
  books: [],
  libraryFolder: null,
  completed: false,
  hydrated: false,
  hydrate: async () => {
    const { preferences, books, libraryFolder } = await loadOnboardingData();
    set({
      readerName: preferences?.readerName ?? "",
      appearance: preferences?.appearance ?? "dark",
      books,
      libraryFolder,
      completed: preferences?.completed ?? false,
      hydrated: true,
    });
  },
  setReaderName: (readerName) => set({ readerName }),
  setAppearance: (appearance) => set({ appearance }),
  setLibrary: (libraryFolder, books) => set({ libraryFolder, books }),
  refreshLibrary: async () => {
    const folder = get().libraryFolder;
    if (!folder) return;
    try {
      const books = await readLibraryBooks(folder.uri);
      set({ books });
    } catch {
      // Keep the last known library contents if access is temporarily unavailable.
    }
  },
  complete: async () => {
    const { readerName, appearance, libraryFolder, books } = get();
    if (!readerName.trim() || !libraryFolder) return;
    await saveOnboardingData(
      readerName.trim(),
      appearance,
      libraryFolder,
      books,
    );
    set({ completed: true });
  },
}));
