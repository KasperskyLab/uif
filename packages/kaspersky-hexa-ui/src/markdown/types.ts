import { themeColors } from '@design-system/tokens'
import { TestingProps } from '@helpers/typesHelpers'

export type MarkdownProps = TestingProps & {
  value: string,
  themedColor?: keyof typeof themeColors['text-icons-elements']
}
