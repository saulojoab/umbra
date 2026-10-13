import type { HomeNavItem } from "../HomeScreen.type";

export type BottomNavProps = {
  activeNav: HomeNavItem;
  onChangeNav: (navItem: HomeNavItem) => void;
};
