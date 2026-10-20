import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/button/Button";
import { useOnboardingStore } from "@/stores/onboardingStore";
import { AmbientShape, Console, Screen } from "./HomeScreen.style";
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
      <StatusBar style="light" />
      <AmbientShape $variant="ring" />
      <AmbientShape $variant="beam" />
      <SafeAreaView style={{ flex: 1, overflow: "hidden" }}>
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
      </SafeAreaView>
    </Screen>
  );
}
