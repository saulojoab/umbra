import {
  FolderCardContainer,
  FolderGlyph,
  FolderHint,
  FolderTitle,
} from "./FolderCard.style";
import { IFolderCard } from "./FolderCard.type";

export default function FolderCard({
  handleChooseFolder,
  isChoosing,
}: IFolderCard) {
  return (
    <FolderCardContainer
      onPress={handleChooseFolder}
      accessibilityRole="button"
      accessibilityLabel="Choose a folder for your books"
      accessibilityState={{ busy: isChoosing }}
    >
      <FolderGlyph>⌑</FolderGlyph>
      <FolderTitle>
        {isChoosing ? "Opening folders…" : "Choose library folder"}
      </FolderTitle>
      <FolderHint>Pick a device folder for EPUB and PDF books</FolderHint>
    </FolderCardContainer>
  );
}
