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
    const data = await m.parseFormTs(`
import { defineFormSchema } from '@normalization/form-dsl'
import { onFormInit, onFormSubmit } from './demo.data'
const lazyHook = () => import('./demo.config-hook')
export default defineFormSchema({
  id: 'demo',
  handlers: { onFormInit, onFormSubmit },
  elements: [{ type: 'text', id: 't1', handlers: { useConfig: lazyHook } }],
})`)
    expect(typeof data.handlers?.onFormInit).toBe('function')
    expect(typeof data.handlers?.onFormSubmit).toBe('function')
    expect(data.configHook).toBeUndefined()
    const el = data.elements[0] as { handlers?: { useConfig?: unknown } }
    expect(typeof el.handlers?.useConfig).toBe('function')
    const onFormInitStr = String(data.handlers!.onFormInit)
    expect(onFormInitStr).toContain('./demo.data.ts')
    const useConfigStr = String(el.handlers!.useConfig)
    expect(useConfigStr).toContain('./demo.config-hook.ts')
  })
})
