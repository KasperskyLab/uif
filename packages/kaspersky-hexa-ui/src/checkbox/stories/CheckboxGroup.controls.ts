import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { FormLabelMode } from '@src/form-label/types'

const checkboxGroupModes: FormLabelMode[] = ['primary', 'secondary', 'disabled']
const checkboxGroupDirections = ['vertical', 'horizontal'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const checkboxGroupDefaultOptions = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3, description: 'Description in checkbox group' }
] as const

export const defaultArgs = {
  direction: 'vertical' as const,
  disabled: false,
  readonly: false,
  invalid: false,
  mode: 'primary' as const,
  defaultValue: [1, 2],
  options: [...checkboxGroupDefaultOptions]
}

export const checkboxGroupPropPresentation: PropPresentationMap = {
  direction: {
    control: 'select',
    description: 'Расположение чекбоксов в группе',
    options: [...checkboxGroupDirections]
  },
  disabled: fromSharedProp('disabled', {
    description: 'Отключает всю группу чекбоксов'
  }),
  readonly: {
    control: 'boolean',
    description: 'Режим только для чтения для всей группы'
  },
  invalid: {
    control: 'boolean',
    description: 'Состояние ошибки валидации для всей группы'
  },
  mode: fromSharedProp('mode', {
    options: [...checkboxGroupModes],
    description: 'Режим подписи FormLabel для строковых label в options'
  })
}
