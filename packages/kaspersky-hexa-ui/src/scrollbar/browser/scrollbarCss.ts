import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { ScrollbarCssConfig } from '../types'

const fromProps = getFromProps<ScrollbarCssConfig>()

export const scrollbarCss = css`
  ::-webkit-scrollbar {
    height: ${SPACES[4]}px;
    width: ${SPACES[4]}px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${fromProps('enabled.trackColor')};
    border-radius: ${BORDER_RADIUS[2]}px;
  }
    
  ::-webkit-scrollbar-thumb {
    background-color: ${fromProps('enabled.thumbColor')};
    border-radius: ${BORDER_RADIUS[2]}px;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: ${fromProps('hover.trackColor')};
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${fromProps('hover.thumbColor')};
  }

  ::-webkit-scrollbar-track:active {
    background-color: ${fromProps('active.trackColor')};
  }
    
  ::-webkit-scrollbar-thumb:active {
    background-color: ${fromProps('active.thumbColor')};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${fromProps('enabled.trackColor')};
  }

  scrollbar-color: ${fromProps('enabled.thumbColor')} ${fromProps('enabled.trackColor')};
`
