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
    backgroundColor: theme.colors.signal,
    borderColor: theme.colors.signal,
    borderWidth: 1,
    color: theme.colors.void,
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: theme.borders.bright,
    borderWidth: 1,
    color: theme.colors.ink,
  },
  quiet: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    color: theme.colors.inkMuted,
  },
} satisfies Record<ButtonVariant, VariantStyle>;

export const ButtonRoot = styled.Pressable<ButtonStyleProps>(
  ({ $variant, $disabled, $marginTop, $marginBottom }) => ({
    minHeight: $variant === "quiet" ? 42 : 54,
    marginTop: $marginTop,
    marginBottom: $marginBottom,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: $variant === "quiet" ? "center" : "space-between",
    paddingHorizontal: $variant === "quiet" ? 10 : 18,
    borderRadius: 4,
    opacity: $disabled ? 0.55 : 1,
    ...variantStyles[$variant],
  }),
);

export const ButtonLabel = styled.Text<{ $variant: ButtonVariant }>(
  ({ $variant }) => ({
    color: variantStyles[$variant].color,
    fontSize: $variant === "quiet" ? 11 : 14,
    fontWeight: "700",
    letterSpacing: $variant === "quiet" ? 1.5 : 0.3,
  }),
);

export const ButtonArrow = styled.Text<{ $variant: ButtonVariant }>(
  ({ $variant }) => ({
    color: variantStyles[$variant].color,
    fontSize: 14,
    fontWeight: "700",
  }),
);
