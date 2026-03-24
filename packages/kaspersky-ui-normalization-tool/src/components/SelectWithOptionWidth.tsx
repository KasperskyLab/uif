import React, { useRef, useEffect, useState } from 'react'

/** Обёртка: ширина селекта = макс. ширина опций (измерение по тексту опций) */
export function SelectWithOptionWidth({
  options,
  children,
}: {
  options: { label: string; value: string }[]
  children: React.ReactNode
}) {
  const [minWidth, setMinWidth] = useState(100)
  const rulerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rulerRef.current || !options.length) {
      setMinWidth(100)
      return
    }
    const spans = rulerRef.current.querySelectorAll('span')
    let max = 0
    spans.forEach((s) => {
      max = Math.max(max, (s as HTMLSpanElement).offsetWidth)
    })
    setMinWidth(max + 48) // отступы под стрелку и padding селектора
  }, [options])

  return (
    <>
      <div
        ref={rulerRef}
        aria-hidden
        style={{
          position: 'absolute',
          left: -9999,
          top: 0,
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: 14,
          fontFamily: 'inherit',
        }}
      >
        {options.map((o) => (
          <span key={o.value} style={{ display: 'block' }}>
            {String(o.label)}
          </span>
        ))}
      </div>
      <div style={{ minWidth }}>{children}</div>
    </>
  )
}
