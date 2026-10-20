import { describe, expect, it } from "vitest";

import { useReadingSummaryService } from "./ReadingSummary.service";

describe("ReadingSummary service", () => {
  it("returns the reading metrics in display order", () => {
    expect(useReadingSummaryService().metrics).toEqual([
      { value: "24", label: "MINUTES TODAY" },
      { value: "142", label: "MINUTES THIS WEEK" },
      { value: "03", label: "BOOKS FINISHED" },
    ]);
  });
});
