import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

export const resolveColorToken = (str) => {
  const [iconColorSection, iconColorName] = str?.split('.') || []
  return iconColorName
    ? productColors.icon[iconColorSection][iconColorName]
        ? `var(--icon--${iconColorSection}--${iconColorName})`
        : null
    : null
}
