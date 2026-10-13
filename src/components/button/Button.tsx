import type { ButtonProps } from "./Button.type";
import { ButtonArrow, ButtonLabel, ButtonRoot } from "./Button.style";

export default function Button({
  label,
  onPress,
  variant = "primary",
  showArrow = false,
  disabled = false,
  marginTop,
  marginBottom,
  accessibilityLabel,
}: ButtonProps) {
  return (
    <ButtonRoot
      $variant={variant}
      $disabled={disabled}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      disabled={disabled}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
    >
      <ButtonLabel $variant={variant}>{label}</ButtonLabel>
      {showArrow ? <ButtonArrow $variant={variant}>↗</ButtonArrow> : null}
    </ButtonRoot>
  );
}
