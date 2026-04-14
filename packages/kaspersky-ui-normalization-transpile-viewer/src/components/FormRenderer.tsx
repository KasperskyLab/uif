import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  createContext,
  useContext,
} from 'react'
import type {
  ButtonProps,
  GridProps,
  ITableProps,
  TextProps,
  TextboxProps,
} from '@kaspersky/hexa-ui'
import {
  Button,
  Text,
  Textbox,
  Select,
  Checkbox,
  Radio,
  Toggle,
  Grid,
  GridItem,
  Table,
  Space,
  SectionMessage,
  Tag,
  Loader,
  Badge,
  H6,
  Divider,
  Link,
  Field,
} from '@kaspersky/hexa-ui'
import {
  EXTRA_UI_DSL_TYPES,
  getComponentIdFromDslType,
  getInitialFormStateFromElements,
  resolveLifecycleHandler,
  resolveConfigHookFactory,
  resolveTsModulePathFromValue,
  splitFormConfigHookFactoryResult,
  type ButtonControl,
  type CheckboxControl,
  type ExtraUiControl,
  type FormConfigHookLifecycle,
  type FormControl,
  type FormSlice,
  type GridControl,
  type InputControl,
  type MetaComponentControl,
  type RadioControl,
  type SelectControl,
  type TableControl,
  type TextControl,
  type ToggleControl,
} from '@/types/form-dsl'
import { loadConfigHookDefaultExport } from '@/utils/loadConfigHookModule'
import { loadTsModule } from '@/utils/loadConfigHookModule'
import {
  defaultGridLayoutRows,
  DEFAULT_GRID_LAYOUT_PROPERTY,
} from '@/utils/defaultGridHexaProps'
import { buildTableMatrixColumnsAndDataSource } from '@/utils/tableControlHexa'

const META_COMPONENT_MAP: Record<string, React.ComponentType<Record<string, unknown>>> = {
  Button,
  Text,
  Textbox,
  Select,
  Checkbox: Checkbox as unknown as React.ComponentType<Record<string, unknown>>,
  Radio: Radio as unknown as React.ComponentType<Record<string, unknown>>,
  Toggle,
  Space,
  H6,
  Divider,
  Link,
  SectionMessage: SectionMessage as unknown as React.ComponentType<Record<string, unknown>>,
  Tag,
  Loader,
  Badge,
}

function coercePropValue(v: string): string | number | boolean | object {
  if (v === 'true') return true
  if (v === 'false') return false
  const n = Number(v)
  if (v !== '' && !Number.isNaN(n)) return n
  try {
    const parsed = JSON.parse(v)
    if (typeof parsed === 'object' && parsed !== null) return parsed
  } catch (_) {}
  return v
}

const formRowStyle: React.CSSProperties = {
  marginBottom: 16,
}

const gridWrapStyle: React.CSSProperties = {
  width: '100%',
  padding: 8,
  borderRadius: 8,
  border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #FFF)',
  boxSizing: 'border-box',
}

const tableWrapStyle: React.CSSProperties = {
  ...gridWrapStyle,
  overflow: 'auto',
}

export type { FormSlice } from '@/types/form-dsl'

function padOrTruncateChildren(
  children: (FormControl | null)[],
  targetLength: number,
): (FormControl | null)[] {
  if (children.length === targetLength) return children
  const result = [...children]
  while (result.length < targetLength) result.push(null)
  if (result.length > targetLength) result.splice(targetLength)
  return result
}

function getTableTemplateRowChildren(
  children: (FormControl | null)[],
  cols: number,
  rows: number,
): (FormControl | null)[] {
  const full = rows * cols
  const slice =
    children.length >= full ? children.slice(0, cols) : children
  return padOrTruncateChildren(slice, cols)
}

type ButtonConfigHookFn = (formSlice: FormSlice) => ButtonProps | null

type TextConfigHookFn = (formSlice: FormSlice) => TextProps | null

type GridConfigHookFn = (formSlice: FormSlice) => Partial<GridProps> | null

type TableConfigHookFn = (formSlice: FormSlice) => Partial<ITableProps> | null

