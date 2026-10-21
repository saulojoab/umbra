import type { CoverTextTone } from "@/domain/onboarding.type";
import type { LibraryBook } from "../LibraryScreen.type";

export type LibraryBookCardProps = {
  book: LibraryBook;
  progress: number | null;
  textTone: CoverTextTone;
};
