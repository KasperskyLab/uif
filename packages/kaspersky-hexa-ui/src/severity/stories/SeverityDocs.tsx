import { themeColors } from '@design-system/tokens'
import { Space } from '@src/space'
import { Text } from '@src/typography/text'
import {
  Subtitle,
  Title
} from '@storybook/addon-docs'
import React from 'react'

import { Severity } from '../Severity'
import { SeverityProps } from '../types'

export const SeverityDocs: React.VFC = () => {
  return (
    <>
      <Title>Examples</Title>
      <Subtitle>Базовый</Subtitle>
      <Space gap={8} direction="vertical" align="flex-start" >
        <Text>Medium</Text>
        <Space gap={4} direction="horizontal" align="flex-start" >
          {Object.keys(themeColors.criticalitystatuses)
            .map((status) =>
              <Severity key={status}
                mode={status as SeverityProps['mode']}
                size="medium"

              >{status}</Severity>)}
        </Space>
        <Text>Small</Text>
        <Space gap={4} direction="horizontal" align="flex-start" >
          {Object.keys(themeColors.criticalitystatuses)
            .map((status) =>
              <Severity key={status}
                mode={status as SeverityProps['mode']}
                size="small"
              >
                {status}
              </Severity>
            )}
        </Space>
      </Space>
    </>
  )
}
