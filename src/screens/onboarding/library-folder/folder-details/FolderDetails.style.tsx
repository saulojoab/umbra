import { theme } from "@/theme";
import styled from "@emotion/native";

export const FolderDetailsContainer = styled.View({
  marginTop: 18,
  padding: 16,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: theme.borders.subtle,
  backgroundColor: theme.colors.panel,
});

export const FolderName = styled.Text({
  color: theme.colors.ink,
  fontSize: 15,
  fontWeight: "700",
});

export const FolderMeta = styled.Text({
  marginTop: 5,
  color: theme.colors.inkMuted,
  fontSize: 11,
});
