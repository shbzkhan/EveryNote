import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('everynote.db');

export function createTables() {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, category TEXT, updated_at TEXT);'
    );
  });
}
