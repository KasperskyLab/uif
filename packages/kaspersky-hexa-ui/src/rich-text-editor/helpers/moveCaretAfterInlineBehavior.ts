import { Transforms } from 'slate'

import { PluginBehaviorProps } from '../types'

export const moveCaretAfterInlineBehavior = ({
  editor,
  next
}: PluginBehaviorProps): void => {
  next()

  if (editor.selection) {
    Transforms.move(editor)
  }
}