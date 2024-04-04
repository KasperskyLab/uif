import { useEffect, useState } from 'react'

export const useIsThumbIncreased = () => {
  const [isThumbIncreased, setThumbIncrease] = useState<boolean>(false)

  useEffect(() => {
    if (isThumbIncreased) {
      const cancelThumbScale = () => {
        setThumbIncrease(false)
      }

      window.document.addEventListener('mouseup', cancelThumbScale)

      return () => {
        window.document.removeEventListener('mouseup', cancelThumbScale)
      }
    }

    return undefined
  }, [isThumbIncreased, setThumbIncrease])

  return [isThumbIncreased, setThumbIncrease] as const
}
