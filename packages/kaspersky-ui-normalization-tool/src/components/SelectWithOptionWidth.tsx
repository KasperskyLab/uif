import React, { useRef, useEffect, useState } from 'react'

function options_signature(options: { label: string; value: string }[]): string {
  return options.map((o) => `${o.value}\t${o.label}`).join('\n')
}

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
  const options_sig = options_signature(options)

  useEffect(() => {
    if (!rulerRef.current || !options_sig) {
      setMinWidth(100)
      return
    }
    const spans = rulerRef.current.querySelectorAll('span')
    let max = 0
    spans.forEach((s) => {
      max = Math.max(max, (s as HTMLSpanElement).offsetWidth)
    })
    // +48 — отступы под стрелку и padding; не шире родителя (длинные пути модели)
    const next = Math.max(100, max + 48)
    setMinWidth((prev) => (prev === next ? prev : next))
  }, [options_sig])

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
        {options.map((o, i) => (
          <span key={`opt-${i}-${String(o.value)}`} style={{ display: 'block' }}>
            {String(o.label)}
          </span>
        ))}
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
          /** Не раздувать карточку: по контенту, но не шире родителя */
          minWidth: `min(100%, ${minWidth}px)`,
        }}
      >
        {children}
      </div>
    </>
  )
}
