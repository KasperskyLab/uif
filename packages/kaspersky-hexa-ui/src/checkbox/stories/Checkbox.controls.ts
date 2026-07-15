import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { FormLabelMode } from '@src/form-label/types'

const checkboxModes: FormLabelMode[] = ['primary', 'secondary', 'disabled']

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'primary' as const,
  disabled: false,
  readonly: false,
  invalid: false,
  required: false,
  checked: false,
  indeterminate: false,
  children: 'Check me',
  description: ''
}

export const checkboxPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...checkboxModes],
    description: 'Режим подписи FormLabel для строкового children'
  }),
  disabled: fromSharedProp('disabled', {
    description: 'Недоступное состояние: чекбокс не реагирует на действия пользователя'
  }),
  readonly: {
    control: 'boolean',
    description: 'Только для чтения: состояние видно, но изменить его нельзя'
  },
  invalid: {
    control: 'boolean',
    description: 'Состояние ошибки валидации'
  },
  required: {
    control: 'boolean',
    description: 'Обязательное поле: к подписи добавляется маркер required'
  },
  checked: {
    control: 'boolean',
    description: 'Отмеченное состояние в контролируемом режиме'
  },
  indeterminate: {
    control: 'boolean',
    description: 'Промежуточное состояние (частичный выбор в группе)'
  },
  children: {
    control: 'text',
    description: 'Подпись чекбокса. Для строки рендерится FormLabel с htmlFor'
  },
  description: {
    control: 'text',
    description: 'Дополнительный текст под чекбоксом через HelpMessage'
  }
}
