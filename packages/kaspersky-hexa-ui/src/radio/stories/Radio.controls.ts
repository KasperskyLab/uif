import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  disabled: false,
  readonly: false,
  vertical: true,
  invalid: false
}

export const radioPropPresentation: PropPresentationMap = {
  disabled: fromSharedProp('disabled', {
    description: 'Недоступное состояние: все опции группы не реагируют на действия пользователя'
  }),
  readonly: {
    control: 'boolean',
    description: 'Только для чтения: выбор виден, но изменить его нельзя'
  },
  vertical: {
    control: 'boolean',
    description: 'Вертикальное расположение опций. По умолчанию — `true`'
  },
  invalid: {
    control: 'boolean',
    description: 'Состояние ошибки валидации: применяет стиль invalid к опциям группы'
  }
}
