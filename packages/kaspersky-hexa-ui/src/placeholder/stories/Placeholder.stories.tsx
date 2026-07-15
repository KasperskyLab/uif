import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Dropdown, DropdownItemProps } from '@src/dropdown'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

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

const overlay: DropdownItemProps[] = [
  { children: 'Variant 1' },
  { children: 'Variant 2' },
  { children: 'Variant 3' }
]

const button = (
  <Button iconAfter={<ArrowDown1 />}>Button</Button>
)

const dropdown = (
  <Dropdown overlay={overlay} trigger={['click']}>
    {button}
  </Dropdown>
)

export const Actions: Story = {
  render: (args) =>
    renderVariants(
      [
        {
          label: 'actionButtons',
          content: <PlaceholderComponent {...processArgs({ ...args, actionButtons: true })} />
        },
        {
          label: 'actionLinks',
          content: <PlaceholderComponent {...processArgs({ ...args, actionLinks: true })} />
        },
        {
          label: 'dropdown',
          content: <PlaceholderComponent {...processArgs({ ...args, actionButtons: true })} actionButtons={dropdown} />
        }
      ],
      true,
      'medium'
    ),
  argTypes: {
    size: { control: false }
  }
}

export const DescriptionFormatting: Story = {
  args: {
    title: 'Description Formatting',
    description: '**bold**\n  _italic_\n  ~~strike~~\n  `inline code`\n  [link](https://example.com/)'
  },
  render: (args) => (
    <>
      <SectionMessage mode="info" title="DescriptionFormatting" closable={false}>
        <P>Для отображение отступов для description используйте \n</P>
        <P>
          <code>const description = `Text1\nText2`</code> (1 отступ) <br />
          <code>const description = `Text1\n\nText2`</code> (2 отступа) <br />
        </P>
        <P>Для выделения текста и добавления ссылок - Markdown</P>
      </SectionMessage>
      <div style={{ width: 420, minHeight: 280 }}>
        <PlaceholderComponent {...processArgs(args)} textAlign="left" />
      </div>
    </>
  ),
  argTypes: {
    description: { control: 'text' },
    textAlign: { control: false },
    title: { control: false }
  }
}

export const DescriptionReactNode: Story = {
  args: {
    title: 'Description React Node',
    description: (
      <div>
        <Tag>Tag</Tag>
        Несколько строк <br />ReactNode
      </div>
    )
  },
  render: (args) => <PlaceholderComponent {...processArgs(args)} textAlign="left" />,
  argTypes: {
    description: { control: false },
    textAlign: { control: false },
    title: { control: false }
  }
}
