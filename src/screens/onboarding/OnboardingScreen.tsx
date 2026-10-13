import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOnboardingFlow } from "./OnboardingScreen.service";
import {
  BackButton,
  BackButtonLabel,
  Brand,
  BrandMark,
  BrandName,
  Button,
  ButtonLabel,
  Copy,
  Divider,
  EmptyStepSpace,
  Eyebrow,
  LandingContent,
  OnboardingContent,
  ProgressDot,
  ProgressRow,
  Screen,
  StepLabel,
  WelcomeTitle,
} from "./OnboardingScreen.style";

export default function OnboardingScreen() {
  const { step, begin, goBack, goForward } = useOnboardingFlow();

  return (
    <Screen>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        {step === 0 ? (
          <LandingContent>
            <Brand>
              <BrandMark>U</BrandMark>
              <BrandName>UMBRA</BrandName>
            </Brand>
            <Divider />
            <Eyebrow>A READING SPACE, REIMAGINED</Eyebrow>
            <WelcomeTitle>Welcome to Umbra.</WelcomeTitle>
            <Copy>
              A simple, elegant e-reader made for your Ayn Thor. Find a little
              quiet, and settle into your next book.
            </Copy>
            <Button
              onPress={begin}
              accessibilityRole="button"
              accessibilityLabel="Get started with Umbra"
            >
              <ButtonLabel>Get started</ButtonLabel>
              <ButtonLabel>↗</ButtonLabel>
            </Button>
            <StepLabel>YOUR LIBRARY BEGINS HERE</StepLabel>
          </LandingContent>
        ) : (
          <OnboardingContent>
            <Brand>
              <BrandMark>U</BrandMark>
              <BrandName>UMBRA</BrandName>
            </Brand>
            <ProgressRow accessibilityLabel={`Step ${step} of 3`}>
              {[1, 2, 3].map((item) => (
                <ProgressDot key={item} $active={item === step} />
              ))}
            </ProgressRow>
            <StepLabel>GETTING STARTED · 0{step} / 03</StepLabel>
            <EmptyStepSpace />
            <BackButton onPress={goBack} accessibilityRole="button">
              <BackButtonLabel>BACK</BackButtonLabel>
            </BackButton>
            <Button
              onPress={goForward}
              accessibilityRole="button"
              accessibilityLabel={step === 3 ? "Finish onboarding" : "Continue"}
            >
              <ButtonLabel>{step === 3 ? "Finish" : "Continue"}</ButtonLabel>
              <ButtonLabel>↗</ButtonLabel>
            </Button>
          </OnboardingContent>
        )}
      </SafeAreaView>
    </Screen>
  );
}
