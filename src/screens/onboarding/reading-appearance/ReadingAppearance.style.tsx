import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.ScrollView({ flex: 1 });

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

export const Options = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: 12,
  marginTop: 26,
});

export const Spacer = styled.View({ flex: 1 });
