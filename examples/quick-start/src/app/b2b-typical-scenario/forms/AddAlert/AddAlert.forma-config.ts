import { z } from 'zod'

import { createFormaConfig, validateFormaField } from '../../../../shared/Forma'

const addAlertSchema = z.object({
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

const addAlert = createFormaConfig({
  data: {
    schema: addAlertSchema,
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
    submitLabel: 'Create',
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

export const addAlertSchemaExport = addAlert.schema
export type AddAlertFormValues = z.infer<typeof addAlertSchemaExport>
export const addAlertDefaultValues = addAlert.defaultValues
export const addAlertFormConfig = addAlert.config
