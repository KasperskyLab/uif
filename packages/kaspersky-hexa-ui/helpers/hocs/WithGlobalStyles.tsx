import React, { ComponentType } from 'react'

import { useGlobalStyles } from '../hooks/useGlobalStyles'

export function WithGlobalStyles<T extends React.ComponentType<any>> (Component: T): T {
  const WithStyles: React.FC<any> = (props) => {
    useGlobalStyles()

    return <Component {...props} />
  }

  WithStyles.displayName = `WithGlobalStyles(${getDisplayName(Component)})`

  return Object.assign(WithStyles, Component)
}

function getDisplayName (Component: ComponentType<any>) {
  return Component.displayName || Component.name || 'Component'
}
