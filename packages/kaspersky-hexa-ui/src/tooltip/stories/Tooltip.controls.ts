import { PropPresentationMap } from '@sb/components/Documentation'

import type { TooltipProps } from '../types'

const tooltipPlacements: NonNullable<TooltipProps['placement']>[] = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom'
]

const tooltipTriggers = ['hover', 'click', 'focus', 'contextMenu'] as const

export const defaultArgs = {
  placement: 'top' as const,
  trigger: 'hover' as const,
  defaultAlign: false,
  text: 'Подсказка'
}

export const tooltipPropPresentation: PropPresentationMap = {
  placement: {
    control: 'select',
    description: 'Расположение подсказки относительно элемента',
    options: tooltipPlacements
  },
  trigger: {
    control: 'select',
    description: 'Действие, по которому открывается подсказка',
    options: [...tooltipTriggers]
  },
  defaultAlign: {
    control: 'boolean',
    description: 'Использовать стандартное выравнивание базового компонента'
  },
  text: {
    control: 'text',
    description: 'Содержимое подсказки'
  }
}
