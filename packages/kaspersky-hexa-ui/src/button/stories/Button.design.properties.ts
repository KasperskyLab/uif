import type { PropPresentationMap } from '@sb/components/Documentation'

export const buttonDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант кнопки.',
    type: 'button | iconButton',
    defaultValue: 'button'
  },
  mode: {
    description: 'Цветовой режим кнопки.',
    type: 'primary | secondary | tertiary | dangerFill | dangerOutline | ai',
    defaultValue: 'primary'
  },
  size: {
    description: 'Размер компонента.',
    type: 'extraLarge | large | medium | small',
    defaultValue: 'medium'
  },
  state: {
    description: 'Интерактивное состояние компонента (для макетов и спецификации).',
    type: 'enabled | hover | active',
    defaultValue: 'enabled'
  },
  disabled: {
    description: 'Неактивное состояние: компонент недоступен для взаимодействия.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  loading: {
    description: 'Состояние загрузки: содержимое заменяется индикатором.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    description: 'Текстовый лейбл кнопки',
    type: 'Text'
  },
  iconBefore: {
    description: 'Иконка перед текстом.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Слот для iconBefore. Слот можно заменить любой иконкой размером 16 px.',
    type: 'Instance Swap'
  },
  iconAfter: {
    description: 'Иконка после текста. Слот можно заменить любой иконкой размером 16 px.',
    defaultValue: 'false',
    type: 'Boolean'
  },
  iconAfter_: {
    label: '🔄 iconAfter',
    description: 'Слот для iconAfter. Слот можно заменить любой иконкой размером 16 px.',
    type: 'Instance Swap'
  }
}
