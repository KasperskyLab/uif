import React, { FC, Suspense } from 'react'

import { MarkdownProps } from './types'

const Markdown = React.lazy(() =>
  import('./Markdown').then(({ Markdown }) => ({ default: Markdown })))

/**
 * Code-split wrapper around {@link Markdown}.
 *
 * `Markdown` statically pulls in `markdown-it` + `dompurify` (~170KB). Components
 * that only render markdown for optional/interactive content (tooltips, hints)
 * should use `LazyMarkdown` so those deps land in a separate async chunk instead
 * of every consumer bundle that touches the host component.
 */
export const LazyMarkdown: FC<MarkdownProps> = (props) => (
  <Suspense fallback={null}>
    <Markdown {...props} />
  </Suspense>
)
