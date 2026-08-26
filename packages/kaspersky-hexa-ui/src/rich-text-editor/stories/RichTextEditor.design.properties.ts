import type { PropPresentationMap } from '@sb/components/Documentation'

export const richTextEditorDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант отображения редактора',
    type: 'default | widget'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'readonly | disabled | hover | enabled | focus'
  },
  placeholder: {
    description: 'Показывает подсказку для пустого редактора',
    type: 'true | false'
  },
  validationStatus: {
    description: 'Статус валидации редактора',
    type: 'default | error | success'
  },
  counter: {
    description: 'Отображает счётчик символов',
    type: 'visible',
    defaultValue: 'false'
  },
  description: {
    description: 'Отображает текстовое описание',
    type: 'visible',
    defaultValue: 'false'
  },
  scrollbar: {
    description: 'Отображает полосу прокрутки',
    type: 'visible',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Текст в области редактора',
    type: 'text',
    defaultValue: 'Rich text editor'
  }
}
