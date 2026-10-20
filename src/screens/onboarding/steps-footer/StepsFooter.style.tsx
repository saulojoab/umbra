import styled from "@emotion/native";

import { theme } from "@/theme";

export const Footer = styled.View({ marginTop: theme.spacing.large });

export const ButtonRow = styled.View({
  flexDirection: "row",
  alignItems: "stretch",
  gap: theme.spacing.medium,
});

export const ButtonCell = styled.View({ flex: 1 });

export const ErrorMessage = styled.Text({
  marginBottom: theme.spacing.medium,
  color: theme.colors.error,
  fontSize: theme.typography.body,
});
