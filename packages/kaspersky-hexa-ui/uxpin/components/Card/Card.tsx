import React from 'react'

import { Card as HexaCard } from '@src/card'
import { CardProps, CardTitleProps } from '@src/card/types'

const defaultTitle: CardTitleProps = {
  value: 'Card title',
  size: 'small'
}

const Card = ({
  children = 'Card content',
  title = defaultTitle,
  ...props
}: CardProps): JSX.Element => (
  <HexaCard title={title} {...props}>
    {children}
  </HexaCard>
)

export default Card
