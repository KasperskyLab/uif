import React from 'react'
import { IconProps } from './types'

export const IconWarning: React.FC<IconProps> = (props): JSX.Element => {
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
      <path d="M10.0312 7.46528C10.0312 6.93025 10.465 6.49653 11 6.49653C11.535 6.49653 11.9687 6.93025 11.9687 7.46528V12.466C11.9687 13.001 11.535 13.4347 11 13.4347C10.465 13.4347 10.0312 13.001 10.0312 12.466V7.46528Z" />
      <path d="M10.0312 16.2453C10.0312 15.7103 10.465 15.2765 11 15.2765C11.535 15.2765 11.9687 15.7103 11.9687 16.2453C11.9687 16.7803 11.535 17.214 11 17.214C10.465 17.214 10.0312 16.7803 10.0312 16.2453Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6824 2.59846C13.1254 -0.458598 8.8746 -0.458603 7.31764 2.59846L0.785704 15.4237C-0.637491 18.2181 1.27933 21.6943 4.46806 21.6943H17.5319C20.7207 21.6943 22.6375 18.2181 21.2143 15.4237L14.6824 2.59846ZM9.09981 3.50612C9.91501 1.90551 12.085 1.90551 12.9002 3.50612L19.4321 16.3314C20.2352 17.9082 19.1025 19.6943 17.5319 19.6943H4.46806C2.89748 19.6943 1.76482 17.9082 2.56788 16.3314L9.09981 3.50612Z"
      />
    </svg>
  )
}

IconWarning.defaultProps = {
  color: 'currentColor'
}

IconWarning.displayName = 'IconWarning'
