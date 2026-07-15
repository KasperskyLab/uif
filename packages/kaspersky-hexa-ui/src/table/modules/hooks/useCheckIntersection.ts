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
      const contentBottom = contentRef.current.getBoundingClientRect().bottom
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