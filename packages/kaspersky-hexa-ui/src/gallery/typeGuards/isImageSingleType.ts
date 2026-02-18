import { ImageSingleType, ImageType } from '../types'

export const isImageSingleType = (imageType: ImageType | undefined): imageType is ImageSingleType => {
  return typeof imageType === 'string'
}
