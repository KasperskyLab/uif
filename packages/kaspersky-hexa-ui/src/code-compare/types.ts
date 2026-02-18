import { ReactNode } from 'react'

export interface IVersionOption {
  value: string | number,
  label: ReactNode,
  description?: string
}
