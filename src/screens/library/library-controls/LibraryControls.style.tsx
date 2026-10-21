import styled from "@emotion/native";

import { theme } from "@/theme";

export const Controls = styled.View({
  flexDirection: "row",
  alignItems: "center",
  marginBottom: theme.spacing.medium,
});

export const FilterList = styled.ScrollView({
  flex: 1,
  marginRight: theme.spacing.small,
});

export const FilterRow = styled.View({
  flexDirection: "row",
  gap: theme.spacing.micro,
});

export const FilterButton = styled.Pressable<{ $active: boolean }>(({ $active }) => ({
  minHeight: 32,
  justifyContent: "center",
  paddingHorizontal: theme.spacing.small,
  borderWidth: theme.borders.hairline,
  borderColor: $active ? theme.colors.accent : theme.borders.subtle,
  backgroundColor: $active ? theme.colors.surface : "transparent",
}));

export const FilterLabel = styled.Text<{ $active: boolean }>(({ $active }) => ({
  color: $active ? theme.colors.primary : theme.colors.tertiary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.normal,
}));

export const SortButton = styled.Pressable({
  minHeight: 32,
  justifyContent: "center",
  paddingHorizontal: theme.spacing.small,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
});

export const SortLabel = styled.Text({
  color: theme.colors.accent,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.normal,
});
