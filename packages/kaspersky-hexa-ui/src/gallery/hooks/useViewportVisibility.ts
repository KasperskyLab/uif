/* eslint-disable no-undef */
import {
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react'

/**
 * Determines whenever given DOM element is visible in the viewport (or close to be visible)
 * @param ref - DOM element to observe
 */
export function useViewportVisibility (
  ref: MutableRefObject<Element | null | undefined>,
  options?: IntersectionObserverInit
) {
  const [observedElement, setObservedElement] = useState<Element | undefined | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observer = useRef<null | IntersectionObserver>(null)

  useEffect(() => {
    setObservedElement(ref.current)
  }, [ref])

  useEffect(() => {
    if (observedElement) {
      const cleanUp = () => {
        observer.current?.disconnect()
      }

      cleanUp()
      observer.current = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting)
      }, options)
      observer.current.observe(observedElement)

      return cleanUp
    }

    return undefined
  }, [observedElement, setIsVisible])

  return isVisible
}
