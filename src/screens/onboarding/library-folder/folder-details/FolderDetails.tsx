import {
  FolderDetailsContainer,
  FolderMeta,
  FolderName,
} from "./FolderDetails.style";
import { IFolderDetails } from "./FolderDetails.type";

export default function FolderDetails({ folder, books }: IFolderDetails) {
  return (
    <FolderDetailsContainer>
      <FolderName numberOfLines={1}>{folder.name}</FolderName>
      <FolderMeta>
        {books.length === 1 ? "1 book found" : `${books.length} books found`} ·
        You can add more later
      </FolderMeta>
    </FolderDetailsContainer>
  );
}
