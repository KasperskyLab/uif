import { TestingProps } from '@helpers/index'
import { VirtualizerOptions } from '@tanstack/react-virtual'
import { HTMLAttributes } from 'react'

export type HexadecimalViewProps = {
  content: ArrayBuffer | string
} &
Partial<Pick<VirtualizerOptions<HTMLElement, HTMLElement>, 'overscan'>> &
TestingProps &
HTMLAttributes<HTMLDivElement>

export type ViewRow = {
  addr: string,
  hex: string[],
  decoded: string[]
}
export type ViewContent = {
  rows: ViewRow[],
}