import React from 'react'

import { Tabs } from '@kaspersky/hexa-ui'

type TabsContentProps = {
  content?: React.ReactNode[]
  description?: string[]
}

const tabsConfig = [
  { defaultLabel: 'Общее описание' },
  { defaultLabel: 'Правила использования' },
  { defaultLabel: 'Код' }
]

function TabsContent ({ content, description }: TabsContentProps) {
  const contents = content ?? []
  const descriptions = description ?? []

  return (
    <Tabs>
      {tabsConfig.map((tab, index) => (
        <Tabs.TabPane
          key={String(index + 1)}
          tab={(
            <Tabs.TabPaneHead
              text={descriptions[index] ?? tab.defaultLabel ?? `Вкладка ${index + 1}`}
            />
          )}
        >
          {contents[index] ?? 'TODO'}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default TabsContent
