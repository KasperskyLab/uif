import smartMerge from './smartMerge'

describe('smartMerge', () => {
  describe('objects', () => {
    test('should correctly merge 2 objects with non-intersecting props', () => {
      const object1 = {
        a: 100,
        b: 200
      }

      const object2 = {
        c: 300,
        d: 400
      }

      const expectedResult = {
        a: 100,
        b: 200,
        c: 300,
        d: 400
      }

      const result = smartMerge.objects()(object1, object2)

      expect(result).toEqual(expectedResult)
    })

    test('should correctly merge 2 objects with intersecting props', () => {
      const object1 = {
        a: 100,
        b: 200,
        c: 300
      }

      const object2 = {
        b: '2k',
        c: '3k'
      }

      const expectedResult = {
        a: 100,
        b: '2k',
        c: '3k'
      }

      const result = smartMerge.objects()(object1, object2)

      expect(result).toEqual(expectedResult)
    })

    test('should correctly merge 2 objects with intersecting props, with "skipUndefined" option', () => {
      const object1 = {
        a: 100,
        b: 200,
        c: 300,
        d: 400
      }

      const object2 = {
        b: '2k',
        c: '3k',
        // * type casting is required here due to the way typescript intersections work:
        // * https://github.com/microsoft/TypeScript/issues/44983
        d: undefined as undefined | number
      }

      const expectedResult = {
        a: 100,
        b: '2k',
        c: '3k',
        d: 400
      }

      const result = smartMerge.objects({ skipUndefined: true })(object1, object2)

      expect(result).toEqual(expectedResult)
    })
  })
})
