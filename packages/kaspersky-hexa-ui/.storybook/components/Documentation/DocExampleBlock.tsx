import { DocMarkdownContent, DocMarkdownDescription } from '@sb/components/Documentation/DocMarkdownDescription'
import { mergeDocumentationLiveScope } from '@sb/components/Documentation/documentationLiveScope'
import { type CodeBlockMode, Editor } from '@sb/components/Documentation/Editor'
import { Text } from '@src/typography'
import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

const Block = styled.section`
  margin-bottom: 32px;

  &:has(+ section[data-without-title]) {
    margin-bottom: 16px;
  }
`

const Footer = styled.div`
  margin-top: 24px;
`

const Description = styled.div`
  padding: 4px 0 8px 0;

  a {
    color: var(--common--accent--enabled);
  }
  a:hover {
    color: var(--common--accent--hover);
  }
`

export type DocExampleBlockProps = {
  title?: string
  /** Размер заголовка примера. По умолчанию — H3. */
  titleSize?: 'H3' | 'H4' | 'H5'
  /** Markdown: абзацы через пустую строку, перенос строки — через `breaks` */
  description?: string | ReactNode
  code?: string
  /** Служебный код для react-live: выполняется в preview, но не показывается в редакторе. Может содержать stateful App для интерактивного примера. */
  setupCode?: string
  /** Минимальная высота preview, px */
  minHeight?: number
  /** Максимальная высота preview, px */
  maxHeight?: number
  /** Максимум видимых строк кода; при большем объёме — прокрутка */
  maxCodeLines?: number
  /** Направление расположения компонентов в preview: horizontal (по умолчанию) или vertical */
  previewDirection?: 'horizontal' | 'vertical'
  /** Отступ между компонентами в preview, px. По умолчанию — 16 */
  previewGap?: number
  /**
   * collapsed (по умолчанию) — превью; ссылка Show/Hide code под блоком;
   * visible — превью и кодовый блок;
   * hidden — только превью.
   */
  codeBlock?: CodeBlockMode
  /** dont — фон preview: semantic token danger_subtle--enabled */
  mode?: 'dont'
  /** Дополнение к стандартному react-live scope документации (компонент-специфичные данные). */
  scope?: Record<string, unknown>
  footer?: ReactNode
}

export const DocExampleBlock: React.FC<DocExampleBlockProps> = ({
  title,
  titleSize = 'H3',
  description,
  code,
  setupCode,
  minHeight,
  maxHeight,
  maxCodeLines,
  previewDirection,
  previewGap,
  codeBlock,
  mode,
  scope: additionalScope,
  footer
}) => {
  const liveScope = useMemo(
    () => mergeDocumentationLiveScope(additionalScope),
    [additionalScope]
  )

  return (
    <Block {...(!title && { 'data-without-title': true })}>
      {title && <Text type={titleSize}>{title}</Text>}
      {description && (
        <Description>
          <DocMarkdownContent>
            <DocMarkdownDescription value={description} />
          </DocMarkdownContent>
        </Description>
      )}
      {code && (
        <Editor
          code={code}
          setupCode={setupCode}
          minHeight={minHeight}
          maxHeight={maxHeight}
          maxCodeLines={maxCodeLines}
          previewDirection={previewDirection}
          previewGap={previewGap}
          codeBlock={codeBlock}
          mode={mode}
          scope={liveScope}
        />
      )}
      {footer && <Footer>{footer}</Footer>}
    </Block>
  )
}
