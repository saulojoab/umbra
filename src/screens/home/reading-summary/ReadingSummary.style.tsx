import styled from "@emotion/native";

import { theme } from "@/theme";

export const SummaryContainer = styled.View({
  flexDirection: "row",
  borderWidth: 1,
  borderColor: theme.borders.medium,
  backgroundColor: theme.colors.panelMuted,
});

export const Metric = styled.View({
  flex: 1,
  minHeight: 76,
  justifyContent: "center",
  paddingHorizontal: 8,
  borderRightWidth: 1,
  borderRightColor: theme.borders.subtle,
});

export const MetricValue = styled.Text({
  color: theme.colors.ink,
  fontSize: 25,
  fontWeight: "300",
  letterSpacing: -0.6,
});

export const MetricLabel = styled.Text({
  marginTop: 5,
  color: theme.colors.signalSoft,
  fontSize: 7,
  fontWeight: "800",
  letterSpacing: 0.7,
});
