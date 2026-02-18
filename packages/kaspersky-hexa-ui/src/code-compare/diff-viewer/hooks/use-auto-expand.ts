import { useEffect } from 'react'
import { HunkData } from 'react-diff-view'

export const useAutoExpand = (hunk: HunkData, fullDiffHunk: HunkData, setExpandedAll: (expanded: boolean) => void): void => {
  useEffect(() => {
    const fullExpanded = hunk.newLines === fullDiffHunk.newLines &&
      hunk.oldLines === fullDiffHunk.oldLines &&
      hunk.newStart === fullDiffHunk.newStart &&
      hunk.oldStart === fullDiffHunk.oldStart

    if (fullExpanded) {
      setExpandedAll(fullExpanded)
    }
  }, [hunk])
}
