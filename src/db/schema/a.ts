import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import roles from "../../constants/role";

const a = pgTable("a", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullname: varchar("fullname").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  role: varchar("role", {
    enum: [roles.ADMIN, roles.SUPER_ADMIN, roles.BUYER, roles.OWNER, roles.AGENT, roles.BUILDER],
  }).default(roles.BUYER),
  avatar: varchar("avatar"),
  phone_number: varchar("phone_number").notNull(),
  address: varchar("address"),
  status: varchar("status", {
    enum: ["active", "inactive", "suspended", "deleted"],
  }).default("active"),
  email_verified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

// export const userRelations = relations(user, ({ one, many }) => ({}));

export default a;
