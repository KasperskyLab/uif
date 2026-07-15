import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import type { LinkDecorationType, LinkSize } from '../types'

const linkSizes: LinkSize[] = ['medium', 'large', 'noSize']
const linkDecorations: LinkDecorationType[] = ['none', 'icon']
const iconPositionOptions = ['before', 'after'] as const
const targetOptions = ['_self', '_blank', '_parent', '_top'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const linkIconOptions = [
  'linkExternal',
  'arrowRight',
  'settingsGear',
  'placeholder'
] as const

export const defaultArgs = {
  size: 'noSize' as LinkSize,
  decoration: 'none' as LinkDecorationType,
  disabled: false,
  visited: false,
  iconPosition: 'after' as const,
  isTooltipVisible: true,
  text: 'Link',
  href: '#',
  target: '_self' as const,
  icon: 'linkExternal' as const
}

export const linkPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', { options: [...linkSizes] }),
  decoration: {
    description: 'Оформление: без иконки или с иконкой',
    control: 'select',
    options: [...linkDecorations]
  },
  disabled: fromSharedProp('disabled'),
  visited: {
    description: 'Визуальное состояние посещённой ссылки',
    control: 'boolean'
  },
  icon: {
    description: 'Иконка рядом с текстом. Отображается только при decoration="icon"',
    control: 'select',
    options: [...linkIconOptions]
  },
  iconPosition: {
    description: 'Позиция иконки относительно текста',
    control: 'select',
    options: [...iconPositionOptions]
  },
  isTooltipVisible: {
    description: 'Показывать тултип с href для ссылки с иконкой',
    control: 'boolean'
  },
  text: {
    control: 'text',
    description: 'Текст ссылки'
  },
  href: {
    control: 'text',
    description: 'URL ссылки'
  },
  target: {
    description: 'Атрибут target элемента <a>',
    control: 'select',
    options: [...targetOptions]
  }
}
