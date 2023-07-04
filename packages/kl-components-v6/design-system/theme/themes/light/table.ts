import { TableColorConfig, TableSizeConfig } from '../../../../src/table/types'
import { ComponentThemeContext } from '../config'
import { getTextSizes, TextTypes } from './typography'
import { checkbox } from './checkbox'
import { SPACES } from '../variables'

export const table = ({ colors }: ComponentThemeContext): TableColorConfig => ({
  headCell: {
    normal: {
      borderColor: colors.textIconsElements.primary
    }
  },
  cell: {
    normal: {
      borderColor: colors.elements.seporatorbold
    },
    hover: {
      backgroundColor: colors.bg.alternative
    }
  },
  root: {
    backgroundColor: colors.bg.base,
    color: colors.textIconsElements.primary
  },
  disabled: {
    backgroundColor: colors.bg.alternative
  },
  resize: {
    borderColor: colors.defaultPalette.marina700
  },
  selected: {
    backgroundColor: colors.surface.marina
  },
  checkbox: checkbox({ colors })
})

export const tableSizes: TableSizeConfig = {
  headSizes: getTextSizes(TextTypes.L3),
  cellSizes: getTextSizes(TextTypes.BTR3),
  dragHandler: {
    size: `${SPACES[19]}`
  }
}
