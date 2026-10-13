import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { NavigationBar } from "expo-navigation-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "@/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <>
          <NavigationBar hidden />
          <Stack screenOptions={{ headerShown: false }} />
        </>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
