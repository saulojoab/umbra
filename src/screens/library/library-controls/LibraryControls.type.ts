import type {
  LibraryFilterOption,
  LibraryProgressFilter,
  LibrarySort,
} from "../LibraryScreen.type";

export type LibraryControlsProps = {
  filterOptions: LibraryFilterOption[];
  onChangeProgressFilter: (filter: LibraryProgressFilter) => void;
  onToggleSort: () => void;
  progressFilter: LibraryProgressFilter;
  sort: LibrarySort;
};
