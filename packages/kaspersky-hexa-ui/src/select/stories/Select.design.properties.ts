import type { PropPresentationMap } from '@sb/components/Documentation'

export const selectDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | focus | disabled | readonly | loading | active | default'
  },
  placeholder: {
    description: 'Плейсхолдер отображается, когда значение не выбрано',
    type: 'true | false'
  },
  withSearch: {
    description: 'Режим с полем поиска в выпадающем списке',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Статус валидации поля',
    type: 'default | error | success'
  },
  customContent: {
    description: 'Режим с кастомным содержимым в поле',
    type: 'false | true'
  },
  description: {
    description: 'Показывает описание под меткой опции',
    type: 'Boolean',
    defaultValue: 'false'
  },
  componentBefore: {
    description: 'Показывает компонент перед значением',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Текст выбранного значения или плейсхолдер',
    type: 'Text',
    defaultValue: 'Select'
  },
  elementBefore_: {
    label: '🔄 elementBefore',
    description: 'Элемент перед значением',
    type: 'Instance Swap'
  },
  clearable: {
    description: 'Показывает кнопку сброса выбранного значения',
    type: 'Boolean',
    defaultValue: 'false'
  },
  children_: {
    label: '🔄 children',
    description: 'Содержимое выпадающего списка',
    type: 'Instance Swap'
  }
}
