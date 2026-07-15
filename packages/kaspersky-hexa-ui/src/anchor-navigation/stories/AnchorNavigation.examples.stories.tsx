import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { AnchorNavigation } from '../AnchorNavigation'
import { AnchorNavigationProps } from '../types'

import { anchorNavigationStorySettings } from './AnchorNavigation.stories'
import {
  anchorItems,
  dummyText,
  renderAnchorContent
} from './constants'

const meta = {
  title: 'Hexa UI Components/AnchorNavigation/Stories',
  component: AnchorNavigation,
  tags: ['!autodocs'],
  parameters: anchorNavigationStorySettings.parameters,
  args: {
    title: 'Page Content',
    items: anchorItems.slice(0, 10)
  }
} satisfies Meta<typeof AnchorNavigation>

export default meta

type Story = StoryObj<AnchorNavigationProps>

export const WithManyItems: Story = {
  render: (args: AnchorNavigationProps) => (
    <>
      <P style={{ marginBottom: '1em' }}>{dummyText}</P>

      <AnchorNavigation {...args}>
        {renderAnchorContent(args.items)}
      </AnchorNavigation>
    </>
  ),
  args: {
    items: anchorItems
  }
}

export const WithSidebar: Story = {
  render: (args: AnchorNavigationProps) => {
    const [isOpen, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Sidebar
          title="Sidebar"
          visible={isOpen}
          onClose={() => setOpen(false)}
        >
          <P style={{ marginBottom: '1em' }}>{dummyText}</P>

          <AnchorNavigation {...args}>
            {renderAnchorContent(args.items)}
          </AnchorNavigation>
        </Sidebar>
      </>
    )
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}
