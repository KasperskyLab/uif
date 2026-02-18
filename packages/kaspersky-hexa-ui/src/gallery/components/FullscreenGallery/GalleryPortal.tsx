import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// https://stackoverflow.com/questions/59394387/can-we-have-a-portal-in-next-js
// https://github.com/vercel/next.js/tree/canary/examples/with-portals
export const GalleryPortal: React.FC = ({ children }) => {
  const ref = useRef<Element>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = window.document.body as Element
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(children, ref.current) : null
}
