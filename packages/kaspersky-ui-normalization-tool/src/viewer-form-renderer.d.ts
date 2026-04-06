declare module '@viewer/components/FormRenderer' {
  import type { ReactElement } from 'react'

  export interface FormRendererProps {
    elements: import('./types/form-dsl').FormControl[]
    gap?: number
    formDirectoryHandle?: FileSystemDirectoryHandle | null
    formConfigHook?: string | null
    formKey?: string
  }
  export function FormRenderer(props: FormRendererProps): ReactElement
}
