import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import { StoryLayout } from '../../.storybook/StoryComponents'
import { badges } from '../../.storybook/badges.js'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { iconTypes16 } from '../../icons/names16'
import { iconTypes24 } from '../../icons/names24'
import { iconTypes48 } from '../../icons/names48'
import { useTheme } from '../../design-system/theme/hooks'
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

const Wrapper = styled(StoryLayout)`
  .wrapper {
    display: inline-block;
    text-align: center;
    width: 120px;
    margin: 4px 4px 8px 4px;
  }
  .icon-name {
    font-size: 10px;
  }
  .icon-wrap {
    display: inline-block;
    width: 100%;
  }
`

export const Default: Story<IconProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Text>Component for inserting icons. Contains many icons of different sizes. To draw the icon, you need to pass the request size and name. It is possible to set the css color of the icon through color. themedColor provides the ability to set a color from the token design. Props color is a priority</Text>
      <Icon name="Account" size="large" themedColor="baseicon-invert"/>
      <Icon name="Account" size="large" color="red" themedColor="baseicon-invert"/>
    </StoryLayout>
  )
}

export const Small: Story<IconProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Text type="H3">Small (16px)</Text>
      <Text>To get it, you need to pass the request size="small"</Text>
      <Wrapper>
      {iconTypes16.map(name => {
        return <div className='wrapper' key={name}>
          <Icon size='small' name={name} key={name} className='icon-wrap' />
          <Text className='icon-name'>{name}</Text>
        </div>
      })}
      </Wrapper>
    </StoryLayout>
  )
}

export const Medium: Story<IconProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Text type="H3">Medium (24px)</Text>
      <Text>To get it, you need to pass the request size="medium"</Text>
      <Wrapper>
        {iconTypes24.map(name => {
          return <div className='wrapper' key={name}>
            <Icon size='medium' name={name} key={name} className='icon-wrap' />
            <Text className='icon-name'>{name}</Text>
          </div>
        })}
      </Wrapper>
    </StoryLayout>
  )
}

export const Large: Story<IconProps> = (args) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Text type="H3">Large (48px)</Text>
      <Text>To get it, you need to pass the request size="large"</Text>
      <Wrapper>
        {iconTypes48.map(name => {
          return <div className='wrapper' key={name}>
            <Icon size='large' name={name} key={name} className='icon-wrap' />
            <Text className='icon-name'>{name}</Text>
          </div>
        })}
      </Wrapper>
    </StoryLayout>
  )
}
