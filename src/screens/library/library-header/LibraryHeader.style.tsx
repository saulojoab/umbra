import styled from "@emotion/native";

import { theme } from "@/theme";

export const Header = styled.View({
  paddingTop: theme.spacing.content,
  paddingBottom: theme.spacing.medium,
});

export const Eyebrow = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.wide,
});

export const Title = styled.Text({
  marginTop: theme.spacing.micro,
  color: theme.colors.primary,
  fontSize: theme.typography.heading,
  fontWeight: "800",
  letterSpacing: theme.tracking.tight,
});
