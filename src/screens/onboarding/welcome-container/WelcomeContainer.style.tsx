import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.View({
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: theme.spacing.screen,
  paddingBottom: theme.spacing.section,
});

export const Brand = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing.medium,
  marginBottom: theme.spacing.display,
});

export const BrandMark = styled.Text({
  width: 32,
  height: 32,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
  borderRadius: theme.radii.circle,
  color: theme.colors.accent,
  fontSize: theme.typography.title,
  lineHeight: theme.spacing.display,
  textAlign: "center",
});

export const BrandName = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.body,
  fontWeight: "700",
  letterSpacing: theme.tracking.brand,
});

export const Divider = styled.View({
  width: 42,
  height: 2,
  marginBottom: theme.spacing.screen,
  backgroundColor: theme.colors.accent,
});

export const Eyebrow = styled.Text({
  marginBottom: theme.spacing.medium,
  color: theme.colors.secondary,
  fontSize: theme.typography.label,
  fontWeight: "700",
  letterSpacing: theme.tracking.label,
});

export const WelcomeTitle = styled.Text({
  maxWidth: 330,
  color: theme.colors.primary,
  fontSize: theme.typography.display,
  fontWeight: "300",
  letterSpacing: theme.tracking.display,
  lineHeight: theme.typography.display,
});

export const Copy = styled.Text({
  maxWidth: 310,
  marginTop: theme.spacing.content,
  color: theme.colors.tertiary,
  fontSize: theme.typography.copy,
  lineHeight: theme.typography.line,
});

export const StepLabel = styled.Text({
  marginTop: theme.spacing.screen,
  color: theme.colors.tertiary,
  fontSize: theme.typography.label,
  fontWeight: "700",
  letterSpacing: theme.tracking.label,
});

export const WelcomeButtonContainer = styled.View({
  marginTop: 34,
});
