export type JsonPrimitive = string | number | boolean | null
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[]
export interface JsonObject {
  [key: string]: JsonValue
}

export type BuildType = "any" | "A" | "typeB"
export type ValueCast = "none" | "string" | "int" | "number" | "bool" | "date"

export type FunctionReference =
  | { type: "runtime"; key: string }
  | { type: "file"; filePath: string; exportName?: string | null }

export interface ElementState {
  visible?: boolean
  disabled?: boolean
  readOnly?: boolean
  loading?: boolean
  invalid?: boolean
}

export type RightMargin =
  | "none"
  | "related"
  | "grouped"
  | "section"
  | "separated"
  | "space1"
  | "space2"
  | "space3"

export type NestingLevel = RightMargin | "checkboxWidth" | "toggleWidth" | "labelWidth"
export type VerticalMargin = RightMargin | "negative1" | "negative2" | "negative3"

export interface ElementStyle {
  nestingLevel?: NestingLevel
  marginBottom?: VerticalMargin
  marginTop?: VerticalMargin
  marginRight?: RightMargin
  labelPosition?: "left" | "top" | "right"
  labelType?: "default" | "full" | "stretch"
  controlWidth?: number
  tooltipWidth?: number
  cssClass?: string | null
}

export interface ElementMeta extends JsonObject {
  buildType: BuildType
}

export type ValueSource =
  | { type: "simpleValue"; value: string | null; cast: ValueCast }
  | { type: "fileFunction"; function: Extract<FunctionReference, { type: "file" }> }
  | {
      type: "functionHandler"
      getter: FunctionReference
      initializeOnly: boolean
      setter: FunctionReference
    }
  | {
      type: "modelProperty"
      propertyName: string | null
      cast: ValueCast
      patchFromContextBeforeDisplay: boolean
      patchBeforeSaveToContext: boolean
    }
  | { type: "runtimeVariable"; key: string | null }

export interface ElementValue {
  source: ValueSource
  events?: {
    afterValueChange?: { function: FunctionReference }
    hideActionBarOnChange?: boolean
  }
  modelInteraction?: {
    ignoreModelChangesAfterInitialization?: boolean
    suppressControlChangeHighlight?: boolean
  }
}

export type ConditionSource =
  | { type: "element"; elementId: string }
  | { type: "runtime"; key: string }
  | { type: "model"; path: string }
  | { type: "function"; function: FunctionReference }
  | { type: "modelExpression"; expression: string }

export type ConditionOperator =
  | "truthy"
  | "falsy"
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "includes"
  | "empty"
  | "notEmpty"

export type ConditionOperand =
  | { type: "literal"; value: JsonValue }
  | { type: "source"; source: ConditionSource }

export interface Condition {
  source: ConditionSource
  operator?: ConditionOperator
  operand?: ConditionOperand
  cast?: { source: ValueCast; operand: ValueCast }
}

export interface ConditionGroup {
  combinator: "AND" | "OR"
  conditions: ConditionExpression[]
}

export type ConditionExpression = Condition | ConditionGroup

export interface ElementDependency {
  id: string
  property: "visible" | "enabled" | "disabled" | "readOnly" | "loading"
  value: boolean
  condition: ConditionExpression
}

export type ValidationType =
  | "Legacy"
  | "Date"
  | "Email"
  | "Integer"
  | "Number"
  | "Float number"
  | "IPv4"
  | "IPv6"
  | "MAC address"
  | "Path"
  | "Range"
  | "String"
  | "Proxy"
  | "Host name"
  | "Net bios name"
  | "Not empty"
  | "Length"
  | "Group"
  | "RangeEnum"
  | "IPv4Mask"
  | "IPv6Mask"
  | "ipv4SubnetMask"
  | "ipv6SubnetMask"
  | "Ignore special chars"
  | "Ignore special chars (v2)"
  | "Ignore special chars (v3)"
  | "Ignore special chars (v4)"
  | "Password"
  | "Ignore first or last spaces"
  | "URL Input"
  | "URL http Input"
  | "Port"
  | "Custom function"
  | "Equality"
  | "Not equal"

export type ValidationConfig =
  | { kind: "legacy"; rule: JsonObject }
  | { kind: "range"; from?: string | number | null; to?: string | number | null }
  | { kind: "length"; operator: ">" | ">=" | "<=" | "<" | "="; value: number }
  | {
      kind: "rangeEnum"
      from?: string | number | null
      to?: string | number | null
      allowEmpty: boolean
    }
  | { kind: "customFunction"; function: FunctionReference }
  | { kind: "equality"; equals: string | null }
  | { kind: "notEqual"; notEquals: string | null }

export interface ValidationRule {
  id: string
  name: ValidationType
  type: ValidationType
  enabled?: boolean
  message?: string | null
  config?: ValidationConfig
}

export interface SchemaNode {
  id: string
  alias?: string | null
  helpId?: string | null
  type: string
  props: JsonObject
  lockId?: string | null
  accordionId?: string | null
  state?: ElementState
  value?: ElementValue
  style?: ElementStyle
  meta: ElementMeta
  validation?: ValidationRule[]
  dependencies?: ElementDependency[]
  children?: SchemaNode[]
}

export type ServerParametersSource =
  | { type: "object"; object: string | null }
  | { type: "handler"; function: FunctionReference }

export interface ServerMethodConfig {
  methodName: string
  parametersSource: ServerParametersSource
}

export type FormDataSource =
  | { type: "manual" }
  | { type: "handler"; function: FunctionReference }
  | { type: "server"; server: ServerMethodConfig }

export type FormDataSave = FormDataSource

export interface ToggleableFunction {
  enabled: boolean
  function?: FunctionReference
}

export interface FormSettings {
  helpId?: string | null
  title?: string | null
  modeAddTitle?: string | null
  modeEditTitle?: string | null
  showInNav?: boolean
  rootForm?: boolean
  ignoreValidationOnDomainSave?: boolean
  objectType?: string | null
  domain?: string | null
  buildType?: BuildType
  author?: string | null
  dataSource?: FormDataSource
  dataSave?: FormDataSave
  useCachedData?: boolean
  disableChangeTracking?: boolean
  isParentEntity?: boolean
  progressIndicatorFunction?: ToggleableFunction
  keepOpenOnDomainSave?: boolean
  showSaveAndCloseButton?: boolean
  onInitialize?: ToggleableFunction
  afterRender?: ToggleableFunction
  onClose?: ToggleableFunction
  displayType?: "default" | "details" | "flyout" | "modal"
  parentFormId?: string | null
  hideActionBarOnFormChange?: boolean
  customButtonsGetter?: ToggleableFunction
  actionBarAssistantBootstrapper?: ToggleableFunction
  actionBarGetButtonsHandler?: ToggleableFunction
  actionBarEnableOverride?: boolean
  actionBarButtons?: {
    enabled: boolean
    okButtonTitle?: string | null
    saveButtonTitle?: string | null
    cancelButtonTitle?: string | null
  }
}

export interface FormSchema {
  id: string
  name: string
  schemaVersion: 1
  elements: SchemaNode[]
  settings?: FormSettings
  meta?: JsonObject
}
