import {
  AlertCircle,
  Box,
  ChevronRight,
  GripVertical,
  Layers3,
  paletteIcons,
  Trash2,
} from "../../components/icons.tsx"
import { lazy, Suspense, useMemo, useState } from "react"
import type { ComponentRegistry } from "../component-registry/types.ts"
import type { Diagnostic } from "../schema-model/diagnostics.ts"
import type { FormSchema, SchemaNode } from "../schema-model/form-schema.ts"
import { validateFormSchema } from "../schema-validator/form-validator.ts"
import { validateFormSemantics } from "../semantic-validator/semantic-validator.ts"
import { normalizeFormSchema } from "../schema-builder/serialization.ts"
import {
  FORM_BUILDER_DRAG_TYPE,
  readDragPayload,
  writeDragPayload,
} from "../form-controls/dnd.ts"

const FormPreview = lazy(() =>
  import("./FormPreview.tsx").then((module) => ({
    default: module.FormPreview,
  }))
)

interface DropTarget {
  parentId: string | null
  index?: number
}

interface SchemaViewProps {
  form: FormSchema
  registry: ComponentRegistry
  selectedElementId: string | null
  diagnostics: Diagnostic[]
  onSelect: (elementId: string | null) => void
  onDelete: (elementId: string) => void
  onDrop: (
    payload: ReturnType<typeof readDragPayload>,
    target: DropTarget
  ) => void
  onChangeForm: (form: FormSchema) => Promise<void>
}

function requiredPropertyName(diagnostic: Diagnostic) {
  const quoted = diagnostic.message.match(
    /(?:обязательное поле|обязательное свойство)[^«]*«([^»]+)»/i
  )
  if (quoted?.[1]) return quoted[1]
  if (!/обязательн(?:ое|ого) (?:свойство|поле)/i.test(diagnostic.message))
    return null
  const messagePath = diagnostic.message.split(":", 1)[0]
  const segments = messagePath.split("/").filter(Boolean)
  return segments.at(-1) ?? null
}

function diagnosticTitle(diagnostic: Diagnostic) {
  const propertyName = requiredPropertyName(diagnostic)
  return propertyName
    ? `Обязательное свойство «${propertyName}» не заполнено`
    : diagnostic.message
}

function JsonView({
  form,
  registry,
  onChange,
}: {
  form: FormSchema
  registry: ComponentRegistry
  onChange: (form: FormSchema) => Promise<void>
}) {
  const serialized = useMemo(() => JSON.stringify(form, null, 2), [form])
  const [text, setText] = useState(serialized)
  const [errors, setErrors] = useState<string[]>([])
  const [applying, setApplying] = useState(false)

  const apply = async () => {
    try {
      const parsed: unknown = JSON.parse(text)
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
        throw new Error("Корень должен быть объектом")
      const candidate = parsed as Partial<FormSchema>
      if (candidate.schemaVersion !== 1)
        throw new Error("schemaVersion должен быть равен 1")
      if (typeof candidate.id !== "string" || !candidate.id.trim())
        throw new Error("id обязателен")
      if (typeof candidate.name !== "string" || !candidate.name.trim())
        throw new Error("name обязателен")
      if (!Array.isArray(candidate.elements))
        throw new Error("elements должен быть массивом")
      const schemaDiagnostics = validateFormSchema(candidate)
      if (schemaDiagnostics.length) {
        setErrors(schemaDiagnostics.map((item) => item.message))
        return
      }
      const normalized = normalizeFormSchema(candidate as FormSchema, registry)
      const diagnostics = validateFormSemantics(normalized, registry).filter(
        (item) => item.blocking
      )
      if (diagnostics.length) {
        setErrors(diagnostics.map((item) => item.message))
        return
      }
      setApplying(true)
      await onChange(normalized)
      setErrors([])
      setText(JSON.stringify(normalized, null, 2))
    } catch (caught) {
      setErrors([
        caught instanceof Error ? caught.message : "Некорректный JSON",
      ])
    } finally {
      setApplying(false)
    }
  }

  return (
    <div className="json-editor" onClick={(event) => event.stopPropagation()}>
      <div className="json-editor-toolbar">
        <span>Редактирование схемы формы</span>
        <div>
          <button
            className="secondary-button"
            onClick={() => {
              try {
                setText(JSON.stringify(JSON.parse(text), null, 2))
                setErrors([])
              } catch {
                setErrors(["Некорректный JSON"])
              }
            }}
            type="button"
          >
            Форматировать
          </button>
          <button
            className="primary-button"
            disabled={applying}
            onClick={() => void apply()}
            type="button"
          >
            {applying ? "Сохранение…" : "Применить"}
          </button>
        </div>
      </div>
      {errors.length > 0 && (
        <div className="json-editor-errors" role="alert">
          <strong>Исправьте проблемы перед сохранением</strong>
          <ul>
            {errors.map((message, index) => (
              <li key={`${message}-${index}`}>{message}</li>
            ))}
          </ul>
        </div>
      )}
      <textarea
        aria-label="JSON схемы формы"
        spellCheck={false}
        value={text}
        onChange={(event) => {
          setText(event.target.value)
          setErrors([])
        }}
        onKeyDown={(event) => {
          if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
            event.preventDefault()
            void apply()
          }
        }}
      />
      <small>
        Применить: Ctrl/⌘ + Enter. Изменение попадает в общую историю undo/redo.
      </small>
    </div>
  )
}

