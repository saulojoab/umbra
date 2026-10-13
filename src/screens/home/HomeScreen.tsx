import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useOnboardingStore } from "@/stores/onboardingStore";
import BottomNav from "./bottom-nav/BottomNav";
import { AmbientShape, Console, Screen } from "./HomeScreen.style";
import IntroBlock from "./intro-block/IntroBlock";
import RecentSignals from "./recent-signals/RecentSignals";
import SectionHeader from "./section-header/SectionHeader";
import {
  ViewAll,
  ViewAllPressable,
} from "./section-header/SectionHeader.style";
import TopBar from "./top-bar/TopBar";

export default function HomeScreen() {
  const [activeNav, setActiveNav] = useState<"signal" | "library" | "system">(
    "signal",
  );
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
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
          <TopBar />
          <IntroBlock readerName={readerName} />
          <SectionHeader title="CONTINUE READING" meta="01 / 03" />
          <SectionHeader
            title="RECENT SIGNALS"
            withTopGap
            action={
              <ViewAllPressable
                onPress={() => setActiveNav("library")}
                accessibilityRole="button"
                accessibilityLabel="View all recent signals"
              >
                <ViewAll>VIEW ALL ↗</ViewAll>
              </ViewAllPressable>
            }
          />
          <RecentSignals
            selectedBook={selectedBook}
            onSelectBook={setSelectedBook}
            importedBooks={importedBooks}
          />
          <BottomNav activeNav={activeNav} onChangeNav={setActiveNav} />
        </Console>
      </SafeAreaView>
    </Screen>
  );
}
