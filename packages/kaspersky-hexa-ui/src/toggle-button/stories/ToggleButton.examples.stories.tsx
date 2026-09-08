import { renderVariants } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Space } from '@src/space'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useMemo, useState } from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ToggleButton as ToggleButtonComponent } from '../ToggleButton'
import { ToggleButtonGroup } from '../ToggleButtonGroup'
import { toggleButtonModes, toggleButtonSizes } from '../types'
import type {
  ToggleButtonGroupProps,
  ToggleButtonProps,
  ToggleButtonSize
} from '../types'

const meta = {
  title: 'Hexa UI Components/ToggleButton/Stories',
  component: ToggleButtonComponent,
  tags: ['!autodocs'],
  args: {
    text: 'Toggle button',
    value: 'toggle-button',
    iconBefore: <Placeholder />
  }
} satisfies Meta<typeof ToggleButtonComponent>

export default meta

type Story = StoryObj<ToggleButtonProps>
type StoryGroup = StoryObj<ToggleButtonGroupProps & { itemsSize?: ToggleButtonSize }>

export const Basic: Story = {
  args: {
    text: 'Toggle button',
    value: 'toggle-button'
  }
}

export const Mode: Story = {
  render: (args) => renderVariants(
    toggleButtonModes.map(mode => ({
      label: mode,
      content: <ToggleButtonComponent {...args} mode={mode} text={mode} />
    })),
    true
  )
}

export const Size: Story = {
  render: (args) => renderVariants(
    toggleButtonSizes.map(size => ({
      label: size,
      content: <ToggleButtonComponent {...args} size={size} text={size} />
    })),
    true
  )
}

export const IconOnly: Story = {
  render: (args) => renderVariants(
    toggleButtonSizes.map(size => ({
      label: size,
      content: (
        <ToggleButtonComponent
          {...args}
          iconBefore={<Placeholder />}
          size={size}
          text={undefined}
          tooltip="Tooltip text"
        />
      )
    })),
    true
  )
}

const ControllableToggleButtonGroup = (
  props: ToggleButtonGroupProps & { itemsSize?: ToggleButtonSize }
) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(props.value)
  const itemsWithSize = useMemo(() => props.items.map(item => ({
    ...item,
    size: props.itemsSize || item.size || 'medium'
  })), [props.items, props.itemsSize])

  return (
    <Space style={{ width: '600px' }} gap="related">
      <ToggleButtonGroup
        {...props}
        items={itemsWithSize}
        value={selectedValues}
        onChange={setSelectedValues}
      />
    </Space>
  )
}

export const ButtonGroupWithControls: StoryGroup = {
  name: 'ToggleButtonGroup',
  render: ControllableToggleButtonGroup,
  args: {
    isStretch: false,
    disabled: false,
    loading: false,
    itemsSize: 'medium',
    testId: 'toggle-button-group',
    value: ['one'],
    items: [
      {
        text: 'One',
        mode: 'marina',
        iconBefore: <Placeholder />,
        value: 'one'
      },
      {
        text: 'Two',
        mode: 'red',
        iconBefore: <Placeholder />,
        elementAfter: <Badge count={1} />,
        value: 'two'
      },
      {
        text: 'Three',
        mode: 'orange',
        iconBefore: <Placeholder />,
        disabled: true,
        value: 'three'
      },
      {
        text: 'Four',
        mode: 'violet',
        elementAfter: <Badge count={32} />,
        value: 'four'
      },
      {
        text: 'long '.repeat(50),
        mode: 'violet',
        elementAfter: <Badge count={32} />,
        value: 'five'
      }
    ]
  },
  argTypes: {
    isStretch: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    itemsSize: {
      options: toggleButtonSizes,
      control: { type: 'select' }
    }
  },
  parameters: {
    controls: {
      include: ['isStretch', 'disabled', 'loading', 'itemsSize']
    }
  }
}
