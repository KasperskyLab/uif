import { useEffect, useState } from 'react'

export const useBlurredBackground = (shouldBlur: boolean, rootSelector?: string | null) => {
  const [rootElement, setRootElement] = useState(
    rootSelector
      ? document.querySelector(rootSelector)
      : undefined
  )

  useEffect(() => {
    const element = rootSelector
      ? document.querySelector(rootSelector)
      : undefined

    setRootElement(element)
  }, [rootSelector])

  useEffect(() => {
    if (rootElement) {
      rootElement.classList.add('root-background-basic')
      return () => rootElement.classList.remove('root-background-basic')
    }
  }, [rootElement])

  useEffect(() => {
    if (rootElement && shouldBlur) {
      rootElement.classList.add('root-background-blurred')

      return () => {
        if (rootElement) {
          rootElement.classList.remove('root-background-blurred')
        }
      }
    }
  }, [rootElement, shouldBlur])
}
