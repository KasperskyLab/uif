import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { SectionMessage } from '@src/section-message'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Placeholder as PlaceholderComponent } from '../Placeholder'
import { placeholderImageVariants, placeholderModes, PlaceholderProps, placeholderSizes } from '../types'

const imageVariants = ['-', ...placeholderImageVariants] as const

const meta: Meta<PlaceholderProps> = {
  component: PlaceholderComponent,
  title: 'Hexa UI Components/Placeholder',
  ...withDesignControls<PlaceholderProps>({
    componentName: 'placeholder',
    meta: {
      argTypes: {
        actionButtons: {
          control: 'boolean'
        },
        actionLinks: {
          control: 'boolean'
        },
        mode: {
          control: 'radio',
          options: placeholderModes
        },
        size: {
          control: 'radio',
          options: placeholderSizes
        },
        image: {
          control: 'select',
          options: imageVariants
        },
        textAlign: {
          control: 'radio',
          options: ['left', 'center', 'right']
        }
      },
      args: {
        image: 'noData',
        title: 'Placeholder title',
        description: 'Description',
        textAlign: 'center',
        mode: 'base',
        size: 'medium',
        testId: 'placeholder-test-id',
        klId: 'placeholder-kl-id'
      },
      parameters: {
        badges: [badges.stable, badges.reviewedByDesign],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.pixsoView
      }
    }
  })
}
export default meta

type StoryPlaceholderProps = Omit<PlaceholderProps, 'actionButtons' | 'actionLinks' | 'image'> & {
  image: typeof imageVariants[number],
  actionButtons: boolean,
  actionLinks: boolean
}

type Story = StoryObj<StoryPlaceholderProps>

const processArgs = ({
  actionButtons: actionButtonsRaw,
  actionLinks: actionLinksRaw,
  image: imageRaw,
  ...rest
}: StoryPlaceholderProps) => {
  const image = imageRaw === '-' ? undefined : imageRaw
  const actionButtons: PlaceholderProps['actionButtons'] = actionButtonsRaw
    ? [{ text: 'Button', mode: 'primary' }, { text: 'Button' }]
    : undefined
  const actionLinks = actionLinksRaw ? [{ text: 'Link' }] : undefined

  return { image, actionButtons, actionLinks, ...rest }
}

export const Placeholder: Story = {
  render: (args) => <PlaceholderComponent {...processArgs(args)} />
}

export const Mode: Story = {
  render: (args) =>
    renderVariants(
      placeholderModes.map(mode => ({
        label: mode,
        content: <PlaceholderComponent {...processArgs(args)} mode={mode} />
      })),
      true
    ),
  argTypes: {
    mode: { control: false }
  }
}

export const Size: Story = {
  render: (args) =>
    renderVariants(
      placeholderSizes.map(size => ({
        label: size,
        content: <PlaceholderComponent {...processArgs(args)} size={size} />
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  }
}

export const Image: Story = {
  render: (args) => (
    <>
      <SectionMessage mode="info" closable={false}>
        <P>Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited.</P>
        <P>Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.</P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} />
    </>
  )
}

export const Actions: Story = {
  render: (args) =>
    renderVariants(
      [{
        label: 'actionButtons',
        content: <PlaceholderComponent {...processArgs({ ...args, actionButtons: true })} />
      },
      {
        label: 'actionLinks',
        content: <PlaceholderComponent {...processArgs({ ...args, actionLinks: true })} />
      }],
      true,
      'medium'
    ),
  argTypes: {
    size: { control: false }
  }
}

export const Description: Story = {
  render: (args) => (
    <div style={{width: '100%'}}>
      <h2>Для отображение отступов для description используйте:</h2>
      <SectionMessage mode="info" closable={true}>
        <P>
          <code>const description = `Text1\nText2`</code> (1 отступ) <br />
          <code>const description = `Text1\n\nText2`</code> (2 отступа) <br />
        </P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} description={'Text1\nText2'}/>
    </div>
  ),
  argTypes: {
    description: { control: false }
  }
}
