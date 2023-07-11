import { ReactNode, KeyboardEvent, MouseEvent, CSSProperties } from 'react'
import { TextSizes } from '../../design-system/tokens/typography'
import { Theme } from '../../design-system/types/Theme'

type StateProps = {
  color?: string,
  border?: string
}

export type TabsColorConfig = {
  active: StateProps,
  normal: StateProps & {
    background: string,
    paneNumber: StateProps
  },
  hover: StateProps & {
    dropdown: {
      background: string
    }
  },
  disabled: StateProps
}

export type TabsSizeConfig = {
  card: {
    padding: string,
    borderRadius: string
  },
  leftTabs: {
    padding: string,
    borderRadius: string,
    textSizes: TextSizes
  },
  tabs: {
    list: {
      padding: string
    },
    more: {
      padding: string
    },
    linkBar: {
      borderRadius: string
    },
    disabled: {
      borderRadius: string
    }
  },
  pane: {
    gap: string
  },
  dropdown: {
    borderRadius: string
  }
} & TextSizes

export type TabsCssConfig = TabsColorConfig & TabsSizeConfig

export type TabsStyleProps = {
  /** Custom theme */
  theme?: Theme
}

export type ITabsProps = {
  /** Tabs type */
  type?: 'line' | 'card',
  /** Tabs position */
  tabPosition?: 'top' | 'left',
  /** Current TabPane's key */
  activeKey?: string,
  /**
   * Initial active TabPane's key, if activeKey is not set
   */
  defaultActiveKey?: string,
  /**
   * Callback executed when active tab is changed
   */
  onChange?: (activeKey: string) => void,
  /**
   * Callback executed when tab is clicked
   */
  onTabClick?: (activeKey: string, e: KeyboardEvent | MouseEvent) => void,
  /** Style properties */
  style?: CSSProperties,
  /**
   * Whether destroy inactive TabPane when change tab
   */
  destroyInactiveTabPane?: boolean,
  /** Test id */
  klId?: string
} & TabsStyleProps

export type ITabsViewProps = Omit<ITabsProps, keyof TabsStyleProps> & {
  moreIcon?: ReactNode
} & {
  cssConfig: TabsCssConfig
}

export type ITabPaneHeadProps = {
  text: string,
  icon?: ReactNode,
  number?: number,
  cssConfig?: TabsCssConfig,
  disabled?: boolean
}
