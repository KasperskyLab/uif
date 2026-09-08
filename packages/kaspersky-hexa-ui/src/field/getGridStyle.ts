import { CSSProperties } from 'react'

import { FIELD_LABEL_DEFAULT_WIDTH } from './constants'
import { FieldProps, LayoutPreset } from './types'

type GridStyleProps = Pick<FieldProps, 'gridLayout' | 'gridPreset' | 'controlWidth'>

function oneRowLayout (gridTemplateColumns: string): CSSProperties {
  return {
    maxWidth: 'none',
    gridTemplateAreas: '"label control ."',
    gridTemplateColumns,
    gap: '16px'
  }
}

function twoRowsLayout (gridTemplateColumns: string): CSSProperties {
  return {
    maxWidth: 'none',
    gridTemplateAreas: '"label ." "control ."',
    gridTemplateColumns
  }
}

export function getGridStyle ({ gridLayout, gridPreset, controlWidth }: GridStyleProps): CSSProperties {
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

  return {
    gridTemplateAreas: '"label control"',
    gridTemplateColumns: `${label} ${control}`
  }
}
