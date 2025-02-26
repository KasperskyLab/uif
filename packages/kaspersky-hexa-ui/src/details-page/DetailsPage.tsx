import { Button } from '@src/button'
import { Submenu } from '@src/submenu'
import { Tabs } from '@src/tabs'
import React, { FC } from 'react'

import { FooterContainer, HorizontalTabs, HorizontalTabsContent, StyledSidebar } from './detailsPageCss'
import { DetailsPageProps } from './types'

export const DetailsPage: FC<DetailsPageProps> = ({
  navigation,
  children,
  actions,
  ...rest
}) => {
  return (
    <StyledSidebar
      {...rest}
      hasNavigation={!!navigation}
      size="large"
      footer={
        actions && (
          <FooterContainer>
            {actions.FIRST_ACTION && (
              <Button size="medium" {...actions.FIRST_ACTION}>
                {actions.FIRST_ACTION.text}
              </Button>
            )}
            {actions.SECOND_ACTION && (
              <Button size="medium" mode="secondary" {...actions.SECOND_ACTION}>
                {actions.SECOND_ACTION.text}
              </Button>
            )}
            {actions.THIRD_ACTION && (
              <Button size="medium" mode="secondary" {...actions.THIRD_ACTION}>
                {actions.THIRD_ACTION.text}
              </Button>
            )}
          </FooterContainer>
        )
      }
     >
        {navigation
          ? <HorizontalTabs tabPosition="top">
              {navigation.map(({ key, content, navigation: innerNavigation, ...rest }) => (
                <Tabs.TabPane key={key} tab={<Tabs.TabPaneHead {...rest} />}>
                  {innerNavigation
                    ? <Submenu {...innerNavigation} />
                    : <HorizontalTabsContent>{content}</HorizontalTabsContent>
                  }
                </Tabs.TabPane>
              ))}
            </HorizontalTabs>
          : children
        }
    </StyledSidebar>
  )
}
