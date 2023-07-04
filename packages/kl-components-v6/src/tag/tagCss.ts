import { css } from 'styled-components'
import { SPACES } from '../../design-system/theme/themes/variables'
import { getFromProps } from '../../helpers/getFromProps'
import { TagCssConfig } from './types'

const fromProps = getFromProps<TagCssConfig>()

export const tagCss = css`
  display: inline-flex;
  align-items: center;
  border-radius: ${fromProps('borderRadius')};
  border: none;
  padding:  ${fromProps('padding')};
  gap: ${fromProps('gap')};
  background-color: ${fromProps('backgroundColor')};
  color: ${fromProps('color')};

  &[disabled] {
    background-color: ${fromProps('disabled.backgroundColor')};
    color: ${fromProps('disabled.color')};
  }
  
  &.ant-tag-hidden {
    display: none;
  }

  .ant-tag-close-icon {
    margin-left: 0;
    width:  ${SPACES[8]}px;
    height: ${SPACES[8]}px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0 !important;

    svg {
      color: ${fromProps('closableIconColor')};
    }
  }

  .kl-components-tag-text {
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
  }
`
