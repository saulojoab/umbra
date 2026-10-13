import type { SignalMarkProps } from './SignalMark.type';
import { defaultSignalMarkLabel } from './SignalMark.service';
import { Diamond, Dot, Line, Mark } from './SignalMark.style';

export default function SignalMark({ accessibilityLabel = defaultSignalMarkLabel }: SignalMarkProps) {
  return (
    <Mark accessibilityLabel={accessibilityLabel}>
      <Diamond />
      <Line />
      <Dot $position="top" />
      <Dot $position="bottom" />
    </Mark>
  );
}
