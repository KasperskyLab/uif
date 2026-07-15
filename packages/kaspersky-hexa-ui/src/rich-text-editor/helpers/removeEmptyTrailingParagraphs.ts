import {
  Descendant,
  Editor,
  Element,
  Text,
  Transforms
} from 'slate'

const isEmptyParagraph = (node: Descendant) => {
  return (
    Element.isElement(node) &&
    node.type === 'paragraph' &&
    node.children.length === 1 &&
    Text.isText(node.children[0]) &&
    node.children[0].text === ''
  )
}

export const removeEmptyTrailingParagraphs = (editor: Editor): void => {
  Editor.withoutNormalizing(editor, () => {
    const pathsToRemove: number[] = []
    for (let i = editor.children.length - 1; i >= 0; i--) {
      const node = editor.children[i]
      if (isEmptyParagraph(node)) {
        pathsToRemove.push(i)
      } else {
        break
      }
    }

    for (const index of pathsToRemove) {
      Transforms.removeNodes(editor, { at: [index] })
    }
  })
}
