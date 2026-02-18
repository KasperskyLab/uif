import { ConfigProvider } from '@design-system/context'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { Text } from '../typography'

import MetaData from './__meta__/meta.json'
import { Locale } from './Locale'
import { LocaleProps } from './types'

const meta: Meta<LocaleProps> = {
  title: 'Hexa UI Components/Locale',
  component: Locale,
  parameters: {
    badges: [badges.dev, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic: StoryObj<LocaleProps> = {
  render: (args: LocaleProps) => (
    <ConfigProvider>
      <Text>
        <Locale {...args} />
      </Text>
    </ConfigProvider>
  ),
  args: {
    localizationKey: 'severity.high'
  }
}
