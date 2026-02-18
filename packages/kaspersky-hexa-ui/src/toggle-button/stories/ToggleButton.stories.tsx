import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Space } from '@src/space'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useMemo, useState } from 'react'

import { Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import toggleButtonMeta from '../__meta__/toggleButtonMeta.json'
import { ToggleButton } from '../ToggleButton'
import { ToggleButtonGroup } from '../ToggleButtonGroup'
import { toggleButtonModes, toggleButtonSizes } from '../types'
import type { ToggleButtonGroupProps, ToggleButtonProps, ToggleButtonSize } from '../types'

const elementOptions = {
  '-': null,
  Placeholder: <Placeholder/>,
  Plus: <Plus/>,
  Settings: <Settings/>
}

const iconOptions = {
  '-': null,
  Badge: <Badge count={1}/>
}

const baseMeta: Meta<ToggleButtonProps> = {
  component: ToggleButton,
  args: {
    text: 'Toggle Button',
    disabled: false,
    loading: false,
    size: 'medium',
    mode: 'marina',
    iconBefore: 'Placeholder',
    elementAfter: '-',
    onChange: () => {},
    value: 'toggle-value',
    testId: 'toggle-button'
  },
  argTypes: {
    size: { options: toggleButtonSizes, control: { type: 'select' } },
    mode: { options: toggleButtonModes, control: { type: 'select' } },
    iconBefore: {
      options: Object.keys(elementOptions),
      control: { type: 'select' },
      mapping: elementOptions
    },
    elementAfter: {
      options: Object.keys(iconOptions),
      control: { type: 'select' },
      mapping: iconOptions
    },
    onChange: { control: false }
  },
  parameters: {
    docs: { page: withMeta(MetaData) },
    controls: {
      exclude: /(testId|componentType|theme|style|className|id)/
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<ToggleButtonProps> = {
  title: 'Hexa UI Components/ToggleButton',
  ...withDesignControls<ToggleButtonProps>({
    componentName: 'toggleButton',
    meta: baseMeta,
    designArgs: {
      iconBefore: 'Placeholder',
      elementAfter: '-'
    }
  })
}

export default meta

type Story = StoryObj<ToggleButtonProps>
type StoryGroup = StoryObj<ToggleButtonGroupProps>

export const Basic: Story = {}

export const Mode: Story = {
  render: (args) => (
    renderVariants(
      toggleButtonModes.map((m) => ({
        label: m,
        content: <ToggleButton {...args} mode={m} text={m} />
      })),
      true
    )
  ),
  argTypes: { mode: { control: false }, text: { control: false } }
}

export const Size: Story = {
  render: (args) => (
    renderVariants(
      toggleButtonSizes.map((s) => ({
        label: s,
        content: <ToggleButton {...args} size={s} text={s} />
      })),
      true
    )
  ),
  argTypes: { size: { control: false }, text: { control: false } }
}

export const IconOnly: Story = {
  render: (args) => (
    renderVariants(
      toggleButtonSizes.map((s) => ({
        label: s,
        content: <ToggleButton {...args} size={s} text={undefined} tooltip="tooltip text" />
      })),
      true
    )
  ),
  argTypes: { 
    text: { control: false }, 
    size: { control: false }, 
    iconBefore: { control: false }, 
    elementAfter: { control: false }
  }
}

const ControllableToggleButtonGroup = (props: ToggleButtonGroupProps & { itemsSize?: ToggleButtonSize }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(props.value || ['default'])
  
  const itemsWithSize = useMemo(() => 
    props.items.map(item => ({
      ...item,
      size: props.itemsSize || item.size || 'medium'
    })), [props.items, props.itemsSize]
  )
  
  return (
    <Space style={{width: '600px'}} gap="related">
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
    },
    design: toggleButtonMeta.pixsoView
  }
} as Meta<ToggleButtonGroupProps & { itemsSize?: ToggleButtonSize }>
