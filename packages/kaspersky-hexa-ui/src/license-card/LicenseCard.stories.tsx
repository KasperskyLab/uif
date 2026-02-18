import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { Expand } from '@src/expand'
import { Field } from '@src/field'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Menu2, Multidevice, StatusErrorSolid, StatusOkSolid, UserGroup } from '@kaspersky/hexa-ui-icons/16'
import { ArrowForward } from '@kaspersky/hexa-ui-icons/24'

import MetaData from './__meta__/meta.json'
import { LicenseCard } from './LicenseCard'
import { licenseCardModes, LicenseCardProps } from './types'

type Story = StoryObj<LicenseCardProps>

const meta: Meta<LicenseCardProps> = {
  title: 'Hexa UI Components/LicenseCard',
  component: LicenseCard,
  ...withDesignControls<LicenseCardProps>({
    componentName: 'licenseCard',
    meta: {
      argTypes: {
        title: {
          control: { type: 'text' }
        },
        number: {
          control: { type: 'text' }
        },
        mode: {
          control: 'select',
          options: licenseCardModes
        },
        compact: {
          control: 'boolean'
        },
        minWidth: {
          control: { type: 'range', min: 100, max: 1000, step: 10 }
        },
        iconBefore: {
          control: { type: 'select' },
          mapping: {
            '-': null,
            'icon': <ArrowForward/>
          },
          options: ['-', 'icon']
        },
        elementAfter: {
          control: { type: 'select' },
          mapping: {
            '-': null,
            'action-button': <ActionButton
              icon={<Menu2 />}
              size="large"
            />
          },
          options: ['-', 'action-button']
        }
      },
      args: {
        title: 'Kaspersky | Russian Edition',
        number: 'EB29584F-A5C7-4510-9B8B-01A6FA952B95',
        mode: 'valid',
        expirationDate: new Date('03/01/2025'),
        activationDate: new Date('03/01/2023'),
        term: 730,
        daysRemaining: 340,
        compact: false,
        iconBefore: '-',
        elementAfter: '-',
        minWidth: 600
      },
      parameters: {
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

const DefaultFooter = () => (
  <Space gap={8}>
    <Button mode="primary">Replace license</Button>
    <Button mode="secondary">Delete license</Button>
  </Space>
)

const DefaultChildren = () => {
  const modulesItems = [
    {
      icon: <StatusOkSolid />,
      label: 'Advanced Responses',
      mode: 'positive' as const
    },
    {
      icon: <StatusErrorSolid />,
      label: 'GosSOPKA',
      mode: 'critical' as const
    },
    {
      icon: <StatusErrorSolid />,
      label: 'High Availability',
      mode: 'not-active' as const
    },
    {
      icon: <StatusOkSolid />,
      label: 'NetFlow',
      mode: 'positive' as const
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '20px' }}>
      <Field
        label="Devices"
        labelPosition="before"
        control={
          <Space gap={6}>
            <Multidevice color="neutral.neutralsecondary"/>
            <Space gap={2}>
              <Text>50</Text>
              <Text color="secondary">of 100</Text>
            </Space>
          </Space>
        }
        gridLayout={{
          firstCol: '4fr',
          secondCol: '8fr'
        }}
      />
      <Field
        label="Accounts"
        labelPosition="before"
        control={
          <Space gap={6}>
            <UserGroup color="neutral.neutralsecondary"/>
            <Space gap={2}>
              <Text>15</Text>
              <Text color="secondary">of 50</Text>
            </Space>
          </Space>
        }
        gridLayout={{
          firstCol: '4fr',
          secondCol: '8fr'
        }}
      />
      <Field
        label="Tenants"
        labelPosition="before"
        control={
          <Space gap={6}>
            <UserGroup color="gray"/>
            <Link>15</Link>
          </Space>
        }
        gridLayout={{
          firstCol: '4fr',
          secondCol: '8fr'
        }}
      />
      <Field
        label="Modules"
        labelPosition="before"
        control={
          <Expand
            collapsedHeight={48}
            klId="modules-expand"
            testId="modules-expand-test"
          >
            <Status.Group items={modulesItems} align="start" />
          </Expand>
        }
        gridLayout={{
          firstCol: '4fr',
          secondCol: '8fr'
        }}
      />
    </div>
  )
}

export const Basic: Story = {}

export const LicenseCardWithIconBefore: Story = {
  args: {
    iconBefore: 'icon'
  }
}

export const LicenseCardWithButtons: Story = {
  args: {
    actions: <DefaultFooter/>
  }
}

export const LicenseCardWithChildren: Story = {
  args: {
    children: <DefaultChildren/>
  }
}

export const CompactLicenseCard: Story = {
  args: {
    compact: true,
    elementAfter: 'action-button'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.license_card },
  render: args => <ThemedPalette {...args}/>
}
