import React from 'react'
import { useTheme } from '../../../design-system/theme/hooks'
import { IconProps } from './types'

export const IconSizeMaximize: React.FC<IconProps> = (props): JSX.Element => {
  const { color = 'currentColor', componentId, onClick, ...attrs } = props
  const theme = useTheme()

  const svgCursor = onClick ? 'pointer' : 'default'

  return (
    <svg
      style={{ cursor: svgCursor }}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={theme.colors.textIconsElements.secondary || color}
      data-component-id={componentId}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
    >
      <path
        d="M9.33333 1.55563H11.2779L7.8445 5.12252C7.54076 5.42628 7.54076 5.91877 7.8445 6.22252C8.14824 6.52628 8.6407 6.52628 8.94444 6.22252L12.4444 2.58905V4.66689C12.4444 5.09647 12.7927 5.44471 13.2222 5.44471C13.6518 5.44471 14 5.09647 14 4.66689V0.777815C14 0.34824 13.6518 0 13.2222 0H9.33333C8.90378 0 8.55556 0.34824 8.55556 0.777815C8.55556 1.20739 8.90378 1.55563 9.33333 1.55563Z"
        fillOpacity="0.82"
      />
      <path
        d="M4.66667 12.4444H2.72208L6.22222 8.87815C6.52596 8.57439 6.52596 8.08191 6.22222 7.77815C5.91848 7.4744 5.42602 7.4744 5.12228 7.77815L1.55556 11.411V9.33311C1.55556 8.90354 1.20733 8.5553 0.777778 8.5553C0.348223 8.5553 0 8.90353 0 9.33311V13.2222C0 13.6518 0.348223 14 0.777778 14H4.66667C5.09622 14 5.44444 13.6518 5.44444 13.2222C5.44444 12.7926 5.09622 12.4444 4.66667 12.4444Z"
        fillOpacity="0.82"
      />
    </svg>
  )
}

IconSizeMaximize.defaultProps = {
  color: 'currentColor'
}

IconSizeMaximize.displayName = 'IconSizeMaximize'
