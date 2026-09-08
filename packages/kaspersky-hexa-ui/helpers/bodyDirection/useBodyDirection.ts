import { useEffect, useState } from 'react'

export type Direction = 'rtl' | 'ltr'

export const useBodyDirection = (): { isRtl: boolean; direction: Direction } => {
  const [direction, setDirection] = useState<Direction>('ltr')

  useEffect(() => {
    const updateDirection = () => {
      const currentDir = document.body.getAttribute('dir') || 'ltr'
      setDirection(currentDir === 'rtl' ? 'rtl' : 'ltr')
    }

    updateDirection()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'dir') {
          updateDirection()
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['dir']
    })

    return () => observer.disconnect()
  }, [])

  return {
    isRtl: direction === 'rtl',
    direction
  }
}
