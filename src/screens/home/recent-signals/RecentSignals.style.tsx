import styled from "@emotion/native";

import { theme } from "@/theme";

export const BookList = styled.View({ gap: theme.spacing.small });

export const BookRow = styled.Pressable<{ $selected: boolean }>(
  ({ $selected }) => ({
    minHeight: theme.spacing.section,
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.small,
    borderWidth: theme.borders.hairline,
    borderColor: theme.borders.medium,
    backgroundColor: theme.colors.surfaceMuted,
    opacity: $selected ? theme.opacity.pressed : 1,
  }),
);

export const BookGlyph = styled.View<{ $tone: "violet" | "rust" }>(
  ({ $tone }) => ({
    width: 36,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: theme.borders.hairline,
    borderColor: theme.colors.tertiary,
    backgroundColor:
      $tone === "violet" ? theme.colors.surface : theme.colors.surface,
  }),
);

export const BookGlyphText = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.body,
  fontWeight: "300",
  letterSpacing: theme.tracking.wide,
});

export const BookGlyphLine = styled.View({
  width: 14,
  height: theme.borders.hairline,
  marginTop: theme.spacing.tiny,
  backgroundColor: theme.colors.accent,
});

export const BookDetails = styled.View({
  flex: 1,
  minWidth: 0,
  marginLeft: theme.spacing.small,
});

export const BookTitle = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.body,
  fontWeight: "500",
});

export const BookAuthor = styled.Text({
  marginTop: theme.spacing.tiny,
  color: theme.colors.tertiary,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: theme.tracking.wide,
});

export const RowProgressTrack = styled.View({
  width: "86%",
  height: theme.spacing.tiny,
  marginTop: theme.spacing.small,
  backgroundColor: theme.colors.tertiary,
});

export const RowProgressFill = styled.View<{ $progress: `${number}%` }>(
  ({ $progress }) => ({
    width: $progress,
    height: "100%",
    backgroundColor: theme.colors.secondary,
  }),
);

export const BookProgress = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.label,
  fontWeight: "700",
});
