import {
  Eyebrow,
  Heading,
  HeadingRule,
  IntroBlockContainer,
  IntroCopy,
} from "./IntroBlock.style";

export default function IntroBlock() {
  return (
    <IntroBlockContainer>
      <Eyebrow>GOOD EVENING, READER</Eyebrow>
      <Heading>Enter the{"\n"}quiet signal.</Heading>
      <HeadingRule />
      <IntroCopy>A quiet place for your next transmission.</IntroCopy>
    </IntroBlockContainer>
  );
}
