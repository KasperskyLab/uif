import registryData from "./generated.json"
import type { ComponentRegistry } from "./types.ts"

export const registry = registryData as unknown as ComponentRegistry
