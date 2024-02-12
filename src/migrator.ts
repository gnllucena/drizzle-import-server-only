import { serverEnv } from "@/serverEnv.mjs"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

const connection = postgres(serverEnv.CONNECTION_STRING, {
  max: 1,
})

migrate(drizzle(connection), {
  migrationsFolder: "./src/server/data/migrations",
  migrationsTable: "migrations",
})
