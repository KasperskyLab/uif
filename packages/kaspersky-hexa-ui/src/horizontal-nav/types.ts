import { TestingProps } from '@helpers/typesHelpers'

export type HorizontalNavProps = {
  /** Current horizontal navigation item key */
  activeKey?: string,
  /** Custom class name */
  className?: string,
  /** Inline styles */
  style?: React.CSSProperties,
  /* Unset border line decoration */
  borderless?: boolean,
  /* Nav items */
  items?: HorizontalNavItemProps[]
} & TestingProps

export type HorizontalNavItemProps = {
  /** Custom class name */
  className?: string,
  /* Item key */
  key?: string,
  /* Item text */
  label?: string,
  /* Is item selected */
  selected?: boolean,
  /* Is item disabled */
  disabled?: boolean,
  /** Components after label */
  componentsAfter?: React.ReactNode[],
  /* Item click handler */
  onClick?: () => void
} & TestingProps
