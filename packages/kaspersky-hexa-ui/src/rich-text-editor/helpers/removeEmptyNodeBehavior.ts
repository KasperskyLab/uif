import { Editor, Element as SlateElement, NodeEntry, Transforms } from 'slate'

import { CustomFormats } from '../customTypes'
import { PluginBehaviorProps } from '../types'

export const removeEmptyNodeBehavior =
  (type: CustomFormats) =>
    ({ editor, entry, next }: PluginBehaviorProps<NodeEntry>): void => {
      if (entry) {
        const [node, path] = entry

        if (
          SlateElement.isElement(node) &&
          node.type === type &&
          Editor.string(editor, path) === ''
        ) {
          Transforms.unwrapNodes(editor, { at: path })
          return
        }
      }

      next()
    }