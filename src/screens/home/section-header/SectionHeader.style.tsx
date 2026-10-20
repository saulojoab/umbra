import styled from "@emotion/native";

import { theme } from "@/theme";

export const SectionHeaderContainer = styled.View<{ $withTopGap?: boolean }>(
  ({ $withTopGap }) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: $withTopGap ? theme.spacing.medium : 0,
    marginBottom: theme.spacing.small,
  }),
);

export const SectionTitle = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.label,
  fontWeight: "800",
  letterSpacing: theme.tracking.wide,
});

export const SectionMeta = styled.Text({
  color: theme.colors.tertiary,
  fontSize: theme.typography.label,
  letterSpacing: theme.tracking.wide,
});

export const ViewAll = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.label,
});

export const ViewAllPressable = styled.Pressable({
  paddingVertical: theme.spacing.small,
  paddingLeft: theme.spacing.small,
});
