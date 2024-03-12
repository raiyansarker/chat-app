import { createId } from "@paralleldrive/cuid2";
import { int, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./utils";
import { relations, sql } from "drizzle-orm";
import { messages } from "./message";

export const chats = createTable("chat", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int("updatedAt", { mode: "timestamp" }),
});

export const chatRelations = relations(chats, ({ many }) => ({
  // users: many(userToChat),
  message: many(messages),
}));
