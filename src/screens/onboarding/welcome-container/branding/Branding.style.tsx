import { theme } from "@/theme";
import styled from "@emotion/native";

export const Brand = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  marginBottom: 30,
});

export const BrandMark = styled.Text({
  width: 32,
  height: 32,
  borderWidth: 1,
  borderColor: theme.borders.bright,
  borderRadius: 16,
  color: theme.colors.signal,
  fontSize: 17,
  lineHeight: 30,
  textAlign: "center",
});

export const BrandName = styled.Text({
  color: theme.colors.ink,
  fontSize: 12,
  fontWeight: "700",
  letterSpacing: 4,
});

export const Divider = styled.View({
  width: 42,
  height: 2,
  marginBottom: 22,
  backgroundColor: theme.colors.signal,
});
