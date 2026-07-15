import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Button } from '@src/button'
import { Expand } from '@src/expand'
import { Field } from '@src/field'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import {
  Menu2,
  Multidevice,
  StatusErrorSolid,
  StatusOkSolid,
  UserGroup
} from '@kaspersky/hexa-ui-icons/16'
import { ArrowForward } from '@kaspersky/hexa-ui-icons/24'

import { ActionButton } from '@src/action-button'

import { LicenseCard } from '../LicenseCard'
import { LicenseCardProps } from '../types'

import { licenseCardStorySettings } from '../LicenseCard.stories'

const meta = {
  title: 'Hexa UI Components/LicenseCard/Stories',
  component: LicenseCard,
  tags: ['!autodocs'],
  ...licenseCardStorySettings
} satisfies Meta<typeof LicenseCard>

export default meta

type Story = StoryObj<LicenseCardProps>

const DefaultFooter = () => (
  <Space gap={8}>
    <Button mode="primary">Replace license</Button>
    <Button mode="secondary">Delete license</Button>
  </Space>
)

const DefaultChildren = () => {
  const modulesItems = [
    { icon: <StatusOkSolid />, label: 'Advanced Responses', mode: 'positive' as const },
    { icon: <StatusErrorSolid />, label: 'GosSOPKA', mode: 'critical' as const },
    { icon: <StatusErrorSolid />, label: 'High Availability', mode: 'not-active' as const },
    { icon: <StatusOkSolid />, label: 'NetFlow', mode: 'positive' as const }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '20px' }}>
      <Field
        label="Devices"
        labelPosition="before"
        control={(
          <Space gap={6}>
            <Multidevice color="neutral.neutralsecondary" />
            <Space gap={2}>
              <Text>50</Text>
              <Text color="secondary">of 100</Text>
            </Space>
          </Space>
        )}
        gridLayout={{ firstCol: '4fr', secondCol: '8fr' }}
      />
      <Field
        label="Accounts"
        labelPosition="before"
        control={(
          <Space gap={6}>
            <UserGroup color="neutral.neutralsecondary" />
            <Space gap={2}>
              <Text>15</Text>
              <Text color="secondary">of 50</Text>
            </Space>
          </Space>
        )}
        gridLayout={{ firstCol: '4fr', secondCol: '8fr' }}
      />
      <Field
        label="Tenants"
        labelPosition="before"
        control={(
          <Space gap={6}>
            <UserGroup color="gray" />
            <Link>15</Link>
          </Space>
        )}
        gridLayout={{ firstCol: '4fr', secondCol: '8fr' }}
      />
      <Field
        label="Modules"
        labelPosition="before"
        control={(
          <Expand collapsedHeight={48} klId="modules-expand" testId="modules-expand-test">
            <Status.Group items={modulesItems} align="start" />
          </Expand>
        )}
        gridLayout={{ firstCol: '4fr', secondCol: '8fr' }}
      />
    </div>
  )
}

export const Basic: Story = {}

export const WithIconBefore: Story = {
  args: {
    iconBefore: <ArrowForward />
  }
}

export const WithActions: Story = {
  args: {
    actions: <DefaultFooter />
  }
}

export const WithChildren: Story = {
  args: {
    children: <DefaultChildren />
  }
}

export const OnlyChildren: Story = {
  args: {
    statusSection: false,
    validitySection: false,
    children: <DefaultChildren />
  }
}

export const Compact: Story = {
  args: {
    title: 'Kaspersky | Russian Edition | Professional corporate license with extended access to updates and technical support for teams of any size',
    style: { maxWidth: 600 },
    compact: true,
    elementAfter: <ActionButton icon={<Menu2 />} size="large" />
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.license_card },
  render: args => <ThemedPalette {...args} />
}
