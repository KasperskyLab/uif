import { Size as SizeType } from '@design-system/types'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { TooltipCompositionWarning } from '@sb/components/Warnings'
import { PropsWithTooltip } from '@sb/helpers'
import { renderVariants, StoryComponentContainer } from '@sb/StoryComponents'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { Button as ButtonComponent } from './Button'
import { buttonModes, ButtonProps, ButtonSize, splitButtonModes, SplitButtonProps } from './types'

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
    design: MetaData.pixsoView
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

type StorySplitButtonProps = PropsWithTooltip<Omit<SplitButtonProps, 'iconBefore'> & {
  iconBefore?: IconsType
}>

type StorySplitButton = StoryObj<StorySplitButtonProps>

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
  render: (args) =>
    renderVariants(
      buttonModes.map(mode => ({
        label: mode,
        content:
          <ButtonComponent
            {...args}
            iconAfter={resolveIcon(args.iconAfter)}
            iconBefore={resolveIcon(args.iconBefore)}
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
            iconAfter={resolveIcon(args.iconAfter)}
            iconBefore={resolveIcon(args.iconBefore)}
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

export const ButtonGroup: Story = {
  render: () => (
    <ButtonComponent.Group>
      <ButtonComponent>Button #1</ButtonComponent>
      <ButtonComponent>Button #2</ButtonComponent>
      <ButtonComponent>Button #3</ButtonComponent>
    </ButtonComponent.Group>
  ),
  name: 'Button.Group'
}

const splitButtonDesignLink = 'https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=81565%3A341129'
const splitButtonDesignPixsoView = 'https://pixso.net/app/design/SqjasIRc_lKBtFD9yBGwbA'

export const SplitButton: StorySplitButton = {
  render: (args) => (
    <Space gap={16} width="100%">
      <SectionMessage closable={false} mode="info">
        <Space gap="grouped">
          <Link text="Documentation in Pixso" target="_blank" href={splitButtonDesignPixsoView} decoration="icon" />
          <Link text="Component in Pixso" target="_blank" href={splitButtonDesignLink} decoration="icon" />
        </Space>
        <Space gap="grouped">
          <Link text="Документация в Pixso" target="_blank" href={splitButtonDesignPixsoView} decoration="icon" />
          <Link text="Компонент в Pixso" target="_blank" href={splitButtonDesignLink} decoration="icon" />
        </Space>
      </SectionMessage>
      <ButtonComponent.SplitButton {...args} iconBefore={resolveIcon(args.iconBefore)} />
    </Space>
  ),
  argTypes: {
    mode: {
      options: splitButtonModes,
      control: { type: 'select' }
    },
    dropdownPlacement: {
      options: ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
      control: { type: 'select' }
    }
  },
  args: {
    text: 'Split button',
    items: [
      {
        children: 'Option 1',
        description: 'Some description'
      },
      {
        children: 'Option 2'
      },
      {
        children: 'Option 3',
        description: 'Some description',
        componentsBefore: [
          <Placeholder key="placeholder-icon" />
        ]
      }
    ]
  },
  parameters: {
    controls: {
      exclude: /(tooltip|isPressed|size|iconAfter)/
    }
  },
  name: 'Button.SplitButton'
}
