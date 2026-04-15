import { describe, it, expect } from 'vitest'
import {
  parseFormTs,
  resolveRelativeImportPath,
  sourceHasRelativeValueImports,
} from './parse-form-ts'
import {
  isFormSchemaModuleFile,
  splitFormConfigHookFactoryResult,
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
  normalizeFormData,
  getValueAtPath,
  formSliceWithDataBind,
  evaluateCondition,
  type FormData,
  type FormControl,
  type TextControl,
  type InputControl,
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
  describe('parse-form-ts path helpers', () => {
    it('resolveRelativeImportPath resolves sibling', () => {
      expect(
        resolveRelativeImportPath('demo.schema.ts', './model/demo.data.ts'),
      ).toBe('model/demo.data.ts')
    })
    it('resolveRelativeImportPath resolves nested', () => {
      expect(resolveRelativeImportPath('lib/a.ts', './b.ts')).toBe('lib/b.ts')
    })
    it('sourceHasRelativeValueImports ignores import type', () => {
      expect(
        sourceHasRelativeValueImports(
          "import type { X } from './m.ts'\nexport default {}",
        ),
      ).toBe(false)
    })
    it('sourceHasRelativeValueImports detects value import', () => {
      expect(
        sourceHasRelativeValueImports(
          "import { x } from './m.ts'\nexport default {}",
        ),
      ).toBe(true)
    })
  })

  describe('isFormSchemaModuleFile', () => {
    it('accepts *.schema.ts', () => {
      expect(isFormSchemaModuleFile('demo.schema.ts')).toBe(true)
      expect(isFormSchemaModuleFile('path/to/x.schema.ts')).toBe(true)
    })
    it('rejects other ts files', () => {
      expect(isFormSchemaModuleFile('demo.config-hook.ts')).toBe(false)
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
        id: "form-1",
        elements: [{ type: "text", id: "t1" }]
      };`
        const data = await parseFormTs(content)
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
        id: "f2",
        elements: []
      };`
        const data = await parseFormTs(content)
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
          id: "ts-1",
          elements: [{ type: "text", id: "t1" }]
        } as const`
        const data = await parseFormTs(content)
        expect(data.id).toBe('ts-1')
        expect(data.elements).toHaveLength(1)
        expect(data.elements[0].type).toBe('text')
      }
    )

    it.skipIf(!hasBlobURL)(
      'parses schema that imports defineFormSchema from @normalization/form-dsl',
      async () => {
        const content = `
import { defineFormSchema } from '@normalization/form-dsl'
const s = defineFormSchema({
  id: 'alias-1',
  elements: [{ type: 'text', id: 't1' }],
})
export default s
`
        const data = await parseFormTs(content)
        expect(data.id).toBe('alias-1')
        expect(data.elements).toHaveLength(1)
      },
    )

    it.skipIf(!hasBlobURL)(
      'parses schema with lazy handlers (onFormInit / useConfig) without static relative import',
      async () => {
        const content = `
import { defineFormSchema } from '@normalization/form-dsl'
const lazyData = () => import('./model/demo.data.ts')
const lazyHook = () => import('./demo.config-hook.ts')

export default defineFormSchema({
  id: 'alias-relative-1',
  handlers: { onFormInit: lazyData },
  elements: [{ type: 'text', id: 't1', handlers: { useConfig: lazyHook } }],
})
`
        const data = await parseFormTs(content)
        expect(data.id).toBe('alias-relative-1')
        expect(data.configHook).toBeUndefined()
        expect(typeof data.handlers?.onFormInit).toBe('function')
        const el = data.elements[0] as { handlers?: { useConfig?: unknown } }
        expect(typeof el.handlers?.useConfig).toBe('function')
      },
    )

    it.skipIf(!hasBlobURL)(
      'parseFormTs rejects static relative import without options',
      async () => {
        const content = `
import { defineFormSchema } from '@normalization/form-dsl'
import { x } from './foo.ts'
export default defineFormSchema({ id: 'x', elements: [] })
`
        await expect(parseFormTs(content)).rejects.toThrow(/formDirectoryHandle/)
      },
    )

    it.skipIf(!hasBlobURL)(
      'parses default export with lazy onFormInit and useConfig',
      async () => {
        const content = `
export default {
  id: 'fn-1',
  handlers: {
    onFormInit: () => import('./model/demo.data.ts'),
    onFormSubmit: () => import('./model/demo.data.ts'),
  },
  elements: [{ type: 'text', id: 't1', handlers: { useConfig: () => import('./demo.config-hook.ts') } }],
}
`
        const data = await parseFormTs(content)
        expect(typeof data.handlers?.onFormInit).toBe('function')
        expect(typeof data.handlers?.onFormSubmit).toBe('function')
        const el = data.elements[0] as { handlers?: { useConfig?: unknown } }
        expect(typeof el.handlers?.useConfig).toBe('function')
      },
    )
  })

  describe('formToJson / formToJsonString', () => {
    it('serializes form to JSON object and string', () => {
      const form: FormData = {
        id: 's1',
        elements: [textControl('t1')],
      }
      const obj = formToJson(form)
      expect(obj.id).toBe('s1')
      expect(obj.name).toBeUndefined()
      expect(Array.isArray(obj.elements)).toBe(true)
      const str = formToJsonString(form)
      expect(str).toContain('"id": "s1"')
      expect(JSON.parse(str)).toEqual(obj)
    })

  })

  describe('formToTs', () => {
    it('outputs export default with id, elements', () => {
      const form: FormData = {
        id: 'j1',
        elements: [textControl('t1')],
      }
      const js = formToTs(form)
      expect(js).toContain('export default')
      expect(js).toContain('id: "j1"')
      expect(js).toContain('elements:')
    })

  })

  describe('controlToJson', () => {
    it('serializes text control without handlers by default', () => {
      const c = textControl('t1')
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.type).toBe('text')
      expect(json.handlers).toBeUndefined()
    })

    it('serializes button control', () => {
      const c: ButtonControl = { type: 'button', id: 'b1' }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('button')
      expect(out.handlers).toBeUndefined()
    })

    it('serializes button with visibleWhen and disabledWhen', () => {
      const visibleWhen: Condition = { modelPath: 'role', operator: 'eq', value: 'admin' }
      const disabledWhen: Condition = { modelPath: 'locked', operator: 'empty' }
      const c: ButtonControl = {
        type: 'button',
        id: 'b2',
        visibleWhen,
        disabledWhen,
      }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.visibleWhen).toEqual(visibleWhen)
      expect(out.disabledWhen).toEqual(disabledWhen)
    })

    it('serializes input control without ui-only fields', () => {
      const c: InputControl = { type: 'input', id: 'in1', fieldName: 'x' }
      const out = controlToJson(c) as Record<string, unknown>
      expect(out.type).toBe('input')
      expect(out.id).toBe('in1')
      expect(out.fieldName).toBe('x')
      expect(out.placeholder).toBeUndefined()
      expect(out.text).toBeUndefined()
    })
  })

  describe('controlToJson preserves field binding for all types', () => {
    const validation: ValidationRule[] = [{ type: 'required', message: 'Required' }]
    const visibleWhen: Condition = { modelPath: 'role', operator: 'eq', value: 'admin' }
    const disabledWhen: Condition = { modelPath: 'locked', operator: 'eq', value: 'true' }
    const bindingProps = { fieldName: 'testField', dataType: 'string' as const, defaultValue: 'abc', validation, visibleWhen, disabledWhen }

    const cases: { label: string; control: FormControl }[] = [
      { label: 'input', control: { type: 'input', id: 'h2', ...bindingProps } },
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
      const control: TableControl = { type: 'table', id: 'tbl1', children: [null], ...bindingProps }
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
        id: 'sf1',
        schema: {
          email: { type: 'string', label: 'Email' },
          age: { type: 'number' },
        },
        elements: [{ type: 'input', id: 'i1', fieldName: 'email', dataType: 'string' }],
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
        id: 'j1',
        schema: { name: { type: 'string' } },
        elements: [
          { type: 'input', id: 'i1', fieldName: 'name', dataType: 'string', defaultValue: 'test' },
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
        type: 'input',
        id: 'i1',
        handlers: { onChange: 'handlers/on-change.js', onBlur: 'handlers/blur.js' },
      }
      const json = controlToJson(c) as Record<string, unknown>
      expect(json.handlers).toEqual({ onChange: 'handlers/on-change.js', onBlur: 'handlers/blur.js' })
    })

    it('formToTs outputs handlers as import functions for controls', () => {
      const form: FormData = {
        id: 'f1',
        elements: [
          { type: 'input', id: 'i1', handlers: { onChange: 'handlers/change.js' } },
        ],
      }
      const js = formToTs(form)
      expect(js).toContain('() => import("./handlers/change.js")')
    })

    it('formToTs outputs form-level handlers as import functions', () => {
      const form: FormData = {
        id: 'f1',
        handlers: {
          onFormSubmit: 'handlers/submit.js',
          onFormInit: 'handlers/init.js',
        },
        elements: [],
      }
      const js = formToTs(form)
      expect(js).toContain('handlers:')
      expect(js).toContain('() => import("./handlers/submit.js")')
      expect(js).toContain('() => import("./handlers/init.js")')
    })

    it('formToJson includes form-level handlers as paths', () => {
      const form: FormData = {
        id: 'f1',
        handlers: { onFormSubmit: 'handlers/submit.js' },
        elements: [],
      }
      const json = formToJson(form)
      expect(json.handlers).toEqual({ onFormSubmit: 'handlers/submit.js' })
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
        { type: 'input', id: 'a' },
        { type: 'input', id: 'b' },
      ]
      const next = updateControlInTree(tree, 'b', {
        fieldName: 'userEmail',
      })
      const updated = next[1] as InputControl
      expect(updated.fieldName).toBe('userEmail')
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
        { type: 'table', id: tableId, children: [null, null] },
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

  describe('splitFormConfigHookFactoryResult', () => {
    it('returns null for non-function', () => {
      expect(splitFormConfigHookFactoryResult(null)).toBeNull()
      expect(splitFormConfigHookFactoryResult({})).toBeNull()
    })

    it('returns null when factory returns non-object', () => {
      expect(splitFormConfigHookFactoryResult(() => null)).toBeNull()
      expect(splitFormConfigHookFactoryResult(() => [])).toBeNull()
    })

    it('returns null when factory throws', () => {
      expect(
        splitFormConfigHookFactoryResult(() => {
          throw new Error('x')
        }),
      ).toBeNull()
    })

    it('splits lifecycle keys from registry', () => {
      const onInit = () => {}
      const onSubmit = async () => {}
      const hook = () => ({})
      const parsed = splitFormConfigHookFactoryResult(() => ({
        field1: hook,
        onInit,
        onSubmit,
      }))
      expect(parsed).not.toBeNull()
      expect(parsed!.registry).toEqual({ field1: hook })
      expect(parsed!.lifecycle.onFormInit).toBe(onInit)
      expect(parsed!.lifecycle.onFormSubmit).toBe(onSubmit)
    })

    it('ignores non-function lifecycle values', () => {
      const hook = () => ({})
      const parsed = splitFormConfigHookFactoryResult(() => ({
        onInit: 'bad' as unknown as () => void,
        x: hook,
      }))
      expect(parsed).not.toBeNull()
      expect(parsed!.lifecycle.onFormInit).toBeUndefined()
      expect(parsed!.registry.x).toBe(hook)
    })

    it('reads registry from elements section', () => {
      const hook = () => ({})
      const parsed = splitFormConfigHookFactoryResult(() => ({
        elements: { a: hook, b: hook },
      }))
      expect(parsed).not.toBeNull()
      expect(parsed!.registry).toEqual({ a: hook, b: hook })
    })

    it('merges elements then top-level hooks (top overrides)', () => {
      const hookA = () => 'a'
      const hookB = () => 'b'
      const parsed = splitFormConfigHookFactoryResult(() => ({
        elements: { k: hookA },
        k: hookB,
      }))
      expect(parsed).not.toBeNull()
      expect(parsed!.registry.k).toBe(hookB)
    })
  })

  describe('evaluateCondition', () => {
    it('eq matches nested model path', () => {
      const state = { model: { headline: 'Hi' } }
      expect(
        evaluateCondition(state, {
          modelPath: 'model.headline',
          operator: 'eq',
          value: 'Hi',
        }),
      ).toBe(true)
    })
    it('empty detects undefined path', () => {
      expect(
        evaluateCondition({}, { modelPath: 'x.y', operator: 'empty' }),
      ).toBe(true)
    })
    it('notEmpty', () => {
      expect(
        evaluateCondition({ a: 1 }, { modelPath: 'a', operator: 'notEmpty' }),
      ).toBe(true)
    })
  })

  describe('model binding helpers', () => {
    it('getValueAtPath reads nested object', () => {
      expect(getValueAtPath({ a: { b: 2 } }, 'a.b')).toBe(2)
    })
    it('getValueAtPath reads array index', () => {
      expect(getValueAtPath({ items: [{ x: 1 }] }, 'items.0.x')).toBe(1)
    })
    it('getValueAtPath returns undefined for missing', () => {
      expect(getValueAtPath({ a: 1 }, 'a.b')).toBeUndefined()
    })
    it('formSliceWithDataBind sets null without path', () => {
      const slice = { state: { z: 9 }, config: { elements: [] } }
      const next = formSliceWithDataBind(slice, undefined)
      expect(next.dataBind).toBeNull()
    })
    it('formSliceWithDataBind resolves value from state', () => {
      const slice = {
        state: { model: { title: 'Hi' } },
        config: { elements: [] },
      }
      const next = formSliceWithDataBind(slice, 'model.title')
      expect(next.dataBind).toEqual({ path: 'model.title', value: 'Hi' })
    })
  })

  describe('normalizeFormData modelContract and dataBindPath', () => {
    it('preserves modelContract string', () => {
      const d = normalizeFormData({
        id: 'f1',
        modelContract: './x.contract.ts',
        elements: [],
      })
      expect(d.modelContract).toBe('./x.contract.ts')
    })
    it('parses dataBindPath on control', () => {
      const d = normalizeFormData({
        id: 'f1',
        elements: [{ type: 'text', id: 't1', dataBindPath: '  a.b  ' }],
      })
      const t = d.elements[0] as TextControl
      expect(t.dataBindPath).toBe('a.b')
    })
  })
})
