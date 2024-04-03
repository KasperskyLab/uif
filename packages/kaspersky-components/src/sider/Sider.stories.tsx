import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from './__meta__/meta.json'
import { Layout as AntLayout, SiderProps } from 'antd'
import { Sider, Hamburger } from './Sider'
import { Menu } from './SiderMenu'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { colors } from '@design-system/theme/themes/dark/colors'
import { Grid, UserGroup, Desktop, Store, Search, Server, AppUpdate } from '@kaspersky/icons/16'

const meta: Meta<SiderProps> = {
  title: 'Organisms/Sider',
  component: Sider,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

const ServicesMenu = styled.div`
  display: flex;
  margin: 0 16px;
  color: ${colors['text-icons-elements'].primary};
  font-size: 14px;

  .ant-layout-sider-collapsed & {
    flex-direction: column;
  }

  .item {
    cursor: pointer;
    margin: 8px;
  }
`

const RootLayout = styled(AntLayout)`
  height: 100vh;
  background: transparent;
`

const menuItems: Record<string, unknown>[] = [
  {
    state: 'monitoring',
    weight: 100,
    key: 'navigation.main.monitoring',
    iconClass: 'monitoring',
    itemClass: 'js-tutorial-welcome-step-14-selector',
    icon: Grid,
    klId: 'navigation.main.monitoring',
    isRoot: true,
    items: [{
      state: 'dashboard',
      weight: 100,
      key: 'navigation.main.dashboard',
      klId: 'navigation.monitoring.dashboard'
    },
    {
      state: 'reports',
      weight: 200,
      key: 'navigation.main.reports',
      klId: 'navigation.monitoring.reports'
    },
    {
      state: 'events',
      weight: 300,
      key: 'navigation.main.events',
      klId: 'navigation.selections.events'
    }
    ]
  },
  {
    state: 'management',
    weight: 200,
    key: 'navigation.main.management',
    iconClass: 'assets',
    itemClass: 'js-tutorial-welcome-step-8-selector',
    icon: Desktop,
    klId: 'navigation.main.management',
    isRoot: true,
    items: [{
      state: 'policies',
      weight: 100,
      key: 'navigation.main.policies',
      itemClass: 'js-tutorial-welcome-step-11-selector',
      klId: 'navigation.management.policies',
      groupsTree: true
    },
    {
      state: 'tasks',
      weight: 200,
      key: 'navigation.main.tasks',
      itemClass: 'js-tutorial-welcome-step-12-selector',
      klId: 'navigation.management.tasks',
      groupsTree: true
    },
    {
      state: 'hosts',
      weight: 300,
      key: 'navigation.main.hosts',
      itemClass: null,
      klId: 'navigation.management.hosts',
      groupsTree: true
    },
    {
      state: 'distributionPoints',
      weight: 400,
      key: 'navigation.main.distributionPoints',
      itemClass: '',
      klId: 'navigation.management.distributionPoints',
      groupsTree: true
    },
    {
      state: 'device-relocation-rules-management',
      weight: 500,
      key: 'relocationRules.displayName',
      itemClass: '',
      klId: 'relocationRules.displayName',
      groupsTree: true
    },
    {
      state: 'device-selections',
      weight: 600,
      key: 'navigation.main.deviceSelections',
      itemClass: null,
      klId: 'navigation.selections.deviceSelections',
      groupsTree: true
    },
    {
      state: 'all-tags',
      weight: 700,
      key: 'navigation.main.tags',
      itemClass: null,
      klId: 'navigation.operations.tags',
      items: [{
        state: 'hosts-tags',
        weight: 100,
        key: 'navigation.main.hostsTags',
        klId: 'navigation.operations.tags.hostsTags'
      },
      {
        state: 'autotagging-rules',
        weight: 200,
        key: 'navigation.main.autotaggingRules',
        klId: 'navigation.operations.tags.autotaggingRules'
      }
      ]
    },
    {
      state: 'administration-groups',
      weight: 800,
      key: 'navigation.main.groupsHierarchy',
      itemClass: null,
      klId: 'navigation.management.administration-groups'
    }
    ]
  },
  {
    state: 'applicationsAndServices',
    weight: 300,
    key: 'navigation.main.applicationsAndServices',
    iconClass: 'applicationsAndServices',
    itemClass: '',
    icon: AppUpdate,
    klId: 'navigation.main.applicationsAndServices',
    items: [],
    isRoot: true
  },
  {
    state: 'users-and-roles',
    weight: 400,
    key: 'navigation.main.usersAndRoles',
    iconClass: 'usersRoles',
    icon: UserGroup,
    itemClass: 'js-tutorial-welcome-step-13-selector',
    klId: 'navigation.main.usersAndRoles',
    isRoot: true,
    items: [{
      state: 'users',
      weight: 100,
      key: 'navigation.main.users-and-groups',
      itemClass: null,
      klId: 'navigation.users-and-roles.users'
    },
    {
      state: 'roles',
      weight: 200,
      key: 'navigation.main.roles',
      itemClass: null,
      klId: 'navigation.users-and-roles.roles'
    }
    ]
  },
  {
    state: 'operations',
    weight: 500,
    key: 'navigation.main.operations',
    iconClass: 'operations',
    itemClass: 'js-tutorial-welcome-step-15-selector',
    icon: Server,
    klId: 'navigation.main.operations',
    isRoot: true,
    items: [{
      state: 'licensing',
      weight: 100,
      key: 'navigation.main.licensing',
      itemClass: null,
      klId: 'navigation.operations.licensing',
      items: [{
        state: 'LicensingKl',
        weight: 100,
        key: 'navigation.main.licensingKl',
        klId: 'navigation.operations.licensing.kl'
      }]
    },
    {
      state: 'applications',
      weight: 200,
      key: 'navigation.main.applications',
      itemClass: null,
      klId: 'navigation.operations.applications',
      items: [{
        state: 'applications-categories',
        weight: 100,
        key: 'navigation.main.applicationsCategories',
        klId: 'navigation.operations.applications.applicationsCategories'
      },
      {
        state: 'ApplicationsRegistry',
        weight: 200,
        key: 'navigation.main.applicationsRegistry',
        klId: 'navigation.operations.applications.applicationsRegistry'
      },
      {
        state: 'ApplicationsTags',
        weight: 300,
        key: 'navigation.main.applicationsTags',
        klId: 'navigation.operations.applications.applicationsTags'
      },
      {
        state: 'exec-files',
        weight: 400,
        key: 'navigation.main.execFiles',
        klId: 'navigation.operations.applications.executables'
      },
      {
        state: 'MonitoredApplications',
        weight: 500,
        key: 'navigation.main.monitoredApplications',
        klId: 'navigation.operations.applications.monitoredApplications'
      }
      ]
    },
    {
      state: 'stores',
      weight: 300,
      key: 'navigation.main.storages',
      itemClass: null,
      klId: 'navigation.operations.storages',
      items: [{
        state: 'backup',
        weight: 100,
        key: 'navigation.main.backup',
        klId: 'navigation.operations.storages.backup'
      },
      {
        state: 'quarantine',
        weight: 200,
        key: 'navigation.main.quarantine',
        klId: 'navigation.operations.storages.quarantine'
      },
      {
        state: 'unprocessed-files',
        weight: 300,
        key: 'navigation.main.unprocessedFiles',
        klId: 'navigation.operations.storages.unprocessed'
      },
      {
        state: 'distributives-in-stores',
        weight: 400,
        key: 'navigation.main.distributives',
        klId: 'navigation.network.deploymentAndAssignment.distributives'
      },
      {
        state: 'hardware',
        weight: 500,
        key: 'navigation.main.hardware',
        klId: 'navigation.operations.storages.hardware'
      },
      {
        state: 'deleted-objects',
        weight: 600,
        key: 'navigation.main.deletedObjects',
        klId: 'navigation.operations.storages.deleted-objects'
      },
      {
        state: 'adaptive-security',
        weight: 700,
        key: 'navigation.main.adaptiveSecurity',
        klId: 'navigation.operations.storages.adaptive-security'
      }
      ]
    },
    {
      state: 'kl-applications',
      weight: 400,
      key: 'navigation.main.klApplications',
      itemClass: null,
      klId: 'navigation.operations.applications',
      items: [
        {
          state: 'seamless-updates',
          weight: 200,
          key: 'navigation.main.seamlessUpdates',
          klId: 'navigation.operations.vapm.seamlessUpdates'
        },
        {
          key: 'navigation.main.klever',
          weight: 300,
          klId: 'navigation.operations.klever'
        }
      ]
    },
    {
      state: 'patch-managment',
      weight: 500,
      key: 'navigation.main.klPatchManagment',
      klId: 'navigation.operations.patch-managment',
      items: [{
        state: 'software-vulnerabilities',
        weight: 100,
        key: 'navigation.main.klSoftwareVulnerabilities',
        klId: 'navigation.operations.app-management.software-vulnerabilities'
      }, {
        state: 'software-updates',
        weight: 200,
        key: 'navigation.main.klSoftwareUpdates',
        klId: 'navigation.operations.patch-managment.updates'
      }]
    },
    {
      state: 'encryption',
      weight: 600,
      key: 'navigation.main.dataEncryption',
      klId: 'navigation.operations.encryption',
      items: [
        {
          state: 'encrypted-devices',
          weight: 100,
          key: 'navigation.main.encryptedDevices',
          klId: 'navigation.operations.encryption.encrypted-devices'
        },
        {
          state: 'encryption-events',
          weight: 200,
          key: 'navigation.main.encryptionEvents',
          klId: 'navigation.operations.encryption.encryption-events'
        }
      ]
    },
    {
      state: 'migration',
      weight: 700,
      key: 'navigation.main.migration',
      klId: 'navigation.operations.migration',
      itemClass: 'js-tutorial-welcome-step-migration-selector'
    }]
  },
  {
    state: 'network',
    weight: 600,
    key: 'navigation.main.network',
    iconClass: 'deploymentAssignment',
    itemClass: 'js-tutorial-welcome-step-4-selector',
    icon: Search,
    klId: 'navigation.main.network',
    isRoot: true,
    items: [{
      state: 'unassigned-devices',
      weight: 100,
      key: 'navigation.main.unassignedDevices',
      itemClass: 'js-tutorial-welcome-step-6-selector',
      klId: 'navigation.network.unassignedDevices'
    },
    {
      state: 'scanning-tasks',
      weight: 200,
      key: 'navigation.main.scanningTasks',
      itemClass: 'js-tutorial-welcome-step-5-selector',
      klId: 'navigation.network.scanningTasks',
      items: [
        {
          state: 'ip-poll',
          weight: 100,
          key: 'navigation.main.ipPoll',
          klId: 'navigation.network.scanningTasks.ipPoll'
        },
        {
          state: 'windows-domains',
          weight: 200,
          key: 'navigation.main.windowsDomains',
          klId: 'navigation.network.scanningTasks.winDomains'
        },
        {
          state: 'active-directory',
          weight: 300,
          key: 'navigation.main.domainControllers',
          klId: 'navigation.network.scanningTasks.domainControllers'
        },
        {
          state: 'cloud',
          weight: 400,
          key: 'navigation.main.cloud',
          klId: 'navigation.network.scanningTasks.cloud'
        }
      ]
    },
    {
      state: 'deployment-assignment',
      weight: 300,
      key: 'navigation.main.deploymentAndAssignment',
      iconClass: 'deploymentAssignment',
      itemClass: 'js-tutorial-welcome-step-7-selector',
      klId: 'navigation.network.deploymentAndAssignment',
      items: [{
        state: 'device-relocation-rules',
        weight: 100,
        key: 'relocationRules.displayName',
        klId: 'navigation.network.deploymentAndAssignment.relocationRules'
      },
      {
        state: 'deployment-wizard',
        weight: 200,
        key: 'navigation.main.deploymentWizard',
        klId: 'navigation.network.deploymentAndAssignment.deploymentWizard'
      },
      {
        state: 'quick-start-wizard',
        weight: 300,
        key: 'navigation.main.quickStartWizard',
        klId: 'navigation.network.deploymentAndAssignment.quickStartWizard'
      },
      {
        state: 'cloud-protection-wizard',
        weight: 400,
        key: 'navigation.main.cloudProtectionWizard',
        klId: 'navigation.network.deploymentAndAssignment.cloudProtectionWizard'
      },
      {
        state: 'distributives',
        weight: 500,
        key: 'navigation.main.distributives',
        klId: 'navigation.network.deploymentAndAssignment.distributives'
      }
      ]
    },
    {
      state: 'device-selections',
      weight: 400,
      key: 'navigation.main.deviceSelections',
      itemClass: null,
      klId: 'navigation.network.deviceSelections'
    }
    ]
  },
  {
    iconClass: 'marketplace',
    icon: Store,
    state: 'marketplace',
    weight: 700,
    key: 'navigation.main.marketplace',
    klId: 'navigation.monitoring.marketplace',
    isRoot: true
  }
]

export const SiderWithMenu: StoryObj<SiderProps> = {
  render: (args: SiderProps) => {
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    return (
      <RootLayout>
        <Sider {...args} collapsed={menuCollapsed} >
          <ServicesMenu>
            <Hamburger className='item left' role='button' name='hamburger' onClick={ () => { setMenuCollapsed(!menuCollapsed) } } />
          </ServicesMenu>
          <Menu menuItems={menuItems} collapsed={menuCollapsed} />
        </Sider>
      </RootLayout>
    )
  },
  args: {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true
  }
}
