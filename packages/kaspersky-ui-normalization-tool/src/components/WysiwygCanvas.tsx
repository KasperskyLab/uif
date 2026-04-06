import React, {
  useRef,
  useCallback,
  useState,
  useLayoutEffect,
  useEffect,
  memo,
} from 'react'
import { FormRenderer } from '@viewer/components/FormRenderer'
import { Edit, Delete } from '@kaspersky/hexa-ui-icons/16'
import type { FormControl } from '@/types/form-dsl'
import {
  DATA_ID_KEY,
  getDropTypeAndOptions,
  applyRootReorder,
  applyRootInsert,
  applyGridCellMove,
  applyGridCellInsert,
  applyTableCellMove,
  applyTableCellInsert,
  removeControlFromTree,
} from '@/utils/dnd'

export interface WysiwygCanvasProps {
  controls: FormControl[]
  onControlsChange: React.Dispatch<React.SetStateAction<FormControl[]>>
  selectedId: string | null
  onSelect: (id: string | null) => void
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formKey: string
  formConfigHook?: string | null
}

const CONTROL_ID_ATTR = 'data-control-id'
const GEAR_WRAP_ATTR = 'data-wysiwyg-gear-wrap'
const FOR_CONTROL_ATTR = 'data-for-control-id'
const GRID_CELL_ATTR = 'data-grid-cell-index'
const TABLE_CELL_ATTR = 'data-table-cell-index'
const CONTAINER_ID_ATTR = 'data-container-id'

type Rect = { top: number; left: number; width: number; height: number }

type DropTarget =
  | { type: 'root-insert'; index: number; rect: Rect }
  | { type: 'grid-cell'; containerId: string; cellIndex: number; rect: Rect }
  | { type: 'table-cell'; containerId: string; cellIndex: number; rect: Rect }

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

const chromePanelStyle: React.CSSProperties = {
  position: 'absolute',
  top: GEAR_INSET,
  right: GEAR_INSET,
  display: 'flex',
  flexDirection: 'row',
  gap: 4,
  pointerEvents: 'auto',
  zIndex: 1,
}

const chromeButtonStyle: React.CSSProperties = {
  width: GEAR_SIZE,
  height: GEAR_SIZE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #fff)',
  boxShadow: '0 1px 4px rgba(0,0,0,.12)',
  padding: 0,
}


function measureRect(el: Element, container: HTMLElement): Rect {
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

/** Вычисляет drop-target по позиции курсора. clientX/Y — координаты события. */
function computeDropTarget(
  clientX: number,
  clientY: number,
  controls: FormControl[],
  containerEl: HTMLElement,
): DropTarget | null {
  const containerRect = containerEl.getBoundingClientRect()
  const scrollTop = containerEl.scrollTop
  const scrollLeft = containerEl.scrollLeft

  function clientRectToLocal(r: DOMRect): Rect {
    return {
      top: r.top - containerRect.top + scrollTop,
      left: r.left - containerRect.left + scrollLeft,
      width: r.width,
      height: r.height,
    }
  }

  // Проверяем grid-ячейки
  const gridCells = containerEl.querySelectorAll(`[${GRID_CELL_ATTR}]`)
  for (const cell of gridCells) {
    const r = cell.getBoundingClientRect()
    if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
      const containerId = cell.getAttribute(CONTAINER_ID_ATTR)
      const cellIdx = cell.getAttribute(GRID_CELL_ATTR)
      if (containerId && cellIdx !== null) {
        return {
          type: 'grid-cell',
          containerId,
          cellIndex: parseInt(cellIdx, 10),
          rect: clientRectToLocal(r),
        }
      }
    }
  }

  // Проверяем table-ячейки
  const tableCells = containerEl.querySelectorAll(`[${TABLE_CELL_ATTR}]`)
  for (const cell of tableCells) {
    const r = cell.getBoundingClientRect()
    if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
      const containerId = cell.getAttribute(CONTAINER_ID_ATTR)
      const cellIdx = cell.getAttribute(TABLE_CELL_ATTR)
      if (containerId && cellIdx !== null) {
        return {
          type: 'table-cell',
          containerId,
          cellIndex: parseInt(cellIdx, 10),
          rect: clientRectToLocal(r),
        }
      }
    }
  }

  // Root insert: определяем позицию по вертикали между корневыми контролами
  const topLevelIds = new Set(controls.map((c) => c.id))
  const rootEls: Array<{ id: string; rect: DOMRect }> = []
  const allControlEls = containerEl.querySelectorAll(`[${CONTROL_ID_ATTR}]`)
  for (const el of allControlEls) {
    const id = el.getAttribute(CONTROL_ID_ATTR)
    if (id && topLevelIds.has(id)) {
      rootEls.push({ id, rect: el.getBoundingClientRect() })
    }
  }
  rootEls.sort((a, b) => a.rect.top - b.rect.top)

  // Вычисляем insertIndex: перед первым элементом, чей midY > clientY
  let insertIndex = controls.length
  for (let i = 0; i < rootEls.length; i++) {
    const midY = rootEls[i].rect.top + rootEls[i].rect.height / 2
    if (clientY < midY) {
      insertIndex = controls.findIndex((c) => c.id === rootEls[i].id)
      break
    }
    insertIndex = controls.findIndex((c) => c.id === rootEls[i].id) + 1
  }

  // Позиция горизонтальной линии
  let lineClientY: number
  if (rootEls.length === 0) {
    lineClientY = containerRect.top + scrollTop + 24
  } else if (insertIndex === 0) {
    lineClientY = rootEls[0].rect.top
  } else if (insertIndex >= rootEls.length) {
    lineClientY = rootEls[rootEls.length - 1].rect.bottom
  } else {
    lineClientY =
      (rootEls[insertIndex - 1].rect.bottom + rootEls[insertIndex].rect.top) / 2
  }

  return {
    type: 'root-insert',
    index: insertIndex,
    rect: {
      top: lineClientY - containerRect.top + scrollTop,
      left: scrollLeft,
      width: containerEl.scrollWidth,
      height: 2,
    },
  }
}

