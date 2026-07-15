import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Dropdown as DropdownComponent } from '../Dropdown'
import { dropdownPropPresentation } from './Dropdown.controls'
import { defaultDropdownOverlay } from './dropdownStoryFixtures'
import { DropdownProps, Trigger } from '../types'

type DropdownPlaygroundProps = Omit<DropdownProps, 'children' | 'trigger'> & {
  children: string
  trigger: Trigger
}

const dropdownBaseArgs: Partial<DropdownProps> = {
  overlay: defaultDropdownOverlay,
  disabled: false,
  loading: false,
  placement: 'bottomLeft',
  testId: 'dropdown-test-id',
  klId: 'dropdown-kl-id'
}

export const dropdownStorySettings: Meta<DropdownProps> = {
  argTypes: buildStoryArgTypes(dropdownPropPresentation),
  args: {
    ...dropdownBaseArgs,
    trigger: ['click']
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof DropdownComponent> = {
  title: 'Hexa UI Components/Dropdown',
  component: DropdownComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['dropdownStorySettings'],
  ...dropdownStorySettings
}

export default meta

type Story = StoryObj<DropdownPlaygroundProps>

export const Playground: Story = {
  name: 'Playground',
  args: {
    ...dropdownBaseArgs,
    children: 'Open dropdown',
    trigger: 'click'
  },
  render: ({ children, trigger, ...rest }: DropdownPlaygroundProps) => (
    <div style={{ padding: '300px' }}>
      <DropdownComponent {...rest} trigger={[trigger]}>
        {children}
      </DropdownComponent>
    </div>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(dropdownPropPresentation),
      sort: 'none'
    }
  }
}
