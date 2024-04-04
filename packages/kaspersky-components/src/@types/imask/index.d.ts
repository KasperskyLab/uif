import * as React from 'react'

declare module 'react-imask' {
  import Imask from 'imask'

  export type IMaskInputProps = Partial<
  Pick<
  Imask.AnyMaskedOptions,
  | 'mask'
  | 'value'
  | 'prepare'
  | 'validate'
  | 'commit'
  | 'overwrite'
  | 'placeholderChar'
  | 'lazy'
  | 'definitions'
  | 'blocks'
  | 'pattern'
  | 'format'
  | 'parse'
  | 'autofix'
  | 'radix'
  | 'thousandsSeparator'
  | 'mapToRadix'
  | 'scale'
  | 'signed'
  | 'normalizeZeros'
  | 'padFractionalZeros'
  | 'min'
  | 'max'
  | 'dispatch'
  >
  > & {
    unmask?: boolean,
    onAccept?: <T>(...args: T[]) => void,
    onComplete?: <T>(...args: T[]) => void
  }

  export function IMaskMixin(ComposedComponent: any): any
  /**
   * A function that decorates a react component
   * with 'imask' props
   * @param Component Any React Component
   */
  export function IMaskMixin<T, D>(
    Component: React.ComponentType<{ inputRef: React.Ref<D> } & T>
  ): React.ComponentType<T & IMaskInputProps>

  /**
   * A basic IMask React Input
   */
  export const IMaskInput: React.ComponentType<IMaskInputProps>
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    'kl-id'?: string
  }
}
