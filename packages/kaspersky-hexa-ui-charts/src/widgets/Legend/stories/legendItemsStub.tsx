import React from 'react'

import { Link } from '@kaspersky/hexa-ui'
import { colors } from '@kaspersky/hexa-ui/design-system/tokens'
import Icons16 from '@kaspersky/hexa-ui-icons/16'

import { LegendItemType, TLegendItem } from '../types'

const LONG_TEXT = 'Velit elit cillum aliquip qui et incididunt ea id ad do duis'

export const legendItems: TLegendItem[] = [
  {
    kind: LegendItemType.Row,
    title: 'one',
    payload: undefined,
    color: colors.marengo500,
    value: Math.floor(Math.random() * 1000)
  },
  {
    kind: LegendItemType.Row,
    title: LONG_TEXT,
    icon: <Icons16.Battery />,
    payload: undefined,
    color: colors.grass500,
    value: Math.floor(Math.random() * 10000)
  },
  { kind: LegendItemType.Divider },
  {
    kind: LegendItemType.Row,
    title: <Link>{LONG_TEXT}</Link>,
    tooltip: LONG_TEXT,
    payload: undefined,
    color: colors.purple500,
    value: Math.floor(Math.random() * 100000)
  }
]
