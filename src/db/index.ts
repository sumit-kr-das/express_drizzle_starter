import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { a, user } from "./schema";

const schema = {
  user,
  a
} as const;

export const sql = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(sql, { schema, logger: false });
export default db;
