import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StoryLayout } from '@sb/StoryComponents'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Icon } from './Icon'
import { Text } from '../typography/text'
import { IconProps } from './types'
import MetaData from './__meta__/meta.json'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
} as Meta

export const Default: Story<IconProps> = () => {
  return (
    <StoryLayout>
      <Text>Компонент больше не поставляется, но сохраняет обратную совместимость. Пользуйтесь пакетом @kaspersky/icons: <a href={'https://kasperskylab.github.io/uif/icons/'}>StoryBook kl-icons</a></Text>
    </StoryLayout>
  )
}
