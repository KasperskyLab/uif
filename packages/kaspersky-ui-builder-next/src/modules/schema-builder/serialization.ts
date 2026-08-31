import type { ComponentRegistry } from "../component-registry/types.ts"
import type {
  FormSchema,
  FormSettings,
  SchemaNode,
} from "../schema-model/form-schema.ts"

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

export function normalizeSchemaNode(
  node: SchemaNode,
  registry: ComponentRegistry
): SchemaNode {
  const component = registry.components.find((item) => item.type === node.type)
  const defaultMeta = component?.defaultMeta ?? { buildType: "any" as const }
  const normalized: SchemaNode = {
    ...structuredClone(node),
    props: structuredClone({ ...component?.defaultProps, ...node.props }),
    meta: structuredClone({ ...defaultMeta, ...node.meta }),
    state: { ...defaultElementState, ...node.state },
    style: { ...defaultElementStyle, ...node.style },
  }
  if (node.children?.length)
    normalized.children = node.children.map((child) =>
      normalizeSchemaNode(child, registry)
    )
  else delete normalized.children
  for (const field of ["validation", "dependencies"] as const) {
    if (!normalized[field]?.length) delete normalized[field]
  }
  return normalized
}

export function normalizeFormSchema(
  form: FormSchema,
  registry: ComponentRegistry
): FormSchema {
  return {
    ...structuredClone(form),
    schemaVersion: 1,
    settings: structuredClone({ ...defaultFormSettings, ...form.settings }),
    elements: form.elements.map((node) => normalizeSchemaNode(node, registry)),
  }
}
