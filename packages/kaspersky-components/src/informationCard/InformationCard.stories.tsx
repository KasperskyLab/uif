import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'
import { InformationCard } from './InformationCard'
import { InformationCardProps } from '@src/informationCard/types'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Toggle } from '@src/toggle'
import { Connection } from '@kaspersky/icons/32'

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
      <StyledBadge count={9} mode='high' />
    </StyledIconWithBadge>
  )
}

const meta: Meta<InformationCardProps> = {
  title: 'Organisms/InformationCard',
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
    badges: [badges.beta, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<InformationCardProps>

export const Basic: Story = {}

export const WithLeftSideAndFooter: Story = {
  render: (args: InformationCardProps) => (
    <InformationCard {...args} footer={
      <Space size={16} direction="horizontal">
        <Button mode='primary' disabled={args.disabled}>First</Button>
        <Button mode='secondary' disabled={args.disabled}>Second</Button>
      </Space>}
    />
  ),
  args: {
    leftSide: 'iconWithBadge'
  }
}

export const WithChildren: Story = {
  render: (args: InformationCardProps) => (
    <InformationCard {...args} footer={
      <Space size={16} direction="horizontal">
        <Button mode='primary' disabled={args.disabled}>First</Button>
        <Button mode='secondary' disabled={args.disabled}>Second</Button>
      </Space>}
    >
      <Tag mode='purple' interactive outlined disabled={args.disabled}>Custom content</Tag>
      <Tag mode='violet' interactive outlined disabled={args.disabled}>More custom content</Tag>
    </InformationCard>
  ),
  args: {
    leftSide: 'icon'
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
