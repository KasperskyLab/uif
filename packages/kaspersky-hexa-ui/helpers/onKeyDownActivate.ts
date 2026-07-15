import { KeyboardEvent } from 'react'

export function onKeyDownActivate (callback: () => void) {
  return (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      callback()
    }
  }
}