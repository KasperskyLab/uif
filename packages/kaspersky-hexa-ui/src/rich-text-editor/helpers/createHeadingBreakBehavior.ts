import { Editor, Element as SlateElement, Transforms } from 'slate'

import { CustomEditor, CustomFormats, ParagraphElement } from '../customTypes'
import { PluginBehaviorProps } from '../types'

type BreakResetType = ParagraphElement['type']

const isSelectionInsideElementType = (
  editor: CustomEditor,
  type: string
): boolean => {
  const [match] = Editor.nodes(editor, {
    match: (node) => SlateElement.isElement(node) && node.type === type
  })

  return !!match
}

export const createHeadingBreakBehavior = ({
  targetType,
  resetTo = CustomFormats.PARAGRAPH
}: {
  targetType: string;
  resetTo?: BreakResetType;
}) => {
  return ({ editor, next }: PluginBehaviorProps): void => {
    const isInsideTarget = isSelectionInsideElementType(editor, targetType)

    next()

    if (!isInsideTarget) {
      return
    }

    Transforms.setNodes(editor, {
      type: resetTo,
      blockStyleType: undefined
    })

    Editor.removeMark(editor, CustomFormats.BOLD)
  }
}