import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { StoryLayout } from '@sb/StoryComponents'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { ActionButton, ActionButtonProps } from './index'

const meta: Meta<ActionButtonProps> = {
  component: ActionButton,
  title: 'Atoms/Action Button',
  argTypes: {
    ...sbHideControls(['theme', 'icon'])
  },
  args: {
    mode: 'ghost',
    size: 'medium',
    children: 'Action',
    interactive: true,
    disabled: false,
    noIcon: false,
    testId: 'action-button-test-id',
    klId: 'action-button-kl-id'
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<ActionButtonProps>

export const Basic: Story = {}

export const Modes: Story = {
  render: ({
    mode,
    children,
    ...rest
  }: ActionButtonProps) => (
    <StoryLayout inverted={['ghostInverted', 'filledInverted'].includes(mode as string)}>
      <ActionButton {...rest} mode={mode}>{children}</ActionButton>
    </StoryLayout>
  )
}

export const WithIcon: Story = {
  args: {
    children: undefined
  }
}

export const WithLabel: Story = {
  args: {
    noIcon: true
  }
}
