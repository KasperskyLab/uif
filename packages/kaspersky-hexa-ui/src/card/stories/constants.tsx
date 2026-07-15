import { Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'
import { Map } from '@kaspersky/hexa-ui-icons/24'

import { CardProps, CardTitleProps } from '../types'

export const cardContentInner =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu. Fusce accumsan erat purus.'

export const cardContent = <Text>{cardContentInner}</Text>

export const StoryWrapper = styled.div`
  width: 400px;
`

export const defaultTitle: CardTitleProps = {
  value: 'Title',
  elementBefore: <Map />,
  elementAfter: {
    component: 'text',
    children: 'Text',
    type: 'BTM3'
  },
  size: 'small'
}

export const longTitle: CardTitleProps = {
  value: cardContentInner,
  size: 'small',
  elementBefore: { component: 'checkbox' },
  elementAfter: { component: 'toggle' }
}

export const cardTitleRadioElement = {
  component: 'radio' as const,
  options: [
    { label: 'Option 1', value: 'option1' }
  ],
  value: 'option1'
}

export const defaultCardActions: NonNullable<CardProps['actions']> = [
  {
    icon: <Placeholder />,
    value: 'Action 1'
  },
  {
    icon: <Placeholder />,
    value: 'Action 2'
  }
]
