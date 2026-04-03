import React from 'react'

import { TenantFilter as HexaTenantFilter } from '@src/tenantFilter'
import { TenantFilterProps } from '@src/tenantFilter/types'

import {
  previewTenantFilterAllKeys,
  previewTenantFilterData,
  previewTenantFilterSelectedKeys
} from '../../preview'

const TenantFilter = ({
  allTenantsKeys = previewTenantFilterAllKeys,
  buttonText = 'Apply',
  counterText = 'Selected',
  data = previewTenantFilterData,
  defaultSelectedKeys = previewTenantFilterSelectedKeys,
  titleText = 'Tenant filter',
  ...props
}: TenantFilterProps): JSX.Element => (
  <HexaTenantFilter
    allTenantsKeys={allTenantsKeys}
    buttonText={buttonText}
    counterText={counterText}
    data={data}
    defaultSelectedKeys={defaultSelectedKeys}
    titleText={titleText}
    {...props}
  />
)

export default TenantFilter
