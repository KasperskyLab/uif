import { themeColors } from '@design-system/tokens'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls, sbSetDefaultValue } from '@sb/helpers'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Severity } from '../Severity'
import { SeverityProps } from '../types'

import { SeverityDocs } from './SeverityDocs'

const meta: Meta<SeverityProps> = {
  title: 'Hexa UI Components/Severity',
  component: Severity,
  argTypes: {
    ...sbHideControls(['theme', 'icon'])
  },
  args: {
    testId: 'severity-test-id',
    klId: 'severity-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData, SeverityDocs)
    }
  }
}
export default meta

type Story = StoryObj<SeverityProps>

export const Basic: Story = {
  render: (args: SeverityProps) => (
    <Space gap={4} direction="horizontal">
      {Object.keys(themeColors.criticalitystatuses)
        .map((status, i) =>
          <Severity {...args} key={i} icon={args.icon} mode={status as SeverityProps['mode']}>{status}</Severity>)}
    </Space>
  ),
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      control: false
    }
  }
}

export const L18n: Story = {
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      ...sbSetDefaultValue('positive')
    }
  }
}

export const Interactive: Story = {
  args: {
    children: 'Severity'
  },
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses)
    }
  }
}
