import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Placeholder } from '@kaspersky/icons/16'

import MetaData from './__meta__/meta.json'
import { DetailsPage } from './DetailsPage'
import { DetailsPageProps } from './types'

const meta: Meta<DetailsPageProps> = {
  title: 'Hexa UI Components/DetailsPage',
  component: DetailsPage,
  argTypes: {
    ...sbHideControls(['theme', 'navigation', 'customButtons'])
  },
  args: {
    testId: 'details-page-test-id',
    klId: 'details-page-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

const actions = {
  FIRST_ACTION: {
    text: 'Action 1',
    onClick: () => alert('Action 1')
  },
  SECOND_ACTION: {
    text: 'Action 2',
    onClick: () => alert('Action 2')
  }
}

type Story = StoryObj<DetailsPageProps>

const DetailsPageWithButton = (props: DetailsPageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <DetailsPage
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        title="Details Page"
        navigation={[
          {
            text: 'Tab 1',
            iconBefore: <Placeholder />,
            key: 'tab-1',
            navigation: {
              items: [
                {
                  type: 'row',
                  text: 'Tab 1.1',
                  content: (
                    'Content 1.1'
                  ),
                  key: 'tab-1-1'
                },
                {
                  type: 'row',
                  text: 'Tab 1.2',
                  content: (
                    'Content 1.2'
                  ),
                  key: 'tab-1-2'
                }
              ]
            }
          },
          {
            text: 'Tab 2',
            iconAfter: <Placeholder />,
            key: 'tab-2',
            navigation: {
              items: [
                {
                  type: 'row',
                  text: 'Tab 2.1',
                  content: (
                    'Content 2.1'
                  ),
                  key: 'tab-2-1'
                },
                {
                  type: 'row',
                  text: 'Tab 2.2',
                  content: (
                    'Content 2.2'
                  ),
                  key: 'tab-2-2'
                },
                {
                  type: 'row',
                  text: 'Tab 2.3',
                  content: (
                    'Content 2.3'
                  ),
                  key: 'tab-2-3'
                }
              ]
            }
          },
          {
            text: 'Tab 3',
            iconAfter: <Placeholder />,
            key: 'tab-3',
            content: (
              'Content 3'
            )
          }
        ]}
        headerActions={<Toggle>Label</Toggle>}
        actions={actions}
        {...props}
      />
    </>
  )
}

export const Basic: Story = {
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />
}

export const WithThreeActions: Story = {
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: {
      ...actions,
      THIRD_ACTION: {
        text: 'Action 3',
        onClick: () => alert('Action 3')
      }
    }
  }
}

export const WithoutActions: Story = {
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: undefined
  }
}

export const WithoutNavigation: Story = {
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    navigation: undefined,
    children: 'Content'
  }
}
