import { css } from 'styled-components'

import { ILoaderViewProps, LoaderCssConfig } from './types'

import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<LoaderCssConfig>()

export const loaderCss = css<ILoaderViewProps>`
  ${(props) => {
    return props.centered
      ? `&.ant-spin {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }`
      : ''
  }
}
    line-height: 0;
    & > svg {
      height: ${fromProps('height')};
      width: ${fromProps('width')};
    }
`

export const iconCss = css`
  & path {
    stroke: ${({ color }: { color: string }) => color}
  }
`
