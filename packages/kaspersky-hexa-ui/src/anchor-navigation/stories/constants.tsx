import { Badge } from '@src/badge'
import { H3, H4, H5, P } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { AnchorItem } from '../types'

export const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export type PlaygroundItemsOptions = {
  sectionCount: number
  withElementAfter?: boolean
  withLongLabels?: boolean
  withNestedItems?: boolean
}

export function buildPlaygroundItems ({
  sectionCount,
  withElementAfter = false,
  withLongLabels = false,
  withNestedItems = false
}: PlaygroundItemsOptions): AnchorItem[] {
  const count = Math.max(1, Math.min(20, sectionCount))
  const items: AnchorItem[] = Array(count)
    .fill(0)
    .map((_, i) => ({ id: `section-${i + 1}`, label: `Section ${i + 1}` }))

  if (withLongLabels && items.length > 3) {
    items.splice(
      3,
      0,
      { id: 'two-line-text', label: 'Pack my box with five dozen liquor jugs. '.repeat(2) },
      { id: 'three-line-text', label: 'The quick brown fox jumps over the lazy dog. '.repeat(2) }
    )
  }

  if (withElementAfter && items.length > 1) {
    items[1] = {
      ...items[1],
      elementAfter: <Badge mode="critical" count={1} />
    }
  }

  if (withNestedItems && items.length >= 2) {
    const nestIndex = Math.min(2, items.length - 1)
    const parentId = items[nestIndex].id

    items[nestIndex] = {
      ...items[nestIndex],
      children: [
        {
          children: [
            { id: `${parentId}-subsubsection-1`, label: 'Subsubsection' },
            {
              elementAfter: withElementAfter
                ? <Badge mode="resolved" text="new" />
                : undefined,
              id: `${parentId}-subsubsection-2`,
              label: 'The quick brown fox jumps over the lazy dog. '.repeat(2)
            }
          ],
          id: `${parentId}-subsection-1`,
          label: 'Subsection'
        },
        {
          elementAfter: withElementAfter
            ? <Badge mode="resolved" text="new" />
            : undefined,
          id: `${parentId}-subsection-2`,
          label: 'The quick brown fox jumps over the lazy dog. '.repeat(3)
        }
      ]
    }
  }

  return items
}

export const anchorItems: AnchorItem[] = Array(20)
  .fill(0)
  .map((_, i) => ({ id: `section-${i + 1}`, label: `Section ${i + 1}` }))

anchorItems.splice(
  3,
  0,
  { id: 'two-line-text', label: 'Pack my box with five dozen liquor jugs. '.repeat(2) },
  { id: 'three-line-text', label: 'The quick brown fox jumps over the lazy dog. '.repeat(2) }
)

anchorItems[1].elementAfter = <Badge mode="critical" count={1} />
anchorItems[8].children = [
  {
    children: [
      { id: 'subsubsection-1', label: 'Subsubsection' },
      {
        elementAfter: <Badge mode="resolved" text="new" />,
        id: 'subsubsection-2',
        label: 'The quick brown fox jumps over the lazy dog. '.repeat(2)
      }
    ],
    id: 'subsection-1',
    label: 'Subsection'
  },
  {
    elementAfter: <Badge mode="resolved" text="new" />,
    id: 'subsection-2',
    label: 'The quick brown fox jumps over the lazy dog. '.repeat(3)
  }
]

const ContentItem = styled.div`
  & + & {
    margin-top: 10px;
  }
`

export function renderAnchorContentItem (item: AnchorItem, level: number = 0): JSX.Element {
  const Header = level === 0
    ? H3
    : level === 1 ? H4 : H5

  return (
    <React.Fragment key={item.id}>
      <ContentItem>
        <Header id={item.id}>{item.label}</Header>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
      </ContentItem>
      {item.children && item.children.map(x => renderAnchorContentItem(x, level + 1))}
    </React.Fragment>
  )
}

export function renderAnchorContent (items: AnchorItem[]): JSX.Element[] {
  return items.map(item => renderAnchorContentItem(item))
}
