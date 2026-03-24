/**
 * DSL для UI-форм. Корневой объект: name, id (идентификатор формы), elements (массив контролов).
 * Свойства компонентов по аналогии с Hexa UI (https://github.com/KasperskyLab/uif).
 */
export interface FormData {
  name: string
  /** Идентификатор формы */
  id: string
  elements: FormControl[]
}

export type FormControlType =
  | 'button'
  | 'text'
  | 'input'
  | 'grid'
  | 'table'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'toggle'
  | 'meta'

export type ButtonMode = 'primary' | 'secondary' | 'tertiary' | 'dangerFilled' | 'dangerOutlined'

export interface FormControlBase {
  id: string
}

export interface ButtonControl extends FormControlBase {
  type: 'button'
  text?: string
  mode?: ButtonMode
  disabled?: boolean
  loading?: boolean
  onClickHandler?: string
}

export interface TextControl extends FormControlBase {
  type: 'text'
  text?: string
}

export interface InputControl extends FormControlBase {
  type: 'input'
  text?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

export interface GridControl extends FormControlBase {
  type: 'grid'
  rows: number
  cols: number
  children: (FormControl | null)[]
}

export interface TableControl extends FormControlBase {
  type: 'table'
  rows: number
  cols: number
  children: (FormControl | null)[]
  emptyText?: string
  rowMode?: 'standard' | 'compact'
  columnVerticalAlign?: 'top' | 'middle' | 'bottom' | 'inherit'
  disabled?: boolean
}

export interface CheckboxControl extends FormControlBase {
  type: 'checkbox'
  text?: string
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
}

export interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioControl extends FormControlBase {
  type: 'radio'
  options?: RadioOption[]
  value?: string
  disabled?: boolean
  readonly?: boolean
  vertical?: boolean
}

export interface SelectOption {
  label: string
  value: string
}

export interface SelectControl extends FormControlBase {
  type: 'select'
  options?: SelectOption[]
  value?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  mode?: 'multiple' | 'tags'
  allowClear?: boolean
}

export interface ToggleControl extends FormControlBase {
  type: 'toggle'
  text?: string
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  labelPosition?: 'after' | 'before'
}

export interface MetaComponentControl extends FormControlBase {
  type: 'meta'
  componentId: string
  props: Record<string, string>
}

export type FormControl =
  | ButtonControl
  | TextControl
  | InputControl
  | GridControl
  | TableControl
  | CheckboxControl
  | RadioControl
  | SelectControl
  | ToggleControl
  | MetaComponentControl

function normOption(x: unknown): { label: string; value: string } | null {
  if (!x || typeof x !== 'object' || !('value' in (x as object))) return null
  const o = x as Record<string, unknown>
  const label = typeof o.label === 'string' ? o.label : String(o.value ?? '')
  const value = typeof o.value === 'string' ? o.value : String(o.value ?? '')
  return { label, value }
}

function getImportPathFromHandler(fn: (() => Promise<unknown>) | unknown): string | null {
  try {
    const s = typeof fn === 'function' ? String(fn) : ''
    const m = s.match(/import\s*\(\s*["`']\.\/([^"`']+)["`']\s*\)/)
    return m ? m[1].replace(/\\/g, '/') : null
  } catch {
    return null
  }
}

function normalizeControl(item: unknown): FormControl | null {
  if (!item || typeof item !== 'object' || !('id' in item)) return null
  const o = item as Record<string, unknown>
  const id = String(o.id)
  const type = o.type as string | undefined
  const kind = o.kind as string | undefined
  if (kind === 'button' || type === 'button') {
    const c: ButtonControl = { type: 'button', id }
    if (typeof o.text === 'string') c.text = o.text
    const mode = (o.mode ?? (type === 'primary' || type === 'secondary' ? type : undefined)) as ButtonMode | undefined
    if (mode && ['primary', 'secondary', 'tertiary', 'dangerFilled', 'dangerOutlined'].includes(mode)) c.mode = mode
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.loading === 'boolean') c.loading = o.loading
    if (typeof o.onClickHandler === 'string') c.onClickHandler = o.onClickHandler
    else if (typeof o.onClickHandler === 'function') {
      const path = getImportPathFromHandler(o.onClickHandler)
      if (path) c.onClickHandler = path
    }
    return c
  }
  if (type === 'text') {
    const c: TextControl = { type: 'text', id }
    if (typeof o.text === 'string') c.text = o.text
    return c
  }
  if (type === 'input') {
    const c: InputControl = { type: 'input', id }
    if (typeof o.text === 'string') c.text = o.text
    if (typeof o.value === 'string') c.value = o.value
    if (typeof o.placeholder === 'string') c.placeholder = o.placeholder
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readOnly === 'boolean') c.readOnly = o.readOnly
    return c
  }
  if (type === 'grid') {
    const rows = typeof o.rows === 'number' ? o.rows : 2
    const cols = typeof o.cols === 'number' ? o.cols : 2
    const len = rows * cols
    const c: GridControl = {
      type: 'grid',
      id,
      rows,
      cols,
      children: Array.from({ length: len }, () => null),
    }
    if (Array.isArray(o.children)) {
      const list = o.children.map(normalizeControl)
      for (let i = 0; i < len && i < list.length; i++) {
        const x = list[i]
        if (x != null) c.children[i] = x
      }
    }
    return c
  }
  if (type === 'table') {
    const rows = typeof o.rows === 'number' ? o.rows : 2
    const cols = typeof o.cols === 'number' ? o.cols : 2
    const len = rows * cols
    const c: TableControl = {
      type: 'table',
      id,
      rows,
      cols,
      children: Array.from({ length: len }, () => null),
    }
    if (typeof o.emptyText === 'string') c.emptyText = o.emptyText
    if (o.rowMode === 'standard' || o.rowMode === 'compact') c.rowMode = o.rowMode
    if (['top', 'middle', 'bottom', 'inherit'].includes(o.columnVerticalAlign as string))
      c.columnVerticalAlign = o.columnVerticalAlign as TableControl['columnVerticalAlign']
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (Array.isArray(o.children)) {
      const list = o.children.map(normalizeControl)
      for (let i = 0; i < len && i < list.length; i++) {
        const x = list[i]
        if (x != null) c.children[i] = x
      }
    }
    return c
  }
  if (type === 'checkbox') {
    const c: CheckboxControl = { type: 'checkbox', id }
    if (typeof o.text === 'string') c.text = o.text
    if (typeof o.checked === 'boolean') c.checked = o.checked
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readonly === 'boolean') c.readonly = o.readonly
    return c
  }
  if (type === 'radio') {
    const c: RadioControl = { type: 'radio', id, options: [] }
    if (Array.isArray(o.options)) {
      c.options = o.options.map(normOption).filter((x): x is { label: string; value: string } => x != null)
    }
    if (typeof o.value === 'string') c.value = o.value
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readonly === 'boolean') c.readonly = o.readonly
    if (typeof o.vertical === 'boolean') c.vertical = o.vertical
    return c
  }
  if (type === 'select') {
    const c: SelectControl = { type: 'select', id }
    if (Array.isArray(o.options)) {
      c.options = o.options.map(normOption).filter((x): x is { label: string; value: string } => x != null)
    }
    if (typeof o.value === 'string') c.value = o.value
    if (typeof o.placeholder === 'string') c.placeholder = o.placeholder
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readOnly === 'boolean') c.readOnly = o.readOnly
    if (o.mode === 'multiple' || o.mode === 'tags') c.mode = o.mode
    if (typeof o.allowClear === 'boolean') c.allowClear = o.allowClear
    return c
  }
  if (type === 'toggle') {
    const c: ToggleControl = { type: 'toggle', id }
    if (typeof o.text === 'string') c.text = o.text
    if (typeof o.checked === 'boolean') c.checked = o.checked
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readonly === 'boolean') c.readonly = o.readonly
    if (o.labelPosition === 'after' || o.labelPosition === 'before') c.labelPosition = o.labelPosition
    return c
  }
  if (type === 'meta') {
    const c: MetaComponentControl = { type: 'meta', id, componentId: 'Button', props: {} }
    if (typeof o.componentId === 'string') c.componentId = o.componentId
    if (o.props && typeof o.props === 'object' && !Array.isArray(o.props)) {
      const props: Record<string, string> = {}
      for (const k of Object.keys(o.props)) {
        const v = (o.props as Record<string, unknown>)[k]
        if (typeof v === 'string') props[k] = v
        else if (v != null) props[k] = String(v)
      }
      c.props = props
    }
    return c
  }
  return null
}

