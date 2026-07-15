import { useMemo } from 'react'
import { createEditor, Editor, Element as SlateElement, NodeEntry } from 'slate'
import { withHistory } from 'slate-history'
import { withReact } from 'slate-react'

import { isBlockStylePluginType, isElementPluginType, isLeafPluginType, isSlateBlockStyleElement } from '../helpers/typeGuards'
import { PluginsFlat } from '../types'

export const useRichTextEditor = (flatPlugins: PluginsFlat) => {
  const editorInstance = useMemo(() => {
    const nextEditor = withReact(withHistory(createEditor()))
    const { isInline, insertText, insertBreak, deleteBackward, normalizeNode } = nextEditor

    const runPluginsPipeline = <TArgs,>(
      pluginsToRun: PluginsFlat,
      getBehavior: (plugin: PluginsFlat[number]) => ((props: any) => void) | undefined,
      fallback: () => void,
      options: { args?: TArgs; entry?: NodeEntry } = {}
    ) => {
      const run = pluginsToRun.reduceRight<() => void>((next, plugin) => {
        const behavior = getBehavior(plugin)

        if (!behavior) {
          return next
        }

        return () =>
          behavior({
            editor: nextEditor,
            next,
            args: options.args,
            entry: options.entry
          })
      }, fallback)

      run()
    }

    const getActivePlugins = (): PluginsFlat => {
      return flatPlugins.filter((plugin) => {
        if (isElementPluginType(plugin)) {
          const [match] = Editor.nodes(nextEditor, {
            match: (node) => SlateElement.isElement(node) && node.type === plugin.elementType
          })

          return !!match
        }

        if (isBlockStylePluginType(plugin)) {
          const [match] = Editor.nodes(nextEditor, {
            match: (node) => isSlateBlockStyleElement(node) && node.blockStyleType === plugin.blockStyleType
          })

          return !!match
        }

        if (isLeafPluginType(plugin)) {
          const marks = Editor.marks(nextEditor)
          return marks ? marks[plugin.leafType] === true : false
        }

        return false
      })
    }

    nextEditor.isInline = (element) => {
      const inlinePlugin = flatPlugins.find(
        (plugin) =>
          isElementPluginType(plugin) &&
          plugin.elementType === element.type &&
          plugin.inline
      )

      if (inlinePlugin) {
        return true
      }

      return isInline(element)
    }

    nextEditor.insertText = (text) => {
      runPluginsPipeline(
        getActivePlugins(),
        (plugin) => plugin.behavior?.onInsertText,
        () => insertText(text),
        { args: text }
      )
    }

    nextEditor.insertBreak = () => {
      runPluginsPipeline(
        getActivePlugins(),
        (plugin) => plugin.behavior?.onBreak,
        () => insertBreak()
      )
    }

    nextEditor.deleteBackward = (unit) => {
      runPluginsPipeline(
        getActivePlugins(),
        (plugin) => plugin.behavior?.onDeleteBackward,
        () => deleteBackward(unit),
        { args: unit }
      )
    }

    nextEditor.normalizeNode = (entry) => {
      runPluginsPipeline(
        flatPlugins,
        (plugin) => plugin.behavior?.onNormalizeNode,
        () => normalizeNode(entry),
        { entry }
      )
    }

    return nextEditor
  }, [flatPlugins])

  return editorInstance
}