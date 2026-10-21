import type { ImportedBook } from "@/domain/onboarding.type";

export type LibraryBook = ImportedBook & {
  coverUri?: string | null;
  currentPage?: number | null;
  totalPages?: number | null;
};

export type LibraryProgressFilter = "all" | "unread" | "reading" | "complete";
export type LibrarySort = "added" | "title";
export type LibraryFilterOption = {
  key: LibraryProgressFilter;
  label: string;
};
