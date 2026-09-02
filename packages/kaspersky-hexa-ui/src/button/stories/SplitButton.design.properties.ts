import type { PropPresentationMap } from '@sb/components/Documentation'

export const splitButtonDesignPropPresentation: PropPresentationMap = {
  mode: { description: 'Цветовой вариант составной кнопки', type: 'secondary | dangerFilled | primary' },
  stateButton: { description: 'Интерактивное состояние основной кнопки', type: 'disabled | loading | active | enabled | hover' },
  stateSplit: { description: 'Интерактивное состояние кнопки раскрытия меню', type: 'disabled | loading | enabled | active | hover' },
  loading: { description: 'Показывать состояние загрузки', type: 'false | true' },
  disabled: { description: 'Отключить составную кнопку', type: 'true | false' },
  iconBefore: { description: 'Показывать иконку перед текстом основной кнопки', type: 'Boolean', defaultValue: 'false' },
  iconBefore_: { label: '🔄 iconBefore', description: 'Иконка перед текстом основной кнопки', type: 'Instance Swap' },
  text: { label: '✏️ text', description: 'Текст основной кнопки', type: 'Text', defaultValue: 'Split button' }
}
