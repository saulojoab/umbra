import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.View({ flex: 1 });

export const Eyebrow = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.label,
  fontWeight: "700",
  letterSpacing: theme.tracking.wide,
});

export const Title = styled.Text({
  marginTop: theme.spacing.medium,
  color: theme.colors.primary,
  fontSize: theme.typography.title,
  fontWeight: "300",
  letterSpacing: theme.tracking.tight,
  lineHeight: theme.typography.line,
});

export const Copy = styled.Text({
  marginTop: theme.spacing.medium,
  color: theme.colors.tertiary,
  fontSize: theme.typography.copy,
  lineHeight: theme.typography.line,
});

export const NameInput = styled.TextInput({
  flex: 1,
  marginTop: theme.spacing.section,
  paddingHorizontal: theme.spacing.content,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
  borderRadius: theme.radii.medium,
  backgroundColor: theme.colors.surfaceMuted,
  color: theme.colors.primary,
  fontSize: theme.typography.heading,
  fontFamily: "serif",
});

export const Spacer = styled.View({ flex: 1 });
