import { useEffect, useState } from "react";

import { useOnboardingStore } from "@/stores/onboardingStore";
import { router } from "expo-router";

// TODO: clean this up a bit
export function useOnboardingFlow() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const complete = useOnboardingStore((state) => state.complete);
  const libraryFolder = useOnboardingStore((state) => state.libraryFolder);
  const readerName = useOnboardingStore((state) => state.readerName);
  const hydrated = useOnboardingStore((state) => state.hydrated);
  const completed = useOnboardingStore((state) => state.completed);
  const hydrate = useOnboardingStore((state) => state.hydrate);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  useEffect(() => {
    // TODO: remove this to enable onboarding redirect when completed
    //if (hydrated && completed) router.replace("/home");
  }, [completed, hydrated]);

  async function finish() {
    setIsSaving(true);
    setError(null);
    try {
      await complete();
      return true;
    } catch {
      setError("Your setup could not be saved. Please try again.");
      return false;
    } finally {
      setIsSaving(false);
    }
  }

  async function handleFinish() {
    if (!readerName.trim() || !libraryFolder) return;
    const saved = await finish();
    if (saved) router.replace("/home");
  }

  return {
    step,
    isSaving,
    error,
    begin: () => setStep(1),
    goBack: () =>
      setStep((current) => Math.max(0, current - 1) as 0 | 1 | 2 | 3),
    goForward: () =>
      setStep((current) => Math.min(3, current + 1) as 0 | 1 | 2 | 3),
    handleFinish,
  };
}

export function useOnboardingData() {}
