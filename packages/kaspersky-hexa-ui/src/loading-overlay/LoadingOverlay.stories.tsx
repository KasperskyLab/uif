import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from './__meta__/meta.json'
import { LoadingOverlay } from './LoadingOverlay'
import { LoadingOverlayProps } from './types'

const meta: Meta<LoadingOverlayProps> = {
  title: 'Hexa UI Components/LoadingOverlay',
  component: LoadingOverlay,
  ...withDesignControls<LoadingOverlayProps>({
    componentName: 'loadingOverlay',
    meta: {
      argTypes: {
        description: {
          control: 'text'
        },
        size: {
          control: { type: 'inline-radio' },
          options: ['medium', 'large'],
          table: {
            defaultValue: { summary: 'medium' },
            type: { summary: 'medium | large' }
          }
        }
      },
      args: {
        description: 'help text',
        testId: 'loading-overlay-test-id'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        design: MetaData.pixsoView,
        docs: {
          page: withMeta(MetaData)
        }
      }
    }
  })
}

export default meta

function Container ({ children, style, ...props }: any) {
  return (
    <div {...props} style={{ border: '1px solid grey', height: 300, padding: 20, position: 'relative', width: 500, ...style }}>
      {children}
    </div>
  )
}

export const Basic: StoryObj<LoadingOverlayProps> = {
  render: args => {
    return <Container>
      <LoadingOverlay {...args} />
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
    </Container>
  },
  name: 'Loading Overlay'
}
