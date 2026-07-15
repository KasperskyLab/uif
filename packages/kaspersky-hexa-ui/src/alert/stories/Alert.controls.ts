import { PropPresentationMap } from '@sb/components/Documentation'

import { alertModes } from '../types'

export const alertPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Семантический стиль компонента',
    options: [...alertModes]
  },
  children: {
    control: 'text',
    description: 'Текст сообщения'
  },
  closable: {
    control: 'boolean',
    description: 'Показывать кнопку закрытия'
  },
  width: {
    control: 'text',
    description: 'Ширина компонента в px'
  }
}
