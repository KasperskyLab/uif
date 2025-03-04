import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Indicator } from '@src/indicator'
import { IndicatorModes } from '@src/indicator/types'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { tagModes } from '@src/tag/types'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { UserAccount } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { Accordion, AccordionPanel } from './Accordion'
import { AccordionPanelProps, AccordionProps } from './types'

const defaultArgs = {
  accordion: false,
  additionalText: '',
  disabled: false,
  shouldDisableActions: true,
  indicatorMode: IndicatorModes[0],
  klId: 'accordion-kl-id',
  tagAfterMode: tagModes[0],
  tagAfterLabel: 'after',
  tagBeforeMode: tagModes[0],
  tagBeforeLabel: 'before',
  testId: 'accordion-test-id',
  title: 'Title',
  withBorder: true
}

type StoryAccordionProps = AccordionPanelProps & AccordionProps & typeof defaultArgs

const meta: Meta<StoryAccordionProps> = {
  component: Accordion,
  title: 'Hexa UI Components/Accordion',
  argTypes: {
    expandIconPosition: {
      control: { type: 'inline-radio' },
      options: ['left', 'right']
    },
    indicatorMode: {
      control: { type: 'select' },
      options: IndicatorModes,
      description: 'Indicator mode (not an accordion prop)'
    },
    tagBeforeLabel: {
      control: { type: 'text' },
      description: 'Text of the tag before title (not an accordion prop)'
    },
    tagBeforeMode: {
      control: { type: 'select' },
      options: tagModes,
      description: 'Mode of the tag before title (not an accordion prop)'
    },
    tagAfterLabel: {
      control: { type: 'text' },
      description: 'Text of the tag after title (not an accordion prop)'
    },
    tagAfterMode: {
      control: { type: 'select' },
      options: tagModes,
      description: 'Mode of the tag after title (not an accordion prop)'
    },
    titleSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    }
  },
  args: defaultArgs,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    badges: [badges.stable, badges.reviewedByDesign],
    controls: {
      exclude: /(componentId|componentType|children|dataTestId|theme)/,
      sort: 'alpha'
    },
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<StoryAccordionProps>

export const Basic: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => {
    return (
      <Accordion {...rest}>
        <AccordionPanel
          key={1}
          additionalText={additionalText}
          className={className}
          disabled={disabled}
          title={title}
          titleSize={titleSize}
        >
          <P type="BTR5" themedColor="primary">Accordion content</P>
        </AccordionPanel>
      </Accordion>
    )
  },
  parameters: {
    controls: {
      exclude: /(componentId|componentType|children|dataTestId|indicatorMode|tagAfterLabel|tagAfterMode|tagBeforeLabel|tagBeforeMode|theme)/
    }
  }
}

export const WithMultipleItems: Story = {
  render: (args: StoryAccordionProps) => {
    return (
      <Accordion {...args}>
        <AccordionPanel key={1} title="Title 1">
          Accordion content 1
        </AccordionPanel>
        <AccordionPanel key={2} disabled title="Title 2">
          Accordion content 2
        </AccordionPanel>
        <AccordionPanel key={3} title="Title 3">
          Accordion content 3
        </AccordionPanel>
      </Accordion>
    )
  },
  parameters: {
    controls: {
      include: /(accordion|activeKey|defaultActiveKey|disabled|expandIconPosition|onChange|withBorder)/
    }
  },
  args: {
    defaultActiveKey: 1
  }
}

export const Variations: Story = {
  render: ({
    title,
    titleSize,
    additionalText,
    indicatorMode,
    tagBeforeLabel,
    tagBeforeMode,
    tagAfterLabel,
    tagAfterMode,
    withBorder,
    expandIconPosition,
    ...rest
  }: StoryAccordionProps) => {
    return (
      <StoryColumn>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            indicator={<Indicator mode={indicatorMode} />}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            additionalText={additionalText}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            indicator={<Indicator mode={indicatorMode} />}
            additionalText={additionalText}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            indicator={<Indicator mode={indicatorMode} />}
            additionalText={additionalText}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            indicator={<Indicator mode={indicatorMode} />}
            additionalText={additionalText}
            elementAfter={<Space gap={4}><UserAccount /><P>10/10</P></Space>}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
            indicator={<Indicator mode={indicatorMode} />}
            additionalText={additionalText}
            actions={[
              { value: 'Action 1', onClick: (e) => e.domEvent.stopPropagation() },
              { value: 'Action 2', onClick: (e) => e.domEvent.stopPropagation() }
            ]}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion {...rest} withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            elementAfter={<Space gap={4}><UserAccount /><P>10/10</P></Space>}
            actions={[
              { value: 'Action 1', onClick: (e) => e.domEvent.stopPropagation() },
              { value: 'Action 2', onClick: (e) => e.domEvent.stopPropagation() }
            ]}
            key={1}
          >
            <P type="BTR5" themedColor="primary">Accordion content</P>
          </AccordionPanel>
        </Accordion>
      </StoryColumn>
    )
  },
  args: {
    additionalText: 'Events: 32'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.accordion },
  render: args => <ThemedPalette {...args} />
}
