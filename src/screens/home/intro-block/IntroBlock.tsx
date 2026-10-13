import {
  Eyebrow,
  Heading,
  HeadingRule,
  IntroBlockContainer,
  IntroCopy,
} from "./IntroBlock.style";

export default function IntroBlock({ readerName }: { readerName: string }) {
  return (
    <IntroBlockContainer>
      <Eyebrow numberOfLines={1}>
        GOOD EVENING, {readerName.trim().toUpperCase() || "READER"}
      </Eyebrow>
      <Heading>Enter the{"\n"}quiet signal.</Heading>
      <HeadingRule />
      <IntroCopy>A quiet place for your next transmission.</IntroCopy>
    </IntroBlockContainer>
  );
}
