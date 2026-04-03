import React from 'react'

import { Label as HexaLabel } from '@src/label'
import { Textbox } from '@src/input'
import { LabelProps } from '@src/label/types'

const Label = ({
  children = <Textbox placeholder="Value" />,
  text = 'Label',
  ...props
}: LabelProps): JSX.Element => (
  <HexaLabel text={text} {...props}>
    {children}
  </HexaLabel>
)

export default Label
