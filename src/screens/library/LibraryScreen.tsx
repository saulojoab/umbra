import { LightStatusBar } from "@/components/status-bar/StatusBar.style";
import LibraryControls from "./library-controls/LibraryControls";
import LibraryGrid from "./library-grid/LibraryGrid";
import LibraryHeader from "./library-header/LibraryHeader";
import { SafeAreaContainer, Screen } from "./LibraryScreen.style";
import { useLibraryScreenService } from "./LibraryScreen.service";

export default function LibraryScreen() {
  const {
    books,
    filterOptions,
    getProgress,
    handleRefresh,
    isRefreshing,
    progressFilter,
    setProgressFilter,
    sort,
    toggleSort,
  } = useLibraryScreenService();

  return (
    <Screen>
      <LightStatusBar />
      <SafeAreaContainer>
        <LibraryHeader />
        <LibraryControls
          filterOptions={filterOptions}
          onChangeProgressFilter={setProgressFilter}
          onToggleSort={toggleSort}
          progressFilter={progressFilter}
          sort={sort}
        />
        <LibraryGrid
          books={books}
          getProgress={getProgress}
          isRefreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </SafeAreaContainer>
    </Screen>
  );
}
