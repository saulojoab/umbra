import { describe, expect, it } from "vitest";

import { getContinueLabel } from "./StepsFooter.service";

describe("StepsFooter service", () => {
  it.each([
    [false, "Continue"],
    [true, "Saving…"],
  ])("returns the correct label while busy=%s", (isBusy, expected) => {
    expect(getContinueLabel("Continue", isBusy, "Saving…")).toBe(expected);
  });
});
