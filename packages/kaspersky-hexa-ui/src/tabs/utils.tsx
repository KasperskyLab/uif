import { generateId } from '@helpers/generateId'
import { Tabs as AntdTabs } from 'antd'
import React, {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode
} from 'react'

import { StyledDivider, StyledText } from './tabsCss'
import { TabPaneHeaderProps } from './types'

const createGroupTabPane = (props: TabPaneHeaderProps): JSX.Element => {
  const { divider, dividerClassName, title, children, ...restProps } = props
  const tabKey = props.tabKey || generateId()

  return (
    <AntdTabs.TabPane
      key={tabKey}
      {...restProps}
      tab={
        <>
          {divider ? <StyledDivider className={dividerClassName} /> : null}
          {children || (title &&
            <StyledText
              type="BTR4"
              themedColor="secondary"
            >
              {title}
            </StyledText>
          )}
        </>
      }
      disabled
    />
  )
}

export const GroupTabHeader: FC<TabPaneHeaderProps> = (props: TabPaneHeaderProps) => createGroupTabPane(props)

export const extractTabPanes = (children: ReactNode): ReactElement[] => {
  const result: ReactElement[] = []
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === GroupTabHeader) {
        result.push(createGroupTabPane(child.props))
      } else {
        result.push(child as ReactElement)
      }
    }
  })
  return result
}

export function extractChildrenFromFragment (variableToInspect: any): ReactElement[] {
  if (variableToInspect?.type && variableToInspect.type === React.Fragment) {
    return extractChildrenFromFragment(variableToInspect.props.children)
  }
  return variableToInspect
}
