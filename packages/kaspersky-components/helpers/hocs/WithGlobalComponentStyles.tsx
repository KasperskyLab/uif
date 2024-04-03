import React from 'react'
import { getDisplayName, useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'

export function WithGlobalComponentStyles<T extends React.ComponentType<any>> (
  Component: T,
  getComponentStyles: (cssConfig: any, rootHashClass: string) => string
): T {
  const WithStyles = React.forwardRef<any, any>((props, ref) => {
    const rootHashClass = useGlobalComponentStyles(
      props.cssConfig,
      getComponentStyles,
      WithStyles
    )

    return <Component ref={ref} rootHashClass={rootHashClass} {...props} />
  })

  WithStyles.displayName = `WithGlobalComponentStyles(${getDisplayName(Component)})`

  return Object.assign(WithStyles, Component)
}
