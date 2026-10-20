import styled from '@emotion/native';

import { theme } from '@/theme';

export const Mark = styled.View({
  width: 27,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
});

export const Diamond = styled.View({
  width: 17,
  height: 17,
  borderWidth: theme.borders.hairline,
  borderColor: theme.colors.accent,
  transform: [{ rotate: "45deg" }],
});

export const Line = styled.View({
  position: "absolute",
  width: theme.borders.hairline,
  height: 30,
  backgroundColor: theme.colors.accent,
  opacity: theme.opacity.disabled,
});

export const Dot = styled.View<{ $position: "top" | "bottom" }>(({ $position }) => ({
  position: "absolute",
  [$position]: 0,
  width: 3,
  height: 3,
  borderRadius: theme.radii.small,
  backgroundColor: theme.colors.accent,
}));
