import { collectDocsEntries, searchDocumentsFromManifests } from '../collectDocs'

describe('collectDocsEntries', () => {
  it('reads unattached docs and attached component docs', () => {
    const docsManifest = {
      v: 0,
      docs: {
        'intro--docs': {
          id: 'intro--docs',
          name: 'Docs',
          title: 'Intro',
          path: './docs/intro.mdx',
          content: '# Введение\n\nКак начать работу с библиотекой'
        }
      }
    }

    const componentsManifest = {
      components: {
        v: 0,
        components: {
          button: {
            id: 'button',
            name: 'Button',
            description: 'Кнопка',
            docs: {
              'button--docs': {
                id: 'button--docs',
                name: 'Docs',
                title: 'Components/Button',
                path: './src/button/Button.documentation.mdx',
                content: '<Meta of={ButtonStories} />\n\n# Button\n\nСохранить форму'
              }
            }
          }
        }
      }
    }

    expect(collectDocsEntries(docsManifest, componentsManifest)).toEqual([
      expect.objectContaining({
        id: 'intro--docs',
        title: 'Intro',
        text: expect.stringContaining('Как начать работу с библиотекой')
      }),
      expect.objectContaining({
        id: 'button--docs',
        title: 'Components/Button',
        text: expect.stringContaining('Сохранить форму')
      })
    ])
  })

  it('reads both manifests from one combined payload', () => {
    const documents = searchDocumentsFromManifests({
      docs: {
        v: 0,
        docs: {
          'intro--docs': {
            id: 'intro--docs',
            title: 'Intro',
            path: './docs/intro.mdx',
            content: '# Введение\n\nКак начать работу'
          }
        }
      },
      components: {
        v: 0,
        components: {
          button: {
            id: 'button',
            docs: {
              'button--docs': {
                id: 'button--docs',
                title: 'Components/Button',
                path: './src/button/Button.documentation.mdx',
                content: '# Button\n\nСохранить форму'
              }
            }
          }
        }
      }
    })

    expect(documents.map((document) => document.id)).toEqual(['intro--docs', 'button--docs'])
  })

  it('skips story files that are not mdx', () => {
    const documents = collectDocsEntries({
      docs: {
        'layout--page': {
          id: 'layout--page',
          title: 'Layout',
          path: './src/field-set/stories/Layout.stories.tsx',
          content: 'export const Layout = () => null'
        },
        'intro--docs': {
          id: 'intro--docs',
          title: 'Intro',
          path: './docs/intro.mdx',
          content: '# Введение\n\nКак начать'
        }
      }
    })

    expect(documents.map((document) => document.id)).toEqual(['intro--docs'])
  })

  it('skips component entries that have no document content', () => {
    const documents = collectDocsEntries({
      components: {
        button: {
          id: 'button',
          name: 'Button',
          description: 'Кнопка'
        }
      }
    })

    expect(documents).toEqual([])
  })
})
