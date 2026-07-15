import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

import { timeFormat } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  format: 'HH:mm:ss' as const,
  disabled: false,
  readOnly: false,
  validationStatus: 'default' as const
}

export const timeInputPropPresentation: PropPresentationMap = {
  format: {
    description: 'Формат отображения времени в поле ввода',
    control: 'select',
    options: [...timeFormat]
  },
  placeholder: {
    description: 'Подсказка в пустом поле. Если не задана, формируется из format',
    control: 'text'
  },
  disabled: fromSharedProp('disabled'),
  readOnly: {
    description: 'Только чтение: поле не редактируется',
    control: 'boolean'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    control: 'select',
    options: [...validationStatuses]
  }
}
