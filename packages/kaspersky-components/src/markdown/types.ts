import { themeColors } from '../../design-system/tokens'

export interface MarkdownProps {
  value: string,
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  klId?: string
}
