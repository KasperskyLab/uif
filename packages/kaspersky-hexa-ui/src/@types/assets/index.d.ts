declare module '*.svg' {
  import * as React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.less' {
  const classes: { [key: string]: string }
  export default classes
}

declare module 'virtual:hexa-ui-changelog' {
  const entries: Array<{
    date: string
    title: string
    commitId: string
    sha: string
    author: string
    version: string
    description: string
    affectedFilesOrComponents: string[]
  }>
  export default entries
}
