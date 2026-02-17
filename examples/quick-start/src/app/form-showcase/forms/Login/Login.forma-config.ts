import { z } from 'zod'

import { createFormaConfig, validateFormaField } from '../../../../shared/Forma'

const login = createFormaConfig({
  data: {
    schema: z.object({
      email: validateFormaField.email(),
      password: validateFormaField
        .requiredString('Password is required')
        .pipe(validateFormaField.stringMinLen(6, 'Min 6 characters')),
      remember: validateFormaField.optionalBoolean(),
      demoCustom: validateFormaField.optionalString()
    }),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
      demoCustom: ''
    }
  },
  ui: {
    submitLabel: 'Sign in',
    fields: [
      { type: 'email', name: 'email', label: 'Email', required: true },
      { type: 'password', name: 'password', label: 'Password', required: true },
      {
        type: 'checkbox',
        name: 'remember',
        children: 'Remember me'
      },
      {
        type: 'custom',
        name: 'demoCustom',
        label: 'Demo custom field (only via Forma registry)',
        component: 'DemoCustomField'
      }
    ]
  }
})

export const loginSchema = login.schema
export type LoginFormValues = z.infer<typeof loginSchema>
export const loginDefaultValues = login.defaultValues
export const loginFormConfig = login.config
