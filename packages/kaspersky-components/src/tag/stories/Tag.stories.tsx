/* eslint-disable no-console */
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Space } from '@src/space'
import Tag from '../Tag'
import { TagDocs } from './TagDocs'
import { TagMode, tagModes, TagProps } from '../types'
import MetaData from '../__meta__/meta.json'
import { Advertisement } from '@kaspersky/icons/16'
import { sbHideControls } from '@helpers/storybookHelpers'

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`

const meta: Meta<TagProps> = {
  title: 'Atoms/Tag',
  component: Tag,
  argTypes: {
    ...sbHideControls(['theme', 'icon', 'onClose', 'label'])
  },
  args: {
    size: 'small',
    testId: 'tag-test-id',
    klId: 'tag-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
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
    <Space size={4} direction="horizontal">
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
  <Space size={16} direction="horizontal">
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
  <Space size={16} direction="horizontal">
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
