import React from 'react'
import Meta from './__meta__/meta.json'
import { Anchor, AnchorLink } from './Anchor'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { useTheme } from '../../design-system/theme/hooks'
import { StoryLayout } from '../../.storybook/StoryComponents'

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
  parameters: {
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Default = () => {
  const theme = useTheme()
  console.log(theme)
  const baseBlockStyle = {
    height: '120vw',
    border: `1px solid ${theme.colors['text-icons-elements'].primary}`,
    color: theme.colors['text-icons-elements'].primary,
    verticalAlign: 'middle',
    lineHeight: '100vw'
  }
  return <StoryLayout theme={theme.key}>
    <div style={{ minWidth: '90vw' }}>
      <Anchor affix={true} >
        <AnchorLink href="#option-1" title='General' />
        <AnchorLink href="#option-2" title='Source' />
        <AnchorLink href="#option-3" title='Destination' />
        <AnchorLink href="#option-4" title='Service' />
      </Anchor>
      <div
        id="option-1"
        style={{ ...baseBlockStyle, textAlign: 'center' }}
      >1</div>
      <div
        id="option-2"
        style={{ ...baseBlockStyle, textAlign: 'center' }}
      >2</div>
      <div
        id="option-3"
        style={{ ...baseBlockStyle, textAlign: 'center' }}
      >3</div>
      <div
        id="option-4"
        style={{ ...baseBlockStyle, textAlign: 'center' }}
      >4</div>
    </div>
  </StoryLayout>
}
