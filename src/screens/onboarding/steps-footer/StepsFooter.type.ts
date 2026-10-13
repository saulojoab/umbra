export type StepsFooterProps = {
  onBack: () => void;
  onContinue: () => void;
  continueLabel: string;
  continueAccessibilityLabel?: string;
  disabled?: boolean;
  isBusy?: boolean;
  busyLabel?: string;
  errorMessage?: string | null;
};
