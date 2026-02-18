import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Indicator } from '@src/indicator'
import { IndicatorModes } from '@src/indicator/types'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { tagModes } from '@src/tag/types'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { UserAccount } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Accordion as AccordionComponent } from '../Accordion'
import { AccordionPanel } from '../AccordionPanel'
import { AccordionPanelProps, AccordionProps, accordionTitleSizes } from '../types'

import { defaultArgs } from './constants'

type StoryAccordionProps = AccordionPanelProps & AccordionProps & typeof defaultArgs

const meta: Meta<StoryAccordionProps> = {
  // @ts-ignore
  component: AccordionComponent,
  title: 'Hexa UI Components/Accordion',
  ...withDesignControls<StoryAccordionProps>({
    componentName: 'accordion',
    meta: {
      argTypes: {
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
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.pixsoView
      }
    }
  })
}
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
  }: StoryAccordionProps) => {
    return (
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
    )
  },
  parameters: {
    controls: {
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const TagBeforeAfter: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    tagBeforeLabel,
    tagBeforeMode,
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
              tagBefore={<Tag label={tagBeforeLabel} mode={tagBeforeMode} />}
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
  },
  name: 'Tag Before / After'
}

export const IndicatorBefore: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    indicatorMode,
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
              indicator={<Indicator mode={indicatorMode} />}
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
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const ElementAfter: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
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
    </Space>,
  argTypes: {
    withBorder: { control: false }
  },
  parameters: {
    controls: {
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const Actions: Story = {
  render: ({
    additionalText,
    className,
    disabled,
    title,
    titleSize,
    ...rest
  }: StoryAccordionProps) =>
    <Space gap="separated" direction="vertical">
      <SectionMessage mode="info">Проп actions доступен только при значении withBorder = true</SectionMessage>
      {renderVariants(
        [true, false].map(withBorder => ({
          label: `withBorder = ${withBorder}`,
          content:
            <AccordionComponent {...rest} withBorder={withBorder}>
              <AccordionPanel
                key={1}
                additionalText={additionalText}
                actions={
                  withBorder 
                    ? [
                        { value: 'Action 1', onClick: (e) => e.domEvent.stopPropagation() },
                        { value: 'Action 2', onClick: (e) => e.domEvent.stopPropagation() }
                      ]  
                    : undefined
                }
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
    </Space>,
  argTypes: {
    withBorder: { control: false }
  },
  parameters: {
    controls: {
      exclude: /(accordion|expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}

export const SingleAndMultipleMode: Story = {
  render: (args: StoryAccordionProps) => {
    return (
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
    )
  },
  args: {
    defaultActiveKey: 1
  },
  parameters: {
    controls: {
      exclude: /(expandIconPosition|componentId|componentType|children|theme|indicatorMode|tagBeforeLabel|tagBeforeMode|tagAfterLabel|tagAfterMode)/
    }
  }
}
