import { recentBooks } from "./RecentSignals.service";
import {
  BookAuthor,
  BookDetails,
  BookGlyph,
  BookGlyphLine,
  BookGlyphText,
  BookList,
  BookProgress,
  BookRow,
  BookTitle,
  RowProgressFill,
  RowProgressTrack,
} from "./RecentSignals.style";
import type { BookRecord, RecentSignalsProps } from "./RecentSignals.type";

export default function RecentSignals({
  selectedBook,
  onSelectBook,
  importedBooks,
}: RecentSignalsProps) {
  const books: BookRecord[] = [
    ...importedBooks.map((book) => ({
      title: book.title,
      author: `IN YOUR LIBRARY · ${book.format}`,
      progress: "0%" as const,
      tone: "violet" as const,
      glyph: book.format === "EPUB" ? "E" : "P",
    })),
    ...recentBooks,
  ];

  return (
    <BookList>
      {books.map((book) => (
        <BookRow
          key={book.title}
          onPress={() => onSelectBook(book.title)}
          $selected={selectedBook === book.title}
          accessibilityRole="button"
          accessibilityLabel={`Open ${book.title}`}
          accessibilityState={{ selected: selectedBook === book.title }}
        >
          <BookGlyph $tone={book.tone}>
            <BookGlyphText>{book.glyph}</BookGlyphText>
            <BookGlyphLine />
          </BookGlyph>
          <BookDetails>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author.toUpperCase()}</BookAuthor>
            <RowProgressTrack>
              <RowProgressFill $progress={book.progress} />
            </RowProgressTrack>
          </BookDetails>
          <BookProgress>{book.progress}</BookProgress>
        </BookRow>
      ))}
    </BookList>
  );
}
