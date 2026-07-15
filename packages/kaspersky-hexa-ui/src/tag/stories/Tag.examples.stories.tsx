import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Advertisement } from '@kaspersky/hexa-ui-icons/16'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import Tag from '../Tag'
import { TagReductionGroup } from '../TagReductionGroup'
import { TagMode, tagModes, TagProps, TagReductionGroupProps } from '../types'

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

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`

const AllModesMock = (args: TagProps) => (
  <Space gap={16} direction="horizontal">
    <TagWrapper>
      {tagModes.map((mode, i) => (
        <div key={mode + i}>
          <Tag
            {...args}
            key={mode}
            mode={mode as TagMode}
          >
            {`I'm a ${mode} tag`}
          </Tag>
          {mode !== 'ai' && (
            <Tag
              {...args}
              key={`${mode}-outlined`}
              mode={mode as TagMode}
              onClose={() => alert('outlined tag')}
              outlined
            >
              {`I'm a ${mode} outlined tag`}
            </Tag>
          )}
        </div>
      ))}
    </TagWrapper>
  </Space>
)

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

export const AllModeVariants: Story = {
  render: AllModesMock.bind({})
}

export const TagsWithIcons: Story = {
  render: AllModesMock.bind({}),
  args: {
    icon: <Advertisement />,
    size: 'medium'
  }
}

export const ClosableTags: Story = {
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true
  }
}

export const ClickedTags: Story = {
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    onClick: () => alert('tag')
  }
}

export const ClosableAndIconCombo: Story = {
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    icon: <Advertisement />
  }
}

const DefaultAndClosableMock = (state: string) => (args: TagProps) => (
  <Space gap={16} direction="horizontal">
    <Tag {...args}>
      {state} tag
    </Tag>
    <Tag
      {...args}
      closable
      onClose={() => alert(`${state} closable tag`)}
    >
      {state} closable tag
    </Tag>
  </Space>
)

export const ReadonlyTag: Story = {
  render: DefaultAndClosableMock('Readonly'),
  args: {
    readOnly: true,
    size: 'medium'
  }
}

export const InvalidTag: Story = {
  render: DefaultAndClosableMock('Invalid'),
  args: {
    invalid: true,
    size: 'medium'
  }
}

export const DisabledTag: Story = {
  render: DefaultAndClosableMock('Disabled'),
  args: {
    disabled: true,
    size: 'medium'
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.tag },
  render: args => <ThemedPalette {...args} />
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
