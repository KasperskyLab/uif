import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import {
  checkboxLikeControlsClassnames,
  FIELD_CONTROL_MIN_WIDTH,
  FIELD_LABEL_DEFAULT_WIDTH,
  FIELD_MAX_WIDTH,
  inputLikeControlsClassnames
} from './constants'
import { FieldCssConfig, FieldViewProps, LayoutPreset } from './types'

const inputLikeControlSelector = inputLikeControlsClassnames.map(control => (
  `.kl6-field-control-box ${control}`
)).join(', ')

const checkboxLikeControlSelector = checkboxLikeControlsClassnames.map(control => (
  `.kl6-field-control-box > ${control}`
)).join(', ')

const fromProps = getFromProps<FieldCssConfig>()

function oneRowLayout (gridTemplateColumns: string) {
  return `
    max-width: none;
    grid-template-areas: "label control .";
    grid-template-columns: ${gridTemplateColumns};
    gap: 16px;
  `
}

function twoRowsLayout (gridTemplateColumns: string) {
  return `
    max-width: none;
    grid-template-areas: "label ." "control .";
    grid-template-columns: ${gridTemplateColumns}};
  `
}

function getGridStyle ({ gridLayout, gridPreset, controlWidth }: FieldViewProps): string {
  if (!gridLayout && gridPreset) {
    switch (gridPreset) {
      case LayoutPreset.p_6:
        return twoRowsLayout('6fr 6fr')
      case LayoutPreset.p_8:
        return twoRowsLayout('8fr 4fr')
      case LayoutPreset.p_12:
        return twoRowsLayout('12fr 0fr')
      case LayoutPreset.p_3_6:
        return oneRowLayout('3fr 6fr 3fr')
      case LayoutPreset.p_3_8:
        return oneRowLayout('3fr 8fr 1fr')
      case LayoutPreset.p_4_6:
        return oneRowLayout('4fr 6fr 2fr')
      case LayoutPreset.p_4_8:
        return oneRowLayout('4fr 8fr')
    }
  }

  if (typeof gridLayout === 'string') {
    return oneRowLayout(gridLayout)
  }

  const label = gridLayout?.firstCol || FIELD_LABEL_DEFAULT_WIDTH
  const control = controlWidth || gridLayout?.secondCol || 'auto'

  return `
    grid-template-areas: "label control";
    grid-template-columns: ${label} ${control};
  `
}

export const fieldCss = css<FieldViewProps>`
  width: 100%;
  max-width: ${FIELD_MAX_WIDTH};
  display: flex;

  .kl6-field-label {
    grid-area: label;
  }

  .kl6-field-control-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 4px;
    grid-area: control;

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
  .kl6-field-control-wrapper:has(${checkboxLikeControlSelector}) {
    > :not(.kl6-field-control-box) {
      margin-left: 18px;
    }
  }

  .kl6-field-control-wrapper:has( > div > .ant-toggle-wrapper > .form-label) {
    > :not(.kl6-field-control-box) {
      margin-left: 36px;
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
        min-width: initial;
      }
    }

    &.kl6-field-label-type-full {
      .kl6-field-label {
        flex: 1;
        min-width: ${FIELD_LABEL_DEFAULT_WIDTH};
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
    ${getGridStyle}
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
    &:has(${inputLikeControlSelector}) .kl6-field-label {
      padding-top: 6px;
    }
  }

  ${({ controlWidth }) => controlWidth && '&& .kl6-field-control-wrapper { flex: none; }'}
`
