import {
  BookCard,
  BookOverlay,
  BookProgress,
  Cover,
  Grid,
} from "./RecentBooks.style";
import { useRecentBooksService } from "./RecentBooks.service";
import type { RecentBooksProps } from "./RecentBooks.type";

export default function RecentBooks({ importedBooks }: RecentBooksProps) {
  const { books } = useRecentBooksService(importedBooks);

  return (
    <Grid>
      {books.map((book) => (
        <BookCard
          key={`${book.title}-${book.author}`}
          accessibilityLabel={`${book.title}, page ${book.currentPage} of ${book.totalPages}, ${book.progress}% complete`}
        >
          <Cover
            source={book.coverSource}
            contentFit="contain"
            cachePolicy="disk"
            transition={120}
            accessibilityLabel={`${book.title} cover`}
          />
          <BookOverlay>
            <BookProgress>
              {book.currentPage} / {book.totalPages} · {book.progress}%
            </BookProgress>
          </BookOverlay>
        </BookCard>
      ))}
    </Grid>
  );
}
