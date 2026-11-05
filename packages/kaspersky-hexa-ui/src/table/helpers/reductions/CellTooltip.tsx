import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { Tooltip } from '@src/tooltip'
import { fillRef } from 'rc-util/es/ref'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import { ELLIPSIS_CELL_CLASS } from './CellOverflow'
import { ELLIPSIS_TITLE_CLASS } from './ColumnTitle'

export const ELLIPSIS_TOOLTIP_ATTR = 'data-ellipsis-tooltip'

const SHOW_DELAY = 200
const HIDE_DELAY = 120

/** Everything this tooltip speaks for: clipped body cells and clipped column titles. Both are
 *  clipped by CSS alone and measured only when the pointer is on them — see ColumnTitle for why the
 *  titles stopped measuring themselves. */
const CLIPPED = `td.${ELLIPSIS_CELL_CLASS}, .${ELLIPSIS_TITLE_CLASS}`

/**
 * Renders nothing and hands the trigger the element to align to, so the popup follows whatever is
 * hovered without a single element being added inside the table.
 */
const CellAnchor = forwardRef<HTMLElement, { node: HTMLElement | null }>(
  function CellAnchor ({ node }, ref) {
    useLayoutEffect(() => {
      fillRef(ref, node)

      return () => fillRef(ref, null)
    }, [ref, node])

    return null
  }
)

const tooltipTextOf = (element: HTMLElement) => element.getAttribute(ELLIPSIS_TOOLTIP_ATTR) ?? element.textContent ?? ''

export const useCellTooltip = () => {
  const [tooltipContent, setTooltipContent] = useState<HTMLElement | null>(null)
  const [awake, setAwake] = useState(false)
  const hideTooltipTimer = useRef<ReturnType<typeof setTimeout>>()
  const config = usePopupConfig()

  const cancelTimer = useCallback(() => {
    if (hideTooltipTimer.current) clearTimeout(hideTooltipTimer.current)
    hideTooltipTimer.current = undefined
  }, [])

  const hideTooltipWithDelay = useCallback(() => {
    cancelTimer()
    hideTooltipTimer.current = setTimeout(() => setTooltipContent(null), HIDE_DELAY)
  }, [cancelTimer])

  const onMouseOver = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const next = (event.target as HTMLElement | null)?.closest?.(CLIPPED) as HTMLElement | null

    cancelTimer()

    if (!next) {
      hideTooltipWithDelay()
      return
    }

    // Read once, on hover, instead of subscribing every cell to a watcher.
    if (next.scrollWidth <= next.clientWidth) {
      hideTooltipWithDelay()
      return
    }

    setTooltipContent(current => (current === next ? current : null))
    hideTooltipTimer.current = setTimeout(() => {
      setAwake(true)
      setTooltipContent(next)
    }, SHOW_DELAY)
  }, [cancelTimer, hideTooltipWithDelay])

  // to not hide tooltip when move mouse from cell to tooltip
  useEffect(() => {
    if (!tooltipContent) return undefined

    const onPointerMoved = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null

      if (target?.closest?.('.ant-tooltip')) cancelTimer()
      else if (!target?.closest?.(CLIPPED)) hideTooltipWithDelay()
    }

    document.addEventListener('mouseover', onPointerMoved)

    return () => document.removeEventListener('mouseover', onPointerMoved)
  }, [tooltipContent, cancelTimer, hideTooltipWithDelay])

  useEffect(() => cancelTimer, [cancelTimer])

  const tooltip = awake
    ? (
        <Tooltip
          text={tooltipContent ? tooltipTextOf(tooltipContent) : ''}
          visible={Boolean(tooltipContent)}
          // manually controlled trigger (onMouseOver)
          trigger={[]}
          placement="top"
          getPopupContainer={config.getPopupContainer}
          onVisibleChange={undefined}
        >
          <CellAnchor node={tooltipContent} />
        </Tooltip>
      )
    : null

  /** Spread on every container that can hold something clipped. The table's header and body are
   *  siblings rather than one subtree once the sticky header is on, so there is more than one. */
  return { tooltip, containerProps: { onMouseOver, onMouseLeave: hideTooltipWithDelay } }
}
