import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { InformationCard as InformationCardComponent } from '../InformationCard'
import { InformationCardProps, InformationCardType } from '../types'

import {
  resolveContentVariant,
  resolveFooterVariant,
  resolveLeftSideVariant
} from './constants'
import { defaultArgs } from './InformationCard.controls'

const meta = {
  title: 'Hexa UI Components/InformationCard/Stories',
  component: InformationCardComponent,
  tags: ['!autodocs'],
  args: {
    type: defaultArgs.type,
    size: defaultArgs.size,
    width: defaultArgs.width,
    title: defaultArgs.title,
    description: defaultArgs.description,
    selected: defaultArgs.selected,
    disabled: defaultArgs.disabled,
    interactive: defaultArgs.interactive,
    testId: 'information-card-test-id',
    klId: 'information-card-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
} satisfies Meta<InformationCardProps>

export default meta

type Story = StoryObj<InformationCardProps>

export const Basic: Story = {
  args: {
    type: defaultArgs.type,
    size: defaultArgs.size,
    title: defaultArgs.title,
    description: defaultArgs.description
  }
}

export const WithLeftSideAndFooter: Story = {
  render: (args: InformationCardProps) => (
    <InformationCardComponent
      {...args}
      footer={resolveFooterVariant('actions', args.disabled)}
      leftSide={resolveLeftSideVariant('iconWithBadge')}
    />
  )
}

export const WithChildren: Story = {
  render: (args: InformationCardProps) => (
    <InformationCardComponent
      {...args}
      footer={resolveFooterVariant('actions', args.disabled)}
      leftSide={resolveLeftSideVariant('icon')}
    >
      {resolveContentVariant('tags', args.disabled)}
    </InformationCardComponent>
  )
}

export const Types: Story = {
  render: (args) => {
    const informationCardTypes: InformationCardType[] = ['vertical', 'horizontal', 'center']

    return (
      <StoryColumn>
        {informationCardTypes.map(cardType => (
          <InformationCardComponent
            {...args}
            key={cardType}
            type={cardType}
            footer={resolveFooterVariant('actions', args.disabled)}
            leftSide={resolveLeftSideVariant('iconWithBadge')}
          >
            {resolveContentVariant('tags', args.disabled)}
          </InformationCardComponent>
        ))}
      </StoryColumn>
    )
  }
}

export const Controllable: Story = {
  render: (args: InformationCardProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false)
    const [selectedToggle, setSelectedToggle] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState(false)

    return (
      <StoryColumn>
        <InformationCardComponent
          {...args}
          selected={selectedCheckbox}
          onClick={() => setSelectedCheckbox(value => !value)}
          rightCorner={(
            <Checkbox
              disabled={args.disabled}
              checked={selectedCheckbox}
            />
          )}
        />
        <InformationCardComponent
          {...args}
          selected={selectedToggle}
          onClick={() => setSelectedToggle(value => !value)}
          rightCorner={(
            <Toggle
              disabled={args.disabled}
              checked={selectedToggle}
            />
          )}
        />
        <InformationCardComponent
          {...args}
          selected={selectedRadio}
          onClick={() => setSelectedRadio(value => !value)}
          rightCorner={(
            <Radio
              disabled={args.disabled}
              options={[{ label: '', value: '' }]}
            />
          )}
        />
      </StoryColumn>
    )
  }
}

const CustomHeightContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const TwoCardsWithCustomHeight: Story = {
  render: (args: InformationCardProps) => (
    <CustomHeightContainer>
      <InformationCardComponent
        {...args}
        footer={resolveFooterVariant('actions', args.disabled)}
        description="Short content"
      >
        {resolveContentVariant('tags', args.disabled)}
      </InformationCardComponent>
      <InformationCardComponent
        {...args}
        footer={resolveFooterVariant('actions', args.disabled)}
      >
        {resolveContentVariant('tags', args.disabled)}
      </InformationCardComponent>
    </CustomHeightContainer>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.information_card },
  render: args => <ThemedPalette {...args} />
}
