import { ReactNode } from 'react'

export type AnchorItem = {
  children?: AnchorItem[],
  elementAfter?: ReactNode,
  id: string,
  label: string
}

export type NavigationProps = {
  items: AnchorItem[],
  /** Navigation panel title */
  title?: string,
  style?: React.CSSProperties
}

export type NavigationItemProps = {
  item: AnchorItem,
  level: number,
  selected: boolean,
  onClick: () => void
}

export type AnchorNavigationProps = NavigationProps & {
  /** Page content */
  children: ReactNode,
  className?: string
}
