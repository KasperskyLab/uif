import { ThemeKey } from '@design-system/types'
import { badges } from '@sb/badges'
import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ThemeProvider } from '../../../design-system/theme'
import MetaData from '../__meta__/meta.json'
import Tag from '../Tag'
import { TagReductionGroup } from '../TagReductionGroup'
import { tagModes, TagProps, TagReductionGroupProps } from '../types'

const meta: Meta<TagProps> = {
  title: 'Hexa UI Components/Tag/Stories',
  component: Tag,
  tags: ['!autodocs'],
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

export default meta

type Story = StoryObj<TagProps>

type StateRow = StatesMatrixItem & {
  disabled?: boolean;
  readOnly?: boolean;
  outlined?: boolean;
}

type VariantColumn = StatesMatrixItem & {
  mode?: TagProps['mode'],
  size?: TagProps['size'],
  outlined?: boolean,
  icon?: boolean,
  closable?: boolean,
  interactive?: boolean
}

const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'disabled', label: 'Disabled', disabled: true },
  { key: 'readonly', label: 'ReadOnly', readOnly: true }
]

const variantColumns: VariantColumn[] = [
  {
    key: 'filled',
    label: 'Filled',
    mode: 'emerald',
    interactive: true
  },
  {
    key: 'outlined',
    label: 'Outlined',
    mode: 'emerald',
    outlined: true,
    interactive: true
  },
  {
    key: 'icon',
    label: 'Icon',
    mode: 'emerald',
    icon: true,
    interactive: true
  },
  {
    key: 'closable',
    label: 'Closable',
    mode: 'emerald',
    closable: true,
    interactive: true
  }
]

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <Tag
    mode={column.mode}
    size={column.size}
    outlined={column.outlined}
    icon={column.icon ? <Placeholder /> : undefined}
    closable={column.closable}
    interactive={column.interactive}
    disabled={row.disabled}
    readOnly={row.readOnly}
  >
    {column.label}
  </Tag>
)

const colorRows: StateRow[] = [
  { key: 'filled', label: 'Filled', outlined: false },
  { key: 'outlined', label: 'Outlined', outlined: true }
]

const modes = [
  'neutral',
  'purple',
  'grey',
  'marina',
  'red',
  'marengo',
  'emerald',
  'orange',
  'yellow',
  'violet',
  'grass',
  'ai'
] as const

const colorColumns: VariantColumn[] = modes.map((mode) => ({
  key: `color-${mode}`,
  label: `${mode.charAt(0).toUpperCase() + mode.slice(1)}`,
  mode: mode
}))

const renderColorStateCell = (row: StateRow, column: VariantColumn) => (
  <Tag
    mode={column.mode}
    outlined={row.outlined}
  >
    {column.label}
  </Tag>
)

export const States: Story = {
  parameters: {
    controls: { include: [] }
  },
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      renderCell={renderStateCell}
    />
  )
}

export const ModeVariants: Story = {
  parameters: {
    controls: { include: [] }
  },
  render: () => (
    <StatesMatrix
      rows={colorRows}
      columns={colorColumns}
      renderCell={renderColorStateCell}
    />
  )
}

export const Basic: Story = {
  render: (args: TagProps) => (
    <Space gap={4} direction="horizontal">
      <Tag {...args}>
        {`I'm a ${args.mode} tag`}
      </Tag>
      <Tag
        {...args}
        onClose={() => alert('outlined tag')}
        outlined
      >
        {`I'm a ${args.mode} outlined tag`}
      </Tag>
    </Space>
  ),
  args: {
    mode: 'neutral'
  },
  argTypes: {
    mode: {
      options: tagModes,
      control: { type: 'select' }
    }
  }
}

export const MaxCharsTag: Story = {
  args: {
    children: 'This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.',
    onClick: () => alert('tag!'),
    closable: true,
    onClose: () => alert('Max chars tag'),
    size: 'medium',
    truncation: {
      maxChars: 30,
      tooltipPosition: 'bottom',
      truncationSymbol: '...'
    }
  }
}

const Container = styled.div`
  width: 30%;
  padding: 20px;
`

export const ResponsiveTag: Story = {
  render: (args: TagProps) => {
    return (
      <div style={{ width: '100%' }}>
        <Text>Try to change (↔️) browser width and look at tag reaction</Text>
        <Container>
          <Tag {...args}>
            {args.children}
          </Tag>
        </Container>
      </div>
    )
  },
  args: {
    children: 'Some medium size and responsive tag',
    size: 'medium',
    isResponsive: true
  }
}

type ReductionGroupStory = StoryObj<TagReductionGroupProps>
export const ReductionGroup: ReductionGroupStory = {
  render: ({ items, ...rest }: TagReductionGroupProps) => {
    const [tagItems, setTagItems] = useState(items)
    const [newTag, setNewTag] = useState('')

    const handleOnTagAdd = () => {
      if (newTag !== '') {
        setTagItems((prev) => [...prev, { label: newTag }])
        setNewTag('')
      }
    }

    return (
      <StoryColumn>
        <Textbox value={newTag} onChange={setNewTag} />
        <Button onClick={handleOnTagAdd}>Добавить тег</Button>
        <TagReductionGroup items={tagItems} {...rest} />
        <TagReductionGroup items={tagItems.map(item => ({ ...item, icon: <Placeholder /> }))} {...rest} />
      </StoryColumn>
    )
  },
  args: {
    items: [
      { label: 'Восточно-Сибирская жд' },
      { label: 'Забайкальская жд' },
      { label: 'Северо-Кавказская жд' },
      { label: 'Московская окружная жд' },
      { label: 'Южно-Уральская жд' },
      { label: 'Октябрьская жд' }
    ],
    isMultiline: false,
    reductionTag: {
      size: 'medium',
      outlined: false
    }
  },
  decorators: [
    (Story, context) => <div style={{ width: 400 }}><Story {...context} /></div>
  ]
}
