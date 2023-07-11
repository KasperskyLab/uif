const SELECTED_TENANTS_COOKIE = 'selectedTenantsIds'

/**
 * Reads selected tenants data from cookie.
 *
 * @return {string[]} Selected tenants ids array.
 */
const getSelectedTenantsIds = (): string[] => {
  const dataFromCookie = document.cookie.match('(^|;)\\s*' + SELECTED_TENANTS_COOKIE + '\\s*=\\s*([^;]+)')?.pop()
  return dataFromCookie ? dataFromCookie.split(':') : []
}

/**
 * Saves tenants filter data to cookie.
 *
 * @param {string[]} selectedTenantsIds Array of selected tenants ids.
 */
const saveTenantsFilterDataInCookie = (selectedTenantsIds: string[]): void => {
  document.cookie = `${SELECTED_TENANTS_COOKIE}=${selectedTenantsIds.join(':')}; domain=${document.location.hostname}; path=/;`
}

export {
  getSelectedTenantsIds,
  saveTenantsFilterDataInCookie
}
