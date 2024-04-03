import React, { CSSProperties } from 'react'
import MetaData from './__meta__/meta.json'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { ActionButton } from '@src/action-button'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Text } from '@src/typography'
import { Popover } from './Popover'
import { PopoverProps } from './types'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { StatusInfoOutline } from '@kaspersky/icons/16'

const meta: Meta<PopoverProps> = {
  title: 'Atoms/Popover',
  component: Popover,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    placement: 'bottom'
  },
  parameters: {
    badges: [badges.needsDesignReview],
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
  <Space size={12} direction="vertical" align="flex-start" width="200px">
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
  <Space size={20} wrap="nowrap" align="flex-start">
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
      <Space size={20} direction="vertical">
        <Space size={10}>
          <Text>Click to see Popover (<b>simple</b> content)</Text>
          <Popover {...args} content={SimplePopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
        <Space size={10}>
          <Text>Click to see Popover (<b>complex</b> content)</Text>
          <Popover {...args} content={CompexPopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
        <Space size={10}>
          <Text>Click to see Popover (<b>overflow</b> content)</Text>
          <Popover {...args} content={OverflowPopoverContent}>
            <ActionButton interactive={false} icon={<StatusInfoOutline />} />
          </Popover>
        </Space>
      </Space>
    </div>
  )
}

export const Positions: Story = {
  render: (args: PopoverProps) => (
    <div style={{ paddingLeft: '450px', paddingTop: '200px' }}>
      <div>
        <div style={{ marginLeft: 70 }}>
          <Popover {...args} placement="top" content={LittlePopoverContent}>
            <Button>Top</Button>
          </Popover>
        </div>
        <div style={{ float: 'left' }}>
          <Popover {...args} placement="left" content={LittlePopoverContent}>
            <Button>Left</Button>
          </Popover>
        </div>
        <div style={{ marginLeft: 70 * 2 }}>
          <Popover {...args} placement="right" content={LittlePopoverContent}>
            <Button>Right</Button>
          </Popover>
        </div>
        <div style={{ marginLeft: 70 }}>
          <Popover {...args} placement="bottom" content={LittlePopoverContent}>
            <Button>Bottom</Button>
          </Popover>
        </div>
      </div>
    </div>
  )
}
