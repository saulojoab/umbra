import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useOnboardingStore } from "@/stores/onboardingStore";

import {
  chooseLibraryFolder,
  useLibraryFolderService,
} from "./LibraryFolder.service";

const mocks = vi.hoisted(() => ({
  platform: { OS: "android" },
  requestDirectoryPermissionsAsync: vi.fn(),
  readLibraryBooks: vi.fn(),
}));

vi.mock("react-native", () => ({ Platform: mocks.platform }));
vi.mock("expo-file-system/legacy", () => ({
  StorageAccessFramework: {
    requestDirectoryPermissionsAsync: mocks.requestDirectoryPermissionsAsync,
  },
}));
vi.mock("@/data/libraryRepository", () => ({
  readLibraryBooks: mocks.readLibraryBooks,
}));
vi.mock("@/data/onboardingRepository", () => ({
  loadOnboardingData: vi.fn(),
  saveOnboardingData: vi.fn(),
}));

describe("LibraryFolder service", () => {
  beforeEach(() => {
    mocks.platform.OS = "android";
    mocks.requestDirectoryPermissionsAsync.mockReset();
    mocks.readLibraryBooks.mockReset();
    useOnboardingStore.setState({ libraryFolder: null, books: [] });
  });

  it("returns the selected folder and discovered books", async () => {
    const books = [{ id: "book-1", title: "Dune" }];
    mocks.requestDirectoryPermissionsAsync.mockResolvedValue({
      granted: true,
      directoryUri:
        "content://com.android.externalstorage.documents/tree/primary%3ABooks/document/primary%3ABooks",
    });
    mocks.readLibraryBooks.mockResolvedValue(books);

    await expect(chooseLibraryFolder()).resolves.toEqual({
      folder: { uri: expect.any(String), name: "Books" },
      books,
    });
  });

  it("returns null when folder permission is denied", async () => {
    mocks.requestDirectoryPermissionsAsync.mockResolvedValue({ granted: false });

    await expect(chooseLibraryFolder()).resolves.toBeNull();
    expect(mocks.readLibraryBooks).not.toHaveBeenCalled();
  });

  it("rejects folder selection on unsupported platforms", async () => {
    mocks.platform.OS = "ios";

    await expect(chooseLibraryFolder()).rejects.toThrow(
      "Folder selection is currently available on Android.",
    );
  });

  it("stores a successful selection through the hook", async () => {
    const books = [{ id: "book-1", title: "Dune" }];
    mocks.requestDirectoryPermissionsAsync.mockResolvedValue({
      granted: true,
      directoryUri: "content://books/tree/Books",
    });
    mocks.readLibraryBooks.mockResolvedValue(books);
    const { result } = renderHook(() => useLibraryFolderService());

    await act(async () => result.current.handleChooseFolder());

    expect(result.current.folder).toEqual({
      uri: "content://books/tree/Books",
      name: "Books",
    });
    expect(result.current.books).toEqual(books);
    expect(result.current.isChoosing).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("surfaces selection errors and resets the busy state", async () => {
    mocks.requestDirectoryPermissionsAsync.mockRejectedValue(
      new Error("permission unavailable"),
    );
    const { result } = renderHook(() => useLibraryFolderService());

    await act(async () => result.current.handleChooseFolder());

    expect(result.current.error).toBe("permission unavailable");
    expect(result.current.isChoosing).toBe(false);
  });
});
