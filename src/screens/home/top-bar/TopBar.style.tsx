import styled from "@emotion/native";

import { theme } from "@/theme";

export const TopBarContainer = styled.View({
  minHeight: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  borderBottomColor: theme.borders.subtle,
});
export const BrandLockup = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing.medium,
});
export const BrandText = styled.View({ gap: 2 });
export const Wordmark = styled.Text({
  color: theme.colors.ink,
  fontSize: theme.typography.wordmark,
  fontWeight: "800",
  letterSpacing: 5,
});
export const WordmarkSub = styled.Text({
  color: theme.colors.signalSoft,
  fontSize: theme.typography.micro,
  fontWeight: "600",
  letterSpacing: 2,
});
export const SystemReadout = styled.View({ alignItems: "flex-end" });
export const ReadoutLabel = styled.Text({
  color: theme.colors.inkMuted,
  fontSize: 9,
  fontWeight: "700",
  letterSpacing: 2,
});
export const OnlineRow = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
  marginTop: 4,
});
export const OnlineDot = styled.View({
  width: 5,
  height: 5,
  borderRadius: 3,
  backgroundColor: theme.colors.online,
});
export const OnlineText = styled.Text({
  color: theme.colors.online,
  fontSize: theme.typography.micro,
  fontWeight: "700",
  letterSpacing: 1.5,
});
