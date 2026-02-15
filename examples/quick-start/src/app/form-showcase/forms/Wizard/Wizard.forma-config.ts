import { z } from 'zod'

import type { FormaFieldConfig } from '../../../../shared/Forma'
import { createFormaConfig, validateFormaField } from '../../../../shared/Forma'

export const WIZARD_STEPS = [
  { key: 'contact', fields: ['fullName', 'email'] as const },
  { key: 'details', fields: ['company', 'role'] as const }
]

const roleOptions = [
  { value: 'admin', label: 'Administrator' },
  { value: 'user', label: 'User' },
  { value: 'viewer', label: 'Viewer' }
]

const wizardSchemaBase = z
  .object({
    fullName: validateFormaField.requiredString('Name is required'),
    email: validateFormaField.email()
  })
  .merge(
    z.object({
      company: validateFormaField.requiredString('Company is required'),
      role: validateFormaField.requiredSelect('Select role')
    })
  )

const wizardFieldConfigs: Record<string, FormaFieldConfig> = {
  fullName: {
    type: 'text',
    name: 'fullName',
    label: 'Full name',
    required: true,
    placeholder: 'John Doe'
  },
  email: {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: true,
    placeholder: 'you@example.com'
  },
  company: {
    type: 'text',
    name: 'company',
    label: 'Company',
    required: true,
    placeholder: 'Acme Inc.'
  },
  role: {
    type: 'select',
    name: 'role',
    label: 'Role',
    required: true,
    options: roleOptions,
    placeholder: 'Select role'
  }
}

const wizard = createFormaConfig({
  data: {
    schema: wizardSchemaBase,
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      role: ''
    }
  },
  ui: {
    getFields: (stepIndex: number) => {
      const step = WIZARD_STEPS[stepIndex]
      if (!step) return []
      return step.fields.map((name) => wizardFieldConfigs[name])
    }
  }
})

export const wizardSchema = wizard.schema
export type WizardFormValues = z.infer<typeof wizardSchema>
export const wizardDefaultValues = wizard.defaultValues
export const wizardFormConfigBase = wizard.configBase
export const getWizardStepFields = wizard.getFields
