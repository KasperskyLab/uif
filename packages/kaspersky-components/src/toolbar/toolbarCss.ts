import { css } from 'styled-components'
import { BORDER_RADIUS, SPACES } from '../../design-system/theme/themes/variables'
import { getFromProps } from '../../helpers/getFromProps'
import { ToolbarCssConfig } from './types'

const fromProps = getFromProps<ToolbarCssConfig>()

export const toolbarCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: ${`${SPACES[4]}px ${SPACES[8]}px`};
  gap: ${`${SPACES[32]}px`};
  background: ${fromProps('mode.normal.background')};
  border-radius: ${`${BORDER_RADIUS[4]}px`};
  min-width: max-content;

  .kl-components-button-text{
    display: flex;
  }

  .ant-btn > span[role=img] + span, 
  .ant-btn > span + span[role=img] {
    margin-left: 0px;
}

  &.sticky {
    position: sticky;
    top: ${(props: { cssConfig: ToolbarCssConfig, sticky?: number }) =>
    props.sticky ? props.sticky : 0}px;
    z-index: 2;
  }
`
