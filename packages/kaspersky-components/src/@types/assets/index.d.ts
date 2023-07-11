declare module '*.svg' {
  import * as React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg' {
  const src: string
  export default src
}
