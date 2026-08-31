import {
  AlertTriangle,
  Braces,
  Check,
  FolderOpen,
  RotateCcw,
  Settings2,
} from "../../components/icons.tsx"
import { paletteIcons } from "../../components/icons.tsx"
import { useMemo, useState } from "react"
import type {
  ComponentDefinition,
  ComponentRegistry,
  RegistryPropDefinition,
} from "../component-registry/types.ts"
import type {
  Condition,
  ConditionExpression,
  ConditionGroup,
  ConditionOperand,
  ConditionSource,
  ElementDependency,
  ElementValue,
  FormSchema,
  FormSettings,
  FunctionReference,
  JsonValue,
  ServerMethodConfig,
  SchemaNode,
  ToggleableFunction,
  ValidationRule,
  ValidationType,
  ValueCast,
} from "../schema-model/form-schema.ts"
import type { Diagnostic } from "../schema-model/diagnostics.ts"

type SerializableMode = "value" | "notDefined" | "emptyString" | "null"

function serializationMode(value: unknown): SerializableMode {
  if (value === undefined) return "notDefined"
  if (value === null) return "null"
  if (value === "") return "emptyString"
  return "value"
}

function FieldLabel({
  title,
  optional,
  children,
}: {
  title: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="inspector-field">
      <span>
        {title}
        {optional && <em>optional</em>}
      </span>
      {children}
    </label>
  )
}

function OptionalMode({
  mode,
  onModeChange,
}: {
  mode: SerializableMode
  onModeChange: (mode: SerializableMode) => void
}) {
  return (
    <select
      className="mode-select"
      aria-label="Режим сериализации"
      value={mode}
      onChange={(event) =>
        onModeChange(event.target.value as SerializableMode)
      }
    >
      <option value="value">Значение</option>
      <option value="notDefined">not defined</option>
      <option value="emptyString">&quot;&quot;</option>
      <option value="null">NULL</option>
    </select>
  )
}

