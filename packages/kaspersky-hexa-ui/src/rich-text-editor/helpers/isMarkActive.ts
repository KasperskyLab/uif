import { Editor, Text } from 'slate'

import { CustomEditor, CustomTextKey } from '../customTypes'

const getCurrentTextNode = (editor: CustomEditor): Text | null => {
  if (!editor.selection) {
    return null
  }

  const [match] = Editor.nodes(editor, {
    at: editor.selection,
    match: (node): node is Text => Text.isText(node)
  })

  return match ? (match[0] as Text) : null
}

export const isMarkActive = (editor: CustomEditor, format: CustomTextKey): boolean => {
  const marks = Editor.marks(editor)

  if (marks?.[format] !== undefined) {
    return marks[format] === true
  }

  const currentTextNode = getCurrentTextNode(editor)

  if (currentTextNode && format in currentTextNode) {
    return currentTextNode[format] === true
  }

  return false
}
