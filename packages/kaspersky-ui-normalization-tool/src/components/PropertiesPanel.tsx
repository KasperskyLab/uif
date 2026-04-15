import React, { useEffect, useState } from 'react'
import { Space, Text, H6, Textbox, Select, Checkbox as HexaCheckbox, Button } from '@kaspersky/hexa-ui'
import { Add, Cross, Delete, Folder } from '@kaspersky/hexa-ui-icons/16'
import { SelectWithOptionWidth } from './SelectWithOptionWidth'
import type {
  ControlHandlersMap,
  FormControl,
  FormControlBase,
  FormData,
  ValidationRule,
  ValidationRuleType,
  Condition,
} from '../types/form-dsl'
import {
  deriveModelPathsFromInitialShape,
  controlModelBindPath,
} from '@normalization/form-dsl'
import {
  CONTROL_EVENTS,
  EXTRA_UI_DSL_TYPES,
  resolveTsModulePathFromValue,
} from '../types/form-dsl'
import { loadTsModule } from '../utils/loadConfigHookModule'
import { getDescriptor } from '../controls/registry'
import { HandlersEditor } from './HandlersEditor'
import { HandlerFilePicker } from './HandlerFilePicker'
import { ControlIdPropsEditor } from './ControlIdPropsEditor'

/** Поля ввода и прочие контролы с привязкой данных; `button`/`text`/`grid`/`table` — только id */
const INPUT_CONTROL_TYPES: string[] = ['input', 'checkbox', 'radio', 'select', 'toggle', ...EXTRA_UI_DSL_TYPES]
const DATA_TYPE_OPTIONS = [
  { value: 'string', label: 'string' },
  { value: 'number', label: 'number' },
  { value: 'boolean', label: 'boolean' },
  { value: 'date', label: 'date' },
  { value: 'array', label: 'array' },
]

/**
 * Значение опции «без свойства модели» в Select: не `''` — у rc-select/Hexa Option
 * `key` = `value`; пустая строка среди путей или здесь даёт одну опцию вместо
 * нескольких.
 */
const MODEL_PATH_SELECT_NONE = '__model_path_none__'

function normalize_contract_model_paths(paths: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const p of paths) {
    const t = String(p).trim()
    if (!t || t === MODEL_PATH_SELECT_NONE) continue
    if (seen.has(t)) continue
    seen.add(t)
    out.push(t)
  }
  return out
}

function isInputControl(control: FormControl): boolean {
  if (INPUT_CONTROL_TYPES.includes(control.type)) return true
  return false
}

