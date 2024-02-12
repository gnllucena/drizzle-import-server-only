import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const database = process.env.DB_NAME
const port = process.env.DB_PORT

const envs = ["development", "production"]
const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`

export const serverEnv = createEnv({
  server: {
    NODE_ENV: z.enum(envs),
    DB_NAME: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_HOST: z.string().min(1),
    DB_PORT: z.string().min(1),
    CONNECTION_STRING: z.string().min(1),
  },
  runtimeEnv: {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV ?? "development",
    CONNECTION_STRING: connectionString,
  },
})
