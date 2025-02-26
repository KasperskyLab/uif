import * as React from 'react'
import * as Icons from '../../index'
import './iconLazy.css'

export type IconGalleryItemProps = {
  name: string,
  size: string,
  color?: string,
  onClick?: (visible: boolean, size: string, name: string) => void
}
const IconLazy = ({ size, name, onClick, color }: IconGalleryItemProps) => {
  const Icon = Icons[`Icons${size}`][name]

  const handleClick = () => {
    if (onClick) {
      onClick(true, size, name)
    }
  }

  return (
    <button className="item" onClick={handleClick}>
        <React.Suspense fallback={'loading'}>
          {Icon && <Icon className="icon" color={color} />}
          <p>{size}/{name}</p>
        </React.Suspense>
    </button>
  )
}

export default IconLazy
