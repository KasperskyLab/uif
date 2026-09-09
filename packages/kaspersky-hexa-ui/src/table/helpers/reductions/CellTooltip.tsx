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

export const ELLIPSIS_TOOLTIP_ATTR = 'data-ellipsis-tooltip'

const SHOW_DELAY = 200
const HIDE_DELAY = 120

/**
 * Renders nothing and hands the trigger the cell to align to, so the popup follows the
 * hovered <td> without a single element being added inside the table.
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

const tooltipTextOf = (cell: HTMLElement) => cell.getAttribute(ELLIPSIS_TOOLTIP_ATTR) ?? cell.textContent ?? ''

export const useCellTooltip = () => {
  const [tooltipContent, setTooltipContent] = useState<HTMLTableCellElement | null>(null)
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
    const target = (event.target as HTMLElement | null)?.closest?.(`td.${ELLIPSIS_CELL_CLASS}`)
    const next = target as HTMLTableCellElement | null

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
      else if (!target?.closest?.(`td.${ELLIPSIS_CELL_CLASS}`)) hideTooltipWithDelay()
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

  return { tooltip, bodyProps: { onMouseOver, onMouseLeave: hideTooltipWithDelay } }
}
