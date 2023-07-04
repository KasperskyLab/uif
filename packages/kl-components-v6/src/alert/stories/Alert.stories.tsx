import React from 'react'
import { badges } from '@sb/badges'
import { Text } from '@src/typography/text'
import { Alert } from '../Alert'
import { AlertProps } from '../types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { useTheme } from '@design-system/theme/hooks'
import { Story } from '@storybook/react'
import { StoryLayout } from '@sb/StoryComponents'
import MetaData from '../__meta__/meta.json'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const ActionsButtons: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action1',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action1')
  },
  SECOND_ACTION: {
    text: 'Action2',
    // eslint-disable-next-line no-console
    onClick: () => console.log('Action2')
  }
}

export const Default: Story<AlertProps> = (args) => {
  const theme = useTheme()
  const { children } = args
  return (
    <StoryLayout theme={theme.key}>
      <Alert {...args} actions={ActionsButtons}>
        <Text type="BTR3">{children}</Text>
      </Alert>
    </StoryLayout>
  )
}

Default.argTypes = {
  type: {
    options: ['sectionMessage', 'alert'],
    defaultValue: 'sectionMessage'
  },
  title: {
    defaultValue: 'Title'
  },
  mode: {
    defaultValue: 'success'
  },
  children: {
    defaultValue:
      'Title and actions are optional. Toggle their visibility as needed.'
  }
}

Default.parameters = {
  controls: {
    exclude: ['theme']
  }
}
