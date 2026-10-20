import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useOnboardingStore } from "@/stores/onboardingStore";

import { useReaderNameService } from "./ReaderName.service";

vi.mock("@/data/libraryRepository", () => ({ readLibraryBooks: vi.fn() }));
vi.mock("@/data/onboardingRepository", () => ({
  loadOnboardingData: vi.fn(),
  saveOnboardingData: vi.fn(),
}));

describe("ReaderName service", () => {
  beforeEach(() => {
    useOnboardingStore.setState({ readerName: "" });
  });

  it("reports whether the current name contains usable text", () => {
    const { result } = renderHook(() => useReaderNameService(vi.fn()));
    expect(result.current.hasName).toBe(false);

    act(() => result.current.setReaderName("  Ada  "));
    expect(result.current.hasName).toBe(true);
  });

  it("trims the name and continues when it is valid", () => {
    const onContinue = vi.fn();
    const { result } = renderHook(() => useReaderNameService(onContinue));

    act(() => result.current.setReaderName("  Ada Lovelace  "));
    act(() => result.current.continueWithName());

    expect(useOnboardingStore.getState().readerName).toBe("Ada Lovelace");
    expect(onContinue).toHaveBeenCalledOnce();
  });

  it("does not continue when the name is blank", () => {
    const onContinue = vi.fn();
    const { result } = renderHook(() => useReaderNameService(onContinue));

    act(() => result.current.continueWithName());

    expect(onContinue).not.toHaveBeenCalled();
  });
});
