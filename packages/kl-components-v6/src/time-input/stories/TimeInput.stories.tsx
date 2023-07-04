import React from 'react'
import { ComponentStory } from '@storybook/react'
import { badges } from '../../../.storybook/badges'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import Meta from '../meta.json'
import { useTheme } from '../../../design-system/theme/hooks'
import { TimeInput } from '../TimeInput'
import { parse } from 'date-fns'

export default {
  title: 'Atoms/TimeInput',
  component: TimeInput,
  args: {
    theme: 'light',
    disabled: false,
    vertical: false
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic: ComponentStory<typeof TimeInput> = ({
  theme: themeProps,
  ...rest
}) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <TimeInput
        {...rest}
        format={'HH:mm'}
        klId='test-id'
        defaultValue={parse('12:18', 'HH:mm', new Date())}
      />
    </StoryLayout>
  )
}

Basic.parameters = {
  docs: {
    storyDescription: 'Basic Component Usage Example'
  }
}
