import React, { FC, memo } from 'react'

import { Popover } from '@kaspersky/hexa-ui'

import { CustomTheme } from '../../hooks/useChartTheme'

import styles from './ChartTooltip.module.scss'

export type ChartTooltipProps = {
  theme?: CustomTheme,
  tooltipContentComponent: FC,
  activeRecord?: unknown,
  enrichedData?: unknown,
  horizontal?: boolean,
  totalStacks?: number,
  otherLabel?: string
};

export const ChartTooltip: FC<ChartTooltipProps> = memo(
  ({
    tooltipContentComponent: TooltipContentComponent,
    horizontal = false,
    ...rest
  }) => (
    <Popover
      content={<TooltipContentComponent {...rest} />}
      placement={horizontal ? 'right' : 'top'}
      shouldLimitSize
      defaultVisible
      destroyTooltipOnHide
      overlayClassName={styles.disablePointEvents}
    >
      <div />
    </Popover>
  )
)

ChartTooltip.displayName = 'ChartTooltip'
