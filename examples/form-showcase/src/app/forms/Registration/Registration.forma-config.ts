import { z } from 'zod'

import {
  createFormaConfig,
  validateFormaField,
  useFormaScheme
} from '../../../shared/Forma'

const countryOptions = [
  { value: 'ru', label: 'Russia' },
  { value: 'us', label: 'United States' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' }
]

const registration = createFormaConfig({
  data: {
    schema: useFormaScheme(
      z.object({
        name: validateFormaField
          .requiredString('Name is required')
          .pipe(validateFormaField.stringMinLen(2, 'Min 2 characters')),
        email: validateFormaField.email(),
        password: validateFormaField.stringMinLen(8, 'Min 8 characters'),
        confirmPassword: validateFormaField.string(),
        country: validateFormaField.requiredSelect('Select a country'),
        terms: validateFormaField.termsAccepted()
      }),
      'password',
      'confirmPassword',
      'Passwords do not match'
    ),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      terms: false
    }
  },
  ui: {
    submitLabel: 'Register',
    fields: [
      {
        type: 'text',
        name: 'name',
        label: 'Full name',
        required: true,
        controlProps: { size: 'medium' }
      },
      { type: 'email', name: 'email', label: 'Email', required: true },
      { type: 'password', name: 'password', label: 'Password', required: true },
      {
        type: 'password',
        name: 'confirmPassword',
        label: 'Confirm password',
        required: true
      },
      {
        type: 'select',
        name: 'country',
        label: 'Country',
        required: true,
        options: countryOptions,
        placeholder: 'Select country'
      },
      {
        type: 'checkbox',
        name: 'terms',
        children: 'I accept the terms and conditions'
      }
    ]
  }
})

export const registrationSchema = registration.schema
export type RegistrationFormValues = z.infer<typeof registrationSchema>
export const registrationDefaultValues = registration.defaultValues
export const registrationFormConfig = registration.config
export { countryOptions }
