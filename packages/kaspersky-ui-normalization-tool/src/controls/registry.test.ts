import { describe, it, expect } from 'vitest'
import {
  getDescriptor,
  createControl,
  getPaletteGroups,
  CONTROL_TYPES,
  ALL_CONTROL_TYPES,
  PALETTE_ITEMS,
} from './registry'
import type { FormControlType } from '../types/form-dsl'

describe('registry', () => {
  describe('getDescriptor', () => {
    it('returns descriptor for button type', () => {
      const d = getDescriptor('button')
      expect(d).toBeDefined()
      expect(d?.type).toBe('button')
      expect(d?.label).toBeDefined()
      expect(d?.createDefault).toBeDefined()
    })

    it('returns undefined for unknown type', () => {
      expect(getDescriptor('unknown' as FormControlType)).toBeUndefined()
    })

    it('returns descriptor for semantic types', () => {
      const types: FormControlType[] = ['button', 'text', 'alert', 'toolbar', 'icon']
      for (const type of types) {
        expect(getDescriptor(type)).toBeDefined()
      }
    })
  })

  describe('createControl', () => {
    it('creates button controls with unique id', () => {
      const a = createControl('button')
      const b = createControl('button')
      expect(a.id).toBeDefined()
      expect(b.id).toBeDefined()
      expect(a.id).not.toBe(b.id)
    })

    it('creates button with default shape', () => {
      const c = createControl('button')
      expect(c.type).toBe('button')
      expect(c.id).toBeTruthy()
    })

    it('creates grid with rows/cols and children', () => {
      const c = createControl('grid')
      expect(c.type).toBe('grid')
      expect((c as { rows: number }).rows).toBe(2)
      expect((c as { cols: number }).cols).toBe(2)
      expect((c as { children: unknown[] }).children).toHaveLength(4)
    })

    it('creates tabs with two default items', () => {
      const c = createControl('tabs')
      expect(c.type).toBe('tabs')
      const items = (c as { items: { key: string; label: string }[] }).items
      expect(items).toHaveLength(2)
      expect(items[0].key).toBe('tab1')
      expect(items[1].key).toBe('tab2')
    })

    it('creates toolbar with left/right items', () => {
      const c = createControl('toolbar')
      expect(c.type).toBe('toolbar')
      expect((c as { left: unknown[] }).left).toBeDefined()
      expect((c as { right: unknown[] }).right).toBeDefined()
    })

    it('creates heading (extra UI) with default props', () => {
      const c = createControl('heading')
      expect(c.type).toBe('heading')
      const u = c as { props: Record<string, string> }
      expect(u.props).toBeDefined()
      expect(u.props?.type).toBe('H3')
    })
  })

  describe('CONTROL_TYPES / ALL_CONTROL_TYPES', () => {
    it('CONTROL_TYPES excludes grid, table, tabs', () => {
      expect(CONTROL_TYPES).not.toContain('grid')
      expect(CONTROL_TYPES).not.toContain('table')
      expect(CONTROL_TYPES).not.toContain('tabs')
      expect(CONTROL_TYPES.length).toBeGreaterThan(0)
    })

    it('ALL_CONTROL_TYPES includes grid, table, tabs', () => {
      expect(ALL_CONTROL_TYPES).toContain('grid')
      expect(ALL_CONTROL_TYPES).toContain('table')
      expect(ALL_CONTROL_TYPES).toContain('tabs')
    })
  })

  describe('PALETTE_ITEMS', () => {
    it('has type, label, Icon for each item', () => {
      expect(PALETTE_ITEMS.length).toBeGreaterThan(0)
      for (const item of PALETTE_ITEMS) {
        expect(item.type).toBeDefined()
        expect(item.label).toBeDefined()
        expect(typeof item.Icon === 'function' || (typeof item.Icon === 'object' && item.Icon !== null)).toBe(true)
      }
    })
  })

  describe('getPaletteGroups', () => {
    it('returns array of groups with group name and items', () => {
      const groups = getPaletteGroups()
      expect(Array.isArray(groups)).toBe(true)
      expect(groups.length).toBeGreaterThan(0)
      for (const g of groups) {
        expect(g).toHaveProperty('group')
        expect(typeof g.group).toBe('string')
        expect(g).toHaveProperty('items')
        expect(Array.isArray(g.items)).toBe(true)
      }
    })

    it('items have semantic type (button, alert, heading, etc.)', () => {
      const groups = getPaletteGroups()
      const items = groups.flatMap((g) => g.items)
      expect(items.length).toBeGreaterThan(0)
      const withSemanticType = items.filter((item) => item.type === 'button' || item.type === 'alert' || item.type === 'heading')
      expect(withSemanticType.length).toBeGreaterThan(0)
    })
  })
})
