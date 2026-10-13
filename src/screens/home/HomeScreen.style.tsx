import styled from "@emotion/native";

import { theme } from "@/theme";

export const Screen = styled.View({
  flex: 1,
  overflow: "hidden",
  backgroundColor: theme.colors.void,
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
          borderRadius: 130,
          borderWidth: 1,
          borderColor: theme.colors.ring,
          transform: [{ rotate: "28deg" }],
        }
      : {
          top: 150,
          left: -150,
          width: 280,
          height: 1,
          backgroundColor: theme.colors.beam,
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
