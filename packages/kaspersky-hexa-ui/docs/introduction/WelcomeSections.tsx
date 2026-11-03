import { WelcomeArt } from './WelcomeArt'
import { Tag, Text } from '@kaspersky/hexa-ui'
import React, { useRef, useState } from 'react'

export type WelcomeSection = {
  id: string
  title: string
  description: string
  status?: string
  disabled?: boolean
  links?: React.ReactNode
}

export function WelcomeSections({ items }: { items: WelcomeSection[] }) {
  // A missing route must not hide the section's description while index.json loads.
  const unavailable = (item: WelcomeSection) => item.status === 'Скоро будет'
  const [active, setActive] = useState(items.find(item => !unavailable(item))?.id)
  const buttons = useRef<Record<string, HTMLButtonElement | null>>({})
  const pointer = useRef<{ x: number; y: number } | null>(null)
  const enabled = items.filter(item => !unavailable(item))
  const select = (id: string) => { if (enabled.some(item => item.id === id)) setActive(id) }
  const navigate = (event: React.KeyboardEvent, id: string) => {
    if (!enabled.length) return
    const position = enabled.findIndex(item => item.id === id)
    let next: number
    switch (event.key) {
      case 'ArrowRight': case 'ArrowDown': next = (position + 1) % enabled.length; break
      case 'ArrowLeft': case 'ArrowUp': next = (position - 1 + enabled.length) % enabled.length; break
      case 'Home': next = 0; break
      case 'End': next = enabled.length - 1; break
      default: return
    }
    event.preventDefault()
    buttons.current[enabled[next].id]?.focus()
  }
  return <div className="hexa-motion-strip" onPointerLeave={() => { pointer.current = null }} onPointerMove={event => {
    if (event.pointerType !== 'mouse') return
    const last = pointer.current
    if (last && Math.abs(last.x - event.clientX) + Math.abs(last.y - event.clientY) < 2) return
    pointer.current = { x: event.clientX, y: event.clientY }
    const panel = (event.target as Element).closest<HTMLElement>('[data-panel]')
    if (panel?.dataset.panel) select(panel.dataset.panel)
  }}>
    {items.map((item, position) => {
      const selected = enabled.some(entry => entry.id === active) ? active : enabled[0]?.id
      const expanded = selected === item.id
      const disabled = unavailable(item)
      return <article key={item.id} data-panel={item.id} data-disabled={disabled || undefined} className={`hexa-motion-panel${expanded ? ' is-active' : ''}`}>
        <button type="button" className="hexa-motion-hit" disabled={disabled}
          ref={element => { buttons.current[item.id] = element }}
          aria-label={`${item.title}${disabled ? ': Скоро будет' : ''}`} aria-expanded={expanded}
          aria-controls={`hexa-motion-${item.id}`} onFocus={() => select(item.id)} onClick={() => select(item.id)} onKeyDown={event => navigate(event, item.id)} />
        <div className="hexa-motion-spine" aria-hidden="true"><span>{item.title}</span>{disabled && <span className="hexa-motion-tag"><Tag label="Скоро будет" mode="neutral" size="small" /></span>}<small>{String(position + 1).padStart(2, '0')}</small></div>
        <div id={`hexa-motion-${item.id}`} className="hexa-motion-content" aria-hidden={!expanded} ref={element => { element?.toggleAttribute('inert', !expanded) }}>
          <div className="hexa-motion-top"><span>{String(position + 1).padStart(2, '0')}</span><span>{item.status || 'HEXA UI'}</span></div>
          <div className="hexa-motion-heading"><Text type="H3" htmlTag="h3">{item.title}</Text></div><div className="hexa-motion-description"><Text type="BTR3">{item.description}</Text></div>
          <div className="hexa-motion-art"><WelcomeArt kind={item.id} /></div>
          <div className="hexa-motion-bottom">{expanded && item.links}</div>
        </div>
      </article>
    })}
  </div>
}
