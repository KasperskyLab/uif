import type { PropPresentationMap } from '@sb/components/Documentation'

export const textareaDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | hover | enabled | readonly | disabled | active'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера в пустом поле',
    type: 'true | false'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    type: 'default | error | success'
  },
  orientation: {
    description: 'Ориентация расположения счётчика и сообщения валидации',
    type: 'horizontal | vertical'
  },
  mode: {
    description: 'Режим оформления сообщения валидации под полем',
    type: 'critical | warning | success | none'
  },
  size: {
    description: 'Размер компонента',
    type: 'small | medium'
  },
  counter: {
    description: 'Отображение счётчика символов под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  description: {
    description: 'Отображение поясняющего текста под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки в поле',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Текст содержимого поля ввода',
    type: 'Text',
    defaultValue: 'Text area'
  },
  text: {
    label: '✏️ text',
    description: 'Текст сообщения валидации под полем',
    type: 'Text',
    defaultValue: 'validationText'
  },
  description_: {
    label: '✏️ description',
    description: 'Текст поясняющего блока под полем',
    type: 'Text',
    defaultValue: 'Text'
  }
}
