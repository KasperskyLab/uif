import type { ComponentRegistry } from "./component-registry.ts"
import type {
  FormSchema,
  FormSettings,
  JsonValue,
  SchemaNode,
} from "./form-schema.ts"

export const defaultFormSettings: FormSettings = {
  showInNav: false,
  rootForm: false,
  ignoreValidationOnDomainSave: false,
  buildType: "any",
  dataSource: { type: "manual" },
  dataSave: { type: "manual" },
  useCachedData: false,
  disableChangeTracking: false,
  isParentEntity: false,
  progressIndicatorFunction: { enabled: false },
  keepOpenOnDomainSave: false,
  showSaveAndCloseButton: false,
  onInitialize: { enabled: false },
  afterRender: { enabled: false },
  onClose: { enabled: false },
  displayType: "default",
  hideActionBarOnFormChange: false,
  actionBarButtons: { enabled: false },
}

export const defaultElementState = {
  visible: true,
  disabled: false,
  readOnly: false,
  loading: false,
  invalid: false,
} as const

export const defaultElementStyle = {
  nestingLevel: "none",
  marginTop: "none",
  marginBottom: "none",
  marginRight: "none",
  labelPosition: "left",
  labelType: "default",
  controlWidth: 0,
  tooltipWidth: 0,
  cssClass: "",
} as const

function removeEmptyArrays(
  value: JsonValue,
  preserve = false
): JsonValue | undefined {
  if (Array.isArray(value)) {
    if (!value.length && !preserve) return undefined
    return value
      .map((item) => removeEmptyArrays(item))
      .filter((item): item is JsonValue => item !== undefined)
  }
  if (value && typeof value === "object") {
    const result: Record<string, JsonValue> = {}
    for (const [key, item] of Object.entries(value)) {
      const normalized = removeEmptyArrays(item, key === "elements")
      if (normalized !== undefined) result[key] = normalized
    }
    return result
  }
  return value
}

export function normalizeSchemaNode(
  node: SchemaNode,
  registry: ComponentRegistry
): SchemaNode {
  const component = registry.components.find((item) => item.type === node.type)
  const defaultMeta = component?.defaultMeta ?? { buildType: "any" as const }
  const normalized: SchemaNode = {
    ...structuredClone(node),
    props: { ...(component?.defaultProps ?? {}), ...node.props },
    meta: { ...defaultMeta, ...node.meta },
    state: { ...defaultElementState, ...node.state },
    style: { ...defaultElementStyle, ...node.style },
  }
  if (node.children?.length)
    normalized.children = node.children.map((child) =>
      normalizeSchemaNode(child, registry)
    )
  else delete normalized.children
  return normalized
}

export function normalizeFormSchema(
  form: FormSchema,
  registry: ComponentRegistry
): FormSchema {
  const materialized: FormSchema = {
    ...structuredClone(form),
    schemaVersion: 1,
    settings: { ...defaultFormSettings, ...form.settings },
    elements: form.elements.map((node) => normalizeSchemaNode(node, registry)),
  }
  return removeEmptyArrays(
    materialized as unknown as JsonValue,
    true
  ) as unknown as FormSchema
}
