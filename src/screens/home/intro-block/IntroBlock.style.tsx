import styled from "@emotion/native";

import { theme } from "@/theme";

export const IntroBlockContainer = styled.View({
  minHeight: theme.spacing.introBlock,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing.medium,
  paddingBottom: theme.spacing.small,
});

export const Eyebrow = styled.Text({
  width: "56%",
  color: theme.colors.signalSoft,
  fontSize: theme.typography.introWelcome,
  fontWeight: "600",
  letterSpacing: theme.typography.introWelcomeTracking,
  lineHeight: theme.typography.introWelcomeLine,
});

export const Heading = styled.Text({
  width: "40%",
  marginTop: theme.spacing.introMessageOffset,
  color: theme.colors.ink,
  fontSize: theme.typography.introMessage,
  fontWeight: "300",
  letterSpacing: theme.typography.introMessageTracking,
  lineHeight: theme.typography.introMessageLine,
  textAlign: "right",
});
