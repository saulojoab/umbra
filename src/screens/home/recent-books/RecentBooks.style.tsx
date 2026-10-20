import styled from "@emotion/native";
import { Image } from "expo-image";

import { theme } from "@/theme";

export const Grid = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
});

export const BookCard = styled.View({
  width: "18.5%",
  aspectRatio: 0.66,
  overflow: "hidden",
  backgroundColor: theme.colors.panel,
});

export const Cover = styled(Image)({
  width: "100%",
  height: "100%",
});

export const BookOverlay = styled.View({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  paddingVertical: theme.spacing.coverOverlayVertical,
  paddingHorizontal: theme.spacing.coverOverlayHorizontal,
  backgroundColor: theme.colors.coverOverlay,
});

export const BookProgress = styled.Text({
  color: theme.colors.ink,
  fontSize: theme.typography.progress,
  fontWeight: "800",
  letterSpacing: theme.typography.progressTracking,
  textAlign: "center",
});
