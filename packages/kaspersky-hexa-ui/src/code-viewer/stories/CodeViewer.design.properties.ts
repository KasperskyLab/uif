import type { PropPresentationMap } from '@sb/components/Documentation'

export const codeViewerDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'hover | focus | readonly | enabled | active'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера вместо содержимого редактора',
    type: 'true | false'
  },
  invalid: {
    description: 'Состояние ошибки валидации',
    type: 'false | true'
  },
  valid: {
    description: 'Состояние успешной валидации',
    type: 'false | true'
  },
  orientation: {
    description: 'Ориентация полосы прокрутки',
    type: 'horizontal | vertical'
  },
  mode: {
    description: 'Визуальный статус валидации поля',
    type: 'critical | warning | success | none'
  },
  size: {
    description: 'Размер компонента',
    type: 'small | medium'
  },
  description: {
    description: 'Отображение поясняющего текста под редактором',
    type: 'Boolean',
    defaultValue: 'false'
  },
  invalidSyntax: {
    description: 'Подсветка синтаксической ошибки в коде',
    type: 'Boolean',
    defaultValue: 'false'
  },
  scrollbar: {
    description: 'Отображение вертикальной полосы прокрутки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  scrollbarHorizontal: {
    description: 'Отображение горизонтальной полосы прокрутки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  highlight: {
    description: 'Подсветка выделенных строк в области редактора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    label: '✏️ text',
    description: 'Текст сообщения валидации под редактором',
    type: 'Text',
    defaultValue: 'validationText'
  },
  descriptionText: {
    label: '✏️ description',
    description: 'Текст описания под редактором',
    type: 'Text',
    defaultValue: 'Text'
  }
}
