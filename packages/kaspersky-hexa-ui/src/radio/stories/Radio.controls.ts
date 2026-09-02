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
    description: 'Недоступное состояние: все опции группы не реагируют на действия пользователя. Отдельную опцию можно настроить через `disabled` в объекте `options` — значение опции перекрывает групповое'
  }),
  readonly: {
    control: 'boolean',
    description: 'Только для чтения: выбор виден, но изменить его нельзя. Отдельную опцию можно настроить через `readonly` в объекте `options` — значение опции перекрывает групповое'
  },
  vertical: {
    control: 'boolean',
    description: 'Вертикальное расположение опций. По умолчанию — `true`'
  },
  invalid: {
    control: 'boolean',
    description: 'Состояние ошибки валидации: применяет стиль invalid к опциям группы. Отдельную опцию можно настроить через `invalid` в объекте `options` — значение опции перекрывает групповое'
  }
}
