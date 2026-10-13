import StepsFooter from "../steps-footer/StepsFooter";
import { useLibraryFolderService } from "./LibraryFolder.service";
import {
  Container,
  Copy,
  ErrorText,
  Eyebrow,
  Spacer,
  Title,
} from "./LibraryFolder.style";
import type { LibraryFolderProps } from "./LibraryFolder.type";
import FolderCard from "./folder-card/FolderCard";
import FolderDetails from "./folder-details/FolderDetails";

export default function LibraryFolder({
  onBack,
  onContinue,
}: LibraryFolderProps) {
  const { books, error, folder, handleChooseFolder, isChoosing } =
    useLibraryFolderService();

  return (
    <Container>
      <Eyebrow>02 · YOUR LIBRARY</Eyebrow>
      <Title>Where will you keep your books?</Title>
      <Copy>
        Choose a folder to use as your library. Drop EPUB or PDF files there and
        Umbra will find them here.
      </Copy>

      <FolderCard
        handleChooseFolder={handleChooseFolder}
        isChoosing={isChoosing}
      />

      {folder && <FolderDetails folder={folder} books={books} />}

      {error && <ErrorText accessibilityRole="alert">{error}</ErrorText>}

      <Spacer />

      <StepsFooter
        onBack={onBack}
        onContinue={onContinue}
        continueLabel="Continue"
        continueAccessibilityLabel="Continue to reading appearance"
        disabled={!folder || isChoosing}
      />
    </Container>
  );
}
