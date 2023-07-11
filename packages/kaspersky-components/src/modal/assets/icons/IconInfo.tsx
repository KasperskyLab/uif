import React from 'react'
import { IconProps } from './types'

export const IconInfo: React.FC<IconProps> = (props): JSX.Element => {
  const { color = 'currentColor', componentId } = props

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill={color}
      data-component-id={componentId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0659 6.76554C10.0659 6.24947 10.4843 5.83112 11.0003 5.83112C11.5164 5.83112 11.9348 6.24947 11.9348 6.76554V11.5891C11.9348 12.1051 11.5164 12.5235 11.0003 12.5235C10.4843 12.5235 10.0659 12.1051 10.0659 11.5891V6.76554Z"
      />
      <path
        d="M10.0659 15.2345C10.0659 14.7184 10.4843 14.3 11.0003 14.3C11.5164 14.3 11.9348 14.7184 11.9348 15.2345C11.9348 15.7505 11.5164 16.1689 11.0003 16.1689C10.4843 16.1689 10.0659 15.7505 10.0659 15.2345Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0.655762C5.28703 0.655762 0.655762 5.28703 0.655762 11C0.655762 16.713 5.28703 21.3442 11 21.3442C16.713 21.3442 21.3442 16.713 21.3442 11C21.3442 5.28703 16.713 0.655762 11 0.655762ZM2.65576 11C2.65576 6.3916 6.3916 2.65576 11 2.65576C15.6084 2.65576 19.3442 6.3916 19.3442 11C19.3442 15.6084 15.6084 19.3442 11 19.3442C6.3916 19.3442 2.65576 15.6084 2.65576 11Z"
      />
    </svg>
  )
}

IconInfo.defaultProps = {
  color: 'currentColor'
}

IconInfo.displayName = 'IconInfo'
