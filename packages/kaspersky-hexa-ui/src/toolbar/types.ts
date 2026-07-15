import { ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button/types'
import { DropdownItemProps, DropdownProps } from '@src/dropdown/types'
import { IconProps } from '@src/icon/types'
import { LinkProps } from '@src/link/types'
import { SearchProps } from '@src/search/types'
import { ToggleButtonProps } from '@src/toggle-button/types'
import {
  FC,
  ForwardRefExoticComponent,
  MouseEventHandler,
  ReactNode,
  RefAttributes
} from 'react'

export type ToolbarThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export const ToolbarItemKeyConst = {
  BUTTON: 'button',
  TOGGLE: 'toggleButton',
  LINK: 'link',
  /** @deprecated Use BUTTON with iconBefore prop instead */
  ICON: 'icon',
  DROPDOWN: 'dropdown',
  DIVIDER: 'divider',
  CHILDREN: 'children'
} as const

export type ToolbarItemKey = (typeof ToolbarItemKeyConst)[keyof typeof ToolbarItemKeyConst]

type ToolbarButtonCommonProps = {
  className?: string,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLElement>,
  tooltip?: string,
  /** @deprecated Use onClick instead */
  handler?: string,
  showIndicator?: boolean
}

export type ToolbarButtonProps = ToolbarButtonCommonProps & {
  type: (typeof ToolbarItemKeyConst)['BUTTON'],
  isPressed?: ButtonProps['isPressed'],
  label?: ReactNode
}

export type ToolbarToggleButtonProps = Omit<ToggleButtonProps, 'mode' | 'size'> & {
  type: (typeof ToolbarItemKeyConst)['TOGGLE']
}

type ToolbarDropdownProps = ToolbarButtonCommonProps & DropdownProps & {
  type: (typeof ToolbarItemKeyConst)['DROPDOWN'],
  label?: ReactNode
}

type ToolbarIconProps = Omit<IconProps, 'name'> & {
  type: (typeof ToolbarItemKeyConst)['ICON'],
  icon?: IconProps['name'],
  label?: ReactNode,
  className?: string
}

type ToolbarLinkProps = ForwardRefExoticComponent<LinkProps & {
  children?: ReactNode
} & RefAttributes<HTMLAnchorElement>> & {
  type: (typeof ToolbarItemKeyConst)['LINK'],
  label?: ReactNode,
  href?: string
}

type ToolbarDividerProps = {
  type: (typeof ToolbarItemKeyConst)['DIVIDER']
}

type ToolbarChildrenProps = {
  type: (typeof ToolbarItemKeyConst)['CHILDREN']
}

export type ToolbarItems<T extends ToolbarItemKey = ToolbarItemKey> = {
  key: string,
  children?: ReactNode,
  type: T,
  visible?: boolean
} & Pick<TestingProps, 'testId' | 'klId'> & (
  ToolbarButtonProps |
  ToolbarDropdownProps |
  ToolbarIconProps |
  ToolbarLinkProps |
  ToolbarDividerProps |
  ToolbarChildrenProps |
  ToolbarToggleButtonProps
)

export type ToolbarVariantButtonProps = Omit<ButtonProps, keyof ToolbarButtonCommonProps> & ToolbarButtonCommonProps

export interface ImportExportButtonProps extends ToolbarVariantButtonProps {
  /** Switch ImportExportButton, true - dropdown, false - button */
  dropdown: false,
  /** Called after clicking on ImportExportButton */
  onClick?: MouseEventHandler<HTMLElement>
}

export interface ImportExportDropdownProps extends Omit<DropdownProps, 'overlay'> {
  /** Called after clicking on ImportExportButton */
  onClick?: MouseEventHandler<HTMLElement>,
  /** Switch ImportExportButton, true - dropdown, false - button */
  dropdown: true,
  /** Called after clicking on ImportButton */
  onImport?: DropdownItemProps['onClick'],
  /** Called after clicking on ExportButton */
  onExport?: DropdownItemProps['onClick']
  /** Text for ExportButton */
  buttonExportText?: string,
  /** Text for ImportButton */
  buttonImportText?: string
}

export type ToolbarVariants = {
  Button: FC<ToolbarVariantButtonProps>,
  Search: FC<SearchProps>,
  ImportExportItem: FC<ImportExportButtonProps | ImportExportDropdownProps>,
  ExportItem: FC<ToolbarVariantButtonProps>,
  ImportItem: FC<ToolbarVariantButtonProps>,
  CollapsibleSearch: FC<SearchProps>,
  FilterItem: FC<ToolbarVariantButtonProps>,
  FilterActiveItem: FC<ToolbarVariantButtonProps>,
  SettingsItem: FC<ToolbarVariantButtonProps>,
  FilterSidebar: FC<ToolbarVariantButtonProps>,
  ScaleItem: FC<ToolbarVariantButtonProps>,
  Divider: FC
}

export type ToolbarProps = {
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
  autoDropdown?: boolean,
  /** React children */
  children?: ReactNode
} & ToolbarThemeProps & TestingProps

export type ToolbarBlockSide = 'left' | 'right'

export type AutoDropdownProps = {
  enabled: boolean,
  keyProperty: string,
  items: ToolbarItems[]
}

export type AutoDropdownResultProps = {
  containerRef: React.RefObject<HTMLDivElement>,
  dropdowned: string[]
}
