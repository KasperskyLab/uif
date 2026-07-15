import { type DividerProps } from '@src/divider'

import {
  AlignCenterPlugin,
  AlignLeftPlugin,
  AlignRightPlugin,
  BoldPlugin,
  BulletedListPlugin,
  CodePlugin,
  createLinkPlugin,
  HeadingOnePlugin,
  HeadingThreePlugin,
  HeadingTwoPlugin,
  LinkPlugin,
  ListItemPlugin,
  NumberedListPlugin,
  ParagraphPlugin,
  UnderlinePlugin
} from './Plugins'
import { PluginsGrouped } from './types'

export { MemorizedRichTextEditor as RichTextEditor } from './RichTextEditorContainer'
export * from './types'

export const allPlugins: PluginsGrouped = [
  [BoldPlugin, UnderlinePlugin, CodePlugin, LinkPlugin],
  [NumberedListPlugin, BulletedListPlugin],
  [HeadingOnePlugin, HeadingTwoPlugin, HeadingThreePlugin, ParagraphPlugin],
  [AlignLeftPlugin, AlignCenterPlugin, AlignRightPlugin]
]
export const dividerPluginsProps: DividerProps = {
  direction: 'vertical',
  mode: 'bold'
}

export {
  AlignCenterPlugin,
  AlignLeftPlugin,
  AlignRightPlugin,
  BoldPlugin,
  BulletedListPlugin,
  CodePlugin,
  createLinkPlugin,
  HeadingOnePlugin,
  HeadingThreePlugin,
  HeadingTwoPlugin,
  LinkPlugin,
  ListItemPlugin,
  NumberedListPlugin,
  ParagraphPlugin,
  UnderlinePlugin
}
export { type Descendant } from 'slate'
export { type LinkPopupProps } from './components'
export { CustomFormats } from './customTypes'