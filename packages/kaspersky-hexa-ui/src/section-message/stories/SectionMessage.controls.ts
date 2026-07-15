import { PropPresentationMap } from '@sb/components/Documentation'

import { sectionMessageModes } from '../types'

export const defaultArgs = {
  mode: 'info' as const,
  title: 'Title',
  children: 'Текст сообщения',
  closable: true,
  expandable: false,
  defaultExpanded: true
}

export const sectionMessagePropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Семантический стиль компонента',
    options: [...sectionMessageModes]
  },
  title: {
    control: 'text',
    description: 'Заголовок сообщения'
  },
  children: {
    control: 'text',
    description: 'Текст сообщения'
  },
  closable: {
    control: 'boolean',
    description: 'Показывать кнопку закрытия'
  },
  expandable: {
    control: 'boolean',
    description: 'Показывать кнопку сворачивания содержимого'
  },
  defaultExpanded: {
    control: 'boolean',
    description: 'Начальное состояние — развёрнуто (true) или свёрнуто (false). Применяется только вместе с expandable'
  }
}
