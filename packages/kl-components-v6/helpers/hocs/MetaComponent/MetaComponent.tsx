import React from 'react'
import { Space } from '../../../src'
import { Box } from './MetaComponent.styled'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from '../../../design-system/theme'
import { ThemeKey } from '../../../design-system/types'
import { Text } from '../../../src/typography'

const MetaComponent: React.FC<unknown> = ({ children }): JSX.Element => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light

  return (
    <ThemeProvider theme={themeKey}>
      <Space
        direction="vertical"
        size={16}
        justify="flex-start"
        align="flex-start"
      >
        <Text>
          Definition Of Done (
          {`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`}
          )
        </Text>
        <Box> {children}</Box>
      </Space>
    </ThemeProvider>
  )
}

export default MetaComponent
