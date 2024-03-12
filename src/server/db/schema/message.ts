import { index, int, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./utils";
import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import { chats } from "./chat";
import { users } from "./user";

export const messages = createTable(
  "message",
  {
    id: text("id", { length: 255 })
      .notNull()
      .primaryKey()
      .$defaultFn(() => createId()),

    // FIXME: add attachment
    data: text("data"),
    userId: text("user_id", { length: 255 }).notNull(),
    chatId: text("chat_id", { length: 255 }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    chatIdIndex: index("chat_id_idx").on(table.chatId),
    userIdIndex: index("user_idx").on(table.userId),
    createdAtIndex: index("created_at_idx").on(table.createdAt),
  }),
);

export const messageRelations = relations(messages, ({ one }) => ({
  chat: one(chats, {
    fields: [messages.chatId],
    references: [chats.id],
  }),
  user: one(users, {
    fields: [messages.userId],
    references: [users.id],
  }),
}));
