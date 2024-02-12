import "server-only";

import { createId } from "@paralleldrive/cuid2";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const customerTable = pgTable("customer", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  serial: serial("serial").unique().notNull(),
  name: varchar("name", {
    length: 255,
  }).notNull(),
});
