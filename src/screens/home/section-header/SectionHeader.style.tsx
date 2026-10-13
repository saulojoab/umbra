import styled from "@emotion/native";

import { theme } from "@/theme";

export const SectionHeaderContainer = styled.View<{ $withTopGap?: boolean }>(
  ({ $withTopGap }) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: $withTopGap ? 12 : 0,
    marginBottom: 5,
  }),
);
export const SectionTitle = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: theme.typography.label,
  fontWeight: "800",
  letterSpacing: 2,
});
export const SectionMeta = styled.Text({
  color: theme.colors.textQuiet,
  fontSize: theme.typography.label,
  letterSpacing: 1,
});
export const ViewAll = styled.Text({
  color: theme.colors.textAccent,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: 1.3,
});
export const ViewAllPressable = styled.Pressable({
  paddingVertical: 6,
  paddingLeft: 8,
});
