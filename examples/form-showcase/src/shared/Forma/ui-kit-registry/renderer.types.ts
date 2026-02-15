import type React from 'react'
import type { FormaFieldConfig, FormaCustomComponentId } from './field-config.types'

/** Props passed to a field renderer registered via registerFormaFieldType. */
export type FormaFieldRendererProps = {
  fieldConfig: FormaFieldConfig
  value: unknown
  onChange: (value: unknown) => void
  onBlur: () => void
  error?: string
}

/** Field renderer component type. Register with registerFormaFieldType. */
export type FormaFieldRenderer =
  React.ComponentType<FormaFieldRendererProps>

/** Props passed to custom components in the Forma registry */
export type FormaCustomFieldProps = {
  value: unknown
  onChange: (value: unknown) => void
  onBlur: () => void
  error?: string
  name: string
  label?: string
  required?: boolean
  props?: Record<string, unknown>
}

/** Registry of custom components. Only components listed here can be used as type: 'custom'. */
export type FormaCustomComponentRegistry = {
  [K in FormaCustomComponentId]: React.ComponentType<FormaCustomFieldProps>
}