/** Хук таблицы: только `Partial<ITableProps>`; `children` приходит как у Hexa — не пробрасываем в `<Table />` при сборке матрицы DSL. */
type TableHookResult = Partial<ITableProps> | null

/** Расширение `TextboxProps`: подпись для обёртки Hexa `Field` (в Hexa у Textbox нет label). */
type InputHookResult =
  | (Partial<TextboxProps> & { fieldLabel?: string })
  | null

type InputConfigHookFn = (formSlice: FormSlice) => InputHookResult

/** Реестр: control.id → хук (результат вызова default export модуля формы). */
type ConfigHookRegistry = Record<string, (formSlice: FormSlice) => unknown>

const FormConfigHookContext = createContext<{
  registry: ConfigHookRegistry | null
  loading: boolean
  path: string | null
}>({ registry: null, loading: false, path: null })

function ButtonWithHook({
  hookFn,
  formSlice,
}: {
  hookFn: ButtonConfigHookFn
  formSlice: FormSlice
}): React.ReactElement | null {
  const props = hookFn(formSlice)
  if (props === null) return null
  return <Button {...props} />
}

function ButtonRenderer({
  control,
  formSlice,
}: {
  control: ButtonControl
  formSlice: FormSlice
}): React.ReactElement | null {
  const { registry, loading, path } = useContext(FormConfigHookContext)
  const hookFn = (registry?.[control.id] ?? null) as ButtonConfigHookFn | null

  if (!path || !hookFn) {
    if (path && loading) {
      return <Button mode="tertiary" text={`[${control.id}]`} disabled loading />
    }
    return <Button mode="tertiary" text={`[${control.id}]`} disabled />
  }
  return <ButtonWithHook hookFn={hookFn} formSlice={formSlice} />
}

function TextWithHook({
  hookFn,
  formSlice,
}: {
  hookFn: TextConfigHookFn
  formSlice: FormSlice
}): React.ReactElement | null {
  const props = hookFn(formSlice)
  if (props === null) return null
  return <Text {...props} />
}

function TextRenderer({
  control,
  formSlice,
}: {
  control: TextControl
  formSlice: FormSlice
}): React.ReactElement | null {
  const { registry, loading, path } = useContext(FormConfigHookContext)
  const hookFn = (registry?.[control.id] ?? null) as TextConfigHookFn | null

  if (!path || !hookFn) {
    if (path && loading) {
      return (
        <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
          …
        </Text>
      )
    }
    return (
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        [{control.id}]
      </Text>
    )
  }
  return <TextWithHook hookFn={hookFn} formSlice={formSlice} />
}

function InputRenderer({
  control,
  formSlice,
  value,
  updateValue,
}: {
  control: InputControl
  formSlice: FormSlice
  value: string
  updateValue: (id: string, v: unknown) => void
}): React.ReactElement | null {
  const { registry, loading, path } = useContext(FormConfigHookContext)
  const hookFn = (registry?.[control.id] ?? null) as InputConfigHookFn | null

  if (!path || !hookFn) {
    if (path && loading) {
      return (
        <div data-control-id={control.id} style={formRowStyle}>
          <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
            …
          </Text>
        </div>
      )
    }
    return (
      <div data-control-id={control.id} style={formRowStyle}>
        <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
          Поле «{control.id}»: задайте form configHook и запись реестра с этим id
        </Text>
      </div>
    )
  }

  const partial = hookFn(formSlice)
  if (partial === null) return null

  const { fieldLabel, value: _hv, onChange: _hoc, ...textboxRest } = partial
  const textbox = (
    <Textbox
      {...textboxRest}
      value={value}
      onChange={(v) => updateValue(control.id, v ?? '')}
    />
  )
  return (
    <div data-control-id={control.id} style={formRowStyle}>
      {fieldLabel ? (
        <Field label={fieldLabel} labelPosition="top" control={textbox} />
      ) : (
        textbox
      )}
    </div>
  )
}

