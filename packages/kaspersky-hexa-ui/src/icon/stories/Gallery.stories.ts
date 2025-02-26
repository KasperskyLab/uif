import { withMeta } from '@sb/components/Meta'

import { IconGallery } from './IconGallery'
import MetaData from './meta.json'
import { sbIconColors } from './sbIconColors'

const meta = {
  component: IconGallery,
  title: 'Design/Icons',
  argTypes: {
    color: sbIconColors
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export default meta

export const Gallery = {}
