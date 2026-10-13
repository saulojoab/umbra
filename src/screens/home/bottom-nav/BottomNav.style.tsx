import styled from "@emotion/native";

import { theme } from "@/theme";

export const BottomNavContainer = styled.View({
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 10,
  paddingTop: 7,
  borderTopWidth: 1,
  borderTopColor: theme.borders.subtle,
});
export const NavPressable = styled.Pressable<{ $active?: boolean }>(
  ({ $active }) => ({
    alignItems: "center",
    gap: 3,
    opacity: $active ? 1 : theme.opacity.muted,
  }),
);
export const NavIcon = styled.Text({
  color: theme.colors.textAccent,
  fontSize: 16,
  lineHeight: 17,
});
export const NavLabel = styled.Text({
  color: theme.colors.inkDim,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: 1.5,
});
export const NavLabelActive = styled(NavLabel)({
  color: theme.colors.textAccent,
});
