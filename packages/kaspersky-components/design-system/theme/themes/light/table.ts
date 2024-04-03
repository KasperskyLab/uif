import { TableColorConfig } from '@src/table'
import { ComponentThemeContext } from '../config'
import { checkbox } from './checkbox'
import { radio } from './radio'

export const table = ({ colors }: ComponentThemeContext): TableColorConfig => ({
  headCell: {
    normal: {
      borderColor: colors.textIconsElements.primary
    },
    hover: {
      backgroundColor: colors.elements['separator-solid']
    },
    active: {
      backgroundColor: colors.elements['separator-bold-solid']
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
  checkbox: checkbox({ colors }),
  radio: radio({ colors }).default,
  filters: {
    toolbar: {
      backgroundColor: colors.elements.separator
    },
    item: {
      backgroundColor: colors.bg.alternative2,
      title: {
        color: colors.textIconsElements['secondary2-solid']
      }
    }
  }
})
