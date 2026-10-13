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
import type { RecentSignalsProps } from "./RecentSignals.type";

export default function RecentSignals({
  selectedBook,
  onSelectBook,
}: RecentSignalsProps) {
  return (
    <BookList>
      {recentBooks.map((book) => (
        <BookRow
          key={book.title}
          onPress={() => onSelectBook(book.title)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.72 : selectedBook === book.title ? 0.88 : 1,
          })}
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
