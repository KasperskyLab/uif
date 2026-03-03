import React, { FC } from 'react'
import { VictoryContainer } from 'victory'

import { ContainerBaseProps } from '../../types/chart'

export type ContainerProps = ContainerBaseProps;

export const Container: FC<ContainerProps> = ({ children, ...props }) => (
  <VictoryContainer {...props} style={{ ...props.style, height: props.height, width: props.width }}>
    {children}
  </VictoryContainer>
)
