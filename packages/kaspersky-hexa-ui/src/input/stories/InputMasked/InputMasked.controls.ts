import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

import { InputMaskPreset, inputMaskPresets } from './inputMaskedStoryData'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mask: 'Phone' as InputMaskPreset,
  validationStatus: 'default' as const,
  disabled: false,
  readOnly: false,
  placeholder: 'Введите значение',
  value: ''
}

export const inputMaskedPropPresentation: PropPresentationMap = {
  mask: {
    control: 'select',
    description: 'Готовый вариант маски для демонстрации',
    options: [...inputMaskPresets]
  },
  validationStatus: {
    control: 'select',
    description: 'Визуальный статус валидации поля',
    options: [...validationStatuses]
  },
  disabled: fromSharedProp('disabled', {
    description: 'Отключённое поле: ввод недоступен'
  }),
  readOnly: {
    control: 'boolean',
    description: 'Режим только для чтения: значение отображается, но не редактируется'
  },
  placeholder: {
    control: 'text',
    description: 'Подсказка в пустом поле'
  },
  value: {
    control: 'text',
    description: 'Контролируемое значение поля'
  }
}
