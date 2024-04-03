import React, { FC } from 'react'
import { isNumber } from '@src/anchor-links/helpers'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'

type AnchorLinkContentProps = {
  title?: string,
  counter?: number,
  hasNotification?: boolean
}

export const AnchorLinkContent: FC<AnchorLinkContentProps> = ({
  title,
  counter,
  hasNotification = false
}) => {
  const hasCounter = isNumber(counter) && counter > 0

  return (
    <span className="content-container">
      <span>{title}</span>
      <span className="description-container">
        {hasCounter && <Badge mode="neutral" count={counter} klId="anchor-link-counter" />}
        {hasNotification && (
          <span className="notification-container">
            <Indicator mode="high" />
          </span>
        )}
      </span>
    </span>
  )
}
