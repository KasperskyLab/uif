import React, { memo } from 'react'

import { MiniGalleryCustomLoad, MiniGallerySimple } from './components'
import { GalleryProps } from './types'

export const Gallery = memo(({
  screensList,
  value,
  onChange,
  createSrc,
  handleCustomImageLoad,
  zoomInText = 'Zoom in',
  zoomOutText = 'Zoom out',
  imageLoadingFailureText = 'Failed to load content',
  screenPerPage = 10,
  hasConditionalPaging = true,
  rootSelector = '#root',
  noDataText = 'No Data',
  columnsNumber
}: GalleryProps) => {
  if (handleCustomImageLoad) {
    return (
      <MiniGalleryCustomLoad
        screensList={screensList}
        handleCustomImageLoad={handleCustomImageLoad}
        value={value}
        onChange={onChange}
        zoomInText={zoomInText}
        zoomOutText={zoomOutText}
        imageLoadingFailureText={imageLoadingFailureText}
        perPage={screenPerPage}
        hasConditionalPaging={hasConditionalPaging}
        rootSelector={rootSelector}
        noDataText={noDataText}
        columnsNumber={columnsNumber}
      />
    )
  }

  return (
    <MiniGallerySimple
      screensList={screensList}
      value={value}
      onChange={onChange}
      createSrc={createSrc}
      zoomInText={zoomInText}
      zoomOutText={zoomOutText}
      imageLoadingFailureText={imageLoadingFailureText}
      perPage={screenPerPage}
      hasConditionalPaging={hasConditionalPaging}
      rootSelector={rootSelector}
      noDataText={noDataText}
      columnsNumber={columnsNumber}
    />
  )
})
