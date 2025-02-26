import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Space } from '@src/space'
import { H5, Text } from '@src/typography'
import React, { FC } from 'react'
import styled from 'styled-components'

import { statusCardCss } from './statusCardCss'
import { iconMap, StatusCardImage } from './StatusCardImage'
import { StatusCardProps, StatusCardViewProps } from './types'
import { useThemedStatusCard } from './useThemedStatusCard'

const StyledStatusCard = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${statusCardCss}`

export const StatusCard: FC<StatusCardProps> = (rawProps) => {
  const themedProps = useThemedStatusCard(rawProps)
  const props = useTestAttribute(themedProps)
  return <StatusCardView {...props} />
}

const StatusCardView: FC<StatusCardViewProps> = ({
  mode,
  title,
  image = true,
  description,
  children,
  actions,
  iconVariant = 'default',
  width,
  cssConfig,
  testAttributes,
  ...rest
}) => {
  const iconInitialSize = iconMap(testAttributes)[iconVariant].size
  return (
    <StyledStatusCard
      $width={width}
      $initialIconSize={iconInitialSize}
      cssConfig={cssConfig}
      {...testAttributes}
      {...rest}
    >
      {image && <StatusCardImage cssConfig={cssConfig} mode={mode} iconVariant={iconVariant} testAttributes={testAttributes} />}
      <Space gap={8} direction="vertical" align="start" style={{ paddingLeft: '8px' }}>
        <Space gap={4} align="start" justify="space-between" width="100%" wrap="nowrap">
          <Space gap={4} direction="vertical" align="start" width="unset" style={{ paddingTop: '4px' }}>
            {title && <H5>{title}</H5>}
            {description && <Text type="BTR3">{description}</Text>}
          </Space>
          {actions && (
            <Space gap={8} align="start" width="unset" wrap="nowrap">
              {actions.map((actionProps, index) => <Button key={index} mode="secondary" {...actionProps} />)}
            </Space>
          )}
        </Space>
        {children}
      </Space>
    </StyledStatusCard>
  )
}
