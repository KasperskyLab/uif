import { checkbox as defaultCheckboxCreator } from '../light/checkbox'
import { ComponentThemeContext } from '../config'
import { CheckboxColorConfig } from '../../../../src/checkbox/types'
import { SPACES } from '../variables'

export const checkbox = ({ colors }: ComponentThemeContext): CheckboxColorConfig => {
  const defaultCheckbox = defaultCheckboxCreator({ colors })

  return {
    ...defaultCheckbox,
    normal: {
      color: colors.textIconsElements.primary,
      radius: `${SPACES[2]}px`,
      bgColor: colors.bg.base,
      borderColor: colors.elements.line,
      checkColor: colors.textIconsElements.primary,
      checkBgColor: colors.mainInteractPrimary
    },
    hover: {
      bgColor: colors.bg.alternative2,
      borderColor: colors.elements.line,
      checkColor: colors.textIconsElements.primary,
      checkBgColor: colors.mainInteractSecondary
    },
    active: {
      bgColor: colors.mainInteractPressed,
      borderColor: colors.mainInteractPressed,
      checkColor: colors.mainInteractPrimary,
      checkBgColor: colors.mainInteractPressed
    },
    focus: {
      bgColor: colors.bg.alternative,
      borderColor: 'red',
      checkColor: colors.textIconsElements.primary,
      checkBgColor: colors.mainInteractFocus,
      outline: `0 0 0 ${SPACES[1]}px ${colors.mainInteractFocus}`
    },
    disabled: {
      color: colors.textIconsElements.disabled,
      bgColor: colors.elements.seporatorbold,
      borderColor: colors.elements.seporatorbold,
      checkColor: colors.textIconsElements.disabled,
      checkBgColor: colors.elements.seporatorbold
    }
  }
}
