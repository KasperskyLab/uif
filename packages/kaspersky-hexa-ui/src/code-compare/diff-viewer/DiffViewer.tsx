import { Text } from '@src/typography'
import React, { FC, useCallback, useMemo, useState } from 'react'
import { Diff, Hunk, HunkData, markEdits, tokenize, TokenizeOptions, useSourceExpansion, ViewType } from 'react-diff-view'
import { useTranslation } from 'react-i18next'

import { CollapseAll, ExpandAll } from '@kaspersky/hexa-ui-icons/16'

import { Changes, CodeExpandButton, Container, Header } from './DiffViewerCss'
import { ExpandButton } from './expand-button'
import { useAutoExpand } from './hooks/use-auto-expand'
import { useValuesDiff } from './hooks/use-values-diff'

interface DiffViewerProps {
  oldValue?: string,
  newValue?: string,
  viewType: ViewType,
  expandLines?: number
}

export const DiffViewer: FC<DiffViewerProps> = ({ oldValue = '', newValue = '', viewType, expandLines = 15 }) => {
  const { t } = useTranslation()

  const [expandedAll, setExpandedAll] = useState(false)
  const { file, fullDiffFile, totalLines, expandable, addedLines, removedLines } = useValuesDiff(oldValue, newValue)
  const [hunksWithSourceExpansion, expandCode] = useSourceExpansion(expandedAll ? fullDiffFile.hunks : file.hunks, oldValue)
  useAutoExpand(hunksWithSourceExpansion[0], fullDiffFile.hunks[0], setExpandedAll)

  const tokens = useMemo(() => {
    const options: TokenizeOptions = {
      enhancers: [markEdits(hunksWithSourceExpansion, { type: 'line' })]
    }
    return tokenize(hunksWithSourceExpansion, options)
  }, [hunksWithSourceExpansion])

  const renderHunk = useCallback(
    (output, currentHunk: HunkData, index, hunks) => {
      const previousHunk = hunks[index - 1]
      const nextHunk = hunks[index + 1]

      const previousEnd = previousHunk ? previousHunk.oldStart + previousHunk.oldLines : 1
      const currentStart = currentHunk.oldStart

      if ((index === 0 && currentStart > 1) || currentStart - previousEnd > 0) {
        const minExpandLines = Math.min(expandLines, currentStart - previousEnd)
        const direction = index === 0 || currentStart - previousEnd > expandLines ? 'up' : 'center'
        output.push(<ExpandButton
          key={`up-${currentHunk.content}`}
          direction={direction}
          start={currentHunk.oldStart}
          lines={currentHunk.oldLines}
          expandLines={minExpandLines}
          onExpand={expandCode}
        />)
      }

      output.push(<Hunk key={currentHunk.content} hunk={currentHunk} />)

      const hunkEndLines = Math.min(currentHunk.oldStart, currentHunk.newStart) + Math.max(currentHunk.oldLines, currentHunk.newLines) - 1

      const oldEnd = currentHunk.oldStart + currentHunk.oldLines
      const nextStart = nextHunk ? nextHunk.oldStart : 1
      const allowDown = nextStart - oldEnd > expandLines

      if ((!nextHunk && hunkEndLines + 1 < totalLines) || (allowDown && nextStart > oldEnd + 1)) {
        output.push(<ExpandButton
          key={`down-${currentHunk.content}`}
          direction="down"
          start={currentHunk.oldStart}
          lines={currentHunk.oldLines}
          expandLines={Math.min(expandLines, totalLines - hunkEndLines)}
          onExpand={expandCode}
        />)
      }

      return output
    }, [expandCode]
  )

  return (
    <Container>
      <Header>
        <div />
        <Changes>
          {t('codeCompare.totalChanges')}
          {removedLines ? <Text color="critical">-{removedLines}</Text> : null}
          {addedLines ? <Text color="positive">+{addedLines}</Text> : null}
          {expandable && (
            <CodeExpandButton
              icon={expandedAll ? <CollapseAll /> : <ExpandAll /> }
              onClick={() => setExpandedAll(!expandedAll)}
            >
              {t(expandedAll ? 'codeCompare.collapseAll' : 'codeCompare.expandAll')}
            </CodeExpandButton>
          )}
        </Changes>
      </Header>
      <Diff viewType={viewType} diffType={file.type} hunks={hunksWithSourceExpansion} tokens={tokens} >
        {hunks => hunks.reduce(renderHunk, [])}
      </Diff>
    </Container>
  )
}
