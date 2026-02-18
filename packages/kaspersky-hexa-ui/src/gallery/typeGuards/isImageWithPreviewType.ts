import { ImageType, ImageWithPreviewType } from '../types'

export const isImageWithPreviewType = (imageType: ImageType | undefined): imageType is ImageWithPreviewType => {
  return typeof imageType !== 'string' &&
    !!imageType &&
    'full' in imageType &&
    'preview' in imageType
}
