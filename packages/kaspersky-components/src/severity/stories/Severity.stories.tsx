import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { themeColors } from '@design-system/tokens'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls, sbSetDefaultValue } from '@helpers/storybookHelpers'
import { Space } from '@src/space'
import { Severity } from '../Severity'
import { SeverityDocs } from './SeverityDocs'
import MetaData from '../__meta__/meta.json'
import { SeverityProps } from '../types'

const meta: Meta<SeverityProps> = {
  title: 'Atoms/Severity',
  component: Severity,
  argTypes: {
    ...sbHideControls(['theme', 'icon'])
  },
  args: {
    testId: 'severity-test-id',
    klId: 'severity-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData, SeverityDocs)
    }
  }
}
export default meta

type Story = StoryObj<SeverityProps>

export const Basic: Story = {
  render: (args: SeverityProps) => (
    <Space size={4} direction="horizontal">
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
