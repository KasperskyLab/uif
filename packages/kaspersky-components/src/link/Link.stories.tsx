import React from 'react'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './meta.json'
import { Link } from './Link'
import { ILinkProps } from './types'
import { Icon } from '../icon'

export default {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const defaultProps = {
  text: 'Link',
  href: '#'
}

const LinkTemplate = ({
  text = defaultProps.text,
  href = defaultProps.href,
  ...rest
}: ILinkProps) => {
  return (
    <Link text={text} href={href} {...rest} />
  )
}

export const Basic = LinkTemplate.bind({})

const LinkDisabledTemplate = ({
  text = defaultProps.text,
  href = defaultProps.href,
  ...rest
}: ILinkProps) => {
  return (
    <Link text={text} href={href} disabled {...rest} />
  )
}

export const LinkDisabled = LinkDisabledTemplate.bind({})

const LinkUnderlineTemplate = ({
  text = defaultProps.text,
  href = defaultProps.href,
  ...rest
}: ILinkProps) => {
  return (
    <Link text={text} href={href} decoration='underline' {...rest} />
  )
}

export const LinkUnderline = LinkUnderlineTemplate.bind({})

const LinkIconTemplate = ({
  text = defaultProps.text,
  href = defaultProps.href,
  ...rest
}: ILinkProps) => {
  return (
    <Link
      text={text}
      href={href}
      decoration='icon'
      icon={
        <Icon name='Copy' size='small' />
      }
      {...rest}
    />
  )
}

export const LinkIcon = LinkIconTemplate.bind({})
