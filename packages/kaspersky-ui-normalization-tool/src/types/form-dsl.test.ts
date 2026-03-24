import { describe, it, expect } from 'vitest'
import {
  parseFormJs,
  formToJsonString,
  formToJson,
  formToJs,
  findControlInTree,
  updateControlInTree,
  removeControlFromTree,
  forEachControlInTree,
  controlToJson,
  setGridChildrenInTree,
  setTableChildrenInTree,
  setTabsChildrenInTree,
  type FormData,
  type FormControl,
  type TextControl,
  type ButtonControl,
  type GridControl,
  type TabsControl,
  type TableControl,
  type ValidationRule,
  type Condition,
} from './form-dsl'

const textControl = (id: string, configHook?: string): TextControl => ({
  type: 'text',
  id,
  ...(configHook ? { configHook } : {}),
})

describe('form-dsl', () => {
  describe('parseFormJs', () => {
    /** Тесты зависят от окружения: в jsdom может не быть полной поддержки URL.createObjectURL / dynamic import. */
    const hasBlobURL =
      typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'

    it.skipIf(!hasBlobURL)(
      'parses JS module with text type (requires browser createObjectURL)',
      async () => {
        const content = `export default {
        name: "Test Form",
        id: "form-1",
        elements: [{ type: "text", id: "t1" }]
      };`
        const data = await parseFormJs(content)
        expect(data.name).toBe('Test Form')
        expect(data.id).toBe('form-1')
        expect(data.elements).toHaveLength(1)
        expect(data.elements[0].type).toBe('text')
        expect((data.elements[0] as TextControl).configHook).toBeUndefined()
      }
    )

    it.skipIf(!hasBlobURL)(
      'parses export default with empty elements (requires browser)',
      async () => {
        const content = `export default {
        name: "Exported",
        id: "f2",
        elements: []
      };`
        const data = await parseFormJs(content)
        expect(data.name).toBe('Exported')
        expect(data.id).toBe('f2')
        expect(data.elements).toEqual([])
      }
    )

    it.skipIf(!hasBlobURL)(
      'rejects when import fails (e.g. syntax error) (requires browser)',
      async () => {
        await expect(parseFormJs('{{{{')).rejects.toBeDefined()
      }
    )
  })

  describe('formToJson / formToJsonString', () => {
    it('serializes form to JSON object and string', () => {
      const form: FormData = {
        name: 'Serial',
        id: 's1',
        elements: [textControl('t1')],
      }
      const obj = formToJson(form)
      expect(obj.name).toBe('Serial')
      expect(obj.id).toBe('s1')
      expect(Array.isArray(obj.elements)).toBe(true)
      const str = formToJsonString(form)
      expect(str).toContain('"name": "Serial"')
      expect(JSON.parse(str)).toEqual(obj)
    })
  })

  describe('formToJs', () => {
    it('outputs export default with name, id, elements', () => {
      const form: FormData = {
        name: 'JsForm',
        id: 'j1',
        elements: [textControl('t1', 'handlers/text.config-hook.ts')],
      }
      const js = formToJs(form)
      expect(js).toContain('export default')
      expect(js).toContain('name: "JsForm"')
      expect(js).toContain('id: "j1"')
      expect(js).toContain('elements:')
      expect(js).toContain('() => import("./handlers/text.config-hook.ts")')
    })
  })

  describe('controlToJson', () => {
    it('serializes text control with configHook', () => {
      const c = textControl('t1', 'handlers/text.config-hook.ts')
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.type).toBe('text')
      expect(json.configHook).toBe('handlers/text.config-hook.ts')
    })

    it('serializes button control with configHook', () => {
      const c: ButtonControl = {
        type: 'button', id: 'b1', configHook: 'handlers/button.config-hook.ts',
      }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('button')
      expect(out.configHook).toBe('handlers/button.config-hook.ts')
    })

    it('serializes grid control with configHook', () => {
      const c: GridControl = {
        type: 'grid',
        id: 'g1',
        rows: 1,
        cols: 1,
        children: [null],
        configHook: 'handlers/grid.config-hook.ts',
      }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('grid')
      expect(out.configHook).toBe('handlers/grid.config-hook.ts')
    })

    it('serializes table control with configHook', () => {
      const c: TableControl = {
        type: 'table',
        id: 'tbl1',
        rows: 1,
        cols: 1,
        children: [null],
        configHook: 'handlers/table.config-hook.ts',
      }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('table')
      expect(out.configHook).toBe('handlers/table.config-hook.ts')
    })
  })

  describe('controlToJson preserves field binding for all types', () => {
    const validation: ValidationRule[] = [{ type: 'required', message: 'Required' }]
    const visibleWhen: Condition = { fieldName: 'role', operator: 'eq', value: 'admin' }
    const disabledWhen: Condition = { fieldName: 'locked', operator: 'eq', value: 'true' }
    const bindingProps = { fieldName: 'testField', dataType: 'string' as const, defaultValue: 'abc', validation, visibleWhen, disabledWhen }

    const cases: { label: string; control: FormControl }[] = [
      { label: 'input', control: { type: 'input', id: 'h2', placeholder: '', ...bindingProps } },
      { label: 'icon', control: { type: 'icon', id: 'ic1', name: 'Add', size: 16, ...bindingProps } },
      { label: 'toolbar', control: { type: 'toolbar', id: 'tb1', left: [], right: [], ...bindingProps } },
    ]

    cases.forEach(({ label, control }) => {
      it(`preserves binding on ${label}`, () => {
        const json = controlToJson(control) as Record<string, unknown>
        expect(json.fieldName).toBe('testField')
        expect(json.dataType).toBe('string')
        expect(json.defaultValue).toBe('abc')
        expect(json.validation).toEqual(validation)
        expect(json.visibleWhen).toEqual(visibleWhen)
        expect(json.disabledWhen).toEqual(disabledWhen)
      })
    })

    it('preserves binding on grid', () => {
      const control: GridControl = { type: 'grid', id: 'g1', rows: 1, cols: 1, children: [null], ...bindingProps }
      const json = controlToJson(control) as Record<string, unknown>
      expect(json.fieldName).toBe('testField')
      expect(json.validation).toEqual(validation)
    })

    it('preserves binding on table', () => {
      const control: TableControl = { type: 'table', id: 'tbl1', rows: 1, cols: 1, children: [null], ...bindingProps }
      const json = controlToJson(control) as Record<string, unknown>
      expect(json.fieldName).toBe('testField')
      expect(json.visibleWhen).toEqual(visibleWhen)
    })

    it('preserves binding on tabs', () => {
      const control: TabsControl = { type: 'tabs', id: 'tabs1', items: [{ key: 'k1', label: 'T1', children: [] }], ...bindingProps }
      const json = controlToJson(control) as Record<string, unknown>
      expect(json.fieldName).toBe('testField')
      expect(json.disabledWhen).toEqual(disabledWhen)
    })
  })

  describe('formToJs preserves schema', () => {
    it('outputs schema block in JS module', () => {
      const form: FormData = {
        name: 'SchemaTest',
        id: 'sf1',
        schema: {
          email: { type: 'string', label: 'Email' },
          age: { type: 'number' },
        },
        elements: [{ type: 'input', id: 'i1', placeholder: '', fieldName: 'email', dataType: 'string' }],
      }
      const js = formToJs(form)
      expect(js).toContain('schema:')
      expect(js).toContain('"email"')
      expect(js).toContain('"string"')
      expect(js).toContain('"age"')
      expect(js).toContain('"number"')
      expect(js).toContain('"fieldName": "email"')
    })

    it('formToJson includes schema and field bindings', () => {
      const form: FormData = {
        name: 'J',
        id: 'j1',
        schema: { name: { type: 'string' } },
        elements: [
          { type: 'input', id: 'i1', placeholder: '', fieldName: 'name', dataType: 'string', defaultValue: 'test' },
        ],
      }
      const json = formToJson(form)
      expect(json.schema).toEqual({ name: { type: 'string' } })
      const el = (json.elements as Record<string, unknown>[])[0]
      expect(el.fieldName).toBe('name')
      expect(el.dataType).toBe('string')
      expect(el.defaultValue).toBe('test')
    })
  })

  describe('handlers serialization', () => {
    it('controlToJson includes handlers map', () => {
      const c: FormControl = {
        type: 'input', id: 'i1', placeholder: '',
        handlers: { onChange: 'handlers/on-change.js', onBlur: 'handlers/blur.js' },
      }
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.handlers).toEqual({ onChange: 'handlers/on-change.js', onBlur: 'handlers/blur.js' })
    })

    it('formToJs outputs handlers as import functions for controls', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          { type: 'input', id: 'i1', placeholder: '', handlers: { onChange: 'handlers/change.js' } },
        ],
      }
      const js = formToJs(form)
      expect(js).toContain('() => import("./handlers/change.js")')
    })

    it('formToJs outputs button configHook as dynamic import', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          { type: 'button', id: 'b1', configHook: 'handlers/button.config-hook.ts' },
        ],
      }
      const js = formToJs(form)
      expect(js).toContain('() => import("./handlers/button.config-hook.ts")')
    })

    it('formToJs outputs text configHook as dynamic import', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          { type: 'text', id: 't1', configHook: 'handlers/text.config-hook.ts' },
        ],
      }
      const js = formToJs(form)
      expect(js).toContain('() => import("./handlers/text.config-hook.ts")')
    })

    it('formToJs outputs grid configHook as dynamic import', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          {
            type: 'grid',
            id: 'g1',
            rows: 1,
            cols: 1,
            children: [null],
            configHook: 'handlers/grid.config-hook.ts',
          },
        ],
      }
      const js = formToJs(form)
      expect(js).toContain('() => import("./handlers/grid.config-hook.ts")')
    })

    it('formToJs outputs table configHook as dynamic import', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          {
            type: 'table',
            id: 't1',
            rows: 1,
            cols: 1,
            children: [null],
            configHook: 'handlers/table.config-hook.ts',
          },
        ],
      }
      const js = formToJs(form)
      expect(js).toContain('() => import("./handlers/table.config-hook.ts")')
    })

    it('formToJs outputs form-level handlers as import functions', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        handlers: { onSubmit: 'handlers/submit.js', onInit: 'handlers/init.js' },
        elements: [],
      }
      const js = formToJs(form)
      expect(js).toContain('handlers:')
      expect(js).toContain('() => import("./handlers/submit.js")')
      expect(js).toContain('() => import("./handlers/init.js")')
    })

    it('formToJson includes form-level handlers as paths', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        handlers: { onSubmit: 'handlers/submit.js' },
        elements: [],
      }
      const json = formToJson(form)
      expect(json.handlers).toEqual({ onSubmit: 'handlers/submit.js' })
    })

    it('controlToJson preserves configHook for button', () => {
      const c: FormControl = {
        type: 'button', id: 'h1',
        configHook: 'handlers/button.config-hook.ts',
      }
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.configHook).toBe('handlers/button.config-hook.ts')
    })
  })

  describe('removeControlFromTree', () => {
    it('removes nested control from grid', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1', rows: 1, cols: 2,
          children: [textControl('inner'), null],
        },
      ]
      const result = removeControlFromTree(tree, 'inner')
      const grid = result[0] as GridControl
      expect(grid.children[0]).toBeNull()
    })

    it('removes root control', () => {
      const tree: FormControl[] = [textControl('a'), textControl('b')]
      const result = removeControlFromTree(tree, 'a')
      expect(result).toHaveLength(1)
      expect(result[0].id).toBe('b')
    })
  })

  describe('forEachControlInTree', () => {
    it('visits all controls including nested', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1', rows: 1, cols: 1,
          children: [textControl('nested')],
        },
      ]
      const ids: string[] = []
      forEachControlInTree(tree, (c) => ids.push(c.id))
      expect(ids).toContain('g1')
      expect(ids).toContain('nested')
    })
  })

  describe('findControlInTree', () => {
    it('finds control in flat list', () => {
      const tree: FormControl[] = [textControl('a'), textControl('b')]
      const found = findControlInTree(tree, 'b')
      expect(found).toBeDefined()
      expect(found!.id).toBe('b')
      expect(findControlInTree(tree, 'c')).toBeNull()
    })

    it('finds control inside grid', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1', rows: 2, cols: 2,
          children: [null, textControl('inner'), null, null],
        },
      ]
      const found = findControlInTree(tree, 'inner')
      expect(found).toBeDefined()
      expect(found!.id).toBe('inner')
      expect(findControlInTree(tree, 'g1')).toBeDefined()
    })
  })

  describe('updateControlInTree', () => {
    it('updates control in flat list', () => {
      const tree: FormControl[] = [textControl('a'), textControl('b')]
      const next = updateControlInTree(tree, 'b', {
        configHook: 'handlers/t.config-hook.ts',
      })
      const updated = next[1] as TextControl
      expect(updated.configHook).toBe('handlers/t.config-hook.ts')
    })

    it('updates nested control in grid', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1', rows: 1, cols: 2,
          children: [textControl('nested', 'old.ts'), null],
        },
      ]
      const next = updateControlInTree(tree, 'nested', { configHook: 'new.ts' })
      const grid = next[0] as GridControl
      const updated = grid.children[0] as TextControl
      expect(updated.configHook).toBe('new.ts')
    })
  })

  describe('setGridChildrenInTree', () => {
    it('replaces children of target grid', () => {
      const gridId = 'g1'
      const tree: (FormControl | null)[] = [
        { type: 'grid', id: gridId, rows: 2, cols: 2, children: [null, null, null, null] },
      ]
      const newChildren: (FormControl | null)[] = [textControl('c1'), null, null, null]
      const result = setGridChildrenInTree(tree, gridId, newChildren)
      const grid = result[0] as GridControl
      const cell = grid.children[0] as TextControl
      expect(cell.type).toBe('text')
      expect(cell.id).toBe('c1')
    })
  })

  describe('setTableChildrenInTree', () => {
    it('replaces children of target table', () => {
      const tableId = 't1'
      const tree: (FormControl | null)[] = [
        { type: 'table', id: tableId, rows: 1, cols: 2, children: [null, null] },
      ]
      const newChildren: (FormControl | null)[] = [textControl('cell1'), null]
      const result = setTableChildrenInTree(tree, tableId, newChildren)
      const table = result[0]
      expect(table && table.type).toBe('table')
      const cell = (table as { children: (FormControl | null)[] }).children[0] as TextControl
      expect(cell.id).toBe('cell1')
    })
  })

  describe('setTabsChildrenInTree', () => {
    it('replaces children of target tab by index', () => {
      const tabsId = 'tabs1'
      const tree: (FormControl | null)[] = [
        {
          type: 'tabs', id: tabsId,
          items: [
            { key: 'k1', label: 'Tab 1', children: [] },
            { key: 'k2', label: 'Tab 2', children: [] },
          ],
          activeKey: 'k1',
        },
      ]
      const newChildren: (FormControl | null)[] = [textControl('tab1-text')]
      const result = setTabsChildrenInTree(tree, tabsId, 0, newChildren)
      const tabs = result[0] as { items: { children: (FormControl | null)[] }[] }
      expect(tabs.items[0].children).toHaveLength(1)
      const cell = tabs.items[0].children[0] as TextControl
      expect(cell.id).toBe('tab1-text')
    })
  })
})
