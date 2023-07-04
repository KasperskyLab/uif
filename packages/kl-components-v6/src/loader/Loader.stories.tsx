import React from 'react'
import styled from 'styled-components'
import { Loader } from './Loader'
import { ILoaderProps, LoaderMode, LoaderSize } from './types'
import Meta from './__meta__/meta.json'

import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Size } from '../../design-system/types'
import { useTheme } from '@design-system/theme/hooks'
import { StoryLayout } from '@sb/StoryComponents'

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const LoaderTemplate = (props: ILoaderProps) => {
  const theme = useTheme()

  return (
    <StoryLayout theme={theme.key}>
      <Loader {...props} />
    </StoryLayout>
  )
}

export const Basic = LoaderTemplate.bind({})

const CenteredTemplate = ({
  centered = true,
  ...props
}: ILoaderProps) => {
  const theme = useTheme()

  return (
    <StoryLayout theme={theme.key} style={{ height: 'calc(100vh - 16 * 2px)' }}>
      <Loader centered={centered} {...props} />
    </StoryLayout>
  )
}

export const Centered = CenteredTemplate.bind({})

const LoadersContainer = styled.div`
  display: flex;
  gap: 12px;
`

const ModesTemplate = (props: ILoaderProps) => {
  const theme = useTheme()
  const modes: LoaderMode[] = ['default', 'inverted']
  return (
    <StoryLayout theme={theme.key}>
      <LoadersContainer>
        {modes.map(mode => (
          <Loader key={mode} mode={mode} {...props} />
        ))}
      </LoadersContainer>
    </StoryLayout>
  )
}

export const Modes = ModesTemplate.bind({})

const SizesTemplate = (props: ILoaderProps) => {
  const theme = useTheme()
  const sizes: LoaderSize[] = [Size.ExtraSmall, Size.Small, Size.Medium, Size.Large, Size.ExtraLarge]
  return (
    <StoryLayout theme={theme.key}>
      <LoadersContainer>
        {sizes.map(size => (
          <Loader key={size} size={size} {...props} />
        ))}
      </LoadersContainer>
    </StoryLayout>
  )
}

export const Sizes = SizesTemplate.bind({})
