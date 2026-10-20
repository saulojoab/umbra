import { Eyebrow, Heading, IntroBlockContainer } from "./IntroBlock.style";
import { IIntroBlock } from "./IntroBlock.type";

export default function IntroBlock({ readerName }: IIntroBlock) {
  return (
    <IntroBlockContainer>
      <Eyebrow numberOfLines={1}>
        WELCOME BACK, {readerName.trim().toUpperCase() || "READER"}
      </Eyebrow>
      <Heading>Your reading{"\n"}at a glance.</Heading>
    </IntroBlockContainer>
  );
}
