import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.View({
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: theme.spacing.screen,
  paddingBottom: 24,
});

export const Brand = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  marginBottom: 30,
});

export const BrandMark = styled.Text({
  width: 32,
  height: 32,
  borderWidth: 1,
  borderColor: theme.borders.bright,
  borderRadius: 16,
  color: theme.colors.signal,
  fontSize: 17,
  lineHeight: 30,
  textAlign: "center",
});

export const BrandName = styled.Text({
  color: theme.colors.ink,
  fontSize: 12,
  fontWeight: "700",
  letterSpacing: 4,
});

export const Divider = styled.View({
  width: 42,
  height: 2,
  marginBottom: 22,
  backgroundColor: theme.colors.signal,
});

export const Eyebrow = styled.Text({
  marginBottom: 12,
  color: theme.colors.signalSoft,
  fontSize: 9,
  fontWeight: "700",
  letterSpacing: 2.2,
});

export const WelcomeTitle = styled.Text({
  maxWidth: 330,
  color: theme.colors.ink,
  fontSize: 42,
  fontWeight: "300",
  letterSpacing: -1.8,
  lineHeight: 46,
});

export const Copy = styled.Text({
  maxWidth: 310,
  marginTop: 16,
  color: theme.colors.inkMuted,
  fontSize: 15,
  lineHeight: 23,
});

export const StepLabel = styled.Text({
  marginTop: 22,
  color: theme.colors.inkDim,
  fontSize: 9,
  fontWeight: "700",
  letterSpacing: 1.8,
});
