import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { Button, Text, H6, Space, SectionMessage } from '@kaspersky/hexa-ui'
import type { FormControl, FormControlBase, FormData, ButtonControl, ValidationRule, Condition } from '../types/form-dsl'
import { getDescriptor } from '../controls/registry'
import type { CanvasContext } from '../controls/types'
import { setGridChildrenInTree, setRowChildrenInTree, setTableChildrenInTree, forEachControlInTree } from '../types/form-dsl'
import { createControl, ALL_CONTROL_TYPES } from '../controls/registry'
import { CanvasPreviewErrorBoundary } from './CanvasPreviewErrorBoundary'

function validateField(value: unknown, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    const strVal = value != null ? String(value) : ''
    switch (rule.type) {
      case 'required':
        if (!strVal.trim()) return rule.message
        break
      case 'minLength':
        if (typeof rule.value === 'number' && strVal.length < rule.value) return rule.message
        break
      case 'maxLength':
        if (typeof rule.value === 'number' && strVal.length > rule.value) return rule.message
        break
      case 'min':
        if (typeof rule.value === 'number' && Number(strVal) < rule.value) return rule.message
        break
      case 'max':
        if (typeof rule.value === 'number' && Number(strVal) > rule.value) return rule.message
        break
      case 'pattern':
        if (typeof rule.value === 'string') {
          try {
            if (!new RegExp(rule.value).test(strVal)) return rule.message
          } catch { /* invalid regex */ }
        }
        break
      case 'custom':
        /* custom rules require runtime logic; in preview we skip them */
        break
    }
  }
  return null
}

function evaluateCondition(condition: Condition, values: Record<string, unknown>): boolean {
  const fieldVal = values[condition.fieldName]
  const strVal = fieldVal != null ? String(fieldVal) : ''
  switch (condition.operator) {
    case 'eq': return strVal === (condition.value ?? '')
    case 'neq': return strVal !== (condition.value ?? '')
    case 'gt': return Number(strVal) > Number(condition.value ?? 0)
    case 'lt': return Number(strVal) < Number(condition.value ?? 0)
    case 'contains': return strVal.includes(condition.value ?? '')
    case 'empty': return !strVal.trim()
    case 'notEmpty': return !!strVal.trim()
    default: return true
  }
}

interface FormSlice {
  state: Record<string, unknown>
  config: { elements: FormControl[] }
}

type ConfigHookFn = (formSlice: FormSlice) => Record<string, unknown> | null

async function getFileHandleFromPath(
  dir: FileSystemDirectoryHandle,
  path: string,
): Promise<FileSystemFileHandle> {
  const parts = path.split('/').filter(Boolean)
  if (parts.length === 0) throw new Error('Empty path')
  let current: FileSystemDirectoryHandle = dir
  for (let i = 0; i < parts.length - 1; i++) {
    current = await current.getDirectoryHandle(parts[i])
  }
  return current.getFileHandle(parts[parts.length - 1])
}

async function loadModuleDefault(
  dir: FileSystemDirectoryHandle,
  path: string,
): Promise<ConfigHookFn | null> {
  try {
    const fh = await getFileHandleFromPath(dir, path)
    const file = await fh.getFile()
    const text = await file.text()
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
  hookFn: ConfigHookFn
  formSlice: FormSlice
}): React.ReactElement | null {
  const props = hookFn(formSlice)
  if (props === null) return null
  return <Button {...props} />
}

