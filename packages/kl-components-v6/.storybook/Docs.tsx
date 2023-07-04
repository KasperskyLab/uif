import React, { ReactNode } from 'react'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import { ThemeKey } from '../design-system/types'
import { THEME_CONFIG } from '../design-system/theme/themes/config'
import { Icon, Space } from '../src'
type Props = {
  children?: ReactNode
  context: any
}

export const CustomDocsContainer: React.FC<Props> = ({ children, context }) => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light

  const needToMetaCategorys = ['Atoms', 'Molecules', 'Organisms']

  return (
    <DocsContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id)

          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters.docs,
                theme: themeKey === ThemeKey.Dark ? themes.dark : themes.light
              }
            }
          }
        }
      }}
    >
      {context.parameters.docs.page.name !== 'setMeta' &&
        needToMetaCategorys.some((page) => context.kind.includes(page)) && (
          <Space
            direction="horizontal"
            size={16}
            align="baseline"
            justify="flex-start"
          >
            <Icon
              name="Warning"
              size="medium"
              color={
                THEME_CONFIG[ThemeKey.Light].colors.criticalitystatuses.critical
              }
            />
            <h2
              style={{
                color:
                  THEME_CONFIG[themeKey].colors.criticalitystatuses.critical
              }}
            >
              Definition of Done must be specified
            </h2>
          </Space>
        )}
      {children}
    </DocsContainer>
  )
}
