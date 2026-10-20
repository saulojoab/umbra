import { describe, expect, it } from "vitest";

import { defaultSignalMarkLabel } from "./SignalMark.service";

describe("SignalMark service", () => {
  it("provides the accessible default label", () => {
    expect(defaultSignalMarkLabel).toBe("Umbra signal");
  });
});
