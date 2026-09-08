import type { PropPresentationMap } from '@sb/components/Documentation'

export const statusDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим статуса',
    type: 'notActive | positive | info | in incident | resolved | low | in progress | medium | new | critical | update | high | default | accent | not-active | inProgress | inIncident'
  },
  componentBefore: {
    description: 'Вид элемента перед текстом',
    type: 'indicator | icon'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовая подпись статуса',
    type: 'Text',
    defaultValue: 'Status'
  },
  icon_: {
    label: '🔄 icon',
    description: 'Иконка перед текстовой подписью',
    type: 'Instance Swap',
    defaultValue: '25:399486'
  }
}
