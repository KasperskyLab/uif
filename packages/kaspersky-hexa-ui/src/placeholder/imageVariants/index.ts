import { ImageConfigurationExport as ImageConfigurationExportMedium } from './150/configurationExport'
import { ImageDeleting as ImageDeletingMedium } from './150/deleting'
import { ImageError403 as ImageError403Medium } from './150/error403'
import { ImageError404 as ImageError404Medium } from './150/error404'
import { ImageError503 as ImageError503Medium } from './150/error503'
import { ImageFailed as ImageFailedMedium } from './150/failed'
import { ImageNoAccess as ImageNoAccessMedium } from './150/noAccess'
import { ImageNoData as ImageNoDataMedium } from './150/noData'
import { ImageNoLicense as ImageNoLicenseMedium } from './150/noLicense'
import { ImageNotChecked as ImageNotCheckedMedium } from './150/notChecked'
import { ImageNotFound as ImageNotFoundMedium } from './150/notFound'
import { ImageOnMaintenance as ImageOnMaintenanceMedium } from './150/onMaintenance'
import { ImagePreparing as ImagePreparingMedium } from './150/preparing'
import { ImageSuccess as ImageSuccessMedium } from './150/success'
import { ImageUnavailable as ImageUnavailableMedium } from './150/unavailable'
import { ImageWarning as ImageWarningMedium } from './150/warning'
import { ImageConfigurationExport as ImageConfigurationExportSmall } from './48/configurationExport'
import { ImageDeleting as ImageDeletingSmall } from './48/deleting'
import { ImageError403 as ImageError403Small } from './48/error403'
import { ImageError404 as ImageError404Small } from './48/error404'
import { ImageError503 as ImageError503Small } from './48/error503'
import { ImageFailed as ImageFailedSmall } from './48/failed'
import { ImageNoAccess as ImageNoAccessSmall } from './48/noAccess'
import { ImageNoData as ImageNoDataSmall } from './48/noData'
import { ImageNoLicense as ImageNoLicenseSmall } from './48/noLicense'
import { ImageNotChecked as ImageNotCheckedSmall } from './48/notChecked'
import { ImageNotFound as ImageNotFoundSmall } from './48/notFound'
import { ImageOnMaintenance as ImageOnMaintenanceSmall } from './48/onMaintenance'
import { ImagePreparing as ImagePreparingSmall } from './48/preparing'
import { ImageSuccess as ImageSuccessSmall } from './48/success'
import { ImageUnavailable as ImageUnavailableSmall } from './48/unavailable'
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
    notChecked: ImageNotCheckedSmall,
    noLicense: ImageNoLicenseSmall,
    notFound: ImageNotFoundSmall,
    configurationExport: ImageConfigurationExportSmall,
    preparing: ImagePreparingSmall,
    noAccess: ImageNoAccessSmall,
    deleting: ImageDeletingSmall,
    unavailable: ImageUnavailableSmall,
    onMaintenance: ImageOnMaintenanceSmall
  },
  medium: {
    error403: ImageError403Medium,
    error404: ImageError404Medium,
    error503: ImageError503Medium,
    noData: ImageNoDataMedium,
    success: ImageSuccessMedium,
    failed: ImageFailedMedium,
    warning: ImageWarningMedium,
    notChecked: ImageNotCheckedMedium,
    noLicense: ImageNoLicenseMedium,
    notFound: ImageNotFoundMedium,
    configurationExport: ImageConfigurationExportMedium,
    preparing: ImagePreparingMedium,
    noAccess: ImageNoAccessMedium,
    deleting: ImageDeletingMedium,
    unavailable: ImageUnavailableMedium,
    onMaintenance: ImageOnMaintenanceMedium
  }
}
