import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  disabled: false,
  readOnly: false,
  validationStatus: 'default' as const,
  placeholder: 'Placeholder',
  rows: 3,
  maxLength: 1024,
  showCount: false,
  value: ''
}

export const textareaPropPresentation: PropPresentationMap = {
  disabled: fromSharedProp('disabled', {
    description: 'Отключённое поле: ввод недоступен'
  }),
  readOnly: {
    control: 'boolean',
    description: 'Режим только для чтения: значение отображается, но не редактируется'
  },
  validationStatus: {
    control: 'select',
    description: 'Визуальный статус валидации поля',
    options: [...validationStatuses]
  },
  placeholder: {
    control: 'text',
    description: 'Подсказка в пустом поле'
  },
  rows: {
    control: 'number',
    description: 'Количество видимых строк поля'
  },
  maxLength: {
    control: 'number',
    description: 'Максимальное количество символов'
  },
  showCount: {
    control: 'boolean',
    description: 'Показывать счётчик символов под полем'
  },
  value: {
    control: 'text',
    description: 'Контролируемое значение поля'
  }
}
