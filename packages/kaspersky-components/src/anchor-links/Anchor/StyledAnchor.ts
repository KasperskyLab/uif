import { Anchor as AnchorAntd } from 'antd'
import styled, { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { AnchorCssConfig, AnchorViewProps } from './types'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'

const fromProps = getFromProps<AnchorCssConfig>()

const style = css`
  
  &.ant-anchor-wrapper {
    overflow: visible;
    background: transparent;
  }
  
  & .ant-anchor {
    display: flex;
    background: ${fromProps('background')};
    width: 100%;
    padding: ${SPACES[2]}px;
    border-radius: ${BORDER_RADIUS[6]}px;
    overflow: hidden;

    &-ink {
      display: none;
    }
  }

  .container {
    display: flex;
    gap: 2px;
    width: 100%;
    position: relative;
    align-items: center;
  }

  .dropdown-container {
    position: absolute;
    right: 4px;
  }
`

export const StyledAnchor = styled(AnchorAntd as any).withConfig<AnchorViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as string)
})`
  ${style}
`

export const StyledAnchorWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})``
