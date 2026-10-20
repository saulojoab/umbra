import styled from "@emotion/native";

import { theme } from "@/theme";

export const BottomNavContainer = styled.View({
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: theme.spacing.medium,
  paddingTop: theme.spacing.small,
  borderTopWidth: theme.borders.hairline,
  borderTopColor: theme.borders.subtle,
});

export const NavPressable = styled.Pressable<{ $active?: boolean }>(
  ({ $active }) => ({
    alignItems: "center",
    gap: theme.spacing.tiny,
    opacity: $active ? 1 : theme.opacity.muted,
  }),
);

export const NavIcon = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.button,
  lineHeight: theme.typography.title,
});

export const NavLabel = styled.Text({
  color: theme.colors.tertiary,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: theme.tracking.label,
});

export const NavLabelActive = styled(NavLabel)({
  color: theme.colors.secondary,
});
