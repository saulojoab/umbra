import styled from "@emotion/native";

import { theme } from "@/theme";

export const IntroBlockContainer = styled.View({
  paddingTop: 12,
  paddingBottom: 10,
});
export const Eyebrow = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: 9,
  fontWeight: "700",
  letterSpacing: 2.5,
});
export const Heading = styled.Text({
  marginTop: 5,
  color: theme.colors.ink,
  fontSize: 30,
  fontWeight: "300",
  letterSpacing: -1.2,
  lineHeight: 32,
});
export const HeadingRule = styled.View({
  width: 30,
  height: 2,
  marginTop: 8,
  backgroundColor: theme.colors.signal,
});
export const IntroCopy = styled.Text({
  maxWidth: 310,
  marginTop: 6,
  color: theme.colors.inkMuted,
  fontSize: 11,
  lineHeight: 14,
  letterSpacing: 0.1,
});
