import { splitFileNameForTruncation } from './splitFileNameForTruncation'
import { validateNewFiles } from './useValidation'

type ValidateFunctionProps = Parameters<typeof validateNewFiles>

type TestCase = [
  string,
  Partial<ValidateFunctionProps[0][number]>[],
  Partial<ValidateFunctionProps[1][number]>[],
  ValidateFunctionProps[2],
  ValidateFunctionProps[3],
  ValidateFunctionProps[4],
  { errors: { [key: string]: string[] } }
]

describe('Uploader validateNewFiles', () => {
  const testCases: TestCase[] = [
    ['1 case', [], [{ uid: '1', size: 50 * 1024 }], undefined, undefined, undefined, { errors: {} }],
    [
      '2 case',
      [],
      [{ uid: '1', name: '1', size: 200 * 1024 }],
      100,
      undefined,
      undefined,
      { errors: { 'uploader.validation.maxFileSize': ['1'] } }
    ],
    [
      '3 case',
      [{ uid: '1', name: '1', size: 50 * 1024 }],
      [{ uid: '2', name: '2', size: 50 * 1024 }, { uid: '3', name: '3', size: 50 * 1024 }],
      undefined,
      3,
      undefined,
      { errors: {} }
    ],
    [
      'should not pass maxCount check',
      [{ uid: '1', name: '1', size: 50 * 1024 }],
      [{ uid: '2', name: '2', size: 50 * 1024 }, { uid: '3', name: '3', size: 50 * 1024 }, { uid: '4', name: '4', size: 50 * 1024 }],
      undefined,
      3,
      undefined,
      { errors: { 'uploader.validation.maxCount': ['2', '3', '4'] } }
    ],
    [
      'should skip a file exceeding allowed size and pass maxCount check',
      [{ uid: '1', name: '1', size: 50 * 1024 }],
      [{ uid: '2', name: '2', size: 50 * 1024 }, { uid: '3', name: '3', size: 50 * 1024 }, { uid: '4', name: '4', size: 200 * 1024 }],
      100,
      3,
      undefined,
      { errors: { 'uploader.validation.maxFileSize': ['4'] } }
    ],
    [
      'should not pass maxCount and maxTotalSize check',
      [{ uid: '1', name: '1', size: 50 * 1024 }],
      [{ uid: '2', name: '2', size: 50 * 1024 }, { uid: '3', name: '3', size: 50 * 1024 }, { uid: '4', name: '4', size: 200 * 1024 }],
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
      [{ uid: '1', name: '1', size: 50 * 1024 }],
      [
        { uid: '2', name: '2', size: 50 * 1024 },
        { uid: '3', name: '3', size: 50 * 1024 },
        { uid: '4', name: '4', size: 200 * 1024 },
        { uid: '5', name: '5', size: 50 * 1024 }
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
  ]
  test.each(testCases)('%s', (name, files, newFiles, maxFileSizeInKB, maxCount, maxTotalSizeInKB, expected) => {
    const result = validateNewFiles(
      files as ValidateFunctionProps[0][number][],
      newFiles as ValidateFunctionProps[1][number][],
      maxFileSizeInKB,
      maxCount,
      maxTotalSizeInKB
    )

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
