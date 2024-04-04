import { CodeViewerCssConfig } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { HighlightStyle, tags } from '@codemirror/highlight'

const fromProps = getFromProps<CodeViewerCssConfig>()

export const createTagsColors = (cssConfig: CodeViewerCssConfig): HighlightStyle[] => {
  const tagsColors = [HighlightStyle.define([
    {
      tag: [
        tags.atom,
        tags.bool,
        tags.separator
      ],
      color: fromProps('tagColors.mainTagColor')({ cssConfig })
    },
    {
      tag: [
        tags.name,
        tags.namespace,
        tags.deleted,
        tags.character,
        tags.propertyName,
        tags.macroName,
        tags.keyword
      ],
      color: fromProps('tagColors.tagColor1')({ cssConfig })
    },
    {
      tag: [
        tags.color,
        tags.constant(tags.name),
        tags.standard(tags.name),
        tags.typeName,
        tags.className,
        tags.number,
        tags.changed,
        tags.annotation,
        tags.modifier,
        tags.self,
        tags.processingInstruction,
        tags.string,
        tags.inserted
      ],
      color: fromProps('tagColors.tagColor2')({ cssConfig })
    },
    {
      tag: [
        tags.meta,
        tags.comment,
        tags.heading,
        tags.special(tags.variableName),
        tags.definition(tags.name)
      ],
      color: fromProps('tagColors.tagColor3')({ cssConfig })
    },
    {
      tag: [

        tags.url,
        tags.escape,
        tags.regexp,
        tags.link,
        tags.special(tags.string),
        tags.typeName
      ],
      color: fromProps('tagColors.tagColor4')({ cssConfig })
    }
  ])]

  return tagsColors
}
