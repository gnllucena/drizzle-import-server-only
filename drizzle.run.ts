import { $ } from "bun"

const execution = await $`bun run ./src/server/data/migrator.ts`.text()

console.log(execution)
