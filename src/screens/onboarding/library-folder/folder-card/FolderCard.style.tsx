import { theme } from "@/theme";
import styled from "@emotion/native";

export const FolderCardContainer = styled.Pressable({
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
