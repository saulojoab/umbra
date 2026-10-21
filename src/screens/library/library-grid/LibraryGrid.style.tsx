import styled from "@emotion/native";
import { FlatList } from "react-native";

import { theme } from "@/theme";
import type { LibraryBook } from "../LibraryScreen.type";

export const BookGrid = styled(FlatList<LibraryBook>)({
  flex: 1,
});

export const EmptyState = styled.Text({
  paddingTop: theme.spacing.section,
  color: theme.colors.tertiary,
  fontSize: theme.typography.body,
  textAlign: "center",
});
