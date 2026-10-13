import { ReadingAppearance } from "@/domain/onboarding.type";
import { useOnboardingStore } from "@/stores/onboardingStore";
import type { AppearanceOption } from "./ReadingAppearance.type";

export const appearanceOptions: AppearanceOption[] = [
  {
    id: "light",
    name: "Light",
    description: "Crisp and clear",
    background: "#f5f8f7",
    foreground: "#172a2b",
    accent: "#087f83",
    sample: "A quiet place for your next chapter.",
  },
  {
    id: "paper",
    name: "Paper",
    description: "Soft, like a page",
    background: "#eee5d3",
    foreground: "#3a3025",
    accent: "#96734a",
    sample: "A quiet place for your next chapter.",
  },
  {
    id: "dark",
    name: "Dark",
    description: "Gentle in low light",
    background: "#102326",
    foreground: "#e8f1ed",
    accent: "#80f8ea",
    sample: "A quiet place for your next chapter.",
  },
  {
    id: "umbra",
    name: "Umbra",
    description: "Pure black for a deeper dark",
    background: "#000000",
    foreground: "#f2fffd",
    accent: "#80f8ea",
    sample: "A quiet place for your next chapter.",
  },
];

export function useReadingAppearanceService() {
  const appearance = useOnboardingStore((state) => state.appearance);
  const setAppearance = useOnboardingStore((state) => state.setAppearance);

  function onSelectAppearance(option: ReadingAppearance) {
    setAppearance(option);
  }

  return {
    appearance,
    setAppearance: onSelectAppearance,
  };
}
