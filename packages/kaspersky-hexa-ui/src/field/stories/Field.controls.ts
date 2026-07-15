import { PropPresentationMap } from '@sb/components/Documentation'

import { LabelPosition, LayoutPreset } from '../types'

const labelPositions: LabelPosition[] = ['top', 'before', 'after']
const labelTypes = ['default', 'full', 'stretch'] as const
const messageModes = ['error', 'warning', 'success', 'common'] as const

export const defaultArgs = {
  label: 'Label',
  labelPosition: 'top' as LabelPosition,
  labelType: 'default' as (typeof labelTypes)[number],
  required: false,
  description: '',
  message: '',
  messageMode: 'error' as (typeof messageModes)[number],
  tooltip: ''
}

export const fieldPropPresentation: PropPresentationMap = {
  label: {
    control: 'text',
    description: 'Текст метки поля. Если не задан, метка не отображается.'
  },
  labelPosition: {
    control: 'select',
    description: 'Расположение метки относительно контрола.',
    options: [...labelPositions]
  },
  labelType: {
    control: 'select',
    description: 'Тип метки при позиции `before`: управляет шириной и поведением колонки метки.',
    options: [...labelTypes]
  },
  required: {
    control: { type: 'boolean' },
    description: 'Отображает маркер обязательности рядом с меткой.'
  },
  description: {
    control: 'text',
    description: 'Вспомогательный текст под контролом. Поддерживает Markdown.'
  },
  message: {
    control: 'text',
    description: 'Текст сообщения валидации.'
  },
  messageMode: {
    control: 'select',
    description: 'Цветовой режим сообщения валидации.',
    options: [...messageModes]
  },
  tooltip: {
    control: 'text',
    description: 'Содержимое всплывающей подсказки рядом с меткой. Поддерживает Markdown.'
  },
  gridPreset: {
    control: 'select',
    description: 'Предустановленный grid-пресет для колонок метки и контрола.',
    options: Object.values(LayoutPreset)
  }
}
