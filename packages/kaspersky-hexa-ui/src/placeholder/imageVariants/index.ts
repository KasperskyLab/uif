import { ImageError403 as ImageError403Medium } from './150/error403'
import { ImageError404 as ImageError404Medium } from './150/error404'
import { ImageError503 as ImageError503Medium } from './150/error503'
import { ImageFailed as ImageFailedMedium } from './150/failed'
import { ImageNoData as ImageNoDataMedium } from './150/noData'
import { ImageNotChecked as ImageNotCheckedMedium } from './150/notChecked'
import { ImageSuccess as ImageSuccessMedium } from './150/success'
import { ImageWarning as ImageWarningMedium } from './150/warning'
import { ImageError403 as ImageError403Small } from './48/error403'
import { ImageError404 as ImageError404Small } from './48/error404'
import { ImageError503 as ImageError503Small } from './48/error503'
import { ImageFailed as ImageFailedSmall } from './48/failed'
import { ImageNoData as ImageNoDataSmall } from './48/noData'
import { ImageNotChecked as ImageNotCheckedSmall } from './48/notChecked'
import { ImageSuccess as ImageSuccessSmall } from './48/success'
import { ImageWarning as ImageWarningSmall } from './48/warning'

export const imageVariantConfig = {
  small: {
    error403: ImageError403Small,
    error404: ImageError404Small,
    error503: ImageError503Small,
    noData: ImageNoDataSmall,
    success: ImageSuccessSmall,
    failed: ImageFailedSmall,
    warning: ImageWarningSmall,
    notChecked: ImageNotCheckedSmall
  },
  medium: {
    error403: ImageError403Medium,
    error404: ImageError404Medium,
    error503: ImageError503Medium,
    noData: ImageNoDataMedium,
    success: ImageSuccessMedium,
    failed: ImageFailedMedium,
    warning: ImageWarningMedium,
    notChecked: ImageNotCheckedMedium
  }
}
