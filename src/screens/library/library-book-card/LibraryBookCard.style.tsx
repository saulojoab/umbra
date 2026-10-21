import styled from "@emotion/native";
import { Image } from "expo-image";

import type { CoverTextTone } from "@/domain/onboarding.type";
import { theme } from "@/theme";

export const BookCard = styled.View({
  width: "18.7%",
  marginBottom: theme.spacing.medium,
  marginRight: theme.spacing.micro,
});

export const Cover = styled.View({
  aspectRatio: 0.66,
  justifyContent: "flex-end",
  overflow: "hidden",
  padding: theme.spacing.small,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
  backgroundColor: theme.colors.surface,
});

export const CoverImage = styled(Image)({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const CoverGlow = styled.View({
  position: "absolute",
  top: -28,
  right: -18,
  width: 64,
  height: 64,
  borderRadius: theme.radii.circle,
  backgroundColor: theme.colors.highlight,
  opacity: theme.opacity.muted,
});

export const CoverCaption = styled.View<{ $tone: CoverTextTone }>(({ $tone }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  padding: theme.spacing.small,
  backgroundColor: $tone === "dark" ? theme.colors.primary : theme.colors.surfaceMuted,
}));

export const CoverFormat = styled.Text<{ $tone: CoverTextTone }>(({ $tone }) => ({
  color: $tone === "dark" ? theme.colors.background : theme.colors.primary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.label,
}));

export const CoverTitle = styled.Text<{ $tone: CoverTextTone }>(({ $tone }) => ({
  marginTop: theme.spacing.micro,
  color: $tone === "dark" ? theme.colors.background : theme.colors.primary,
  fontSize: theme.typography.body,
  fontWeight: "800",
  letterSpacing: theme.tracking.subtle,
}));

export const BookMeta = styled.View({
  minHeight: 28,
  justifyContent: "center",
  paddingTop: theme.spacing.micro,
});

export const BookProgress = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.normal,
});