function PropInput({
  definition,
  value,
  onChange,
  onValidityChange,
}: {
  definition: RegistryPropDefinition
  value: JsonValue | undefined
  onChange: (value: JsonValue | undefined) => void
  onValidityChange: (valid: boolean) => void
}) {
  const [mode, setMode] = useState<SerializableMode>(() =>
    definition.required ? "value" : serializationMode(value)
  )
  const disabled = mode !== "value"
  const defaultValue: JsonValue =
    definition.schema.default ??
    (definition.editor === "checkbox"
      ? false
      : definition.editor === "number"
        ? 0
        : ["json", "multiselect", "function"].includes(definition.editor)
          ? {}
          : (definition.options?.[0]?.value ?? ""))
  const [jsonText, setJsonText] = useState(() =>
    value === undefined ? "" : JSON.stringify(value, null, 2)
  )
  const [jsonError, setJsonError] = useState<string | null>(null)
  const changeMode = (nextMode: SerializableMode) => {
    setMode(nextMode)
    if (nextMode === "notDefined") onChange(undefined)
    if (nextMode === "emptyString") onChange("")
    if (nextMode === "null") onChange(null)
    if (nextMode === "value") {
      onChange(defaultValue)
      if (["json", "multiselect"].includes(definition.editor))
        setJsonText(JSON.stringify(defaultValue, null, 2))
    }
    setJsonError(null)
    onValidityChange(true)
  }

  const control = (() => {
    if (definition.editor === "checkbox") {
      return (
        <input
          checked={value === true}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          type="checkbox"
        />
      )
    }
    if (definition.editor === "select") {
      return (
        <select
          disabled={disabled}
          value={String(value ?? "")}
          onChange={(event) => {
            const option = definition.options?.find(
              (candidate) => String(candidate.value) === event.target.value
            )
            onChange(option?.value ?? event.target.value)
          }}
        >
          <option value="">Выберите значение</option>
          {definition.options?.map((option) => (
            <option key={String(option.value)} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }
    if (definition.editor === "iconSelect") {
      return (
        <select
          disabled={disabled}
          value={typeof value === "string" ? value : ""}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">Без иконки</option>
          {Object.keys(paletteIcons)
            .sort()
            .map((name) => (
              <option key={name}>{name}</option>
            ))}
        </select>
      )
    }
    if (definition.editor === "function") {
      const reference =
        value && typeof value === "object" && !Array.isArray(value)
          ? (value as unknown as FunctionReference)
          : undefined
      return (
        <FunctionField
          title="Функция"
          value={reference}
          onChange={(next) => onChange(next as unknown as JsonValue)}
        />
      )
    }
    if (["json", "multiselect"].includes(definition.editor)) {
      return (
        <textarea
          disabled={disabled}
          rows={4}
          value={jsonText}
          onChange={(event) => {
            setJsonText(event.target.value)
            try {
              onChange(JSON.parse(event.target.value) as JsonValue)
              setJsonError(null)
              onValidityChange(true)
            } catch (caught) {
              setJsonError(
                caught instanceof Error ? caught.message : "Некорректный JSON"
              )
              onValidityChange(false)
            }
          }}
        />
      )
    }
    if (definition.editor === "number") {
      return (
        <input
          disabled={disabled}
          type="number"
          value={typeof value === "number" ? value : 0}
          onChange={(event) => onChange(Number(event.target.value))}
        />
      )
    }
    return (
      <input
        disabled={disabled}
        value={typeof value === "string" ? value : ""}
        onChange={(event) => onChange(event.target.value)}
      />
    )
  })()

  return (
    <div className="prop-field">
      {!definition.required && (
        <OptionalMode
          mode={mode}
          onModeChange={changeMode}
        />
      )}
      <FieldLabel optional={!definition.required} title={definition.title}>
        {control}
      </FieldLabel>
      {jsonError && <small className="field-error">{jsonError}</small>}
      {definition.description && (
        <small className="field-help">{definition.description}</small>
      )}
    </div>
  )
}

function InspectorGroup({
  title,
  icon,
  children,
  open = false,
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  open?: boolean
}) {
  return (
    <details className="inspector-group" open={open}>
      <summary>
        {icon}
        {title}
      </summary>
      <div className="inspector-group-content">{children}</div>
    </details>
  )
}

function collectByEntity(
  form: FormSchema,
  registry: ComponentRegistry,
  entity: string
): SchemaNode[] {
  const result: SchemaNode[] = []
  const visit = (nodes: SchemaNode[]) =>
    nodes.forEach((node) => {
      const component = registry.components.find(
        (candidate) => candidate.type === node.type
      )
      if (component?.meta.entity === entity) result.push(node)
      if (node.children) visit(node.children)
    })
  visit(form.elements)
  return result
}

const styleLabels = {
  nestingLevel: "Nesting level (left indent)",
  marginTop: "Margin top",
  marginBottom: "Margin bottom",
  marginRight: "Margin right",
  labelPosition: "Label position",
  labelType: "Label type",
} as const

const styleOptions = {
  nestingLevel: [
    "none",
    "related",
    "grouped",
    "section",
    "separated",
    "space1",
    "space2",
    "space3",
    "checkboxWidth",
    "toggleWidth",
    "labelWidth",
  ],
  marginTop: [
    "none",
    "related",
    "grouped",
    "section",
    "separated",
    "space1",
    "space2",
    "space3",
    "negative1",
    "negative2",
    "negative3",
  ],
  marginBottom: [
    "none",
    "related",
    "grouped",
    "section",
    "separated",
    "space1",
    "space2",
    "space3",
    "negative1",
    "negative2",
    "negative3",
  ],
  marginRight: [
    "none",
    "related",
    "grouped",
    "section",
    "separated",
    "space1",
    "space2",
    "space3",
  ],
  labelPosition: ["left", "top", "right"],
  labelType: ["default", "full", "stretch"],
} as const

function ElementInspector({
  form,
  node,
  component,
  registry,
  diagnostics,
  onCancel,
  onSave,
}: {
  form: FormSchema
  node: SchemaNode
  component?: ComponentDefinition
  registry: ComponentRegistry
  diagnostics: Diagnostic[]
  onCancel: () => void
  onSave: (node: SchemaNode) => void
}) {
  const [draft, setDraft] = useState<SchemaNode>(() => structuredClone(node))
  const [invalidProps, setInvalidProps] = useState<Set<string>>(() => new Set())
  const hasUnsavedChanges = JSON.stringify(draft) !== JSON.stringify(node)
  const locks = useMemo(
    () =>
      collectByEntity(form, registry, "lock").filter(
        (item) => item.id !== node.id
      ),
    [form, node.id, registry]
  )
  const accordions = useMemo(
    () =>
      collectByEntity(form, registry, "accordion").filter(
        (item) => item.id !== node.id
      ),
    [form, node.id, registry]
  )
  const updateProps = (name: string, value: JsonValue | undefined) =>
    setDraft((current) => {
      const props = { ...current.props }
      if (value === undefined) delete props[name]
      else props[name] = value
      return { ...current, props }
    })
  const state = {
    visible: true,
    disabled: false,
    readOnly: false,
    loading: false,
    invalid: false,
    ...draft.state,
  }
  const style = {
    nestingLevel: "none",
    marginTop: "none",
    marginBottom: "none",
    marginRight: "none",
    labelPosition: "left",
    labelType: "default",
    controlWidth: 0,
    tooltipWidth: 0,
    cssClass: "",
    ...draft.style,
  }

  return (
    <>
      <div className="inspector-title">
        <div>
          <span className="eyebrow">{component?.type ?? node.type}</span>
          <h2>{component?.title ?? node.type}</h2>
        </div>
        <span className="count-badge">#{node.id}</span>
      </div>
      <div className="inspector-scroll">
        <InspectorGroup
          title="Основные настройки"
          icon={<Settings2 size={15} />}
          open
        >
          <FieldLabel title="ID компонента">
            <input
              value={draft.id}
              onChange={(event) =>
                setDraft({ ...draft, id: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Alias компонента" optional>
            <input
              value={draft.alias ?? ""}
              onChange={(event) =>
                setDraft({ ...draft, alias: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="ID справки" optional>
            <input
              value={draft.helpId ?? ""}
              onChange={(event) =>
                setDraft({ ...draft, helpId: event.target.value })
              }
            />
          </FieldLabel>
          <div className="subheading">Состояние</div>
          <div className="checkbox-grid">
            {(
              ["visible", "disabled", "readOnly", "loading", "invalid"] as const
            ).map((key) => (
              <label key={key}>
                <input
                  checked={state[key]}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      state: { ...state, [key]: event.target.checked },
                    })
                  }
                  type="checkbox"
                />
                {key}
              </label>
            ))}
          </div>
          <section className="component-props-section">
            <div className="component-props-heading">
              <span>Свойства Hexa UI</span>
              <small>{component?.type ?? node.type}</small>
            </div>
            <div className="component-props-content">
              {component?.props.length ? (
                component.props.map((definition) => (
                  <PropInput
                    key={definition.name}
                    definition={definition}
                    value={draft.props[definition.name]}
                    onChange={(value) => updateProps(definition.name, value)}
                    onValidityChange={(valid) =>
                      setInvalidProps((current) => {
                        const next = new Set(current)
                        if (valid) next.delete(definition.name)
                        else next.add(definition.name)
                        return next
                      })
                    }
                  />
                ))
              ) : (
                <div className="empty-inline">
                  У компонента нет доступных props
                </div>
              )}
            </div>
          </section>
        </InspectorGroup>
        <InspectorGroup title="Значение">
          <ValueEditor
            value={draft.value}
            onChange={(value) => setDraft({ ...draft, value })}
          />
        </InspectorGroup>
        <InspectorGroup title="Замок">
          <FieldLabel title="Замок" optional>
            <select
              value={draft.lockId ?? ""}
              onChange={(event) =>
                setDraft({ ...draft, lockId: event.target.value || undefined })
              }
            >
              <option value="">not defined</option>
              {locks.map((item) => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          </FieldLabel>
        </InspectorGroup>
        <InspectorGroup title="Аккордеон">
          <FieldLabel title="Аккордеон" optional>
            <select
              value={draft.accordionId ?? ""}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  accordionId: event.target.value || undefined,
                })
              }
            >
              <option value="">not defined</option>
              {accordions.map((item) => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          </FieldLabel>
        </InspectorGroup>
        <InspectorGroup title="Control style">
          {(
            [
              "nestingLevel",
              "marginTop",
              "marginBottom",
              "marginRight",
              "labelPosition",
              "labelType",
            ] as const
          ).map((key) => (
            <FieldLabel key={key} title={styleLabels[key]}>
              <select
                value={String(style[key])}
                onChange={(event) =>
                  setDraft({
                    ...draft,
                    style: {
                      ...style,
                      [key]: event.target.value,
                    } as SchemaNode["style"],
                  })
                }
              >
                {styleOptions[key].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FieldLabel>
          ))}
          <FieldLabel title="Control width">
            <input
              min="0"
              type="number"
              value={style.controlWidth}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  style: {
                    ...style,
                    controlWidth: Number(event.target.value),
                  } as SchemaNode["style"],
                })
              }
            />
          </FieldLabel>
          <FieldLabel title="Ширина тултипа">
            <input
              min="0"
              type="number"
              value={style.tooltipWidth}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  style: {
                    ...style,
                    tooltipWidth: Number(event.target.value),
                  } as SchemaNode["style"],
                })
              }
            />
          </FieldLabel>
          <FieldLabel title="CSS class">
            <input
              value={style.cssClass ?? ""}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  style: {
                    ...style,
                    cssClass: event.target.value,
                  } as SchemaNode["style"],
                })
              }
            />
          </FieldLabel>
        </InspectorGroup>
        <InspectorGroup title="Зависимости">
          {diagnostics
            .filter(
              (item) =>
                item.code === "CYCLIC_DEPENDENCY" ||
                item.code === "DEPENDENCY_SOURCE_NOT_FOUND"
            )
            .map((item) => (
              <div
                className={`dependency-diagnostic ${item.severity}`}
                key={`${item.code}:${item.message}`}
              >
                <AlertTriangle size={14} />
                <span>{item.message}</span>
              </div>
            ))}
          <DependenciesEditor
            value={draft.dependencies}
            onChange={(dependencies) => setDraft({ ...draft, dependencies })}
          />
        </InspectorGroup>
        <InspectorGroup title="Валидация">
          <ValidationEditor
            value={draft.validation}
            onChange={(validation) => setDraft({ ...draft, validation })}
          />
        </InspectorGroup>
      </div>
      {hasUnsavedChanges && (
        <div className="inspector-actions">
          <button
            className="secondary-button"
            onClick={() => {
              setDraft(structuredClone(node))
              onCancel()
            }}
            type="button"
          >
            <RotateCcw size={15} />
            Отмена
          </button>
          <button
            className="primary-button"
            disabled={!draft.id.trim() || invalidProps.size > 0}
            onClick={() => onSave(draft)}
            type="button"
          >
            <Check size={15} />
            Сохранить
          </button>
        </div>
      )}
    </>
  )
}

