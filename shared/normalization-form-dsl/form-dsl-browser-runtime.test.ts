import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('loadFormDslBrowserRuntime', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('returns the same promise on repeated calls (single lazy chunk)', async () => {
    const { loadFormDslBrowserRuntime } = await import('./load-form-dsl-runtime')
    const a = loadFormDslBrowserRuntime()
    const b = loadFormDslBrowserRuntime()
    expect(a).toBe(b)
    const m = await a
    expect(typeof m.parseFormTs).toBe('function')
    expect(typeof m.formToTs).toBe('function')
    expect(typeof m.transpileConfigHookSource).toBe('function')
  })

  it('parseFormTs normalizes default export (with blob URL)', async () => {
    const hasBlobURL =
      typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'
    if (!hasBlobURL) return

    const { loadFormDslBrowserRuntime } = await import('./load-form-dsl-runtime')
    const m = await loadFormDslBrowserRuntime()
    const data = await m.parseFormTs(`export default {
      id: "lazy-1",
      elements: [{ type: "text", id: "t1" }]
    }`)
    expect(data.id).toBe('lazy-1')
    expect(data.elements).toHaveLength(1)
  })

  it('parseFormTs rewrites relative imports with dotted names to lazy fns with .ts extension', async () => {
    const hasBlobURL =
      typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'
    if (!hasBlobURL) return

    const { loadFormDslBrowserRuntime } = await import('./load-form-dsl-runtime')
    const m = await loadFormDslBrowserRuntime()
    // demo.data has a dot in filename but no .ts extension in import
    const data = await m.parseFormTs(`
import { defineFormSchema } from '@normalization/form-dsl'
import { onInit, onSubmit } from './demo.data'
import { configHook } from './demo.config-hook'
export default defineFormSchema({
  id: 'demo',
  configHook,
  handlers: { onInit, onSubmit },
  elements: [],
})`)
    // Handlers should be stored as lazy functions (not null/undefined)
    expect(typeof data.handlers?.onInit).toBe('function')
    expect(typeof data.handlers?.onSubmit).toBe('function')
    expect(typeof data.configHook).toBe('function')
    // Path must end with .ts (not just ./demo.data)
    const onInitStr = String(data.handlers!.onInit)
    expect(onInitStr).toContain('./demo.data.ts')
    const configHookStr = String(data.configHook)
    expect(configHookStr).toContain('./demo.config-hook.ts')
  })
})
