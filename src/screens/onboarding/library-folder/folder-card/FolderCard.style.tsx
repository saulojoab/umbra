import { theme } from "@/theme";
import styled from "@emotion/native";

export const FolderCardContainer = styled.Pressable({
  minHeight: 124,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 30,
  padding: 22,
  borderWidth: 1,
  borderColor: theme.borders.bright,
  borderRadius: 8,
  backgroundColor: theme.colors.panelMuted,
});
export const FolderGlyph = styled.Text({
  color: theme.colors.signal,
  fontSize: 34,
  marginBottom: 12,
});
export const FolderTitle = styled.Text({
  color: theme.colors.ink,
  fontSize: 16,
  fontWeight: "700",
});
export const FolderHint = styled.Text({
  marginTop: 8,
  color: theme.colors.inkMuted,
  fontSize: 12,
  textAlign: "center",
});
