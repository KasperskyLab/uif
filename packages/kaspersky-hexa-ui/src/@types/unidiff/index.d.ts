declare module 'unidiff' {
  interface IDiffLines {
    added?: boolean,
    removed?: boolean,
    count: number,
    value: string
  }

  export const diffLines: (oldValue: string, newValue: string) => IDiffLines[]
  export const formatLines: (lines: IDiffLines[], { context: number, newlineIsToken: boolean }) => string
}
