import React from 'react'

type UseCloseOnEscape = {
  visible: boolean
  onClose?: (e: any) => void
  isTopmost?: () => boolean
}

export default function useCloseOnEscape ({ visible, onClose, isTopmost }: UseCloseOnEscape) {
  React.useEffect(() => {
    if (!visible || !onClose) return

    const isEsc = (e: KeyboardEvent) => e.key === 'Escape'

    const handle = (e: KeyboardEvent) => {
      if (!isEsc(e)) return
      if (isTopmost && !isTopmost()) return
      onClose(e)
    }

    document.addEventListener('keydown', handle)
    return () => 
      document.removeEventListener('keydown', handle)
  }, [visible, onClose, isTopmost])
}
