import React from 'react'
import {
  Title,
  Subtitle
} from '@storybook/addon-docs'
import { Space } from '../../space'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { ThemeKey } from '../../../design-system/types'
import { Severity } from '../Severity'
import { Text } from '../../typography/text'
import { themeColors } from '../../../design-system/tokens'
import { SeverityProps } from '../types'

export const SeverityDocs: React.VFC = () => {
  return (
    <>
      <Title>
              Examples
      </Title>
      <Subtitle>Базовый</Subtitle>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={8} direction='vertical' align='flex-start' >
          <Text>Medium</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            {Object.keys(themeColors.criticalitystatuses)
              .map((status) =>
                <Severity key={status}
                  mode={status as SeverityProps['mode']}
                  size='medium'

                >{status}</Severity>)}
          </Space>
          <Text>Small</Text>
          <Space size={4} direction='horizontal' align='flex-start' >
            {Object.keys(themeColors.criticalitystatuses)
              .map((status) =>
                <Severity key={status}
                  mode={status as SeverityProps['mode']}
                  size='small'

                >{status}</Severity>)}
          </Space>
        </Space>
      </StoryLayout>
    </>
  )
}
