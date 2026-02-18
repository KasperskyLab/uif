import { getFromProps } from '@helpers/getFromProps'
import { Markdown } from '@src/markdown'
import { Text } from '@src/typography'
import styled, { css } from 'styled-components'

import { PlaceholderCssConfig } from './types'

const fromProps = getFromProps<PlaceholderCssConfig>()

export const Title = styled(Text)``

export const Description = styled(Markdown)`
  text-align: ${props => props.$textAlign};
  color: ${props => props.$cssConfig.description};
`

export const PlaceholderImage = styled.span`
  height: ${fromProps('imageSize')}px;
  width: ${fromProps('imageSize')}px;
`

export const placeholderCss = css`
  padding: ${fromProps('padding')}px;
  background: ${fromProps('background')};
  width: 100%;
  height: 100%;
  ${Title} {
    color: ${fromProps('title')};
  }
`
