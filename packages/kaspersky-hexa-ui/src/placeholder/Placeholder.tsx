import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Description, placeholderCss, Title } from './placeholderCss'
import { PlaceholderImage } from './PlaceholderImage'
import { PlaceholderProps, PlaceholderViewProps } from './types'
import { useThemedPlaceholder } from './useThemedPlaceholder'

const StyledPlaceholder = styled(Space).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as string)
})`${placeholderCss}`

export const Placeholder: FC<PlaceholderProps> = (rawProps) => {
  const themedProps = useThemedPlaceholder(rawProps)
  const props = useTestAttribute(themedProps)
  return <PlaceholderView {...props} />
}

const PlaceholderView: FC<PlaceholderViewProps> = ({
  size = 'medium',
  title,
  description,
  actionButtons,
  textAlign = 'center',
  actionLinks,
  testAttributes,
  cssConfig,
  image,
  className,
  ...rest
}) => (
  <StyledPlaceholder
    justify="center"
    align="center"
    gap={0}
    cssConfig={cssConfig}
    className="hexa-ui-placeholder"
    {...testAttributes}
    {...rest}
  >
    <Space gap={cssConfig.gap} align="center" justify="center">
      <PlaceholderImage cssConfig={cssConfig} size={size} imageVariant={image} testAttributes={testAttributes} />
      <Space gap={cssConfig.titleGap} direction="vertical" justify="center">
        <Title type={size === 'medium' ? 'H4' : 'H6'}>{title}</Title>
        {description && (
          <Description
            withoutTextStyle
            $cssConfig={cssConfig}
            $textAlign={textAlign}
            value={description}
            breaks
          />
        )}
      </Space>
      {(actionButtons || actionLinks) && (
        <Space gap={16} justify="center">
          {actionButtons && <Space gap={8} width="unset">
            {actionButtons.map((actionButtonProps, index) => <Button key={index} mode="secondary" {...actionButtonProps} />)}
          </Space>}
          {actionLinks && actionLinks.map((actionLinkProps, index) => <Link key={index} {...actionLinkProps} />)}
        </Space>
      )}
    </Space>
  </StyledPlaceholder>
)
