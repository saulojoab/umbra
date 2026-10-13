import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.ScrollView({ flex: 1 });
export const Eyebrow = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: 10,
  fontWeight: "700",
  letterSpacing: 2,
});
export const Title = styled.Text({
  marginTop: 12,
  color: theme.colors.ink,
  fontSize: 34,
  fontWeight: "300",
  letterSpacing: -1.1,
  lineHeight: 39,
});
export const Copy = styled.Text({
  marginTop: 12,
  color: theme.colors.inkMuted,
  fontSize: 15,
  lineHeight: 23,
});
export const FolderCard = styled.Pressable({
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
export const FolderDetails = styled.View({
  marginTop: 18,
  padding: 16,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: theme.borders.subtle,
  backgroundColor: theme.colors.panel,
});
export const FolderName = styled.Text({
  color: theme.colors.ink,
  fontSize: 15,
  fontWeight: "700",
});
export const FolderMeta = styled.Text({
  marginTop: 5,
  color: theme.colors.inkMuted,
  fontSize: 11,
});
export const ErrorText = styled.Text({
  marginTop: 12,
  color: "#ff9eaf",
  fontSize: 12,
});
export const Spacer = styled.View({ flex: 1 });
