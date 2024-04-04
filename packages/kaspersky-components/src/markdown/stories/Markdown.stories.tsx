import { Markdown } from '../Markdown'
import { MarkdownProps } from '../types'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { Meta } from '@storybook/react'

const mdVariants = {
  common: `# Заголовок первого уровня

## Заголовок второго уровня

### Заголовок третьего уровня

#### Заголовок четвертого уровня

##### Заголовок пятого уровня

###### Заголовок шестого уровня

Абзацы создаются с помощью пустой строки.

*Курсив* или _Курсив_

**Жирный** или __Жирный__

***Жирный курсив*** или ___Жирный курсив___

- Неупорядоченный список
  - Подпункт
    - Подподпункт

1. Упорядоченный список
   1. Подпункт
      1. Подподпункт

\`Код в строке\`

\`\`\`javascript
// Код в блоке
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

~~Strikethrough~~

[Internal link](#/internal-hash-tag)

[External link](http://www.kaspersky.com)
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

const meta: Meta<MarkdownProps> = {
  title: 'Atoms/Markdown',
  component: Markdown,
  argTypes: {
    ...sbHideControls(['theme', 'as', 'forwardedAs'])
  },
  args: {
    testId: 'markdown-test-id',
    klId: 'markdown-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

export const Basic = {
  args: {
    value: mdVariants.common
  }
}

export const MDTable = {
  args: {
    value: mdVariants.table
  }
}

export const MDList = {
  args: {
    value: mdVariants.list
  }
}

export const MDQuote = {
  args: {
    value: mdVariants.quote
  }
}
