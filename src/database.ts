import "server-only"

import { serverEnv } from "@/serverEnv.mjs"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: serverEnv.CONNECTION_STRING,
})

export const db = drizzle(pool)
