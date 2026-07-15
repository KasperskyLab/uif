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
  validationStatus: 'default' as const,
  placeholder: 'Search...',
  value: ''
}

export const searchPropPresentation: PropPresentationMap = {
  disabled: fromSharedProp('disabled', {
    description: 'Недоступное состояние поля поиска'
  }),
  validationStatus: {
    control: 'select',
    description: 'Визуальный статус валидации поля',
    options: [...validationStatuses]
  },
  placeholder: {
    control: 'text',
    description: 'Подсказка в пустом поле'
  },
  value: {
    control: 'text',
    description: 'Контролируемое значение поля поиска'
  }
}
