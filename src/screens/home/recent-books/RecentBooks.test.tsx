import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ImportedBook } from "@/domain/onboarding.type";

import { useRecentBooksService } from "./RecentBooks.service";

const importedBook = (overrides: Partial<ImportedBook> = {}): ImportedBook => ({
  id: "book-1",
  title: "Imported title",
  author: null,
  format: "EPUB",
  uri: "content://book-1",
  size: null,
  mimeType: "application/epub+zip",
  lastModified: null,
  ...overrides,
});

describe("RecentBooks service", () => {
  it("places imported books first and calculates bounded progress", () => {
    const { result } = renderHook(() =>
      useRecentBooksService([
        importedBook({ title: "First import", author: "Author" }),
        importedBook({ id: "book-2", title: "Second import" }),
      ]),
    );

    expect(result.current.books[0]).toMatchObject({
      title: "First import",
      author: "Author",
      currentPage: 42,
      totalPages: 271,
      progress: 15,
    });
    expect(result.current.books[1]).toMatchObject({
      title: "Second import",
      author: "Unknown author",
      progress: 53,
    });
    expect(result.current.books).toHaveLength(5);
  });

  it("falls back to sample books when no books were imported", () => {
    const { result } = renderHook(() => useRecentBooksService([]));

    expect(result.current.books.map((book) => book.title)).toEqual([
      "Neuromancer",
      "Invisible Cities",
      "Solaris",
      "The Dispossessed",
      "Piranesi",
    ]);
  });
});
