import StepsFooter from "../steps-footer/StepsFooter";
import ReadingOption from "./option/Option";
import {
  appearanceOptions,
  useReadingAppearanceService,
} from "./ReadingAppearance.service";
import {
  Container,
  Copy,
  Eyebrow,
  Options,
  Spacer,
  Title,
} from "./ReadingAppearance.style";
import type { ReadingAppearanceProps } from "./ReadingAppearance.type";

export default function ReadingAppearance({
  onBack,
  onFinish,
  isSaving,
  error,
}: ReadingAppearanceProps) {
  const { appearance, setAppearance } = useReadingAppearanceService();

  return (
    <Container>
      <Eyebrow>03 · YOUR READING SPACE</Eyebrow>
      <Title>How do you like to read?</Title>
      <Copy>Choose a look. You can change this any time in settings.</Copy>

      <Options>
        {appearanceOptions.map((option) => {
          const selected = appearance === option.id;
          return (
            <ReadingOption
              key={option.id}
              option={option}
              selected={selected}
              onSelect={() => setAppearance(option.id)}
            />
          );
        })}
      </Options>

      <Spacer />

      <StepsFooter
        onBack={onBack}
        onContinue={onFinish}
        continueLabel="Open my library"
        continueAccessibilityLabel="Finish onboarding and open your library"
        isBusy={isSaving}
        busyLabel="Saving…"
        errorMessage={error}
      />
    </Container>
  );
}
