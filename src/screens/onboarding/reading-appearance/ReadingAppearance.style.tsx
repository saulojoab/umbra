import styled from "@emotion/native";

import { theme } from "@/theme";

export const Container = styled.ScrollView({ flex: 1 });

export const Eyebrow = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.label,
  fontWeight: "700",
  letterSpacing: theme.tracking.wide,
});

export const Title = styled.Text({
  marginTop: theme.spacing.medium,
  color: theme.colors.primary,
  fontSize: theme.typography.title,
  fontWeight: "300",
  letterSpacing: theme.tracking.tight,
  lineHeight: theme.typography.line,
});

export const Copy = styled.Text({
  marginTop: theme.spacing.medium,
  color: theme.colors.tertiary,
  fontSize: theme.typography.copy,
  lineHeight: theme.typography.line,
});

export const Options = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: theme.spacing.medium,
  marginTop: theme.spacing.section,
});

export const Spacer = styled.View({ flex: 1 });
