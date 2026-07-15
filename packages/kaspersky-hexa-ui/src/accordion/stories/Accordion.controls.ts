import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'
import { IndicatorModes } from '@src/indicator/types'
import { tagModes } from '@src/tag/types'

import { accordionTitleSizes } from '../types'

export const accordionElementBeforeOptions = [
  'none',
  'statusOkSolid',
  'star',
  'indicator'
] as const

export const accordionElementAfterOptions = [
  'none',
  'statusOkSolid',
  'userAccount'
] as const

export const accordionActionsOptions = [
  'none',
  'default'
] as const

const booleanControl = { type: 'boolean' } as const

export const defaultArgs = {
  accordion: false,
  additionalText: '',
  disabled: false,
  shouldDisableActions: true,
  indicatorMode: IndicatorModes[0],
  tagAfterMode: tagModes[0],
  tagAfterLabel: 'after',
  tagBeforeMode: tagModes[0],
  tagBeforeLabel: 'before',
  testId: 'accordion-test-id',
  title: 'Title',
  elementBefore: 'none' as const,
  elementAfter: 'none' as const,
  actions: 'default' as const,
  withBorder: true,
  expandIconPosition: 'right' as const
}

export const accordionPropPresentation: PropPresentationMap = {
  withBorder: {
    control: 'boolean',
    description: 'Вид панелей аккордеона — с рамкой или без'
  },
  title: {
    control: 'text',
    description: 'Заголовок панели аккордеона'
  },
  titleSize: {
    control: 'select',
    description: 'Размер заголовка',
    options: [...accordionTitleSizes]
  },
  additionalText: {
    control: 'text',
    description: 'Текст справа от заголовка'
  },
  elementBefore: {
    control: 'select',
    description: 'Элемент перед заголовком (ReactNode)',
    options: [...accordionElementBeforeOptions]
  },
  elementAfter: {
    control: 'select',
    description: 'Элемент после additionalText (ReactNode)',
    options: [...accordionElementAfterOptions]
  },
  tagAfterMode: {
    description: 'Вид тега в заголовке',
    control: 'text'
  },
  tagAfterLabel: {
    description: 'Текст тега в заголовке',
    control: 'text'
  },
  disabled: extendPropPresentation({
    control: booleanControl,
    description: 'Состояние disabled'
  }),
  actions: {
    control: 'select',
    description: 'Иконка действий в заголовке',
    options: [...accordionActionsOptions]
  },
  shouldDisableActions: {
    control: 'boolean',
    description: 'Отключать меню actions вместе с панелью'
  },
  expandIconPosition: {
    control: 'radio',
    options: ['left', 'right'],
    description: 'Позиция иконки раскрытия панели'
  }
}
