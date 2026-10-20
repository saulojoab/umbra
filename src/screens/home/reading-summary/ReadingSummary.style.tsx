import styled from "@emotion/native";

import { theme } from "@/theme";

export const SummaryContainer = styled.View({
  flexDirection: "row",
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.medium,
  backgroundColor: theme.colors.surfaceMuted,
});

export const Metric = styled.View({
  flex: 1,
  minHeight: theme.spacing.section,
  justifyContent: "center",
  paddingVertical: theme.spacing.small,
  paddingHorizontal: theme.spacing.medium,
  borderRightWidth: theme.borders.hairline,
  borderRightColor: theme.borders.subtle,
});

export const MetricValue = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.title,
  fontWeight: "300",
  letterSpacing: theme.tracking.subtle,
});

export const MetricLabel = styled.Text({
  marginTop: theme.spacing.small,
  color: theme.colors.secondary,
  fontSize: theme.typography.micro,
  fontWeight: "800",
  letterSpacing: theme.tracking.label,
});
