import React, {
  Children,
  cloneElement,
  FunctionComponent,
  MouseEvent,
  ReactElement
} from 'react'
import storybookConfig from '../storybook-config'

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
    }
  })
}

StoryLinkWrapper.defaultProps = {
  passHref: false
}

type Link = {
  id: string
  title: string
  href: string
}

export const links =
  storybookConfig.storybook.versions.availableVersions.reduce(
    (previousValue, version) => {
      return previousValue.concat({
        id: String(version.id),
        title: version.semver + ' ' + version.title,
        href: `${storybookConfig.storybook.versions.hostname}/${version.href}/`
      })
    },
    [] as Array<Link>
  )
