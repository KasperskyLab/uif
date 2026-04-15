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
  collectControlsWithUseConfig,
  getComponentIdFromDslType,
  getInitialFormStateFromElements,
  resolveLifecycleHandler,
  resolveControlUseConfig,
  formSliceWithDataBind,
  evaluateCondition,
  type ButtonControl,
  type CheckboxControl,
  type ExtraUiControl,
  type FormConfigHookLifecycle,
  type FormControl,
  type FormControlBase,
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

function controlExpressionDisabled(
  control: FormControl,
  state: Record<string, unknown>,
): boolean {
  const bc = control as FormControlBase
  return !!(bc.disabledWhen && evaluateCondition(state, bc.disabledWhen))
}

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

type ControlHexaHookFn = (formSlice: FormSlice) => unknown

const FormConfigHookContext = createContext<{
  hookById: Record<string, ControlHexaHookFn | null>
  loading: boolean
}>({ hookById: {}, loading: false })

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
  const { hookById, loading } = useContext(FormConfigHookContext)
  const hookFn = (hookById[control.id] ?? null) as ButtonConfigHookFn | null

  if (!hookFn) {
    if (loading) {
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
  const { hookById, loading } = useContext(FormConfigHookContext)
  const hookFn = (hookById[control.id] ?? null) as TextConfigHookFn | null

  if (!hookFn) {
    if (loading) {
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
  const { hookById, loading } = useContext(FormConfigHookContext)
  const hookFn = (hookById[control.id] ?? null) as InputConfigHookFn | null

  if (!hookFn) {
    if (loading) {
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
          Поле «{control.id}»: нет хука useConfig (handlers или formDirectoryHandle)
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
  const { hookById, loading } = useContext(FormConfigHookContext)
  const hookFn = (hookById[g.id] ?? null) as GridConfigHookFn | null

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
        {`Сетка «${g.id}»: нет хука useConfig (handlers или formDirectoryHandle).`}
      </Text>
    </div>
  )

  if (!hookFn) {
    if (loading) return loadingBlock
    return missingHookBlock
  }
  const partial = hookFn(formSliceWithDataBind(formSlice, g.dataBindPath))
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
  const { hookById, loading } = useContext(FormConfigHookContext)
  const hookFn = (hookById[t.id] ?? null) as TableConfigHookFn | null

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
        {`Таблица «${t.id}»: нет хука useConfig (handlers или formDirectoryHandle).`}
      </Text>
    </div>
  )

  if (!hookFn) {
    if (loading) return loadingBlock
    return missingHookBlock
  }

  const partial = hookFn(
    formSliceWithDataBind(formSlice, t.dataBindPath),
  ) as TableHookResult
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
  /** Директория схемы (для `loadTsModule` по строковым путям в handlers). */
  formDirectoryHandle?: FileSystemDirectoryHandle | null
  /** Форма: `onFormInit` / `onFormSubmit` — ленивые `import()` в `handlers`. */
  formHandlers?: Record<string, string | ((...args: unknown[]) => unknown)> | null
  /** Ключ формы (например путь к файлу) — при смене сбрасывается состояние */
  formKey?: string
}

export function FormRenderer({
  elements,
  gap = 16,
  formDirectoryHandle = null,
  formHandlers = null,
  formKey = '',
}: FormRendererProps): React.ReactElement {
  const [formState, setFormState] = useState<Record<string, unknown>>(() =>
    getInitialFormStateFromElements(elements),
  )
  const [hookById, setHookById] = useState<
    Record<string, ControlHexaHookFn | null>
  >({})
  const [lifecycle, setLifecycle] = useState<FormConfigHookLifecycle>({})
  const [hooksLoading, setHooksLoading] = useState(false)

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
      const nextHookById: Record<string, ControlHexaHookFn | null> = {}
      const useConfigRows = collectControlsWithUseConfig(elements)
      const onFormInitRaw =
        formHandlers?.onFormInit ?? formHandlers?.onInit
      const onFormSubmitRaw =
        formHandlers?.onFormSubmit ?? formHandlers?.onSubmit
      const needsAsync =
        useConfigRows.length > 0 ||
        onFormInitRaw != null ||
        onFormSubmitRaw != null
      setHooksLoading(needsAsync)

      for (const { id, useConfigRaw } of useConfigRows) {
        if (cancelled) return
        const fn = await resolveControlUseConfig(
          useConfigRaw,
          id,
          formDirectoryHandle,
          loadTsModule,
        )
        nextHookById[id] = fn
      }

      if (formHandlers) {
        const dataOnInit = await resolveLifecycleHandler(
          onFormInitRaw,
          'onFormInit',
          formDirectoryHandle,
          loadTsModule,
        )
        if (dataOnInit) nextLifecycle.onFormInit = dataOnInit
        const dataOnSubmit = await resolveLifecycleHandler(
          onFormSubmitRaw,
          'onFormSubmit',
          formDirectoryHandle,
          loadTsModule,
        )
        if (dataOnSubmit) nextLifecycle.onFormSubmit = dataOnSubmit
      }

      if (cancelled) return
      setHookById(nextHookById)
      setLifecycle(nextLifecycle)
      setHooksLoading(false)
      if (nextLifecycle.onFormInit) {
        const initial = getInitialFormStateFromElements(elements)
        void Promise.resolve(
          nextLifecycle.onFormInit({
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
  }, [formKey, formDirectoryHandle, formHandlers, elements])

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
      hookById,
      loading: hooksLoading,
    }),
    [hookById, hooksLoading],
  )

  function renderControl(
    control: FormControl,
    slice: FormSlice = formSlice,
    instanceKey?: string,
  ): React.ReactNode {
    const k = instanceKey ?? control.id
    const state = slice.state
    const bc = control as FormControlBase
    if (
      bc.visibleWhen &&
      !evaluateCondition(state, bc.visibleWhen)
    ) {
      return null
    }
    const exprDisabled = controlExpressionDisabled(control, state)
    const sliceForHooks = formSliceWithDataBind(slice, control.dataBindPath)
    const exprBlockStyle: React.CSSProperties | undefined = exprDisabled
      ? { opacity: 0.55, pointerEvents: 'none' }
      : undefined
    switch (control.type) {
      case 'button': {
        const c = control as ButtonControl
        return (
          <div
            key={k}
            data-control-id={c.id}
            style={exprBlockStyle}
            aria-disabled={exprDisabled || undefined}
          >
            <ButtonRenderer control={c} formSlice={sliceForHooks} />
          </div>
        )
      }
      case 'text': {
        const c = control as TextControl
        return (
          <div
            key={k}
            data-control-id={c.id}
            style={exprBlockStyle}
            aria-disabled={exprDisabled || undefined}
          >
            <TextRenderer control={c} formSlice={sliceForHooks} />
          </div>
        )
      }
      case 'input': {
        const c = control as InputControl
        const value = String(formState[c.id] ?? '')
        return (
          <div
            key={k}
            style={exprBlockStyle}
            aria-disabled={exprDisabled || undefined}
          >
            <InputRenderer
              control={c}
              formSlice={sliceForHooks}
              value={value}
              updateValue={updateValue}
            />
          </div>
        )
      }
      case 'grid': {
        const g = control as GridControl
        return (
          <div key={k} style={exprBlockStyle} aria-disabled={exprDisabled || undefined}>
            <GridRenderer
              control={g}
              formSlice={slice}
              renderControl={renderControl}
            />
          </div>
        )
      }
      case 'table': {
        const t = control as TableControl
        return (
          <div key={k} style={exprBlockStyle} aria-disabled={exprDisabled || undefined}>
            <TableRenderer
              control={t}
              formSlice={slice}
              renderControl={renderControl}
            />
          </div>
        )
      }
      case 'checkbox': {
        const c = control as CheckboxControl
        const checked = (formState[c.id] as boolean | undefined) ?? c.checked ?? false
        return (
          <div
            key={k}
            data-control-id={c.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
            <Checkbox
              checked={checked}
              disabled={c.disabled || exprDisabled}
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
          <div
            key={k}
            data-control-id={c.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
            <Radio
              options={c.options?.map((o) => ({ label: o.label, value: o.value })) ?? []}
              value={value}
              disabled={c.disabled || exprDisabled}
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
          <div
            key={k}
            data-control-id={c.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
            <Select
              options={c.options ?? []}
              value={value}
              placeholder={c.placeholder ?? 'Выберите...'}
              disabled={c.disabled || exprDisabled}
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
          <div
            key={k}
            data-control-id={c.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
            <Toggle
              text={c.text ?? 'Переключатель'}
              checked={checked}
              disabled={c.disabled || exprDisabled}
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
          <div
            key={k}
            data-control-id={m.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
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
          <div
            key={k}
            data-control-id={u.id}
            style={{
              ...formRowStyle,
              ...(exprDisabled ? { opacity: 0.55, pointerEvents: 'none' } : {}),
            }}
            aria-disabled={exprDisabled || undefined}
          >
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
      {lifecycle.onFormSubmit ? (
        <form
          style={{ width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault()
            void Promise.resolve(lifecycle.onFormSubmit?.(formSlice))
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
