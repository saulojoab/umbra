import * as SQLite from "expo-sqlite";

let databasePromise: Promise<SQLite.SQLiteDatabase> | null = null;

export function getLocalDatabase() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync("umbra.db").then(async (db) => {
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS books (
          id TEXT PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          author TEXT,
          format TEXT NOT NULL,
          uri TEXT NOT NULL,
          size INTEGER,
          mimeType TEXT,
          lastModified INTEGER,
          coverUri TEXT,
          coverTextTone TEXT
        );
        CREATE TABLE IF NOT EXISTS preferences (
          key TEXT PRIMARY KEY NOT NULL,
          value TEXT NOT NULL
        );
      `);
      try {
        await db.execAsync("ALTER TABLE books ADD COLUMN coverUri TEXT");
      } catch {
        // The column already exists on databases created after this migration.
      }
      try {
        await db.execAsync("ALTER TABLE books ADD COLUMN coverTextTone TEXT");
      } catch {
        // The column already exists on databases created after this migration.
      }
      return db;
    });
  }

  return databasePromise;
}
