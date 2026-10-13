import styled from "@emotion/native";

import { theme } from "@/theme";

export const BookList = styled.View({ gap: 5 });
export const BookRow = styled.Pressable({
  minHeight: 52,
  flexDirection: "row",
  alignItems: "center",
  padding: 6,
  borderWidth: 1,
  borderColor: theme.borders.medium,
  backgroundColor: theme.colors.panelMuted,
});
export const BookGlyph = styled.View<{ $tone: "violet" | "rust" }>(
  ({ $tone }) => ({
    width: 36,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.glyphBorder,
    backgroundColor:
      $tone === "violet" ? theme.colors.violet : theme.colors.rust,
  }),
);
export const BookGlyphText = styled.Text({
  color: theme.colors.ink,
  fontSize: 12,
  fontWeight: "300",
  letterSpacing: 1,
});
export const BookGlyphLine = styled.View({
  width: 14,
  height: 1,
  marginTop: 3,
  backgroundColor: theme.colors.signal,
});
export const BookDetails = styled.View({ flex: 1, minWidth: 0, marginLeft: 8 });
export const BookTitle = styled.Text({
  color: theme.colors.ink,
  fontSize: 12,
  fontWeight: "500",
});
export const BookAuthor = styled.Text({
  marginTop: 2,
  color: theme.colors.textTertiary,
  fontSize: 7,
  fontWeight: "700",
  letterSpacing: 1,
});
export const RowProgressTrack = styled.View({
  width: "86%",
  height: 2,
  marginTop: 5,
  backgroundColor: theme.colors.signalDark,
});
export const RowProgressFill = styled.View<{ $progress: `${number}%` }>(
  ({ $progress }) => ({
    width: $progress,
    height: "100%",
    backgroundColor: theme.colors.signalSoft,
  }),
);
export const BookProgress = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: theme.typography.label,
  fontWeight: "700",
});
