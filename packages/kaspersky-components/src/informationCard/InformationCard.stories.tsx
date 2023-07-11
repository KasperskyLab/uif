import React from 'react'
import {
  Title,
  Subtitle,
  Subheading,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs'
import { Space } from '../space'
import { ComponentStory } from '@storybook/react'
import { badges } from '../../.storybook/badges'
import { StoryLayout } from '../../.storybook/StoryComponents'
import { InformationCard } from './InformationCard'
import { Icon } from '../icon'
import { Tag } from '../tag'
import { TextTypes, HeadingTypes } from '../../design-system/tokens/typography'

export default {
  title: 'Organisms/InformationCard',
  component: InformationCard,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    width: {
      control: { type: 'range', min: 100, max: 1000, step: 10 },
      description: 'Width'
    },
    title: {
      control: { type: 'text' },
      description: 'Header'
    },
    titleLevel: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(HeadingTypes)],
      description: 'Header Text Styling'
    },
    titleIcon: {
      control: { type: 'select' },
      mapping: {
        undefined: undefined,
        Icon: <Icon size="large" name="AccountID" color="#5c5c5c" />
      },
      options: ['undefined', 'Icon'],
      description: 'Header icon'
    },
    leftSide: {
      control: { type: 'select' },
      mapping: {
        undefined: undefined,
        'Text example': 'Text of left side',
        Icon: <Icon size="medium" name="Apps" color="#5c5c5c" />
      },
      options: ['undefined', 'Text example', 'Icon'],
      description: 'Left side content'
    },
    rightCorner: {
      control: { type: 'select' },
      mapping: {
        undefined: undefined,
        Tag: <Tag backgroundColor='emerald'>Trusted</Tag>
      },
      options: ['undefined', 'Tag'],
      description: 'Upper right corner content'
    },
    children: {
      control: { type: 'text' },
      description: 'Main content content'
    },
    contentLevel: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(TextTypes)],
      description: 'Styling the main content text'
    },
    footer: {
      control: { type: 'select' },
      mapping: {
        undefined: undefined,
        Tags: (
          <Space size={16} direction="horizontal">
            <Tag>250–1000</Tag>
            <Tag>Hosts</Tag>
            <Tag>Mail</Tag>
            <Tag>Security Foundation</Tag>
          </Space>
        )
      },
      options: ['undefined', 'Tags'],
      description: 'Footer content'
    },
    className: { table: { disable: true } },
    leftSideClassName: { table: { disable: true } },
    titleClassName: { table: { disable: true } },
    rightCornerClassName: { table: { disable: true } },
    contentClassName: { table: { disable: true } },
    footerClassName: { table: { disable: true } },
    style: { table: { disable: true } },
    dataTestId: { table: { disable: true } }
  },
  args: {
    theme: 'light',
    width: 450,
    title: 'Heading',
    titleIcon: 'undefined',
    leftSide: 'undefined',
    rightCorner: 'undefined',
    children: 'To protect your mailboxes, OneDrive files, and SharePoint Online sites, Kaspersky Security for Microsoft Office 365 needs limited access to Office 365.',
    footer: 'undefined'
  },
  parameters: {
    badges: [badges.beta, badges.needsDesignReview],
    docs: {
      page: () => {
        return (
          <>
            <Title />

            <Subtitle>
              Info card component.
            </Subtitle>
            <Description>
              A card with ready-made stylized slots for displaying content (`leftSide`, `title`, `footer` and so on).
            </Description>
            <a target="_blank" href="https://www.figma.com/file/9hiN2DbkqbxbhR9EWRI1VK/B2B-Kit?node-id=7976%3A37024">
              Design
            </a>

            <ArgsTable story={PRIMARY_STORY} />
            <Stories includePrimary />

            <Subheading>
              FAQ
            </Subheading>
            <Description>
              -
            </Description>

            <Subheading>
              Used by
            </Subheading>
            <Description>
              -
            </Description>
          </>
        )
      }
    }
  }
}

export const Basic: ComponentStory<typeof InformationCard> = ({ theme, ...rest }) => {
  return (
    <StoryLayout theme={theme}>
      <InformationCard theme={theme} {...rest} />
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}

export const WithLeftSideAndFooter: ComponentStory<typeof InformationCard> = ({ theme, ...rest }) => {
  return (
    <StoryLayout theme={theme}>
      <InformationCard theme={theme} {...rest} />
    </StoryLayout>
  )
}

WithLeftSideAndFooter.parameters = {
  docs: {
    storyDescription: 'Example showing left side and footer'
  }
}

WithLeftSideAndFooter.args = {
  title: undefined,
  leftSide: 'Icon',
  footer: 'Tags'
}

export const WithTitleIconAndRightCorner: ComponentStory<typeof InformationCard> = ({ theme, ...rest }) => {
  return (
    <StoryLayout theme={theme}>
      <InformationCard theme={theme} {...rest} />
    </StoryLayout>
  )
}

WithTitleIconAndRightCorner.parameters = {
  docs: {
    storyDescription: 'An example with displaying an icon in the header and content in the right corner'
  }
}

WithTitleIconAndRightCorner.args = {
  titleIcon: 'Icon',
  rightCorner: 'Tag',
  footer: 'Tags'
}
