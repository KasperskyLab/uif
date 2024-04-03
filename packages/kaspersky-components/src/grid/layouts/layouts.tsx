import styled from 'styled-components'
import { LayoutProps } from '../types'
import { layoutBaseCss, singleRowLayoutCss, twoColumnsLayoutCss, defaultLayoutCss } from './layoutsCss'

export const LayoutBase = styled.div.withConfig<LayoutProps>({
  shouldForwardProp: prop => ['className', 'data-testid', 'kl-id', 'children', 'data-component-version'].includes(prop)
})`${layoutBaseCss}`

export const SingleRowLayout = styled(LayoutBase)`${singleRowLayoutCss}`

export const TwoColumnsLayout = styled(LayoutBase)`${twoColumnsLayoutCss}`

export const DefaultLayout = styled(LayoutBase)`${defaultLayoutCss}`
