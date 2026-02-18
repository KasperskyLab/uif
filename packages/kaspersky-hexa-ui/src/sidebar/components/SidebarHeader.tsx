import { TextWithTruncation } from '@helpers/components/TextWithTruncation'
import { ActionButton } from '@src/action-button'
import { SidebarProps } from '@src/sidebar'
import { H3, Text } from '@src/typography'
import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'

// TODO: replace grid system by flexbox
const StyledSidebarTitle = styled.div<{ hasPrefix: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.hasPrefix ? 'max-content auto 1fr' : 'auto 1fr'};
  align-items: start;
  grid-gap: 8px;
  flex: 1;

  .hexa-ui-truncated-title {
    overflow: hidden;
  }

  .hexa-ui-sidebar-custom-title {
    overflow: hidden;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  &.sidebar-postfix {
    margin-right: 8px;
  }
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

export const SubHeaderWrapper = styled.div<{ paddingBottom?: boolean }>`
  padding: 0 24px;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? '24px' : '0px')};
`

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
  truncateTitle?: boolean,
  onClose: SidebarProps['onClose'],
  lineClamp?: number
}

const SidebarHeader: React.FC<ISidebarTitle> = ({
  title,
  subtitle,
  postfix,
  prefix,
  headerActions,
  onClose,
  subHeader,
  truncateTitle,
  lineClamp
}) => {

  const titleContent =  (
    typeof title === 'string'
      ? (
          <H3 testId="sidebar-title" klId="title" className={cn((truncateTitle || (lineClamp && lineClamp >= 1)) && 'hexa-ui-truncated-title')}>
            <TextWithTruncation text={title} truncate={truncateTitle} lineClamp={lineClamp}>
              {title}
            </TextWithTruncation>
          </H3>
        )
      : (
          <div data-testid="sidebar-title" className="hexa-ui-sidebar-custom-title">
            <Text>{title}</Text>
          </div>
        )
  )

  return (
    <>
      <StyledHeaderFirstLine>
        <StyledSidebarTitle hasPrefix={!!prefix}>
          {!!prefix && <Wrapper>{prefix}</Wrapper>}
          {titleContent}
          {!!postfix && <Wrapper className="sidebar-postfix">{postfix}</Wrapper>}
          {!!subtitle && (
            <SubtitleWrapper hasPrefix={!!prefix}>
              <>
                {
                  typeof subtitle === 'string'
                    ? <Text type="BTR2" testId="sidebar-subtitle" klId="sidebar-subtitle">{subtitle}</Text>
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
}

export default SidebarHeader