function useContractModelPaths(
  formData: FormData | null,
  formDirectoryHandle?: FileSystemDirectoryHandle | null,
): { modelPaths: string[]; contractHint: string | null } {
  const [modelPaths, setModelPaths] = useState<string[]>([])
  const [contractHint, setContractHint] = useState<string | null>(null)

  useEffect(() => {
    if (!formDirectoryHandle || !formData?.modelContract) {
      setModelPaths([])
      setContractHint(null)
      return
    }
    const raw = formData.modelContract
    if (typeof raw !== 'string') {
      setModelPaths([])
      setContractHint(null)
      return
    }
    const resolved = resolveTsModulePathFromValue(raw)
    if (!resolved) {
      setModelPaths([])
      setContractHint(
        'Укажите в схеме путь к *.contract.ts — оттуда список свойств модели',
      )
      return
    }
    const loadPath = resolved.replace(/^\.\//, '')
    let cancelled = false
    void (async () => {
      try {
        const mod = await loadTsModule(formDirectoryHandle, loadPath)
        if (cancelled) return
        if (!mod) {
          setModelPaths([])
          setContractHint('Не удалось загрузить описание модели')
          return
        }
        const raw_initial = mod.MODEL_INITIAL
        if (raw_initial === undefined) {
          setModelPaths([])
          setContractHint(
            'Для списка свойств модели экспортируйте const MODEL_INITIAL = { … } satisfies …',
          )
          return
        }
        if (
          raw_initial === null ||
          typeof raw_initial !== 'object' ||
          Array.isArray(raw_initial)
        ) {
          setModelPaths([])
          setContractHint(
            'MODEL_INITIAL — объект со свойствами модели (не массив)',
          )
          return
        }
        const list = normalize_contract_model_paths(
          deriveModelPathsFromInitialShape(raw_initial),
        )
        setModelPaths(list)
        setContractHint(
          list.length === 0
            ? 'В MODEL_INITIAL нет свойств модели (пустой объект или пустые массивы)'
            : null,
        )
      } catch {
        if (!cancelled) {
          setModelPaths([])
          setContractHint('Ошибка загрузки описания модели')
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [formData?.modelContract, formDirectoryHandle])

  return { modelPaths, contractHint }
}

/** Поле dataSource.modelPath: один лейбл как у id, без отдельной секции с border. */
function DataBindPathFields({
  control,
  formData,
  formDirectoryHandle,
  onUpdate,
  selectCloseKey,
  onSelectClose,
}: {
  control: FormControl
  formData: FormData | null
  formDirectoryHandle?: FileSystemDirectoryHandle | null
  onUpdate: (patch: Partial<FormControl>) => void
  selectCloseKey: number
  onSelectClose: () => void
}) {
  const { modelPaths, contractHint } = useContractModelPaths(
    formData,
    formDirectoryHandle,
  )

  const path = controlModelBindPath(control) ?? ''
  const pathOrphan = Boolean(
    path && modelPaths.length > 0 && !modelPaths.includes(path),
  )

  const selectOptions = [
    { value: MODEL_PATH_SELECT_NONE, label: '(без свойства модели)' },
    ...modelPaths.map((p) => ({ value: p, label: p })),
    ...(pathOrphan
      ? [{ value: path, label: `${path} (вне списка свойств)` }]
      : []),
  ]

  const dataBindSelectValue = !path ? MODEL_PATH_SELECT_NONE : path

  return (
    <div style={{ width: '100%', minWidth: 0 }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
        Свойство модели
      </Text>
      {contractHint && (
        <Text type="BTR3" style={{ display: 'block', marginBottom: 8, color: '#999', fontSize: 11 }}>
          {contractHint}
        </Text>
      )}
      <SelectWithOptionWidth options={selectOptions}>
        <Select
          key={`dbind-${selectCloseKey}`}
          options={selectOptions}
          value={dataBindSelectValue}
          style={{ width: '100%' }}
          onChange={(v: string | undefined) => {
            const raw = v ?? MODEL_PATH_SELECT_NONE
            onUpdate({
              dataSource:
                raw === MODEL_PATH_SELECT_NONE
                  ? undefined
                  : { modelPath: raw },
            } as Partial<FormControl>)
            onSelectClose()
          }}
          getPopupContainer={() => document.body}
        />
      </SelectWithOptionWidth>
      {pathOrphan && (
        <Text
          type="BTR3"
          style={{
            display: 'block',
            marginTop: 8,
            color: 'var(--warning--main, #d48806)',
            fontSize: 11,
          }}
        >
          Указано свойство модели «{path}», которого нет в текущем описании —
          выберите свойство из списка
        </Text>
      )}
    </div>
  )
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
  /** `input`: в панели только id и подсказка configHook; привязка/валидация — в коде схемы при необходимости. */
  if (control.type === 'input') return null

  const bc = control as FormControlBase
  const hasRequired = (bc.validation ?? []).some((r) => r.type === 'required')
  return (
    <>
      <div style={{ ...settingsCardStyle }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
          Привязка данных
          {hasRequired && <span style={{ color: 'var(--danger--main, #e00)', marginLeft: 4 }}>*</span>}
        </Text>
        <Space size={12} direction="vertical" style={{ width: '100%', alignItems: 'stretch' }}>
          <div style={{ width: '100%', minWidth: 0 }}>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Имя поля (fieldName)</Text>
            <Textbox
              value={bc.fieldName ?? ''}
              onChange={(v) => onUpdate({ fieldName: v || undefined } as Partial<FormControl>)}
              placeholder="например: email"
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ width: '100%', minWidth: 0 }}>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Тип данных</Text>
            <SelectWithOptionWidth options={DATA_TYPE_OPTIONS}>
              <Select
                key={`datatype-${selectCloseKey}`}
                options={DATA_TYPE_OPTIONS}
                value={bc.dataType ?? 'string'}
                style={{ width: '100%' }}
                onChange={(v: string | undefined) => {
                  onUpdate({ dataType: (v as FormControlBase['dataType']) || 'string' } as Partial<FormControl>)
                  onSelectClose()
                }}
                getPopupContainer={() => document.body}
              />
            </SelectWithOptionWidth>
          </div>
          <div style={{ width: '100%', minWidth: 0 }}>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Значение по умолчанию</Text>
            <Textbox
              value={bc.defaultValue != null ? String(bc.defaultValue) : ''}
              onChange={(v) => onUpdate({ defaultValue: v || undefined } as Partial<FormControl>)}
              placeholder="начальное значение"
              style={{ width: '100%' }}
            />
          </div>
        </Space>
      </div>
      <ValidationEditor
        rules={bc.validation ?? []}
        onChange={(rules) => onUpdate({ validation: rules.length > 0 ? rules : undefined } as Partial<FormControl>)}
      />
    </>
  )
}

function ModelVisibilitySection({
  control,
  formData,
  formDirectoryHandle,
  onUpdate,
  selectCloseKey,
  onSelectClose,
}: {
  control: FormControl
  formData: FormData | null
  formDirectoryHandle?: FileSystemDirectoryHandle | null
  onUpdate: (patch: Partial<FormControl>) => void
  selectCloseKey: number
  onSelectClose: () => void
}) {
  const { modelPaths, contractHint } = useContractModelPaths(
    formData,
    formDirectoryHandle,
  )
  const bc = control as FormControlBase

  return (
    <>
      <div style={{ ...settingsCardStyle }}>
        {contractHint && (
          <Text type="BTR3" style={{ display: 'block', marginBottom: 8, color: '#666', fontSize: 11 }}>
            {contractHint}
          </Text>
        )}
        <ConditionEditor
          label="Показывать при условии"
          condition={bc.visibleWhen}
          modelPaths={modelPaths}
          selectCloseKey={selectCloseKey}
          onSelectClose={onSelectClose}
          onChange={(c) => onUpdate({ visibleWhen: c } as Partial<FormControl>)}
        />
      </div>
      <div style={{ ...settingsCardStyle }}>
        <ConditionEditor
          label="Блокировать при условии"
          condition={bc.disabledWhen}
          modelPaths={modelPaths}
          selectCloseKey={selectCloseKey}
          onSelectClose={onSelectClose}
          onChange={(c) => onUpdate({ disabledWhen: c } as Partial<FormControl>)}
        />
      </div>
    </>
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
    <div style={{ ...settingsCardStyle }}>
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
  modelPaths,
  selectCloseKey,
  onSelectClose,
  onChange,
}: {
  label: string
  condition?: Condition
  modelPaths: string[]
  selectCloseKey: number
  onSelectClose: () => void
  onChange: (c: Condition | undefined) => void
}) {
  const enabled = !!condition
  const orphanCondPath =
    condition?.modelPath && !modelPaths.includes(condition.modelPath)
      ? condition.modelPath
      : ''
  const pathOptions = [
    { value: MODEL_PATH_SELECT_NONE, label: '(не выбрано свойство модели)' },
    ...modelPaths.map((p) => ({ value: p, label: p })),
    ...(orphanCondPath
      ? [
          {
            value: orphanCondPath,
            label: `${orphanCondPath} (вне списка свойств)`,
          },
        ]
      : []),
  ]
  const defaultPath = modelPaths[0] ?? ''
  const condPathStored = condition?.modelPath ?? ''
  const condPathSelectValue =
    !condPathStored || condPathStored === MODEL_PATH_SELECT_NONE
      ? MODEL_PATH_SELECT_NONE
      : modelPaths.includes(condPathStored) || condPathStored === orphanCondPath
        ? condPathStored
        : MODEL_PATH_SELECT_NONE
  return (
    <div style={{ width: '100%' }}>
      <HexaCheckbox
        checked={enabled}
        onChange={(e) => {
          if (e.target.checked) {
            onChange({
              modelPath: defaultPath,
              operator: 'eq',
              value: '',
            })
          } else {
            onChange(undefined)
          }
        }}
      >
        {label}
      </HexaCheckbox>
      {enabled && condition && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginTop: 4,
            width: '100%',
            alignItems: 'stretch',
          }}
        >
          <div style={{ width: '100%', minWidth: 0 }}>
            <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
              Свойство модели
            </Text>
            <SelectWithOptionWidth options={pathOptions}>
              <Select
                key={`cond-path-${selectCloseKey}-${label}`}
                options={pathOptions}
                value={condPathSelectValue}
                style={{ width: '100%', minWidth: 0, maxWidth: '100%' }}
                onChange={(v: string | undefined) => {
                  const raw = v ?? MODEL_PATH_SELECT_NONE
                  onChange({
                    ...condition,
                    modelPath:
                      raw === MODEL_PATH_SELECT_NONE ? defaultPath : raw,
                  })
                  onSelectClose()
                }}
                getPopupContainer={() => document.body}
              />
            </SelectWithOptionWidth>
          </div>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', width: '100%', alignItems: 'center' }}>
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

/** Нежно-голубая подложка для группы настроек в панели */
const settingsCardStyle: React.CSSProperties = {
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  padding: 12,
  borderRadius: 8,
  background: '#f3f9fc',
  border: '1px solid #e3eef5',
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
  const [modelContractPickerOpen, setModelContractPickerOpen] = useState(false)

  if (!control) {
    const modelContractStr =
      typeof formData?.modelContract === 'string' ? formData.modelContract : ''
    return (
      <aside className="properties-panel editor-sidebar editor-sidebar--right" style={panelStyle}>
        <H6 style={{ margin: 0, textAlign: 'left' }}>Свойства</H6>
        {formData ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', marginTop: 12 }}>
            <div style={{ ...settingsCardStyle }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
                Идентификатор
              </Text>
              <Textbox
                value={formData.id}
                onChange={(v) => onFormUpdate({ id: v })}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ ...settingsCardStyle }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
                Описание модели (modelContract)
              </Text>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 6, color: '#666', fontSize: 11 }}>
                Тип модели и MODEL_INITIAL — список свойств модели в панели; файл из
                каталога формы
              </Text>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Textbox
                  value={modelContractStr}
                  readOnly
                  placeholder="не выбран"
                  style={{ flex: 1 }}
                />
                {modelContractStr && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Cross />}
                    onClick={() => onFormUpdate({ modelContract: undefined })}
                  />
                )}
                {formDirectoryHandle && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Folder />}
                    onClick={() =>
                      setModelContractPickerOpen((o) => !o)}
                  />
                )}
              </div>
              {modelContractPickerOpen && formDirectoryHandle && (
                <HandlerFilePicker
                  directoryHandle={formDirectoryHandle}
                  fileExtensions={['.ts']}
                  onSelect={(path) => {
                    onFormUpdate({ modelContract: path })
                    setModelContractPickerOpen(false)
                  }}
                  onClose={() => setModelContractPickerOpen(false)}
                />
              )}
              {!formDirectoryHandle && (
                <Text type="BTR3" style={{ marginTop: 6, color: '#999', fontSize: 11 }}>
                  Откройте каталог формы в приложении, чтобы выбрать файл
                </Text>
              )}
            </div>
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
        <div style={{ ...settingsCardStyle }}>
          <ControlIdPropsEditor id={control.id} onUpdate={update} />
        </div>
        <div style={{ ...settingsCardStyle }}>
          <DataBindPathFields
            control={control}
            formData={formData ?? null}
            formDirectoryHandle={formDirectoryHandle}
            onUpdate={update}
            selectCloseKey={selectCloseKey}
            onSelectClose={() => setSelectCloseKey((k) => k + 1)}
          />
        </div>
        <ModelVisibilitySection
          control={control}
          formData={formData ?? null}
          formDirectoryHandle={formDirectoryHandle}
          onUpdate={update}
          selectCloseKey={selectCloseKey}
          onSelectClose={() => setSelectCloseKey((k) => k + 1)}
        />
        {(() => {
          const descriptor = getDescriptor(control.type)
          const PropsEditor = descriptor?.PropsEditor
          if (!PropsEditor) return null
          return (
            <div style={{ ...settingsCardStyle }}>
              <PropsEditor
                control={control}
                onUpdate={update}
                selectCloseKey={selectCloseKey}
                onSelectClose={() => setSelectCloseKey((k) => k + 1)}
                panelContext={{ formDirectoryHandle }}
              />
            </div>
          )
        })()}
        <FieldBindingEditor
          control={control}
          onUpdate={update}
          selectCloseKey={selectCloseKey}
          onSelectClose={() => setSelectCloseKey((k) => k + 1)}
        />
        {control.type !== 'input' && CONTROL_EVENTS[control.type]?.length > 0 && (
          <div style={{ ...settingsCardStyle }}>
            <HandlersEditor
              title="Обработчики событий"
              events={CONTROL_EVENTS[control.type]}
              handlers={
                Object.fromEntries(
                  Object.entries(
                    (control as FormControlBase).handlers ?? {},
                  ).filter((e): e is [string, string] => typeof e[1] === 'string'),
                ) as Record<string, string>
              }
              onChange={(h) => {
                const prev: ControlHandlersMap = {
                  ...((control as FormControlBase).handlers ?? {}),
                }
                for (const [k, v] of Object.entries(h)) {
                  if (v) prev[k] = v
                  else delete prev[k]
                }
                update({
                  handlers:
                    Object.keys(prev).length > 0 ? prev : undefined,
                } as Partial<FormControl>)
              }}
              directoryHandle={formDirectoryHandle}
            />
          </div>
        )}
      </div>
    </aside>
  )
}
