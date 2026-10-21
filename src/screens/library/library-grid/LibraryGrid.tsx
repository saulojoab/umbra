import LibraryBookCard from "../library-book-card/LibraryBookCard";
import { BookGrid, EmptyState } from "./LibraryGrid.style";
import type { LibraryGridProps, LibraryGridRenderItem } from "./LibraryGrid.type";

export default function LibraryGrid({
  books,
  getProgress,
  isRefreshing,
  onRefresh,
}: LibraryGridProps) {
  const renderBook: LibraryGridRenderItem = ({ item }) => (
    <LibraryBookCard
      book={item}
      progress={getProgress(item)}
      textTone={item.coverTextTone ?? "light"}
    />
  );

  return (
    <BookGrid
      data={books}
      renderItem={renderBook}
      keyExtractor={(item) => item.id}
      numColumns={5}
      removeClippedSubviews
      initialNumToRender={15}
      maxToRenderPerBatch={15}
      windowSize={5}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyState>No books found in this view.</EmptyState>}
    />
  );
}
