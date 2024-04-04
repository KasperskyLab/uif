import { css } from 'styled-components'
import { LoaderViewProps, LoaderCssConfig } from './types'
import { getFromProps } from '@helpers/getFromProps'

const fromProps = getFromProps<LoaderCssConfig>()

export const loaderCss = css<LoaderViewProps>`
  &.ant-spinner-centered {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  line-height: 0;

  & > svg {
    height: ${fromProps('height')};
    width: ${fromProps('width')};
  }

  .ant-spin-text {
    color: ${fromProps('color')};
    font-family: ${fromProps('fontFamily')};
    font-weight: ${fromProps('fontWeight')};
    font-size: ${fromProps('fontSize')};
    font-style: ${fromProps('fontStyle')};
    line-height: ${fromProps('lineHeight')};
    letter-spacing: ${fromProps('letterSpacing')};
    padding-top: ${fromProps('gap')};
  }
`

export const iconCss = css`
  & path {
    stroke: ${({ color }: { color: string }) => color}
  }
`
