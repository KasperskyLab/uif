import type { PropPresentationMap } from '@sb/components/Documentation'

export const actionButtonDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант компонента: только иконка или кнопка с подписью',
    type: 'iconButton | button'
  },
  mode: {
    description: 'Цветовой режим кнопки',
    type: 'ghost | filled | onLight | ghostInverted'
  },
  size: {
    description: 'Размер компонента',
    type: 'large | medium | small'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | active | disabled'
  },
  iconBefore: {
    description: 'Отображение иконки перед подписью',
    type: 'Boolean',
    defaultValue: 'true'
  },
  elementAfter: {
    description: 'Отображение дополнительного элемента после иконки и подписи',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовая подпись кнопки',
    type: 'Text',
    defaultValue: 'Action'
  }
}
