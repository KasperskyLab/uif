import React, { useRef, useCallback, useState, useLayoutEffect, useEffect, memo } from 'react'
import { FormRenderer } from '@viewer/components/FormRenderer'
import { SettingsGear } from '@kaspersky/hexa-ui-icons/16'
import type { FormControl } from '@/types/form-dsl'

export interface WysiwygCanvasProps {
  controls: FormControl[]
  selectedId: string | null
  onSelect: (id: string | null) => void
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formKey: string
}

const CONTROL_ID_ATTR = 'data-control-id'
const GEAR_WRAP_ATTR = 'data-wysiwyg-gear-wrap'
const FOR_CONTROL_ATTR = 'data-for-control-id'

type Rect = { top: number; left: number; width: number; height: number }

const containerStyle: React.CSSProperties = {
  position: 'relative',
  flex: 1,
  overflow: 'auto',
}

const formLayerStyle: React.CSSProperties = {
  padding: 24,
  background: 'var(--surface--neutral, #fafafa)',
  borderRadius: 12,
}

const selectionHighlightStyle: React.CSSProperties = {
  position: 'absolute',
  borderRadius: 6,
  pointerEvents: 'none',
  zIndex: 2,
  boxShadow:
    'inset 0 0 0 2px var(--primary--main, #00a88e), 0 0 10px rgba(0, 168, 142, 0.15)',
}

const GEAR_SIZE = 28
const GEAR_INSET = 6
const wrapPad = 4

/** Совпадает с bbox контрола: подсветка и шестерёнка в одной системе координат */
const hoverChromeRootStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: 3,
  pointerEvents: 'none',
  borderRadius: 6,
  overflow: 'visible',
  boxSizing: 'border-box',
}

const hoverGlowStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: 6,
  pointerEvents: 'none',
  boxShadow:
    'inset 0 0 0 1px rgba(0, 168, 142, 0.5), 0 4px 18px rgba(0, 168, 142, 0.2)',
}

const gearWrapStyle: React.CSSProperties = {
  position: 'absolute',
  top: GEAR_INSET,
  right: GEAR_INSET,
  padding: wrapPad,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'auto',
  zIndex: 1,
}

const gearButtonStyle: React.CSSProperties = {
  width: GEAR_SIZE,
  height: GEAR_SIZE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #fff)',
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(0,0,0,.12)',
  padding: 0,
}

function measureRect(
  el: Element,
  container: HTMLElement,
): Rect {
  const cRect = container.getBoundingClientRect()
  const eRect = el.getBoundingClientRect()
  return {
    top: eRect.top - cRect.top + container.scrollTop,
    left: eRect.left - cRect.left + container.scrollLeft,
    width: eRect.width,
    height: eRect.height,
  }
}

function rectNearEqual(a: Rect, b: Rect, eps = 0.75): boolean {
  return (
    Math.abs(a.top - b.top) < eps &&
    Math.abs(a.left - b.left) < eps &&
    Math.abs(a.width - b.width) < eps &&
    Math.abs(a.height - b.height) < eps
  )
}

const WysiwygFormLayer = memo(function WysiwygFormLayer({
  elements,
  formDirectoryHandle,
  formKey,
}: {
  elements: FormControl[]
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formKey: string
}): React.ReactElement {
  return (
    <FormRenderer
      elements={elements}
      formDirectoryHandle={formDirectoryHandle}
      formKey={formKey}
      gap={16}
    />
  )
})

