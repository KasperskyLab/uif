import { Text } from '@src/typography'
import React, { FC } from 'react'
import styled from 'styled-components'

import { ScheduleLegendProps } from '../types'
import { dotCss, LegendContainer, LegendItem } from '../weeklyScheduleCss'

const Dot = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${dotCss}`

export const ScheduleLegend: FC<ScheduleLegendProps> = ({ cssConfig, legend }: ScheduleLegendProps) => {
  return (
    <LegendContainer>
      <LegendItem>
        <Dot cssConfig={cssConfig} selected={true} />
        <Text type="BTR4" themedColor="primary">
        - {legend.selected}
      </Text>
      </LegendItem>
      <LegendItem>
        <Dot cssConfig={cssConfig} />
        <Text type="BTR4" themedColor="primary">
          - {legend.notSelected}
        </Text>
      </LegendItem>
    </LegendContainer>
  )
}
