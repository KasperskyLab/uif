import React, { ReactNode } from 'react'
import { DocsContainer } from '@storybook/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import { ThemeKey } from '@design-system/types'
import { THEME_CONFIG } from '@design-system/theme'
import { Icon, Space } from '../src'
type Props = {
  children?: ReactNode
  context: any
}

export const CustomDocsContainer: React.FC<Props> = ({ children, context }) => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light

  const needToMetaCategories = ['Atoms', 'Molecules', 'Organisms']

  return (
    <DocsContainer
      context={context}
      theme={useDarkMode() ? themes.dark : themes.light}
    >
      {context.attachedCSFFile.meta.parameters.docs?.page?.name !== 'setMeta' &&
        needToMetaCategories.some((page) => context.attachedCSFFile.meta.title.includes(page)) && (
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
              Необходимо указать definition of done
            </h2>
          </Space>
        )}
      {children}
    </DocsContainer>
  )
}
