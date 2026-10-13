import { useOnboardingStore } from "@/stores/onboardingStore";

export function useReaderNameService(onContinue: () => void) {
  const readerName = useOnboardingStore((state) => state.readerName);
  const setReaderName = useOnboardingStore((state) => state.setReaderName);
  const hasName = readerName.trim().length > 0;

  function continueWithName() {
    if (!hasName) return;
    setReaderName(readerName.trim());
    onContinue();
  }

  return {
    continueWithName,
    readerName,
    setReaderName,
    hasName,
  };
}
