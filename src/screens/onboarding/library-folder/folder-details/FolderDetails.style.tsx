import { theme } from "@/theme";
import styled from "@emotion/native";

export const FolderDetailsContainer = styled.View({
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
