import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Toggle } from '@src/toggle'
import { getItemsLeft } from '@src/toolbar/stories/Toolbar.stories'
import { Meta } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import { FilterType, Table } from '..'
import MetaData from '../__meta__/meta.json'
import { ITableProps, TableColumn, TableRecord } from '../types'

import { Story, Wrapper } from './_commonConstants'

const policiesColumns: TableColumn[] = [
  {
    dataIndex: 'status',
    key: 'status',
    columnId: 'status',
    width: 50,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    filterType: {
      type: FilterType.Enum,
      getAvailableOptions: async () => ([
        {
          value: '0',
          label: 'Inactive'
        },
        {
          value: '1',
          label: 'Active'
        },
        {
          value: '2',
          label: 'Out-of-office'
        }
      ])
    },
    title: 'Status'
  },
  {
    dataIndex: 'KLPOL_DN',
    key: 'policyName',
    columnId: 'policyName',
    width: 360,
    isSortable: true,
    show: true,
    hideColumnAvailable: false,
    expandableText: true,
    title: 'Policy'
  },
  {
    dataIndex: 'product',
    key: 'product',
    columnId: 'product',
    width: 220,
    isSortable: true,
    show: true,
    groupingAvailable: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Application'
  },
  {
    dataIndex: 'KLPOL_INHERITED',
    key: 'inheritance',
    columnId: 'inheritance',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Inherited'
  },
  {
    dataIndex: 'KLPOL_GROUP_NAME',
    key: 'group',
    columnId: 'group',
    width: 220,
    isSortable: true,
    show: true,
    groupingAvailable: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Group'
  },
  {
    dataIndex: 'roles',
    key: 'roles',
    columnId: 'roles',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Roles'
  },
  {
    dataIndex: 'KLPOL_PROFILES_NUM',
    key: 'profilesNum',
    columnId: 'profilesNum',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Number of profiles'
  },
  {
    dataIndex: 'KLPOL_CREATED',
    key: 'creationDate',
    columnId: 'creationDate',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Created'
  },
  {
    dataIndex: 'KLPOL_MODIFIED',
    key: 'modificationDate',
    columnId: 'modificationDate',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Modified'
  },
  {
    dataIndex: 'KLPOL_VS_NAME',
    key: 'virtualServer',
    columnId: 'virtualServer',
    width: 220,
    isSortable: true,
    show: true,
    hideColumnAvailable: true,
    expandableText: true,
    title: 'Name of virtual Administration Server'
  }
]

