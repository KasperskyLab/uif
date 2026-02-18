import { useMemo } from 'react'
import { parseDiff } from 'react-diff-view'
import { diffLines, formatLines } from 'unidiff'

export const useValuesDiff = (oldValue: string, newValue: string) => {
  return useMemo(() => {
    const lines = diffLines(oldValue, newValue)
    const diffText = formatLines(lines, { context: 3, newlineIsToken: false })
    const [file] = parseDiff(diffText, { nearbySequences: 'zip' })

    const fullDiffText = formatLines(lines, { context: Infinity, newlineIsToken: false })
    const [fullDiffFile] = parseDiff(fullDiffText, { nearbySequences: 'zip' })

    return {
      file: file,
      fullDiffFile: fullDiffFile,
      totalLines: Math.max(fullDiffFile.hunks[0].newLines, fullDiffFile.hunks[0].oldLines),
      expandable: diffText !== fullDiffText,
      addedLines: lines.reduce((count, line) => line.added ? count + line.count : count, 0),
      removedLines: lines.reduce((count, line) => line.removed ? count + line.count : count, 0)
    }
  }, [oldValue, newValue])
}
