import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { FormLabelColorConfig } from './types'
import { SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<FormLabelColorConfig>()

const FormLabelCSS = css`
  display: inline-flex;
  align-items: baseline;
  
  & .form-label-text {
    color: ${fromProps('text')};
  }
  
  & .form-label-asterisk {
    color: ${fromProps('asterisk')};
  }
  
  & .form-label-info-icon {
    color: ${fromProps('icon')};
    margin-left: ${SPACES[2]}px;
    transform: translateY(3px);
    display: inline-flex;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: ${SPACES[2]}px;
    }
  }
`

export default FormLabelCSS
