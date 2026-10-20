import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.ScrollView({ flex: 1 });

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

export const FolderCard = styled.Pressable({
  minHeight: theme.spacing.display,
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing.section,
  padding: theme.spacing.screen,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
  borderRadius: theme.radii.large,
  backgroundColor: theme.colors.surfaceMuted,
});

export const FolderGlyph = styled.Text({
  color: theme.colors.accent,
  fontSize: theme.typography.title,
  marginBottom: theme.spacing.medium,
});

export const FolderTitle = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.button,
  fontWeight: "700",
});

export const FolderHint = styled.Text({
  marginTop: theme.spacing.small,
  color: theme.colors.tertiary,
  fontSize: theme.typography.body,
  textAlign: "center",
});

export const FolderDetails = styled.View({
  marginTop: theme.spacing.large,
  padding: theme.spacing.content,
  borderRadius: theme.radii.medium,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.subtle,
  backgroundColor: theme.colors.surface,
});

export const FolderName = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.copy,
  fontWeight: "700",
});

export const FolderMeta = styled.Text({
  marginTop: theme.spacing.small,
  color: theme.colors.tertiary,
  fontSize: theme.typography.body,
});

export const ErrorText = styled.Text({
  marginTop: theme.spacing.medium,
  color: theme.colors.error,
  fontSize: theme.typography.body,
});

export const Spacer = styled.View({ flex: 1 });
