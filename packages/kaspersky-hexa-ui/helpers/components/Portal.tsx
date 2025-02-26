import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const Portal: React.FC<{
  domApi?: typeof ReactDOM,
  rootElement?: Element,
  element?: Element
}> = ({
  children,
  domApi = ReactDOM,
  rootElement = document.body,
  element = document.createElement('div')
}) => {
  const [container] = useState(element)
  useEffect(() => {
    rootElement.appendChild(container)
    return () => {
      rootElement.removeChild(container)
    }
  }, [])
  return domApi.createPortal(children, container)
}
