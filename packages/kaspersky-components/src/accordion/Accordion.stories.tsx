import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'

import { Accordion, AccordionPanel } from './Accordion'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'

import { Checkbox } from '@src/checkbox'
import { P } from '@src/typography'
import { Tag } from '@src/tag'
import { Indicator } from '@src/indicator'
import { tagModes } from '@src/tag/types'
import { IndicatorModes } from '@src/indicator/types'
import { AccordionTitleSize, AccordionProps, AccordionPanelProps } from './types'

const defaultArgs = {
  disabled: false,
  title: 'Title',
  titleSize: 'small' as AccordionTitleSize,
  additionalText: 'Events: 32',
  indicatorMode: IndicatorModes[0],
  tagBeforeMode: tagModes[0],
  tagBeforeLabel: 'before',
  tagAfterMode: tagModes[0],
  tagAfterLabel: 'after',
  withBorder: true,
  testId: 'accordion-test-id',
  klId: 'accordion-kl-id'
}

type StoryAccordionProps = AccordionPanelProps & AccordionProps & typeof defaultArgs

const meta: Meta<StoryAccordionProps> = {
  component: Accordion,
  title: 'Molecules/Accordion',
  argTypes: {
    titleSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    },
    indicatorMode: {
      control: { type: 'select' },
      options: IndicatorModes,
      description: 'Indicator mode (not an accordion prop)'
    },
    tagBeforeMode: {
      control: { type: 'select' },
      options: tagModes,
      description: 'Mode of the tag before title (not an accordion prop)'
    },
    tagBeforeLabel: {
      control: { type: 'text' },
      description: 'Text of the tag before title (not an accordion prop)'
    },
    tagAfterMode: {
      control: { type: 'select' },
      options: tagModes,
      description: 'Mode of the tag after title (not an accordion prop)'
    },
    tagAfterLabel: {
      control: { type: 'text' },
      description: 'Text of the tag after title (not an accordion prop)'
    },
    ...sbHideControls(['theme', 'activeKey', 'defaultActiveKey', 'accordion', 'children', 'state'])
  },
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
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
    title,
    withBorder,
    expandIconPosition,
    ...rest
  }: StoryAccordionProps) => {
    return (
      <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
        <AccordionPanel
          {...rest}
          title={title}
          additionalText=''
          key={1}
        >
          <P type='BTR5' themedColor='primary'>Accordion content</P>
        </AccordionPanel>
      </Accordion>
    )
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
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            indicator={<Indicator mode={indicatorMode} />}
            key={1}
          >
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
            key={1}
          >
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            key={1}
          >
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            additionalText={additionalText}
            key={1}
          >
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
          <AccordionPanel
            {...rest}
            title={title}
            titleSize={titleSize}
            tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
            indicator={<Indicator mode={indicatorMode} />}
            additionalText={additionalText}
            key={1}
          >
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
        <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
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
            <P type='BTR5' themedColor='primary'>Accordion content</P>
          </AccordionPanel>
        </Accordion>
      </StoryColumn>
    )
  }
}

export const CustomHeader: Story = {
  render: ({
    title,
    withBorder,
    expandIconPosition,
    ...rest
  }: StoryAccordionProps) => {
    return (
      <Accordion withBorder={withBorder} expandIconPosition={expandIconPosition}>
        <AccordionPanel
          {...rest}
          title={title}
          additionalText=''
          header={
            <div>
              <P type='H5'>Custom Header</P>
              <Checkbox>Check me</Checkbox>
            </div>
          }
          key={1}
        >
          <div>
            <P type='H6'>Accordion Content</P>
            <Checkbox>Don`t check me</Checkbox>
          </div>
        </AccordionPanel>
      </Accordion>
    )
  }
}
