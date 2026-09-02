import { parseDocumentationHash } from '../documentationSectionUrl'

describe('parseDocumentationHash', () => {
  it('returns empty location for an empty hash', () => {
    expect(parseDocumentationHash('')).toEqual({})
    expect(parseDocumentationHash('#')).toEqual({})
  })

  it('treats a hash without slash as a section id', () => {
    expect(parseDocumentationHash('#current')).toEqual({ sectionId: 'current' })
  })

  it('parses tab key and section id', () => {
    expect(parseDocumentationHash('#composition/current')).toEqual({
      tabKey: 'composition',
      sectionId: 'current'
    })
  })
})
