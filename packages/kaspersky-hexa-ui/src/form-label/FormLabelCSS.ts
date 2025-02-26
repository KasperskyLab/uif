import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { FormLabelColorConfig } from './types'

const fromProps = getFromProps<FormLabelColorConfig>()

const FormLabelCSS = css`
  display: inline;
  
  & .form-label-text {
    color: ${fromProps('text')};
  }
  
  & .form-label-asterisk {
    color: ${fromProps('asterisk')};
  }
  
  & .form-label-info-icon {
    margin-left: 4px;
    height: 10px;
    transform: translateY(3px);
    display: inline-flex;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }

  .form-label-tag {
    margin: 0 0 0 8px;
  }

  .form-label-tag + .form-label-tag {
    margin-left: 4px;
  }
`

export default FormLabelCSS
