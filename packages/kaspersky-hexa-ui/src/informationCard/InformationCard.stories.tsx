import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Connection } from '@kaspersky/hexa-ui-icons/32'

import MetaData from './__meta__/meta.json'
import { InformationCard } from './InformationCard'
import { InformationCardProps, InformationCardType } from './types'

const StyledIconWithBadge = styled.div`
  position: relative;
`

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: -8px;
`

const IconWithBadge = () => {
  return (
    <StyledIconWithBadge>
      <Connection />
      <StyledBadge count={9} mode="high" />
    </StyledIconWithBadge>
  )
}

const meta: Meta<InformationCardProps> = {
  title: 'Hexa UI Components/InformationCard',
  component: InformationCard,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    width: {
      control: { type: 'range', min: 100, max: 1000, step: 10 }
    },
    leftSide: {
      control: { type: 'select' },
      mapping: {
        undefined: undefined,
        icon: <Connection />,
        iconWithBadge: <IconWithBadge />
      },
      options: ['undefined', 'icon', 'iconWithBadge']
    },
    ...sbHideControls([
      'footer', 'rightCorner', 'theme', 'titleLevel', 'titleIcon', 'children', 'contentLevel', 'className',
      'leftSideClassName', 'titleClassName', 'descriptionClassName', 'rightCornerClassName', 'contentClassName',
      'footerClassName', 'style'
    ])
  },
  args: {
    type: 'vertical',
    width: 450,
    title: 'Heading',
    description: 'To protect your mailboxes, OneDrive files, and SharePoint Online sites, Kaspersky Security for Microsoft Office 365 needs limited access to Office 365.',
    leftSide: 'undefined',
    size: 'medium',
    selected: false,
    disabled: false,
    interactive: false,
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
}
export default meta

type Story = StoryObj<InformationCardProps>

type PropsWithDisabled = { disabled?: boolean }

const DefaultFooter = (props: PropsWithDisabled) => (
  <Space gap={16} direction="horizontal">
    <Button mode="primary" disabled={props.disabled}>First</Button>
    <Button mode="secondary" disabled={props.disabled}>Second</Button>
  </Space>
)

const DefaultChildren = (props: PropsWithDisabled) => (
  <>
    <Tag mode="purple" interactive outlined disabled={props.disabled}>Custom content</Tag>
    <Tag mode="violet" interactive outlined disabled={props.disabled}>More custom content</Tag>
  </>
)

export const Basic: Story = {}

export const WithLeftSideAndFooter: Story = {
  render: (args: InformationCardProps) => (
    <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />} />
  ),
  args: {
    leftSide: 'iconWithBadge'
  }
}

export const WithChildren: Story = {
  render: (args: InformationCardProps) => (
    <InformationCard {...args} footer={<DefaultFooter disabled={args.disabled} />} >
      <DefaultChildren disabled={args.disabled} />
    </InformationCard>
  ),
  args: {
    leftSide: 'icon'
  }
}

export const Types: Story = {
  render: (args) => {
    const informationCardTypes: InformationCardType[] = ['vertical', 'horizontal', 'center']
    return (
      <StoryColumn>
        {informationCardTypes.map(cardType => (
          <InformationCard
            {...args}
            key={cardType}
            type={cardType}
            footer={<DefaultFooter disabled={args.disabled} />}
          >
            <DefaultChildren disabled={args.disabled} />
          </InformationCard>
        ))}
      </StoryColumn>
    )
  },
  args: {
    leftSide: 'iconWithBadge'
  }
}

export const Controllable: Story = {
  render: (args: InformationCardProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false)
    const [selectedToggle, setSelectedToggle] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState(false)

    return (
      <StoryColumn>
        <InformationCard
          {...args}
          selected={selectedCheckbox}
          onClick={() => setSelectedCheckbox(v => !v)}
          rightCorner={(
            <Checkbox
              disabled={args.disabled}
              checked={selectedCheckbox}
            />
          )}
        />
        <InformationCard
          {...args}
          selected={selectedToggle}
          onClick={() => setSelectedToggle(v => !v)}
          rightCorner={(
            <Toggle
              disabled={args.disabled}
              checked={selectedToggle}
            />
          )}
        />
        <InformationCard
          {...args}
          selected={selectedRadio}
          onClick={() => setSelectedRadio(v => !v)}
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
      <InformationCard
        {...args}
        footer={<DefaultFooter disabled={args.disabled}/> }
        description="Short content"
      >
        <DefaultChildren disabled={args.disabled} />
      </InformationCard>
      <InformationCard
        {...args}
        footer={<DefaultFooter disabled={args.disabled}/> }
      >
        <DefaultChildren disabled={args.disabled} />
      </InformationCard>
    </CustomHeightContainer>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.information_card },
  render: args => <ThemedPalette {...args} />
}
