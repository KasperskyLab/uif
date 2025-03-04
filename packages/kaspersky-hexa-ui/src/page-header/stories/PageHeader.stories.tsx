import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { generateRoutes } from '@src/breadcrumbs/helpers'
import { Button } from '@src/button'
import { Textbox } from '@src/input'
import { Tag } from '@src/tag'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Settings } from '@kaspersky/hexa-ui-icons/24'

import MetaData from '../__meta__/meta.json'
import { PageHeader as PageHeaderComponent } from '../PageHeader'
import { PageHeaderProps } from '../types'

const meta: Meta<PageHeaderProps> = {
  title: 'Hexa UI Components/PageHeader',
  component: PageHeaderComponent,
  ...withDesignControls<PageHeaderProps>({
    componentName: 'pageHeader',
    meta: {
      args: {
        testId: 'page-header-test-id',
        klId: 'page-header-kl-id',
        title: 'Page title',
        description: 'Page description',
        iconBefore: <Placeholder />,
        elementAfter: <Placeholder />,
        breadcrumbs: { routes: generateRoutes() },
        tagsAfter: [
          { label: 'Tag 1' },
          { label: 'Tag 2' }
        ]
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.figmaView
      }
    },
    designArgs: {
      iconBefore: 'Placeholder',
      elementAfter: 'Icon',
      breadcrumbs: true,
      tagsAfter: true
    }
  })
}
export default meta

type Story = StoryObj<PageHeaderProps>

const processArgs = ({
  iconBefore: iconBeforeRaw,
  elementAfter: elementAfterRaw,
  tagsAfter: tagsAfterRaw,
  breadcrumbs: breadcrumbsRaw,
  ...rest
}: PageHeaderProps) => {
  let iconBefore
  switch (iconBeforeRaw) {
    case 'Placeholder':
      iconBefore = <Placeholder/>
      break
    case 'Settings':
      iconBefore = <Settings/>
      break
    case '-':
    default:
      iconBefore = null
  }

  let elementAfter
  switch (elementAfterRaw) {
    case 'Icon':
      elementAfter = <Placeholder/>
      break
    case 'Tag':
      elementAfter = <Tag>Some tag</Tag>
      break
    case 'Textbox':
      elementAfter = <Textbox/>
      break
    case 'Button':
      elementAfter = <Button text="Some button"/>
      break
    case '-':
    default:
      elementAfter = null
  }

  const tagsAfter = tagsAfterRaw ? [{ label: 'Tag 1' }, { label: 'Tag 2' }] : undefined

  const breadcrumbs = breadcrumbsRaw ? { routes: generateRoutes() } : undefined

  return { iconBefore, elementAfter, tagsAfter, breadcrumbs, ...rest }
}

export const PageHeader: Story = {
  render: (args: PageHeaderProps) => {
    const showDesignControls = localStorage.getItem('showDesignControls') === 'true'
    return <PageHeaderComponent {...(showDesignControls ? processArgs(args) : args)} />
  }
}
