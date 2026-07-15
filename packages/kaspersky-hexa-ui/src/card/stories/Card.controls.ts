import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { CardMode, CardSize, CardTitleSize } from '../types'

import { cardContentInner } from './constants'

const cardModes: CardMode[] = ['base', 'filled', 'selected']
const cardSizes: CardSize[] = ['small', 'medium', 'large']
const cardTitleSizes: CardTitleSize[] = ['small', 'medium']

export const cardTitleElementBeforeOptions = [
  'none',
  'icon',
  'checkbox',
  'radio',
  'toggle'
] as const

export const cardTitleElementAfterOptions = [
  'none',
  'text',
  'toggle',
  'radio'
] as const

export const cardActionsModeOptions = ['none', 'single', 'multiple'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'base' as CardMode,
  size: 'medium' as CardSize,
  draggable: false,
  closable: false,
  interactive: false,
  maxHeight: '',
  contentText: cardContentInner,
  titleText: '',
  titleSize: 'small' as CardTitleSize,
  titleElementBefore: 'none' as const,
  titleElementAfter: 'none' as const,
  actionsMode: 'none' as const
}

export const cardPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Цветовой вариант карточки',
    options: [...cardModes]
  },
  size: fromSharedProp('size', {
    options: [...cardSizes],
    description: 'Размер внутренних отступов и компоновки'
  }),
  draggable: {
    control: 'boolean',
    description: 'Показывает иконку перетаскивания слева от карточки'
  },
  closable: {
    control: 'boolean',
    description: 'Показывает кнопку закрытия в области действий'
  },
  interactive: {
    control: 'boolean',
    description: 'Включает интерактивные состояния hover и active'
  },
  maxHeight: {
    control: 'text',
    description:
      'Максимальная высота контента. При превышении включается прокрутка (кроме size small)'
  },
  contentText: {
    control: 'text',
    description: 'Текст основного содержимого карточки'
  },
  titleText: {
    control: 'text',
    description: 'Текст заголовка. Пустая строка — заголовок не отображается'
  },
  titleSize: {
    control: 'select',
    description: 'Типографика заголовка: small — H6, medium — H5',
    options: [...cardTitleSizes]
  },
  titleElementBefore: {
    control: 'select',
    description: 'Элемент перед текстом заголовка',
    options: [...cardTitleElementBeforeOptions]
  },
  titleElementAfter: {
    control: 'select',
    description: 'Элемент после текста заголовка',
    options: [...cardTitleElementAfterOptions]
  },
  actionsMode: {
    control: 'select',
    description: 'Действия в шапке: одна кнопка или выпадающее меню',
    options: [...cardActionsModeOptions]
  }
}
