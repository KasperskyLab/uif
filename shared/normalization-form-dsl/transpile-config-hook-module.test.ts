import { describe, it, expect } from 'vitest'
import {
  transpileConfigHookSource,
  isConfigHookPathTs,
} from './transpile-config-hook-module'

describe('transpileConfigHookSource', () => {
  it('strips TypeScript types from default export function', () => {
    const src = `
export interface FormSlice { state: Record<string, unknown> }
export default function hook(s: FormSlice): Record<string, unknown> | null {
  return { text: 'x' }
}
`
    const js = transpileConfigHookSource(src)
    expect(js).not.toMatch(/:\s*FormSlice/)
    expect(js).toMatch(/export default function hook/)
    expect(js).toMatch(/return \{ text: 'x' \}/)
  })
})

describe('isConfigHookPathTs', () => {
  it('accepts .ts paths', () => {
    expect(isConfigHookPathTs('handlers/a.ts')).toBe(true)
    expect(isConfigHookPathTs('h.TS')).toBe(true)
  })
  it('rejects .js', () => {
    expect(isConfigHookPathTs('handlers/a.js')).toBe(false)
  })
})
