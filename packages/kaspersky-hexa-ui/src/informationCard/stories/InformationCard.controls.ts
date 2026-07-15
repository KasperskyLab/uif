import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { InformationCardSize, InformationCardType } from '../types'

import {
  contentVariantOptions,
  footerVariantOptions,
  leftSideVariantOptions,
  rightCornerVariantOptions
} from './constants'

const informationCardTypes: InformationCardType[] = ['vertical', 'horizontal', 'center']
const informationCardSizes: InformationCardSize[] = ['small', 'medium']

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  type: 'vertical' as InformationCardType,
  size: 'medium' as InformationCardSize,
  selected: false,
  disabled: false,
  interactive: false,
  width: '450px',
  title: 'Heading',
  description: 'To protect your mailboxes, OneDrive files, and SharePoint Online sites, Kaspersky Security for Microsoft Office 365 needs limited access to Office 365.',
  leftSideVariant: 'none' as const,
  rightCornerVariant: 'none' as const,
  contentVariant: 'none' as const,
  footerVariant: 'none' as const
}

export const informationCardPropPresentation: PropPresentationMap = {
  type: {
    control: 'select',
    description: 'Расположение содержимого внутри карточки',
    options: [...informationCardTypes]
  },
  size: fromSharedProp('size', {
    options: [...informationCardSizes],
    description: 'Размер внутренних отступов и типографики заголовка'
  }),
  selected: {
    control: 'boolean',
    description: 'Включает выбранное состояние карточки'
  },
  disabled: fromSharedProp('disabled'),
  interactive: {
    control: 'boolean',
    description: 'Включает состояния hover, active и focus для кликабельной карточки'
  },
  width: {
    control: 'text',
    description: 'Ширина карточки: число в px или строка с CSS-значением'
  },
  title: {
    control: 'text',
    description: 'Заголовок карточки'
  },
  description: {
    control: 'text',
    description: 'Краткое описание под заголовком'
  },
  leftSideVariant: {
    control: 'select',
    description: 'Элемент слева от основного содержимого карточки',
    options: [...leftSideVariantOptions]
  },
  rightCornerVariant: {
    control: 'select',
    description: 'Элемент справа в заголовке. Отображается только вместе с заголовком',
    options: [...rightCornerVariantOptions]
  },
  contentVariant: {
    control: 'select',
    description: 'Дополнительное содержимое между шапкой и футером',
    options: [...contentVariantOptions]
  },
  footerVariant: {
    control: 'select',
    description: 'Набор действий в нижней части карточки',
    options: [...footerVariantOptions]
  }
}
