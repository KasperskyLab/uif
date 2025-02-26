import * as React from 'react'
import { resolveColorToken } from '../helpers/resolveColorToken'

export const Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const cssColorToken = resolveColorToken(props.color)

  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30.5c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Zm-4.707-14.556a1 1 0 0 1 1.414 0l2.485 2.485 5.308-5.636a1 1 0 0 1 1.414 1.414L15.9 20.55a1 1 0 0 1-1.414 0l-3.192-3.192a1 1 0 0 1 0-1.415Z"
        fill={cssColorToken || props.color || 'currentColor'}
      />
    </svg>
  )
}
