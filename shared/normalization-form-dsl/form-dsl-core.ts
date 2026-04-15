/**
 * Контролы и функции DSL. Модель корня формы (`FormData`) — в `../types/form`.
 */
import type { FieldSchema, FormData } from '../types/form'

/** Расширение файла формы (только TypeScript). */
export const FORM_MODULE_FILE_EXT = '.ts' as const

/** Имя файла — модуль формы (любой `.ts`). */
export function isFormModuleFile(fileNameOrPath: string): boolean {
  return fileNameOrPath.toLowerCase().endsWith('.ts')
}

/**
 * Описание формы в каталоге `dsl/{formId}/`: файл `{formId}.schema.ts`.
 */
export const FORM_SCHEMA_FILE_SUFFIX = '.schema.ts' as const

export function isFormSchemaModuleFile(fileNameOrPath: string): boolean {
  return fileNameOrPath.toLowerCase().endsWith(FORM_SCHEMA_FILE_SUFFIX)
}

/** Маппинг идентификатора компонента (реализация) → семантический тип DSL. Кнопка в DSL — type: "button", не метатип. */
export const COMPONENT_ID_TO_DSL_TYPE: Record<string, string> = {
  Button: 'button',
  Text: 'text',
  Textbox: 'input',
  Checkbox: 'checkbox',
  Radio: 'radio',
  Select: 'select',
  Toggle: 'toggle',
  Markdown: 'markdown',
  P: 'p',
  Heading: 'heading',
  ExpandableText: 'expandableText',
  Link: 'link',
  FormLabel: 'formLabel',
  Label: 'label',
  HelpMessage: 'helpMessage',
  CodeViewer: 'codeViewer',
  ActionButton: 'actionButton',
  SegmentedButton: 'segmentedButton',
  SegmentedControl: 'segmentedControl',
  Search: 'search',
  Calendar: 'calendar',
  TimeInput: 'timeInput',
  Badge: 'badge',
  Tag: 'tag',
  Chip: 'chip',
  KeyValue: 'keyValue',
  InformationCard: 'informationCard',
  StatusCard: 'statusCard',
  Severity: 'severity',
  Status: 'status',
  Indicator: 'indicator',
  Alert: 'alert',
  SectionMessage: 'sectionMessage',
  Loader: 'loader',
  ProgressBar: 'progressBar',
  Tooltip: 'tooltip',
  Popover: 'popover',
  Breadcrumbs: 'breadcrumbs',
  Pagination: 'pagination',
  PageHeader: 'pageHeader',
  Accordion: 'accordion',
  Divider: 'divider',
  Space: 'space',
  Card: 'card',
  Field: 'field',
  FieldSet: 'fieldSet',
  Dropdown: 'dropdown',
  Scrollbar: 'scrollbar',
}

/** Типы UI-компонентов с произвольными props (все кроме button, text, input, checkbox, radio, select, toggle, markdown). */
export const EXTRA_UI_DSL_TYPES = [
  'p', 'heading', 'expandableText', 'link', 'formLabel', 'label', 'helpMessage', 'codeViewer',
  'actionButton', 'segmentedButton', 'segmentedControl', 'search', 'calendar', 'timeInput',
  'badge', 'tag', 'chip', 'keyValue', 'informationCard', 'statusCard', 'severity', 'status', 'indicator',
  'alert', 'sectionMessage', 'loader', 'progressBar', 'tooltip', 'popover',
  'breadcrumbs', 'pagination', 'pageHeader', 'accordion', 'divider', 'space', 'card', 'field', 'fieldSet', 'dropdown', 'scrollbar',
] as const
export type ExtraUiDslType = (typeof EXTRA_UI_DSL_TYPES)[number]

export function getComponentIdFromDslType(dslType: string): string | undefined {
  for (const [cid, t] of Object.entries(COMPONENT_ID_TO_DSL_TYPE)) {
    if (t === dslType) return cid
  }
  return undefined
}

export type FormControlType =
  | 'button'
  | 'text'
  | 'input'
  | 'grid'
  | 'row'
  | 'table'
  | 'tabs'
  | 'toolbar'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'toggle'
  | 'markdown'
  | 'icon'
  | 'meta'
  | ExtraUiDslType

/** Типы правил валидации */
export type ValidationRuleType = 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'custom'

/** Правило валидации поля */
export interface ValidationRule {
  type: ValidationRuleType
  /** Значение правила (число для min/max/minLength/maxLength, строка regex для pattern, выражение для custom) */
  value?: string | number
  /** Сообщение об ошибке */
  message: string
}

/** Условие для управления видимостью/доступностью контрола */
export interface Condition {
  fieldName: string
  operator: 'eq' | 'neq' | 'gt' | 'lt' | 'contains' | 'empty' | 'notEmpty'
  value?: string
}

/** Обработчики узла: события UI — строка пути; **`useConfig`** — ленивый `import()` или путь. */
export type ControlHandlersMap = Record<
  string,
  string | (() => Promise<unknown>) | ((...args: unknown[]) => unknown)
>

export interface FormControlIdentity {
  id: string
  handlers?: ControlHandlersMap
  /**
   * Путь к данным в нотации точек (`user.email`, **`items.0.title`**); без
   * привязки поле не задают.
   */
  dataBindPath?: string
}

export interface FormControlBase extends FormControlIdentity {
  /** Имя поля для привязки к данным формы */
  fieldName?: string
  /** Начальное значение поля */
  defaultValue?: unknown
  /** Тип данных поля */
  dataType?: 'string' | 'number' | 'boolean' | 'date' | 'array'
  /** Правила валидации */
  validation?: ValidationRule[]
  /** Условие видимости: контрол показывается только когда условие истинно */
  visibleWhen?: Condition
  /** Условие блокировки: контрол недоступен когда условие истинно */
  disabledWhen?: Condition
}

export interface GridControl extends FormControlBase {
  type: 'grid'
  /** Ячейки по порядку (строка за строкой); геометрия Hexa — через **`handlers.useConfig`**. */
  children: (FormControl | null)[]
}

