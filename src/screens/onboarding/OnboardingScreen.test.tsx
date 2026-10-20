import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useOnboardingStore } from "@/stores/onboardingStore";

import { useOnboardingFlow } from "./OnboardingScreen.service";

const routerReplace = vi.hoisted(() => vi.fn());
vi.mock("expo-router", () => ({ router: { replace: routerReplace } }));
vi.mock("@/data/libraryRepository", () => ({ readLibraryBooks: vi.fn() }));
vi.mock("@/data/onboardingRepository", () => ({
  loadOnboardingData: vi.fn(),
  saveOnboardingData: vi.fn(),
}));

describe("OnboardingScreen service", () => {
  beforeEach(() => {
    routerReplace.mockReset();
    useOnboardingStore.setState({
      readerName: "",
      libraryFolder: null,
      hydrated: false,
      completed: false,
      hydrate: vi.fn(async () => undefined),
      complete: vi.fn(async () => undefined),
    });
  });

  it("moves through onboarding steps without exceeding its bounds", () => {
    const { result } = renderHook(() => useOnboardingFlow());

    act(() => result.current.begin());
    expect(result.current.step).toBe(1);
    act(() => {
      result.current.goForward();
      result.current.goForward();
      result.current.goForward();
      result.current.goForward();
    });
    expect(result.current.step).toBe(3);
    act(() => {
      result.current.goBack();
      result.current.goBack();
      result.current.goBack();
      result.current.goBack();
    });
    expect(result.current.step).toBe(0);
  });

  it("does not finish until the required onboarding data exists", async () => {
    const { result } = renderHook(() => useOnboardingFlow());

    await act(async () => result.current.handleFinish());

    expect(routerReplace).not.toHaveBeenCalled();
    expect(result.current.isSaving).toBe(false);
  });

  it("saves valid onboarding data and navigates home", async () => {
    const complete = vi.fn(async () => undefined);
    useOnboardingStore.setState({
      readerName: "  Ada  ",
      libraryFolder: { uri: "content://books", name: "Books" },
      complete,
    });
    const { result } = renderHook(() => useOnboardingFlow());

    await act(async () => result.current.handleFinish());

    expect(complete).toHaveBeenCalledOnce();
    expect(routerReplace).toHaveBeenCalledWith("/home");
    expect(result.current.error).toBeNull();
  });

  it("surfaces save errors and does not navigate", async () => {
    const complete = vi.fn(async () => {
      throw new Error("database unavailable");
    });
    useOnboardingStore.setState({
      readerName: "Ada",
      libraryFolder: { uri: "content://books", name: "Books" },
      complete,
    });
    const { result } = renderHook(() => useOnboardingFlow());

    await act(async () => result.current.handleFinish());

    expect(result.current.error).toBe(
      "Your setup could not be saved. Please try again.",
    );
    expect(routerReplace).not.toHaveBeenCalled();
  });
});
