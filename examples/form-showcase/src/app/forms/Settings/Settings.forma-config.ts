import { z } from 'zod'

import { createFormaConfig, validateFormaField } from '../../../shared/Forma'

const THEME_VALUES = ['light', 'dark', 'system'] as const

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'de', label: 'German' }
]

const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' }
]

const settings = createFormaConfig({
  data: {
    schema: z.object({
      displayName: validateFormaField.requiredString(
        'Display name is required'
      ),
      language: validateFormaField.requiredSelect('Select language'),
      notifications: validateFormaField.boolean(),
      theme: validateFormaField.enumField(THEME_VALUES)
    }),
    defaultValues: {
      displayName: '',
      language: '',
      notifications: true,
      theme: 'light' as const
    }
  },
  ui: {
    submitLabel: 'Save settings',
    fields: [
      {
        type: 'text',
        name: 'displayName',
        label: 'Display name',
        required: true,
        placeholder: 'Your name'
      },
      {
        type: 'select',
        name: 'language',
        label: 'Language',
        required: true,
        options: languageOptions,
        placeholder: 'Select language'
      },
      {
        type: 'toggle',
        name: 'notifications',
        label: 'Email notifications'
      },
      {
        type: 'radio',
        name: 'theme',
        label: 'Theme',
        required: true,
        options: themeOptions
      }
    ]
  }
})

export const settingsSchema = settings.schema
export type SettingsFormValues = z.infer<typeof settingsSchema>
export const settingsDefaultValues = settings.defaultValues
export const settingsFormConfig = settings.config
export { languageOptions, themeOptions }
