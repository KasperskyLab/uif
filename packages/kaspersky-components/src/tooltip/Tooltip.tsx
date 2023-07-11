import * as React from 'react'
import { Tooltip as AntdTooltip } from 'antd'

import { Text } from '../typography/text'
import { useThemedTooltip } from './useThemedTooltip'
import { ITooltipProps } from './types'
import { TooltipStyles } from './tooltipCss'

// used for automatically render <Text /> when string title is passed to component
const renderTitle = (title: React.ComponentProps<typeof AntdTooltip>['title']) => {
  if (typeof title === 'string') {
    return <Text type='BTM4'>{title}</Text>
  }

  return title
}

export const Tooltip: React.FC<ITooltipProps> = (props) => {
  const { cssConfig, title, ...rest } = useThemedTooltip(props)

  return (
    <>
      <TooltipStyles cssConfig={cssConfig} />
      <AntdTooltip
        overlayClassName="kl-tooltip"
        placement="bottomLeft"
        {...rest}
        title={renderTitle(title)}
      />
    </>
  )
}