function GridRenderer({
  control: g,
  formSlice,
  renderControl,
}: {
  control: GridControl
  formSlice: FormSlice
  renderControl: (c: FormControl) => React.ReactNode
}): React.ReactElement | null {
  const { registry, loading, path } = useContext(FormConfigHookContext)
  const hookFn = (registry?.[g.id] ?? null) as GridConfigHookFn | null

  const loadingBlock = (
    <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
      <Text type="BTR3" style={{ color: 'var(--text--secondary)', marginBottom: 8 }}>
        …
      </Text>
    </div>
  )

  const missingHookBlock = (
    <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        Сетка «{g.id}»: задайте форменный configHook и запись реестра с этим id
      </Text>
    </div>
  )

  if (!path || !hookFn) {
    if (path && loading) return loadingBlock
    return missingHookBlock
  }
  const partial = hookFn(formSlice)
  if (partial === null) return null
  const { children: _ch, ...hookRest } = partial
  const effectiveCols = hookRest.cols
  if (
    effectiveCols == null ||
    typeof effectiveCols !== 'number' ||
    effectiveCols < 1
  ) {
    return (
      <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
        <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
          Сетка «{g.id}»: хук должен вернуть cols (целое число ≥ 1)
        </Text>
      </div>
    )
  }
  const hasHookLayout = 'layout' in hookRest && hookRest.layout != null
  const effectiveChildren = padOrTruncateChildren(
    g.children,
    hasHookLayout
      ? g.children.length
      : Math.ceil(g.children.length / effectiveCols) * effectiveCols,
  )
  const effectiveRows = Math.ceil(effectiveChildren.length / effectiveCols)
  return (
    <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
      <Grid
        layout={defaultGridLayoutRows(effectiveRows)}
        layoutProperty={DEFAULT_GRID_LAYOUT_PROPERTY}
        {...hookRest}
        cols={effectiveCols}
      >
        {effectiveChildren.map((ch, i) => (
          <GridItem key={`${g.id}-cell-${String(i)}`} style={{ minHeight: 32 }}>
            <div data-container-id={g.id} data-grid-cell-index={i} style={{ height: '100%' }}>
              {ch ? renderControl(ch) : null}
            </div>
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}

function TableRenderer({
  control: t,
  formSlice,
  renderControl,
}: {
  control: TableControl
  formSlice: FormSlice
  renderControl: (c: FormControl) => React.ReactNode
}): React.ReactElement | null {
  const { registry, loading, path } = useContext(FormConfigHookContext)
  const hookFn = (registry?.[t.id] ?? null) as TableConfigHookFn | null

  const loadingBlock = (
    <div data-control-id={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
      <Text type="BTR3" style={{ color: 'var(--text--secondary)', marginBottom: 8 }}>
        …
      </Text>
    </div>
  )

  const missingHookBlock = (
    <div data-control-id={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        Таблица «{t.id}»: задайте форменный configHook и запись реестра с этим id
      </Text>
    </div>
  )

  if (!path || !hookFn) {
    if (path && loading) return loadingBlock
    return missingHookBlock
  }

  const partial = hookFn(formSlice) as TableHookResult
  if (partial === null) return null

  const {
    columns: hookColumns,
    dataSource: hookDataSource,
    dataSourceFunction: hookDataSourceFunction,
    children: _tableChildren,
    ...hookRest
  } = partial

  const columnCount = Array.isArray(hookColumns) ? hookColumns.length : 0
  const rowCount = Array.isArray(hookDataSource) ? hookDataSource.length : 0

  if (hookDataSourceFunction != null) {
    return (
      <div data-control-id={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
        <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
          Таблица «{t.id}»: для DSL-матрицы укажите массив dataSource (число строк), не
          dataSourceFunction
        </Text>
      </div>
    )
  }

  if (columnCount < 1 || rowCount < 1) {
    return (
      <div data-control-id={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
        <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
          Таблица «{t.id}»: хук должен вернуть columns и dataSource — массивы длины ≥ 1
          (размерность матрицы ячеек DSL)
        </Text>
      </div>
    )
  }

  const templateChildren = getTableTemplateRowChildren(
    t.children,
    columnCount,
    rowCount,
  )

  const { dataSource, columns } = useMemo(
    () =>
      buildTableMatrixColumnsAndDataSource(
        t,
        ({ rowIndex, colIndex, record }) => {
          const ch = templateChildren[colIndex]
          const cellSlice: FormSlice = {
            ...formSlice,
            tableRow: record as Record<string, unknown>,
            tableRowIndex: rowIndex,
          }
          const cellKey = `${t.id}-r${rowIndex}-c${colIndex}-${ch?.id ?? 'empty'}`
          return (
            <div
              key={cellKey}
              data-container-id={t.id}
              data-table-row={rowIndex}
              data-table-col={colIndex}
              style={{ minHeight: 24, height: '100%' }}
            >
              {ch ? renderControl(ch, cellSlice, cellKey) : null}
            </div>
          )
        },
        { rows: rowCount, cols: columnCount },
        { columns: hookColumns, dataSource: hookDataSource },
      ),
    [
      t.id,
      rowCount,
      columnCount,
      templateChildren,
      formSlice,
      renderControl,
      hookColumns,
      hookDataSource,
    ],
  )

  return (
    <div data-control-id={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        {...hookRest}
      />
    </div>
  )
}

export interface FormRendererProps {
  elements: FormControl[]
  gap?: number
  /** Директория, в которой лежит файл формы (для разрешения configHook) */
  formDirectoryHandle?: FileSystemDirectoryHandle | null
  /** Относительный путь к единому `.ts` модулю configHook формы */
  formConfigHook?: string | (() => unknown) | null
  /** Форменные обработчики (например onInit/onSubmit) из DSL `handlers` */
  formHandlers?: Record<string, string | ((...args: unknown[]) => unknown)> | null
  /** Ключ формы (например путь к файлу) — при смене сбрасывается состояние */
  formKey?: string
}

export function FormRenderer({
  elements,
  gap = 16,
  formDirectoryHandle = null,
  formConfigHook = null,
  formHandlers = null,
  formKey = '',
}: FormRendererProps): React.ReactElement {
  const [formState, setFormState] = useState<Record<string, unknown>>(() =>
    getInitialFormStateFromElements(elements),
  )
  const [registry, setRegistry] = useState<ConfigHookRegistry | null>(null)
  const [lifecycle, setLifecycle] = useState<FormConfigHookLifecycle>({})
  const [registryLoading, setRegistryLoading] = useState(false)

  const mergeFormState = useCallback((partial: Record<string, unknown>) => {
    setFormState((prev) => ({ ...prev, ...partial }))
  }, [])

  const prevFormKeyRef = useRef<string | undefined>(undefined)
  const lifecycleRunIdRef = useRef(0)

  useEffect(() => {
    const runId = ++lifecycleRunIdRef.current
    let cancelled = false
    const formKeyChanged = prevFormKeyRef.current !== formKey
    prevFormKeyRef.current = formKey

    function mergeStateForLifecycle(partial: Record<string, unknown>): void {
      if (cancelled || runId !== lifecycleRunIdRef.current) return
      setFormState((prev) => ({ ...prev, ...partial }))
    }

    async function loadRuntimeBindings() {
      if (formKeyChanged) {
        setFormState(getInitialFormStateFromElements(elements))
      }
      const nextLifecycle: FormConfigHookLifecycle = {}
      let nextRegistry: ConfigHookRegistry | null = null
      const needsAsync =
        (formConfigHook != null && formConfigHook !== '') ||
        (formHandlers != null && Object.keys(formHandlers).length > 0)
      setRegistryLoading(Boolean(formDirectoryHandle && needsAsync))

      const factory = await resolveConfigHookFactory(
        formConfigHook,
        formDirectoryHandle,
        loadConfigHookDefaultExport,
      )
      if (cancelled) return
      if (factory) {
        const parsed = splitFormConfigHookFactoryResult(factory)
        if (parsed) {
          nextRegistry = parsed.registry
          if (parsed.lifecycle.onInit) nextLifecycle.onInit = parsed.lifecycle.onInit
          if (parsed.lifecycle.onSubmit) nextLifecycle.onSubmit = parsed.lifecycle.onSubmit
        }
      }

      if (formHandlers) {
        const dataOnInit = await resolveLifecycleHandler(
          formHandlers.onInit,
          'onInit',
          formDirectoryHandle,
          loadTsModule,
        )
        if (dataOnInit) nextLifecycle.onInit = dataOnInit
        const dataOnSubmit = await resolveLifecycleHandler(
          formHandlers.onSubmit,
          'onSubmit',
          formDirectoryHandle,
          loadTsModule,
        )
        if (dataOnSubmit) nextLifecycle.onSubmit = dataOnSubmit
      }

      if (cancelled) return
      setRegistry(nextRegistry)
      setLifecycle(nextLifecycle)
      setRegistryLoading(false)
      if (nextLifecycle.onInit) {
        const initial = getInitialFormStateFromElements(elements)
        void Promise.resolve(
          nextLifecycle.onInit({
            state: initial,
            config: { elements },
            mergeState: mergeStateForLifecycle,
          }),
        )
      }
    }

    void loadRuntimeBindings()
    return () => {
      cancelled = true
    }
  }, [
    formKey,
    formConfigHook,
    formDirectoryHandle,
    formHandlers,
    elements,
  ])

  const updateValue = useCallback((id: string, value: unknown) => {
    setFormState((prev) => ({ ...prev, [id]: value }))
  }, [])

  const formSlice = useMemo(
    () => ({
      state: formState,
      config: { elements },
      mergeState: mergeFormState,
    }),
    [formState, elements, mergeFormState],
  )

  const hookCtx = useMemo(
    () => ({
      registry,
      loading: registryLoading,
      path: resolveTsModulePathFromValue(formConfigHook),
    }),
    [registry, registryLoading, formConfigHook],
  )

  function renderControl(
    control: FormControl,
    slice: FormSlice = formSlice,
    instanceKey?: string,
  ): React.ReactNode {
    const k = instanceKey ?? control.id
    switch (control.type) {
      case 'button': {
        const c = control as ButtonControl
        return (
          <div key={k} data-control-id={c.id}>
            <ButtonRenderer control={c} formSlice={slice} />
          </div>
        )
      }
      case 'text': {
        const c = control as TextControl
        return (
          <div key={k} data-control-id={c.id}>
            <TextRenderer control={c} formSlice={slice} />
          </div>
        )
      }
      case 'input': {
        const c = control as InputControl
        const value = String(formState[c.id] ?? '')
        return (
          <InputRenderer
            key={k}
            control={c}
            formSlice={slice}
            value={value}
            updateValue={updateValue}
          />
        )
      }
      case 'grid': {
        const g = control as GridControl
        return (
          <GridRenderer
            key={k}
            control={g}
            formSlice={slice}
            renderControl={renderControl}
          />
        )
      }
      case 'table': {
        const t = control as TableControl
        return (
          <TableRenderer
            key={k}
            control={t}
            formSlice={slice}
            renderControl={renderControl}
          />
        )
      }
      case 'checkbox': {
        const c = control as CheckboxControl
        const checked = (formState[c.id] as boolean | undefined) ?? c.checked ?? false
        return (
          <div key={k} data-control-id={c.id} style={formRowStyle}>
            <Checkbox
              checked={checked}
              disabled={c.disabled}
              readonly={c.readonly}
              onChange={(e) => {
                // Antd CheckboxChangeEvent: e.target.checked
                updateValue(c.id, e.target.checked)
              }}
            >
              {c.text ?? 'Чекбокс'}
            </Checkbox>
          </div>
        )
      }
      case 'radio': {
        const c = control as RadioControl
        const value = (formState[c.id] as string | undefined) ?? c.value ?? ''
        return (
          <div key={k} data-control-id={c.id} style={formRowStyle}>
            <Radio
              options={c.options?.map((o) => ({ label: o.label, value: o.value })) ?? []}
              value={value}
              disabled={c.disabled}
              readonly={c.readonly}
              vertical={c.vertical}
              onChange={(e) => {
                // Antd RadioChangeEvent: e.target.value
                updateValue(c.id, e.target.value)
              }}
            />
          </div>
        )
      }
      case 'select': {
        const c = control as SelectControl
        // Hexa UI Select supports both single and multiple values (string | string[])
        const value = (formState[c.id] as string | string[] | undefined) ?? c.value ?? undefined
        return (
          <div key={k} data-control-id={c.id} style={formRowStyle}>
            <Select
              options={c.options ?? []}
              value={value}
              placeholder={c.placeholder ?? 'Выберите...'}
              disabled={c.disabled}
              readOnly={c.readOnly}
              mode={c.mode}
              allowClear={c.allowClear}
              onChange={(v) => {
                // Hexa UI Select onChange passes value directly (not event)
                // For mode="multiple", v is string[]
                updateValue(c.id, v ?? (c.mode === 'multiple' ? [] : ''))
              }}
            />
          </div>
        )
      }
      case 'toggle': {
        const c = control as ToggleControl
        const checked = (formState[c.id] as boolean | undefined) ?? c.checked ?? false
        return (
          <div key={k} data-control-id={c.id} style={formRowStyle}>
            <Toggle
              text={c.text ?? 'Переключатель'}
              checked={checked}
              disabled={c.disabled}
              readonly={c.readonly}
              labelPosition={c.labelPosition ?? 'after'}
              onChange={(checkedValue: boolean) => {
                // Hexa UI Toggle onChange passes boolean directly
                updateValue(c.id, checkedValue)
              }}
            />
          </div>
        )
      }
      case 'meta': {
        const m = control as MetaComponentControl
        const Comp = META_COMPONENT_MAP[m.componentId]
        if (!Comp) {
          return (
            <div key={k} data-control-id={m.id}>
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Компонент «{m.componentId}»
              </Text>
            </div>
          )
        }
        const builtProps: Record<string, unknown> = {}
        for (const [propKey, v] of Object.entries(m.props ?? {})) {
          builtProps[propKey] = propKey === 'children' ? v : coercePropValue(v)
        }
        if (m.componentId === 'Loader' && builtProps.spinning === undefined) {
          builtProps.spinning = true
        }
        return (
          <div key={k} data-control-id={m.id} style={formRowStyle}>
            <Comp {...builtProps} disabled={m.props?.disabled === 'true' || undefined} />
          </div>
        )
      }
      default: {
        if (!EXTRA_UI_DSL_TYPES.includes(control.type as (typeof EXTRA_UI_DSL_TYPES)[number])) {
          return null
        }
        const u = control as ExtraUiControl
        const componentId = getComponentIdFromDslType(u.type)
        if (!componentId) return null
        const Comp = META_COMPONENT_MAP[componentId]
        if (!Comp) {
          return (
            <div key={k} data-control-id={u.id}>
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Компонент «{u.type}»
              </Text>
            </div>
          )
        }
        const builtProps: Record<string, unknown> = {}
        for (const [propKey, v] of Object.entries(u.props ?? {})) {
          builtProps[propKey] = propKey === 'children' ? v : coercePropValue(v)
        }
        if (componentId === 'Loader' && builtProps.spinning === undefined) {
          builtProps.spinning = true
        }
        return (
          <div key={k} data-control-id={u.id} style={formRowStyle}>
            <Comp {...builtProps} disabled={u.props?.disabled === 'true' || undefined} />
          </div>
        )
      }
    }
  }

  const body = (
    <Space size={gap} direction="vertical" style={{ width: '100%' }}>
      {elements.map((el) => renderControl(el))}
    </Space>
  )

  return (
    <FormConfigHookContext.Provider value={hookCtx}>
      {lifecycle.onSubmit ? (
        <form
          style={{ width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault()
            void Promise.resolve(lifecycle.onSubmit?.(formSlice))
          }}
        >
          {body}
        </form>
      ) : (
        body
      )}
    </FormConfigHookContext.Provider>
  )
}
