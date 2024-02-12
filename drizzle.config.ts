import { serverEnv } from "@/serverEnv.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*",
  out: "./src/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: serverEnv.CONNECTION_STRING,
  },
} satisfies Config;
