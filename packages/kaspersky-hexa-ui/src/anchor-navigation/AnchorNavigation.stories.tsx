import { withMeta } from '@sb/components/Meta'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Sidebar } from '@src/sidebar'
import { H3, H4, H5, P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import MetaData from './__meta__/meta.json'
import { AnchorNavigation } from './AnchorNavigation'
import { AnchorItem, AnchorNavigationProps } from './types'

const meta: Meta<AnchorNavigationProps> = {
  title: 'Hexa UI Components/AnchorNavigation',
  component: AnchorNavigation,
  argTypes: {
  },
  args: {
    title: 'Page Content'
  },
  decorators: [
    (Story, context) => (
      <div>
        <Story {...context} />
      </div>
    )
  ],
  parameters: {
    badges: [],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

export default meta

type Story = StoryObj<AnchorNavigationProps>

const anchorItems: AnchorItem[] = Array(20)
  .fill(0)
  .map((_, i) => ({ id: `section-${i + 1}`, label: `Section ${i + 1}`}))

anchorItems.splice(
  3, 
  0, 
  { id: 'two-line-text', label: 'Pack my box with five dozen liquor jugs. '.repeat(2) },
  { id: 'three-line-text', label: 'The quick brown fox jumps over the lazy dog. '.repeat(2) }
)

anchorItems[1].elementAfter = <Badge mode="critical" count={1} />
anchorItems[8].children = [
  { 
    children: [
      { id: 'subsubsection-1', label: 'Subsubsection' },
      {
        elementAfter: <Badge mode="resolved" text="new" />,
        id: 'subsubsection-2', 
        label: 'The quick brown fox jumps over the lazy dog. '.repeat(2)
      }
    ],
    id: 'subsection-1',
    label: 'Subsection'
  },
  {
    elementAfter: <Badge mode="resolved" text="new" />,
    id: 'subsection-2', 
    label: 'The quick brown fox jumps over the lazy dog. '.repeat(3)
  }
]

const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const ContentItem = styled.div`
  & + & {
    margin-top: 10px;
  }
`
function renderItem (item: AnchorItem, level: number = 0): JSX.Element {
  const Header = level === 0
    ? H3
    : level === 1 ? H4 : H5

  return (
    <React.Fragment key={item.id}>
      <ContentItem>
        <Header id={item.id}>{item.label}</Header>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
        <P style={{ marginTop: '1em' }}>{dummyText}</P>
      </ContentItem>
      {item.children && item.children.map(x => renderItem(x, level + 1))}
    </React.Fragment>
  )
}

export const Basic: Story = {
  render: (args: AnchorNavigationProps) => {
    return <>
      <P style={{ marginBottom: '1em' }}>{dummyText}</P>

      <AnchorNavigation {...args}>
        {args.items.map(x => renderItem(x))} 
      </AnchorNavigation>
    </>
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}

export const WithManyItems: Story = {
  ...Basic,
  args: {
    items: anchorItems
  }
}

export const WithSidebar: Story = {
  render: (args: AnchorNavigationProps) => {
    const [isOpen, setOpen] = useState(false)

    return <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Sidebar
        title="Sidebar"
        visible={isOpen}
        onClose={() => setOpen(false)}
      >
        <P style={{ marginBottom: '1em' }}>{dummyText}</P>

        <AnchorNavigation {...args}>
          {args.items.map(x => renderItem(x))} 
        </AnchorNavigation>
      </Sidebar>
    </>
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}