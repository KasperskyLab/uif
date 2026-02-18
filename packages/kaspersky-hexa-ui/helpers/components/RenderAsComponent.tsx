import React from 'react'

type TRenderAsComponentProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType | string
}

export const RenderAsComponent = ({ as: Component = 'span', ...props }: TRenderAsComponentProps) => {
  return <Component {...props} />
}
