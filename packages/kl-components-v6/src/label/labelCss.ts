import { css } from 'styled-components'
import { SPACES } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { LabelCssConfig } from './types'

const fromProps = getFromProps<LabelCssConfig>()

export const labelCss = css`
  display: flex;

  &.label-position-none {
    align-items: center;

    .label-text {
      display: none;
    }
  }

  &.label-position-top {
    flex-direction: column;
    align-items: start;
    width: 100%;
    
    .label-item {
      width: 100%;
    }
  }

  &.label-position-aside {
    align-items: center;
    .label-item {
      max-width: 710px;
      min-width: 200px;
      align-items: center;
  
      > *:first-child {
        width: 100%
      }
    }
  }

  &.label-position-right {
    align-items: center;
  
    .label-item {
      max-width: 710px;
      min-width: 200px;
      align-items: center;
  
      > *:first-child {
        width: 100%
      }
    }
    .label-text {
        order: 1;
        min-width: 0;
        margin: 0 1rem;
    }
  }

  &.label-position-top {
    flex-direction: column;
    align-items: start;
    width: 100%;

    .label-item {
      width: 100%;
    }
  }

  &.label-type-full {
    .label-text {
      flex: 1;
    }
  }

  &.label-type-stretch {
    .label-text {
      min-width: 0;
    }
  }

  .label-item {
    display: flex;
  }

  &.error-text {
    align-items: baseline;
    
    .label-item {
      display: block;
    }
  }


  .label-text {
    padding: ${SPACES[1]}px ${SPACES[4]}px ${SPACES[1]}px 0;

    &.required:after {
      display: inline-block;
      vertical-align: top;
      color: ${fromProps('requiredColor')};
      line-height: 1;
      content: "*";
    }
  }

  .label-error {
    padding: ${SPACES[2]}px 0;
  }
`
