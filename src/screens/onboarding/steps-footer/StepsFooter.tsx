import Button from "@/components/button/Button";
import { getContinueLabel } from "./StepsFooter.service";
import {
  ButtonCell,
  ButtonRow,
  ErrorMessage,
  Footer,
} from "./StepsFooter.style";
import type { StepsFooterProps } from "./StepsFooter.type";

export default function StepsFooter({
  onBack,
  onContinue,
  continueLabel,
  continueAccessibilityLabel,
  disabled = false,
  isBusy = false,
  busyLabel = "Working…",
  errorMessage,
}: StepsFooterProps) {
  return (
    <Footer>
      {errorMessage ? (
        <ErrorMessage accessibilityRole="alert">{errorMessage}</ErrorMessage>
      ) : null}

      <ButtonRow>
        <ButtonCell>
          <Button label="BACK" variant="secondary" onPress={onBack} />
        </ButtonCell>
        <ButtonCell>
          <Button
            label={getContinueLabel(continueLabel, isBusy, busyLabel)}
            disabled={disabled || isBusy}
            onPress={onContinue}
            accessibilityLabel={continueAccessibilityLabel ?? continueLabel}
            showArrow
          />
        </ButtonCell>
      </ButtonRow>
    </Footer>
  );
}
