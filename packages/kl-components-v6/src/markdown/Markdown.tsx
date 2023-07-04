import React from 'react'
import MarkdownIt from 'markdown-it'
import _ from 'lodash'
import { MarkdownProps } from './types'
import { StyledText } from './markdownCss'

export const Markdown = ({
  value,
  ...restProps
}: MarkdownProps & React.ComponentProps<typeof StyledText>) => {
  return (
    <StyledText {...restProps} dangerouslySetInnerHTML={{ __html: md.render(value) }} />
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
