export type ReadingAppearance = "light" | "paper" | "dark" | "umbra";
export type CoverTextTone = "light" | "dark";

export type ImportedBook = {
  id: string;
  title: string;
  format: "EPUB" | "PDF";
  uri: string;
  size: number | null;
  author: string | null;
  mimeType: string | null;
  lastModified: number | null;
  coverUri?: string | null;
  coverTextTone?: CoverTextTone | null;
};

export type LibraryFolder = {
  uri: string;
  name: string;
};

export type OnboardingPreferences = {
  appearance: ReadingAppearance;
  readerName: string;
  completed: boolean;
};
