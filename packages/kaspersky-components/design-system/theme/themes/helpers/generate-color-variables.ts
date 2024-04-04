import { colors as paletteColors } from '../light/colors'
import { focus } from '@design-system/tokens/focus'

function camelToKebabCase (str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1$2').toLowerCase()
}

export function generateColorVariables<T extends string> (
  colors: typeof paletteColors,
  variant: T,
  override: Partial<Record<T, T>> = {}
) : Record<string, any> {
  const actualVariant = override[variant] || variant
  const kebabCaseVariant = camelToKebabCase(actualVariant as T)
  const colorsTags = colors.tags as Record<string, string>
  const colorsTagsOutlined = colors.tagsoutlined as Record<string, string>

  const result = {
    light: {
      filled: {
        normal: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-base`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        hover: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-hover`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        active: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-active`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        ...focus({ colors })
      },
      outlined: {
        normal: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-base`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        hover: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-hover`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        active: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-active`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        ...focus({ colors })
      }
    },
    dark: {
      filled: {
        normal: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-base`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        hover: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-hover`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        active: {
          background: `${colorsTags[`${kebabCaseVariant}-bg-active`]}`,
          color: `${colorsTags[`${kebabCaseVariant}`]}`,
          border: 'none'
        },
        ...focus({ colors })
      },
      outlined: {
        normal: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-base`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        hover: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-hover`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        active: {
          background: `${colorsTagsOutlined[`${kebabCaseVariant}-bg-active`]}`,
          color: `${colorsTagsOutlined[`${kebabCaseVariant}`]}`,
          border: `1px solid ${
            colorsTagsOutlined[`${kebabCaseVariant}-border`]
          }`
        },
        ...focus({ colors })
      }
    }
  }

  return result
}
