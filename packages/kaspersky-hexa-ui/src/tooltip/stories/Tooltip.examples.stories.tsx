import { ContentContainer, ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StyledTag } from '@sb/components/Warnings'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Field } from '@src/field'
import { SectionMessage } from '@src/section-message'
import { SegmentedButton, SegmentedButtonOption } from '@src/segmented-button'
import { P, Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Tooltip } from '../Tooltip'
import { TooltipProps } from '../types'

import { tooltipStorySettings } from './Tooltip.stories'

const meta: Meta<typeof Tooltip> = {
  title: 'Hexa UI Components/Tooltip/Stories',
  component: Tooltip,
  tags: ['!autodocs'],
  ...tooltipStorySettings
}
export default meta

type Story = StoryObj<TooltipProps>

export const Basic: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Text type="BTM5" themedColor="primary">
        Tooltip here:
      </Text>
      <Tooltip {...args}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
  )
}

export const WithTextComponent: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Text type="BTM5">
        Tooltip here:
      </Text>
      <Tooltip
        {...args}
        text={<Text type="BTM3" themedColor="primary-invert">I&apos;m a Text component</Text>}
      >
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
  )
}

export const WithDisabledComponent: Story = {
  render: (args: TooltipProps) => (
    <StoryColumn>
      <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
        <P>Use wrapper for <StyledTag>disabled</StyledTag> components inside <StyledTag>Tooltip</StyledTag> if it&apos;s not working</P>
        <P>Используйте обёртку для <StyledTag>disabled</StyledTag> компонентов внутри <StyledTag>Tooltip</StyledTag> если тултип не отображается</P>
      </SectionMessage>
      <Tooltip {...args}>
        <span><Button disabled={true} text="Button" /></span>
      </Tooltip>
    </StoryColumn>
  )
}

export const WithinScrollableContainer: Story = {
  render: (args: TooltipProps) => (
    <ScrollableContainer>
      <ContentContainer>
        <Tooltip {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>
  ),
  args: {
    children: <Button>Click me and scroll my container</Button>,
    trigger: 'click'
  }
}

export const PerformanceExample: Story = {
  render: (args: TooltipProps) => {
    const [performSize, setPerformSize] = React.useState(10)
    const tooltips = React.useMemo(() => {
      const arr: number[] = []
      for (let i = 0; i <= performSize; i++) {
        arr.push(i)
      }
      return arr
    }, [performSize])
    const items: SegmentedButtonOption[] = [
      { value: '10', text: '10' },
      { value: '100', text: '100' },
      { value: '1000', text: '1000' }
    ]
    return (
      <StoryColumn>
        <Field
          control={(
            <SegmentedButton
              value={[performSize.toString()]}
              type="radio"
              items={items}
              onChange={value => {
                setPerformSize(Number(value[0]))
              }}
            />
          )}
          label="Number of tooltips on page"
        />
        {tooltips.map((t) => (
          <Tooltip {...args} key={t} text={t} destroyTooltipOnHide>
            <Text>{t}: hover me to see Tooltip</Text>
          </Tooltip>
        ))}
      </StoryColumn>
    )
  }
}
