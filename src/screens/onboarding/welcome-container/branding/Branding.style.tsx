import { theme } from "@/theme";
import styled from "@emotion/native";

export const Brand = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing.medium,
  marginBottom: theme.spacing.display,
});

export const BrandMark = styled.Text({
  width: 32,
  height: 32,
  borderWidth: theme.borders.hairline,
  borderColor: theme.borders.bright,
  borderRadius: theme.radii.circle,
  color: theme.colors.accent,
  fontSize: theme.typography.title,
  lineHeight: theme.spacing.display,
  textAlign: "center",
});

export const BrandName = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.body,
  fontWeight: "700",
  letterSpacing: theme.tracking.brand,
});

export const Divider = styled.View({
  width: 42,
  height: 2,
  marginBottom: theme.spacing.screen,
  backgroundColor: theme.colors.accent,
});
