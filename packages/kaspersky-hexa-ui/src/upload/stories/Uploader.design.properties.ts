import type { PropPresentationMap } from '@sb/components/Documentation'

export const uploaderDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер области загрузки',
    type: 'medium | small'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | active | disabled'
  },
  multiple: {
    description: 'Возможность выбрать несколько файлов',
    type: 'true | false'
  },
  uploaded: {
    description: 'Наличие загруженных файлов',
    type: 'false | true'
  },
  invalid: {
    description: 'Состояние с ошибкой проверки',
    type: 'false | true'
  },
  disabled: {
    description: 'Недоступность взаимодействия с компонентом',
    type: 'false | true'
  },
  loading: {
    description: 'Состояние загрузки файлов',
    type: 'false | true'
  },
  fullHeight: {
    description: 'Растягивание компонента по высоте контейнера',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Внешний статус валидации',
    type: 'error | default'
  },
  description: {
    description: 'Отображение текста с требованиями к загрузке',
    type: 'Boolean',
    defaultValue: 'true'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  validationText: {
    description: 'Отображение текста ошибки валидации',
    type: 'Boolean',
    defaultValue: 'true'
  }
}
