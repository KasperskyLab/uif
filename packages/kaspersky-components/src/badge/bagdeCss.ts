import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { BadgeCssConfig } from './types'

const fromProps = getFromProps<BadgeCssConfig>()

export const badgeCss = css`
  .ant-badge-count {
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};

    background-color: ${fromProps('background')};
    color: ${fromProps('color')};
    height: 16px;
    min-width: 26px;
    padding: ${fromProps('padding')};
    box-shadow: none;
    border-radius: ${fromProps('borderRadius')};
  }

  .ant-badge-dot {
    transform: none;
    height: 8px;
    width: 8px;
    box-shadow: none;
  }
`
