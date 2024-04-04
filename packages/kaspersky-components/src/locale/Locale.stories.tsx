import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Locale } from './Locale'
import { ConfigProvider } from '@design-system/context'
import { Text } from '../typography'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { LocaleProps } from './types'

const meta: Meta<LocaleProps> = {
  title: 'Atoms/Locale',
  component: Locale,
  parameters: {
    badges: [badges.dev],
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
