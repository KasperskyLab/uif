import { ActionButton } from '@src/action-button'
import { SidebarProps } from '@src/sidebar'
import { H3, H6, Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

const StyledSidebarTitle = styled.div<{ hasPrefix: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.hasPrefix ? 'max-content auto 1fr' : 'auto 1fr'};
  align-items: start;
  grid-gap: 8px;
  flex: 1;
  margin-right: 8px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`

const SubtitleWrapper = styled.div<{ hasPrefix: boolean }>`
  grid-column: ${props => props.hasPrefix ? '2 / 4' : '1 / 3'};
  word-break: break-word;
`

const ExtraActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
      <StyledSidebarTitle hasPrefix={!!prefix}>
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
          <SubtitleWrapper hasPrefix={!!prefix}>
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
