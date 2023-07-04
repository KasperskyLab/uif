import React from 'react'
import { useTheme } from '../../../design-system/theme/hooks'
import { IconProps } from './types'

export const IconFilterActive: React.FC<IconProps> = (props): JSX.Element => {
  const { color = 'currentColor', componentId, onClick, ...attrs } = props
  const theme = useTheme()

  const svgCursor = onClick ? 'pointer' : 'default'

  return (
    <svg
      style={{ cursor: svgCursor }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={theme.colors.textIconsElements.secondary || color}
      data-component-id={componentId}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
    >
      <path
        d="M1.30562 4.25283C0.854876 3.50586 0.852566 2.63676 1.11274 1.95985C1.36833 1.29489 2.02796 0.510742 3.09249 0.510742H7.58925C8.03108 0.510742 8.38925 0.868915 8.38925 1.31074C8.38925 1.75257 8.03108 2.11074 7.58925 2.11074H3.09249C2.57396 2.11074 2.28033 2.87074 2.59895 3.39874C3.66289 5.14562 5.79455 8.14919 6.43732 9.04877C6.55921 9.21937 6.625 9.42355 6.625 9.63322V13.611C6.625 14.051 6.90613 14.411 7.24973 14.411H7.62527C7.96887 14.411 8.25 14.051 8.25 13.611V9.60991C8.25 9.41422 8.3032 9.22308 8.40648 9.05686C8.6468 8.67015 9.15624 7.86163 9.88145 6.7697C10.1055 6.43229 10.5584 6.33652 10.9011 6.55255C11.262 6.78014 11.359 7.26225 11.126 7.61979C10.6061 8.41784 10.3138 8.96843 9.99257 9.51382C9.9163 9.64331 9.87306 9.78978 9.86938 9.94001L9.77946 13.611C9.77946 14.617 9.08816 16.011 7.62527 16.011H7.24973C5.78684 16.011 5.09554 14.617 5.09554 13.611V10.0556C5.09554 9.87258 5.04619 9.69324 4.94743 9.5391C4.07592 8.17884 1.90219 5.23236 1.30906 4.25849L1.30562 4.25283Z"
        fillOpacity="0.85"
      />
      <ellipse
        cx="12.276"
        cy="2.79689"
        rx="2.78674"
        ry="2.80861"
        fill={theme.colors.criticalitystatuses.high || color}
      />
    </svg>
  )
}

IconFilterActive.defaultProps = {
  color: 'currentColor'
}

IconFilterActive.displayName = 'IconFilterActive'
