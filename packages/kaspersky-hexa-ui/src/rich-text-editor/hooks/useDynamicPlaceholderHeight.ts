import { useEffect } from 'react'

export const useDynamicPlaceholderHeight = (
  placeholderRef?: React.RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const placeholder = placeholderRef?.current
    if (!placeholder) {
      return
    }

    const editorContainer = placeholder.closest('[data-slate-editor="true"]')
    if (!editorContainer) {
      return
    }

    const updateHeight = () => {
      const height = placeholder.offsetHeight + placeholder.offsetTop * 2
      const container = editorContainer as HTMLElement

      if (height > 0) {
        container.style.height = `${height}px`
        container.style.overflow = 'hidden'
      } else {
        container.style.height = ''
        container.style.overflow = ''
      }
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(placeholder)

    return () => {
      observer.disconnect()
      const container = editorContainer as HTMLElement

      container.style.height = ''
      container.style.overflow = ''
    }
  }, [placeholderRef])
}
