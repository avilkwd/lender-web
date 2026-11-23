import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const quotes = sqliteTable("quotes", {
  id: text("id").primaryKey(),
  ownerId: text("owner_id").notNull(),
  payload: text("payload").notNull(),
  updatedAt: text("updated_at").notNull(),
}, (table) => [index("quotes_owner").on(table.ownerId)]);
