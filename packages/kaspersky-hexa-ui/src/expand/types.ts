import { TestingProps } from '@helpers/typesHelpers'
import * as React from 'react'

export type ExpandProps = {
  children?: React.ReactNode,
  className?: string,
  textToExpand?: string,
  textToCollapse?: string,
  collapsedHeight?: number
} & TestingProps
