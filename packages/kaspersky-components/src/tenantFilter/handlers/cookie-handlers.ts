import { isEmpty } from 'lodash'
import { Tenant, TenantFilterTreeDataItem, TenantFilterTreeDataMap } from '../types'

const SELECTED_TENANTS_COOKIE = 'selectedTenantsIds'

/**
 * Prepares data to work with tenant filter component.
 *
 * @param {Tenant[]} tenants Tenants.
 * @return {{ mappedTenants: TenantFilterTreeDataItem[], tenantsIds: string[] }} Mapped tenants with changed keys and tenants ids array.
 */
export const getPreparedTenantTreeData = (tenants: Tenant[]): { mappedTenants: TenantFilterTreeDataItem[], tenantsIds: string[] } => {
  const tenantsIds: string[] = []
  const mappedTenants = tenants.map(({ id, name, subtenants }) => {
    tenantsIds.push(id)

    const mappedTenant: TenantFilterTreeDataItem = {
      key: id,
      title: name
    }

    if (subtenants && subtenants.length > 0) {
      const { mappedTenants, tenantsIds: childTenantsIds } = getPreparedTenantTreeData(subtenants)

      mappedTenant.children = mappedTenants
      tenantsIds.push(...childTenantsIds)
    }

    return mappedTenant
  })

  return { mappedTenants, tenantsIds }
}

/**
 * Returns default selected tenants ids.
 *
 * @param {string[]} allTenantsKeys All tenants keys.
 * @return {string[]} Default selected tenants ids.
 */
export const getDefaultSelectedTenantsIds = (allTenantsKeys: string[]): string[] => {
  const selectedTenantsIdsFromCookie = getSelectedTenantsIds()
  const defaultSelectedTenantsIds = selectedTenantsIdsFromCookie.filter(
    selectedTenant => allTenantsKeys.some(
      tenantKey => tenantKey === selectedTenant
    )
  )

  return isEmpty(defaultSelectedTenantsIds) ? allTenantsKeys : defaultSelectedTenantsIds
}

/**
 * Reads selected tenants data from cookie.
 *
 * @return {string[]} Selected tenants ids array.
 */
export const getSelectedTenantsIds = (): string[] => {
  const dataFromCookie = document.cookie.match('(^|;)\\s*' + SELECTED_TENANTS_COOKIE + '\\s*=\\s*([^;]+)')?.pop()

  return dataFromCookie ? dataFromCookie.split(':') : []
}

/**
 * Returns tree data map.
 *
 * @param {TenantFilterTreeDataItem[]} data Tenant tree data.
 * @return {Map<TenantFilterTreeDataItem['key'], TenantFilterTreeDataMapItem>} Tree data map.
 */
export const getTreeDataMap = (data: TenantFilterTreeDataItem[]): TenantFilterTreeDataMap => {
  const map: TenantFilterTreeDataMap = new Map()
  const loop = (parentKey: string, dataElements: TenantFilterTreeDataItem[]) => {
    for (const dataElement of dataElements) {
      const childrenKeys = dataElement.children?.map((child: TenantFilterTreeDataItem) => child.key)
      map.set(dataElement.key, {
        children: childrenKeys,
        parent: parentKey,
        title: dataElement.title
      })
      if (dataElement.children && dataElement.children.length > 0) {
        loop(dataElement.key, dataElement.children)
      }
    }
  }

  loop('', data)

  return map
}

/**
 * Saves tenants filter data to cookie.
 *
 * @param {string[]} selectedTenantsIds Array of selected tenants ids.
 */
export const saveTenantsFilterDataInCookie = (selectedTenantsIds: string[]): void => {
  document.cookie = `${SELECTED_TENANTS_COOKIE}=${selectedTenantsIds.join(':')}; domain=.${document.location.hostname}; path=/;`
}
