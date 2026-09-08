import {
  filterComponentChangelogEntries,
  getComponentChangelogEntries
} from '@sb/components/Documentation/filterChangelogMarkdown'

const jsonEntries = [
  {
    date: '2026-08-17',
    title: 'Fix Toggle tooltip',
    commitId: 'bc84768',
    sha: 'bc8476852bf1c1bfa1f93404a398f46ceb8b851b',
    author: '@Renata Bazhanova',
    version: '6.409.6',
    description: 'Исправлено всплывающее окно',
    affectedFilesOrComponents: ['Toggle']
  },
  {
    date: '2026-08-14',
    title: 'Update Table',
    commitId: 'ff8c0fe',
    sha: 'ff8c0fe1234567890abcdef1234567890abcdef',
    author: '@Nikita Afanasyev',
    version: '6.409.5',
    description: 'Новая таблица',
    affectedFilesOrComponents: ['Table']
  }
]

const entries = [
  {
    title: 'Fix Toggle tooltip',
    description: 'Исправлено всплывающее окно',
    version: '6.409.6',
    author: '@Renata Bazhanova',
    commitHash: 'bc84768',
    sha: 'bc8476852bf1c1bfa1f93404a398f46ceb8b851b',
    date: '2026-08-17',
    affectedComponents: ['Toggle']
  },
  {
    title: 'Update Table',
    description: 'Новая таблица',
    version: '6.409.5',
    author: '@Nikita Afanasyev',
    commitHash: 'ff8c0fe',
    sha: 'ff8c0fe1234567890abcdef1234567890abcdef',
    date: '2026-08-14',
    affectedComponents: ['Table']
  }
]

describe('filterComponentChangelogEntries', () => {
  test.each([
    ['title', 'toggle', entries[0]],
    ['description without case sensitivity', 'ВСПЛЫВАЮЩЕ', entries[0]],
    ['version', '6.409.5', entries[1]],
    ['author', '@nikita', entries[1]],
    ['commit hash', 'ff8c', entries[1]],
    ['full sha', 'ff8c0fe123', entries[1]]
  ])('finds an entry by its %s', (_field, query, expectedEntry) => {
    expect(filterComponentChangelogEntries(entries, query)).toEqual([expectedEntry])
  })

  test('returns every entry for an empty query surrounded by whitespace', () => {
    expect(filterComponentChangelogEntries(entries, '   ')).toEqual(entries)
  })

  test('returns an empty list when the source is not a JSON array', () => {
    expect(getComponentChangelogEntries(undefined)).toEqual([])
    expect(getComponentChangelogEntries('{not-json')).toEqual([])
  })

  test('maps JSON entries and keeps the package version', () => {
    expect(getComponentChangelogEntries(jsonEntries)[0]).toMatchObject({
      title: 'Fix Toggle tooltip',
      version: '6.409.6',
      commitHash: 'bc84768',
      sha: 'bc8476852bf1c1bfa1f93404a398f46ceb8b851b'
    })
  })

  test('filters JSON entries by affected component names', () => {
    expect(getComponentChangelogEntries(jsonEntries, 'Toggle')).toMatchObject([
      {
        title: 'Fix Toggle tooltip',
        description: 'Исправлено всплывающее окно',
        affectedComponents: ['Toggle']
      }
    ])
  })

  test('matches ActionButton with Action-button labels', () => {
    const actionButtonEntries = [{
      ...jsonEntries[0],
      affectedFilesOrComponents: ['Action-button']
    }]

    expect(getComponentChangelogEntries(actionButtonEntries, 'ActionButton')).toHaveLength(1)
  })
})
