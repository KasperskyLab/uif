import { useEffect, useRef } from 'react'
import type { Scrollbars } from 'react-custom-scrollbars-2'

import type { Uuid } from '../types'

export const useScrollToSelectedPreview = (selectedUuid: Uuid) => {
  const scrollbarRef = useRef<Scrollbars | null>(null)
  const selectedPreviewRef = useRef<HTMLElement | null>(null)

  const isFirstMount = useRef(true)

  useEffect(() => {
    if (scrollbarRef.current && selectedPreviewRef.current) {
      const distanceToSelectedPreview = selectedPreviewRef.current.offsetTop
      const previewElementHeight = selectedPreviewRef.current.offsetHeight
      const currentScrollDistance = scrollbarRef.current.getScrollTop()
      const viewPortHeight = scrollbarRef.current.getClientHeight()

      const isPreviewAboveVisibleSpace = (distanceToSelectedPreview + previewElementHeight) < currentScrollDistance
      const isPreviewBelowVisibleSpace = distanceToSelectedPreview > (currentScrollDistance + viewPortHeight)
      const isPreviewVisible = !isPreviewAboveVisibleSpace && !isPreviewBelowVisibleSpace

      if (!isPreviewVisible || isFirstMount.current) {
        const distanceToCenterOfPreview = distanceToSelectedPreview + (previewElementHeight / 2)
        const halfHeightOfViewport = viewPortHeight / 2

        const canPutPreviewToCenterOfViewport = distanceToCenterOfPreview > halfHeightOfViewport
        const BEGINNING_OF_SCROLLBAR = 0

        scrollbarRef.current.scrollTop(canPutPreviewToCenterOfViewport
          ? distanceToCenterOfPreview - halfHeightOfViewport
          : BEGINNING_OF_SCROLLBAR)
      }

      if (isFirstMount.current) {
        isFirstMount.current = false
      }
    }
  }, [selectedUuid])

  return { scrollbarRef, selectedPreviewRef }
}
