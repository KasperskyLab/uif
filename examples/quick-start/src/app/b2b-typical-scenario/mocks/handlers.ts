import { addAlertHandlers } from '../forms/AddAlert/AddAlert.api.mock'
import { alertListHandlers } from '../forms/AlertList/AlertList.api.mock'
import { alertCardHandlers } from '../forms/AlertCard/AlertCard.api.mock'

/** All MSW handlers for b2b-typical-scenario. Merge with form-showcase handlers in main. */
export const b2bHandlers = [
  ...addAlertHandlers,
  ...alertListHandlers,
  ...alertCardHandlers
]
