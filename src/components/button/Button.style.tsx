import styled from "@emotion/native";

import { theme } from "@/theme";
import type { ButtonVariant } from "./Button.type";

type ButtonStyleProps = {
  $variant: ButtonVariant;
  $disabled: boolean;
  $marginTop?: number;
  $marginBottom?: number;
};

type VariantStyle = {
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  color: string;
};

const variantStyles = {
  primary: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.accent,
    borderWidth: theme.borders.hairline,
    color: theme.colors.background,
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: theme.borders.bright,
    borderWidth: theme.borders.hairline,
    color: theme.colors.primary,
  },
  quiet: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: theme.borders.hairline,
    color: theme.colors.tertiary,
  },
} satisfies Record<ButtonVariant, VariantStyle>;

export const ButtonRoot = styled.Pressable<ButtonStyleProps>(
  ({ $variant, $disabled, $marginTop, $marginBottom }) => ({
    minHeight: $variant === "quiet" ? theme.spacing.section : theme.spacing.display,
    marginTop: $marginTop,
    marginBottom: $marginBottom,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: $variant === "quiet" ? "center" : "space-between",
    paddingHorizontal: $variant === "quiet" ? theme.spacing.medium : theme.spacing.large,
    borderRadius: theme.radii.small,
    opacity: $disabled ? theme.opacity.disabled : 1,
    ...variantStyles[$variant],
  }),
);

export const ButtonLabel = styled.Text<{ $variant: ButtonVariant }>(
  ({ $variant }) => ({
    color: variantStyles[$variant].color,
    fontSize: $variant === "quiet" ? theme.typography.body : theme.typography.button,
    fontWeight: "700",
    letterSpacing: $variant === "quiet" ? theme.tracking.label : theme.tracking.normal,
  }),
);

export const ButtonArrow = styled.Text<{ $variant: ButtonVariant }>(
  ({ $variant }) => ({
    color: variantStyles[$variant].color,
    fontSize: theme.typography.button,
    fontWeight: "700",
  }),
);
