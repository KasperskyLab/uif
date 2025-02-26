import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { QuickFilter as QuickFilterComponent } from '@src/index'
import { QuickFilterProps } from '@src/quick-filter'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'

import { mockedFilters } from './mocks'
import { WithTableExample } from './WithTableExample'

const meta: Meta<QuickFilterProps> = {
  title: 'Hexa UI Components/QuickFilter',
  component: QuickFilterComponent,
  ...withDesignControls<QuickFilterProps>({
    componentName: 'quickFilter',
    meta: {
      args: {
        filters: mockedFilters,
        testId: 'quick-filter-test-id',
        klId: 'quick-filter-kl-id'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        }
      }
    }
  })
}
export default meta

type Story = StoryObj<QuickFilterProps>

export const QuickFilter: Story = {
  render: (args) => (
    <Space gap={16} direction="vertical" align="start">
      <SectionMessage closable={false} mode="info">
        <P>If labelPosition equals to &apos;top&apos;, it is recommended to replace Toggle with Segmented button.</P>
        <P>Если лейблы расположены сверху, рекомендуется заменить Toggle на Segmented Button.</P>
      </SectionMessage>
      <QuickFilterComponent {...args} />
    </Space>
  )
}

export const WithTable: Story = {
  render: (args) => <WithTableExample {...args} />
}
