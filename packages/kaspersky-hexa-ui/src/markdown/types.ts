import { themeColors } from '@design-system/tokens'
import { TestingProps } from '@helpers/typesHelpers'

export type MarkdownProps = TestingProps & {
  value: string,
  /** Returns markdown data inside <span /> (no inner styles applied) */
  withoutTextStyle?: boolean,
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  /** Enable DOMPurify sanitize */
  purify?: boolean
  /** Render soft line breaks (\n) as <br> */
  breaks?: boolean
}