/** Ряд: горизонтальный flex-контейнер для размещения контролов бок о бок. */
export interface RowControl extends FormControlBase {
  type: 'row'
  /** Отступ между дочерними элементами в px */
  gap?: number
  /** Вертикальное выравнивание дочерних элементов */
  align?: 'start' | 'center' | 'end'
  children: FormControl[]
}

/** Тулбар таблицы (как в Hexa UI Table — над таблицей); в DSL не хранится, задаётся в **`useConfig`**. */
export interface TableToolbarConfig {
  left?: ToolbarItem[]
  right?: ToolbarItem[]
  leftLimit?: number
  sticky?: number
}

/**
 * Таблица: ячейки по порядку (строка за строкой). Размер матрицы задаётся полями Hexa
 * **`dataSource.length`** (строки) и **`columns.length`** (столбцы); остальные пропсы —
 * `Partial<ITableProps>` из **`handlers.useConfig`** (см. фича-док).
 */
export interface TableControl extends FormControlBase {
  type: 'table'
  children: (FormControl | null)[]
}

/** Один таб: ключ, подпись, дочерние контролы (контейнер). */
export interface TabsControlItem {
  key: string
  label: string
  children: (FormControl | null)[]
}

/** Табы (Hexa UI Tabs): контейнер с вкладками; содержимое неактивных скрыто. */
export interface TabsControl extends FormControlBase {
  type: 'tabs'
  items: TabsControlItem[]
  /** Ключ активной вкладки (по умолчанию — первый таб). */
  activeKey?: string
}

/** Элемент тулбара (кнопка или разделитель). */
export interface ToolbarItem {
  type: 'button' | 'divider'
  key: string
  /** Текст кнопки (только для type: 'button') */
  label?: string
}

/** Тулбар (Hexa UI Toolbar): левый и правый блоки элементов. */
export interface ToolbarControl extends FormControlBase {
  type: 'toolbar'
  left?: ToolbarItem[]
  right?: ToolbarItem[]
  /** Лимит видимых элементов слева; при превышении — авто-dropdown */
  leftLimit?: number
  /** Sticky top в px (0 — не липкий) */
  sticky?: number
  /** Включить авто-dropdown для переполнения */
  autoDropdown?: boolean
}

export interface ButtonControl extends FormControlIdentity {
  type: 'button'
}

export interface TextControl extends FormControlBase {
  type: 'text'
}

/**
 * Поле ввода (Hexa `Textbox`). В схеме/DSL — только **`type`**, **`id`** и общие привязки
 * (**`fieldName`**, **`defaultValue`**, валидация и т.д.). Плейсхолдер, `disabled`,
 * подпись и прочие пропсы UI — в **`handlers.useConfig`** для **`input.id`**
 * (`Partial<TextboxProps>` и опционально **`fieldLabel`** для обёртки `Field`).
 */
