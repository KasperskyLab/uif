import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useWatchOverflow } from '@helpers/overflow/overflowWatcher'
import { TestingProps } from '@helpers/typesHelpers'
import { Tooltip, TooltipProps } from '@src/tooltip'
import cn from 'classnames'
import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useRef,
  useState,
  VFC
} from 'react'

import styles from './TextReducer.module.scss'

export type TextReducerProps = Pick<TooltipProps, 'placement'> & TestingProps & {
  children?: ReactNode,
  lineClamp?: number,
  stretch?: boolean,
  /** Custom tooltip text */
  tooltip?: ReactNode
  truncationWidth?: number
  className?: string
}

const measureEllipsis = (element: Element): boolean => {
  const el = element as HTMLElement
  return el.offsetWidth < el.scrollWidth || el.offsetHeight < el.scrollHeight
}

export const TextReducer: VFC<TextReducerProps> = ({
  children,
  lineClamp,
  stretch = true,
  tooltip,
  truncationWidth,
  placement,
  className,
  ...props
}: TextReducerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const { testAttributes } = useTestAttribute(props)

  const onMeasured = useCallback((next: boolean) => {
    setHasOverflow(current => (current === next ? current : next))
  }, [])

  useWatchOverflow(ref, onMeasured, measureEllipsis)

  const truncated = typeof truncationWidth === 'number' && truncationWidth > 0
  const clamp = typeof lineClamp === 'number' && lineClamp > 1

  const containerStyle = truncated ? { '--reducer-max-width': `${truncationWidth}px` } as CSSProperties : undefined
  const wrapperStyle = clamp ? { '--reducer-line-clamp': lineClamp } as CSSProperties : undefined

  const wrapper = (
    <div ref={ref} className={cn(styles.wrapper, { [styles.clamp]: clamp })} style={wrapperStyle}>
      {children}
    </div>
  )

  return (
    <div
      className={cn(className, styles.container, {
        [styles.stretch]: !truncated && stretch,
        [styles.truncated]: truncated
      })}
      style={containerStyle}
      {...testAttributes}
    >
      {
        hasOverflow
          ? <Tooltip text={tooltip ?? children} placement={placement}>{wrapper}</Tooltip>
          : wrapper
      }
    </div>
  )
}
