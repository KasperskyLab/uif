import { StoryColumn } from '@sb/StoryComponents'
import { Link } from '@src/link'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { ExpandableText as ExpandableTextComponent } from '../ExpandableText'
import { ExpandableTextProps } from '../types'
import {
  EXPANDABLE_TEXT_MOCK_BODY,
  EXPANDABLE_TEXT_MOCK_WITH_BREAKS
} from './expandableTextStoryData'
import { expandableTextStorySettings } from '../ExpandableText.stories'

const meta: Meta<typeof ExpandableTextComponent> = {
  title: 'Hexa UI Components/ExpandableText/Stories',
  component: ExpandableTextComponent,
  tags: ['!autodocs'],
  ...expandableTextStorySettings
}

export default meta

type Story = StoryObj<ExpandableTextProps>

export const Basic: Story = {}

export const WithLink: Story = {
  args: {
    children: (
      <Link decoration="icon" href="https://www.kaspersky.com" target="_blank">
        {EXPANDABLE_TEXT_MOCK_BODY}
      </Link>
    )
  }
}

export const WithLineBreaks: Story = {
  args: {
    children: EXPANDABLE_TEXT_MOCK_WITH_BREAKS
  },
  render: (args) => {
    const [expanded, setExpanded] = useState(false)
    return (
      <StoryColumn style={{ minWidth: '100px', maxWidth: '400px' }}>
        <ExpandableTextComponent
          onExpand={setExpanded}
          style={{ whiteSpace: expanded ? 'pre-wrap' : 'pre' }}
          {...args}
        />
      </StoryColumn>
    )
  }
}

export const WithGradient: Story = {
  args: {
    useGradient: true
  }
}
