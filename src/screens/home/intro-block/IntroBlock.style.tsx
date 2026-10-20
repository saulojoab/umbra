import styled from "@emotion/native";

import { theme } from "@/theme";

export const IntroBlockContainer = styled.View({
  minHeight: theme.spacing.section,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing.medium,
  paddingBottom: theme.spacing.small,
});

export const Eyebrow = styled.Text({
  width: "56%",
  color: theme.colors.secondary,
  fontSize: theme.typography.title,
  fontWeight: "600",
  letterSpacing: theme.tracking.wide,
  lineHeight: theme.typography.line,
});

export const Heading = styled.Text({
  width: "40%",
  marginTop: theme.spacing.tiny,
  color: theme.colors.primary,
  fontSize: theme.typography.button,
  fontWeight: "300",
  letterSpacing: theme.tracking.subtle,
  lineHeight: theme.typography.line,
  textAlign: "right",
});
