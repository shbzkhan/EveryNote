import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  category: text('category'),
  createdAt: timestamp('created_at').defaultNow(),
});
