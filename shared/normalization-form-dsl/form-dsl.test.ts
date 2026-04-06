import { describe, it, expect } from 'vitest'
import { parseFormTs } from './parse-form-ts'
import {
  isFormSchemaModuleFile,
  formToJsonString,
  formToJson,
  formToTs,
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

const textControl = (id: string): TextControl => ({
  type: 'text',
  id,
})

describe('form-dsl', () => {
  describe('isFormSchemaModuleFile', () => {
    it('accepts *.schema.ts', () => {
      expect(isFormSchemaModuleFile('demo-form.schema.ts')).toBe(true)
      expect(isFormSchemaModuleFile('path/to/x.schema.ts')).toBe(true)
    })
    it('rejects other ts files', () => {
      expect(isFormSchemaModuleFile('demo-form.config-hook.ts')).toBe(false)
      expect(isFormSchemaModuleFile('form.ts')).toBe(false)
    })
  })

  describe('parseFormTs', () => {
    /** Тесты зависят от окружения: в jsdom может не быть полной поддержки URL.createObjectURL / dynamic import. */
    const hasBlobURL =
      typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'

    it.skipIf(!hasBlobURL)(
      'parses module with text type (sucrase + import blob)',
      async () => {
        const content = `export default {
        name: "Test Form",
        id: "form-1",
        elements: [{ type: "text", id: "t1" }]
      };`
        const data = await parseFormTs(content)
        expect(data.name).toBe('Test Form')
        expect(data.id).toBe('form-1')
        expect(data.elements).toHaveLength(1)
        expect(data.elements[0].type).toBe('text')
        expect((data.elements[0] as TextControl).id).toBe('t1')
      }
    )

    it.skipIf(!hasBlobURL)(
      'parses export default with empty elements',
      async () => {
        const content = `export default {
        name: "Exported",
        id: "f2",
        elements: []
      };`
        const data = await parseFormTs(content)
        expect(data.name).toBe('Exported')
        expect(data.id).toBe('f2')
        expect(data.elements).toEqual([])
      }
    )

    it.skipIf(!hasBlobURL)(
      'rejects on invalid syntax (sucrase or import)',
      async () => {
        await expect(parseFormTs('{{{{')).rejects.toBeDefined()
      }
    )

    it.skipIf(!hasBlobURL)(
      'parses source with TypeScript `as const` on default export',
      async () => {
        const content = `export default {
          name: "TS Form",
          id: "ts-1",
          elements: [{ type: "text", id: "t1" }]
        } as const`
        const data = await parseFormTs(content)
        expect(data.name).toBe('TS Form')
        expect(data.id).toBe('ts-1')
        expect(data.elements).toHaveLength(1)
        expect(data.elements[0].type).toBe('text')
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

    it('includes form-level configHook in JSON', () => {
      const form: FormData = {
        name: 'F',
        id: 'fid',
        configHook: 'fid.config-hook.ts',
        elements: [],
      }
      const obj = formToJson(form)
      expect(obj.configHook).toBe('fid.config-hook.ts')
    })
  })

  describe('formToTs', () => {
    it('outputs export default with name, id, elements', () => {
      const form: FormData = {
        name: 'JsForm',
        id: 'j1',
        elements: [textControl('t1')],
      }
      const js = formToTs(form)
      expect(js).toContain('export default')
      expect(js).toContain('name: "JsForm"')
      expect(js).toContain('id: "j1"')
      expect(js).toContain('elements:')
    })

    it('outputs form-level configHook as dynamic import', () => {
      const form: FormData = {
        name: 'Hooked',
        id: 'hf1',
        configHook: 'hf1.config-hook.ts',
        elements: [textControl('t1')],
      }
      const js = formToTs(form)
      expect(js).toContain('() => import("./hf1.config-hook.ts")')
    })
  })

  describe('controlToJson', () => {
    it('serializes text control without per-control configHook', () => {
      const c = textControl('t1')
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.type).toBe('text')
      expect(json.configHook).toBeUndefined()
    })

    it('serializes button control', () => {
      const c: ButtonControl = { type: 'button', id: 'b1' }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('button')
      expect(out.configHook).toBeUndefined()
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
      const control: GridControl = { type: 'grid', id: 'g1', children: [null], ...bindingProps }
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

  describe('formToTs preserves schema', () => {
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
      const js = formToTs(form)
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

    it('formToTs outputs handlers as import functions for controls', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        elements: [
          { type: 'input', id: 'i1', placeholder: '', handlers: { onChange: 'handlers/change.js' } },
        ],
      }
      const js = formToTs(form)
      expect(js).toContain('() => import("./handlers/change.js")')
    })

    it('formToTs outputs form-level handlers as import functions', () => {
      const form: FormData = {
        name: 'Test',
        id: 'f1',
        handlers: { onSubmit: 'handlers/submit.js', onInit: 'handlers/init.js' },
        elements: [],
      }
      const js = formToTs(form)
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

  })

  describe('removeControlFromTree', () => {
    it('removes nested control from grid', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1',
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
          type: 'grid', id: 'g1',
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
          type: 'grid', id: 'g1',
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
      const tree: FormControl[] = [
        { type: 'input', id: 'a', placeholder: '' },
        { type: 'input', id: 'b', placeholder: '' },
      ]
      const next = updateControlInTree(tree, 'b', {
        placeholder: 'x',
      })
      const updated = next[1] as { placeholder?: string }
      expect(updated.placeholder).toBe('x')
    })

    it('updates nested control in grid', () => {
      const tree: FormControl[] = [
        {
          type: 'grid', id: 'g1',
          children: [textControl('nested'), null],
        },
      ]
      const next = updateControlInTree(tree, 'nested', { fieldName: 'fn' })
      const grid = next[0] as GridControl
      const updated = grid.children[0] as TextControl
      expect(updated.fieldName).toBe('fn')
    })
  })

  describe('setGridChildrenInTree', () => {
    it('replaces children of target grid', () => {
      const gridId = 'g1'
      const tree: (FormControl | null)[] = [
        { type: 'grid', id: gridId, children: [null, null, null, null] },
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
