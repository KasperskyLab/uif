import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { BadgeCssConfig } from './types'

const fromProps = getFromProps<BadgeCssConfig>()

export const badgeCss = css`
  .ant-badge-count {
    background-color: ${fromProps('background')};
    color: ${fromProps('color')};
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
    min-width: ${fromProps('lineHeight')};
    box-shadow: none;
  }


  &.is-transparent {
    .ant-badge-count {
      display: flex;
      border-radius: 0;
      height: auto;
      min-width: auto;
      padding: 0;
    }

    .ant-scroll-number-only {
      height: auto;
      display: flex;
    }
  }

  &::selection,
  & .ant-badge-count::selection {
    color: inherit;
    background-color: inherit;
  }

  .ant-badge-dot {
    transform: none;
    height: 8px;
    width: 8px;
    box-shadow: none;
  }
`
