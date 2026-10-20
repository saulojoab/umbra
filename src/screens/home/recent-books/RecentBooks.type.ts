import type { ImportedBook } from "@/domain/onboarding.type";

export type RecentBook = {
  title: string;
  author: string;
  currentPage: number;
  totalPages: number;
};

export type RecentBookViewModel = RecentBook & {
  coverSource: string;
  progress: number;
};

export type RecentBooksProps = {
  importedBooks: ImportedBook[];
};
