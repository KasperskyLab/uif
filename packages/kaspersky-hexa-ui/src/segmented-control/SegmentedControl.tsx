import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Badge, BadgeSize } from '@src/badge'
import { Dropdown, DropdownItemProps } from '@src/dropdown'
import { Indicator } from '@src/indicator'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Menu3, StatusInfoOutline } from '@kaspersky/hexa-ui-icons/16'

import { segmentedControlCss } from './segmentedControlCss'
import {
  SegmentedControlItemClickProps,
  SegmentedControlItemProps,
  SegmentedControlProps,
  SegmentedControlSize,
  SegmentedControlViewProps
} from './types'
import { useThemedSegmentedControl } from './useThemedSegmentedControl'

const StyledSegmentedControlBar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${segmentedControlCss}
`

type BadgeSizeMapForSegmentedControl = Record<SegmentedControlSize, BadgeSize>

const badgeSizeMapForSegmentedControl: BadgeSizeMapForSegmentedControl = {
  small: 'medium',
  medium: 'medium',
  large: 'large'
}

export const SegmentedControl: FC<SegmentedControlProps> = (rawProps: SegmentedControlProps) => {
  const props: SegmentedControlViewProps = useThemedSegmentedControl(rawProps)
  const badgeSize: BadgeSize = badgeSizeMapForSegmentedControl[rawProps.size || 'medium']
  return <SegmentedControlView {...props} badgeSize={badgeSize} />
}

const SegmentedControlItem = ({
  className,
  text,
  counter,
  indicator,
  infoTooltip,
  iconBefore,
  disabled,
  onClick,
  badgeSize,
  ...rest
}: SegmentedControlItemProps & {
    badgeSize?: BadgeSize
  }
) => {
  return (
    <button
      className={cn('kl6-segmented-control-button', className)}
      onClick={onClick}
      {...rest}
    >
      {iconBefore}
      <span className="text">{text}</span>
      {infoTooltip && (
        <Tooltip text={infoTooltip}>
          <StatusInfoOutline/>
        </Tooltip>
      )}
      {counter && <Badge count={counter.number} mode={counter.mode} size={badgeSize} />}
      {indicator && <Indicator mode={indicator}/>}
    </button>
  )
}

export const SegmentedControlView = ({
  tabsData,
  contentData,
  className,
  cssConfig,
  badgeSize,
  ...props
}: SegmentedControlViewProps) => {
  const { testAttributes } = useTestAttribute(props)
  const [{ name: defaultTab, content: defaultContent }] = tabsData
  const [activeTab, setActiveTab] = useState<string | undefined>(defaultTab)
  const [activeContent, setActiveContent] = useState<string | undefined>(defaultContent)
  const [properties, setProperties] = useState<Record<string, unknown>>()
  const [expanderItems, setExpanderItems] = useState<SegmentedControlItemProps[]>([])

  const tabClickHandler = ({ name, content, properties }: SegmentedControlItemClickProps) => {
    setActiveTab(name)
    setProperties(properties)
    activeContent !== content && setActiveContent(content)
  }

  const dropdownItems: DropdownItemProps[] | undefined = expanderItems?.map((item: SegmentedControlItemProps) => {
    return {
      children: item.text
    }
  })

  return (
    <div className="kl6-segmented-control">
      <StyledSegmentedControlBar
        className={cn('kl6-segmented-control-bar', className)}
        cssConfig={cssConfig}
        {...testAttributes}
      >
        {
          tabsData.map(({
            name,
            content,
            properties,
            ...rest
          }: SegmentedControlItemProps) => (
            <SegmentedControlItem
              key={`tab_key_${name}`}
              badgeSize={badgeSize}
              role="tab"
              className={cn({ active: activeTab === name })}
              onClick={() => tabClickHandler({ name, content, properties })}
              name={name}
              content={content}
              {...rest}
            />
          ))
        }
        {
          Boolean(dropdownItems?.length) && <div className="kl6-segmented-control-expander">
            <Dropdown
              overlay={dropdownItems || []}
              disabled={false}
              loading={false}
              trigger={['click']}
              placement="bottomRight"
            >
              <ActionButton icon={<Menu3/>} />
            </Dropdown>
          </div>
        }
      </StyledSegmentedControlBar>
      <div>{activeContent && contentData[activeContent](properties)}</div>
    </div>
  )
}
