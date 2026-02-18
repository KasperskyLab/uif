import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Link } from '@src/link'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import MetaData from './__meta__/meta.json'
import { ExpandableText } from './ExpandableText'
import { ExpandableTextProps } from './types'

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.'

const meta: Meta<ExpandableTextProps> = {
  title: 'Hexa UI Components/ExpandableText',
  component: ExpandableText,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    children: defaultText,
    'data-testid': 'expandable-text-kl-id',
    className: 'expandable-text'
  },
  decorators: [
    (Story, context) => (
      <StoryColumn style={{ minWidth: '100px', maxWidth: '400px' }}>
        <Story {...context}/>
      </StoryColumn>
    )
  ],
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<ExpandableTextProps>

export const Basic: Story = {}

export const WithLink: Story = {
  args: {
    children: <Link decoration="icon" href="https://www.kaspersky.com" target="_blank">{defaultText}</Link>
  }
}

const textWithLineBreaks = [defaultText, defaultText, defaultText].join('\n')
export const WithLineBreaks: Story = {
  args: {
    children: textWithLineBreaks
  },
  render: (args) => {
    const [expanded, setExpanded] = useState(false)
    return <ExpandableText onExpand={setExpanded} style={{ whiteSpace: expanded ? 'pre-wrap' : 'pre' }} {...args} />
  }
}
