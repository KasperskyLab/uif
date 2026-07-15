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
  loading: false,
  checked: false,
  labelPosition: 'after' as const,
  required: false,
  children: 'Label'
}

export const togglePropPresentation: PropPresentationMap = {
  disabled: fromSharedProp('disabled', {
    description: 'Недоступное состояние: переключатель не реагирует на действия пользователя'
  }),
  readonly: {
    control: 'boolean',
    description: 'Только для чтения: состояние видно, но изменить его нельзя'
  },
  loading: fromSharedProp('loading', {
    description: 'Состояние загрузки переключателя'
  }),
  checked: {
    control: 'boolean',
    description: 'Включённое состояние в контролируемом режиме'
  },
  labelPosition: {
    control: 'select',
    options: ['after', 'before'],
    description: 'Расположение подписи относительно переключателя'
  },
  required: {
    control: 'boolean',
    description: 'Обязательное поле: к подписи добавляется маркер required'
  },
  children: {
    control: 'text',
    description: 'Подпись переключателя'
  }
}
