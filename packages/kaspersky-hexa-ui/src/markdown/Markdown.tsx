import { RenderAsComponent } from '@helpers/components/RenderAsComponent'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import DOMPurify from 'dompurify'
import fromPairs from 'lodash/fromPairs'
import MarkdownIt from 'markdown-it'
import React, { useMemo } from 'react'

import { StyledText } from './markdownCss'
import { MarkdownProps } from './types'

export const Markdown = ({
  value,
  withoutTextStyle,
  purify = false,
  breaks = false,
  ...restProps
}: MarkdownProps & React.ComponentProps<typeof StyledText>) => {
  const { testAttributes, ...rest } = useTestAttribute(restProps)

  const md = useMemo(() => {
    const instance = MarkdownIt({ breaks })

    const defaultRender = instance.renderer.rules.link_open || function (tokens, idx, options, env, rules) {
      return rules.renderToken(tokens, idx, options)
    }
    instance.renderer.rules.link_open = function (tokens, idx, options, env, rules) {
      const linkOpenToken = tokens[idx]
      const tokenHtmlAttributes = fromPairs(linkOpenToken.attrs)
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

    return instance
  }, [breaks])

  const html = useMemo(() => {
    // to prevent wrapping in <p/>; raw styles = no wrappers
    const rawHtml = withoutTextStyle ? md.renderInline(value || '') : md.render(value || '')
    return purify ? sanitizeHtml(rawHtml): rawHtml
  }, [value, withoutTextStyle, purify])

  return (
    <RenderAsComponent
      as={withoutTextStyle ? 'span' : StyledText}
      {...testAttributes}
      {...rest}
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}

function sanitizeHtml (html: string): string {
  return DOMPurify.sanitize(html, {
    // Политика "безопасного режима": запрет ссылок и картинок
    FORBID_TAGS: ['a', 'img'],
    FORBID_ATTR: ['href', 'src', 'srcset', 'xlink:href'],
    ALLOW_UNKNOWN_PROTOCOLS: false,
    USE_PROFILES: { html: true }
  })
}
