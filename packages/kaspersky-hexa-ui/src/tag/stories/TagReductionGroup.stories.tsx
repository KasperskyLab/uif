import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { TagReductionGroup } from '../TagReductionGroup'
import { TagReductionGroupProps } from '../types'

const meta: Meta<TagReductionGroupProps> = {
  title: 'Hexa UI Components/Tag/Stories/Reduction',
  tags: ['!autodocs'],
  component: TagReductionGroup,
  argTypes: {},
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
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => <div style={{ width: 400 }}><Story {...context} /></div>
  ]
}
export default meta

type Story = StoryObj<TagReductionGroupProps>

export const ReductionGroup: Story = {
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
  }
}
