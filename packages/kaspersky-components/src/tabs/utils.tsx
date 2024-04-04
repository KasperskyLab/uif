import React, {
  Children,
  isValidElement,
  ReactElement,
  ReactNode
} from 'react'
import { TabPaneHeaderProps } from './types'
import { v4 as uuidv4 } from 'uuid'
import { GroupTabHeader, Tabs } from './Tabs'
import { StyledDivider, StyledText } from './tabsCss'

export const createGroupTabPane = (props: TabPaneHeaderProps): JSX.Element => {
  const { divider, dividerClassName, title, children, ...restProps } = props
  const uniqueKey = uuidv4()
  const tabKey = props.tabKey || uniqueKey
  return (
    <Tabs.TabPane
      key={tabKey}
      {...restProps}
      tab={
        <>
          {divider ? <StyledDivider className={dividerClassName} /> : null}
          {children || (
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
