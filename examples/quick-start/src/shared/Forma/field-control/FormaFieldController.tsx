import { Controller } from 'react-hook-form'
import type { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'
import type { FormaFieldConfig, FormaRegisteredFieldType } from '../Forma.types'
import { getFieldRenderer } from '../ui-kit-registry/field-renderer-registry'

import '../ui-kit-registry/field-renderers'

type FormaFieldControllerProps<T extends FieldValues> = {
  field: FormaFieldConfig
  control: Control<T>
  errors: FieldErrors<T>
}

export function FormaFieldController<T extends FieldValues>({
  field,
  control,
  errors
}: FormaFieldControllerProps<T>) {
  const name = field.name as Path<T>
  const error = errors[name]?.message as string | undefined

  const Renderer = getFieldRenderer(field.type as FormaRegisteredFieldType)
  if (!Renderer) {
    throw new Error(
      `Forma: unknown field type "${field.type}". Register it with registerFormaFieldType() and add the type to FormaFieldRegistry (module augmentation) for build-time safety.`
    )
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: f }) => (
        <Renderer
          fieldConfig={field}
          value={f.value}
          onChange={f.onChange}
          onBlur={f.onBlur}
          error={error}
        />
      )}
    />
  )
}
