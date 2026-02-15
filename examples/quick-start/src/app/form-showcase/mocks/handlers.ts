import { loginHandlers } from '../forms/Login/Login.api.mock'
import { registrationHandlers } from '../forms/Registration/Registration.api.mock'
import { settingsHandlers } from '../forms/Settings/Settings.api.mock'
import { wizardHandlers } from '../forms/Wizard/Wizard.api.mock'

/** All MSW handlers used in dev. Pass to createFormaMockWorker() in main.tsx. */
export const handlers = [
  ...loginHandlers,
  ...registrationHandlers,
  ...settingsHandlers,
  ...wizardHandlers
]
