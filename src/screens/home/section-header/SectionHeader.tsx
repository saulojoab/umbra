import {
  SectionHeaderContainer,
  SectionMeta,
  SectionTitle,
} from "./SectionHeader.style";
import type { SectionHeaderProps } from "./SectionHeader.type";

export default function SectionHeader({
  title,
  meta,
  withTopGap,
  action,
}: SectionHeaderProps) {
  return (
    <SectionHeaderContainer $withTopGap={withTopGap}>
      <SectionTitle>{title}</SectionTitle>
      {action ?? (meta ? <SectionMeta>{meta}</SectionMeta> : null)}
    </SectionHeaderContainer>
  );
}
