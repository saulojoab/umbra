import type { ListRenderItem } from "react-native";

import type { LibraryBook } from "../LibraryScreen.type";

export type LibraryGridProps = {
  books: LibraryBook[];
  getProgress: (book: LibraryBook) => number | null;
  isRefreshing: boolean;
  onRefresh: () => Promise<void>;
};

export type LibraryGridRenderItem = ListRenderItem<LibraryBook>;
