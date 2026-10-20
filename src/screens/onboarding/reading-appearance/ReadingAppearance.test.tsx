import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useOnboardingStore } from "@/stores/onboardingStore";

import {
  appearanceOptions,
  useReadingAppearanceService,
} from "./ReadingAppearance.service";

vi.mock("@/data/libraryRepository", () => ({ readLibraryBooks: vi.fn() }));
vi.mock("@/data/onboardingRepository", () => ({
  loadOnboardingData: vi.fn(),
  saveOnboardingData: vi.fn(),
}));

describe("ReadingAppearance service", () => {
  beforeEach(() => {
    useOnboardingStore.setState({ appearance: "dark" });
  });

  it("offers all supported appearances", () => {
    expect(appearanceOptions.map((option) => option.id)).toEqual([
      "light",
      "paper",
      "dark",
      "umbra",
    ]);
  });

  it("updates the selected appearance", () => {
    const { result } = renderHook(() => useReadingAppearanceService());

    act(() => result.current.setAppearance("paper"));

    expect(result.current.appearance).toBe("paper");
    expect(useOnboardingStore.getState().appearance).toBe("paper");
  });
});
