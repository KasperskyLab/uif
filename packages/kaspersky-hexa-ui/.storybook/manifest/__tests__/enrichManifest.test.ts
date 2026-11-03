import {
  componentDescription,
  enrichComponentEntry,
  enrichDocEntry,
  enrichManifests,
  publicComponentImport,
  resolveExportName
} from '../enrichManifest'

describe('resolveExportName', () => {
  it('prefers the docgen export over the story alias', () => {
    expect(resolveExportName({
      name: 'ButtonComponent',
      reactDocgenTypescript: { exportName: 'Button' }
    }, { component: 'ButtonAlias' })).toBe('Button')
  })

  it('falls back to meta.json and then the story name', () => {
    expect(resolveExportName({ name: 'Table' }, { component: 'Table' })).toBe('Table')
    expect(resolveExportName({ name: 'LockGroupComponent' }, null)).toBe('LockGroup')
  })
})

describe('componentDescription', () => {
  it('prefers usage, then documentation text, then the meta description', () => {
    expect(componentDescription(
      { usage: 'Как пользоваться', description: 'Обёртка над antd' },
      'Длинный текст документации'
    )).toBe('Как пользоваться')

    expect(componentDescription(
      { description: 'Обёртка над antd' },
      'Кнопка запускает действие'
    )).toBe('Кнопка запускает действие')

    expect(componentDescription({ description: 'Обёртка над antd' }, '')).toBe('Обёртка над antd')
  })
})

describe('enrichComponentEntry', () => {
  it('writes a public import and a description', () => {
    const entry = enrichComponentEntry({
      name: 'ButtonComponent',
      path: './src/button/stories/Button.stories.tsx',
      import: "import { Plus } from '@kaspersky/hexa-ui-icons/16';\nimport { Button as ButtonComponent } from '@kaspersky/hexa-ui';",
      reactDocgenTypescript: { exportName: 'Button' },
      docs: {
        'button--docs': {
          content: '<Meta />\n\n# Button\n\nСохранить форму'
        }
      }
    }, {
      component: 'Button',
      usage: 'Кнопка инициирует действие.'
    })

    expect(entry.import).toBe(publicComponentImport('Button'))
    expect(entry.description).toBe('Кнопка инициирует действие.')
    expect(entry.docs?.['button--docs'].text).toContain('Сохранить форму')
  })

  it('leaves an antd import untouched', () => {
    const entry = enrichComponentEntry({
      name: 'Table',
      import: "import { Table } from 'antd';",
      error: { message: 'File: /repo/node_modules/antd/es/index.js' }
    }, { component: 'Table', usage: 'Таблица' })

    expect(entry.import).toBe("import { Table } from 'antd';")
    expect(entry.description).toBe('Таблица')
  })
})

describe('enrichDocEntry', () => {
  it('stores the plain text of the page', () => {
    expect(enrichDocEntry({
      content: '# Intro\n\nТекст документации'
    }).text).toContain('Текст документации')
  })
})

describe('enrichManifests', () => {
  it('enriches component and standalone docs manifests', () => {
    const result = enrichManifests({
      components: {
        v: 0,
        components: {
          button: {
            name: 'Button',
            path: './src/button/stories/Button.stories.tsx',
            reactDocgenTypescript: { exportName: 'Button' }
          }
        }
      },
      docs: {
        v: 0,
        docs: {
          'intro--docs': {
            id: 'intro--docs',
            content: '# Введение\n\nКак начать работу'
          }
        }
      }
    }, () => ({ usage: 'Кнопка.' })) as {
      components: { components: { button: { description?: string, import?: string } } }
      docs: { docs: { 'intro--docs': { text?: string } } }
    }

    expect(result.components.components.button.description).toBe('Кнопка.')
    expect(result.components.components.button.import).toBe("import { Button } from '@kaspersky/hexa-ui'")
    expect(result.docs.docs['intro--docs'].text).toContain('Как начать работу')
  })
})
