import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { Scrollbar } from './Scrollbar'
import { ScrollbarProps } from './types'
import { content, wrapperCss } from '../common'

const meta: Meta = {
  title: 'Atoms/Scrollbar/Component',
  component: Scrollbar,
  argTypes: {
    autoHide: {
      description: 'Will the scrollbars be hidden when the element is not active'
    },
    ...sbHideControls(['theme'])
  },
  args: {
    autoHide: false
  },
  parameters: {
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

const VerticalWrapper = styled.div<{ theme: ThemeKey }>`
  ${wrapperCss}
`

const HorizontalWrapper = styled.div<{ theme: ThemeKey }>`
  p { width: 800px; }
  ${wrapperCss}
`

const Wrapper = styled.div<{ theme: ThemeKey }>`
  p { width: 600px; }
  ${wrapperCss}
`

export const Vertical: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <VerticalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </VerticalWrapper>
    )
  }
}

export const Horizontal: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <HorizontalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </HorizontalWrapper>
    )
  }
}

export const Both: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <Wrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </Wrapper>
    )
  }
}
