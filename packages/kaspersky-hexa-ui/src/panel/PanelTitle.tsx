import { H4, H5, Text } from '@src/typography'
import React from 'react'

import { PanelTitleProps } from './types'

const TitleVariants = {
  small: Text,
  medium: H5,
  large: H4
}

export const PanelTitle = ({ text, size = 'large' }: PanelTitleProps): JSX.Element => {
  const TitleComponent = TitleVariants[size]
  return (<TitleComponent>{text}</TitleComponent>)
}
