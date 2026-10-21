import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { ImportedBook } from "@/domain/onboarding.type";
import { useOnboardingStore } from "@/stores/onboardingStore";
import type {
  LibraryBook,
  LibraryFilterOption,
  LibraryProgressFilter,
  LibrarySort,
} from "./LibraryScreen.type";

// TODO: validate logic for this file and refactor if needed im sleepy as fuck.
function getProgressForBook(book: LibraryBook) {
  if (
    book.currentPage == null ||
    book.totalPages == null ||
    book.totalPages <= 0
  ) {
    return null;
  }

  return Math.min(
    100,
    Math.max(0, Math.round((book.currentPage / book.totalPages) * 100)),
  );
}

function toLibraryBook(book: ImportedBook): LibraryBook {
  return book;
}

export function useLibraryScreenService() {
  const importedBooks = useOnboardingStore((state) => state.books);

  const refreshLibraryFromFolder = useOnboardingStore(
    (state) => state.refreshLibrary,
  );

  const [progressFilter, setProgressFilter] =
    useState<LibraryProgressFilter>("all");
  const [sort, setSort] = useState<LibrarySort>("added");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isRefreshingRef = useRef(false);

  const handleRefresh = useCallback(async () => {
    if (isRefreshingRef.current) return;

    isRefreshingRef.current = true;
    setIsRefreshing(true);

    try {
      await refreshLibraryFromFolder();
    } finally {
      isRefreshingRef.current = false;
      setIsRefreshing(false);
    }
  }, [refreshLibraryFromFolder]);

  useEffect(() => {
    void handleRefresh();
  }, [handleRefresh]);

  const books = useMemo(() => {
    const libraryBooks = importedBooks.map(toLibraryBook);

    const filteredBooks = libraryBooks.filter((book) => {
      const progress = getProgressForBook(book);
      if (progressFilter === "unread") return progress === null;
      if (progressFilter === "reading")
        return progress !== null && progress < 100;
      if (progressFilter === "complete") return progress === 100;
      return true;
    });

    if (sort === "title") {
      return [...filteredBooks].sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
      );
    }

    return filteredBooks;
  }, [importedBooks, progressFilter, sort]);

  const filterOptions: LibraryFilterOption[] = [
    { key: "all", label: "ALL" },
    { key: "unread", label: "UNREAD" },
    { key: "reading", label: "READING" },
    { key: "complete", label: "DONE" },
  ];

  const getProgress = getProgressForBook;

  const toggleSort = () =>
    setSort((currentSort) => (currentSort === "added" ? "title" : "added"));

  return {
    books,
    filterOptions,
    getProgress,
    handleRefresh,
    isRefreshing,
    progressFilter,
    setProgressFilter,
    sort,
    toggleSort,
  };
}
