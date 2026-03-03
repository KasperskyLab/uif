import { AlignCenterPlugin, AlignLeftPlugin, AlignRightPlugin } from './Plugins/AlignPlugins'
import { BoldPlugin } from './Plugins/BoldPlugin'
import { BulletedListPlugin } from './Plugins/BulletedListPlugin'
import { CodePlugin } from './Plugins/CodePlugin'
import { ListItemPlugin } from './Plugins/DefaultPlugins'
import { HeadingOnePlugin, HeadingThreePlugin, HeadingTwoPlugin } from './Plugins/HeadingPlugins'
import { NumberedListPlugin } from './Plugins/NumberedListPlugin'
import { UnderlinePlugin } from './Plugins/UnderlinePlugin'

export { ListItemPlugin }
export { RichTextEditor } from './RichTextEditor'
export { type Descendant } from 'slate'
export { CustomFormats } from './customTypes'

export const allPlugins = [
  BoldPlugin,
  BulletedListPlugin,
  CodePlugin,
  HeadingOnePlugin,
  HeadingTwoPlugin,
  HeadingThreePlugin,
  NumberedListPlugin,
  UnderlinePlugin,
  AlignCenterPlugin,
  AlignLeftPlugin,
  AlignRightPlugin
]
