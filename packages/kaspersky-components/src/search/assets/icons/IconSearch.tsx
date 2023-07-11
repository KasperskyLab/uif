import React from 'react'
import { IconProps } from './types'

export const IconSearch: React.FC<IconProps> = (props): JSX.Element => {
  const { color = 'currentColor', componentId, onClick, ...attrs } = props

  const svgCursor = onClick ? 'pointer' : 'default'

  return (
    <svg
      style={{ cursor: svgCursor }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
      data-component-id={componentId}
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2443 9.98289C12.025 8.94057 12.4873 7.64612 12.4873 6.24368C12.4873 2.79539 9.69195 0 6.24367 0C2.79539 0 0 2.79539 0 6.24368C0 9.69197 2.79539 12.4874 6.24367 12.4874C7.64612 12.4874 8.94058 12.025 9.9829 11.2443L14.4773 15.7388C14.8257 16.0871 15.3904 16.0871 15.7388 15.7388C16.0871 15.3904 16.0871 14.8257 15.7388 14.4773L11.2443 9.98289ZM10.7034 6.24368C10.7034 8.70674 8.70673 10.7035 6.24367 10.7035C3.78061 10.7035 1.78391 8.70674 1.78391 6.24368C1.78391 3.78062 3.78061 1.78391 6.24367 1.78391C8.70673 1.78391 10.7034 3.78062 10.7034 6.24368Z"
      />
    </svg>
  )
}

IconSearch.defaultProps = {
  color: 'currentColor'
}

IconSearch.displayName = 'IconSearch'
