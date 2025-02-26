import { Size as SizeType } from '@design-system/types'
import { badges } from '@sb/badges'
import { Tooltip } from '@src/tooltip'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { PropsWithTooltip } from '@sb/helpers'
import { StoryComponentContainer, StoryLabel, StoryWrapper } from '@sb/StoryComponents'
import { TooltipCompositionWarning } from '@sb/components/Warnings'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Plus, Settings } from '@kaspersky/icons/16'

import MetaData from './__meta__/meta.json'
import { Button as ButtonComponent } from './Button'
import { buttonModes, ButtonProps, ButtonSize } from './types'

const defaultSizes: SizeType[] = [
  SizeType.Small,
  SizeType.Medium,
  SizeType.Large,
  SizeType.ExtraLarge
]

const defaultIcons = {
  '-': null,
  Placeholder: <Placeholder klId="button-icon" />,
  Plus: <Plus klId="button-icon" />,
  Settings: <Settings klId="button-icon" />
}

const resolveIcon = (icon?: StoryButtonProps['iconBefore'] | StoryButtonProps['iconAfter']) => icon !== '-' && defaultIcons[icon || '-']

const storySettings: Meta<ButtonProps> = {
  argTypes: {
    size: {
      options: defaultSizes,
      control: { type: 'select' }
    },
    mode: {
      options: buttonModes,
      control: { type: 'select' }
    },
    iconBefore: {
      options: Object.keys(defaultIcons),
      control: { type: 'select' }
    },
    iconAfter: {
      options: Object.keys(defaultIcons),
      control: { type: 'select' }
    }
  },
  args: {
    iconBefore: '-',
    text: 'Button',
    iconAfter: '-',
    isPressed: false,
    type: 'button',
    testId: 'button-test-id',
    klId: 'button-kl-id',
    size: SizeType.Medium,
    mode: 'primary',
    disabled: false,
    loading: false
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(tooltip)/
    },
    design: MetaData.figmaView
  }
}

const meta: Meta<ButtonProps> = {
  title: 'Hexa UI Components/Button',
  component: ButtonComponent,
  ...withDesignControls<ButtonProps>({
    componentName: 'button',
    meta: storySettings
  })
}

export default meta

type IconsType = keyof typeof defaultIcons

type StoryButtonProps = PropsWithTooltip<Omit<ButtonProps, 'iconBefore' | 'iconAfter'> & {
  iconBefore?: IconsType,
  iconAfter?: IconsType
}>

type Story = StoryObj<StoryButtonProps>

export const Button: Story = {
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => (
    <ButtonComponent
      {...rest}
      iconAfter={resolveIcon(iconAfter)}
      iconBefore={resolveIcon(iconBefore)}
    />
  )
}

export const IconButton = {
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => (
    <ButtonComponent
      {...rest}
      iconAfter={resolveIcon(iconAfter)}
      iconBefore={resolveIcon(iconBefore)}
    />
  ),
  argTypes: {
    text: { control: false },
    iconAfter: { control: false }
  },
  args: {
    iconBefore: 'Placeholder',
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
        iconBefore={resolveIcon(iconBefore)}
      />
      <ButtonComponent
        {...rest}
        text={text}
        iconAfter={resolveIcon(iconAfter)}
      />
    </StoryComponentContainer>
  ),
  args: {
    iconBefore: 'Placeholder',
    iconAfter: 'Placeholder'
  },
  name: 'Icon Before / After'
}

export const Mode: Story = {
  render: (args: StoryButtonProps) => (
    <StoryWrapper>
      {buttonModes.map(mode => (
        <StoryComponentContainer key={mode} vertical>
          <StoryLabel label={mode} vertical />
          <ButtonComponent
            {...args}
            iconAfter={resolveIcon(args.iconAfter)}
            iconBefore={resolveIcon(args.iconBefore)}
            mode={mode}
          />
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
  ),
  argTypes: {
    mode: { control: false }
  }
}

export const Size: Story = {
  render: (args: StoryButtonProps) => (
    <StoryWrapper>
      {defaultSizes.map((size) => (
        <StoryComponentContainer key={size} vertical>
          <StoryLabel label={size} vertical />
          <ButtonComponent
            {...args}
            iconAfter={resolveIcon(args.iconAfter)}
            iconBefore={resolveIcon(args.iconBefore)}
            size={size as ButtonSize}
          />
        </StoryComponentContainer>
      ))}
    </StoryWrapper>
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
        iconAfter={resolveIcon(iconAfter)}
        text={text}
      />
      <ButtonComponent
        {...rest}
        iconAfter={resolveIcon(iconAfter)}
        iconBefore={resolveIcon(iconBefore)}
      />
    </StoryComponentContainer>
  ),
  args: {
    loading: true,
    iconBefore: 'Placeholder'
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
        iconAfter={resolveIcon(iconAfter)}
        iconBefore={resolveIcon(iconBefore)}
        text={text}
      />
      <ButtonComponent
        {...rest}
        iconAfter={resolveIcon(iconAfter)}
        iconBefore={resolveIcon(iconBefore)}
      />
    </StoryComponentContainer>
  ),
  args: {
    disabled: true,
    iconBefore: 'Placeholder'
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
            iconAfter={resolveIcon(args.iconAfter)}
            iconBefore={resolveIcon(args.iconBefore)}
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
