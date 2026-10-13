import { theme } from "@/theme";
import styled from "@emotion/native";

export const Option = styled.Pressable<{ $selected: boolean }>(
  ({ $selected }) => ({
    padding: 15,
    borderRadius: 7,
    borderWidth: $selected ? 2 : 1,
    borderColor: $selected ? theme.colors.signal : theme.borders.subtle,
    backgroundColor: theme.colors.panelMuted,
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
  color: theme.colors.ink,
  fontSize: 15,
  fontWeight: "700",
});

export const OptionDescription = styled.Text({
  marginTop: 4,
  color: theme.colors.inkMuted,
  fontSize: 11,
});

export const Sample = styled.View<{ $background: string }>(
  ({ $background }) => ({
    marginTop: 12,
    padding: 13,
    borderRadius: 4,
    backgroundColor: $background,
  }),
);

export const SampleEyebrow = styled.Text<{ $color: string }>(({ $color }) => ({
  color: $color,
  fontSize: 8,
  letterSpacing: 1.4,
}));

export const SampleText = styled.Text<{ $color: string }>(({ $color }) => ({
  marginTop: 6,
  color: $color,
  fontFamily: "serif",
  fontSize: 15,
  lineHeight: 21,
}));

export const SelectedMark = styled.Text({
  color: theme.colors.signal,
  fontSize: 14,
  fontWeight: "700",
});