function DropZone({
  target,
  onDrop,
}: {
  target: DropTarget
  onDrop: SchemaViewProps["onDrop"]
}) {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`drop-zone ${active ? "is-active" : ""}`}
      onDragEnter={(event) => {
        event.preventDefault()
        setActive(true)
      }}
      onDragLeave={() => setActive(false)}
      onDragOver={(event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
      }}
      onDrop={(event) => {
        event.preventDefault()
        event.stopPropagation()
        setActive(false)
        onDrop(readDragPayload(event), target)
      }}
    >
      <span>Переместить сюда</span>
    </div>
  )
}

function TreeNode({
  node,
  index,
  parentId,
  depth,
  ...props
}: {
  node: SchemaNode
  index: number
  parentId: string | null
  depth: number
} & Omit<SchemaViewProps, "form">) {
  const component = props.registry.components.find(
    (candidate) => candidate.type === node.type
  )
  const nodeDiagnostics = props.diagnostics.filter(
    (diagnostic) => diagnostic.elementId === node.id
  )
  const hasError = nodeDiagnostics.some(
    (diagnostic) => diagnostic.severity === "error"
  )
  const summaryProp = component?.preview?.labelProp
  const summary =
    summaryProp && typeof node.props[summaryProp] === "string"
      ? node.props[summaryProp]
      : undefined
  const NodeIcon = component?.icon
    ? (paletteIcons[component.icon] ?? Box)
    : component?.acceptsChildren
      ? Layers3
      : Box
  return (
    <>
      <DropZone target={{ parentId, index }} onDrop={props.onDrop} />
      <div className={`tree-node-wrap depth-${Math.min(depth, 6)}`}>
        <article
          className={`tree-node ${props.selectedElementId === node.id ? "is-selected" : ""} ${hasError ? "has-error" : ""}`}
          data-element-id={node.id}
          draggable
          onClick={(event) => {
            event.stopPropagation()
            props.onSelect(node.id)
          }}
          onDragStart={(event) => {
            event.stopPropagation()
            writeDragPayload(event, { kind: "element", elementId: node.id })
          }}
        >
          <GripVertical className="drag-handle" size={15} />
          <span className="node-icon">
            <NodeIcon size={16} />
          </span>
          <span className="node-copy">
            <strong>{component?.title ?? node.type}</strong>
            <small>
              {node.id}
              {summary ? ` · ${summary}` : ""}
            </small>
          </span>
          {nodeDiagnostics.length > 0 && (
            <details
              className="node-diagnostics"
              onClick={(event) => event.stopPropagation()}
            >
              <summary
                aria-label={`Показать ошибки компонента ${node.id}`}
                className="node-error"
                title="Показать ошибки"
              >
                <AlertCircle size={15} />
              </summary>
              <div className="node-diagnostics-popover">
                <strong>Что нужно исправить</strong>
                {nodeDiagnostics.map((diagnostic, diagnosticIndex) => (
                  <div className="diagnostic-item" key={`${diagnostic.code}-${diagnosticIndex}`}>
                    <span>{diagnosticTitle(diagnostic)}</span>
                    {diagnostic.path && <code>{diagnostic.path}</code>}
                  </div>
                ))}
              </div>
            </details>
          )}
          {node.children?.length ? (
            <span className="children-count">{node.children.length}</span>
          ) : null}
          <button
            className="icon-button subtle"
            onClick={(event) => {
              event.stopPropagation()
              props.onDelete(node.id)
            }}
            title="Удалить"
            type="button"
          >
            <Trash2 size={14} />
          </button>
          <ChevronRight className="node-chevron" size={15} />
        </article>
        {component?.acceptsChildren && (
          <div className="tree-children">
            {node.children?.map((child, childIndex) => (
              <TreeNode
                key={child.id}
                node={child}
                index={childIndex}
                parentId={node.id}
                depth={depth + 1}
                {...props}
              />
            ))}
            <DropZone target={{ parentId: node.id }} onDrop={props.onDrop} />
          </div>
        )}
      </div>
    </>
  )
}

