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
  showTime: false,
  disabled: false,
  readonly: false,
  validationStatus: 'default' as const
}

export const rangePickerPropPresentation: PropPresentationMap = {
  showTime: {
    group: 'appearance',
    description: 'Показывать выбор времени в выпадающей панели',
    control: 'boolean'
  },
  format: {
    group: 'appearance',
    description: 'Формат отображения даты в полях ввода',
    control: 'text'
  },
  disabled: fromSharedProp('disabled'),
  readonly: {
    group: 'appearance',
    description: 'Только чтение: поля не редактируются, календарь недоступен',
    control: 'boolean'
  },
  validationStatus: {
    group: 'appearance',
    description: 'Визуальный статус валидации поля',
    control: 'select',
    options: [...validationStatuses]
  },
  open: {
    group: 'technical',
    description: 'Управление открытием выпадающей панели',
    control: 'boolean'
  }
}
