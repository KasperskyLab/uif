import { ThemeKey } from '../../design-system/types'
import { TextSizes, textLevels, themeColors } from '../../design-system/tokens'

export type TextType = keyof typeof textLevels
export type TextColor = keyof typeof themeColors['text-icons-elements']

export type StateProps = {
}

export type TenantFilterColorConfig = {
}

export type TenantFilterStyleProps = {
  theme?: ThemeKey
}

export type TenantFilterTreeDataItem = {
  title: string,
  key: string,
  disabled?: boolean,
  children?: TenantFilterTreeDataItem[]
}

export type TenantFilterTreeDataMapItem = {
  title: string,
  parent: string,
  children: string[] | []
}

export type TenantFilterTreeCheckEvent = {
  node: {
    checked: boolean,
    key: string
  }
}

export type TenantFilterData = {
  fetchTreeDataHandler?: () => Promise<TenantFilterTreeDataItem[]>,
  applyHandler?: (keys: string[]) => void
}

export type ITenantFilterProps = TenantFilterStyleProps & TenantFilterData & {
  titleText?: string,
  counterText?: string,
  buttonText?: string,
  withButton?: boolean,
  withSearch?: boolean,
  withIcon?: boolean
}

export type TenantFilterCssConfig = TenantFilterColorConfig & TextSizes;
