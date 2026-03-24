import React, { useState, useCallback, useEffect, useMemo } from 'react'
import type { ButtonProps } from '@kaspersky/hexa-ui'
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
import type {
  FormControl,
  ButtonControl,
  TextControl,
  InputControl,
  GridControl,
  TableControl,
  CheckboxControl,
  RadioControl,
  SelectControl,
  ToggleControl,
  MetaComponentControl,
  FormSlice,
} from '@/types/form-dsl'
import {
  isConfigHookPathTs,
  transpileConfigHookSource,
} from '@/utils/transpileConfigHookSource'

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

/** Получить FileHandle по относительному пути от директории */
async function getFileHandleFromPath(
  dir: FileSystemDirectoryHandle,
  path: string
): Promise<FileSystemFileHandle> {
  const parts = path.split('/').filter(Boolean)
  if (parts.length === 0) throw new Error('Empty path')
  let current: FileSystemDirectoryHandle = dir
  for (let i = 0; i < parts.length - 1; i++) {
    current = await current.getDirectoryHandle(parts[i])
  }
  return current.getFileHandle(parts[parts.length - 1])
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

const tableCellStyle: React.CSSProperties = {
  minHeight: 40,
  padding: 8,
  border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
}

const emptyTableTextStyle: React.CSSProperties = {
  padding: 16,
  textAlign: 'center',
}

export type { FormSlice } from '@/types/form-dsl'

type ButtonConfigHookFn = (formSlice: FormSlice) => ButtonProps | null

async function loadButtonConfigHookModule(
  dir: FileSystemDirectoryHandle,
  path: string,
): Promise<ButtonConfigHookFn | null> {
  try {
    if (!isConfigHookPathTs(path)) {
      console.error('configHook: требуется файл TypeScript (.ts), получено:', path)
      return null
    }
    const fh = await getFileHandleFromPath(dir, path)
    const file = await fh.getFile()
    const raw = await file.text()
    const text = transpileConfigHookSource(raw)
    const url = URL.createObjectURL(new Blob([text], { type: 'application/javascript' }))
    const mod = await import(/* @vite-ignore */ url)
    URL.revokeObjectURL(url)
    return typeof mod?.default === 'function' ? mod.default : null
  } catch (err) {
    console.error('configHook load error:', err)
    return null
  }
}

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
    loadButtonConfigHookModule(formDirectoryHandle, control.configHook).then((fn) => {
      if (!cancelled) {
        setHookFn(() => fn)
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
          <ButtonRenderer
            key={c.id}
            control={c}
            formSlice={formSlice}
            formDirectoryHandle={formDirectoryHandle}
          />
        )
      }
      case 'text': {
        const c = control as TextControl
        return <Text key={c.id} type="BTR3">{c.text ?? 'Текст'}</Text>
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
          <div key={c.id} style={formRowStyle}>
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
          <div key={g.id} style={{ ...formRowStyle, ...gridWrapStyle }}>
            <Grid
              cols={g.cols}
              layout={{ rows: Array.from({ length: g.rows }, () => '1fr') }}
              layoutProperty={{ gap: 8 }}
            >
              {g.children.map((ch, i) => (
                <GridItem key={i} style={{ minHeight: 32 }}>
                  {ch ? renderControl(ch) : null}
                </GridItem>
              ))}
            </Grid>
          </div>
        )
      }
      case 'table': {
        const t = control as TableControl
        const hasAnyChild = t.children.some((ch) => ch != null)
        const cellAlign = t.columnVerticalAlign ?? 'inherit'
        return (
          <div key={t.id} style={{ ...formRowStyle, ...tableWrapStyle }}>
            {!hasAnyChild && t.emptyText ? (
              <div style={emptyTableTextStyle}>
                <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>{t.emptyText}</Text>
              </div>
            ) : (
              <Grid
                cols={t.cols}
                layout={{ rows: Array.from({ length: t.rows }, () => '1fr') }}
                layoutProperty={{ gap: 0 }}
              >
                {t.children.map((ch, i) => (
                  <GridItem
                    key={i}
                    style={{
                      ...tableCellStyle,
                      verticalAlign: cellAlign !== 'inherit' ? cellAlign : undefined,
                      opacity: t.disabled ? 0.6 : 1,
                      pointerEvents: t.disabled ? 'none' : undefined,
                    }}
                  >
                    {ch ? renderControl(ch) : null}
                  </GridItem>
                ))}
              </Grid>
            )}
          </div>
        )
      }
      case 'checkbox': {
        const c = control as CheckboxControl
        const checked = (formState[c.id] as boolean | undefined) ?? c.checked ?? false
        return (
          <div key={c.id} style={formRowStyle}>
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
          <div key={c.id} style={formRowStyle}>
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
          <div key={c.id} style={formRowStyle}>
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
          <div key={c.id} style={formRowStyle}>
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
            <Text key={m.id} type="BTR3" style={{ color: 'var(--text--secondary)' }}>
              Компонент «{m.componentId}»
            </Text>
          )
        }
        const builtProps: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(m.props ?? {})) {
          builtProps[k] = k === 'children' ? v : coercePropValue(v)
        }
        // Для Loader по умолчанию spinning=true (анимация вращения)
        if (m.componentId === 'Loader' && builtProps.spinning === undefined) {
          builtProps.spinning = true
        }
        return (
          <div key={m.id} style={formRowStyle}>
            <Comp {...builtProps} disabled={m.props?.disabled === 'true' || undefined} />
          </div>
        )
      }
      default:
        return null
    }
  }

  return (
    <Space size={gap} direction="vertical" style={{ width: '100%' }}>
      {elements.map((el) => renderControl(el))}
    </Space>
  )
}
