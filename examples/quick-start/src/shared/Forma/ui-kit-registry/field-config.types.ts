/** Base for every form field config */
export type FormaFieldBase = {
  name: string
  label?: string
  required?: boolean
  /**
   * Extra props passed to the underlying Hexa UI control (Textbox, Select, etc.).
   * Use in form config to pass any Hexa component props (e.g. size, disabled, readOnly).
   */
  controlProps?: Record<string, unknown>
}

export type FormaFieldText = FormaFieldBase & {
  type: 'text'
  placeholder?: string
}

export type FormaFieldEmail = FormaFieldBase & {
  type: 'email'
  placeholder?: string
}

export type FormaFieldPassword = FormaFieldBase & {
  type: 'password'
  placeholder?: string
}

export type FormaFieldSelect = FormaFieldBase & {
  type: 'select'
  options: Array<{ value: string; label: string }>
  placeholder?: string
}

export type FormaFieldCheckbox = FormaFieldBase & {
  type: 'checkbox'
  /** Label text for the checkbox (e.g. "Remember me") */
  children?: string
}

export type FormaFieldToggle = FormaFieldBase & { type: 'toggle' }

export type FormaFieldRadio = FormaFieldBase & {
  type: 'radio'
  options: Array<{ value: string; label: string }>
}

export type FormaFieldTextarea = FormaFieldBase & {
  type: 'textarea'
  placeholder?: string
}

/**
 * Only custom components registered in Forma are allowed.
 * To use a custom control: add an id here and register it in Forma registry.
 */
export type FormaCustomComponentId = 'DemoCustomField'

export type FormaFieldCustom = FormaFieldBase & {
  type: 'custom'
  component: FormaCustomComponentId
  props?: Record<string, unknown>
}

/**
 * Registry of field types: maps type name → config shape.
 * Extend via module augmentation to add new Hexa UI (or custom) field types.
 */
export interface FormaFieldRegistry {
  text: FormaFieldText
  email: FormaFieldEmail
  password: FormaFieldPassword
  select: FormaFieldSelect
  checkbox: FormaFieldCheckbox
  toggle: FormaFieldToggle
  radio: FormaFieldRadio
  textarea: FormaFieldTextarea
  custom: FormaFieldCustom
}

/** Allowed field type names. Add new types by augmenting FormaFieldRegistry. */
export type FormaRegisteredFieldType = keyof FormaFieldRegistry

/** Union of all registered field configs. Use only registered types (build-time enforced). */
export type FormaFieldConfig = FormaFieldRegistry[FormaRegisteredFieldType]
