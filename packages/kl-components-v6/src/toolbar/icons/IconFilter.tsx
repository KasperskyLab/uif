import React from 'react'
import { useTheme } from '../../../design-system/theme/hooks'
import { IconProps } from './types'

export const IconFilter: React.FC<IconProps> = (props): JSX.Element => {
  const { color = 'currentColor', componentId, onClick, ...attrs } = props
  const theme = useTheme()

  const svgCursor = onClick ? 'pointer' : 'default'

  return (
    <svg
      style={{ cursor: svgCursor }}
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill={theme.colors.textIconsElements.secondary || color}
      data-component-id={componentId}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.368122 4.24209C-0.0826242 3.49512 -0.0849341 2.62602 0.175241 1.94911C0.430825 1.28414 1.09046 0.5 2.15499 0.5H10.845C11.9095 0.5 12.5692 1.28415 12.8248 1.94911C13.0849 2.62602 13.0826 3.49512 12.6319 4.24209L12.6285 4.24776C12.0341 5.22356 9.93363 8.12592 9.07753 9.47479C8.98406 9.62207 8.93525 9.79175 8.93098 9.96613L8.84196 13.6003C8.84196 14.6063 8.15066 16.0003 6.68777 16.0003H6.31223C4.84934 16.0003 4.15804 14.6063 4.15804 13.6003V10.0449C4.15804 9.86184 4.10869 9.6825 4.00993 9.52836C3.13842 8.1681 0.964691 5.22161 0.371556 4.24775L0.368122 4.24209ZM5.49982 9.03803C5.62171 9.20863 5.6875 9.41281 5.6875 9.62248V13.6003C5.6875 14.0403 5.96863 14.4003 6.31223 14.4003H6.68777C7.03137 14.4003 7.3125 14.0403 7.3125 13.6003V9.62248C7.3125 9.41281 7.37829 9.20863 7.50018 9.03803C8.14295 8.13845 10.2746 5.13488 11.3386 3.388C11.6572 2.86 11.3635 2.1 10.845 2.1H2.15499C1.63646 2.1 1.34283 2.86 1.66145 3.388C2.72539 5.13488 4.85705 8.13845 5.49982 9.03803Z"
        fillOpacity="0.85"
      />
    </svg>
  )
}

IconFilter.defaultProps = {
  color: 'currentColor'
}

IconFilter.displayName = 'IconFilter'
