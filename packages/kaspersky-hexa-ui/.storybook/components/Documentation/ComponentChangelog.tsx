import { Link } from '@src/link'
import { Search } from '@src/search'
import { Badge } from '@src/badge'
import { Tag } from '@src/tag'
import { Heading, Text } from '@src/typography'
import { fontsCssVarString } from '@kaspersky/hexa-ui-core/fonts'
import cn from 'classnames'
import MarkdownIt from 'markdown-it'
import React, { MouseEvent, useMemo, useState } from 'react'

import changelogSource from 'virtual:hexa-ui-changelog'
import styles from './ComponentChangelog.module.scss'
import { filterComponentChangelogEntries, getComponentChangelogEntries } from './filterChangelogMarkdown'

const COMMIT_URL_BASE = ''

const ChangelogFontFaces = () => <style>{fontsCssVarString}</style>

const changelogMarkdown = MarkdownIt({ html: true, breaks: true })

const renderDescription = (description: string) => {
  const normalizedDescription = description
    .replace(/^\s*-\s*/gm, '')
    .replace(/\n+/g, ' ')
    .trim()

  return changelogMarkdown.renderInline(normalizedDescription || 'Нет описания')
}

const renderAffectedComponentBadges = (affectedComponents: string[]): React.ReactNode => (
  affectedComponents.reduceRight<React.ReactNode>((badges, affectedComponent) => (
    <>
      <Badge text={affectedComponent} mode="low" />
      {badges}
    </>
  ), null)
)

export type ComponentChangelogProps = {
  /** Component name or src folder (`Button`, `action-button`). Omit to render every entry. */
  component?: string
  /** Changelog heading level. */
  headingType?: 'H3' | 'H5'
}

const toggleDetails = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const details = event.currentTarget.closest('li')?.querySelector('details')
  if (details) {
    details.open = !details.open
  }
}

/**
 * Renders Changelog.json entries, optionally filtered by affected files/components.
 */
export const ComponentChangelog: React.FC<ComponentChangelogProps> = ({ component, headingType = 'H5' }) => {
  const [query, setQuery] = useState('')
  const entries = useMemo(
    () => getComponentChangelogEntries(changelogSource, component),
    [component]
  )
  const filteredEntries = useMemo(
    () => filterComponentChangelogEntries(entries, query),
    [entries, query]
  )

  if (entries.length === 0) {
    return (
      <Text type="BTR3">
        {component ? 'Для этого компонента пока нет записей в Changelog.' : 'В Changelog пока нет записей.'}
      </Text>
    )
  }

  return (
    <div className={cn('sb-unstyled', styles.root)}>
      <ChangelogFontFaces />
      <div className={styles.header}>
        <Heading type={headingType}>Changelog</Heading>
        <div className={styles.search}>
          <Search
            style={{ width: '100%' }}
            testId="component-changelog-search"
            klId="component-changelog-search"
            value={query}
            onChange={(value) => setQuery(String(value))}
            onClearClick={() => setQuery('')}
          />
        </div>
      </div>
      {filteredEntries.length > 0
        ? (
            <ul>
              {filteredEntries.map((entry) => {
                const titleHtml = {
                  __html: changelogMarkdown.renderInline(entry.title)
                }
                const description = entry.description
                const hasDetailsContent = true

                return (
                  <li key={`${entry.date}-${entry.version ?? ''}-${entry.commitHash ?? ''}-${entry.title}`}>
                    <div className={styles.entryHeader}>
                      {entry.version
                        ? (
                            <Tag
                              className={styles.versionTag}
                              size="small"
                              mode="marengo"
                              outlined
                            >
                              {entry.version}
                            </Tag>
                          )
                        : null}
                      <div className={styles.entryMain}>
                        <div className={styles.entryTitle}>
                          {hasDetailsContent
                            ? (
                                <a className={styles.titleToggle} href="#" onClick={toggleDetails}>
                                  <span dangerouslySetInnerHTML={titleHtml} />
                                </a>
                              )
                            : (
                                <span className={styles.entryText} dangerouslySetInnerHTML={titleHtml} />
                              )}
                        </div>
                        <div className={styles.entryMeta}>
                          <span>{entry.date}</span>
                          {entry.author
                            ? (
                                <>
                                  <span className={styles.metaSep}>|</span>
                                  <span>{entry.author}</span>
                                </>
                              )
                            : null}
                          {entry.sha
                            ? (
                                <>
                                  <span className={styles.metaSep}>|</span>
                                  <Link
                                    href={`${COMMIT_URL_BASE}${entry.sha}`}
                                    text={entry.commitHash ?? entry.sha.slice(0, 7)}
                                    target="_blank"
                                  />
                                </>
                              )
                            : null}
                        </div>
                      </div>
                    </div>
                    {hasDetailsContent
                      ? (
                          <details>
                            <summary />
                            <p
                              className={styles.detailsDescription}
                              dangerouslySetInnerHTML={{
                                __html: renderDescription(description)
                              }}
                            />
                            {entry.affectedComponents.length > 0
                              ? (
                                  <div className={styles.affectedComponents}>
                                    {renderAffectedComponentBadges(entry.affectedComponents)}
                                  </div>
                                )
                              : null}
                          </details>
                        )
                      : null}
                  </li>
                )
              })}
            </ul>
          )
        : (
            <Text type="BTR4">
              По вашему запросу ничего не найдено.
            </Text>
          )}
    </div>
  )
}
