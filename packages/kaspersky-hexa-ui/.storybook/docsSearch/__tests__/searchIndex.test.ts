import { readSearchCache, searchCachePayload, withSearchManifest } from '../searchIndex'

describe('readSearchCache', () => {
  const documents = [{
    id: 'card--docs',
    title: 'Card',
    text: 'mode'
  }]

  it('returns the search response for a file built from the current sources', () => {
    const raw = searchCachePayload('4:10', documents)

    expect(JSON.parse(readSearchCache(raw, '4:10') || '')).toEqual({ documents })
  })

  it('ignores a file built from other sources', () => {
    const raw = searchCachePayload('4:10', documents)

    expect(readSearchCache(raw, '5:11')).toBeNull()
  })
})

describe('withSearchManifest', () => {
  it('keeps component manifests and adds the search file', () => {
    const manifests = withSearchManifest({
      components: { v: 1, components: {} },
      docs: {
        docs: {
          'intro--docs': {
            id: 'intro--docs',
            title: 'Intro',
            path: './docs/intro.mdx',
            content: '# Введение\n\nКак начать'
          }
        }
      }
    })

    expect(manifests.components).toEqual({ v: 1, components: {} })
    expect(manifests.search.documents).toEqual([
      expect.objectContaining({
        id: 'intro--docs',
        text: expect.stringContaining('Как начать')
      })
    ])
  })
})
