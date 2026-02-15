import type { z } from 'zod'

import type { FormaFormConfig } from './Forma.types'
import type { FormaFieldConfig } from './ui-kit-registry/field-config.types'

/** Static form: data + ui with fixed fields */
export type CreateFormaConfigParamsStatic<T> = {
  data: {
    schema: z.ZodType<T>
    defaultValues: T
  }
  ui: {
    submitLabel?: string
    fields: FormaFieldConfig[]
  }
}

/** Dynamic form (e.g. wizard): data + ui with getter for fields by step */
export type CreateFormaConfigParamsDynamic<T> = {
  data: {
    schema: z.ZodType<T>
    defaultValues: T
  }
  ui: {
    submitLabel?: string
    getFields: (stepIndex: number) => FormaFieldConfig[]
  }
}

export type CreateFormaConfigParams<T> =
  | CreateFormaConfigParamsStatic<T>
  | CreateFormaConfigParamsDynamic<T>

/** Result for static form */
export type CreateFormaConfigResultStatic<T> = {
  schema: z.ZodType<T>
  defaultValues: T
  config: FormaFormConfig<T>
}

/** Result for dynamic form (wizard): configBase + getFields to build config per step */
export type CreateFormaConfigResultDynamic<T> = {
  schema: z.ZodType<T>
  defaultValues: T
  configBase: Omit<FormaFormConfig<T>, 'fields'>
  getFields: (stepIndex: number) => FormaFieldConfig[]
}

export type CreateFormaConfigResult<T> =
  | CreateFormaConfigResultStatic<T>
  | CreateFormaConfigResultDynamic<T>

function isDynamic<T>(
  params: CreateFormaConfigParams<T>
): params is CreateFormaConfigParamsDynamic<T> {
  return 'getFields' in params.ui && typeof params.ui.getFields === 'function'
}

/**
 * Build form config from data (schema, defaultValues) and ui (submitLabel, fields or getFields).
 * Static form: pass ui.fields → returns { schema, defaultValues, config }.
 * Dynamic form (wizard): pass ui.getFields(stepIndex) → returns { schema, defaultValues, configBase, getFields }.
 */
export function createFormaConfig<T>(
  params: CreateFormaConfigParamsStatic<T>
): CreateFormaConfigResultStatic<T>
export function createFormaConfig<T>(
  params: CreateFormaConfigParamsDynamic<T>
): CreateFormaConfigResultDynamic<T>
export function createFormaConfig<T>(
  params: CreateFormaConfigParams<T>
): CreateFormaConfigResult<T> {
  const { data, ui } = params
  const base = {
    schema: data.schema,
    defaultValues: data.defaultValues
  }

  if (isDynamic(params)) {
    return {
      ...base,
      configBase: {
        ...base
      },
      getFields: params.ui.getFields
    }
  }

  const staticUi = ui as CreateFormaConfigParamsStatic<T>['ui']
  return {
    ...base,
    config: {
      ...base,
      submitLabel: staticUi.submitLabel,
      fields: staticUi.fields
    }
  }
}
