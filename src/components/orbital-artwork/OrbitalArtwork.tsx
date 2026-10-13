import type { OrbitalArtworkProps } from './OrbitalArtwork.type';
import { defaultArtworkLabel } from './OrbitalArtwork.service';
import { Artwork, Code, Crosshair, Crystal, Glow, Orbit } from './OrbitalArtwork.style';

export default function OrbitalArtwork({ accessibilityLabel = defaultArtworkLabel }: OrbitalArtworkProps) {
  return (
    <Artwork accessibilityLabel={accessibilityLabel}>
      <Glow />
      <Orbit $variant="one" />
      <Orbit $variant="two" />
      <Crystal $variant="large" />
      <Crystal $variant="small" />
      <Crosshair $axis="horizontal" />
      <Crosshair $axis="vertical" />
      <Code>A / 07</Code>
      <Code $bottom>NIGHT—ARCHIVE</Code>
    </Artwork>
  );
}
