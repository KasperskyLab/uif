import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingAttributes } from '@helpers/typesHelpers'
import React from 'react'

import { imageVariantConfig } from './imageVariants'
import { PlaceholderImage as StyledPlaceholderImage } from './placeholderCss'
import { PlaceholderCssConfig, PlaceholderImageVariant, PlaceholderSize } from './types'

type PlaceholderImageProps = {
  cssConfig: PlaceholderCssConfig,
  size: PlaceholderSize,
  imageVariant?: PlaceholderImageVariant,
  testAttributes?: TestingAttributes
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ imageVariant, size, testAttributes, ...rest }) => {
  const testingProps = getChildTestProps(`placeholder-image-${imageVariant}`, testAttributes)
  const Image = imageVariantConfig[size][imageVariant || 'noData']
  const { testAttributes: imageTestAttributes } = useTestAttribute({ rest, ...testingProps })
  return (
    imageVariant
      ? <StyledPlaceholderImage {...imageTestAttributes} {...rest}>
          <Image />
        </StyledPlaceholderImage>
      : <></>
  )
}
