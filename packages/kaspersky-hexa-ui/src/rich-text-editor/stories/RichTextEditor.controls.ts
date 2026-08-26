import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { extendPropPresentation, PropPresentationMap } from '@sb/components/Documentation'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  enabled: true,
  readOnly: false,
  autoFocus: true,
  placeholder: 'Начните вводить текст...',
  limitTextSize: undefined,
  textareaMode: false,
  'textarea.validationStatus': 'default' as const,
  'textarea.disabled': false,
  'textarea.readOnly': false,
  'textarea.showCount': false
}

export const componentPropPresentation: PropPresentationMap = {
  enabled: {
    control: 'boolean',
    description: 'Разрешает редактирование текста'
  },
  readOnly: {
    control: 'boolean',
    description: 'Отключает редактирование и панель форматирования'
  },
  autoFocus: {
    control: 'boolean',
    description: 'Переводит фокус в редактор после монтирования'
  },
  placeholder: {
    control: 'text',
    description: 'Текст подсказки для пустого редактора'
  },
  limitTextSize: {
    control: 'number',
    description: 'Максимальное количество символов'
  },
  textareaMode: {
    control: 'boolean',
    description: 'Включает режим Textarea'
  },
  'textarea.showCount': {
    control: 'boolean',
    description: 'Счетчик введенных символов'
  },
  'textarea.validationStatus': fromSharedProp('validationStatus'),
  'textarea.disabled': fromSharedProp('disabled'),
  'textarea.readOnly': fromSharedProp('readOnly')
}