function useControlRect(
  containerRef: React.RefObject<HTMLDivElement | null>,
  formRef: React.RefObject<HTMLDivElement | null>,
  controlId: string | null,
  controls: FormControl[],
): Rect | null {
  const [rect, setRect] = useState<Rect | null>(null)
  const rectRef = useRef<Rect | null>(null)

  const measure = useCallback(() => {
    if (!controlId || !containerRef.current || !formRef.current) {
      if (rectRef.current !== null) {
        rectRef.current = null
        setRect(null)
      }
      return
    }
    const el = formRef.current.querySelector(`[${CONTROL_ID_ATTR}="${CSS.escape(controlId)}"]`)
    if (!el) {
      if (rectRef.current !== null) {
        rectRef.current = null
        setRect(null)
      }
      return
    }
    const next = measureRect(el, containerRef.current)
    if (!rectRef.current || !rectNearEqual(rectRef.current, next)) {
      rectRef.current = next
      setRect(next)
    }
  }, [controlId, containerRef, formRef])

  useLayoutEffect(() => {
    measure()
  }, [measure, controls])

  useEffect(() => {
    if (!controlId || !formRef.current) return
    const el = formRef.current.querySelector(`[${CONTROL_ID_ATTR}="${CSS.escape(controlId)}"]`)
    if (!el) return
    const observer = new ResizeObserver(() => measure())
    observer.observe(el)
    return () => observer.disconnect()
  }, [controlId, formRef, measure])

  useEffect(() => {
    if (!controlId || !containerRef.current) return
    const container = containerRef.current
    const onScroll = () => measure()
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [controlId, containerRef, measure])

  return rect
}

function commitHover(
  id: string | null,
  nextRect: Rect | null,
  hoveredIdRef: React.MutableRefObject<string | null>,
  hoverRectRef: React.MutableRefObject<Rect | null>,
  setHoveredId: (v: string | null) => void,
  setHoverRect: (v: Rect | null) => void,
): void {
  if (id === null) {
    if (hoveredIdRef.current !== null) {
      hoveredIdRef.current = null
      hoverRectRef.current = null
      setHoveredId(null)
      setHoverRect(null)
    }
    return
  }
  if (nextRect === null) return
  if (hoveredIdRef.current !== id) {
    hoveredIdRef.current = id
    hoverRectRef.current = nextRect
    setHoveredId(id)
    setHoverRect(nextRect)
    return
  }
  if (!hoverRectRef.current || !rectNearEqual(hoverRectRef.current, nextRect)) {
    hoverRectRef.current = nextRect
    setHoverRect(nextRect)
  }
}

export function WysiwygCanvas({
  controls,
  selectedId,
  onSelect,
  formDirectoryHandle,
  formKey,
}: WysiwygCanvasProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hoverRect, setHoverRect] = useState<Rect | null>(null)
  const hoveredIdRef = useRef<string | null>(null)
  const hoverRectRef = useRef<Rect | null>(null)
  hoveredIdRef.current = hoveredId

  const selectionRect = useControlRect(containerRef, formRef, selectedId, controls)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const t = e.target as HTMLElement
    const gearWrap = t.closest?.(`[${GEAR_WRAP_ATTR}]`) as HTMLElement | null
    if (gearWrap) {
      const forId = gearWrap.getAttribute(FOR_CONTROL_ATTR)
      if (forId && formRef.current && containerRef.current) {
        const ctl = formRef.current.querySelector(
          `[${CONTROL_ID_ATTR}="${CSS.escape(forId)}"]`,
        )
        if (ctl) {
          commitHover(
            forId,
            measureRect(ctl, containerRef.current),
            hoveredIdRef,
            hoverRectRef,
            setHoveredId,
            setHoverRect,
          )
        }
      }
      return
    }

    const el = t.closest?.(`[${CONTROL_ID_ATTR}]`)
    const id = el?.getAttribute(CONTROL_ID_ATTR) ?? null
    if (id && el && containerRef.current) {
      commitHover(
        id,
        measureRect(el, containerRef.current),
        hoveredIdRef,
        hoverRectRef,
        setHoveredId,
        setHoverRect,
      )
    } else {
      commitHover(null, null, hoveredIdRef, hoverRectRef, setHoveredId, setHoverRect)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    hoveredIdRef.current = null
    hoverRectRef.current = null
    setHoveredId(null)
    setHoverRect(null)
  }, [])

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(`[${GEAR_WRAP_ATTR}]`)) {
        return
      }
      const el = (e.target as HTMLElement).closest?.(`[${CONTROL_ID_ATTR}]`)
      if (!el) {
        onSelect(null)
      }
    },
    [onSelect],
  )

  const handleGearClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      const wrap = (e.currentTarget as HTMLElement).closest?.(`[${GEAR_WRAP_ATTR}]`)
      const id = wrap?.getAttribute(FOR_CONTROL_ATTR) ?? hoveredIdRef.current
      if (id) {
        onSelect(id)
      }
    },
    [onSelect],
  )

  const showHoverChrome = Boolean(
    hoveredId && hoverRect && hoveredId !== selectedId,
  )

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
    >
      <div ref={formRef} style={formLayerStyle}>
        <WysiwygFormLayer
          elements={controls}
          formDirectoryHandle={formDirectoryHandle}
          formKey={formKey}
        />
      </div>

      {showHoverChrome && hoveredId && hoverRect && (
        <div
          style={{
            ...hoverChromeRootStyle,
            top: hoverRect.top,
            left: hoverRect.left,
            width: hoverRect.width,
            height: hoverRect.height,
          }}
        >
          <div style={hoverGlowStyle} />
          <span
            data-wysiwyg-gear-wrap=""
            data-for-control-id={hoveredId}
            style={gearWrapStyle}
          >
            <button
              type="button"
              style={gearButtonStyle}
              onClick={handleGearClick}
              title="Выбрать контрол"
            >
              <SettingsGear />
            </button>
          </span>
        </div>
      )}

      {selectedId && selectionRect && (
        <div
          style={{
            ...selectionHighlightStyle,
            top: selectionRect.top,
            left: selectionRect.left,
            width: selectionRect.width,
            height: selectionRect.height,
          }}
        />
      )}
    </div>
  )
}
