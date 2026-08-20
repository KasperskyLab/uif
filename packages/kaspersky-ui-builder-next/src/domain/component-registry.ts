import type { Diagnostic } from "./diagnostics.ts"
import type { ElementMeta, JsonObject, JsonValue } from "./form-schema.ts"
import type {
  ComponentStatus,
  PaletteComponentMeta,
  PalettePreviewConfig,
  PropEditorOption,
  PropEditorType,
} from "./palette.ts"

export interface JsonSchemaNode {
  type?: string | string[]
  title?: string
  description?: string
  enum?: JsonValue[]
  const?: JsonValue
  default?: JsonValue
  properties?: Record<string, JsonSchemaNode>
  required?: string[]
  items?: JsonSchemaNode | JsonSchemaNode[]
  anyOf?: JsonSchemaNode[]
  oneOf?: JsonSchemaNode[]
  additionalProperties?: boolean | JsonSchemaNode
  [keyword: string]: unknown
}

export interface RegistryPropDefinition {
  name: string
  required: boolean
  typeText: string
  editor: PropEditorType
  title: string
  description?: string
  options?: PropEditorOption[]
  schema: JsonSchemaNode
}

export interface ComponentDefinition {
  type: string
  packageName: string
  packageVersion: string
  exportName: string
  exportPath: string
  propsType: string
  propsTypePath: string
  title: string
  description?: string
  keywords: string[]
  category?: string
  order?: number
  icon?: string
  status: ComponentStatus
  deprecatedMessage?: string
  acceptsChildren: boolean
  deniedChildren: string[]
  meta: PaletteComponentMeta
  defaultMeta: ElementMeta
  preview?: PalettePreviewConfig
  propsSchema: JsonSchemaNode
  props: RegistryPropDefinition[]
  defaultProps: JsonObject
}

export interface ComponentRegistry {
  schemaVersion: 1
  generatedAt: string
  paletteVersion: string
  package: {
    name: string
    version: string
  }
  categoryOrder: string[]
  components: ComponentDefinition[]
  diagnostics: Diagnostic[]
}
