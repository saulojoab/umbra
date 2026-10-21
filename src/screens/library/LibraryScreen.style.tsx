import styled from "@emotion/native";

import { theme } from "@/theme";

export const Screen = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background,
});

export const SafeAreaContainer = styled.View({
  flex: 1,
  paddingHorizontal: theme.spacing.screen,
});
