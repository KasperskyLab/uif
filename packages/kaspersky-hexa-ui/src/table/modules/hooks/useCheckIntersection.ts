import React from 'react'
import { useEffect, useState } from 'react'
export function useCheckIntersection (
  contentRef: React.MutableRefObject<HTMLDivElement | null>,
  paginationRef: React.MutableRefObject<HTMLDivElement | null>,
  dependencies: object[]
)
{
  const [isIntersects, setIsIntersects] = useState(false)

  useEffect(() => {
    const checkIntersection = () => {
      if (!contentRef.current || !paginationRef.current) return
      const content = contentRef.current.querySelector('.table-scrolling-wrapper')
      if (!content) return
      const contentBottom = content.getBoundingClientRect().bottom
      const paginationTop = paginationRef.current.getBoundingClientRect().top
      setIsIntersects(contentBottom > paginationTop)
    }
    checkIntersection()

    window.addEventListener('scroll', checkIntersection)
    window.addEventListener('resize', checkIntersection)

    return () => {
      window.removeEventListener('scroll', checkIntersection)
      window.removeEventListener('resize', checkIntersection)
    }
  }, [contentRef, paginationRef, dependencies])

  return isIntersects
}