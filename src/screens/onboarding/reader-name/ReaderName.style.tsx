import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.View({ flex: 1 });
export const Eyebrow = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: 10,
  fontWeight: "700",
  letterSpacing: 2,
});
export const Title = styled.Text({
  marginTop: 12,
  color: theme.colors.ink,
  fontSize: 34,
  fontWeight: "300",
  letterSpacing: -1.1,
  lineHeight: 39,
});
export const Copy = styled.Text({
  marginTop: 12,
  color: theme.colors.inkMuted,
  fontSize: 15,
  lineHeight: 23,
});

export const NameInput = styled.TextInput({
  flex: 1,
  marginTop: 30,
  paddingHorizontal: 16,
  borderWidth: 1,
  borderColor: theme.borders.bright,
  borderRadius: 6,
  backgroundColor: theme.colors.panelMuted,
  color: theme.colors.ink,
  fontSize: 30,
  fontFamily: "serif",
});

export const Spacer = styled.View({ flex: 1 });
