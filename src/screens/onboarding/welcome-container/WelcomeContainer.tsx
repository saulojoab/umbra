import Button from "@/components/button/Button";
import Branding from "./branding/Branding";
import {
  Container,
  Copy,
  Eyebrow,
  StepLabel,
  WelcomeTitle,
} from "./WelcomeContainer.style";
import type { WelcomeContainerProps } from "./WelcomeContainer.type";

export default function WelcomeContainer({ onBegin }: WelcomeContainerProps) {
  return (
    <Container>
      <Branding />

      <Eyebrow>A READING SPACE, REIMAGINED</Eyebrow>
      <WelcomeTitle>Welcome to Umbra.</WelcomeTitle>
      <Copy>
        A simple, elegant e-reader made for your Ayn Thor. Find a little quiet,
        and settle into your next book.
      </Copy>

      <Button
        label="Get started"
        onPress={onBegin}
        accessibilityLabel="Get started with Umbra"
        marginTop={34}
        showArrow
      />

      <StepLabel>YOUR LIBRARY BEGINS HERE</StepLabel>
    </Container>
  );
}