export interface InputControl extends FormControlBase {
  type: 'input'
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

export interface MarkdownControl extends FormControlBase {
  type: 'markdown'
  content?: string
}

/** UI-компонент с семантическим типом (alert, heading, dropdown и т.д.) и props. В DSL — type: "alert", не метатип. */
export interface ExtraUiControl extends FormControlBase {
  type: ExtraUiDslType
  props: Record<string, string>
}

/** Icon: иконка по имени из набора. */
export interface IconControl extends FormControlBase {
  type: 'icon'
  /** Имя иконки (например Delete, Add, Cursor). */
  name?: string
  /** Размер: 16 | 24. */
  size?: 16 | 24
}

/** Устаревший вид с type: "meta" + componentId (совместимость с ранними артефактами viewer). */
export interface MetaComponentControl extends FormControlBase {
  type: 'meta'
  componentId: string
  props: Record<string, string>
}

export type FormControl =
  | ButtonControl
  | TextControl
  | InputControl
  | CheckboxControl
  | RadioControl
  | SelectControl
  | ToggleControl
  | MarkdownControl
  | ExtraUiControl
  | GridControl
  | RowControl
  | TableControl
  | TabsControl
  | ToolbarControl
  | IconControl
  | MetaComponentControl

/** Значение привязки контрола к данным (см. **`dataBindPath`**) в **`FormSlice`**. */
export type FormSliceDataBind = { path: string; value: unknown } | null

/** Аргумент configHook (П.2): стейт формы и дерево контролов. */
export interface FormSlice {
  state: Record<string, unknown>
  config: { elements: FormControl[] }
  /**
   * В **`onInit`** / **`onSubmit`** (если рендерер их поддерживает): записать
   * значения полей в state формы поверх текущего.
   */
  mergeState?: (partial: Record<string, unknown>) => void
  /**
   * Запись из **`dataSource`** таблицы (матрица DSL), для хуков контролов в
   * ячейке; строка та же, что у Hexa `<Table />` для данного ряда.
   */
  tableRow?: Record<string, unknown>
  /** Индекс строки в **`dataSource`** таблицы (0-based). */
  tableRowIndex?: number
  /**
   * Перед вызовом **`useConfig`** для контрола: путь из **`dataBindPath`** и
   * значение из **`getValueAtPath(state, path)`**; без биндинга — **`null`**.
   */
  dataBind?: FormSliceDataBind
}

/**
 * Читает значение по пути с сегментами **`a.b.c`**; числовые сегменты —
 * индексы массива.
 */
export function getValueAtPath(root: unknown, path: string): unknown {
  const trimmed = path.trim()
  if (!trimmed) return undefined
  const segments = trimmed.split('.').filter((s) => s.length > 0)
  let cur: unknown = root
  for (const seg of segments) {
    if (cur === null || cur === undefined) return undefined
    if (typeof cur !== 'object') return undefined
    if (Array.isArray(cur)) {
      if (!/^\d+$/.test(seg)) return undefined
      const i = Number(seg)
      if (i < 0 || i >= cur.length) return undefined
      cur = cur[i]
      continue
    }
    if (!Object.prototype.hasOwnProperty.call(cur, seg)) return undefined
    cur = (cur as Record<string, unknown>)[seg]
  }
  return cur
}

/** Дополняет слайс полем **`dataBind`** для вызова хука данного контрола. */
export function formSliceWithDataBind(
  slice: FormSlice,
  dataBindPath: string | undefined,
): FormSlice {
  const p = dataBindPath?.trim()
  if (!p) return { ...slice, dataBind: null }
  return {
    ...slice,
    dataBind: { path: p, value: getValueAtPath(slice.state, p) },
  }
}

/** Начальный `state` по дереву контролов (интерактивные поля). */
export function getInitialFormStateFromElements(
  elements: FormControl[],
): Record<string, unknown> {
  const state: Record<string, unknown> = {}
  function walk(controls: FormControl[]) {
    for (const c of controls) {
      if (c.type === 'checkbox') {
        state[c.id] = (c as CheckboxControl).checked ?? false
      }
      if (c.type === 'input') {
        const ic = c as InputControl
        state[c.id] =
          ic.defaultValue !== undefined && ic.defaultValue !== null
            ? ic.defaultValue
            : ''
      }
      if (c.type === 'radio') {
        state[c.id] = (c as RadioControl).value ?? ''
      }
      if (c.type === 'select') {
        const selectCtrl = c as SelectControl
        state[c.id] =
          selectCtrl.value ?? (selectCtrl.mode === 'multiple' ? [] : '')
      }
      if (c.type === 'toggle') {
        state[c.id] = (c as ToggleControl).checked ?? false
      }
      if (c.type === 'grid') {
        walk(
          (c as GridControl).children.filter((x): x is FormControl => x != null),
        )
      }
      if (c.type === 'table') {
        walk(
          (c as TableControl).children.filter((x): x is FormControl => x != null),
        )
      }
    }
  }
  walk(elements)
  return state
}

/** Описание события для UI редактора */
export interface EventDefinition {
  name: string
  label: string
}

const DEFAULT_UI_EVENTS: EventDefinition[] = [{ name: 'onClick', label: 'При нажатии' }, { name: 'onChange', label: 'При изменении' }]

/** Доступные события для каждого типа контрола */
export const CONTROL_EVENTS: Record<FormControlType, EventDefinition[]> = {
  button: [],
  meta: [],
  text: [],
  input: [{ name: 'onChange', label: 'При изменении' }, { name: 'onBlur', label: 'При потере фокуса' }, { name: 'onFocus', label: 'При получении фокуса' }],
  checkbox: [{ name: 'onChange', label: 'При изменении' }],
  radio: [{ name: 'onChange', label: 'При изменении' }],
  select: [{ name: 'onChange', label: 'При изменении' }],
  toggle: [{ name: 'onChange', label: 'При изменении' }],
  markdown: [],
  grid: [],
  row: [],
  table: [],
  tabs: [{ name: 'onTabChange', label: 'При смене вкладки' }],
  toolbar: [{ name: 'onAction', label: 'При действии' }],
  icon: [{ name: 'onClick', label: 'При нажатии' }],
  ...Object.fromEntries(EXTRA_UI_DSL_TYPES.map((t) => [t, DEFAULT_UI_EVENTS])) as Record<ExtraUiDslType, EventDefinition[]>,
}

/** Доступные события уровня формы */
export const FORM_EVENTS: EventDefinition[] = [
  { name: 'onSubmit', label: 'При отправке' },
  { name: 'onInit', label: 'При инициализации' },
  { name: 'onChange', label: 'При изменении полей' },
  { name: 'onValidationError', label: 'При ошибке валидации' },
]

function normOption(x: unknown): { label: string; value: string } | null {
  if (!x || typeof x !== 'object' || !('value' in (x as object))) return null
  const o = x as Record<string, unknown>
  const label = typeof o.label === 'string' ? o.label : String(o.value ?? '')
  const value = typeof o.value === 'string' ? o.value : String(o.value ?? '')
  return { label, value }
}

/** Извлекает путь из обработчика вида () => import("./path") или () => import(`./path`) */
function getImportPathFromHandler(fn: (() => Promise<unknown>) | unknown): string | null {
  try {
    const s = typeof fn === 'function' ? String(fn) : ''
    const m = s.match(/import\s*\(\s*["`']\.\/([^"`']+)["`']\s*\)/)
    return m ? m[1].replace(/\\/g, '/') : null
  } catch {
    return null
  }
}

function is_lazy_dynamic_import_fn(fn: unknown): boolean {
  if (typeof fn !== 'function') return false
  if ((fn as (...args: unknown[]) => unknown).length !== 0) return false
  return /import\s*\(/.test(String(fn))
}

/** Нормализует один контрол из загруженных данных (JSON/JS). Принимаются только семантические типы (button, text, tabs, alert и т.д.). */
function normalizeControl(item: unknown): FormControl | null {
  if (!item || typeof item !== 'object' || !('id' in item)) return null
  const o = item as Record<string, unknown>
  const id = String(o.id)
  const fieldName = typeof o.fieldName === 'string' ? o.fieldName : undefined
  const defaultValue = o.defaultValue
  const dataType = (['string', 'number', 'boolean', 'date', 'array'].includes(o.dataType as string))
    ? o.dataType as FormControlBase['dataType']
    : undefined
  const VALID_RULE_TYPES: ValidationRuleType[] = ['required', 'minLength', 'maxLength', 'min', 'max', 'pattern', 'custom']
  const validation: ValidationRule[] | undefined = Array.isArray(o.validation)
    ? (o.validation as unknown[])
        .filter((r): r is Record<string, unknown> => !!r && typeof r === 'object')
        .filter((r) => VALID_RULE_TYPES.includes(r.type as ValidationRuleType))
        .map((r) => ({
          type: r.type as ValidationRuleType,
          value: typeof r.value === 'string' || typeof r.value === 'number' ? r.value : undefined,
          message: typeof r.message === 'string' ? r.message : '',
        }))
    : undefined
  const VALID_CONDITION_OPS: Condition['operator'][] = ['eq', 'neq', 'gt', 'lt', 'contains', 'empty', 'notEmpty']
  const parseCondition = (raw: unknown): Condition | undefined => {
    if (!raw || typeof raw !== 'object') return undefined
    const r = raw as Record<string, unknown>
    if (typeof r.fieldName !== 'string' || !VALID_CONDITION_OPS.includes(r.operator as Condition['operator'])) return undefined
    return {
      fieldName: r.fieldName,
      operator: r.operator as Condition['operator'],
      value: typeof r.value === 'string' ? r.value : undefined,
    }
  }
  const visibleWhen = parseCondition(o.visibleWhen)
  const disabledWhen = parseCondition(o.disabledWhen)
  const dataBindPath =
    typeof o.dataBindPath === 'string' && o.dataBindPath.trim()
      ? o.dataBindPath.trim()
      : undefined
  const handlers: ControlHandlersMap = {}
  if (o.handlers && typeof o.handlers === 'object' && !Array.isArray(o.handlers)) {
    for (const [key, val] of Object.entries(o.handlers as Record<string, unknown>)) {
      if (typeof val === 'string' && val) handlers[key] = val
      else if (typeof val === 'function') {
        if (is_lazy_dynamic_import_fn(val)) {
          handlers[key] = val as () => Promise<unknown>
        } else {
          const path = getImportPathFromHandler(val)
          if (path) {
            handlers[key] = path
          } else {
            const fn = val as (...args: unknown[]) => unknown
            if (fn.length >= 1) handlers[key] = fn
          }
        }
      }
    }
  }
  const applyFieldBinding = <T extends FormControlBase>(c: T): T => {
    if (fieldName) c.fieldName = fieldName
    if (defaultValue !== undefined) c.defaultValue = defaultValue
    if (dataType) c.dataType = dataType
    if (validation && validation.length > 0) c.validation = validation
    if (visibleWhen) c.visibleWhen = visibleWhen
    if (disabledWhen) c.disabledWhen = disabledWhen
    if (dataBindPath) c.dataBindPath = dataBindPath
    if (Object.keys(handlers).length > 0) c.handlers = handlers
    return c
  }
  const type = o.type as string | undefined
  const kind = o.kind as string | undefined

  if (kind === 'button' || type === 'button') {
    const b: ButtonControl = { type: 'button', id }
    if (Object.keys(handlers).length > 0) b.handlers = handlers
    if (dataBindPath) b.dataBindPath = dataBindPath
    return b
  }
  if (type === 'text') {
    const c: TextControl = { type: 'text', id }
    return applyFieldBinding(c)
  }
  if (type === 'input') {
    const c: InputControl = { type: 'input', id }
    return applyFieldBinding(c)
  }
  if (type === 'checkbox') {
    const c: CheckboxControl = { type: 'checkbox', id }
    if (typeof o.text === 'string') c.text = o.text
    if (typeof o.checked === 'boolean') c.checked = o.checked
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readonly === 'boolean') c.readonly = o.readonly
    return applyFieldBinding(c)
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
    return applyFieldBinding(c)
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
    return applyFieldBinding(c)
  }
  if (type === 'toggle') {
    const c: ToggleControl = { type: 'toggle', id }
    if (typeof o.text === 'string') c.text = o.text
    if (typeof o.checked === 'boolean') c.checked = o.checked
    if (typeof o.disabled === 'boolean') c.disabled = o.disabled
    if (typeof o.readonly === 'boolean') c.readonly = o.readonly
    if (o.labelPosition === 'after' || o.labelPosition === 'before') c.labelPosition = o.labelPosition
    return applyFieldBinding(c)
  }
  if (type === 'markdown') {
    const c: MarkdownControl = { type: 'markdown', id }
    if (typeof o.content === 'string') c.content = o.content
    return applyFieldBinding(c)
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
    return applyFieldBinding(c)
  }
  if (EXTRA_UI_DSL_TYPES.includes(type as ExtraUiDslType)) {
    const props: Record<string, string> = {}
    if (o.props && typeof o.props === 'object' && !Array.isArray(o.props)) {
      for (const k of Object.keys(o.props as Record<string, unknown>)) {
        const v = (o.props as Record<string, unknown>)[k]
        if (typeof v === 'string') props[k] = v
        else if (v != null) props[k] = String(v)
      }
    }
    return applyFieldBinding({ type: type as ExtraUiDslType, id, props } as ExtraUiControl)
  }
  if (type === 'grid') {
    const rawChildren = Array.isArray(o.children) ? o.children : []
    const children: (FormControl | null)[] = rawChildren.map((x: unknown) => {
      if (x === null) return null
      return normalizeControl(x)
    })
    const c: GridControl = { type: 'grid', id, children }
    return applyFieldBinding(c)
  }
  if (type === 'row') {
    const c: RowControl = { type: 'row', id, children: [] }
    if (typeof o.gap === 'number') c.gap = o.gap
    if (o.align === 'start' || o.align === 'center' || o.align === 'end') c.align = o.align
    if (Array.isArray(o.children)) {
      c.children = o.children.map(normalizeControl).filter((x): x is FormControl => x != null)
    }
    return applyFieldBinding(c)
  }
  if (type === 'table') {
    const rawChildren = Array.isArray(o.children) ? o.children : []
    const children: (FormControl | null)[] = rawChildren.map((x: unknown) => {
      if (x === null) return null
      return normalizeControl(x)
    })
    const c: TableControl = { type: 'table', id, children }
    return applyFieldBinding(c)
  }
  if (type === 'tabs') {
    const c: TabsControl = { type: 'tabs', id, items: [] }
    if (Array.isArray(o.items)) {
      c.items = o.items.map((item: unknown, index: number) => {
        const x = item as Record<string, unknown>
        const key = typeof x.key === 'string' && x.key
          ? x.key
          : `tab-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 9)}`
        const label = typeof x.label === 'string' ? x.label : key
        const children: (FormControl | null)[] = []
        if (Array.isArray(x.children)) {
          const list = (x.children as unknown[]).map(normalizeControl)
          list.forEach((ch) => children.push(ch))
        }
        return { key, label, children }
      })
    }
    if (c.items.length === 0) {
      c.items = [
        { key: 'tab1', label: 'Вкладка 1', children: [] },
        { key: 'tab2', label: 'Вкладка 2', children: [] },
      ]
    }
    if (typeof o.activeKey === 'string' && c.items.some((it) => it.key === o.activeKey)) {
      c.activeKey = o.activeKey
    } else {
      c.activeKey = c.items[0]?.key ?? undefined
    }
    return applyFieldBinding(c)
  }
  if (type === 'toolbar') {
    const c: ToolbarControl = { type: 'toolbar', id, left: [], right: [] }
    const normItem = (x: unknown): ToolbarItem | null => {
      if (!x || typeof x !== 'object' || !('key' in (x as object))) return null
      const item = x as Record<string, unknown>
      const key = String(item.key ?? '')
      const t = item.type === 'divider' ? 'divider' : 'button'
      if (t === 'divider') return { type: 'divider', key }
      return { type: 'button', key, label: typeof item.label === 'string' ? item.label : '' }
    }
    if (Array.isArray(o.left)) c.left = o.left.map(normItem).filter((x): x is ToolbarItem => x != null)
    if (Array.isArray(o.right)) c.right = o.right.map(normItem).filter((x): x is ToolbarItem => x != null)
    if (typeof o.leftLimit === 'number') c.leftLimit = o.leftLimit
    if (typeof o.sticky === 'number') c.sticky = o.sticky
    if (typeof o.autoDropdown === 'boolean') c.autoDropdown = o.autoDropdown
    if (dataBindPath) c.dataBindPath = dataBindPath
    if (Object.keys(handlers).length > 0) c.handlers = handlers
    return c
  }
  if (type === 'icon') {
    const c: IconControl = { type: 'icon', id }
    if (typeof o.name === 'string') c.name = o.name
    if (o.size === 16 || o.size === 24) c.size = o.size
    return applyFieldBinding(c)
  }
  return null
}

function serialize_handlers_for_json(
  h: ControlHandlersMap,
): Record<string, string> {
  const o: Record<string, string> = {}
  for (const [k, v] of Object.entries(h)) {
    if (typeof v === 'string' && v) o[k] = v
    else if (typeof v === 'function') {
      const p = getImportPathFromHandler(v as () => Promise<unknown>)
      if (p) o[k] = p
    }
  }
  return o
}

export function controlToJson(c: FormControl): Record<string, unknown> {
  if (c.type === 'button') {
    const b = c as ButtonControl
    const o: Record<string, unknown> = { type: 'button', id: b.id }
    if (b.handlers && Object.keys(b.handlers).length > 0) {
      o.handlers = serialize_handlers_for_json(b.handlers)
    }
    if (b.dataBindPath) o.dataBindPath = b.dataBindPath
    return o
  }
  const bc = c as FormControlBase
  const base: Record<string, unknown> = { type: c.type, id: c.id }
  if (bc.fieldName) base.fieldName = bc.fieldName
  if (bc.dataBindPath) base.dataBindPath = bc.dataBindPath
  if (bc.defaultValue !== undefined) base.defaultValue = bc.defaultValue
  if (bc.dataType) base.dataType = bc.dataType
  if (bc.validation && bc.validation.length > 0) base.validation = bc.validation
  if (bc.visibleWhen) base.visibleWhen = bc.visibleWhen
  if (bc.disabledWhen) base.disabledWhen = bc.disabledWhen
  if (bc.handlers && Object.keys(bc.handlers).length > 0) {
    base.handlers = serialize_handlers_for_json(bc.handlers)
  }
  if (c.type === 'text') {
    return { ...base }
  }
  if (c.type === 'input') {
    return { ...base }
  }
  if (c.type === 'checkbox') {
    const x = c as CheckboxControl
    return { ...base, text: x.text ?? '', checked: x.checked, disabled: x.disabled, readonly: x.readonly }
  }
  if (c.type === 'radio') {
    const r = c as RadioControl
    return { ...base, options: r.options ?? [], value: r.value, disabled: r.disabled, readonly: r.readonly, vertical: r.vertical }
  }
  if (c.type === 'select') {
    const s = c as SelectControl
    return { ...base, options: s.options ?? [], value: s.value, placeholder: s.placeholder, disabled: s.disabled, readOnly: s.readOnly, mode: s.mode, allowClear: s.allowClear }
  }
  if (c.type === 'toggle') {
    const t = c as ToggleControl
    return { ...base, text: t.text ?? '', checked: t.checked, disabled: t.disabled, readonly: t.readonly, labelPosition: t.labelPosition }
  }
  if (c.type === 'markdown') {
    const m = c as MarkdownControl
    return { ...base, content: m.content ?? '' }
  }
  if (c.type === 'meta') {
    const m = c as MetaComponentControl
    return { ...base, type: 'meta', componentId: m.componentId, props: { ...m.props } }
  }
  if (EXTRA_UI_DSL_TYPES.includes(c.type as ExtraUiDslType)) {
    const u = c as ExtraUiControl
    return { ...base, props: { ...u.props } }
  }
  if (c.type === 'grid') {
    const g = c as GridControl
    return {
      ...base,
      children: g.children.map((ch) => (ch ? controlToJson(ch) : null)),
    }
  }
  if (c.type === 'row') {
    const r = c as RowControl
    const res: Record<string, unknown> = { ...base, children: r.children.map(controlToJson) }
    if (r.gap != null) res.gap = r.gap
    if (r.align) res.align = r.align
    return res
  }
  if (c.type === 'table') {
    const t = c as TableControl
    return {
      ...base,
      children: t.children.map((ch) => (ch ? controlToJson(ch) : null)),
    }
  }
  if (c.type === 'tabs') {
    const t = c as TabsControl
    const out: Record<string, unknown> = {
      ...base,
      items: t.items.map((item) => ({
        key: item.key,
        label: item.label,
        children: item.children.map((ch) => (ch ? controlToJson(ch) : null)),
      })),
    }
    if (t.activeKey != null) out.activeKey = t.activeKey
    return out
  }
  if (c.type === 'toolbar') {
    const t = c as ToolbarControl
    const out: Record<string, unknown> = {
      ...base,
      left: t.left ?? [],
      right: t.right ?? [],
    }
    if (t.leftLimit != null) out.leftLimit = t.leftLimit
    if (t.sticky != null) out.sticky = t.sticky
    if (t.autoDropdown != null) out.autoDropdown = t.autoDropdown
    return out
  }
  if (c.type === 'icon') {
    const i = c as IconControl
    return { ...base, name: i.name ?? '', size: i.size ?? 16 }
  }
  return base
}

/** Создаёт пустую форму (используется при закрытии, инициализации, ошибке загрузки) */
export function createEmptyFormData(): FormData {
  return { id: `form-${Date.now()}`, elements: [] }
}

const emptyFormData = createEmptyFormData

/** Нормализует сырые данные (из JSON или default export JS-модуля) в FormData. */
export function normalizeFormData(data: unknown): FormData {
  if (Array.isArray(data)) {
    const elements = data
      .map(normalizeControl)
      .filter((x: FormControl | null): x is FormControl => x != null)
    return { id: `form-${Date.now()}`, elements }
  }
  if (data && typeof data === 'object' && Array.isArray((data as { elements?: unknown }).elements)) {
    const obj = data as {
      id?: unknown
      schema?: unknown
      modelContract?: unknown
      handlers?: unknown
      elements: unknown[]
    }
    const elements = obj.elements
      .map(normalizeControl)
      .filter((x: FormControl | null): x is FormControl => x != null)
    const result: FormData = {
      id: typeof obj.id === 'string' ? obj.id : `form-${Date.now()}`,
      elements,
    }
    if (obj.schema && typeof obj.schema === 'object' && !Array.isArray(obj.schema)) {
      const schema: Record<string, FieldSchema> = {}
      for (const [key, val] of Object.entries(obj.schema as Record<string, unknown>)) {
        if (val && typeof val === 'object') {
          const v = val as Record<string, unknown>
          const fieldType = (['string', 'number', 'boolean', 'date', 'array'].includes(v.type as string))
            ? v.type as FieldSchema['type']
            : 'string'
          schema[key] = { type: fieldType, label: typeof v.label === 'string' ? v.label : undefined }
        }
      }
      if (Object.keys(schema).length > 0) result.schema = schema
    }
    if (obj.handlers && typeof obj.handlers === 'object' && !Array.isArray(obj.handlers)) {
      const formHandlers: FormData['handlers'] = {}
      for (const [key, val] of Object.entries(obj.handlers as Record<string, unknown>)) {
        if (typeof val === 'string' && val) formHandlers[key] = val
        else if (typeof val === 'function') {
          // Предпочитаем переданную в schema функцию как есть
          formHandlers[key] = val as (...args: unknown[]) => unknown
        }
      }
      if (Object.keys(formHandlers).length > 0) result.handlers = formHandlers
    }
    if (obj.modelContract != null) {
      if (typeof obj.modelContract === 'string' && obj.modelContract) {
        result.modelContract = obj.modelContract
      } else if (typeof obj.modelContract === 'function') {
        result.modelContract = obj.modelContract as NonNullable<
          FormData['modelContract']
        >
      }
    }
    return result
  }
  return emptyFormData()
}

/** Сериализует форму в JSON (новый формат: корень с name, id, schema, handlers, elements). */
export function formToJson(form: FormData): Record<string, unknown> {
  const result: Record<string, unknown> = {
    id: form.id,
  }
  if (form.schema && Object.keys(form.schema).length > 0) {
    result.schema = form.schema
  }
  if (form.handlers && Object.keys(form.handlers).length > 0) {
    const serialized: Record<string, string> = {}
    for (const [k, v] of Object.entries(form.handlers)) {
      if (typeof v === 'string' && v) serialized[k] = v
      else if (typeof v === 'function') {
        const p = getImportPathFromHandler(v as () => Promise<unknown>)
        if (p) serialized[k] = p
      }
    }
    if (Object.keys(serialized).length > 0) result.handlers = serialized
  }
  if (form.modelContract != null) {
    if (typeof form.modelContract === 'string' && form.modelContract) {
      result.modelContract = form.modelContract
    } else if (typeof form.modelContract === 'function') {
      const p = getImportPathFromHandler(form.modelContract as () => Promise<unknown>)
      if (p) result.modelContract = p
    }
  }
  result.elements = form.elements.map(controlToJson)
  return result
}

/** Сериализует форму в строку JSON для безопасного сохранения и загрузки. */
export function formToJsonString(form: FormData): string {
  return JSON.stringify(formToJson(form), null, 2)
}

/**
 * Сериализует форму в исходник TS-модуля (валидный подмножеством TypeScript).
 * Обработчики — `() => import("./path")`.
 */
export function formToTs(form: FormData): string {
  const elementsSource = form.elements.map((c) => controlToJsSource(c)).join(',\n')
  const idEsc = JSON.stringify(form.id)
  let schemaSource = ''
  if (form.schema && Object.keys(form.schema).length > 0) {
    schemaSource = `\n  schema: ${formatJsValue(form.schema, '  ')},`
  }
  let handlersSource = ''
  if (form.handlers && Object.keys(form.handlers).length > 0) {
    const converted: Record<string, string> = {}
    for (const [key, val] of Object.entries(form.handlers)) {
      if (typeof val === 'string' && val) {
        const pathEsc = val.replace(/\\/g, '/')
        converted[key] = `() => import(${JSON.stringify('./' + pathEsc)})`
      } else if (typeof val === 'function') {
        const p = getImportPathFromHandler(val as () => Promise<unknown>)
        if (p) {
          const pathEsc = p.replace(/\\/g, '/')
          converted[key] = `() => import(${JSON.stringify('./' + pathEsc)})`
        }
      }
    }
    if (Object.keys(converted).length > 0) {
      handlersSource = `\n  handlers: ${formatJsValue(converted, '  ')},`
    }
  }
  let modelContractSource = ''
  const mc = form.modelContract
  if (mc != null) {
    if (typeof mc === 'string' && mc) {
      const pathEsc = mc.replace(/\\/g, '/').replace(/^\.\//, '')
      modelContractSource = `\n  modelContract: ${JSON.stringify('./' + pathEsc)},`
    } else if (typeof mc === 'function') {
      const p = getImportPathFromHandler(mc as () => Promise<unknown>)
      if (p) {
        const pathEsc = p.replace(/\\/g, '/')
        modelContractSource =
          `\n  modelContract: () => import(${JSON.stringify('./' + pathEsc)}),`
      }
    }
  }
  return `export default {
  id: ${idEsc},${schemaSource}${handlersSource}${modelContractSource}
  elements: [
${elementsSource}
  ]
}
`
}

/** Форматирует значение для литерала в TS-модуле: примитивы в одну строку, объекты/массивы — с переносами и отступами. */
function formatJsValue(val: unknown, indent: string): string {
  if (val === null || val === undefined) return 'null'
  if (typeof val === 'boolean') return val ? 'true' : 'false'
  if (typeof val === 'number') return String(val)
  if (typeof val === 'string') {
    if (val.startsWith('() => import(')) return val
    return JSON.stringify(val)
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]'
    const nextIndent = indent + '  '
    const lines = val.map((v) => nextIndent + formatJsValue(v, nextIndent))
    return '[\n' + lines.join(',\n') + '\n' + indent + ']'
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val as Record<string, unknown>).filter(([, v]) => v !== undefined)
    if (entries.length === 0) return '{}'
    const nextIndent = indent + '  '
    const lines = entries.map(([k, v]) => nextIndent + JSON.stringify(k) + ': ' + formatJsValue(v, nextIndent))
    return '{\n' + lines.join(',\n') + '\n' + indent + '}'
  }
  return 'null'
}

/** Рекурсивно заменяет в объекте (результат controlToJson) строковые handlers на строки-импорты. */
function convertHandlersToImportInObj(obj: Record<string, unknown>): void {
  const handlerEntries: [string, string][] = obj.handlers && typeof obj.handlers === 'object'
    ? Object.entries(obj.handlers as Record<string, string>)
    : []
  if (handlerEntries.length > 0) {
    const converted: Record<string, unknown> = {}
    for (const [key, val] of handlerEntries) {
      if (typeof val === 'string' && val) {
        const pathEsc = val.replace(/\\/g, '/')
        converted[key] = `() => import(${JSON.stringify('./' + pathEsc)})`
      }
    }
    if (Object.keys(converted).length > 0) {
      obj.handlers = converted
    }
  } else {
    delete obj.handlers
  }
  // Рекурсия: вложенные контролы (row, grid, table, tabs)
  if (Array.isArray(obj.children)) {
    obj.children.forEach((ch) => ch && typeof ch === 'object' && !Array.isArray(ch) && convertHandlersToImportInObj(ch as Record<string, unknown>))
  }
  if (Array.isArray(obj.items) && obj.items.every((i: unknown) => i && typeof i === 'object' && Array.isArray((i as { children?: unknown[] }).children))) {
    (obj.items as { children: unknown[] }[]).forEach((item) => {
      item.children.forEach((ch) => ch && typeof ch === 'object' && !Array.isArray(ch) && convertHandlersToImportInObj(ch as Record<string, unknown>))
    })
  }
}

/** Сериализует один контрол в фрагмент JS-исходника. Обработчики → динамический импорт: () => import("./path"). */
function controlToJsSource(c: FormControl): string {
  const obj = controlToJson(c) as Record<string, unknown>
  convertHandlersToImportInObj(obj)
  const indent = '      '
  const entries = Object.entries(obj).filter(([, v]) => v !== undefined)
  const lines = entries.map(([k, v]) => indent + JSON.stringify(k) + ': ' + formatJsValue(v, indent))
  return '    {\n' + lines.join(',\n') + '\n    }'
}

function getChildrenArray(c: FormControl): (FormControl | null)[] | null {
  if (c.type === 'grid') return (c as GridControl).children
  if (c.type === 'row') return (c as RowControl).children
  if (c.type === 'table') return (c as TableControl).children
  if (c.type === 'tabs') return null
  return null
}

function removeFromChildren(children: (FormControl | null)[], id: string): (FormControl | null)[] {
  return children.map((ch) => {
    if (!ch) return null
    if (ch.id === id) return null
    const kids = getChildrenArray(ch)
    if (kids) {
      const g = ch as GridControl | RowControl | TableControl
      return { ...g, children: removeFromChildren(g.children, id) } as FormControl
    }
    if (ch.type === 'tabs') {
      const t = ch as TabsControl
      const nextItems = t.items.map((item) => ({
        ...item,
        children: removeFromChildren(item.children, id),
      }))
      const newActive = t.activeKey && nextItems.some((it) => it.key === t.activeKey) ? t.activeKey : nextItems[0]?.key
      return { ...t, items: nextItems, activeKey: newActive } as FormControl
    }
    return ch
  })
}

/** Удаляет контрол из дерева по id (включая вложенные в grid/table/tabs) */
export function removeControlFromTree(controls: FormControl[], id: string): FormControl[] {
  return removeFromChildren(controls as (FormControl | null)[], id).filter((c): c is FormControl => c != null)
}

/** Обходит все контролы в дереве (включая вложенные в grid/table/tabs) */
export function forEachControlInTree(controls: FormControl[], fn: (c: FormControl) => void): void {
  for (const c of controls) {
    fn(c)
    const kids = getChildrenArray(c)
    if (kids) {
      const nonNull = kids.filter((ch): ch is FormControl => ch != null)
      forEachControlInTree(nonNull, fn)
    }
    if (c.type === 'tabs') {
      const t = c as TabsControl
      for (const item of t.items) {
        const nonNull = item.children.filter((ch): ch is FormControl => ch != null)
        forEachControlInTree(nonNull, fn)
      }
    }
  }
}

const CONTROL_TYPES_WITH_USE_CONFIG = new Set<FormControlType>([
  'button',
  'text',
  'input',
  'grid',
  'table',
])

/** Узлы с Hexa-конфигом и заданным **`handlers.useConfig`** (для загрузки в рантайме). */
export function collectControlsWithUseConfig(
  elements: FormControl[],
): { id: string; useConfigRaw: unknown }[] {
  const rows: { id: string; useConfigRaw: unknown }[] = []
  forEachControlInTree(elements, (c) => {
    if (!CONTROL_TYPES_WITH_USE_CONFIG.has(c.type)) return
    const h = (c as FormControlBase | ButtonControl).handlers
    const raw = h?.useConfig
    if (raw != null) rows.push({ id: c.id, useConfigRaw: raw })
  })
  return rows
}

/** Находит контрол в дереве по id (включая вложенные в grid/table/tabs) */
export function findControlInTree(controls: FormControl[], id: string): FormControl | null {
  for (const c of controls) {
    if (c.id === id) return c
    const kids = getChildrenArray(c)
    if (kids) {
      const nonNull = kids.filter((x: FormControl | null): x is FormControl => x != null)
      const found = findControlInTree(nonNull, id)
      if (found) return found
    }
    if (c.type === 'tabs') {
      const t = c as TabsControl
      for (const item of t.items) {
        const nonNull = item.children.filter((x): x is FormControl => x != null)
        const found = findControlInTree(nonNull, id)
        if (found) return found
      }
    }
  }
  return null
}

/** Обновляет контрол в дереве по id */
export function updateControlInTree(
  controls: FormControl[],
  id: string,
  patch: Partial<FormControl>
): FormControl[] {
  return controls.map((c) => {
    if (c.id === id) return { ...c, ...patch } as FormControl
    const kids = getChildrenArray(c)
    if (kids) {
      const g = c as GridControl | RowControl | TableControl
      return {
        ...g,
        children: g.children.map((ch) =>
          ch == null ? null : (updateControlInTree([ch], id, patch)[0] ?? ch)
        ),
      } as FormControl
    }
    if (c.type === 'tabs') {
      const t = c as TabsControl
      return {
        ...t,
        items: t.items.map((item) => ({
          ...item,
          children: item.children.map((ch) =>
            ch == null ? null : (updateControlInTree([ch], id, patch)[0] ?? ch)
          ),
        })),
      } as FormControl
    }
    return c
  })
}

/** Заменяет массив дочерних контролов у grid по id (ищет grid в том числе внутри tabs). */
export function setGridChildrenInTree(
  controls: (FormControl | null)[],
  gridId: string,
  children: (FormControl | null)[]
): (FormControl | null)[] {
  return controls.map((c) => {
    if (!c) return null
    if (c.type === 'grid' && c.id === gridId) {
      return { ...c, children } as GridControl
    }
    if (c.type === 'grid') {
      return {
        ...c,
        children: setGridChildrenInTree((c as GridControl).children, gridId, children),
      } as GridControl
    }
    if (c.type === 'table') {
      return {
        ...c,
        children: setGridChildrenInTree((c as TableControl).children, gridId, children),
      } as TableControl
    }
    if (c.type === 'row') {
      return { ...c, children: setGridChildrenInTree((c as RowControl).children, gridId, children).filter((x): x is FormControl => x != null) } as RowControl
    }
    if (c.type === 'tabs') {
      return {
        ...c,
        items: (c as TabsControl).items.map((item) => ({
          ...item,
          children: setGridChildrenInTree(item.children, gridId, children),
        })),
      } as FormControl
    }
    return c
  })
}

/** Заменяет массив дочерних контролов у row по id (ищет row в том числе внутри других контейнеров). */
export function setRowChildrenInTree(
  controls: (FormControl | null)[],
  rowId: string,
  children: FormControl[]
): (FormControl | null)[] {
  return controls.map((c) => {
    if (!c) return null
    if (c.type === 'row' && c.id === rowId) {
      return { ...c, children } as RowControl
    }
    if (c.type === 'row') {
      return { ...c, children: setRowChildrenInTree((c as RowControl).children, rowId, children).filter((x): x is FormControl => x != null) } as RowControl
    }
    if (c.type === 'grid') {
      return { ...c, children: setRowChildrenInTree((c as GridControl).children, rowId, children) } as GridControl
    }
    if (c.type === 'table') {
      return { ...c, children: setRowChildrenInTree((c as TableControl).children, rowId, children) } as TableControl
    }
    if (c.type === 'tabs') {
      return {
        ...c,
        items: (c as TabsControl).items.map((item) => ({
          ...item,
          children: setRowChildrenInTree(item.children, rowId, children),
        })),
      } as FormControl
    }
    return c
  })
}

/** Заменяет массив дочерних контролов у table по id (ищет table в том числе внутри tabs). */
export function setTableChildrenInTree(
  controls: (FormControl | null)[],
  tableId: string,
  children: (FormControl | null)[]
): (FormControl | null)[] {
  return controls.map((c) => {
    if (!c) return null
    if (c.type === 'table' && c.id === tableId) {
      return { ...c, children } as TableControl
    }
    if (c.type === 'table') {
      return {
        ...c,
        children: setTableChildrenInTree((c as TableControl).children, tableId, children),
      } as TableControl
    }
    if (c.type === 'grid') {
      return {
        ...c,
        children: setTableChildrenInTree((c as GridControl).children, tableId, children),
      } as GridControl
    }
    if (c.type === 'row') {
      return { ...c, children: setTableChildrenInTree((c as RowControl).children, tableId, children).filter((x): x is FormControl => x != null) } as RowControl
    }
    if (c.type === 'tabs') {
      return {
        ...c,
        items: (c as TabsControl).items.map((item) => ({
          ...item,
          children: setTableChildrenInTree(item.children, tableId, children),
        })),
      } as FormControl
    }
    return c
  })
}

/** Заменяет массив дочерних контролов у одной вкладки табов по id табов и индексу вкладки. */
export function setTabsChildrenInTree(
  controls: (FormControl | null)[],
  tabsId: string,
  tabIndex: number,
  children: (FormControl | null)[]
): (FormControl | null)[] {
  return controls.map((c) => {
    if (!c) return null
    if (c.type === 'tabs' && c.id === tabsId) {
      const t = c as TabsControl
      const nextItems = t.items.map((item, i) =>
        i === tabIndex ? { ...item, children } : item
      )
      return { ...t, items: nextItems } as FormControl
    }
    if (c.type === 'grid') {
      return {
        ...c,
        children: setTabsChildrenInTree((c as GridControl).children, tabsId, tabIndex, children),
      } as FormControl
    }
    if (c.type === 'table') {
      return {
        ...c,
        children: setTabsChildrenInTree((c as TableControl).children, tabsId, tabIndex, children),
      } as FormControl
    }
    if (c.type === 'row') {
      return { ...c, children: setTabsChildrenInTree((c as RowControl).children, tabsId, tabIndex, children).filter((x): x is FormControl => x != null) } as RowControl
    }
    if (c.type === 'tabs') {
      return {
        ...c,
        items: (c as TabsControl).items.map((item) => ({
          ...item,
          children: setTabsChildrenInTree(item.children, tabsId, tabIndex, children),
        })),
      } as FormControl
    }
    return c
  })
}