export function SchemaView(props: SchemaViewProps) {
  const blocking = useMemo(
    () => props.diagnostics.filter((item) => item.blocking).length,
    [props.diagnostics]
  )
  const [mode, setMode] = useState<"schema" | "json" | "preview">("schema")
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false)
  const blockingDiagnostics = useMemo(
    () => props.diagnostics.filter((item) => item.blocking),
    [props.diagnostics]
  )

  const openDiagnostic = (diagnostic: Diagnostic) => {
    setMode("schema")
    setDiagnosticsOpen(false)
    props.onSelect(diagnostic.elementId ?? null)
    if (diagnostic.elementId)
      requestAnimationFrame(() =>
        document
          .querySelector(`[data-element-id="${CSS.escape(diagnostic.elementId!)}"]`)
          ?.scrollIntoView({ block: "center", behavior: "smooth" })
      )
  }
  return (
    <main
      className="schema-canvas"
      onClick={() => props.onSelect(null)}
      onDragOver={(event) => {
        if (event.dataTransfer.types.includes(FORM_BUILDER_DRAG_TYPE))
          event.preventDefault()
      }}
    >
      <div className="canvas-toolbar">
        <div>
          <span className="eyebrow">Структура</span>
          <h1>{props.form.name}</h1>
        </div>
        <div className="canvas-toolbar-actions">
          <div className="view-switch" aria-label="Режим отображения">
            <button
              className={mode === "schema" ? "is-active" : ""}
              onClick={(event) => {
                event.stopPropagation()
                setMode("schema")
              }}
              type="button"
            >
              Схема
            </button>
            <button
              className={mode === "json" ? "is-active" : ""}
              onClick={(event) => {
                event.stopPropagation()
                setMode("json")
              }}
              type="button"
            >
              JSON
            </button>
            <button
              className={mode === "preview" ? "is-active" : ""}
              onClick={(event) => {
                event.stopPropagation()
                setMode("preview")
              }}
              type="button"
            >
              Превью
            </button>
          </div>
          <button
            aria-expanded={diagnosticsOpen}
            className={`validation-pill ${blocking ? "has-errors" : ""}`}
            disabled={!blocking}
            onClick={(event) => {
              event.stopPropagation()
              setDiagnosticsOpen((open) => !open)
            }}
            type="button"
          >
            {blocking ? (
              <AlertCircle size={14} />
            ) : (
              <span className="status-dot" />
            )}
            {blocking ? `${blocking} ошибок` : "Схема валидна"}
          </button>
          {diagnosticsOpen && blockingDiagnostics.length > 0 && (
            <div
              className="diagnostics-panel"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="diagnostics-panel-heading">
                <strong>Ошибки формы</strong>
                <span>{blockingDiagnostics.length}</span>
              </div>
              <div className="diagnostics-list">
                {blockingDiagnostics.map((diagnostic, diagnosticIndex) => (
                  <button
                    className="diagnostic-list-item"
                    key={`${diagnostic.code}-${diagnostic.path}-${diagnosticIndex}`}
                    onClick={() => openDiagnostic(diagnostic)}
                    type="button"
                  >
                    <AlertCircle size={14} />
                    <span>
                      <strong>{diagnosticTitle(diagnostic)}</strong>
                      <small>
                        {diagnostic.elementId
                          ? `Компонент: ${diagnostic.elementId}`
                          : "Настройки формы"}
                      </small>
                      {diagnostic.path && <code>{diagnostic.path}</code>}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="canvas-scroll">
        {mode === "preview" ? (
          <Suspense
            fallback={<div className="preview-loading">Загрузка Preview…</div>}
          >
            <FormPreview form={props.form} />
          </Suspense>
        ) : mode === "json" ? (
          <JsonView
            key={JSON.stringify(props.form)}
            form={props.form}
            registry={props.registry}
            onChange={props.onChangeForm}
          />
        ) : (
          <div className="form-outline">
            {props.form.elements.map((node, index) => (
              <TreeNode
                key={node.id}
                node={node}
                index={index}
                parentId={null}
                depth={1}
                {...props}
              />
            ))}
            <DropZone target={{ parentId: null }} onDrop={props.onDrop} />
            {!props.form.elements.length && (
              <div className="empty-canvas">
                <Layers3 size={30} />
                <strong>Форма пока пустая</strong>
                <span>Перетащите компонент из палитры или нажмите на него</span>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