const emptyFormData = (): FormData => ({ name: '', id: `form-${Date.now()}`, elements: [] })

function normalizeFormData(data: unknown): FormData {
  if (Array.isArray(data)) {
    const elements = data
      .map(normalizeControl)
      .filter((x: FormControl | null): x is FormControl => x != null)
    return { name: '', id: `form-${Date.now()}`, elements }
  }
  if (data && typeof data === 'object' && Array.isArray((data as { elements?: unknown }).elements)) {
    const obj = data as { name?: unknown; id?: unknown; elements: unknown[] }
    const elements = obj.elements
      .map(normalizeControl)
      .filter((x: FormControl | null): x is FormControl => x != null)
    return {
      name: typeof obj.name === 'string' ? obj.name : '',
      id: typeof obj.id === 'string' ? obj.id : `form-${Date.now()}`,
      elements,
    }
  }
  return emptyFormData()
}

/** Парсит JS-модуль формы (файл с export default { name, id, elements }). */
export function parseFormJs(content: string): Promise<FormData> {
  const blob = new Blob([content], { type: 'application/javascript' })
  const url = URL.createObjectURL(blob)
  return import(/* @vite-ignore */ url)
    .then((mod) => normalizeFormData(mod?.default))
    .catch(() => emptyFormData())
    .finally(() => URL.revokeObjectURL(url))
}
