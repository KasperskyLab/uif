import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { SectionMessage } from '@src/section-message'
import { P } from '@src/typography'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { RcFile, type UploaderProps, type UploadRequestOption } from '../types'
import { Uploader } from '../Uploader'
import { defaultArgs, uploaderPropPresentation } from './Uploader.controls'

export const uploaderStorySettings: Meta<UploaderProps> = {
  argTypes: buildStoryArgTypes(uploaderPropPresentation),
  args: {
    ...defaultArgs,
    customRequest
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*|action)' },
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<UploaderProps> = {
  title: 'Hexa UI Components/Uploader',
  component: Uploader,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['uploaderStorySettings'],
  ...uploaderStorySettings
}

export default meta

function customRequest ({
  file,
  onError,
  onProgress,
  onSuccess
}: UploadRequestOption) {
  let percent = 0
  let aborted = false

  async function upload () {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, 500))

      if (aborted) {
        return
      }

      percent += Math.floor(Math.random() * 15)

      if (percent > 20 && (file as RcFile).name.includes('error')) {
        onError?.(new Error('Something goes wrong.'))
        return
      } else if (percent < 100) {
        onProgress?.({ percent })
      } else {
        onSuccess?.({})
        return
      }
    }
  }

  upload()

  return {
    abort () {
      aborted = true
    }
  }
}

type Story = StoryObj<UploaderProps>

export const Playground: Story = {
  render: args => (
    <div style={{ width: '100%' }}>
      <SectionMessage closable={false} mode="info">
        <P>Вы можете сэмулировать ошибку загрузки, выбрав файл с подстрокой &quot;error&quot; в имени.</P>
      </SectionMessage>

      <Uploader {...args} style={{ marginTop: 16 }} />
    </div>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(uploaderPropPresentation),
      sort: 'none'
    }
  }
}
