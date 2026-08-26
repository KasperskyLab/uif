import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'
import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  placeholder: 'Placeholder',
  disabled: false,
  readOnly: false,
  validationStatus: 'default' as const,
  integerOnly: false,
  allowEmpty: false
}

export const inputNumberPropPresentation: PropPresentationMap = {
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    control: 'select',
    options: [...validationStatuses]
  },
  disabled: fromSharedProp('disabled'),
  readOnly: fromSharedProp('readOnly'),
  prefix: {
    description: 'Префикс перед полем ввода',
    control: 'text'
  },
  suffix: {
    description: 'Суффикс после поля ввода',
    control: 'text'
  },
  placeholder: {
    description: 'Подсказка в пустом поле',
    control: 'text'
  },
  integerOnly: {
    description: 'Разрешить ввод только целых чисел',
    control: 'boolean'
  },
  allowEmpty: {
    description: 'Разрешить пустое значение в поле',
    control: 'boolean'
  },
  keyboard: {
    description: 'Включить управление через клавиатуру',
    control: 'boolean'
  },
  step: {
    description: 'Шаг - число, на которое увеличивается или уменьшается текущее значение',
    control: {
      type: 'number',
      min: 0
    }
  },
  min: {
    description: 'Минимально допустимое значение',
    control: 'number'
  },
  max: {
    description: 'Максимально допустимое значение',
    control: 'number'
  }
}
