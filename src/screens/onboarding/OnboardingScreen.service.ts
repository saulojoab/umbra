import { useState } from "react";

export function useOnboardingFlow() {
  const [step, setStep] = useState(0);

  return {
    step,
    begin: () => setStep(1),
    goBack: () => setStep((current) => Math.max(1, current - 1)),
    goForward: () => setStep((current) => Math.min(3, current + 1)),
  };
}
