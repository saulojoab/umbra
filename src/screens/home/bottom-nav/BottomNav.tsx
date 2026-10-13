import {
  BottomNavContainer,
  NavIcon,
  NavLabel,
  NavLabelActive,
  NavPressable,
} from "./BottomNav.style";
import type { BottomNavProps } from "./BottomNav.type";

const navItems = [
  { key: "signal", icon: "◈", label: "SIGNAL" },
  { key: "library", icon: "⌁", label: "LIBRARY" },
  { key: "system", icon: "⊙", label: "SYSTEM" },
] as const;

export default function BottomNav({ activeNav, onChangeNav }: BottomNavProps) {
  return (
    <BottomNavContainer>
      {navItems.map((item) => {
        const isActive = activeNav === item.key;
        const Label = isActive ? NavLabelActive : NavLabel;

        return (
          <NavPressable
            key={item.key}
            $active={isActive}
            onPress={() => onChangeNav(item.key)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: isActive }}
          >
            <NavIcon>{item.icon}</NavIcon>
            <Label>{item.label}</Label>
          </NavPressable>
        );
      })}
    </BottomNavContainer>
  );
}
