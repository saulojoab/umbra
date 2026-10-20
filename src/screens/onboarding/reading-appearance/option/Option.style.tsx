import { theme } from "@/theme";
import styled from "@emotion/native";

export const Option = styled.Pressable<{ $selected: boolean }>(
  ({ $selected }) => ({
    padding: theme.spacing.medium,
    borderRadius: theme.radii.medium,
    borderWidth: $selected ? theme.borders.selected : theme.borders.hairline,
    borderColor: $selected ? theme.colors.accent : theme.borders.subtle,
    backgroundColor: theme.colors.surfaceMuted,
    width: "48%",
    flexGrow: 0,
    flexShrink: 0,
  }),
);

export const OptionTop = styled.View({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const OptionName = styled.Text({
  color: theme.colors.primary,
  fontSize: theme.typography.copy,
  fontWeight: "700",
});

export const OptionDescription = styled.Text({
  marginTop: theme.spacing.micro,
  color: theme.colors.tertiary,
  fontSize: theme.typography.body,
});

export const Sample = styled.View<{ $background: string }>(
  ({ $background }) => ({
    marginTop: theme.spacing.medium,
    padding: theme.spacing.medium,
    borderRadius: theme.radii.small,
    backgroundColor: $background,
  }),
);

export const SampleEyebrow = styled.Text<{ $color: string }>(({ $color }) => ({
  color: $color,
  fontSize: theme.typography.micro,
  letterSpacing: theme.tracking.label,
}));

export const SampleText = styled.Text<{ $color: string }>(({ $color }) => ({
  marginTop: theme.spacing.small,
  color: $color,
  fontFamily: "serif",
  fontSize: theme.typography.copy,
  lineHeight: theme.typography.line,
}));

export const SelectedMark = styled.Text({
  color: theme.colors.accent,
  fontSize: theme.typography.button,
  fontWeight: "700",
});
