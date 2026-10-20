import styled from "@emotion/native";

import { theme } from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const Screen = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

export const OnboardingContainer = styled(SafeAreaView)({
  flex: 1,
  paddingHorizontal: theme.spacing.screen,
  paddingTop: theme.spacing.section,
  paddingBottom: theme.spacing.large,
});
