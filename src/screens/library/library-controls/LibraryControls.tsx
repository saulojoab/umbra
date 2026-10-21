import {
  Controls,
  FilterButton,
  FilterLabel,
  FilterList,
  FilterRow,
  SortButton,
  SortLabel,
} from "./LibraryControls.style";
import type { LibraryControlsProps } from "./LibraryControls.type";

export default function LibraryControls({
  filterOptions,
  onChangeProgressFilter,
  onToggleSort,
  progressFilter,
  sort,
}: LibraryControlsProps) {
  return (
    <Controls>
      <FilterList horizontal showsHorizontalScrollIndicator={false}>
        <FilterRow>
          {filterOptions.map((option) => {
            const active = progressFilter === option.key;
            return (
              <FilterButton
                key={option.key}
                $active={active}
                onPress={() => onChangeProgressFilter(option.key)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
              >
                <FilterLabel $active={active}>{option.label}</FilterLabel>
              </FilterButton>
            );
          })}
        </FilterRow>
      </FilterList>
      <SortButton onPress={onToggleSort} accessibilityRole="button">
        <SortLabel>{sort === "title" ? "TITLE A–Z" : "ADDED"}</SortLabel>
      </SortButton>
    </Controls>
  );
}
