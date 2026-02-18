import { ScreensListType, ScreensListWithPreviews } from '../types'

import { isImageSingleType } from './isImageSingleType'

export const isListWithSingleImages = (screensList: ScreensListType): screensList is ScreensListWithPreviews => {
  const firstElement = screensList[0] as (ScreensListType[0] | undefined)

  return screensList.length === 0 || isImageSingleType(firstElement)
}
