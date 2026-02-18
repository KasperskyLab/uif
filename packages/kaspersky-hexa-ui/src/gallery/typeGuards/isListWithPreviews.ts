import { ScreensListType, ScreensListWithPreviews } from '../types'

import { isImageWithPreviewType } from './isImageWithPreviewType'

export const isListWithPreviews = (screensList: ScreensListType): screensList is ScreensListWithPreviews => {
  const firstElement = screensList[0] as (ScreensListType[0] | undefined)

  return screensList.length === 0 || isImageWithPreviewType(firstElement)
}
