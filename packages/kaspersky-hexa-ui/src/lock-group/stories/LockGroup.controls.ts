import { PropPresentationMap } from '@sb/components/Documentation'

import { statusIcons } from '../types'

export const lockGroupStatusIconOptions = ['none', ...statusIcons] as const

export const defaultArgs = {
  title: 'Заголовок',
  titleLevel: 'H6' as const,
  statusText: 'Настройка доступна для редактирования',
  informationText: 'Изменение настройки влияет на связанные элементы.',
  statusIcon: 'warning' as const,
  statusTooltip: 'Внимание',
  isLockClosed: false,
  isLockDisabled: false,
  isLockStatusNotDefined: false,
  isGroupDisabled: false,
  isHideLock: false,
  isHideControl: false,
  isStandalone: false,
  isChildrenOutlined: false
}

export const lockGroupPropPresentation: PropPresentationMap = {
  isLockClosed: {
    control: 'boolean',
    description: 'Состояние замка и переключателя'
  },
  isLockDisabled: {
    control: 'boolean',
    description: 'Отключает переключатель замка'
  },
  isLockStatusNotDefined: {
    control: 'boolean',
    description: 'Показывает неопределённый статус и отключает переключатель'
  },
  isGroupDisabled: {
    control: 'boolean',
    description: 'Отключает дочерние элементы группы'
  },
  isHideLock: {
    control: 'boolean',
    description: 'Скрывает иконку замка'
  },
  isHideControl: {
    control: 'boolean',
    description: 'Скрывает блок статуса и переключатель'
  },
  isStandalone: {
    control: 'boolean',
    description: 'Показывает только блок управления замком'
  },
  isChildrenOutlined: {
    control: 'boolean',
    description: 'Добавляет рамку вокруг дочерних элементов'
  },
  title: {
    control: 'text',
    description: 'Заголовок группы'
  },
  titleLevel: {
    control: 'select',
    description: 'Уровень типографики заголовка',
    options: ['H6', 'H5', 'H4']
  },
  statusText: {
    control: 'text',
    description: 'Текст рядом с переключателем'
  },
  informationText: {
    control: 'text',
    description: 'Содержимое информационной подсказки'
  },
  statusIcon: {
    control: 'select',
    description: 'Иконка статуса перед замком',
    options: [...lockGroupStatusIconOptions]
  },
  statusTooltip: {
    control: 'text',
    description: 'Текст подсказки для иконки статуса'
  }
}
