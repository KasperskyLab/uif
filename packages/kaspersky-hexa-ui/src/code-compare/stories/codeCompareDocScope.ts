import { getCodeByVersion, getVersions } from './codeCompareStoryData'

const versions = getVersions()

/** Данные из CodeCompare.examples.stories для react-live в документации */
export const codeCompareDocumentationScope = {
  codeCompareStoryVersions: versions,
  codeCompareStoryOldValue: getCodeByVersion(versions[0]),
  codeCompareStoryNewValue: getCodeByVersion(versions[1]),
  codeCompareStoryEqualValue: getCodeByVersion(versions[6]),
  codeCompareStoryCompareModeNewValue: getCodeByVersion(versions[8]),
  codeCompareStoryLeftVersions: versions.slice(4),
  codeCompareStoryRightVersions: versions.slice(0, -7),
  codeCompareStoryRightOldValue: getCodeByVersion(versions[6]),
  codeCompareStoryRightNewValue: getCodeByVersion(versions[1]),
  codeCompareStoryCodeByVersion: {
    0: getCodeByVersion(versions[0]),
    1: getCodeByVersion(versions[1]),
    6: getCodeByVersion(versions[6]),
    8: getCodeByVersion(versions[8])
  } as Record<number, string | undefined>
}
