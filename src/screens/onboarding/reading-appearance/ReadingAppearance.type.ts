import type { ReadingAppearance } from "@/domain/onboarding.type";

export type ReadingAppearanceProps = {
  onBack: () => void;
  onFinish: () => void;
  isSaving: boolean;
  error: string | null;
};

export type AppearanceOption = {
  id: ReadingAppearance;
  name: string;
  description: string;
  background: string;
  foreground: string;
  accent: string;
  sample: string;
};
