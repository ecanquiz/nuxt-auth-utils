import { timestamp } from "drizzle-orm/gel-core";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  login: text("login"),
  password: text("password"), //.notNull(),
});

export const loginAttempts = sqliteTable("login_attempts", {
  id: integer("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  ip: text("ip").notNull(),
  timestamp: integer("timestamp").notNull(),
  success: text("success").notNull(),
});