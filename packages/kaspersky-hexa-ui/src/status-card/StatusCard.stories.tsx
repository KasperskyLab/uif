import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Link } from '@src/link'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { StatusCard as StatusCardComponent } from './StatusCard'
import { iconVariants, statusCardModes, StatusCardProps, statusCardSizes } from './types'

const DefaultDescription = () => (
  <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link href="#">Nullam nulla</Link> purus, aliquam at massa at, imperdiet malesuada neque. Sed mollis <Link href="#">accumsan</Link> quam ac ultrices. Vestibulum rhoncus ante sit amet gravida ornare.</>
)

const DefaultChildren = () => (
  <span>
    <Tag mode="purple" interactive outlined>Custom content</Tag>
    <Tag mode="violet" interactive outlined>More custom content</Tag>
  </span>
)

const defaultActions: StatusCardProps['actions'] = [
  {
    text: 'Action 1',
    onClick: () => alert('Action 1')
  },
  {
    text: 'Action 2',
    onClick: () => alert('Action 2')
  },
  {
    text: 'Action 3',
    onClick: () => alert('Action 3')
  }
]

const meta: Meta<StatusCardProps> = {
  component: StatusCardComponent,
  title: 'Hexa UI Components/Status Card',
  ...withDesignControls<StatusCardProps>({
    componentName: 'statusCard',
    meta: {
      argTypes: {
        mode: {
          control: 'select',
          options: statusCardModes
        },
        size: {
          control: 'radio',
          options: statusCardSizes
        },
        iconVariant: {
          control: 'radio',
          options: iconVariants
        },
        actions: {
          control: 'boolean'
        },
        description: {
          control: 'boolean'
        },
        children: {
          control: 'boolean'
        }
      },
      args: {
        title: 'Title',
        image: true,
        description: true,
        children: true,
        mode: 'success',
        size: 'medium',
        iconVariant: 'default',
        testId: 'status-card-test-id',
        klId: 'status-card-kl-id'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.figmaView
      }
    }
  })
}
export default meta

type StoryStatusCardProps = Omit<StatusCardProps, 'actions' | 'children' | 'description'> & {
  actions: boolean,
  description: boolean,
  children: boolean
}

type Story = StoryObj<StoryStatusCardProps>

export const StatusCard: Story = {
  render: ({ actions, description, children, ...rest }) => (
    <StatusCardComponent
      {...rest}
      actions={actions ? defaultActions : undefined}
      description={description ? <DefaultDescription /> : undefined}
    >
      {children ? <DefaultChildren /> : null}
    </StatusCardComponent>
  )
}

export const Mode: Story = {
  render: ({ actions, description, children, ...rest }) =>
    renderVariants(
      statusCardModes.map(mode => ({
        label: mode,
        content: (
          <StatusCardComponent
            {...rest}
            mode={mode}
            actions={actions ? defaultActions : undefined}
            description={description ? <DefaultDescription /> : undefined}
            key={mode}
          >
            {children ? <DefaultChildren /> : null}
          </StatusCardComponent>
        )
      })),
      true
    ),
  argTypes: {
    mode: { control: false }
  },
  args: {
    children: false
  }
}

export const Size: Story = {
  render: ({ actions, description, children, ...rest }) =>
    renderVariants(
      statusCardSizes.map(size => ({
        label: size,
        content: (
          <StatusCardComponent
            {...rest}
            size={size}
            actions={actions ? defaultActions : undefined}
            description={description ? <DefaultDescription /> : undefined}
            key={size}
          >
            {children ? <DefaultChildren /> : null}
          </StatusCardComponent>
        )
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  },
  args: {
    children: false
  }
}

export const WithActions: Story = {
  render: ({ actions, description, children, ...rest }) => (
    <StatusCardComponent
      {...rest}
      actions={actions ? defaultActions : undefined}
      description={description ? <DefaultDescription /> : undefined}
    >
      {children ? <DefaultChildren /> : null}
    </StatusCardComponent>
  ),
  argTypes: {
    actions: { control: false }
  },
  args: {
    actions: true
  }
}
