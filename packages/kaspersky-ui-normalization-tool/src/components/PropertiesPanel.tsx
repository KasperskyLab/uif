import React, { useState } from 'react'
import { Space, Text, H6, Textbox, Select, Checkbox as HexaCheckbox, Button } from '@kaspersky/hexa-ui'
import { Add, Delete } from '@kaspersky/hexa-ui-icons/16'
import { SelectWithOptionWidth } from './SelectWithOptionWidth'
import type { FormControl, FormControlBase, FormData, TableControl, FieldSchema, ValidationRule, ValidationRuleType, Condition } from '../types/form-dsl'
import { EXTRA_UI_DSL_TYPES } from '../types/form-dsl'
import { CONTROL_EVENTS, FORM_EVENTS } from '../types/form-dsl'
import { getDescriptor } from '../controls/registry'
import { ToolbarItemEditor } from '../controls/descriptors/toolbar'
import { HandlersEditor } from './HandlersEditor'

/** `text` (типографика + configHook) не входит — паритет с `button`, без привязки данных в панели */
const INPUT_CONTROL_TYPES: string[] = ['input', 'checkbox', 'radio', 'select', 'toggle', ...EXTRA_UI_DSL_TYPES]
const DATA_TYPE_OPTIONS = [
  { value: 'string', label: 'string' },
  { value: 'number', label: 'number' },
  { value: 'boolean', label: 'boolean' },
  { value: 'date', label: 'date' },
  { value: 'array', label: 'array' },
]

function isInputControl(control: FormControl): boolean {
  if (INPUT_CONTROL_TYPES.includes(control.type)) return true
  return false
}

