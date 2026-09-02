import { validationStatuses } from '@helpers/typesHelpers'
import { PropPresentationMap } from '@sb/components/Documentation'

import { STUB_SIMPLE } from '../__mocks__'

export const defaultArgs = {
  validationStatus: 'default' as const,
  placeholder: 'Выберите значение',
  disabled: false,
  allowClear: true,
  showSearch: true,
  treeCheckable: false,
  treeDefaultExpandAll: true,
  treeData: STUB_SIMPLE
}

export const treeSelectPropPresentation: PropPresentationMap = {
  validationStatus: {
    control: 'radio',
    description: 'Статус валидации',
    options: [...validationStatuses]
  },
  disabled: {
    control: 'boolean',
    description: 'Недоступное состояние компонента'
  },
  allowClear: {
    control: 'boolean',
    description: 'Показать кнопку очистки выбранного значения'
  },
  showSearch: {
    control: 'boolean',
    description: 'Включить поиск по дереву'
  },
  treeCheckable: {
    control: 'boolean',
    description: 'Включить множественный выбор с чекбоксами'
  },
  placeholder: {
    control: 'text',
    description: 'Текст при отсутствии выбранного значения'
  }
}
