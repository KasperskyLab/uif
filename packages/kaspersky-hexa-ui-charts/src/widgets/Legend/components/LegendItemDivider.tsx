import React from 'react'

import { Divider, DividerProps } from '@kaspersky/hexa-ui'

type LegendItemDividerProps = Pick<DividerProps, 'className'>

export const LegendItemDivider: React.FC<LegendItemDividerProps> = Divider
