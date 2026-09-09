import { useEffect } from 'react'

const LOCKED_STYLE = ['overflow', 'overflowX', 'overflowY', 'width'] as const

let lockedBy = 0
let oldStyles: Partial<Record<typeof LOCKED_STYLE[number], string>> | null = null

const lock = () => {
  lockedBy += 1
  if (lockedBy > 1) return

  const { style } = document.body
  oldStyles = Object.fromEntries(LOCKED_STYLE.map(name => [name, style[name]]))

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

  if (scrollbarWidth) style.width = `calc(100% - ${scrollbarWidth}px)`
  style.overflow = 'hidden'
  style.overflowX = 'hidden'
  style.overflowY = 'hidden'
}

const unlock = () => {
  lockedBy = Math.max(0, lockedBy - 1)
  if (lockedBy || !oldStyles) return

  const { style } = document.body
  LOCKED_STYLE.forEach(name => { style[name] = oldStyles?.[name] ?? '' })
  oldStyles = null
}

export const usePageScrollLock = (locked: boolean): void => {
  useEffect(() => {
    if (!locked) return

    lock()

    return unlock
  }, [locked])
}
