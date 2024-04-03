import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { StoryColumn } from '@sb/StoryComponents'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import { ExpandableText } from './ExpandableText'
import { ExpandableTextProps } from '@src/expandable-text/types'
import MetaData from './__meta__/meta.json'
import { Link } from '@src/link'

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.'

const meta: Meta<ExpandableTextProps> = {
  title: 'Atoms/ExpandableText',
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
    badges: [badges.dev],
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
