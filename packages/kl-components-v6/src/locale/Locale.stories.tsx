import React from 'react'
import { Locale } from './Locale'
import { ConfigProvider } from '../../design-system/context'
import { Text } from '../typography'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { ILocaleProps } from './types'

export default {
  title: 'Atoms/Locale',
  component: Locale,
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic = ({
  localizationKey = 'severity.high'
}: ILocaleProps) => {
  return (
    <ConfigProvider>
      <Text>
        <Locale localizationKey={localizationKey} />
      </Text>
    </ConfigProvider>
  )
}
