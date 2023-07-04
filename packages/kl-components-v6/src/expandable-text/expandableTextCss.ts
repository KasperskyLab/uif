import { css } from 'styled-components'
import { IStyledTextProps } from './types'

export const expandableTextCss = css<IStyledTextProps>`
  word-break: break-all;
  ${({ expanded }) => (
    !expanded && css`
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      overflow: hidden;
      max-width: 100%;
      transition: all 0 ease 50ms;
      display: block;
      ${
    ({ clipped }: IStyledTextProps) => (
      clipped
        ? 'padding-right: 20px;'
        : ''
    )
    }
      
      kl-auto-link > div {
        display: inline;
      }

      .text-expander {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        text-decoration: none;
      }
    `
  )}
`
