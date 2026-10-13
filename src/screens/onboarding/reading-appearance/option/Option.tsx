import {
  Option,
  OptionDescription,
  OptionName,
  OptionTop,
  Sample,
  SampleEyebrow,
  SampleText,
  SelectedMark,
} from "./Option.style";
import { IReadingOption } from "./Option.type";

export default function ReadingOption({
  option,
  selected,
  onSelect,
}: IReadingOption) {
  return (
    <Option
      key={option.id}
      $selected={selected}
      onPress={onSelect}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
    >
      <OptionTop>
        <OptionName>{option.name}</OptionName>
        {selected && <SelectedMark>SELECTED</SelectedMark>}
      </OptionTop>

      <OptionDescription>{option.description}</OptionDescription>

      <Sample $background={option.background}>
        <SampleEyebrow $color={option.accent}>A READING SAMPLE</SampleEyebrow>
        <SampleText $color={option.foreground}>{option.sample}</SampleText>
      </Sample>
    </Option>
  );
}
