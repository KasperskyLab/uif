import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Advertisement } from '@kaspersky/icons/16'

import MetaData from '../__meta__/meta.json'
import Tag from '../Tag'
import { TagMode, tagModes, TagProps } from '../types'

import { TagDocs } from './TagDocs'

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`

const meta: Meta<TagProps> = {
  title: 'Hexa UI Components/Tag',
  component: Tag,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    ...sbHideControls(['theme', 'icon', 'onClose', 'label'])
  },
  args: {
    size: 'small',
    interactive: false,
    closable: false,
    testId: 'tag-test-id',
    klId: 'tag-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, TagDocs)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<TagProps>

export const Basic: Story = {
  render: (args: TagProps) => (
    <Space gap={4} direction="horizontal">
      <Tag {...args}>
        {`I'm a ${args.mode} tag`}
      </Tag>
      <Tag
        {...args}
        onClose={() => console.log('outlined tag')}
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
          <Tag
            {...args}
            key={`${mode}-outlined`}
            mode={mode as TagMode}
            onClose={() => console.log('outlined tag')}
            outlined
          >
            {`I'm a ${mode} outlined tag`}
          </Tag>
        </div>
      ))}
    </TagWrapper>
  </Space>
)

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
    onClick: () => console.log('tag')
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
      onClose={() => console.log(`${state} closable tag`)}
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
    onClick: () => console.log('tag!'),
    closable: true,
    onClose: () => console.log('Max chars tag'),
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
