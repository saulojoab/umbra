import {
  BookCard,
  BookMeta,
  BookProgress,
  Cover,
  CoverCaption,
  CoverFormat,
  CoverGlow,
  CoverImage,
  CoverTitle,
} from "./LibraryBookCard.style";
import type { LibraryBookCardProps } from "./LibraryBookCard.type";

export default function LibraryBookCard({
  book,
  progress,
  textTone,
}: LibraryBookCardProps) {
  return (
    <BookCard accessibilityLabel={`${book.title}, ${book.format}`}>
      <Cover>
        {book.coverUri && (
          <CoverImage
            source={{ uri: book.coverUri }}
            contentFit="cover"
            cachePolicy="disk"
            transition={120}
            accessibilityLabel={`${book.title} cover`}
          />
        )}
        <CoverGlow />
        <CoverCaption $tone={textTone}>
          <CoverFormat $tone={textTone}>{book.format}</CoverFormat>
          <CoverTitle $tone={textTone} numberOfLines={3}>
            {book.title}
          </CoverTitle>
        </CoverCaption>
      </Cover>
      {progress !== null && (
        <BookMeta>
          <BookProgress>
            {book.currentPage} / {book.totalPages} · {progress}%
          </BookProgress>
        </BookMeta>
      )}
    </BookCard>
  );
}
