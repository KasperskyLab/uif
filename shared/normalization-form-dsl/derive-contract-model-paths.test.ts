import { describe, expect, it } from 'vitest'
import { deriveModelPathsFromInitialShape } from './derive-contract-model-paths'

describe('deriveModelPathsFromInitialShape', () => {
  it('flattens nested objects to dot paths', () => {
    expect(
      deriveModelPathsFromInitialShape({
        model: { headline: '' },
        items: [{ caption: '' }],
      }),
    ).toEqual(['model.headline', 'items.0.caption'])
  })

  it('uses only first array element as template', () => {
    expect(
      deriveModelPathsFromInitialShape({
        tags: ['', 'ignored'],
      }),
    ).toEqual(['tags.0'])
  })

  it('returns empty for empty root object', () => {
    expect(deriveModelPathsFromInitialShape({})).toEqual([])
  })

  it('returns empty for empty array template', () => {
    expect(deriveModelPathsFromInitialShape({ items: [] })).toEqual([])
  })

  it('returns empty for non-object root', () => {
    expect(deriveModelPathsFromInitialShape(null)).toEqual([])
    expect(deriveModelPathsFromInitialShape([])).toEqual([])
    expect(deriveModelPathsFromInitialShape('x')).toEqual([])
  })

  it('includes path for empty nested object', () => {
    expect(
      deriveModelPathsFromInitialShape({
        meta: {},
        model: { headline: '' },
      }),
    ).toEqual(['meta', 'model.headline'])
  })

  it('handles number and boolean leaves', () => {
    expect(
      deriveModelPathsFromInitialShape({
        n: 0,
        ok: false,
      }),
    ).toEqual(['n', 'ok'])
  })
})
