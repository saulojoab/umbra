import { useMemo } from "react";

import type { ImportedBook } from "@/domain/onboarding.type";
import type { RecentBook, RecentBookViewModel } from "./RecentBooks.type";

export function useRecentBooksService(importedBooks: ImportedBook[]) {
  return useMemo(() => {
    const sampleBooks: RecentBook[] = [
      {
        title: "Neuromancer",
        author: "William Gibson",
        currentPage: 42,
        totalPages: 271,
      },
      {
        title: "Invisible Cities",
        author: "Italo Calvino",
        currentPage: 88,
        totalPages: 165,
      },
      {
        title: "Solaris",
        author: "Stanislaw Lem",
        currentPage: 31,
        totalPages: 204,
      },
      {
        title: "The Dispossessed",
        author: "Ursula K. Le Guin",
        currentPage: 116,
        totalPages: 387,
      },
      {
        title: "Piranesi",
        author: "Susanna Clarke",
        currentPage: 201,
        totalPages: 272,
      },
    ];
    const currentPages = [42, 88, 31, 116, 201];
    const totalPages = [271, 165, 204, 387, 272];
    const coverSource =
      "https://m.media-amazon.com/images/I/61BSOvwhMgL._SL1000_.jpg";

    const imported = importedBooks.slice(0, 5).map((book, index) => ({
      title: book.title,
      author: book.author ?? "Unknown author",
      currentPage: currentPages[index] ?? 1,
      totalPages: totalPages[index] ?? 100,
    }));

    const bookRecords: RecentBook[] = [...imported, ...sampleBooks].slice(0, 5);
    const books = bookRecords.map<RecentBookViewModel>((book) => ({
      ...book,
      coverSource,
      progress: Math.min(
        100,
        Math.round((book.currentPage / book.totalPages) * 100),
      ),
    }));

    return { books };
  }, [importedBooks]);
}
