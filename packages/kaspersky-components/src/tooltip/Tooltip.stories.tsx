import React from 'react'
import { ComponentStory } from '@storybook/react'
import { badges } from '../../.storybook/badges'
import { StoryColumn, StoryLayout } from '../../.storybook/StoryComponents'
import { Button } from '../button'
import { Tooltip } from './Tooltip'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './meta.json'
import { useTheme } from '../../design-system/theme/hooks'
import { Text } from '../typography'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      control: { type: 'select', default: 'light' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
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

export const Basic: ComponentStory<typeof Tooltip> = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <StoryColumn>
        <Text type="BTM5" themedColor="primary">
          Tooltip here:
        </Text>
        <Tooltip
          title={
            <>
              Not link. <a>Link</a>
            </>
          }
        >
          <Button>hover me to see Tooltip</Button>
        </Tooltip>
      </StoryColumn>
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
