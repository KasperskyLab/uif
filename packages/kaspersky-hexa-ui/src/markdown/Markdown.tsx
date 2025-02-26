import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import _ from 'lodash'
import MarkdownIt from 'markdown-it'
import React from 'react'

import { StyledText } from './markdownCss'
import { MarkdownProps } from './types'

export const Markdown = ({
  value,
  ...restProps
}: MarkdownProps & React.ComponentProps<typeof StyledText>) => {
  const { testAttributes, ...rest } = useTestAttribute(restProps)
  return (
    <StyledText
      {...testAttributes}
      {...rest}
      dangerouslySetInnerHTML={{ __html: md.render(value || '') }}
    />
  )
}

const md = MarkdownIt()

const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, rules) {
  return rules.renderToken(tokens, idx, options)
}
md.renderer.rules.link_open = function (tokens, idx, options, env, rules) {
  const linkOpenToken = tokens[idx]
  const tokenHtmlAttributes = _.fromPairs(linkOpenToken.attrs)
  if (tokenHtmlAttributes.href && tokenHtmlAttributes.href.includes('#/')) {
    return defaultRender(tokens, idx, options, env, rules)
  }
  const aIndex = linkOpenToken.attrIndex('target')
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank'])
  } else {
    const { attrs } = tokens[idx]
    if (attrs) {
      attrs[aIndex][1] = '_blank'
    }
  }
  return defaultRender(tokens, idx, options, env, rules)
}
