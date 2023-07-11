import classnames from 'classnames'
import * as React from 'react'

interface IconProps {
  className?: string
}

export const LoaderIcon: React.VFC<IconProps> = ({ className }) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={classnames(['anticon-spin', className])}>
      <path d="M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  )
}
