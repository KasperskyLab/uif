import React from 'react'

export interface IRepeaterProps {
  component: React.ReactNode,
  data: Array<Record<string, unknown>>
}

export const Repeater = ({
  component,
  data
} : IRepeaterProps): JSX.Element => {
  return <>
    {Array.isArray(data) && (typeof component === 'function') &&
      data.map((props, key) => component({ key, ...props }))
    }
  </>
}
