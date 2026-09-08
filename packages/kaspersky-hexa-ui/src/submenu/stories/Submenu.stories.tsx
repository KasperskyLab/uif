import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Submenu as SubmenuComponent } from '../Submenu'
import { SubmenuProps } from '../types'

import { defaultArgs, submenuPropPresentation } from './Submenu.controls'
import { mockedItems } from './mocks'

const StyledSidebarWithSubmenu = styled(Sidebar)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`

const meta = {
  title: 'Hexa UI Components/Submenu',
  component: SubmenuComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  argTypes: buildStoryArgTypes(submenuPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign]
  }
} satisfies Meta<SubmenuProps>

export default meta

type Story = StoryObj<SubmenuProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(submenuPropPresentation),
      sort: 'none'
    }
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu title="Sidebar" visible={isOpen} onClose={() => setIsOpen(false)}>
          <SubmenuComponent {...args} items={mockedItems} />
        </StyledSidebarWithSubmenu>
      </>
    )
  }
}
