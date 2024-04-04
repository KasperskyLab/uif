import { FC, ForwardRefExoticComponent, MouseEventHandler, PropsWithChildren, ReactNode, RefAttributes } from 'react'
import { ThemeKey } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'
import { DropdownProps } from '@src/dropdown/types'
import { IconProps } from '@src/icon/types'
import { LinkProps } from '@src/link/types'
import { ButtonProps } from '@src/button/types'
import { SearchProps } from '@src/search/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type ToolbarThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export const ToolbarItemKeyConst = {
  BUTTON: 'button',
  LINK: 'link',
  ICON: 'icon',
  DROPDOWN: 'dropdown',
  DIVIDER: 'divider',
  CHILDREN: 'children'
} as const

export type ToolbarItemKey = (typeof ToolbarItemKeyConst)[keyof typeof ToolbarItemKeyConst]

export type ToolbarItems<T extends ToolbarItemKey = ToolbarItemKey> = {
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
} & (
  {
    type: (typeof ToolbarItemKeyConst)['BUTTON'],
    label?: ReactNode,
    className?: string,
    /** @deprecated Button icon - use iconBefore and iconAfter props */
    icon?: JSX.Element,
    iconBefore?: JSX.Element,
    iconAfter?: JSX.Element,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLElement>
  } | DropdownProps & {
    type: (typeof ToolbarItemKeyConst)['DROPDOWN'],
    iconBefore?: JSX.Element,
    label?: ReactNode
  } | Omit<IconProps, 'name'> & {
    type: (typeof ToolbarItemKeyConst)['ICON'],
    icon?: IconProps['name'],
    label?: ReactNode,
    className?: string
  } | ForwardRefExoticComponent<LinkProps & {
    children?: ReactNode
  } & RefAttributes<HTMLAnchorElement>> & {
    type: (typeof ToolbarItemKeyConst)['LINK'],
    label?: ReactNode,
    href?: string
  } | {
    type: (typeof ToolbarItemKeyConst)['DIVIDER']
  } | {
    type: (typeof ToolbarItemKeyConst)['CHILDREN']
  }
)

export type ToolbarVariants = {
  Search: FC<SearchProps>,
  CollapsibleSearch: FC<SearchProps>,
  FilterItem: FC<ButtonProps>,
  FilterActiveItem: FC<ButtonProps>,
  SettingsItem: FC<ButtonProps>,
  FilterSidebar: FC<ButtonProps>,
  ScaleItem: FC<ButtonProps>,
  Divider: FC
}

export type ToolbarProps = PropsWithChildren<{
  /** Items in left part */
  left?: ToolbarItems[],
  /** Style properties for items in left part */
  styleLeft?: React.CSSProperties,
  /** Items in right part */
  right?: ToolbarItems[],
  /** Style properties for items in right part */
  styleRight?: React.CSSProperties,
  /** Limit of left part items */
  leftLimit?: number,
  /** Sticky position */
  sticky?: number,
  /** Automatic dropdown enabled */
  autoDropdown?: boolean
}> & ToolbarThemeProps & TestingProps

export type ToolbarViewProps = ToViewProps<ToolbarProps, ToolbarCssConfig, ToolbarThemeProps>

export type ToolbarSearchViewProps = ToViewProps<SearchProps, ToolbarCssConfig, ToolbarThemeProps>

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type ToolbarColorConfig = StateProps & {
  divider: StateProps,
  input: Focus & {
    normal: StateProps,
    hover: StateProps
  },
  button: {
    hover: StateProps,
    active: StateProps
  }
}

export type ToolbarCssConfig = ToolbarColorConfig

export type ToolbarBlockSide = 'left' | 'right'

export type StyledToolbarProps = {
  cssConfig: ToolbarCssConfig,
  sticky?: number,
  autoDropdown?: boolean,
  dropdownedCount?: number
}

export type AutoDropdownProps = {
  enabled: boolean,
  keyProperty: string,
  items: ToolbarItems[]
}

export type AutoDropdownResultProps = {
  containerRef: React.RefObject<HTMLDivElement>,
  dropdowned: string[]
}