function PreviewButtonRenderer({
  control,
  formSlice,
  formDirectoryHandle,
}: {
  control: ButtonControl
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
}): React.ReactElement | null {
  const [hookFn, setHookFn] = useState<ConfigHookFn | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!control.configHook || !formDirectoryHandle) {
      setHookFn(null)
      return
    }
    setLoading(true)
    let cancelled = false
    loadModuleDefault(formDirectoryHandle, control.configHook).then((fn) => {
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

function PreviewControl({
  control,
  values,
  errors,
  onValueChange,
  formSlice,
  formDirectoryHandle,
}: {
  control: FormControl
  values: Record<string, unknown>
  errors: Record<string, string>
  onValueChange: (fieldName: string, value: unknown) => void
  formSlice: FormSlice
  formDirectoryHandle: FileSystemDirectoryHandle | null
}) {
  if (control.type === 'button') {
    return (
      <div style={{ marginBottom: 8, width: '100%' }}>
        <PreviewButtonRenderer
          control={control as ButtonControl}
          formSlice={formSlice}
          formDirectoryHandle={formDirectoryHandle}
        />
      </div>
    )
  }

  const bc = control as FormControlBase
  if (bc.visibleWhen && !evaluateCondition(bc.visibleWhen, values)) {
    return null
  }

  const isDisabledByCondition = bc.disabledWhen ? evaluateCondition(bc.disabledWhen, values) : false
  const fieldName = bc.fieldName
  const error = fieldName ? errors[fieldName] : undefined

  const noop = () => {}
  const dummyContext: CanvasContext = {
    selectedId: null,
    onSelect: noop,
    onRemove: noop,
    rootSetControls: noop as React.Dispatch<React.SetStateAction<FormControl[]>>,
    renderControlBlock: () => null,
    createControl,
    controlTypes: ALL_CONTROL_TYPES,
    dataTypeKey: '',
    dataIdKey: '',
    setGridChildrenInTree,
    setRowChildrenInTree,
    setTableChildrenInTree,
  }

  const descriptor = getDescriptor(control.type as FormControl['type'])

  return (
    <div style={{ marginBottom: 8, width: '100%' }}>
      {fieldName && (
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4, color: '#666' }}>
          {fieldName}
          {bc.validation?.some((r) => r.type === 'required') && (
            <span style={{ color: 'var(--danger--main, #e00)', marginLeft: 2 }}>*</span>
          )}
        </Text>
      )}
      <div style={{ pointerEvents: 'auto', opacity: isDisabledByCondition ? 0.5 : 1 }}>
        {descriptor ? (
          <CanvasPreviewErrorBoundary
            componentLabel={(control as { componentId?: string }).componentId ?? control.type}
          >
            <descriptor.CanvasPreview control={control as Parameters<typeof descriptor.CanvasPreview>[0]['control']} context={dummyContext} />
          </CanvasPreviewErrorBoundary>
        ) : (
          <Text type="BTR3">[{control.type}]</Text>
        )}
      </div>
      {fieldName && (
        <input
          type="text"
          value={values[fieldName] != null ? String(values[fieldName]) : ''}
          onChange={(e) => onValueChange(fieldName, e.target.value)}
          placeholder={`Значение ${fieldName}`}
          style={{
            width: '100%',
            marginTop: 4,
            padding: '4px 8px',
            border: error ? '1px solid var(--danger--main, #e00)' : '1px solid #d9d9d9',
            borderRadius: 4,
            fontSize: 13,
          }}
        />
      )}
      {error && (
        <Text type="BTR3" style={{ color: 'var(--danger--main, #e00)', fontSize: 12, marginTop: 2 }}>
          {error}
        </Text>
      )}
    </div>
  )
}

export function FormPreview({
  controls,
  formData,
  formDirectoryHandle = null,
}: {
  controls: FormControl[]
  formData: FormData
  formDirectoryHandle?: FileSystemDirectoryHandle | null
}) {
  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const init: Record<string, unknown> = {}
    forEachControlInTree(controls, (c) => {
      const bc = c as FormControlBase
      if (bc.fieldName && bc.defaultValue !== undefined) {
        init[bc.fieldName] = bc.defaultValue
      }
    })
    return init
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitData, setSubmitData] = useState<string | null>(null)

  const handleValueChange = useCallback((fieldName: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[fieldName]
      return next
    })
  }, [])

  const formSlice = useMemo(
    () => ({ state: values, config: { elements: controls } }),
    [values, controls]
  )

  const handleSubmit = useCallback(() => {
    const newErrors: Record<string, string> = {}
    forEachControlInTree(controls, (c) => {
      const bc = c as FormControlBase
      if (bc.fieldName && bc.validation && bc.validation.length > 0) {
        const err = validateField(values[bc.fieldName], bc.validation)
        if (err) newErrors[bc.fieldName] = err
      }
    })
    setErrors(newErrors)
    setSubmitted(true)
    if (Object.keys(newErrors).length === 0) {
      setSubmitData(JSON.stringify(values, null, 2))
    } else {
      setSubmitData(null)
    }
  }, [controls, values])

  return (
    <div style={{
      border: '2px solid var(--primary--main, #00a88e)',
      borderRadius: 12,
      padding: 24,
      background: 'var(--surface--neutral, #fafafa)',
      flex: 1,
      overflow: 'auto',
    }}>
      <H6 style={{ margin: '0 0 16px 0' }}>{formData.name || 'Форма'}</H6>
      <Space size={8} direction="vertical" style={{ width: '100%' }}>
        {controls.map((control) => (
          <PreviewControl
            key={control.id}
            control={control}
            values={values}
            errors={errors}
            onValueChange={handleValueChange}
            formSlice={formSlice}
            formDirectoryHandle={formDirectoryHandle}
          />
        ))}
      </Space>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <Button mode="primary" text="Отправить" onClick={handleSubmit} />
        <Button mode="secondary" text="Сбросить" onClick={() => { setValues({}); setErrors({}); setSubmitted(false); setSubmitData(null) }} />
      </div>
      {submitted && submitData && (
        <SectionMessage mode="success" title="Данные формы" style={{ marginTop: 12 }}>
          <pre style={{ margin: 0, fontSize: 12, whiteSpace: 'pre-wrap' }}>{submitData}</pre>
        </SectionMessage>
      )}
      {submitted && Object.keys(errors).length > 0 && (
        <SectionMessage mode="error" title="Ошибки валидации" style={{ marginTop: 12 }}>
          {Object.entries(errors).map(([field, msg]) => (
            <div key={field}><strong>{field}:</strong> {msg}</div>
          ))}
        </SectionMessage>
      )}
    </div>
  )
}
