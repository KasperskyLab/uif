import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { FormLabelMode } from '../types'

const formLabelModes: FormLabelMode[] = ['primary', 'secondary', 'disabled']
const popoverPlacements = ['top', 'left', 'right', 'bottom'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'primary' as const,
  disabled: false,
  required: false,
  children: 'My text',
  tooltip: 'Replace me',
  tagsAfter: [] as string[]
}

export const formLabelPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...formLabelModes],
    description: 'Цветовой режим подписи'
  }),
  disabled: fromSharedProp('disabled', {
    description: 'Недоступное состояние подписи'
  }),
  required: {
    control: 'boolean',
    description: 'Метка обязательного поля: к тексту добавляется символ *'
  },
  children: {
    control: 'text',
    description: 'Текст подписи'
  },
  tooltip: {
    control: 'text',
    description: 'Содержимое всплывающей подсказки у иконки info'
  },
  tagsAfter: {
    control: 'object',
    description: 'Массив подписей тегов справа от подписи'
  },
  popoverPlacement: {
    control: 'select',
    options: [...popoverPlacements],
    description: 'Позиция всплывающей подсказки относительно иконки info'
  },
  popoverWidth: {
    control: 'number',
    description: 'Ширина всплывающей подсказки в пикселях'
  }
}
