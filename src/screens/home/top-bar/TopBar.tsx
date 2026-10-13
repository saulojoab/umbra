import SignalMark from "@/components/signal-mark/SignalMark";

import {
  BrandLockup,
  BrandText,
  OnlineDot,
  OnlineRow,
  OnlineText,
  ReadoutLabel,
  SystemReadout,
  TopBarContainer,
  Wordmark,
  WordmarkSub,
} from "./TopBar.style";

export default function TopBar() {
  return (
    <TopBarContainer>
      <BrandLockup>
        <SignalMark />
        <BrandText>
          <Wordmark>UMBRA</Wordmark>
          <WordmarkSub>READER / NODE 01</WordmarkSub>
        </BrandText>
      </BrandLockup>
      <SystemReadout>
        <ReadoutLabel>THOR</ReadoutLabel>
        <OnlineRow>
          <OnlineDot />
          <OnlineText>ONLINE</OnlineText>
        </OnlineRow>
      </SystemReadout>
    </TopBarContainer>
  );
}
