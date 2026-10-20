import { router } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";

import Button from "@/components/button/Button";
import { LightStatusBar } from "@/components/status-bar/StatusBar.style";
import { useOnboardingStore } from "@/stores/onboardingStore";
import {
  AmbientShape,
  Console,
  SafeAreaContainer,
  Screen,
} from "./HomeScreen.style";
import IntroBlock from "./intro-block/IntroBlock";
import RecentBooks from "./recent-books/RecentBooks";
import ReadingSummary from "./reading-summary/ReadingSummary";
import SectionHeader from "./section-header/SectionHeader";
import TopBar from "./top-bar/TopBar";

export default function HomeScreen() {
  const importedBooks = useOnboardingStore((state) => state.books);
  const readerName = useOnboardingStore((state) => state.readerName);
  const refreshLibrary = useOnboardingStore((state) => state.refreshLibrary);

  useEffect(() => {
    void refreshLibrary();
  }, [refreshLibrary]);

  return (
    <Screen>
      <LightStatusBar />
      <AmbientShape $variant="ring" />
      <AmbientShape $variant="beam" />
      <SafeAreaContainer>
        <Console accessibilityLabel="Umbra reader home">
          <ScrollView showsVerticalScrollIndicator={false}>
            <TopBar />
            <IntroBlock readerName={readerName} />
            <ReadingSummary />
            <SectionHeader
              title="LATEST BOOKS"
              withTopGap
              action={
                <Button
                  label="OPEN LIBRARY"
                  onPress={() => router.push("/library")}
                  variant="secondary"
                  showArrow
                  accessibilityLabel="Open book library"
                />
              }
            />
            <RecentBooks importedBooks={importedBooks} />
          </ScrollView>
        </Console>
      </SafeAreaContainer>
    </Screen>
  );
}
