import type { PropPresentationMap } from '@sb/components/Documentation'

export const submenuDesignPropPresentation: PropPresentationMap = {
  elementBefore: { description: 'Отображает элемент перед списком пунктов', type: 'Boolean', defaultValue: 'false' },
  elementAfter: { description: 'Отображает элемент после списка пунктов', type: 'Boolean', defaultValue: 'false' },
  elementBefore_: { label: '🔁 elementBefore', description: 'Заменяет элемент перед списком пунктов', type: 'Instance Swap' },
  elementAfter_: { label: '🔁 elementAfter', description: 'Заменяет элемент после списка пунктов', type: 'Instance Swap' },
  submenuItems_: { label: '🔁 submenuItems', description: 'Заменяет набор пунктов подменю', type: 'Instance Swap' }
}

export const submenuItemDesignPropPresentation: PropPresentationMap = {
  iconBefore: { description: 'Отображает иконку перед текстом пункта', type: 'Boolean', defaultValue: 'false' },
  text: { label: '✏️ text', description: 'Текст пункта подменю', type: 'Text', defaultValue: 'Navigation item' },
  draggable: { description: 'Отображает признак перетаскивания пункта', type: 'Boolean', defaultValue: 'false' },
  level: { description: 'Отображает уровень вложенности пункта', type: 'Boolean', defaultValue: 'false' },
  notification: { description: 'Отображает уведомление у пункта', type: 'Boolean', defaultValue: 'false' },
  elementAfter: { description: 'Отображает элемент после текста пункта', type: 'Boolean', defaultValue: 'false' },
  elementAfter_: { label: '🔄 elementAfter', description: 'Заменяет элемент после текста пункта', type: 'Instance Swap' },
  iconBefore_: { label: '🔄 iconBefore', description: 'Заменяет иконку перед текстом пункта', type: 'Instance Swap' },
  action: { description: 'Отображает действие у пункта', type: 'Boolean', defaultValue: 'false' },
  description: { label: '✏️ description', description: 'Дополнительный текст пункта', type: 'Text', defaultValue: 'description' },
  description_: { label: 'description', description: 'Отображает дополнительный текст пункта', type: 'Boolean', defaultValue: 'false' },
  variant: { description: 'Вариант элемента подменю', type: 'row | divider | title' },
  state: { description: 'Интерактивное состояние компонента', type: 'enabled | hover | active | disabled' },
  selected: { description: 'Выделяет выбранный пункт', type: 'false | true' },
  disabled: { description: 'Отключает взаимодействие с пунктом', type: 'false | true' }
}
