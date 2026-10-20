import styled from "@emotion/native";

import { theme } from "@/theme";

export const Artwork = styled.View({
  height: 132,
  overflow: "hidden",
  backgroundColor: theme.colors.surface,
});

export const Glow = styled.View({
  position: "absolute",
  top: 20,
  left: "35%",
  width: 105,
  height: 105,
  borderRadius: theme.radii.circle,
  backgroundColor: theme.colors.highlight,
  transform: [{ scaleX: 1.55 }],
});

export const Orbit = styled.View<{ $variant: "one" | "two" }>(
  ({ $variant }) => ({
    position: "absolute",
    top: $variant === "one" ? -65 : -48,
    left: $variant === "one" ? "27%" : "38%",
    width: $variant === "one" ? 190 : 105,
    height: 250,
    borderWidth: theme.borders.hairline,
    borderColor: $variant === "one" ? theme.colors.accent : theme.colors.highlight,
    borderRadius: theme.radii.circle,
    transform: [{ rotate: $variant === "one" ? "43deg" : "-42deg" }],
  }),
);

export const Crystal = styled.View<{ $variant: "large" | "small" }>(
  ({ $variant }) => ({
    position: "absolute",
    top: $variant === "large" ? 8 : 52,
    left: $variant === "large" ? "45%" : "29%",
    width: $variant === "large" ? 74 : 42,
    height: $variant === "large" ? 108 : 62,
    borderWidth: theme.borders.hairline,
    borderColor: $variant === "large" ? theme.colors.accent : theme.colors.highlight,
    backgroundColor:
      $variant === "large"
        ? theme.colors.highlight
        : theme.colors.highlight,
    transform:
      $variant === "large"
        ? [{ rotate: "34deg" }, { skewX: "-14deg" }]
        : [{ rotate: "-26deg" }],
  }),
);

export const Crosshair = styled.View<{
  $axis: "horizontal" | "vertical";
}>(({ $axis }) => ({
  position: "absolute",
  top: $axis === "horizontal" ? 66 : 0,
  left: $axis === "horizontal" ? 0 : "52%",
  width: $axis === "horizontal" ? "100%" : theme.borders.hairline,
  height: $axis === "horizontal" ? theme.borders.hairline : "100%",
  backgroundColor: theme.colors.secondary,
}));

export const Code = styled.Text<{ $bottom?: boolean }>(({ $bottom }) => ({
  position: "absolute",
  top: $bottom ? undefined : 13,
  bottom: $bottom ? theme.spacing.medium : undefined,
  left: $bottom ? undefined : 15,
  right: $bottom ? theme.spacing.content : undefined,
  color: $bottom ? theme.colors.highlight : theme.colors.accent,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: theme.tracking.label,
}));