function FunctionField({
  title,
  value,
  onChange,
}: {
  title: string
  value?: FunctionReference
  onChange: (value: FunctionReference) => void
}) {
  const reference = value ?? { type: "runtime", key: "" }
  const [filePicker, setFilePicker] = useState<{
    open: boolean
    loading: boolean
    files: string[]
    query: string
    basePath?: string
    error?: string
  }>({ open: false, loading: false, files: [], query: "" })
  const openFilePicker = async (query = "") => {
    if (filePicker.files.length) {
      setFilePicker((current) => ({
        ...current,
        open: true,
        query,
        error: undefined,
      }))
      return
    }
    setFilePicker((current) => ({
      ...current,
      open: true,
      loading: true,
      query,
      error: undefined,
    }))
    try {
      const response = await fetch("/api/function-files")
      const result = (await response.json()) as {
        basePath?: string
        files?: string[]
        error?: string
      }
      setFilePicker({
        open: true,
        loading: false,
        files: result.files ?? [],
        query,
        basePath: result.basePath,
        error: result.error,
      })
    } catch {
      setFilePicker({
        open: true,
        loading: false,
        files: [],
        query,
        error: "Не удалось получить список файлов",
      })
    }
  }
  const filteredFiles = filePicker.files.filter((file) =>
    file
      .split("/")
      .pop()
      ?.toLowerCase()
      .includes(filePicker.query.toLowerCase())
  )
  return (
    <div className="nested-settings">
      <FieldLabel title={`${title}: источник`}>
        <select
          value={reference.type}
          onChange={(event) =>
            onChange(
              event.target.value === "file"
                ? { type: "file", filePath: "" }
                : { type: "runtime", key: "" }
            )
          }
        >
          <option value="runtime">Runtime</option>
          <option value="file">Файл</option>
        </select>
      </FieldLabel>
      {reference.type === "runtime" ? (
        <FieldLabel title={title}>
          <input
            placeholder="Имя функции"
            value={reference.key}
            onChange={(event) =>
              onChange({ ...reference, key: event.target.value })
            }
          />
        </FieldLabel>
      ) : (
        <>
          <FieldLabel title="Путь к файлу">
            <div className="input-with-action">
              <input
                placeholder="./handlers/example.ts"
                value={reference.filePath}
                onChange={(event) => {
                  onChange({ ...reference, filePath: event.target.value })
                  void openFilePicker(event.target.value)
                }}
                onFocus={() => {
                  if (reference.filePath)
                    void openFilePicker(reference.filePath)
                }}
              />
              <span
                aria-label="Выбрать файл функции"
                className="file-picker-button"
                onClick={() => void openFilePicker()}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ")
                    void openFilePicker()
                }}
                role="button"
                tabIndex={0}
                title="Выбрать файл"
              >
                <FolderOpen size={16} />
              </span>
              {filePicker.open && (
                <div className="file-picker-menu">
                  <div className="file-picker-heading">
                    <span>{filePicker.basePath ?? "basePath"}</span>
                    <button
                      onClick={() =>
                        setFilePicker((current) => ({
                          ...current,
                          open: false,
                        }))
                      }
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                  {filePicker.loading && (
                    <div className="file-picker-message">Загрузка…</div>
                  )}
                  {filePicker.error && (
                    <div className="file-picker-message error">
                      {filePicker.error}
                    </div>
                  )}
                  {!filePicker.loading &&
                    !filePicker.error &&
                    !filteredFiles.length && (
                      <div className="file-picker-message">
                        Совпадений не найдено
                      </div>
                    )}
                  {filteredFiles.map((file) => (
                    <button
                      className="file-picker-option"
                      key={file}
                      onClick={() => {
                        onChange({ ...reference, filePath: file })
                        setFilePicker((current) => ({
                          ...current,
                          open: false,
                          query: "",
                        }))
                      }}
                      type="button"
                    >
                      {file}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </FieldLabel>
          <FieldLabel title="Имя экспорта" optional>
            <input
              placeholder="export default"
              value={reference.exportName ?? ""}
              onChange={(event) =>
                onChange({ ...reference, exportName: event.target.value })
              }
            />
          </FieldLabel>
        </>
      )}
    </div>
  )
}

function ToggleFunctionField({
  title,
  value,
  onChange,
}: {
  title: string
  value?: ToggleableFunction
  onChange: (value: ToggleableFunction) => void
}) {
  const current = value ?? { enabled: false }
  return (
    <div className="toggle-settings">
      <label className="check-row">
        <input
          checked={current.enabled}
          onChange={(event) =>
            onChange(
              event.target.checked
                ? {
                    enabled: true,
                    function: current.function ?? { type: "runtime", key: "" },
                  }
                : { enabled: false }
            )
          }
          type="checkbox"
        />
        {title}
      </label>
      {current.enabled && (
        <FunctionField
          onChange={(fn) => onChange({ ...current, function: fn })}
          title="Функция"
          value={current.function}
        />
      )}
    </div>
  )
}

function ServerFields({
  value,
  onChange,
}: {
  value: ServerMethodConfig
  onChange: (value: ServerMethodConfig) => void
}) {
  return (
    <div className="nested-settings">
      <FieldLabel title="Название метода">
        <input disabled value={value.methodName} />
      </FieldLabel>
      <FieldLabel title="Тип источника параметров">
        <select
          value={value.parametersSource.type}
          onChange={(event) =>
            onChange({
              ...value,
              parametersSource:
                event.target.value === "handler"
                  ? { type: "handler", function: { type: "runtime", key: "" } }
                  : { type: "object", object: "" },
            })
          }
        >
          <option value="object">Объект</option>
          <option value="handler">Хендлер-функция</option>
        </select>
      </FieldLabel>
      {value.parametersSource.type === "object" ? (
        <FieldLabel title="Объект">
          <input
            value={value.parametersSource.object ?? ""}
            onChange={(event) =>
              onChange({
                ...value,
                parametersSource: {
                  type: "object",
                  object: event.target.value,
                },
              })
            }
          />
        </FieldLabel>
      ) : (
        <FunctionField
          onChange={(fn) =>
            onChange({
              ...value,
              parametersSource: { type: "handler", function: fn },
            })
          }
          title="Имя функции"
          value={value.parametersSource.function}
        />
      )}
    </div>
  )
}

const castOptions: ValueCast[] = [
  "none",
  "string",
  "int",
  "number",
  "bool",
  "date",
]
const validationTypes: ValidationType[] = [
  "Date",
  "Email",
  "Integer",
  "Number",
  "Float number",
  "IPv4",
  "IPv6",
  "MAC address",
  "Path",
  "Range",
  "String",
  "Proxy",
  "Host name",
  "Net bios name",
  "Not empty",
  "Length",
  "Group",
  "RangeEnum",
  "IPv4Mask",
  "IPv6Mask",
  "ipv4SubnetMask",
  "ipv6SubnetMask",
  "Ignore special chars",
  "Ignore special chars (v2)",
  "Ignore special chars (v3)",
  "Ignore special chars (v4)",
  "Password",
  "Ignore first or last spaces",
  "URL Input",
  "URL http Input",
  "Port",
  "Custom function",
  "Equality",
  "Not equal",
]

function ValueEditor({
  value,
  onChange,
}: {
  value?: ElementValue
  onChange: (value: ElementValue | undefined) => void
}) {
  if (!value)
    return (
      <button
        className="secondary-button"
        onClick={() =>
          onChange({ source: { type: "simpleValue", value: "", cast: "none" } })
        }
        type="button"
      >
        Настроить источник значения
      </button>
    )
  const source = value.source
  const setSource = (next: ElementValue["source"]) =>
    onChange({ ...value, source: next })
  return (
    <div className="structured-editor">
      <FieldLabel title="Тип источника">
        <select
          value={source.type}
          onChange={(event) => {
            const type = event.target.value
            setSource(
              type === "fileFunction"
                ? { type, function: { type: "file", filePath: "" } }
                : type === "functionHandler"
                  ? {
                      type,
                      getter: { type: "runtime", key: "" },
                      initializeOnly: false,
                      setter: { type: "runtime", key: "" },
                    }
                  : type === "modelProperty"
                    ? {
                        type,
                        propertyName: "",
                        cast: "none",
                        patchFromContextBeforeDisplay: false,
                        patchBeforeSaveToContext: false,
                      }
                    : type === "runtimeVariable"
                      ? { type, key: "" }
                      : { type: "simpleValue", value: "", cast: "none" }
            )
          }}
        >
          <option value="simpleValue">Простое значение</option>
          <option value="fileFunction">Функция из файла</option>
          <option value="functionHandler">Функция-хендлер</option>
          <option value="modelProperty">Свойство модели</option>
          <option value="runtimeVariable">Значение runtime</option>
        </select>
      </FieldLabel>
      {source.type === "simpleValue" && (
        <>
          <FieldLabel title="Значение">
            <input
              value={source.value ?? ""}
              onChange={(event) =>
                setSource({ ...source, value: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Приведение типа">
            <select
              value={source.cast}
              onChange={(event) =>
                setSource({ ...source, cast: event.target.value as ValueCast })
              }
            >
              {castOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </FieldLabel>
        </>
      )}
      {source.type === "fileFunction" && (
        <FunctionField
          title="Функция"
          value={source.function}
          onChange={(fn) =>
            setSource({
              ...source,
              function:
                fn.type === "file" ? fn : { type: "file", filePath: "" },
            })
          }
        />
      )}
      {source.type === "functionHandler" && (
        <>
          <FunctionField
            title="Getter"
            value={source.getter}
            onChange={(getter) => setSource({ ...source, getter })}
          />
          <label className="check-row">
            <input
              checked={source.initializeOnly}
              onChange={(event) =>
                setSource({ ...source, initializeOnly: event.target.checked })
              }
              type="checkbox"
            />
            Вызывать только при инициализации формы
          </label>
          <FunctionField
            title="Setter"
            value={source.setter}
            onChange={(setter) => setSource({ ...source, setter })}
          />
        </>
      )}
      {source.type === "modelProperty" && (
        <>
          <FieldLabel title="Название свойства">
            <input
              value={source.propertyName ?? ""}
              onChange={(event) =>
                setSource({ ...source, propertyName: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Приведение типа">
            <select
              value={source.cast}
              onChange={(event) =>
                setSource({ ...source, cast: event.target.value as ValueCast })
              }
            >
              {castOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </FieldLabel>
          <label className="check-row">
            <input
              checked={source.patchFromContextBeforeDisplay}
              onChange={(event) =>
                setSource({
                  ...source,
                  patchFromContextBeforeDisplay: event.target.checked,
                })
              }
              type="checkbox"
            />
            Пропатчить из контекста перед показом
          </label>
          <label className="check-row">
            <input
              checked={source.patchBeforeSaveToContext}
              onChange={(event) =>
                setSource({
                  ...source,
                  patchBeforeSaveToContext: event.target.checked,
                })
              }
              type="checkbox"
            />
            Пропатчить перед сохранением
          </label>
        </>
      )}
      {source.type === "runtimeVariable" && (
        <FieldLabel title="Ключ runtime">
          <input
            value={source.key ?? ""}
            onChange={(event) =>
              setSource({ ...source, key: event.target.value })
            }
          />
        </FieldLabel>
      )}
      <div className="subheading">События</div>
      <ToggleFunctionField
        title="После изменения значения"
        value={
          value.events?.afterValueChange
            ? {
                enabled: true,
                function: value.events.afterValueChange.function,
              }
            : { enabled: false }
        }
        onChange={(next) =>
          onChange({
            ...value,
            events: {
              ...value.events,
              afterValueChange:
                next.enabled && next.function
                  ? { function: next.function }
                  : undefined,
            },
          })
        }
      />
      <label className="check-row">
        <input
          checked={value.events?.hideActionBarOnChange ?? false}
          onChange={(event) =>
            onChange({
              ...value,
              events: {
                ...value.events,
                hideActionBarOnChange: event.target.checked,
              },
            })
          }
          type="checkbox"
        />
        Не показывать action-bar при изменении
      </label>
      <div className="subheading">Взаимодействие с моделью</div>
      <label className="check-row">
        <input
          checked={
            value.modelInteraction?.ignoreModelChangesAfterInitialization ??
            false
          }
          onChange={(event) =>
            onChange({
              ...value,
              modelInteraction: {
                ...value.modelInteraction,
                ignoreModelChangesAfterInitialization: event.target.checked,
              },
            })
          }
          type="checkbox"
        />
        Игнорировать изменения модели после инициализации
      </label>
      <label className="check-row">
        <input
          checked={
            value.modelInteraction?.suppressControlChangeHighlight ?? false
          }
          onChange={(event) =>
            onChange({
              ...value,
              modelInteraction: {
                ...value.modelInteraction,
                suppressControlChangeHighlight: event.target.checked,
              },
            })
          }
          type="checkbox"
        />
        Не подсвечивать изменения контрола
      </label>
      <button
        className="secondary-button"
        onClick={() => onChange(undefined)}
        type="button"
      >
        Удалить настройку value
      </button>
    </div>
  )
}

function defaultCondition(): Condition {
  return {
    source: { type: "model", path: "" },
    operator: "eq",
    operand: { type: "literal", value: "" },
    cast: { source: "none", operand: "none" },
  }
}

function defaultConditionSource(
  type: ConditionSource["type"] = "model"
): ConditionSource {
  if (type === "element") return { type, elementId: "" }
  if (type === "runtime") return { type, key: "" }
  if (type === "function")
    return { type, function: { type: "runtime", key: "" } }
  if (type === "modelExpression") return { type, expression: "" }
  return { type: "model", path: "" }
}

function nextId(prefix: string, ids: string[]) {
  let index = 1
  while (ids.includes(`${prefix}-${index}`)) index += 1
  return `${prefix}-${index}`
}

function ConditionSourceEditor({
  title,
  value,
  onChange,
}: {
  title: string
  value: ConditionSource
  onChange: (value: ConditionSource) => void
}) {
  return (
    <div className="condition-source">
      <FieldLabel title={title}>
        <select
          value={value.type}
          onChange={(event) =>
            onChange(
              defaultConditionSource(
                event.target.value as ConditionSource["type"]
              )
            )
          }
        >
          <option value="element">Другой элемент</option>
          <option value="runtime">Runtime</option>
          <option value="model">Свойство модели</option>
          <option value="function">Функция</option>
          <option value="modelExpression">Выражение модели</option>
        </select>
      </FieldLabel>
      {value.type === "element" && (
        <FieldLabel title="ID элемента">
          <input
            value={value.elementId}
            onChange={(event) =>
              onChange({ type: "element", elementId: event.target.value })
            }
          />
        </FieldLabel>
      )}
      {value.type === "runtime" && (
        <FieldLabel title="Ключ runtime">
          <input
            value={value.key}
            onChange={(event) =>
              onChange({ type: "runtime", key: event.target.value })
            }
          />
        </FieldLabel>
      )}
      {value.type === "model" && (
        <FieldLabel title="Путь модели">
          <input
            value={value.path}
            onChange={(event) =>
              onChange({ type: "model", path: event.target.value })
            }
          />
        </FieldLabel>
      )}
      {value.type === "modelExpression" && (
        <FieldLabel title="Сочетание значений модели">
          <input
            value={value.expression}
            onChange={(event) =>
              onChange({
                type: "modelExpression",
                expression: event.target.value,
              })
            }
          />
        </FieldLabel>
      )}
      {value.type === "function" && (
        <FunctionField
          title="Функция"
          value={value.function}
          onChange={(fn) => onChange({ type: "function", function: fn })}
        />
      )}
    </div>
  )
}

const unaryOperators: NonNullable<Condition["operator"]>[] = [
  "truthy",
  "falsy",
  "empty",
  "notEmpty",
]

function ConditionExpressionEditor({
  value,
  onChange,
  onRemove,
  depth = 0,
}: {
  value: ConditionExpression
  onChange: (value: ConditionExpression) => void
  onRemove?: () => void
  depth?: number
}) {
  if ("conditions" in value) {
    return (
      <div className="condition-group">
        <div className="condition-group-heading">
          <select
            value={value.combinator}
            onChange={(event) =>
              onChange({
                ...value,
                combinator: event.target.value as ConditionGroup["combinator"],
              })
            }
          >
            <option>AND</option>
            <option>OR</option>
          </select>
          {onRemove && (
            <button
              aria-label="Удалить группу"
              onClick={onRemove}
              type="button"
            >
              ×
            </button>
          )}
        </div>
        {value.conditions.map((condition, index) => (
          <ConditionExpressionEditor
            depth={depth + 1}
            key={index}
            value={condition}
            onChange={(next) =>
              onChange({
                ...value,
                conditions: value.conditions.map((item, itemIndex) =>
                  itemIndex === index ? next : item
                ),
              })
            }
            onRemove={
              value.conditions.length > 1
                ? () =>
                    onChange({
                      ...value,
                      conditions: value.conditions.filter(
                        (_, itemIndex) => itemIndex !== index
                      ),
                    })
                : undefined
            }
          />
        ))}
        <div className="condition-actions">
          <button
            className="secondary-button"
            onClick={() =>
              onChange({
                ...value,
                conditions: [...value.conditions, defaultCondition()],
              })
            }
            type="button"
          >
            + Условие
          </button>
          <button
            className="secondary-button"
            disabled={depth >= 8}
            onClick={() =>
              onChange({
                ...value,
                conditions: [
                  ...value.conditions,
                  { combinator: "AND", conditions: [defaultCondition()] },
                ],
              })
            }
            type="button"
          >
            + Группа
          </button>
        </div>
      </div>
    )
  }

  const operator = value.operator ?? "eq"
  const operand: ConditionOperand = value.operand ?? {
    type: "literal",
    value: "",
  }
  return (
    <div className="condition-row">
      <div className="condition-row-heading">
        <strong>Условие</strong>
        {onRemove && (
          <button aria-label="Удалить условие" onClick={onRemove} type="button">
            ×
          </button>
        )}
      </div>
      <ConditionSourceEditor
        title="Источник условия"
        value={value.source}
        onChange={(source) => onChange({ ...value, source })}
      />
      <FieldLabel title="Оператор">
        <select
          value={operator}
          onChange={(event) => {
            const nextOperator = event.target.value as NonNullable<
              Condition["operator"]
            >
            const next = { ...value, operator: nextOperator }
            if (unaryOperators.includes(nextOperator)) delete next.operand
            else if (!next.operand)
              next.operand = { type: "literal", value: "" }
            onChange(next)
          }}
        >
          {[
            "truthy",
            "falsy",
            "eq",
            "neq",
            "gt",
            "gte",
            "lt",
            "lte",
            "includes",
            "empty",
            "notEmpty",
          ].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </FieldLabel>
      {!unaryOperators.includes(operator) && (
        <>
          <FieldLabel title="Тип правого операнда">
            <select
              value={operand.type}
              onChange={(event) =>
                onChange({
                  ...value,
                  operand:
                    event.target.value === "source"
                      ? { type: "source", source: defaultConditionSource() }
                      : { type: "literal", value: "" },
                })
              }
            >
              <option value="literal">Значение</option>
              <option value="source">Динамический источник</option>
            </select>
          </FieldLabel>
          {operand.type === "literal" ? (
            <FieldLabel title="Правый операнд">
              <input
                value={String(operand.value ?? "")}
                onChange={(event) =>
                  onChange({
                    ...value,
                    operand: { type: "literal", value: event.target.value },
                  })
                }
              />
            </FieldLabel>
          ) : (
            <ConditionSourceEditor
              title="Источник правого операнда"
              value={operand.source}
              onChange={(source) =>
                onChange({ ...value, operand: { type: "source", source } })
              }
            />
          )}
          <div className="two-columns">
            <FieldLabel title="Тип источника">
              <select
                value={value.cast?.source ?? "none"}
                onChange={(event) =>
                  onChange({
                    ...value,
                    cast: {
                      source: event.target.value as ValueCast,
                      operand: value.cast?.operand ?? "none",
                    },
                  })
                }
              >
                {castOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </FieldLabel>
            <FieldLabel title="Тип операнда">
              <select
                value={value.cast?.operand ?? "none"}
                onChange={(event) =>
                  onChange({
                    ...value,
                    cast: {
                      source: value.cast?.source ?? "none",
                      operand: event.target.value as ValueCast,
                    },
                  })
                }
              >
                {castOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </FieldLabel>
          </div>
        </>
      )}
    </div>
  )
}

function DependenciesEditor({
  value = [],
  onChange,
}: {
  value?: ElementDependency[]
  onChange: (value: ElementDependency[] | undefined) => void
}) {
  const update = (index: number, next: ElementDependency) =>
    onChange(
      value.map((item, itemIndex) => (itemIndex === index ? next : item))
    )
  return (
    <div className="structured-editor">
      {value.map((dependency, index) => {
        return (
          <div className="structured-card" key={dependency.id}>
            <div className="structured-card-heading">
              <strong>Зависимость {index + 1}</strong>
              <button
                onClick={() =>
                  onChange(
                    value.length === 1
                      ? undefined
                      : value.filter((_, itemIndex) => itemIndex !== index)
                  )
                }
                type="button"
              >
                ×
              </button>
            </div>
            <FieldLabel title="ID зависимости">
              <input
                value={dependency.id}
                onChange={(event) =>
                  update(index, { ...dependency, id: event.target.value })
                }
              />
            </FieldLabel>
            <FieldLabel title="Свойство">
              <select
                value={dependency.property}
                onChange={(event) =>
                  update(index, {
                    ...dependency,
                    property: event.target
                      .value as ElementDependency["property"],
                  })
                }
              >
                {["visible", "enabled", "disabled", "readOnly", "loading"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </FieldLabel>
            <label className="check-row">
              <input
                checked={dependency.value}
                onChange={(event) =>
                  update(index, { ...dependency, value: event.target.checked })
                }
                type="checkbox"
              />
              Значение свойства
            </label>
            <ConditionExpressionEditor
              value={dependency.condition}
              onChange={(condition) =>
                update(index, { ...dependency, condition })
              }
            />
            {!("conditions" in dependency.condition) && (
              <button
                className="secondary-button"
                onClick={() =>
                  update(index, {
                    ...dependency,
                    condition: {
                      combinator: "AND",
                      conditions: [dependency.condition, defaultCondition()],
                    },
                  })
                }
                type="button"
              >
                Добавить группу условий
              </button>
            )}
          </div>
        )
      })}
      <button
        className="secondary-button"
        onClick={() =>
          onChange([
            ...value,
            {
              id: nextId(
                "dependency",
                value.map((item) => item.id)
              ),
              property: "visible",
              value: true,
              condition: defaultCondition(),
            },
          ])
        }
        type="button"
      >
        Добавить зависимость
      </button>
    </div>
  )
}

function ValidationEditor({
  value = [],
  onChange,
}: {
  value?: ValidationRule[]
  onChange: (value: ValidationRule[] | undefined) => void
}) {
  const update = (index: number, next: ValidationRule) =>
    onChange(
      value.map((item, itemIndex) => (itemIndex === index ? next : item))
    )
  const move = (index: number, offset: number) => {
    const target = index + offset
    if (target < 0 || target >= value.length) return
    const next = [...value]
    ;[next[index], next[target]] = [next[target], next[index]]
    onChange(next)
  }
  return (
    <div className="structured-editor">
      {value.map((rule, index) => (
        <div className="structured-card" key={rule.id}>
          <div className="structured-card-heading">
            <strong>{rule.name}</strong>
            <div className="structured-card-controls">
              <button
                aria-label="Переместить выше"
                disabled={index === 0}
                onClick={() => move(index, -1)}
                type="button"
              >
                ↑
              </button>
              <button
                aria-label="Переместить ниже"
                disabled={index === value.length - 1}
                onClick={() => move(index, 1)}
                type="button"
              >
                ↓
              </button>
              <button
                aria-label="Удалить правило"
                onClick={() =>
                  onChange(
                    value.length === 1
                      ? undefined
                      : value.filter((_, itemIndex) => itemIndex !== index)
                  )
                }
                type="button"
              >
                ×
              </button>
            </div>
          </div>
          <FieldLabel title="ID правила">
            <input
              value={rule.id}
              onChange={(event) =>
                update(index, { ...rule, id: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Тип">
            <select
              value={rule.type}
              onChange={(event) => {
                const type = event.target.value as ValidationType
                update(index, {
                  id: rule.id,
                  name: type,
                  type,
                  enabled: rule.enabled ?? true,
                  message: rule.message,
                })
              }}
            >
              {rule.type === "Legacy" && <option value="Legacy">Legacy</option>}
              {validationTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </FieldLabel>
          <label className="check-row">
            <input
              checked={rule.enabled ?? true}
              onChange={(event) =>
                update(index, { ...rule, enabled: event.target.checked })
              }
              type="checkbox"
            />
            Включена
          </label>
          <FieldLabel title="Сообщение" optional>
            <input
              value={rule.message ?? ""}
              onChange={(event) =>
                update(index, { ...rule, message: event.target.value })
              }
            />
          </FieldLabel>
          {rule.type === "Legacy" && (
            <small>Исходное правило сохранено; параметры доступны во вкладке JSON.</small>
          )}
          {["Range", "RangeEnum"].includes(rule.type) && (
            <>
              <div className="two-columns">
                <FieldLabel title="От">
                  <input
                    value={
                      rule.config?.kind === "range" ||
                      rule.config?.kind === "rangeEnum"
                        ? String(rule.config.from ?? "")
                        : ""
                    }
                    onChange={(event) =>
                      update(index, {
                        ...rule,
                        config: {
                          kind:
                            rule.type === "RangeEnum" ? "rangeEnum" : "range",
                          from: event.target.value,
                          ...(rule.config?.kind === "range" ||
                          rule.config?.kind === "rangeEnum"
                            ? { to: rule.config.to }
                            : {}),
                          ...(rule.type === "RangeEnum"
                            ? {
                                allowEmpty:
                                  rule.config?.kind === "rangeEnum"
                                    ? rule.config.allowEmpty
                                    : false,
                              }
                            : {}),
                        } as ValidationRule["config"],
                      })
                    }
                  />
                </FieldLabel>
                <FieldLabel title="До">
                  <input
                    value={
                      rule.config?.kind === "range" ||
                      rule.config?.kind === "rangeEnum"
                        ? String(rule.config.to ?? "")
                        : ""
                    }
                    onChange={(event) =>
                      update(index, {
                        ...rule,
                        config: {
                          kind:
                            rule.type === "RangeEnum" ? "rangeEnum" : "range",
                          to: event.target.value,
                          ...(rule.config?.kind === "range" ||
                          rule.config?.kind === "rangeEnum"
                            ? { from: rule.config.from }
                            : {}),
                          ...(rule.type === "RangeEnum"
                            ? {
                                allowEmpty:
                                  rule.config?.kind === "rangeEnum"
                                    ? rule.config.allowEmpty
                                    : false,
                              }
                            : {}),
                        } as ValidationRule["config"],
                      })
                    }
                  />
                </FieldLabel>
              </div>
              {rule.type === "RangeEnum" && (
                <label className="check-row">
                  <input
                    checked={
                      rule.config?.kind === "rangeEnum"
                        ? rule.config.allowEmpty
                        : false
                    }
                    onChange={(event) =>
                      update(index, {
                        ...rule,
                        config: {
                          kind: "rangeEnum",
                          from:
                            rule.config?.kind === "rangeEnum"
                              ? rule.config.from
                              : undefined,
                          to:
                            rule.config?.kind === "rangeEnum"
                              ? rule.config.to
                              : undefined,
                          allowEmpty: event.target.checked,
                        },
                      })
                    }
                    type="checkbox"
                  />
                  Допускать пустые значения
                </label>
              )}
              {(rule.config?.kind === "range" ||
                rule.config?.kind === "rangeEnum") &&
                Number(rule.config.from) > Number(rule.config.to) &&
                rule.config.from !== "" &&
                rule.config.to !== "" && (
                  <div className="field-error">
                    Значение «От» не должно превышать «До»
                  </div>
                )}
            </>
          )}
          {rule.type === "Length" && (
            <div className="two-columns">
              <FieldLabel title="Условие">
                <select
                  value={
                    rule.config?.kind === "length" ? rule.config.operator : ">="
                  }
                  onChange={(event) =>
                    update(index, {
                      ...rule,
                      config: {
                        kind: "length",
                        operator: event.target.value as ">=",
                        value:
                          rule.config?.kind === "length"
                            ? rule.config.value
                            : 0,
                      },
                    })
                  }
                >
                  {[">", ">=", "<=", "<", "="].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </FieldLabel>
              <FieldLabel title="Число">
                <input
                  min="0"
                  step="1"
                  type="number"
                  value={rule.config?.kind === "length" ? rule.config.value : 0}
                  onChange={(event) =>
                    update(index, {
                      ...rule,
                      config: {
                        kind: "length",
                        operator:
                          rule.config?.kind === "length"
                            ? rule.config.operator
                            : ">=",
                        value: Math.max(
                          0,
                          Math.trunc(Number(event.target.value) || 0)
                        ),
                      },
                    })
                  }
                />
              </FieldLabel>
            </div>
          )}
          {rule.type === "Custom function" && (
            <FunctionField
              title="Функция"
              value={
                rule.config?.kind === "customFunction"
                  ? rule.config.function
                  : undefined
              }
              onChange={(fn) =>
                update(index, {
                  ...rule,
                  config: { kind: "customFunction", function: fn },
                })
              }
            />
          )}
          {rule.type === "Equality" && (
            <FieldLabel title="Равно">
              <input
                value={
                  rule.config?.kind === "equality"
                    ? (rule.config.equals ?? "")
                    : ""
                }
                onChange={(event) =>
                  update(index, {
                    ...rule,
                    config: { kind: "equality", equals: event.target.value },
                  })
                }
              />
            </FieldLabel>
          )}
          {rule.type === "Not equal" && (
            <FieldLabel title="Не равно">
              <input
                value={
                  rule.config?.kind === "notEqual"
                    ? (rule.config.notEquals ?? "")
                    : ""
                }
                onChange={(event) =>
                  update(index, {
                    ...rule,
                    config: { kind: "notEqual", notEquals: event.target.value },
                  })
                }
              />
            </FieldLabel>
          )}
        </div>
      ))}
      <button
        className="secondary-button"
        onClick={() => {
          const type: ValidationType = "Not empty"
          onChange([
            ...value,
            {
              id: nextId(
                "validation",
                value.map((item) => item.id)
              ),
              name: type,
              type,
              enabled: true,
            },
          ])
        }}
        type="button"
      >
        Добавить правило
      </button>
    </div>
  )
}

function FormInspector({
  form,
  availableForms = [],
  diagnostics,
  onSave,
}: {
  form: FormSchema
  availableForms?: FormSchema[]
  diagnostics: Diagnostic[]
  onSave: (form: FormSchema) => void
}) {
  const [draft, setDraft] = useState<FormSchema>(() => structuredClone(form))
  const hasUnsavedChanges = JSON.stringify(draft) !== JSON.stringify(form)
  const settings = draft.settings ?? {}
  const update = (patch: Partial<FormSettings>) =>
    setDraft((current) => ({
      ...current,
      settings: { ...current.settings, ...patch },
    }))
  const dataSource = settings.dataSource ?? { type: "manual" }
  const dataSave = settings.dataSave ?? { type: "manual" }
  return (
    <>
      <div className="inspector-title">
        <div>
          <span className="eyebrow">Настройки</span>
          <h2>Форма</h2>
        </div>
        <Braces size={18} />
      </div>
      {diagnostics.length > 0 && (
        <div className="inspector-diagnostics">
          {diagnostics.map((item, index) => (
            <div
              className={`dependency-diagnostic ${item.severity}`}
              key={`${item.code}:${item.path}:${index}`}
            >
              <AlertTriangle size={14} />
              <span>{item.message}</span>
            </div>
          ))}
        </div>
      )}
      <div className="inspector-scroll">
        <InspectorGroup title="Основные настройки" open>
          <FieldLabel title="Form ID">
            <input
              value={draft.id}
              onChange={(event) =>
                setDraft({ ...draft, id: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Help topic ID" optional>
            <input
              value={settings.helpId ?? ""}
              onChange={(event) => update({ helpId: event.target.value })}
            />
          </FieldLabel>
          <FieldLabel title="Form file name">
            <input
              value={draft.name}
              onChange={(event) =>
                setDraft({ ...draft, name: event.target.value })
              }
            />
          </FieldLabel>
          <FieldLabel title="Form title">
            <input
              value={settings.title ?? ""}
              onChange={(event) => update({ title: event.target.value })}
            />
          </FieldLabel>
          <FieldLabel title="Заголовок формы [mode=add]">
            <input
              value={settings.modeAddTitle ?? ""}
              onChange={(event) => update({ modeAddTitle: event.target.value })}
            />
          </FieldLabel>
          <FieldLabel title="Заголовок формы [mode=edit]">
            <input
              value={settings.modeEditTitle ?? ""}
              onChange={(event) =>
                update({ modeEditTitle: event.target.value })
              }
            />
          </FieldLabel>
          <div className="checkbox-grid">
            <label>
              <input
                checked={settings.showInNav ?? false}
                onChange={(event) =>
                  update({ showInNav: event.target.checked })
                }
                type="checkbox"
              />
              Отображать в навигации
            </label>
            <label>
              <input
                checked={settings.rootForm ?? false}
                onChange={(event) => update({ rootForm: event.target.checked })}
                type="checkbox"
              />
              Root форма
            </label>
          </div>
          <label className="check-row">
            <input
              checked={settings.ignoreValidationOnDomainSave ?? false}
              onChange={(event) =>
                update({ ignoreValidationOnDomainSave: event.target.checked })
              }
              type="checkbox"
            />
            Игнорировать валидацию при сохранении домена
          </label>
          <FieldLabel title="Object type" optional>
            <input
              value={settings.objectType ?? ""}
              onChange={(event) => update({ objectType: event.target.value })}
            />
          </FieldLabel>
          <FieldLabel title="Domain">
            <input
              value={settings.domain ?? ""}
              onChange={(event) => update({ domain: event.target.value })}
            />
          </FieldLabel>
          <FieldLabel title="Тип билда">
            <select
              value={settings.buildType ?? "any"}
              onChange={(event) =>
                update({
                  buildType: event.target.value as FormSettings["buildType"],
                })
              }
            >
              <option value="any">Любой</option>
              <option value="A">Только A</option>
              <option value="typeB">Только B</option>
            </select>
          </FieldLabel>
          <FieldLabel title="Author">
            <input
              value={settings.author ?? ""}
              onChange={(event) => update({ author: event.target.value })}
            />
          </FieldLabel>
        </InspectorGroup>
        <InspectorGroup title="Данные">
          <FieldLabel title="Data source">
            <select
              value={dataSource.type}
              onChange={(event) => {
                const type = event.target.value
                update({
                  dataSource:
                    type === "server"
                      ? {
                          type,
                          server: {
                            methodName: "getFormModel",
                            parametersSource: { type: "object", object: "" },
                          },
                        }
                      : type === "handler"
                        ? { type, function: { type: "runtime", key: "" } }
                        : { type: "manual" },
                })
              }}
            >
              <option value="manual">Данные выставляются вручную</option>
              <option value="handler">Функция</option>
              <option value="server">Серверный метод</option>
            </select>
          </FieldLabel>
          {dataSource.type === "handler" && (
            <FunctionField
              onChange={(fn) =>
                update({ dataSource: { type: "handler", function: fn } })
              }
              title="Функция"
              value={dataSource.function}
            />
          )}
          {dataSource.type === "server" && (
            <ServerFields
              onChange={(server) =>
                update({ dataSource: { type: "server", server } })
              }
              value={dataSource.server}
            />
          )}
          <FieldLabel title="Data save action">
            <select
              value={dataSave.type}
              onChange={(event) =>
                update({
                  dataSave:
                    event.target.value === "server"
                      ? {
                          type: "server",
                          server: {
                            methodName: "setFormModel",
                            parametersSource: { type: "object", object: "" },
                          },
                        }
                      : event.target.value === "handler"
                        ? { type: "handler", function: { type: "runtime", key: "" } }
                        : { type: "manual" },
                })
              }
            >
              <option value="manual">Данные выставляются вручную</option>
              <option value="handler">Функция</option>
              <option value="server">Серверный метод</option>
            </select>
          </FieldLabel>
          {dataSave.type === "handler" && (
            <FunctionField
              onChange={(fn) => update({ dataSave: { type: "handler", function: fn } })}
              title="Функция сохранения"
              value={dataSave.function}
            />
          )}
          {dataSave.type === "server" && (
            <ServerFields
              onChange={(server) =>
                update({ dataSave: { type: "server", server } })
              }
              value={dataSave.server}
            />
          )}
          <label className="check-row">
            <input
              checked={settings.useCachedData ?? false}
              onChange={(event) =>
                update({ useCachedData: event.target.checked })
              }
              type="checkbox"
            />
            Использовать кешированные данные
          </label>
          <label className="check-row">
            <input
              checked={settings.disableChangeTracking ?? false}
              onChange={(event) =>
                update({ disableChangeTracking: event.target.checked })
              }
              type="checkbox"
            />
            Не отслеживать изменения формы
          </label>
          <label className="check-row">
            <input
              checked={settings.isParentEntity ?? false}
              onChange={(event) =>
                update({ isParentEntity: event.target.checked })
              }
              type="checkbox"
            />
            Является родительской сущностью
          </label>
          <ToggleFunctionField
            onChange={(value) => update({ progressIndicatorFunction: value })}
            title="Использовать функцию для настройки полосы индикации"
            value={settings.progressIndicatorFunction}
          />
          <label className="check-row">
            <input
              checked={settings.keepOpenOnDomainSave ?? false}
              onChange={(event) =>
                update({ keepOpenOnDomainSave: event.target.checked })
              }
              type="checkbox"
            />
            Не закрывать форму при сохранении домена
          </label>
          <label className="check-row">
            <input
              checked={settings.showSaveAndCloseButton ?? false}
              onChange={(event) =>
                update({ showSaveAndCloseButton: event.target.checked })
              }
              type="checkbox"
            />
            Добавить кнопку «Сохранить и закрыть»
          </label>
        </InspectorGroup>
        <InspectorGroup title="Обработчики событий">
          <ToggleFunctionField
            onChange={(value) => update({ onInitialize: value })}
            title="При инициализации запустить функцию"
            value={settings.onInitialize}
          />
          <ToggleFunctionField
            onChange={(value) => update({ afterRender: value })}
            title="Invoke handler onRender"
            value={settings.afterRender}
          />
          <ToggleFunctionField
            onChange={(value) => update({ onClose: value })}
            title="Invoke handler onClose"
            value={settings.onClose}
          />
        </InspectorGroup>
        <InspectorGroup title="Внешний вид">
          <FieldLabel title="View type">
            <select
              value={settings.displayType ?? "default"}
              onChange={(event) =>
                update({
                  displayType: event.target
                    .value as FormSettings["displayType"],
                })
              }
            >
              <option value="default">Default</option>
              <option value="details">Details</option>
              <option value="flyout">Flyout</option>
              <option value="modal">Modal</option>
            </select>
          </FieldLabel>
          <FieldLabel title="Parent form" optional>
            <select
              value={settings.parentFormId ?? ""}
              onChange={(event) =>
                update({ parentFormId: event.target.value || null })
              }
            >
              <option value="">Не выбрана</option>
              {availableForms
                .filter((item) => item.id !== draft.id)
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.id})
                  </option>
                ))}
            </select>
          </FieldLabel>
        </InspectorGroup>
        <InspectorGroup title="Панель действий (Action bar)">
          <label className="check-row">
            <input
              checked={settings.hideActionBarOnFormChange ?? false}
              onChange={(event) =>
                update({ hideActionBarOnFormChange: event.target.checked })
              }
              type="checkbox"
            />
            Не показывать action-bar при изменении формы
          </label>
          <label className="check-row">
            <input
              checked={settings.actionBarButtons?.enabled ?? false}
              onChange={(event) =>
                update({ actionBarButtons: { enabled: event.target.checked } })
              }
              type="checkbox"
            />
            Переопределить кнопки
          </label>
          {settings.actionBarButtons?.enabled && (
            <div className="nested-settings">
              <FieldLabel title="Название кнопки Ok">
                <input
                  value={settings.actionBarButtons.okButtonTitle ?? ""}
                  onChange={(event) =>
                    update({
                      actionBarButtons: {
                        ...settings.actionBarButtons!,
                        okButtonTitle: event.target.value,
                      },
                    })
                  }
                />
              </FieldLabel>
              <FieldLabel title="Название кнопки Save">
                <input
                  value={settings.actionBarButtons.saveButtonTitle ?? ""}
                  onChange={(event) =>
                    update({
                      actionBarButtons: {
                        ...settings.actionBarButtons!,
                        saveButtonTitle: event.target.value,
                      },
                    })
                  }
                />
              </FieldLabel>
              <FieldLabel title="Название кнопки Cancel">
                <input
                  value={settings.actionBarButtons.cancelButtonTitle ?? ""}
                  onChange={(event) =>
                    update({
                      actionBarButtons: {
                        ...settings.actionBarButtons!,
                        cancelButtonTitle: event.target.value,
                      },
                    })
                  }
                />
              </FieldLabel>
            </div>
          )}
        </InspectorGroup>
      </div>
      {hasUnsavedChanges && (
        <div className="inspector-actions">
          <button
            className="secondary-button"
            onClick={() => setDraft(structuredClone(form))}
            type="button"
          >
            <RotateCcw size={15} />
            Отмена
          </button>
          <button
            className="primary-button"
            disabled={!draft.id.trim() || !draft.name.trim()}
            onClick={() => onSave(draft)}
            type="button"
          >
            <Check size={15} />
            Сохранить
          </button>
        </div>
      )}
    </>
  )
}

export function Inspector({
  form,
  availableForms,
  selectedNode,
  registry,
  diagnostics,
  onCancelElement,
  onSaveElement,
  onSaveForm,
}: {
  form: FormSchema
  availableForms: FormSchema[]
  selectedNode?: SchemaNode
  registry: ComponentRegistry
  diagnostics: Diagnostic[]
  onCancelElement: () => void
  onSaveElement: (node: SchemaNode) => void
  onSaveForm: (form: FormSchema) => void
}) {
  const component = selectedNode
    ? registry.components.find(
        (candidate) => candidate.type === selectedNode.type
      )
    : undefined
  return (
    <aside className="editor-panel inspector-panel">
      {selectedNode ? (
        <ElementInspector
          key={`${selectedNode.id}:${JSON.stringify(selectedNode)}`}
          component={component}
          diagnostics={diagnostics.filter(
            (item) => item.elementId === selectedNode.id
          )}
          form={form}
          node={selectedNode}
          registry={registry}
          onCancel={onCancelElement}
          onSave={onSaveElement}
        />
      ) : (
        <FormInspector
          key={`${form.id}:${JSON.stringify(form)}`}
          availableForms={availableForms}
          diagnostics={diagnostics.filter((item) => !item.elementId)}
          form={form}
          onSave={onSaveForm}
        />
      )}
      {!component && selectedNode && (
        <div className="inspector-warning">
          <AlertTriangle size={15} />
          Компонент отсутствует в registry
        </div>
      )}
    </aside>
  )
}
