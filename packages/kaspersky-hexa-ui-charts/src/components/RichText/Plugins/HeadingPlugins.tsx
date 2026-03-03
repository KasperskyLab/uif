import React from 'react'

import { Heading } from '@kaspersky/hexa-ui/src/typography/heading'
import { H1, H2, H3 } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const HeadingOnePlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_ONE,
  icon: <H1 />,
  render: ({ attributes, children }) => (
    <Heading type="H4" {...attributes}>
      {children}
    </Heading>
  )
}

export const HeadingTwoPlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_TWO,
  icon: <H2 />,
  render: ({ attributes, children }) => (
    <Heading type="H5" {...attributes}>
      {children}
    </Heading>
  )
}

export const HeadingThreePlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_THREE,
  icon: <H3 />,
  render: ({ attributes, children }) => (
    <Heading type="H6" {...attributes}>
      {children}
    </Heading>
  )
}
