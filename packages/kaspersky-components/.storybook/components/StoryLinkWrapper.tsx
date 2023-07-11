import React, {
  Children,
  cloneElement,
  FunctionComponent,
  MouseEvent,
  ReactElement
} from 'react'
import { action } from '@storybook/addon-actions'
import storybookConfig from '../storybook-config'

const onLinkClick = action('onLinkClick')

interface StoryLinkWrapperProps {
  href: string
  passHref?: boolean
}

export const StoryLinkWrapper: FunctionComponent<StoryLinkWrapperProps> = ({
  href,
  passHref,
  children
}) => {
  const child = Children.only(children) as ReactElement
  return cloneElement(child, {
    href: passHref && href,
    key: 1,
    onClick: (e: MouseEvent) => {
      e.preventDefault()
      onLinkClick(href)
    }
  })
}

StoryLinkWrapper.defaultProps = {
  passHref: false
}

type Link = {
  id: number
  title: string
  href: string
}

export const links =
  storybookConfig.storybook.versions.availableVersions.reduce(
    (previousValue, version) => {
      return previousValue.concat({
        id: version.id,
        title: version.semver + ' ' + version.title,
        href: `${storybookConfig.storybook.versions.hostname}/${version.href}/`
      })
    },
    [] as Array<Link>
  )
