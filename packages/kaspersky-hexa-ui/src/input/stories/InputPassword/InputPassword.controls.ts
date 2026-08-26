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
  placeholder: 'Password',
  disabled: false,
  readOnly: false,
  validationStatus: 'default' as const,
  clearBeforeFirstChange: false,
  showVisibilityIcon: true,
  value: ''
}

export const inputPasswordPropPresentation: PropPresentationMap = {
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
  clearBeforeFirstChange: {
    description: 'Очищать значение при первом фокусе до первого изменения',
    control: 'boolean'
  },
  showVisibilityIcon: {
    description: 'Показывать иконку переключения видимости пароля',
    control: 'boolean'
  },
  placeholder: {
    description: 'Подсказка в пустом поле',
    control: 'text'
  },
  value: {
    description: 'Контролируемое значение поля',
    control: 'text'
  }
}
