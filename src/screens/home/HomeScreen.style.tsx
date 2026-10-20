import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/theme";

export const Screen = styled.View({
  flex: 1,
  overflow: "hidden",
  backgroundColor: theme.colors.background,
});

export const SafeAreaContainer = styled(SafeAreaView)({
  flex: 1,
  overflow: "hidden",
});

export const AmbientShape = styled.View<{ $variant: "ring" | "beam" }>(
  ({ $variant }) => ({
    position: "absolute",
    ...($variant === "ring"
      ? {
          top: -110,
          right: -100,
          width: 260,
          height: 260,
          borderRadius: theme.radii.circle,
          borderWidth: theme.borders.hairline,
          borderColor: theme.colors.accent,
          transform: [{ rotate: "28deg" }],
        }
      : {
          top: 150,
          left: -150,
          width: 280,
          height: theme.borders.hairline,
          backgroundColor: theme.colors.highlight,
          transform: [{ rotate: "-34deg" }],
        }),
  }),
);

export const Console = styled.View({
  flex: 1,
  overflow: "hidden",
  paddingHorizontal: theme.spacing.screen,
  paddingBottom: theme.spacing.small,
});
