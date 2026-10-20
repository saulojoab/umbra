import type { PressableProps } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "quiet";

export type ButtonProps = {
  label: string;
  onPress: PressableProps["onPress"];
  variant?: ButtonVariant;
  showArrow?: boolean;
  disabled?: boolean;
  accessibilityLabel?: string;
};
