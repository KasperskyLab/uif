/**
 * Public Forma types. Re-exports from registry (field-config, renderer) and
 * defines form/component API (FormaFormConfig, FormaFormContext, FormaProps).
 */

import type React from 'react'
import type { z } from 'zod'
import type {
  Control,
  FieldErrors,
  FieldValues,
  Path
} from 'react-hook-form'
import type { FormaFieldConfig } from './ui-kit-registry/field-config.types'

export type FormaFormConfig<T> = {
  schema: z.ZodType<T>
  defaultValues: T
  fields: FormaFieldConfig[]
  submitLabel?: string
}

export type FormaFormContext<T extends FieldValues> = {
  control: Control<T>
  errors: FieldErrors<T>
  trigger: (name?: Path<T> | Path<T>[]) => Promise<boolean>
  getValues: () => T
}

export type FormaProps<T extends FieldValues> = {
  config: FormaFormConfig<T>
  onSubmit: (data: T) => void
  isLoading?: boolean
  title?: React.ReactNode
  description?: React.ReactNode
  /** Custom form actions (e.g. Wizard Back/Next/Submit). If set, default submit button is not rendered. */
  renderActions?: (
    ctx: FormaFormContext<T> & { handleSubmit: () => void }
  ) => React.ReactNode
  /** Called when form is ready; use to get handleSubmit for external trigger (e.g. card footer Save). */
  onReady?: (ctx: FormaFormContext<T> & { handleSubmit: () => void }) => void
}

export type {
  FormaFieldBase,
  FormaFieldText,
  FormaFieldEmail,
  FormaFieldPassword,
  FormaFieldSelect,
  FormaFieldCheckbox,
  FormaFieldToggle,
  FormaFieldRadio,
  FormaFieldTextarea,
  FormaCustomComponentId,
  FormaFieldCustom,
  FormaFieldRegistry,
  FormaRegisteredFieldType,
  FormaFieldConfig
} from './ui-kit-registry/field-config.types'

export type {
  FormaFieldRendererProps,
  FormaFieldRenderer,
  FormaCustomFieldProps,
  FormaCustomComponentRegistry
} from './ui-kit-registry/renderer.types'
