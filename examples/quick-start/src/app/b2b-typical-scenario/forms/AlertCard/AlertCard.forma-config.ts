import { z } from 'zod'

import { createFormaConfig, validateFormaField } from '../../../../shared/Forma'

/** Summary section contract (card Save). */
const alertCardSummarySchema = z.object({
  analyst: validateFormaField.optionalString(),
  name: validateFormaField.optionalString(),
  tenant: validateFormaField.optionalString(),
  registered: validateFormaField.optionalString(),
  updated: validateFormaField.optionalString(),
  firstEvent: validateFormaField.optionalString(),
  lastEvent: validateFormaField.optionalString(),
  severity: validateFormaField.optionalString(),
  correlationRules: validateFormaField.optionalString(),
  technology: validateFormaField.optionalString()
})

const alertCard = createFormaConfig({
  data: {
    schema: alertCardSummarySchema,
    defaultValues: {
      analyst: '',
      name: '',
      tenant: '',
      registered: '',
      updated: '',
      firstEvent: '',
      lastEvent: '',
      severity: '',
      correlationRules: '',
      technology: ''
    }
  },
  ui: {
    submitLabel: 'Save',
    fields: [
      { type: 'text', name: 'analyst', label: 'Analyst' },
      { type: 'text', name: 'name', label: 'Name' },
      { type: 'text', name: 'tenant', label: 'Tenant' },
      { type: 'text', name: 'registered', label: 'Registered' },
      { type: 'text', name: 'updated', label: 'Updated' },
      { type: 'text', name: 'firstEvent', label: 'First event' },
      { type: 'text', name: 'lastEvent', label: 'Last event' },
      { type: 'text', name: 'severity', label: 'Severity' },
      { type: 'text', name: 'correlationRules', label: 'Correlation rules' },
      { type: 'text', name: 'technology', label: 'Technology' }
    ]
  }
})

export const alertCardSummarySchemaExport = alertCard.schema
export type AlertCardSummaryFormValues = z.infer<
  typeof alertCardSummarySchemaExport
>
export const alertCardSummaryDefaultValues = alertCard.defaultValues
export const alertCardFormConfig = alertCard.config
