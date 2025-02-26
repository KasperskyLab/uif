import { TestingProps } from '@helpers/typesHelpers'
import { BreadcrumbsProps } from '@src/breadcrumbs/types'
import { TagGroupProps } from '@src/tag/types'
import { ReactNode } from 'react'

export type PageHeaderProps = {
  breadcrumbs?: BreadcrumbsProps,
  description?: string,
  elementAfter?: ReactNode,
  iconBefore?: ReactNode,
  tagsAfter?: TagGroupProps['items'],
  title?: string
} & TestingProps
