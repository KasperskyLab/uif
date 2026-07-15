import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'
import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  validationStatus: 'default' as const,
  placeholder: 'Select',
  disabled: false,
  readOnly: false,
  allowClear: false,
  showSearch: false,
  loading: false
}

export const selectPropPresentation: PropPresentationMap = {
  validationStatus: {
    control: 'radio',
    description: 'Статус валидации',
    options: [...validationStatuses]
  },
  disabled: fromSharedProp('disabled'),
  readOnly: {
    control: 'boolean',
    description: 'Режим только для чтения'
  },
  allowClear: {
    control: 'boolean',
    description: 'Показать кнопку сброса значения'
  },
  showSearch: {
    control: 'boolean',
    description: 'Включить поиск в выпадающем списке'
  },
  loading: fromSharedProp('loading'),
  placeholder: {
    control: 'text',
    description: 'Плейсхолдер'
  }
}
