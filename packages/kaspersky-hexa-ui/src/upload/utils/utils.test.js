import { splitFileNameForTruncation } from './splitFileNameForTruncation'
import { validate } from './useValidation'

describe('Uploader validate', () => {
  test.each([
    ['1 case', [], [{ uuid: '1', size: 50 * 1024 }], undefined, undefined, undefined, { errors: {} }],
    [
      '2 case',
      [],
      [{ uuid: '1', name: '1', size: 200 * 1024 }],
      100,
      undefined,
      undefined,
      { errors: { 'uploader.validation.maxFileSize': ['1'] } }
    ],
    [
      '3 case',
      [{ uuid: '1', name: '1', size: 50 * 1024 }],
      [{ uuid: '2', name: '2', size: 50 * 1024 }, { uuid: '3', name: '3', size: 50 * 1024 }],
      undefined,
      3,
      undefined,
      { errors: {} }
    ],
    [
      'should not pass maxCount check',
      [{ uuid: '1', name: '1', size: 50 * 1024 }],
      [{ uuid: '2', name: '2', size: 50 * 1024 }, { uuid: '3', name: '3', size: 50 * 1024 }, { uuid: '4', name: '4', size: 50 * 1024 }],
      undefined,
      3,
      undefined,
      { errors: { 'uploader.validation.maxCount': ['2', '3', '4'] } }
    ],
    [
      'should skip a file exceeding allowed size and pass maxCount check',
      [{ uuid: '1', name: '1', size: 50 * 1024 }],
      [{ uuid: '2', name: '2', size: 50 * 1024 }, { uuid: '3', name: '3', size: 50 * 1024 }, { uuid: '4', name: '4', size: 200 * 1024 }],
      100,
      3,
      undefined,
      { errors: { 'uploader.validation.maxFileSize': ['4'] } }
    ],
    [
      'should not pass maxCount and maxTotalSize check',
      [{ uuid: '1', name: '1', size: 50 * 1024 }],
      [{ uuid: '2', name: '2', size: 50 * 1024 }, { uuid: '3', name: '3', size: 50 * 1024 }, { uuid: '4', name: '4', size: 200 * 1024 }],
      undefined,
      3,
      300,
      {
        errors: {
          'uploader.validation.maxCount': ['2', '3', '4'],
          'uploader.validation.maxTotalSize': ['2', '3', '4']
        }
      }
    ],
    [
      'should skip a file exceeding allowed size and pass maxTotal check',
      [{ uuid: '1', name: '1', size: 50 * 1024 }],
      [
        { uuid: '2', name: '2', size: 50 * 1024 },
        { uuid: '3', name: '3', size: 50 * 1024 },
        { uuid: '4', name: '4', size: 200 * 1024 },
        { uuid: '5', name: '5', size: 50 * 1024 }
      ],
      100,
      10,
      150,
      {
        errors: {
          'uploader.validation.maxFileSize': ['4'],
          'uploader.validation.maxTotalSize': ['2', '3', '5']
        }
      }
    ]
  ])('%s', (name, files, newFiles, maxFileSizeInKB, maxCount, maxTotalSizeInKB, expected) => {
    const result = validate(files, newFiles, maxFileSizeInKB, maxCount, maxTotalSizeInKB)

    expect(Object.keys(result.errors).length).toBe(Object.keys(expected.errors).length)
    expect(result.errors).toMatchObject(expected.errors)
  })
})

describe('Uploader splitFileNameForTruncation', () => {
  test.each([
    [
      'The quick brown fox jumps over the lazy dog.png',
      ['The quick brown fox jumps over the laz', 'y dog.png']
    ],
    [
      'The quick brown fox jumps over the lazy dog',
      ['The quick brown fox jumps over the laz', 'y dog']
    ]
  ])('%# case', (fileName, expected) => {
    const result = splitFileNameForTruncation(fileName)

    expect(result).toMatchObject(expected)
  })
})
