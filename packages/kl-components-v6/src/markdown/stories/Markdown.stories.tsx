import React from 'react'
import { Markdown } from '../Markdown'
import { MarkdownProps } from '../types'
import { badges } from '../../../.storybook/badges'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import Meta from '../__meta__/meta.json'
import { useTheme } from '../../../design-system/theme/hooks'

const mdVariants = {
  common: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do [eiusmod tempor incididunt](http://www.kaspersky.com) ut labore et dolore magna aliqua

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

[Lorem ipsum](http://www.kaspersky.com)
`,
  table: `
| id | Vale | Description                                                                                                                                               | Site                                                  |
|----|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1  | Cat  | GFM Markdown table syntax is quite simple. It does not allow row or cell spanning as well as putting multi-line text in a cell.                           | [Lorem ipsum Cat](http://www.kaspersky.com) |
| 2  | Dog  | Adjust text alignment and table borders using the options from the menu and using the toolbar buttons -- formatting is applied to all the selected cells. | [Lorem ipsum Dog](http://www.kaspersky.com) |
`,
  list: `
- George Washington
* John Adams
+ Thomas Jefferson
`,
  quote: '> Text that is a quote'
}

export default {
  title: 'Atoms/Markdown',
  component: Markdown,
  argTypes: {
    theme: {
      control: { type: 'radio', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    value: {
      control: { type: 'text' }
    }
  },
  args: {
    theme: 'light'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic = ({
  value = mdVariants.common,
  ...rest
}: MarkdownProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Markdown {...rest} value={value}/>
    </StoryLayout>
  )
}

export const MDTable = ({
  value = mdVariants.table,
  ...rest
}: MarkdownProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Markdown {...rest} value={value}/>
    </StoryLayout>
  )
}

export const MDList = ({
  value = mdVariants.list,
  ...rest
}: MarkdownProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Markdown {...rest} value={value}/>
    </StoryLayout>
  )
}

export const MDQuote = ({
  value = mdVariants.quote,
  ...rest
}: MarkdownProps) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Markdown {...rest} value={value}/>
    </StoryLayout>
  )
}
