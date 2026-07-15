import { withDesignControls } from '@sb/components/designControls'
import { TooltipCompositionWarning } from '@sb/components/Warnings'
import { PropsWithTooltip } from '@sb/helpers'
import { renderVariants, StoryComponentContainer } from '@sb/StoryComponents'
import { Tooltip } from '@src/tooltip'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Button as ButtonComponent } from '../Button'
import type { ButtonProps, ButtonSize } from '../types'

import {
  buttonIconOptions
} from './Button.controls'
import {
  buttonIconVariants,
  buttonModes,
  buttonStorySettings
} from './Button.stories'

const defaultSizes: ButtonSize[] = ['small', 'medium', 'large', 'extraLarge']

type StoryButtonProps = PropsWithTooltip<Omit<ButtonProps, 'iconBefore' | 'iconAfter'> & {
  iconBefore?: (typeof buttonIconOptions)[number]
  iconAfter?: (typeof buttonIconOptions)[number]
}>

const meta = {
  title: 'Hexa UI Components/Button/Stories',
  // @ts-expect-error Examples map story-only icon controls in render
  component: ButtonComponent,
  tags: ['!autodocs'],
  ...withDesignControls({
    componentName: 'button',
    meta: buttonStorySettings
  })
} satisfies Meta<StoryButtonProps>

export default meta

type Story = StoryObj<StoryButtonProps>

export const IconButton = {
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => (
    <ButtonComponent
      {...rest}
      iconAfter={buttonIconVariants[iconAfter ?? 'none']}
      iconBefore={buttonIconVariants[iconBefore ?? 'none']}
    />
  ),
  argTypes: {
    text: { control: false },
    iconAfter: { control: false }
  },
  args: {
    iconBefore: 'placeholder',
    text: undefined
  }
}

export const IconBeforeAfter = {
  render: ({
    text,
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => (
    <StoryComponentContainer>
      <ButtonComponent
        {...rest}
        text={text}
        iconBefore={buttonIconVariants[iconBefore ?? 'none']}
      />
      <ButtonComponent
        {...rest}
        text={text}
        iconAfter={buttonIconVariants[iconAfter ?? 'none']}
      />
    </StoryComponentContainer>
  ),
  args: {
    iconBefore: 'placeholder',
    iconAfter: 'placeholder'
  },
  name: 'Icon Before / After'
}

export const Mode: Story = {
  render: (args) =>
    renderVariants(
      buttonModes.map(mode => ({
        label: mode,
        content:
          <ButtonComponent
            {...args}
            iconAfter={buttonIconVariants[args.iconAfter ?? 'none']}
            iconBefore={buttonIconVariants[args.iconBefore ?? 'none']}
            mode={mode}
          />
      })),
      true
    ),
  argTypes: {
    mode: { control: false }
  }
}

export const Size: Story = {
  render: (args) =>
    renderVariants(
      defaultSizes.map(size => ({
        label: size,
        content:
          <ButtonComponent
            {...args}
            iconAfter={buttonIconVariants[args.iconAfter ?? 'none']}
            iconBefore={buttonIconVariants[args.iconBefore ?? 'none']}
            size={size as ButtonSize}
          />
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  }
}

export const Loading: Story = {
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => (
    <StoryComponentContainer>
      <ButtonComponent
        {...rest}
        iconAfter={buttonIconVariants[iconAfter ?? 'none']}
        text={text}
      />
      <ButtonComponent
        {...rest}
        iconAfter={buttonIconVariants[iconAfter ?? 'none']}
        iconBefore={buttonIconVariants[iconBefore ?? 'none']}
      />
    </StoryComponentContainer>
  ),
  args: {
    loading: true,
    iconBefore: 'placeholder'
  }
}

export const Disabled: Story = {
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => (
    <StoryComponentContainer>
      <ButtonComponent
        {...rest}
        iconAfter={buttonIconVariants[iconAfter ?? 'none']}
        iconBefore={buttonIconVariants[iconBefore ?? 'none']}
        text={text}
      />
      <ButtonComponent
        {...rest}
        iconAfter={buttonIconVariants[iconAfter ?? 'none']}
        iconBefore={buttonIconVariants[iconBefore ?? 'none']}
      />
    </StoryComponentContainer>
  ),
  args: {
    disabled: true,
    iconBefore: 'placeholder'
  }
}

export const WithTooltip: Story = {
  render: (args: StoryButtonProps) => (
    <div style={{ width: '100%' }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span>
          <ButtonComponent
            {...args}
            iconAfter={buttonIconVariants[args.iconAfter ?? 'none']}
            iconBefore={buttonIconVariants[args.iconBefore ?? 'none']}
          />
        </span>
      </Tooltip>
    </div>
  ),
  argTypes: {
    tooltip: {
      control: 'text'
    }
  },
  args: {
    tooltip: 'Tooltip'
  },
  parameters: {
    controls: {
      exclude: ''
    }
  }
}
