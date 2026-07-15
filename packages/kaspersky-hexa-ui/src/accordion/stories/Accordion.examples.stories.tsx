import { renderVariants } from '@sb/StoryComponents'
import { Indicator } from '@src/indicator'
import { IndicatorModes } from '@src/indicator/types'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import { MenuInfo } from 'rc-menu/lib/interface'
import React from 'react'

import {
  Star,
  StatusOkSolid,
  Upload,
  UserAccount
} from '@kaspersky/hexa-ui-icons/16'

import { Accordion as AccordionComponent } from '../Accordion'
import { AccordionPanel } from '../AccordionPanel'
import { AccordionPanelProps, AccordionProps, accordionTitleSizes } from '../types'

import {
  accordionActionsOptions,
  accordionElementAfterOptions,
  accordionElementBeforeOptions,
  defaultArgs
} from './Accordion.controls'

type StoryAccordionProps = Omit<AccordionPanelProps, 'elementBefore' | 'elementAfter' | 'actions'> &
  AccordionProps &
  Omit<typeof defaultArgs, 'elementBefore' | 'elementAfter' | 'actions'> & {
    elementBefore?: (typeof accordionElementBeforeOptions)[number] | React.ReactNode
    elementAfter?: (typeof accordionElementAfterOptions)[number] | React.ReactElement
    actions?: AccordionPanelProps['actions'] | (typeof accordionActionsOptions)[number]
  }

const meta = {
  // @ts-expect-error Story args объединяют пропы Accordion и AccordionPanel
  component: AccordionComponent,
  title: 'Hexa UI Components/Accordion/Stories',
  args: defaultArgs,
  tags: ['!autodocs']
} satisfies Meta<StoryAccordionProps>

export default meta

type Story = StoryObj<StoryAccordionProps>

export const Accordion: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => (
    <AccordionComponent {...rest}>
      <AccordionPanel
        key={1}
        additionalText={additionalText}
        className={className}
        disabled={disabled}
        title={title}
        titleSize={titleSize}
      >
        Accordion content
      </AccordionPanel>
    </AccordionComponent>
  ),
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const TitleSize: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    renderVariants(
      accordionTitleSizes.map(size => ({
        label: size,
        content:
          <AccordionComponent {...rest}>
            <AccordionPanel
              key={1}
              additionalText={additionalText}
              className={className}
              disabled={disabled}
              title={title}
              titleSize={size}
            >
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
      })),
      true
    ),
  argTypes: {
    titleSize: { control: false }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const WithBorder: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    renderVariants(
      [true, false].map(withBorder => ({
        label: `withBorder = ${withBorder}`,
        content:
          <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel
              key={1}
              additionalText={additionalText}
              className={className}
              disabled={disabled}
              title={title}
              titleSize={titleSize}
            >
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
      })),
      true
    ),
  argTypes: {
    withBorder: { control: false }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const Disabled: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    renderVariants(
      [true, false].map(withBorder => ({
        label: `withBorder = ${withBorder}`,
        content:
          <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel
              key={1}
              additionalText={additionalText}
              className={className}
              disabled={true}
              title={title}
              titleSize={titleSize}
            >
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
      })),
      true
    ),
  argTypes: {
    withBorder: { control: false },
    disabled: { control: false }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const AdditionalText: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    renderVariants(
      [true, false].map(withBorder => ({
        label: `withBorder = ${withBorder}`,
        content:
          <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel
              key={1}
              additionalText={additionalText}
              className={className}
              disabled={disabled}
              title={title}
              titleSize={titleSize}
            >
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
      })),
      true
    ),
  argTypes: {
    withBorder: { control: false }
  },
  args: {
    additionalText: 'Events: 32'
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const TagAfter: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    tagAfterLabel,
    tagAfterMode,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    renderVariants(
      [true, false].map(withBorder => ({
        label: `withBorder = ${withBorder}`,
        content:
          <AccordionComponent {...rest} withBorder={withBorder}>
            <AccordionPanel
              key={1}
              additionalText={additionalText}
              tagAfter={<Tag label={tagAfterLabel} mode={tagAfterMode} />}
              className={className}
              disabled={disabled}
              title={title}
              titleSize={titleSize}
            >
              Accordion content
            </AccordionPanel>
          </AccordionComponent>
      })),
      true
    ),
  argTypes: {
    withBorder: { control: false }
  },
  parameters: {
    controls: {
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode)/
    }
  }
}

export const ElementBeforeAfter: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    elementBefore,
    elementAfter,
    ...rest
  }: StoryAccordionProps) => (
    <Space gap="separated" direction="vertical">
      <SectionMessage mode="info">Проп elementAfter доступен только при значении withBorder = true</SectionMessage>
      {renderVariants(
        [true, false].map(withBorder => ({
          label: `withBorder = ${withBorder}`,
          content:
            <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel
                key={1}
                additionalText={additionalText}
                elementBefore={elementBefore}
                elementAfter={withBorder ? <Space gap={4}><UserAccount />10/10</Space> : undefined}
                className={className}
                disabled={disabled}
                title={title}
                titleSize={titleSize}
              >
                Accordion content
              </AccordionPanel>
            </AccordionComponent>
        })),
        true
      )}
    </Space>
  ),
  argTypes: {
    withBorder: { control: false },
    elementBefore: {
      control: { type: 'select' },
      options: ['Star', 'StatusOkSolid', 'Upload', 'Indicator'],
      mapping: {
        StatusOkSolid: <StatusOkSolid />,
        Star: <Star />,
        Upload: <Upload />,
        Indicator: <Indicator />
      }
    }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  },
  args: {
    elementBefore: 'StatusOkSolid'
  },
  name: 'Element Before / After'
}

export const Actions: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) => (
    <Space gap="separated" direction="vertical">
      {renderVariants(
        [true, false].map(withBorder => ({
          label: `withBorder = ${withBorder}`,
          content:
            <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel
                key={1}
                additionalText={additionalText}
                actions={[
                  { value: 'Action 1', onClick: (e: MenuInfo) => e.domEvent.stopPropagation() },
                  { value: 'Action 2', onClick: (e: MenuInfo) => e.domEvent.stopPropagation() }
                ]}
                className={className}
                disabled={disabled}
                title={title}
                titleSize={titleSize}
              >
                Accordion content
              </AccordionPanel>
            </AccordionComponent>
        })),
        true
      )}
    </Space>
  ),
  argTypes: {
    withBorder: { control: false }
  },
  parameters: {
    controls: {
      // eslint-disable-next-line @stylistic/max-len
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const SingleAndMultipleMode: Story = {
  render: (args: StoryAccordionProps) => (
    <AccordionComponent {...args}>
      <AccordionPanel key={1} title="Title 1">
        Accordion content 1
      </AccordionPanel>
      <AccordionPanel key={2} disabled title="Title 2">
        Accordion content 2
      </AccordionPanel>
      <AccordionPanel key={3} title="Title 3">
        Accordion content 3
      </AccordionPanel>
    </AccordionComponent>
  ),
  args: {
    defaultActiveKey: 1
  },
  parameters: {
    controls: {
      exclude: /(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}
