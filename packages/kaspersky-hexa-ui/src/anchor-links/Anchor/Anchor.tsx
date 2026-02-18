import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { Badge } from '@src/badge'
import { Dropdown } from '@src/dropdown'
import { Indicator } from '@src/indicator'
import classnames from 'classnames'
import React, { FC, KeyboardEvent, MouseEvent, useRef, useState } from 'react'

import { Menu2 } from '@kaspersky/hexa-ui-icons/16'

import { AnchorLink } from '../AnchorLink/AnchorLink'
import { AnchorLinkCssConfig, AnchorLinkProps } from '../AnchorLink/types'
import { isNumber } from '../helpers'
import { StyledMoreButton } from '../MoreButton/StyledMoreButton'

import { StyledAnchor, StyledAnchorWrapper } from './StyledAnchor'
import { AnchorProps, AnchorViewProps } from './types'
import { useThemedAnchor } from './useThemedAnchor'

const INTERSECTION_PADDING = 40

const AnchorView: FC<AnchorViewProps> = (props: AnchorViewProps) => {
  const { testAttributes, items = [], onChange, onClick, ...anchorProps } = props
  const [activeLink, setActiveLink] = useState<string>()

  const containerRef = useRef<HTMLDivElement>(null)
  const popupContainerRef = useRef<HTMLDivElement>(null)

  const lastFittingItemIndex = useIntersectionChildren(containerRef, INTERSECTION_PADDING)
  const hasIntersection = isNumber(lastFittingItemIndex)
  const shouldShowMoreButton =
    hasIntersection && lastFittingItemIndex < items.length - 1

  const dropdownItems = hasIntersection
    ? items.slice(lastFittingItemIndex + 1, items.length)
    : []

  const isMoreButtonActive = dropdownItems.some(
    (item) => item.href === activeLink
  )

  const handleChange = (activeLink: string) => {
    setActiveLink(activeLink)
    onChange?.(activeLink)
  }

  const handleClick = (e: MouseEvent<HTMLElement>, link: AnchorLinkProps) => {
    e.preventDefault()

    const { href } = link
    handleChange(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    onClick?.(e, link)
  }

  const handleDropdownLinkClick =
    (link: AnchorLinkProps) => (event: {domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>}) => {
      handleClick(event.domEvent as MouseEvent<HTMLElement>, link)
    }

  return (
    <StyledAnchorWrapper ref={popupContainerRef} {...testAttributes}>
      <StyledAnchor onChange={handleChange} onClick={handleClick} {...anchorProps}>
        <div ref={containerRef} className="container">
          <>
            {items.map((linksProps, index) => {
              const shouldHide =
                hasIntersection && index > lastFittingItemIndex

              return (
                <AnchorLink
                  key={linksProps.href}
                  hidden={shouldHide}
                  {...linksProps}
                />
              )
            })}

            {shouldShowMoreButton && (
              <div className="dropdown-container">
                <Dropdown
                  trigger={['click']}
                  placement="bottomRight"
                  overlay={
                    dropdownItems
                      .map((item) => {
                        return {
                          children: item.title,
                          onClick: handleDropdownLinkClick({ href: item.href, title: item.title }),
                          href: item.href,
                          componentsAfter: [
                            ...(item.counter
                              ? [<Badge key="badge" mode="neutral" count={item.counter} klId="anchor-link-counter" />]
                              : []),
                            ...(item.hasNotification
                              ? [<Indicator key="indicator" mode="high" />]
                              : [])
                          ]
                        }
                      })
                  }
                >
                  <StyledMoreButton
                    size="large"
                    mode="tertiary"
                    iconBefore={<Menu2 />}
                    cssConfig={anchorProps.cssConfig as AnchorLinkCssConfig}
                    className={classnames(isMoreButtonActive && 'active')}
                  />
                </Dropdown>
              </div>
            )}
          </>
        </div>
      </StyledAnchor>
    </StyledAnchorWrapper>
  )
}

export const Anchor: FC<AnchorProps> = (rawProps: AnchorProps) => {
  const themedProps = useThemedAnchor(rawProps)
  const props = useTestAttribute(themedProps)
  return <AnchorView {...props} />
}
