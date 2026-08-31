import type { BuildType, JsonObject, JsonPrimitive } from "../schema-model/form-schema.ts"

export type ComponentStatus = "stable" | "experimental" | "deprecated"

export type PropEditorType =
  | "text"
  | "number"
  | "checkbox"
  | "select"
  | "multiselect"
  | "json"
  | "function"
  | "iconSelect"
  | "hidden"

export interface PropEditorOption {
  value: Exclude<JsonPrimitive, null>
  label: string
}

export interface PropEditorOverride {
  editor?: PropEditorType
  title?: string
  description?: string
  options?: PropEditorOption[]
}

export interface PalettePropsConfig {
  include?: string[]
  exclude?: string[]
  overrides?: Record<string, PropEditorOverride>
}

export interface PalettePreviewConfig {
  labelProp?: string
  valueProp?: string
  icon?: string
}

export type PaletteComponentMeta = JsonObject & {
  entity?: string
}

export interface PaletteComponent {
  type: string
  exportName: string
  exportPath?: string
  propsType: string
  propsTypePath?: string
  title: string
  description?: string
  keywords?: string[]
  category?: string
  order?: number
  icon?: string
  status?: ComponentStatus
  deprecatedMessage?: string
  since?: string
  until?: string
  acceptsChildren: boolean
  deniedChildren?: string[]
  defaultProps?: JsonObject
  defaultMeta?: JsonObject & { buildType: BuildType }
  preview?: PalettePreviewConfig
  props?: PalettePropsConfig
  meta?: PaletteComponentMeta
}

export interface PaletteManifest {
  schemaVersion: 1
  paletteVersion: string
  package: {
    name: string
    versionRange: string
  }
  categoryOrder?: string[]
  components: PaletteComponent[]
}
