import React from 'react'
import styled from 'styled-components'
import { H3, H6, Text } from '@src/typography'
import { ActionButton } from '@src/action-button'
import { SidebarProps } from '@src/sidebar/types'

const StyledSidebarTitle = styled.div`
  display: grid;
  grid-template-columns: max-content auto 1fr;
  align-items: center;
  grid-gap: 8px;
  flex: 1;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const SubtitleWrapper = styled.div`
  grid-column: 2 / 4;
`

const ExtraActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledHeaderFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledBorder = styled.div``

const CloseButton: React.FC<{ onClose: ISidebarTitle['onClose'] }> = ({
  onClose
}) => (
  <ActionButton
    onClick={onClose}
    size="large"
    testId="sidebar-close-icon"
    klId="close-icon"
  />
)

interface ISidebarTitle {
  title?: React.ReactNode,
  subtitle?: React.ReactNode,
  prefix?: React.ReactNode,
  postfix?: React.ReactNode,
  subHeader?: React.ReactNode,
  headerActions?: React.ReactNode,
  onClose: SidebarProps['onClose']
}

const SidebarHeader: React.FC<ISidebarTitle> = ({
  title,
  subtitle,
  postfix,
  prefix,
  headerActions,
  onClose,
  subHeader
}) => (
  <>
    <StyledHeaderFirstLine>
      <StyledSidebarTitle>
        {!!prefix && <Wrapper>{prefix}</Wrapper>}
        <div>
          {
            typeof title === 'string'
              ? <H3 testId="sidebar-title" klId="title">{title}</H3>
              : <Text>{title}</Text>
          }
        </div>
        {!!postfix && <Wrapper>{postfix}</Wrapper>}
        {!!subtitle && (
          <SubtitleWrapper>
            <>
              {
                typeof subtitle === 'string'
                  ? <H6 testId="sidebar-subtitle" klId="sidebar-subtitle">{subtitle}</H6>
                  : <Text>{subtitle}</Text>
              }
            </>
          </SubtitleWrapper>
        )}
      </StyledSidebarTitle>
      <div className="ant-drawer-extra">
        <ExtraActions>
          {headerActions}
          <CloseButton onClose={onClose} />
        </ExtraActions>
      </div>
    </StyledHeaderFirstLine>
    {subHeader || <StyledBorder />}
  </>
)

export default SidebarHeader
