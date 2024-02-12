import { $ } from "bun"

const execution = await $`drizzle-kit generate:pg`.text()

console.log(execution)
