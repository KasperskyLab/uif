import type { PropPresentationMap } from '@sb/components/Documentation'

/**
 * Pixso item-id: 58851:270364
 * Segmented button — outer group component
 */
export const segmentedButtonDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер компонента',
    type: 'large | medium | small'
  },
  disabled: {
    description: 'Переводит все элементы группы в недоступное состояние',
    type: 'true | false'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | disabled | hover | enabled'
  },
  selected: {
    description: 'Состояние выбранности элемента',
    type: 'False | True'
  },
  postion: {
    description: 'Положение элемента в группе',
    type: 'middle | right | left'
  },
  mode: {
    description: 'Цветовой акцент элемента',
    type: 'critical | warning | success | none | positive | medium | ai | new | inProgress | inIncident | info | update | criticalTransparent | neutralTransparent | resolved | low | high | neutral | accent'
  },
  description: {
    description: 'Показывает строку описания под основным текстом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  validation: {
    description: 'Показывает индикатор валидации',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore: {
    description: 'Показывает иконку перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  counter: {
    description: 'Показывает счётчик в элементе',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Выбор иконки перед текстом',
    type: 'Instance Swap'
  },
  text: {
    label: '✏️ text',
    description: 'Текст подписи элемента',
    type: 'Text',
    defaultValue: 'Label'
  },
  textVisible: {
    label: 'text',
    description: 'Показывает текст подписи',
    type: 'Boolean',
    defaultValue: 'true'
  },
  descriptionContent: {
    label: '✏️ description',
    description: 'Текст строки описания',
    type: 'Text',
    defaultValue: 'Text'
  }
}

/**
 * Pixso item-id: 58851:267962
 * Segmented button item — individual item component
 */
export const segmentedButtonItemDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер элемента',
    type: 'large | medium'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | disabled | hover | enabled'
  },
  selected: {
    description: 'Состояние выбранности элемента',
    type: 'False | True'
  },
  postion: {
    description: 'Положение элемента в группе',
    type: 'middle | right | left'
  },
  mode: {
    description: 'Цветовой акцент элемента',
    type: 'positive | medium | ai | new | inProgress | inIncident | info | update | criticalTransparent | neutralTransparent | resolved | low | critical | high | neutral | accent'
  },
  iconBefore: {
    description: 'Показывает иконку перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  counter: {
    description: 'Показывает счётчик в элементе',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Выбор иконки перед текстом',
    type: 'Instance Swap'
  },
  itemText: {
    label: '✏️ text',
    description: 'Текст подписи элемента',
    type: 'Text',
    defaultValue: 'Label'
  },
  textVisible: {
    label: 'text',
    description: 'Показывает текст подписи',
    type: 'Boolean',
    defaultValue: 'true'
  }
}
