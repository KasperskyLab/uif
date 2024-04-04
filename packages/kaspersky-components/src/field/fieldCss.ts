import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { FieldCssConfig, FieldViewProps } from './types'
import {
  FIELD_MAX_WIDTH,
  FIELD_LABEL_DEFAULT_WIDTH,
  FIELD_CONTROL_MIN_WIDTH,
  inputLikeControlsClassnames
} from './constants'

const fromProps = getFromProps<FieldCssConfig>()

export const fieldCss = css<FieldViewProps>`
  width: 100%;
  max-width: ${FIELD_MAX_WIDTH};
  display: flex;

  .kl6-field-control-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 4px;

    .kl6-field-control-box {
      display: flex;
      align-items: center;
      gap: 8px;
      ${({ controlWidth }) => (
        controlWidth
          ? `width: ${controlWidth}px; flex: none;`
          : `min-width: ${FIELD_CONTROL_MIN_WIDTH};`
      )}

      .kl6-field-control-additional {
        width: 16px;
        height: 16px;
        cursor: pointer;

        .kl6-field-help-icon {
          color: ${fromProps('helpIconColor')};
        }
      }
    }
  }

  // control should stretch when there is no label
  &&:not(:has( > .kl6-field-label)) .kl6-field-control-wrapper {
    flex: 1;
  }

  // offset for different controls
  .kl6-field-control-wrapper:has( > div > .ant-checkbox-wrapper, .ant-checkbox-group, .ant-radio-group) {
    > :not(.kl6-field-control-box) {
      margin-left: 18px;
    }
  }

  .kl6-field-control-wrapper:has( > div > .ant-toggle-wrapper > .form-label) {
    > :not(.kl6-field-control-box) {
      margin-left: 40px;
    }
  }

  // Label positions
  &.kl6-field-label-position-before {
    .kl6-field-label {
      padding-right: 16px;
    }
  }

  &.kl6-field-label-position-after {
    flex-direction: row-reverse;
    justify-content: flex-end;

    .kl6-field-label {
      padding-left: 16px;
    }
  }

  &.kl6-field-label-position-top {
    flex-direction: column;
    gap: 4px;
  }

  &.kl6-field-label-position-before {
    &.kl6-field-label-type-default {
      .kl6-field-label {
        width: ${FIELD_LABEL_DEFAULT_WIDTH};
      }
      .kl6-field-control-wrapper {
        flex: 1;
      }
    }

    &.kl6-field-label-type-full {
      .kl6-field-label {
        flex: 1;
        min-width: ${FIELD_LABEL_DEFAULT_WIDTH});
      }
      .kl6-field-control-wrapper {
        flex: none;
      }
    }

    &.kl6-field-label-type-stretch {
      .kl6-field-label {
        min-width: auto;
      }
      .kl6-field-control-wrapper {
        flex: 1;
      }
    }
  }
  
  &.kl6-field-grid-layout {
    display: grid;
    grid-template-columns: ${({ gridLayout, controlWidth }) => (
      `${gridLayout?.firstCol || FIELD_LABEL_DEFAULT_WIDTH} ${controlWidth || gridLayout?.secondCol || 'auto'}`
    )}
  }

  &.kl6-field-grid-layout,
  &.kl6-field-label-position-before,
  &.kl6-field-label-position-after {
    &.kl6-field-label-type-default,
    &.kl6-field-label-type-full {
      .kl6-field-label + .kl6-field-control-wrapper {
        max-width: ${({ controlWidth }) => (
          controlWidth || `calc(${FIELD_MAX_WIDTH} - ${FIELD_LABEL_DEFAULT_WIDTH})`
        )};
      }
    }
    &:has(.kl6-field-control-box > ${inputLikeControlsClassnames.join(', ')}) .kl6-field-label {
      padding-top: 6px;
    }
  }

  ${({ controlWidth }) => controlWidth && '&& .kl6-field-control-wrapper { flex: none; }'}
`
