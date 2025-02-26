import { TestingProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button'
import { SidebarProps } from '@src/sidebar'
import { SubmenuProps } from '@src/submenu'
import { TabPaneHeadProps } from '@src/tabs'

type DetailsPageTabPaneInner = TabPaneHeadProps & {
  key: string,
  content?: React.ReactNode
}

export type DetailsPageTabPane = DetailsPageTabPaneInner & {
  navigation?: SubmenuProps
}

type ActionType = ButtonProps & TestingProps

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction',
  THIRD_ACTION = 'thirdAction'
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type DetailsPageProps = Omit<SidebarProps, 'size' | 'footer'> & {
  navigation?: DetailsPageTabPane[],
  actions?: ActionConfig
}
