import React, { useState, useCallback, useEffect, useMemo } from 'react'
import type { ButtonProps, GridProps, ITableProps, TextProps } from '@kaspersky/hexa-ui'
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
  type ButtonControl,
  type CheckboxControl,
  type ExtraUiControl,
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
import {
  defaultGridLayoutRows,
  DEFAULT_GRID_LAYOUT_PROPERTY,
} from '@/utils/defaultGridHexaProps'
import { buildTableMatrixColumnsAndDataSource } from '@/utils/tableControlHexa'
import { ToolbarStaticPreview } from '@/components/ToolbarStaticPreview'

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

/** Собирает из элементов формы плоский объект id -> начальное значение для интерактивных контролов */
function getInitialFormState(elements: FormControl[]): Record<string, unknown> {
  const state: Record<string, unknown> = {}
  function walk(controls: FormControl[]) {
    for (const c of controls) {
      if (c.type === 'checkbox') {
        state[c.id] = (c as CheckboxControl).checked ?? false
      }
      if (c.type === 'input') {
        state[c.id] = (c as InputControl).value ?? ''
      }
      if (c.type === 'radio') {
        state[c.id] = (c as RadioControl).value ?? ''
      }
      if (c.type === 'select') {
        const selectCtrl = c as SelectControl
        // Для mode="multiple" начальное значение — массив
        state[c.id] = selectCtrl.value ?? (selectCtrl.mode === 'multiple' ? [] : '')
      }
      if (c.type === 'toggle') {
        state[c.id] = (c as ToggleControl).checked ?? false
      }
      if (c.type === 'grid') {
        walk((c as GridControl).children.filter((x): x is FormControl => x != null))
      }
      if (c.type === 'table') {
        walk((c as TableControl).children.filter((x): x is FormControl => x != null))
      }
    }
  }
  walk(elements)
  return state
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

const emptyTableTextStyle: React.CSSProperties = {
  padding: 16,
  textAlign: 'center',
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

type ButtonConfigHookFn = (formSlice: FormSlice) => ButtonProps | null

type TextConfigHookFn = (formSlice: FormSlice) => TextProps | null

type GridConfigHookFn = (formSlice: FormSlice) => Partial<GridProps> | null

type TableConfigHookFn = (formSlice: FormSlice) => Partial<ITableProps> | null

type TableHookResult = (Partial<ITableProps> & {
  dslCols?: number
  dslRows?: number
  children?: unknown
  dataSourceFunction?: unknown
}) | null

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
  formDirectoryHandle,
}: {
  control: ButtonControl
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
}): React.ReactElement | null {
  const [hookFn, setHookFn] = useState<ButtonConfigHookFn | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!control.configHook || !formDirectoryHandle) {
      setHookFn(null)
      return
    }
    setLoading(true)
    let cancelled = false
    loadConfigHookDefaultExport(formDirectoryHandle, control.configHook).then((fn) => {
      if (!cancelled) {
        setHookFn(() => fn as ButtonConfigHookFn)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [control.configHook, formDirectoryHandle])

  if (!control.configHook) {
    return <Button mode="tertiary" text={`[${control.id}]`} disabled />
  }
  if (loading || !hookFn) {
    return <Button mode="tertiary" text={`[${control.id}]`} disabled loading />
  }
  return <ButtonWithHook key={control.configHook} hookFn={hookFn} formSlice={formSlice} />
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
  formDirectoryHandle,
}: {
  control: TextControl
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
}): React.ReactElement | null {
  const [hookFn, setHookFn] = useState<TextConfigHookFn | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!control.configHook || !formDirectoryHandle) {
      setHookFn(null)
      return
    }
    setLoading(true)
    let cancelled = false
    loadConfigHookDefaultExport(formDirectoryHandle, control.configHook).then((fn) => {
      if (!cancelled) {
        setHookFn(() => fn as TextConfigHookFn)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [control.configHook, formDirectoryHandle])

  if (!control.configHook) {
    return (
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        [{control.id}]
      </Text>
    )
  }
  if (loading || !hookFn) {
    return (
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        …
      </Text>
    )
  }
  return <TextWithHook key={control.configHook} hookFn={hookFn} formSlice={formSlice} />
}

function GridRenderer({
  control: g,
  formSlice,
  formDirectoryHandle,
  renderControl,
}: {
  control: GridControl
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
  renderControl: (c: FormControl) => React.ReactNode
}): React.ReactElement | null {
  const [hookFn, setHookFn] = useState<GridConfigHookFn | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!g.configHook || !formDirectoryHandle) {
      setHookFn(null)
      return
    }
    setLoading(true)
    let cancelled = false
    loadConfigHookDefaultExport(formDirectoryHandle, g.configHook).then((fn) => {
      if (!cancelled) {
        setHookFn(() => fn as GridConfigHookFn)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [g.configHook, formDirectoryHandle])

  const defaultGrid = (
    <Grid
      cols={g.cols}
      layout={defaultGridLayoutRows(g.rows)}
      layoutProperty={DEFAULT_GRID_LAYOUT_PROPERTY}
    >
      {g.children.map((ch, i) => (
        <GridItem key={`${g.id}-c-${i}`} style={{ minHeight: 32 }}>
          {ch ? renderControl(ch) : null}
        </GridItem>
      ))}
    </Grid>
  )

  if (!g.configHook) {
    return <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>{defaultGrid}</div>
  }
  if (!formDirectoryHandle || loading || !hookFn) {
    return (
      <div data-control-id={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
        <Text type="BTR3" style={{ color: 'var(--text--secondary)', marginBottom: 8 }}>
          …
        </Text>
        {defaultGrid}
      </div>
    )
  }
  const partial = hookFn(formSlice)
  if (partial === null) return null
  const { children: _ch, ...hookRest } = partial
  const effectiveCols = hookRest.cols ?? g.cols
  const hasHookLayout = 'layout' in hookRest && hookRest.layout != null
  const effectiveChildren = padOrTruncateChildren(
    g.children,
    hasHookLayout
      ? g.children.length
      : Math.ceil(g.children.length / g.cols) * effectiveCols,
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
          <GridItem key={`${g.id}-h-${i}`} style={{ minHeight: 32 }}>
            {ch ? renderControl(ch) : null}
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}

function TableRenderer({
  control: t,
  formSlice,
  formDirectoryHandle,
  renderControl,
}: {
  control: TableControl
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
  renderControl: (c: FormControl) => React.ReactNode
}): React.ReactElement | null {
  const [hookFn, setHookFn] = useState<TableConfigHookFn | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!t.configHook || !formDirectoryHandle) {
      setHookFn(null)
      return
    }
    setLoading(true)
    let cancelled = false
    loadConfigHookDefaultExport(formDirectoryHandle, t.configHook).then((fn) => {
      if (!cancelled) {
        setHookFn(() => fn as TableConfigHookFn)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [t.configHook, formDirectoryHandle])

  const hasAnyChild = t.children.some((ch) => ch != null)
  const hasToolbar =
    t.toolbar &&
    ((t.toolbar.left?.length ?? 0) > 0 || (t.toolbar.right?.length ?? 0) > 0)

  const wrapStyle: React.CSSProperties = {
    ...formRowStyle,
    ...tableWrapStyle,
    opacity: t.disabled ? 0.6 : 1,
    pointerEvents: t.disabled ? 'none' : undefined,
  }

  const { dataSource, columns } = useMemo(
    () =>
      buildTableMatrixColumnsAndDataSource(t, (i) => {
        const ch = t.children[i]
        return ch ? renderControl(ch) : null
      }),
    [t.id, t.rows, t.cols, t.children, renderControl]
  )

  const toolbarBlock =
    hasToolbar ? (
      <div style={{ marginBottom: 8 }}>
        <ToolbarStaticPreview
          left={t.toolbar!.left ?? []}
          right={t.toolbar!.right ?? []}
        />
      </div>
    ) : null

  const defaultTable = (
    <Table
      pagination={false}
      rowMode={t.rowMode ?? 'standard'}
      columnVerticalAlign={t.columnVerticalAlign ?? 'inherit'}
      dataSource={dataSource}
      columns={columns}
    />
  )

  const emptyBody = (
    <div style={emptyTableTextStyle}>
      <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
        {t.emptyText}
      </Text>
    </div>
  )

  const bodyNoHook = !hasAnyChild && t.emptyText ? emptyBody : defaultTable

  if (!t.configHook) {
    return (
      <div data-control-id={t.id} style={wrapStyle}>
        {toolbarBlock}
        {bodyNoHook}
      </div>
    )
  }

  if (!formDirectoryHandle || loading || !hookFn) {
    return (
      <div data-control-id={t.id} style={wrapStyle}>
        {toolbarBlock}
        <Text type="BTR3" style={{ color: 'var(--text--secondary)', marginBottom: 8 }}>
          …
        </Text>
        {bodyNoHook}
      </div>
    )
  }

  const partial = hookFn(formSlice) as TableHookResult
  if (partial === null) return null
  const {
    columns: _cols,
    dataSource: _ds,
    dataSourceFunction: _dsf,
    children: _ch,
    dslCols: hookDslCols,
    dslRows: hookDslRows,
    toolbar: hookToolbar,
    ...hookRest
  } = partial

  const effectiveCols = hookDslCols ?? t.cols
  const effectiveRows = hookDslRows ?? t.rows
  const effectiveChildren = padOrTruncateChildren(
    t.children,
    effectiveRows * effectiveCols,
  )

  const { dataSource: hookedDs, columns: hookedCols } =
    buildTableMatrixColumnsAndDataSource(
      t,
      (i) => {
        const ch = effectiveChildren[i]
        return ch ? renderControl(ch) : null
      },
      { cols: effectiveCols, rows: effectiveRows },
    )

  const showDslToolbarPreview = hasToolbar && hookToolbar === undefined

  const bodyHooked =
    !hasAnyChild && t.emptyText ? (
      emptyBody
    ) : (
      <Table
        pagination={false}
        rowMode={t.rowMode ?? 'standard'}
        columnVerticalAlign={t.columnVerticalAlign ?? 'inherit'}
        dataSource={hookedDs}
        columns={hookedCols}
        {...hookRest}
        {...(hookToolbar !== undefined ? { toolbar: hookToolbar } : {})}
      />
    )

  return (
    <div data-control-id={t.id} style={wrapStyle}>
      {showDslToolbarPreview ? toolbarBlock : null}
      {bodyHooked}
    </div>
  )
}

export interface FormRendererProps {
  elements: FormControl[]
  gap?: number
  /** Директория, в которой лежит файл формы (для разрешения configHook) */
  formDirectoryHandle?: FileSystemDirectoryHandle | null
  /** Ключ формы (например путь к файлу) — при смене сбрасывается состояние */
  formKey?: string
}

export function FormRenderer({
  elements,
  gap = 16,
  formDirectoryHandle = null,
  formKey = '',
}: FormRendererProps): React.ReactElement {
  const [formState, setFormState] = useState<Record<string, unknown>>(() =>
    getInitialFormState(elements)
  )
  useEffect(() => {
    setFormState(getInitialFormState(elements))
  }, [formKey])

  const updateValue = useCallback((id: string, value: unknown) => {
    setFormState((prev) => ({ ...prev, [id]: value }))
  }, [])

  const formSlice = useMemo(
    () => ({ state: formState, config: { elements } }),
    [formState, elements]
  )

  function renderControl(control: FormControl): React.ReactNode {
    switch (control.type) {
      case 'button': {
        const c = control as ButtonControl
        return (
          <div key={c.id} data-control-id={c.id}>
            <ButtonRenderer
              control={c}
              formSlice={formSlice}
              formDirectoryHandle={formDirectoryHandle}
            />
          </div>
        )
      }
      case 'text': {
        const c = control as TextControl
        return (
          <div key={c.id} data-control-id={c.id}>
            <TextRenderer
              control={c}
              formSlice={formSlice}
              formDirectoryHandle={formDirectoryHandle}
            />
          </div>
        )
      }
      case 'input': {
        const c = control as InputControl
        const value = (formState[c.id] as string | undefined) ?? c.value ?? ''
        const textbox = (
          <Textbox
            value={value}
            placeholder={c.placeholder ?? c.text ?? ''}
            disabled={c.disabled}
            readOnly={c.readOnly}
            onChange={(v) => updateValue(c.id, v ?? '')}
          />
        )
        return (
          <div key={c.id} data-control-id={c.id} style={formRowStyle}>
            {c.text ? (
              <Field label={c.text} labelPosition="top" control={textbox} />
            ) : (
              textbox
            )}
          </div>
        )
      }
      case 'grid': {
        const g = control as GridControl
        return (
          <GridRenderer
            key={g.id}
            control={g}
            formSlice={formSlice}
            formDirectoryHandle={formDirectoryHandle}
            renderControl={renderControl}
          />
        )
      }
      case 'table': {
        const t = control as TableControl
        return (
          <TableRenderer
            key={t.id}
            control={t}
            formSlice={formSlice}
            formDirectoryHandle={formDirectoryHandle}
            renderControl={renderControl}
          />
        )
      }
      case 'checkbox': {
        const c = control as CheckboxControl
        const checked = (formState[c.id] as boolean | undefined) ?? c.checked ?? false
        return (
          <div key={c.id} data-control-id={c.id} style={formRowStyle}>
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
          <div key={c.id} data-control-id={c.id} style={formRowStyle}>
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
          <div key={c.id} data-control-id={c.id} style={formRowStyle}>
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
          <div key={c.id} data-control-id={c.id} style={formRowStyle}>
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
            <div key={m.id} data-control-id={m.id}>
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Компонент «{m.componentId}»
              </Text>
            </div>
          )
        }
        const builtProps: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(m.props ?? {})) {
          builtProps[k] = k === 'children' ? v : coercePropValue(v)
        }
        if (m.componentId === 'Loader' && builtProps.spinning === undefined) {
          builtProps.spinning = true
        }
        return (
          <div key={m.id} data-control-id={m.id} style={formRowStyle}>
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
            <div key={u.id} data-control-id={u.id}>
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Компонент «{u.type}»
              </Text>
            </div>
          )
        }
        const builtProps: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(u.props ?? {})) {
          builtProps[k] = k === 'children' ? v : coercePropValue(v)
        }
        if (componentId === 'Loader' && builtProps.spinning === undefined) {
          builtProps.spinning = true
        }
        return (
          <div key={u.id} data-control-id={u.id} style={formRowStyle}>
            <Comp {...builtProps} disabled={u.props?.disabled === 'true' || undefined} />
          </div>
        )
      }
    }
  }

  return (
    <Space size={gap} direction="vertical" style={{ width: '100%' }}>
      {elements.map((el) => renderControl(el))}
    </Space>
  )
}
