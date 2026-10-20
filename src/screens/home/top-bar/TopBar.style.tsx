import styled from "@emotion/native";

import { theme } from "@/theme";

export const TopBarContainer = styled.View({
  minHeight: theme.spacing.section,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing.medium,
  borderBottomWidth: theme.borders.hairline,
  borderBottomColor: theme.borders.subtle,
});

export const BrandLockup = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing.medium,
});

export const BrandText = styled.View({ gap: theme.spacing.tiny });

export const Wordmark = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.title,
  fontWeight: "800",
  letterSpacing: theme.tracking.wordmark,
});

export const WordmarkSub = styled.Text({
  color: theme.colors.secondary,
  fontSize: theme.typography.micro,
  fontWeight: "600",
  letterSpacing: theme.tracking.wide,
});

export const SystemReadout = styled.View({ alignItems: "flex-end" });

export const ReadoutLabel = styled.Text({
  color: theme.colors.tertiary,
  fontSize: theme.typography.label,
  fontWeight: "700",
  letterSpacing: theme.tracking.wide,
});

export const OnlineRow = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing.small,
  marginTop: theme.spacing.micro,
});

export const OnlineDot = styled.View({
  width: theme.spacing.small,
  height: theme.spacing.small,
  borderRadius: theme.spacing.tiny,
  backgroundColor: theme.colors.success,
});

export const OnlineText = styled.Text({
  color: theme.colors.success,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: theme.tracking.label,
});
