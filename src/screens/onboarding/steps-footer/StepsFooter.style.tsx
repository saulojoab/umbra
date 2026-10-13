import styled from "@emotion/native";

export const Footer = styled.View({ marginTop: 20 });

export const ButtonRow = styled.View({
  flexDirection: "row",
  alignItems: "stretch",
  gap: 10,
});

export const ButtonCell = styled.View({ flex: 1 });

export const ErrorMessage = styled.Text({
  marginBottom: 10,
  color: "#ff9eaf",
  fontSize: 12,
});
