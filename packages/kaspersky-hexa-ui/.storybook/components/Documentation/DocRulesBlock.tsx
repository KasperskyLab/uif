/**
 * MDX usage examples:
 *
 * Text list:
 *
 * <DocRulesBlock
 *   useTitle="Use"
 *   doNotUseTitle="Do not use"
 *   use={[
 *     'Use for direct actions: save, copy, delete',
 *     'Keep button styling consistent at the same level'
 *   ]}
 *   doNotUse={[
 *     'Too many buttons on one screen',
 *     'Vague labels such as “Do it”'
 *   ]}
 * />
 *
 * With DocExampleBlock inside:
 *
 * <DocRulesBlock title="Several buttons in one context">
 *   <DocRulesBlock.Use>
 *     <DocExampleBlock
 *       description="If two buttons sit next to each other, one of them should be `secondary`."
 *       codeBlock="hidden"
 *       code={`
 *         <Button mode="primary" text="Save" />
 *         <Button mode="secondary" text="Close" />
 *       `}
 *     />
 *   </DocRulesBlock.Use>
 *   <DocRulesBlock.Dont>
 *     <DocExampleBlock
 *       description="Do not place two `primary` buttons side by side."
 *       mode="dont"
 *       codeBlock="hidden"
 *       code={`
 *         <Button mode="primary" text="Save" />
 *         <Button mode="primary" text="Close" />
 *       `}
 *     />
 *   </DocRulesBlock.Dont>
 * </DocRulesBlock>
 */
import { DocMarkdownContent, DocMarkdownDescription } from '@sb/components/Documentation/DocMarkdownDescription'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, {
  Children,
  isValidElement,
  ReactElement,
  ReactNode
} from 'react'

import { Cross, Ok } from '@kaspersky/hexa-ui-icons/16'

import styles from './DocRulesBlock.module.scss'

type Tone = 'use' | 'dont'

const TONE_CONFIG = {
  use: {
    defaultTitle: 'Use',
    Icon: Ok
  },
  dont: {
    defaultTitle: 'Do not use',
    Icon: Cross
  }
} as const

export type DocRulesBlockColumnProps = {
  /** Column heading. Defaults to Use / Do not use. */
  title?: string
  /**
   * List items (strings) or arbitrary content.
   * Strings render as guidelines with an icon; ReactNode is passed through
   * (for example, `DocExampleBlock`).
   */
  items?: ReactNode | ReactNode[]
  children?: ReactNode
}

export type DocRulesBlockProps = {
  title?: string
  /** Block heading size. Defaults to H3. */
  titleSize?: 'H3' | 'H4' | 'H5'
  /** Markdown: paragraphs via a blank line, line breaks via `breaks`. */
  description?: string | ReactNode
  /** Positive examples. Strings render as a checklist; ReactNode is passed through. */
  use?: ReactNode | ReactNode[]
  /** Negative examples. Strings render as a cross list; ReactNode is passed through. */
  doNotUse?: ReactNode | ReactNode[]
  /** Positive column heading. Defaults to Use. */
  useTitle?: string
  /** Negative column heading. Defaults to Do not use. */
  doNotUseTitle?: string
  /** Columns via `DocRulesBlock.Use` / `DocRulesBlock.Dont`. */
  children?: ReactNode
}

const normalizeContent = (value?: ReactNode | ReactNode[]): ReactNode[] => {
  if (value == null || typeof value === 'boolean') {
    return []
  }

  const items = Array.isArray(value) ? value : [value]

  return items.filter(item => {
    if (item == null || typeof item === 'boolean') {
      return false
    }
    if (typeof item === 'string') {
      return item.trim() !== ''
    }
    return true
  })
}

const isColumnOfType = (
  child: ReactNode,
  type: React.FC<DocRulesBlockColumnProps>
): child is ReactElement<DocRulesBlockColumnProps> => isValidElement(child) && child.type === type

const Use: React.FC<DocRulesBlockColumnProps> = () => null
Use.displayName = 'DocRulesBlock.Use'

const Dont: React.FC<DocRulesBlockColumnProps> = () => null
Dont.displayName = 'DocRulesBlock.Dont'

const ColumnView: React.FC<{
  tone: Tone
  title?: string
  content: ReactNode[]
}> = ({ tone, title, content }) => {
  if (content.length === 0) {
    return null
  }

  const config = tone === 'dont' ? TONE_CONFIG.dont : TONE_CONFIG.use
  const Icon = config.Icon
  const heading = title ?? config.defaultTitle

  return (
    <section
      className={cn(styles.column, tone === 'dont' && styles.dont)}
      aria-label={heading}
    >
      <div className={styles.header}>
        <span className={styles.headerIcon} aria-hidden>
          <Icon />
        </span>
        <Text type="BTM2">{heading}</Text>
      </div>
      <div className={styles.items}>
        {content.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <div key={index} className={styles.item}>
                <span className={styles.bullet} aria-hidden>
                  <Icon />
                </span>
                <DocMarkdownContent className={styles.itemText}>
                  <DocMarkdownDescription value={item} />
                </DocMarkdownContent>
              </div>
            )
          }

          return <React.Fragment key={index}>{item}</React.Fragment>
        })}
      </div>
    </section>
  )
}

const collectColumn = (
  props: DocRulesBlockColumnProps | undefined
): { title?: string, content: ReactNode[] } => {
  if (!props) {
    return { content: [] }
  }

  return {
    title: props.title,
    content: [
      ...normalizeContent(props.items),
      ...normalizeContent(props.children)
    ]
  }
}

export const DocRulesBlock: React.FC<DocRulesBlockProps> & {
  Use: typeof Use
  Dont: typeof Dont
} = ({
  title,
  titleSize = 'H3',
  description,
  use,
  doNotUse,
  useTitle,
  doNotUseTitle,
  children
}) => {
  let useColumn = collectColumn({ title: useTitle, items: use })
  let dontColumn = collectColumn({ title: doNotUseTitle, items: doNotUse })

  Children.forEach(children, child => {
    if (isColumnOfType(child, Use)) {
      const nested = collectColumn(child.props)
      useColumn = {
        title: nested.title ?? useColumn.title,
        content: [...useColumn.content, ...nested.content]
      }
    }

    if (isColumnOfType(child, Dont)) {
      const nested = collectColumn(child.props)
      dontColumn = {
        title: nested.title ?? dontColumn.title,
        content: [...dontColumn.content, ...nested.content]
      }
    }
  })

  const columns = [useColumn.content.length > 0, dontColumn.content.length > 0].filter(Boolean).length

  if (columns === 0) {
    return null
  }

  return (
    <section
      className={styles.block}
      {...(!title && { 'data-without-title': true })}
    >
      {title && <Text type={titleSize}>{title}</Text>}
      {description && (
        <div className={styles.description}>
          <DocMarkdownContent>
            <DocMarkdownDescription value={description} />
          </DocMarkdownContent>
        </div>
      )}
      <div
        className={cn(
          'hexa-docs-rules-block',
          'sb-unstyled',
          styles.columns,
          columns === 2 && styles.columnsPair,
          Boolean(title || description) && styles.columnsWithHeader
        )}
      >
        <ColumnView tone="use" title={useColumn.title} content={useColumn.content} />
        <ColumnView tone="dont" title={dontColumn.title} content={dontColumn.content} />
      </div>
    </section>
  )
}

DocRulesBlock.Use = Use
DocRulesBlock.Dont = Dont
DocRulesBlock.displayName = 'DocRulesBlock'
