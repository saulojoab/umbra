import type {
  ImportedBook,
  LibraryFolder,
  OnboardingPreferences,
  ReadingAppearance,
} from "@/domain/onboarding.type";
import { getLocalDatabase } from "./localDatabase";

export async function loadOnboardingData() {
  const db = await getLocalDatabase();
  const rows = await db.getAllAsync<{ key: string; value: string }>(
    "SELECT key, value FROM preferences",
  );
  const values = Object.fromEntries(rows.map(({ key, value }) => [key, value]));
  const books = await db.getAllAsync<ImportedBook>(
    "SELECT id, title, author, format, uri, size, mimeType, lastModified, coverUri, coverTextTone FROM books ORDER BY rowid DESC",
  );

  return {
    preferences: values.completed
      ? {
          appearance: (values.appearance ?? "dark") as ReadingAppearance,
          readerName: values.readerName ?? "",
          completed: true,
        }
      : null,
    books,
    libraryFolder:
      values.libraryFolderUri && values.libraryFolderName
        ? { uri: values.libraryFolderUri, name: values.libraryFolderName }
        : null,
  };
}

export async function saveOnboardingData(
  readerName: string,
  appearance: ReadingAppearance,
  libraryFolder: LibraryFolder,
  books: ImportedBook[],
) {
  const db = await getLocalDatabase();
  await db.withTransactionAsync(async () => {
    await db.runAsync("DELETE FROM books");
    for (const book of books) {
      await db.runAsync(
        "INSERT OR REPLACE INTO books (id, title, author, format, uri, size, mimeType, lastModified, coverUri, coverTextTone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        book.id,
        book.title,
        book.author,
        book.format,
        book.uri,
        book.size,
        book.mimeType,
        book.lastModified,
        book.coverUri ?? null,
        book.coverTextTone ?? null,
      );
    }
    await db.runAsync(
      "INSERT OR REPLACE INTO preferences (key, value) VALUES ('appearance', ?)",
      appearance,
    );
    await db.runAsync(
      "INSERT OR REPLACE INTO preferences (key, value) VALUES ('readerName', ?)",
      readerName,
    );
    await db.runAsync(
      "INSERT OR REPLACE INTO preferences (key, value) VALUES ('completed', 'true')",
    );
    await db.runAsync(
      "INSERT OR REPLACE INTO preferences (key, value) VALUES ('libraryFolderUri', ?)",
      libraryFolder.uri,
    );
    await db.runAsync(
      "INSERT OR REPLACE INTO preferences (key, value) VALUES ('libraryFolderName', ?)",
      libraryFolder.name,
    );
  });
  return { appearance, readerName, completed: true } satisfies OnboardingPreferences;
}
