import { describe, expect, it } from "vitest";

import { defaultArtworkLabel } from "./OrbitalArtwork.service";

describe("OrbitalArtwork service", () => {
  it("provides the accessible default label", () => {
    expect(defaultArtworkLabel).toBe("Abstract blue crystalline artwork");
  });
});
