import { StatusBar } from "expo-status-bar";

import { useOnboardingFlow } from "./OnboardingScreen.service";
import { OnboardingContainer, Screen } from "./OnboardingScreen.style";

import LibraryFolderStep from "./library-folder/LibraryFolder";
import ReaderName from "./reader-name/ReaderName";
import ReadingAppearance from "./reading-appearance/ReadingAppearance";
import WelcomeContainer from "./welcome-container/WelcomeContainer";

export default function OnboardingScreen() {
  const { step, isSaving, error, begin, goBack, goForward, handleFinish } =
    useOnboardingFlow();

  // TODO: remove this to enable onboarding redirect when completed
  //if (!hydrated || completed) return <Screen />;

  return (
    <Screen>
      <StatusBar style="light" />
      <OnboardingContainer>
        {step === 0 && <WelcomeContainer onBegin={begin} />}

        {step === 1 && <ReaderName onBack={goBack} onContinue={goForward} />}

        {step === 2 && (
          <LibraryFolderStep onBack={goBack} onContinue={goForward} />
        )}

        {step === 3 && (
          <ReadingAppearance
            onBack={goBack}
            onFinish={handleFinish}
            isSaving={isSaving}
            error={error}
          />
        )}
      </OnboardingContainer>
    </Screen>
  );
}
