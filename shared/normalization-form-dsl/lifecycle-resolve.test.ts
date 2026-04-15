import { describe, it, expect, vi } from 'vitest'
import {
  resolveTsModulePathFromValue,
  isLazyDynamicImportFn,
  resolveLifecycleHandler,
  resolveControlUseConfig,
  resolveConfigHookFactory,
} from './lifecycle-resolve'

describe('lifecycle-resolve', () => {
  it('extracts path from lazy import wrapper', () => {
    const fn = () => undefined
    Object.defineProperty(fn, 'length', { value: 0 })
    Object.defineProperty(fn, 'toString', {
      value: () => "() => import('./model/demo.data.ts')",
    })
    expect(resolveTsModulePathFromValue(fn)).toBe('./model/demo.data.ts')
    expect(isLazyDynamicImportFn(fn)).toBe(true)
  })

  it('direct lifecycle fn has arity >= 1', async () => {
    const onFormInit = (slice: { mergeState?: (p: Record<string, unknown>) => void }) => {
      slice.mergeState?.({ a: 1 })
    }
    const dir = {} as FileSystemDirectoryHandle
    const loadTs = vi.fn()
    const out = await resolveLifecycleHandler(onFormInit, 'onFormInit', dir, loadTs)
    expect(out).toBe(onFormInit)
    expect(loadTs).not.toHaveBeenCalled()
  })

  it('resolves onFormInit from lazy import (dynamic import)', async () => {
    const onFormInit = vi.fn()
    const lazy = () => Promise.resolve({ onFormInit })
    Object.defineProperty(lazy, 'length', { value: 0 })
    Object.defineProperty(lazy, 'toString', {
      value: () => "() => import('./m.ts')",
    })
    const loadTs = vi.fn()
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveLifecycleHandler(lazy, 'onFormInit', dir, loadTs)
    expect(loadTs).not.toHaveBeenCalled()
    expect(out).toBe(onFormInit)
  })

  it('resolveControlUseConfig returns direct hook when arity >= 1', async () => {
    const hook = (slice: { state: Record<string, unknown> }) => slice.state
    const loadTs = vi.fn()
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveControlUseConfig(hook, 'any-id', dir, loadTs)
    expect(out).toBe(hook)
    expect(loadTs).not.toHaveBeenCalled()
  })

  it('resolveControlUseConfig falls back to loadTsModule when lazy import fails', async () => {
    const gridHook = (_s: { state: Record<string, unknown> }) => ({ cols: 2 })
    const lazy = (): Promise<unknown> => {
      throw new Error('blob base')
    }
    Object.defineProperty(lazy, 'length', { value: 0 })
    Object.defineProperty(lazy, 'toString', {
      value: () => "() => import('./demo.config-hook.ts')",
    })
    const loadTs = vi.fn().mockResolvedValue({
      useConfigs: { 'demo.grid': gridHook },
    })
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveControlUseConfig(lazy, 'demo.grid', dir, loadTs)
    expect(loadTs).toHaveBeenCalledWith(dir, './demo.config-hook.ts')
    expect(out).toBe(gridHook)
  })

  it('resolveLifecycleHandler falls back to loadTsModule when lazy import fails', async () => {
    const onFormInit = vi.fn()
    const lazy = (): Promise<unknown> => {
      throw new Error('blob base')
    }
    Object.defineProperty(lazy, 'length', { value: 0 })
    Object.defineProperty(lazy, 'toString', {
      value: () => "() => import('./model/demo.data.ts')",
    })
    const loadTs = vi.fn().mockResolvedValue({ onFormInit })
    const dir = {} as FileSystemDirectoryHandle
    const out = await resolveLifecycleHandler(lazy, 'onFormInit', dir, loadTs)
    expect(loadTs).toHaveBeenCalledWith(dir, './model/demo.data.ts')
    expect(out).toBe(onFormInit)
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
