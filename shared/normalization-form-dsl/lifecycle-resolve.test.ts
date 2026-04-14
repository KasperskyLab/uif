import { describe, it, expect, vi } from 'vitest'
import {
  resolveTsModulePathFromValue,
  isLazyDynamicImportFn,
  resolveLifecycleHandler,
  resolveConfigHookFactory,
} from './lifecycle-resolve'

describe('lifecycle-resolve', () => {
  it('extracts path from lazy import wrapper', () => {
    const fn = () => undefined
    Object.defineProperty(fn, 'length', { value: 0 })
    Object.defineProperty(fn, 'toString', {
      value: () => "() => import('./demo.data.ts')",
    })
    expect(resolveTsModulePathFromValue(fn)).toBe('./demo.data.ts')
    expect(isLazyDynamicImportFn(fn)).toBe(true)
  })

  it('direct lifecycle fn has arity >= 1', async () => {
    const onInit = (slice: { mergeState?: (p: Record<string, unknown>) => void }) => {
      slice.mergeState?.({ a: 1 })
    }
    const dir = {} as FileSystemDirectoryHandle
    const loadTs = vi.fn()
    const out = await resolveLifecycleHandler(onInit, 'onInit', dir, loadTs)
    expect(out).toBe(onInit)
    expect(loadTs).not.toHaveBeenCalled()
  })

  it('resolves onInit from lazy import via loadTsModule', async () => {
    const lazy = () => undefined
    Object.defineProperty(lazy, 'length', { value: 0 })
    Object.defineProperty(lazy, 'toString', {
      value: () => "() => import('./m.ts')",
    })
    const onInit = vi.fn()
    const loadTs = vi.fn().mockResolvedValue({ onInit })
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveLifecycleHandler(lazy, 'onInit', dir, loadTs)
    expect(loadTs).toHaveBeenCalledWith(dir, './m.ts')
    expect(out).toBe(onInit)
  })

  it('resolveConfigHookFactory loads by path', async () => {
    const factory = () => ({ x: () => null })
    const loadDef = vi.fn().mockResolvedValue(factory)
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveConfigHookFactory('hook.ts', dir, loadDef)
    expect(loadDef).toHaveBeenCalledWith(dir, 'hook.ts')
    expect(out).toBe(factory)
  })

  it('resolveConfigHookFactory uses inline factory when not lazy import', async () => {
    const factory = () => ({ 'id1': () => null })
    const loadDef = vi.fn()
    const out = await resolveConfigHookFactory(factory, null, loadDef)
    expect(out).toBe(factory)
    expect(loadDef).not.toHaveBeenCalled()
  })
})
