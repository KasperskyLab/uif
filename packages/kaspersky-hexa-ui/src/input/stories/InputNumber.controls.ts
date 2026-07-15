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
  placeholder: 'Placeholder',
  disabled: false,
  readOnly: false,
  validationStatus: 'default' as const,
  integerOnly: false,
  allowEmpty: false
}

export const inputNumberPropPresentation: PropPresentationMap = {
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    control: 'select',
    options: [...validationStatuses]
  },
  disabled: fromSharedProp('disabled'),
  readOnly: {
    description: 'Только чтение: поле не редактируется',
    control: 'boolean'
  },
  placeholder: {
    description: 'Подсказка в пустом поле',
    control: 'text'
  },
  integerOnly: {
    description: 'Разрешить ввод только целых чисел',
    control: 'boolean'
  },
  allowEmpty: {
    description: 'Разрешить пустое значение в поле',
    control: 'boolean'
  },
  min: {
    description: 'Минимально допустимое значение',
    control: 'number'
  }
}