function FieldBindingEditor({
  control,
  onUpdate,
  selectCloseKey,
  onSelectClose,
}: {
  control: FormControl
  onUpdate: (patch: Partial<FormControl>) => void
  selectCloseKey: number
  onSelectClose: () => void
}) {
  if (!isInputControl(control)) return null
  const bc = control as FormControlBase
  const hasRequired = (bc.validation ?? []).some((r) => r.type === 'required')
  return (
    <>
      <div style={{ width: '100%', borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)', paddingTop: 16 }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
          Привязка данных
          {hasRequired && <span style={{ color: 'var(--danger--main, #e00)', marginLeft: 4 }}>*</span>}
        </Text>
        <Space size={12} direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Имя поля (fieldName)</Text>
            <Textbox
              value={bc.fieldName ?? ''}
              onChange={(v) => onUpdate({ fieldName: v || undefined } as Partial<FormControl>)}
              placeholder="например: email"
            />
          </div>
          <div>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Тип данных</Text>
            <SelectWithOptionWidth options={DATA_TYPE_OPTIONS}>
              <Select
                key={`datatype-${selectCloseKey}`}
                options={DATA_TYPE_OPTIONS}
                value={bc.dataType ?? 'string'}
                onChange={(v: string | undefined) => {
                  onUpdate({ dataType: (v as FormControlBase['dataType']) || 'string' } as Partial<FormControl>)
                  onSelectClose()
                }}
                getPopupContainer={() => document.body}
              />
            </SelectWithOptionWidth>
          </div>
          <div>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Значение по умолчанию</Text>
            <Textbox
              value={bc.defaultValue != null ? String(bc.defaultValue) : ''}
              onChange={(v) => onUpdate({ defaultValue: v || undefined } as Partial<FormControl>)}
              placeholder="начальное значение"
            />
          </div>
        </Space>
      </div>
      <ValidationEditor
        rules={bc.validation ?? []}
        onChange={(rules) => onUpdate({ validation: rules.length > 0 ? rules : undefined } as Partial<FormControl>)}
      />
      <div style={{ width: '100%', borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)', paddingTop: 16 }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Условная логика</Text>
        <Space size={8} direction="vertical" style={{ width: '100%' }}>
          <ConditionEditor
            label="Показывать когда..."
            condition={bc.visibleWhen}
            onChange={(c) => onUpdate({ visibleWhen: c } as Partial<FormControl>)}
          />
          <ConditionEditor
            label="Блокировать когда..."
            condition={bc.disabledWhen}
            onChange={(c) => onUpdate({ disabledWhen: c } as Partial<FormControl>)}
          />
        </Space>
      </div>
    </>
  )
}

function SchemaEditor({
  schema,
  onSchemaUpdate,
}: {
  schema: Record<string, FieldSchema>
  onSchemaUpdate: (schema: Record<string, FieldSchema>) => void
}) {
  const [newFieldName, setNewFieldName] = useState('')

  const addField = () => {
    const name = newFieldName.trim()
    if (!name || schema[name]) return
    onSchemaUpdate({ ...schema, [name]: { type: 'string' } })
    setNewFieldName('')
  }

  return (
    <div style={{ width: '100%', borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)', paddingTop: 16 }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Схема данных формы</Text>
      <Space size={8} direction="vertical" style={{ width: '100%' }}>
        {Object.entries(schema).map(([name, field]) => (
          <div key={name} style={{ display: 'flex', gap: 6, alignItems: 'center', width: '100%' }}>
            <Textbox value={name} readOnly style={{ flex: 1 }} />
            <select
              value={field.type}
              onChange={(e) => onSchemaUpdate({ ...schema, [name]: { ...field, type: e.target.value as FieldSchema['type'] } })}
              style={{ height: 32, borderRadius: 4, border: '1px solid #ccc', padding: '0 4px' }}
            >
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="boolean">boolean</option>
              <option value="date">date</option>
              <option value="array">array</option>
            </select>
            <Button
              mode="tertiary"
              iconBefore={<Delete />}
              onClick={() => {
                const next = { ...schema }
                delete next[name]
                onSchemaUpdate(next)
              }}
              size="small"
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', width: '100%' }}>
          <Textbox
            value={newFieldName}
            onChange={setNewFieldName}
            placeholder="Имя нового поля"
            style={{ flex: 1 }}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter') addField() }}
          />
          <Button mode="secondary" iconBefore={<Add />} onClick={addField} size="small" />
        </div>
      </Space>
    </div>
  )
}

const VALIDATION_RULE_OPTIONS: { value: ValidationRuleType; label: string }[] = [
  { value: 'required', label: 'Обязательное' },
  { value: 'minLength', label: 'Мин. длина' },
  { value: 'maxLength', label: 'Макс. длина' },
  { value: 'min', label: 'Мин. значение' },
  { value: 'max', label: 'Макс. значение' },
  { value: 'pattern', label: 'Регулярное выражение' },
  { value: 'custom', label: 'Пользовательское' },
]

function ValidationEditor({
  rules,
  onChange,
}: {
  rules: ValidationRule[]
  onChange: (rules: ValidationRule[]) => void
}) {
  const addRule = () => {
    onChange([...rules, { type: 'required', message: 'Обязательное поле' }])
  }

  return (
    <div style={{ width: '100%', borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)', paddingTop: 16 }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Валидация</Text>
      <Space size={8} direction="vertical" style={{ width: '100%' }}>
        {rules.map((rule, i) => (
          <div key={i} style={{ border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)', borderRadius: 6, padding: 8, width: '100%' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
              <select
                value={rule.type}
                onChange={(e) => {
                  const next = [...rules]
                  next[i] = { ...rule, type: e.target.value as ValidationRuleType }
                  onChange(next)
                }}
                style={{ height: 28, borderRadius: 4, border: '1px solid #ccc', padding: '0 4px', flex: 1, fontSize: 12 }}
              >
                {VALIDATION_RULE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <Button
                mode="tertiary"
                iconBefore={<Delete />}
                onClick={() => onChange(rules.filter((_, j) => j !== i))}
                size="small"
              />
            </div>
            {rule.type !== 'required' && (
              <div style={{ marginBottom: 4 }}>
                <Text type="BTR3" style={{ display: 'block', marginBottom: 2, fontSize: 11 }}>Значение</Text>
                <Textbox
                  value={rule.value != null ? String(rule.value) : ''}
                  onChange={(v) => {
                    const next = [...rules]
                    const numVal = Number(v)
                    next[i] = { ...rule, value: !isNaN(numVal) && v.trim() !== '' && ['minLength', 'maxLength', 'min', 'max'].includes(rule.type) ? numVal : v }
                    onChange(next)
                  }}
                  placeholder={rule.type === 'pattern' ? '^[a-z]+$' : '0'}
                />
              </div>
            )}
            <div>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 2, fontSize: 11 }}>Сообщение об ошибке</Text>
              <Textbox
                value={rule.message}
                onChange={(v) => {
                  const next = [...rules]
                  next[i] = { ...rule, message: v }
                  onChange(next)
                }}
                placeholder="Обязательное поле"
              />
            </div>
          </div>
        ))}
        <Button
          mode="secondary"
          text="Добавить правило"
          iconBefore={<Add />}
          onClick={addRule}
          style={{ width: '100%' }}
          size="small"
        />
      </Space>
    </div>
  )
}

const CONDITION_OPERATORS: { value: Condition['operator']; label: string }[] = [
  { value: 'eq', label: '=' },
  { value: 'neq', label: '≠' },
  { value: 'gt', label: '>' },
  { value: 'lt', label: '<' },
  { value: 'contains', label: 'содержит' },
  { value: 'empty', label: 'пусто' },
  { value: 'notEmpty', label: 'не пусто' },
]

function ConditionEditor({
  label,
  condition,
  onChange,
}: {
  label: string
  condition?: Condition
  onChange: (c: Condition | undefined) => void
}) {
  const enabled = !!condition
  return (
    <div style={{ width: '100%' }}>
      <HexaCheckbox
        checked={enabled}
        onChange={(e) => {
          if (e.target.checked) {
            onChange({ fieldName: '', operator: 'eq', value: '' })
          } else {
            onChange(undefined)
          }
        }}
      >
        {label}
      </HexaCheckbox>
      {enabled && condition && (
        <div style={{ display: 'flex', gap: 4, marginTop: 4, flexWrap: 'wrap' }}>
          <Textbox
            value={condition.fieldName}
            onChange={(v) => onChange({ ...condition, fieldName: v })}
            placeholder="поле"
            style={{ flex: 1, minWidth: 60 }}
          />
          <select
            value={condition.operator}
            onChange={(e) => onChange({ ...condition, operator: e.target.value as Condition['operator'] })}
            style={{ height: 32, borderRadius: 4, border: '1px solid #ccc', padding: '0 4px', fontSize: 12 }}
          >
            {CONDITION_OPERATORS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {condition.operator !== 'empty' && condition.operator !== 'notEmpty' && (
            <Textbox
              value={condition.value ?? ''}
              onChange={(v) => onChange({ ...condition, value: v })}
              placeholder="значение"
              style={{ flex: 1, minWidth: 60 }}
            />
          )}
        </div>
      )}
    </div>
  )
}

const panelStyle: React.CSSProperties = {
  width: '100%',
  minWidth: 0,
  flexShrink: 0,
  padding: 16,
  borderLeft: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #FFFFFF)',
  overflowY: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  textAlign: 'left',
}

export interface PropertiesPanelProps {
  /** Данные формы (для отображения свойств формы при отсутствии выбранного элемента) */
  formData: FormData | null
  onFormUpdate: (patch: Partial<FormData>) => void
  /** Выбранный контрол на форме; при null показываются свойства формы */
  control: FormControl | null
  onUpdate: (id: string, patch: Partial<FormControl>) => void
  /** Каталог формы (для file picker обработчика кнопки) */
  formDirectoryHandle?: FileSystemDirectoryHandle | null
}

export function PropertiesPanel({ formData, onFormUpdate, control, onUpdate, formDirectoryHandle }: PropertiesPanelProps) {
  /** Смена key после выбора пересоздаёт Select и закрывает выпадающий список */
  const [selectCloseKey, setSelectCloseKey] = useState(0)

  if (!control) {
    return (
      <aside className="properties-panel editor-sidebar editor-sidebar--right" style={panelStyle}>
        <H6 style={{ margin: 0, textAlign: 'left' }}>Свойства</H6>
        {formData ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginTop: 12 }}>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Имя</Text>
              <Textbox
                value={formData.name}
                onChange={(v) => onFormUpdate({ name: v })}
                placeholder="Название формы"
              />
            </div>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Идентификатор</Text>
              <Textbox
                value={formData.id}
                onChange={(v) => onFormUpdate({ id: v })}
                placeholder="id формы"
              />
            </div>
            <SchemaEditor
              schema={formData.schema ?? {}}
              onSchemaUpdate={(schema) => onFormUpdate({ schema: Object.keys(schema).length > 0 ? schema : undefined })}
            />
            <HandlersEditor
              title="Обработчики формы"
              events={FORM_EVENTS}
              handlers={formData.handlers ?? {}}
              onChange={(h) => onFormUpdate({ handlers: Object.keys(h).length > 0 ? h : undefined })}
              directoryHandle={formDirectoryHandle}
            />
          </div>
        ) : (
          <Text type="BTR3" style={{ color: '#999', marginTop: 8 }}>
            Выберите файл формы
          </Text>
        )}
      </aside>
    )
  }

  const update = (patch: Partial<FormControl>) => onUpdate(control.id, patch)

  return (
    <aside className="properties-panel editor-sidebar editor-sidebar--right" style={panelStyle}>
      <H6 style={{ margin: 0, textAlign: 'left' }}>Свойства</H6>
      <div className="props-section" style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginTop: 12 }}>
        {control.type === 'table' && (
          <>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Rows (строки)</Text>
              <Textbox
                value={String((control as TableControl).rows)}
                onChange={(v) => {
                  const n = parseInt(v, 10)
                  if (!isNaN(n) && n >= 1 && n <= 12) {
                    const t = control as TableControl
                    const newLen = n * t.cols
                    const children = [...t.children]
                    while (children.length < newLen) children.push(null)
                    if (children.length > newLen) children.splice(newLen)
                    update({ rows: n, children } as Partial<TableControl>)
                  }
                }}
                placeholder="2"
              />
            </div>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Cols (колонки)</Text>
              <Textbox
                value={String((control as TableControl).cols)}
                onChange={(v) => {
                  const n = parseInt(v, 10)
                  if (!isNaN(n) && n >= 1 && n <= 12) {
                    const t = control as TableControl
                    const newLen = t.rows * n
                    const children = [...t.children]
                    while (children.length < newLen) children.push(null)
                    if (children.length > newLen) children.splice(newLen)
                    update({ cols: n, children } as Partial<TableControl>)
                  }
                }}
                placeholder="2"
              />
            </div>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Empty text</Text>
              <Textbox
                value={(control as TableControl).emptyText ?? ''}
                onChange={(v) => update({ emptyText: v || undefined } as Partial<TableControl>)}
                placeholder="Нет данных"
              />
            </div>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Row mode</Text>
              <SelectWithOptionWidth options={[{ value: 'standard', label: 'standard' }, { value: 'compact', label: 'compact' }]}>
                <Select
                  key={`table-rowmode-${selectCloseKey}`}
                  options={[{ value: 'standard', label: 'standard' }, { value: 'compact', label: 'compact' }]}
                  value={(control as TableControl).rowMode ?? 'standard'}
                  onChange={(v: string | undefined) => { update({ rowMode: (v as 'standard' | 'compact') || 'standard' } as Partial<TableControl>); setSelectCloseKey((k) => k + 1) }}
                  getPopupContainer={() => document.body}
                />
              </SelectWithOptionWidth>
            </div>
            <div style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Column vertical align</Text>
              <SelectWithOptionWidth options={[{ value: 'top', label: 'top' }, { value: 'middle', label: 'middle' }, { value: 'bottom', label: 'bottom' }, { value: 'inherit', label: 'inherit' }]}>
                <Select
                  key={`table-colalign-${selectCloseKey}`}
                  options={[{ value: 'top', label: 'top' }, { value: 'middle', label: 'middle' }, { value: 'bottom', label: 'bottom' }, { value: 'inherit', label: 'inherit' }]}
                  value={(control as TableControl).columnVerticalAlign ?? 'inherit'}
                  onChange={(v: string | undefined) => { update({ columnVerticalAlign: (v as TableControl['columnVerticalAlign']) || 'inherit' } as Partial<TableControl>); setSelectCloseKey((k) => k + 1) }}
                  getPopupContainer={() => document.body}
                />
              </SelectWithOptionWidth>
            </div>
            <HexaCheckbox
              checked={(control as TableControl).disabled}
              onChange={(e) => update({ disabled: e.target.checked } as Partial<TableControl>)}
            >
              Disabled
            </HexaCheckbox>
            <div style={{ marginTop: 12, width: '100%' }}>
              <HexaCheckbox
                checked={!!(control as TableControl).toolbar}
                onChange={(e) =>
                  update({
                    toolbar: e.target.checked
                      ? { left: [{ type: 'button', key: '1', label: 'Действие' }], right: [] }
                      : undefined,
                  } as Partial<TableControl>)
                }
              >
                Тулбар над таблицей
              </HexaCheckbox>
              {(control as TableControl).toolbar && (
                <Space size={8} direction="vertical" style={{ width: '100%', marginTop: 8 }}>
                  <Text type="BTR3" style={{ display: 'block', fontWeight: 600 }}>Слева</Text>
                  {((control as TableControl).toolbar!.left ?? []).map((item, i) => (
                    <ToolbarItemEditor
                      key={item.key + i}
                      item={item}
                      index={i}
                      onChange={(patch) => {
                        const t = control as TableControl
                        const next = [...(t.toolbar!.left ?? [])]
                        next[i] = { ...next[i], ...patch }
                        update({ toolbar: { ...t.toolbar!, left: next.length ? next : [] } } as Partial<TableControl>)
                      }}
                      onRemove={() => {
                        const t = control as TableControl
                        const left = (t.toolbar!.left ?? []).filter((_, j) => j !== i)
                        update({ toolbar: { ...t.toolbar!, left } } as Partial<TableControl>)
                      }}
                      canRemove={(control as TableControl).toolbar!.left!.length > 0}
                    />
                  ))}
                  <Button
                    mode="secondary"
                    text="Добавить слева"
                    iconBefore={<Add />}
                    onClick={() => {
                      const t = control as TableControl
                      const left = [...(t.toolbar!.left ?? []), { type: 'button' as const, key: `l-${Date.now()}`, label: 'Кнопка' }]
                      update({ toolbar: { ...t.toolbar!, left } } as Partial<TableControl>)
                    }}
                    style={{ width: '100%' }}
                  />
                  <Text type="BTR3" style={{ display: 'block', fontWeight: 600, marginTop: 8 }}>Справа</Text>
                  {((control as TableControl).toolbar!.right ?? []).map((item, i) => (
                    <ToolbarItemEditor
                      key={item.key + i}
                      item={item}
                      index={i}
                      onChange={(patch) => {
                        const t = control as TableControl
                        const next = [...(t.toolbar!.right ?? [])]
                        next[i] = { ...next[i], ...patch }
                        update({ toolbar: { ...t.toolbar!, right: next.length ? next : [] } } as Partial<TableControl>)
                      }}
                      onRemove={() => {
                        const t = control as TableControl
                        const right = (t.toolbar!.right ?? []).filter((_, j) => j !== i)
                        update({ toolbar: { ...t.toolbar!, right } } as Partial<TableControl>)
                      }}
                      canRemove={(control as TableControl).toolbar!.right!.length > 0}
                    />
                  ))}
                  <Button
                    mode="secondary"
                    text="Добавить справа"
                    iconBefore={<Add />}
                    onClick={() => {
                      const t = control as TableControl
                      const right = [...(t.toolbar!.right ?? []), { type: 'button' as const, key: `r-${Date.now()}`, label: 'Кнопка' }]
                      update({ toolbar: { ...t.toolbar!, right } } as Partial<TableControl>)
                    }}
                    style={{ width: '100%' }}
                  />
                </Space>
              )}
            </div>
          </>
        )}
        {control.type !== 'table' && (() => {
          const descriptor = getDescriptor(control.type)
          return descriptor ? (
            <descriptor.PropsEditor
              control={control}
              onUpdate={update}
              selectCloseKey={selectCloseKey}
              onSelectClose={() => setSelectCloseKey((k) => k + 1)}
              panelContext={{ formDirectoryHandle }}
            />
          ) : null
        })()}
        <FieldBindingEditor
          control={control}
          onUpdate={update}
          selectCloseKey={selectCloseKey}
          onSelectClose={() => setSelectCloseKey((k) => k + 1)}
        />
        {CONTROL_EVENTS[control.type]?.length > 0 && (
          <HandlersEditor
            title="Обработчики событий"
            events={CONTROL_EVENTS[control.type]}
            handlers={(control as FormControlBase).handlers ?? {}}
            onChange={(h) => update({ handlers: Object.keys(h).length > 0 ? h : undefined } as Partial<FormControl>)}
            directoryHandle={formDirectoryHandle}
          />
        )}
      </div>
    </aside>
  )
}