const policiesDataSource: TableRecord[] = [
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '1.0.0.0',
    'KLPOL_GSYN_ID': 119,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 97,
    'KLPOL_ACCEPT_PARENT': true,
    'product': 'Kaspersky Security Center Network Agent',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 12:36:15 pm',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 97,
    'KLPOL_MODIFIED': '10/15/2025 12:36:20 pm',
    'KLPOL_PRODUCT': '1103',
    'KLPOL_DN': 'Kaspersky Security Center Network Agent',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '202862962270577'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '9.1.0.0',
    'KLPOL_GSYN_ID': 112,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 92,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:04:46 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 92,
    'KLPOL_MODIFIED': '10/15/2025 2:04:51 am',
    'KLPOL_PRODUCT': 'KLMOBILE',
    'KLPOL_DN': 'Kaspersky Endpoint Security for Android',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '7825300496457106'
  },
  {
    'KLPOL_PROFILES_NUM': 1,
    'KLPOL_VERSION': '11.0.0.0',
    'KLPOL_GSYN_ID': 108,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 88,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:00:17 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 88,
    'KLPOL_MODIFIED': '10/15/2025 2:12:16 am',
    'KLPOL_PRODUCT': 'KES',
    'KLPOL_DN': 'Default (KES for Windows)',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '816834787498633'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '1.0.0.0',
    'KLPOL_GSYN_ID': 109,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 89,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:03:56 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 89,
    'KLPOL_MODIFIED': '10/15/2025 2:05:40 am',
    'KLPOL_PRODUCT': 'KSPP',
    'KLPOL_DN': 'KSPP_1.0.0.0',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '2402801905875871'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '1.0',
    'KLPOL_GSYN_ID': 113,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 93,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:04:52 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 93,
    'KLPOL_MODIFIED': '10/15/2025 2:04:56 am',
    'KLPOL_PRODUCT': 'KLUMDM_PRODUCT',
    'KLPOL_DN': 'Kaspersky Endpoint Security for IOS',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '2773365175307963'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '10.54.4.0',
    'KLPOL_GSYN_ID': 114,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 94,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:04:56 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 94,
    'KLPOL_MODIFIED': '10/15/2025 2:05:01 am',
    'KLPOL_PRODUCT': 'ksmm',
    'KLPOL_DN': 'ksmm',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '1309598698650141'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '6.3.0.0',
    'KLPOL_GSYN_ID': 117,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 95,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:05:01 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 95,
    'KLPOL_MODIFIED': '10/15/2025 2:05:04 am',
    'KLPOL_PRODUCT': 'SVM',
    'KLPOL_DN': 'SVM',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '1899765831128536'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '12.3.0.0',
    'KLPOL_GSYN_ID': 110,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 90,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:04:34 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 90,
    'KLPOL_MODIFIED': '10/15/2025 2:04:41 am',
    'KLPOL_PRODUCT': 'kesl',
    'KLPOL_DN': 'Kaspersky Endpoint Security for Linux',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '1364599203829957'
  },
  {
    'KLPOL_PROFILES_NUM': 0,
    'KLPOL_VERSION': '12.2.0.0',
    'KLPOL_GSYN_ID': 111,
    'inheritedFromMaster': false,
    'KLPOL_ROAMING': false,
    'KLPOL_INHERITED': false,
    'KLPOL_FORCED': false,
    'KLPOL_GROUP_ID': 0,
    'KLPOL_ID': 91,
    'KLPOL_ACCEPT_PARENT': false,
    'product': '',
    'status': 1,
    'KLPOL_FORCE_DISTRIB2CHILDREN': false,
    'KLPOL_CREATED': '10/15/2025 2:04:41 am',
    'KLPOL_ACTIVE': true,
    'groupId': 0,
    'id': 91,
    'KLPOL_MODIFIED': '10/15/2025 2:04:45 am',
    'KLPOL_PRODUCT': 'KESMAC12',
    'KLPOL_DN': 'Kaspersky Endpoint Security for Mac',
    'roles': [],
    'KLPOL_GROUP_NAME': 'Managed devices',
    'key': '7973960151345927'
  }
]

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Policy table',
  component: Table,
  args: {
    columns: policiesColumns,
    dataSource: policiesDataSource,
    groupBy: 'product',
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true,
      showSearch: true,
      collapsibleSearch: true,
      sticky: 0,
      autoDropdown: true,
      left: getItemsLeft().filter(item => item.type !== 'divider')
    },
    resizingMode: 'scroll',
    rowMode: 'compact',
    rowSelection: {},
    stickyHeader: 40,
    storageKey: 'policy-table',
    useFiltersSidebar: true
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns', 'dataSource']
    }
  },
  decorators: [(Story, context) => (
    <Wrapper>
      <Story {...context}/>
      <div style={{ height: 1000 }}/>
    </Wrapper>
  )]
}
export default meta

export const Basic: Story = {}

export const WithLateDataSource: Story = {
  render: ({ dataSource: dataSourceProps, columns, ...rest }) => {
    const [hasDataSource, setHasDataSource] = useState(false)
    const [hasColumns, setHasColumns] = useState(false)

    return (
      <StoryColumn>
        <Toggle
          checked={hasDataSource}
          onChange={setHasDataSource}
        >Data source</Toggle>
        <Toggle
          checked={hasColumns}
          onChange={setHasColumns}
        >columns</Toggle>
        <Table
          {...rest}
          dataSource={hasDataSource ? dataSourceProps : []}
          columns={hasColumns ? columns : []}
        />
      </StoryColumn>
    )
  }
}


