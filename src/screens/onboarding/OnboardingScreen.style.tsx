import styled from "@emotion/native";

import { theme } from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export const Screen = styled.View({
  flex: 1,
  backgroundColor: theme.colors.void,
});

export const OnboardingContainer = styled(SafeAreaView)({
  flex: 1,
  paddingHorizontal: 22,
  paddingTop: 24,
  paddingBottom: 18,
});
