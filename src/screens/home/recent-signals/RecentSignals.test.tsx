import { describe, expect, it } from "vitest";

import { recentBooks } from "./RecentSignals.service";

describe("RecentSignals service", () => {
  it("exposes the curated recent signal records", () => {
    expect(recentBooks).toHaveLength(2);
    expect(recentBooks[0]).toMatchObject({
      title: "Neuromancer",
      progress: "18%",
      glyph: "N",
    });
    expect(recentBooks[1]).toMatchObject({
      title: "Invisible Cities",
      progress: "04%",
      glyph: "IC",
    });
  });
});
