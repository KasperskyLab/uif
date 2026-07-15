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

export const rangeTimeInputPropPresentation: PropPresentationMap = {
  format: {
    group: 'appearance',
    description: 'Формат отображения времени в полях ввода',
    control: 'select',
    options: [...timeFormat]
  },
  placeholder: {
    group: 'appearance',
    description: 'Подсказка в пустых полях. Если не задана, формируется из **format**',
    control: 'text'
  },
  disabled: fromSharedProp('disabled'),
  readOnly: {
    group: 'appearance',
    description: 'Только чтение: поля не редактируются',
    control: 'boolean'
  },
  validationStatus: {
    group: 'appearance',
    description: 'Визуальный статус валидации полей',
    control: 'select',
    options: [...validationStatuses]
  }
}