const WysiwygFormLayer = memo(function WysiwygFormLayer({
  elements,
  formDirectoryHandle,
  formKey,
  formConfigHook,
}: {
  elements: FormControl[]
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formKey: string
  formConfigHook?: string | null
}): React.ReactElement {
  return (
    <FormRenderer
      elements={elements}
      formDirectoryHandle={formDirectoryHandle}
      formKey={formKey}
      formConfigHook={formConfigHook ?? null}
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
    const el = formRef.current.querySelector(
      `[${CONTROL_ID_ATTR}="${CSS.escape(controlId)}"]`,
    )
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
    const el = formRef.current.querySelector(
      `[${CONTROL_ID_ATTR}="${CSS.escape(controlId)}"]`,
    )
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
  onControlsChange,
  selectedId,
  onSelect,
  formDirectoryHandle,
  formKey,
  formConfigHook = null,
}: WysiwygCanvasProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hoverRect, setHoverRect] = useState<Rect | null>(null)
  const hoveredIdRef = useRef<string | null>(null)
  const hoverRectRef = useRef<Rect | null>(null)
  hoveredIdRef.current = hoveredId

  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null)
  const dropTargetRef = useRef<DropTarget | null>(null)
  const controlsRef = useRef(controls)
  controlsRef.current = controls

  const selectionRect = useControlRect(containerRef, formRef, selectedId, controls)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (draggingId) return
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
  }, [draggingId])

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

  const handleDeleteClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      const wrap = (e.currentTarget as HTMLElement).closest?.(`[${GEAR_WRAP_ATTR}]`)
      const id = wrap?.getAttribute(FOR_CONTROL_ATTR) ?? hoveredIdRef.current
      if (!id) return
      if (selectedId === id) onSelect(null)
      hoveredIdRef.current = null
      hoverRectRef.current = null
      setHoveredId(null)
      setHoverRect(null)
      onControlsChange((prev) => removeControlFromTree(prev, id))
    },
    [selectedId, onSelect, onControlsChange],
  )

  const handleGearDragStart = useCallback(
    (e: React.DragEvent) => {
      const id =
        (e.currentTarget as HTMLElement)
          .closest?.(`[${GEAR_WRAP_ATTR}]`)
          ?.getAttribute(FOR_CONTROL_ATTR) ?? hoveredIdRef.current
      if (!id) {
        e.preventDefault()
        return
      }
      e.dataTransfer.setData(DATA_ID_KEY, id)
      e.dataTransfer.setData('text/plain', id)
      e.dataTransfer.effectAllowed = 'move'
      setDraggingId(id)
    },
    [],
  )

  const handleGearDragEnd = useCallback(() => {
    setDraggingId(null)
    dropTargetRef.current = null
    setDropTarget(null)
  }, [])

  const handleCanvasDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const isMove = e.dataTransfer.types.includes(DATA_ID_KEY)
    e.dataTransfer.dropEffect = isMove ? 'move' : 'copy'
    if (!containerRef.current) return
    const target = computeDropTarget(
      e.clientX,
      e.clientY,
      controlsRef.current,
      containerRef.current,
    )
    if (
      target &&
      dropTargetRef.current &&
      target.type === dropTargetRef.current.type &&
      target.type === 'root-insert' &&
      dropTargetRef.current.type === 'root-insert' &&
      target.index === dropTargetRef.current.index
    ) {
      return
    }
    if (
      target &&
      dropTargetRef.current &&
      target.type !== 'root-insert' &&
      dropTargetRef.current.type !== 'root-insert' &&
      target.type === dropTargetRef.current.type &&
      target.containerId === dropTargetRef.current.containerId &&
      target.cellIndex === dropTargetRef.current.cellIndex
    ) {
      return
    }
    dropTargetRef.current = target
    setDropTarget(target)
  }, [])

  const handleCanvasDragLeave = useCallback((e: React.DragEvent) => {
    const related = e.relatedTarget
    if (related instanceof Node && containerRef.current?.contains(related)) {
      return
    }
    dropTargetRef.current = null
    setDropTarget(null)
  }, [])

  const handleCanvasDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const target = dropTargetRef.current
      dropTargetRef.current = null
      setDropTarget(null)
      setDraggingId(null)

      const id = e.dataTransfer.getData(DATA_ID_KEY)
      const dropInfo = getDropTypeAndOptions(e)

      if (!target) {
        // Fallback: append to root if from palette
        if (!id && dropInfo) {
          onControlsChange((prev) => applyRootInsert(prev, dropInfo.type, prev.length))
        }
        return
      }

      if (target.type === 'root-insert') {
        if (id) {
          onControlsChange((prev) => applyRootReorder(prev, id, target.index))
        } else if (dropInfo) {
          onControlsChange((prev) => applyRootInsert(prev, dropInfo.type, target.index))
        }
      } else if (target.type === 'grid-cell') {
        if (id) {
          onControlsChange((prev) =>
            applyGridCellMove(prev, target.containerId, id, target.cellIndex),
          )
        } else if (dropInfo) {
          onControlsChange((prev) =>
            applyGridCellInsert(prev, target.containerId, dropInfo.type, target.cellIndex),
          )
        }
      } else if (target.type === 'table-cell') {
        if (id) {
          onControlsChange((prev) =>
            applyTableCellMove(prev, target.containerId, id, target.cellIndex),
          )
        } else if (dropInfo) {
          onControlsChange((prev) =>
            applyTableCellInsert(prev, target.containerId, dropInfo.type, target.cellIndex),
          )
        }
      }
    },
    [onControlsChange],
  )

  const showHoverChrome = Boolean(
    hoveredId && hoverRect && hoveredId !== selectedId && !draggingId,
  )

  return (
    <div
      ref={containerRef}
      style={{
        ...containerStyle,
        cursor: draggingId ? 'grabbing' : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
      onDragOver={handleCanvasDragOver}
      onDragLeave={handleCanvasDragLeave}
      onDrop={handleCanvasDrop}
    >
      <div ref={formRef} style={formLayerStyle}>
        <WysiwygFormLayer
          elements={controls}
          formDirectoryHandle={formDirectoryHandle}
          formKey={formKey}
          formConfigHook={formConfigHook}
        />
      </div>

      {/* Hover chrome: подсветка + кнопки */}
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
          <div
            data-wysiwyg-gear-wrap=""
            data-for-control-id={hoveredId}
            style={chromePanelStyle}
          >
            <span
              draggable
              style={{
                ...chromeButtonStyle,
                cursor: 'grab',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary--main, #0069d9)',
                border: '1px solid var(--primary--main, #0069d9)',
                color: '#fff',
              }}
              onDragStart={handleGearDragStart}
              onDragEnd={handleGearDragEnd}
              onClick={handleGearClick}
              title="Выбрать / перетащить"
            >
              <Edit />
            </span>
            <button
              type="button"
              style={{
                ...chromeButtonStyle,
                cursor: 'pointer',
                background: 'var(--danger--main, #e03d3d)',
                border: '1px solid var(--danger--main, #e03d3d)',
                color: '#fff',
              }}
              onClick={handleDeleteClick}
              title="Удалить контрол"
            >
              <Delete />
            </button>
          </div>
        </div>
      )}

      {/* Подсветка выбранного контрола */}
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

      {/* Drop indicator */}
      {dropTarget && (
        <div
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 5,
            borderRadius: dropTarget.type === 'root-insert' ? 1 : 6,
            ...(dropTarget.type === 'root-insert'
              ? {
                  top: dropTarget.rect.top - 1,
                  left: dropTarget.rect.left + 24,
                  width: dropTarget.rect.width - 48,
                  height: 2,
                  background: 'var(--primary--main, #00a88e)',
                }
              : {
                  top: dropTarget.rect.top,
                  left: dropTarget.rect.left,
                  width: dropTarget.rect.width,
                  height: dropTarget.rect.height,
                  boxShadow:
                    'inset 0 0 0 2px var(--primary--main, #00a88e), 0 0 12px rgba(0, 168, 142, 0.3)',
                }),
          }}
        />
      )}
    </div>
  )
}
