import StepsFooter from "../steps-footer/StepsFooter";
import { useReaderNameService } from "./ReaderName.service";
import {
  Container,
  Copy,
  Eyebrow,
  NameInput,
  Spacer,
  Title,
} from "./ReaderName.style";
import type { ReaderNameProps } from "./ReaderName.type";

export default function ReaderName({ onBack, onContinue }: ReaderNameProps) {
  const { continueWithName, hasName, readerName, setReaderName } =
    useReaderNameService(onContinue);

  return (
    <Container>
      <Eyebrow>01 · YOUR PROFILE</Eyebrow>
      <Title>What should we call you?</Title>
      <Copy>Your name will appear in your reading space.</Copy>

      <NameInput
        value={readerName}
        onChangeText={setReaderName}
        placeholder="Your name"
        autoCapitalize="words"
        autoComplete="name"
        autoCorrect={false}
        maxLength={40}
        returnKeyType="done"
        onSubmitEditing={continueWithName}
        accessibilityLabel="Your name"
      />

      <Spacer />

      <StepsFooter
        onBack={onBack}
        onContinue={continueWithName}
        continueLabel="Continue"
        continueAccessibilityLabel="Continue to choose your library folder"
        disabled={!hasName}
      />
    </Container>
  );
}
