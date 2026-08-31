export type DiagnosticSeverity = "error" | "warning" | "info"

export type DiagnosticSource =
  | "palette"
  | "component-registry"
  | "json-schema"
  | "semantic-validator"

export interface Diagnostic {
  severity: DiagnosticSeverity
  source: DiagnosticSource
  code: string
  message: string
  path?: string
  componentType?: string
  elementId?: string
  blocking: boolean
}
