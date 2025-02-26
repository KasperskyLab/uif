import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { StatusInfoOutline } from '@kaspersky/icons/16'

import MetaData from './__meta__/meta.json'
import { Popover } from './Popover'
import { PopoverProps } from './types'

const meta: Meta<PopoverProps> = {
  title: 'Hexa UI Components/Popover',
  component: Popover,
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'focus', 'hover']
    },
    ...sbHideControls(['theme'])
  },
  args: {
    trigger: 'click',
    placement: 'bottom',
    shouldLimitSize: true
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<PopoverProps>

const popoverContentColumnContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  flex: '1 1 50%'
}

const FillText: React.FC = () => (
  <Text>
    User anomaly behavior analysis tracks the following events:
    <ul>
      <li>Login failure</li>
      <li>Creation of a new administrator account</li>
      <li>Simultaneous login from different devices to an administrator account</li>
      <li>Login from a new device</li>
      <li>Login from a new location</li>
    </ul>
  </Text>
)

const LittlePopoverContent: React.FC = () => (
  <Space gap={12} direction="vertical" align="flex-start" width="200px">
    <Text>User anomaly behavior analysis tracks the following events</Text>
    <Link text="Online help" decoration="icon" size="medium" />
  </Space>
)

const SimplePopoverContent: React.FC = () => (
  <div>
    <FillText />
    <Link text="Online help" decoration="icon" size="medium" />
  </div>
)

const CompexPopoverContent: React.FC = () => (
  <Space gap={20} wrap="nowrap" align="flex-start">
    <div style={popoverContentColumnContainer}>
      <Textbox placeholder="Text 1" />
      <Textbox placeholder="Text 2" />
      <Textbox placeholder="Text 3" />
      <Link text="Link to external resource" decoration="icon" size="medium" />
    </div>
    <div style={popoverContentColumnContainer}>
      <FillText />
      <Link text="Online help" decoration="icon" size="medium" />
    </div>
  </Space>
)

const OverflowPopoverContent: React.FC = () => (
  <div style={{ display: 'flex', gap: 20, width: 700, height: 500 }}>
    <div style={popoverContentColumnContainer}>
      <Textbox placeholder="Text 1" />
      <Textbox placeholder="Text 2" />
      <Textbox placeholder="Text 3" />
      <Textbox placeholder="Text 4" />
      <Textbox placeholder="Text 5" />
      <Textbox placeholder="Text 6" />
      <Link text="Link to external resource" decoration="icon" size="medium" />
    </div>
    <div style={popoverContentColumnContainer}>
      <FillText />
      <FillText />
      <Link text="Online help" decoration="icon" size="medium" />
    </div>
  </div>
)

export const Basic: Story = {
  render: (args: PopoverProps) => (
    <div style={{ paddingLeft: '300px', paddingTop: '250px' }}>
      <Space gap={20} direction="vertical">
        <Space gap={10}>
          <Text>Click to see Popover (<b>simple</b> content)</Text>
          <Popover {...args} content={SimplePopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
        <Space gap={10}>
          <Text>Click to see Popover (<b>complex</b> content)</Text>
          <Popover {...args} content={CompexPopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
        <Space gap={10}>
          <Text>Click to see Popover (<b>overflow</b> content)</Text>
          <Popover {...args} content={OverflowPopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
      </Space>
    </div>
  )
}

const buttonWidth = 80

const StyledButton = styled(Button)`
  margin: 8px;
`

export const Positions: Story = {
  render: (args: PopoverProps) => (
    <div style={{ paddingLeft: '300px', paddingTop: '150px' }}>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement="topLeft" content={LittlePopoverContent}>
          <StyledButton>TL</StyledButton>
        </Popover>
        <Popover placement="top" content={LittlePopoverContent}>
          <StyledButton>Top</StyledButton>
        </Popover>
        <Popover placement="topRight" content={LittlePopoverContent}>
          <StyledButton>TR</StyledButton>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement="leftTop" content={LittlePopoverContent}>
          <StyledButton>LT</StyledButton>
        </Popover>
        <Popover placement="left" content={LittlePopoverContent}>
          <StyledButton>Left</StyledButton>
        </Popover>
        <Popover placement="leftBottom" content={LittlePopoverContent}>
          <StyledButton>LB</StyledButton>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 32 }}>
        <Popover placement="rightTop" content={LittlePopoverContent}>
          <StyledButton>RT</StyledButton>
        </Popover>
        <Popover placement="right" content={LittlePopoverContent}>
          <StyledButton>Right</StyledButton>
        </Popover>
        <Popover placement="rightBottom" content={LittlePopoverContent}>
          <StyledButton>RB</StyledButton>
        </Popover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" content={LittlePopoverContent}>
          <StyledButton>BL</StyledButton>
        </Popover>
        <Popover {...args} placement="bottom" content={LittlePopoverContent}>
          <StyledButton>Bottom</StyledButton>
        </Popover>
        <Popover placement="bottomRight" content={LittlePopoverContent}>
          <StyledButton>BR</StyledButton>
        </Popover>
      </div>
    </div>
  )
}

export const ThreeWaysToTrigger: Story = {
  render: (args: PopoverProps) => (
    <div style={{ paddingLeft: '300px', paddingTop: '250px' }}>
      <Popover {...args} placement="topLeft" trigger="click" content={LittlePopoverContent}>
        <StyledButton>Click</StyledButton>
      </Popover>
      <Popover {...args} placement="top" trigger="hover" content={LittlePopoverContent}>
        <StyledButton>Hover</StyledButton>
      </Popover>
      <Popover {...args} placement="topRight" trigger="focus" content={LittlePopoverContent}>
        <StyledButton>Focus</StyledButton>
      </Popover>
    </div>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.popover },
  render: args => <ThemedPalette {...args} />
}
