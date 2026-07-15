import type { PropPresentationMap } from '@sb/components/Documentation'

export const toggleDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | readonly | loading | disabled | active | hover'
  },
  selected: {
    description: 'Включённое или выключенное положение переключателя',
    type: 'false | true'
  },
  loading: {
    description: 'Состояние загрузки переключателя',
    type: 'false | true',
    defaultValue: 'false'
  },
  disabled: {
    description: 'Недоступное состояние: компонент не реагирует на взаимодействие',
    type: 'false | true',
    defaultValue: 'false'
  },
  value: {
    description: 'Наличие подписи рядом с переключателем',
    type: 'false | true'
  },
  labelPosition: {
    description: 'Расположение подписи относительно переключателя',
    type: 'after | before',
    defaultValue: 'after'
  },
  description: {
    description: 'Отображение дополнительного описания под компонентом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  validation: {
    description: 'Отображение текста валидации под компонентом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
