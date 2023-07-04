import styled from 'styled-components'
import { ILayoutProps } from '../types'
import { layoutBaseCss, singleRowLayoutCss, twoColumnsLayoutCss, defaultLayoutCss } from './layoutsCss'

export const LayoutBase = styled.div.withConfig<ILayoutProps>({
  shouldForwardProp: prop => ['className', 'kl-id', 'children'].includes(prop)
})`${layoutBaseCss}`

export const SingleRowLayout = styled(LayoutBase)`${singleRowLayoutCss}`

export const TwoColumnsLayout = styled(LayoutBase)`${twoColumnsLayoutCss}`

export const DefaultLayout = styled(LayoutBase)`${defaultLayoutCss}`
