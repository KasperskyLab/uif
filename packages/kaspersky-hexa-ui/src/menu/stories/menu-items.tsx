import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { ItemDivider, NavItemData } from '@src/menu/types'
import { mockedItemsWithoutContent } from '@src/submenu/stories/mocks'
import React from 'react'

import { AppUpdate, EngineeringStation, Placeholder, Search, Server, SettingsGear, Shield, StorageServer, Store, UserAccount, UserGroup } from '@kaspersky/hexa-ui-icons/16'

import { clickHandler } from './CustomItem'

export const beforeItems: NavItemData[] = [
  {
    key: 'Administration server',
    state: 'monitoring',
    weight: 100,
    icon: StorageServer,
    klId: 'navigation.main.server',
    isRoot: true,
    itemDivider: ItemDivider.After,
    onClick: () => clickHandler('Administration server')
  }
]

export const navItems: Record<string, unknown>[] = [
  {
    state: 'monitoring',
    weight: 100,
    key: 'Monitoring & reporting',
    iconClass: 'monitoring',
    icon: EngineeringStation,
    klId: 'navigation.main.monitoring',
    isRoot: true,
    elementAfter: <Badge mode="critical" text="2" />,
    items: [{
      state: 'dashboard',
      weight: 100,
      isNew: true,
      key: 'Dashboard',
      klId: 'navigation.monitoring.dashboard',
      onClick: () => clickHandler('Dashboard')
    },
    {
      state: 'reports',
      weight: 200,
      key: 'Reports',
      klId: 'navigation.monitoring.reports',
      onClick: () => clickHandler('Reports'),
      itemDivider: ItemDivider.Before
    },
    {
      state: 'events',
      weight: 300,
      key: 'Event selections',
      klId: 'navigation.selections.events',
      onClick: () => clickHandler('Event selections')
    },
    {
      state: 'notifications',
      weight: 400,
      key: 'Notifications',
      klId: 'navigation.selections.notifications',
      onClick: () => clickHandler('Notifications')
    },
    {
      state: 'announcements',
      weight: 500,
      key: 'Kaspersky announcements im long long label',
      klId: 'navigation.selections.announcements',
      onClick: () => clickHandler('Kaspersky announcements')
    }]
  },
  {
    state: 'management',
    weight: 200,
    key: 'Assets (Devices)',
    iconClass: 'assets',
    icon: Shield,
    klId: 'navigation.main.management',
    isRoot: true,
    itemDivider: ItemDivider.After,
    items: [{
      state: 'policies',
      weight: 100,
      key: 'Policies & profiles',
      klId: 'navigation.management.policies',
      groupsTree: true,
      onClick: () => clickHandler('Policies & profiles')
    },
    {
      state: 'tasks',
      weight: 200,
      key: 'Tasks',
      klId: 'navigation.management.tasks',
      groupsTree: true,
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'hosts',
      weight: 300,
      key: 'Managed devices',
      itemClass: null,
      klId: 'navigation.management.hosts',
      groupsTree: true,
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'distributionPoints',
      weight: 400,
      key: 'navigation.main.distributionPoints',
      itemClass: '',
      klId: 'navigation.management.distributionPoints',
      groupsTree: true,
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'device-relocation-rules-management',
      weight: 500,
      key: 'Moving rules',
      klId: 'relocationRules.displayName',
      groupsTree: true,
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'device-selections',
      weight: 600,
      key: 'Device selections',
      itemClass: null,
      klId: 'navigation.selections.deviceSelections',
      groupsTree: true,
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'all-tags',
      weight: 700,
      key: 'Tags',
      itemClass: null,
      klId: 'navigation.operations.tags',
      items: [{
        state: 'hosts-tags',
        weight: 100,
        key: 'Device tags',
        klId: 'navigation.operations.tags.hostsTags',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'autotagging-rules',
        weight: 200,
        key: 'Auto-tagging rules',
        klId: 'navigation.operations.tags.autotaggingRules',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'administration-groups',
      weight: 800,
      key: 'Hierarchy of groups',
      itemClass: null,
      klId: 'navigation.management.administration-groups',
      onClick: () => clickHandler('Menu item click')
    }
    ]
  },
  {
    state: 'applicationsAndServices',
    weight: 300,
    key: 'Applications and Services',
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
    key: 'Users & roles',
    iconClass: 'usersRoles',
    icon: UserGroup,
    itemClass: 'js-tutorial-welcome-step-13-selector',
    klId: 'navigation.main.usersAndRoles',
    isRoot: true,
    isNew: true,
    items: [{
      state: 'users',
      weight: 100,
      key: 'Users & groups',
      itemClass: null,
      klId: 'navigation.users-and-roles.users',
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'roles',
      weight: 200,
      key: 'Roles',
      itemClass: null,
      klId: 'navigation.users-and-roles.roles',
      onClick: () => clickHandler('Menu item click')
    }]
  },
  {
    state: 'operations',
    weight: 500,
    key: 'Operations',
    iconClass: 'operations',
    itemClass: 'js-tutorial-welcome-step-15-selector',
    icon: Server,
    klId: 'navigation.main.operations',
    isRoot: true,
    elementAfter: <Indicator mode="critical" />,
    items: [{
      state: 'licensing',
      weight: 100,
      key: 'Kaspersky licenses',
      itemClass: null,
      klId: 'navigation.operations.licensing',
      items: [{
        state: 'LicensingKl',
        weight: 100,
        key: 'navigation.main.licensingKl',
        klId: 'navigation.operations.licensing.kl',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'applications',
      weight: 200,
      key: 'Third-party applications',
      itemClass: null,
      klId: 'navigation.operations.applications',
      items: [{
        state: 'applications-categories',
        weight: 100,
        key: 'Application categories',
        klId: 'navigation.operations.applications.applicationsCategories',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'ApplicationsRegistry',
        weight: 200,
        key: 'Applications registry',
        klId: 'navigation.operations.applications.applicationsRegistry',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'ApplicationsTags',
        weight: 300,
        key: 'Application tags',
        klId: 'navigation.operations.applications.applicationsTags',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'exec-files',
        weight: 400,
        key: 'Executable files',
        klId: 'navigation.operations.applications.executables',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'MonitoredApplications',
        weight: 500,
        key: 'Monitored applications',
        klId: 'navigation.operations.applications.monitoredApplications',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'stores',
      weight: 300,
      key: 'Repositories',
      itemClass: null,
      klId: 'navigation.operations.storages',
      items: [{
        state: 'backup',
        weight: 100,
        key: 'Backup',
        klId: 'navigation.operations.storages.backup',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'quarantine',
        weight: 200,
        key: 'Quarantine',
        klId: 'navigation.operations.storages.quarantine',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'unprocessed-files',
        weight: 300,
        key: 'Active threats',
        klId: 'navigation.operations.storages.unprocessed',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'distributives-in-stores',
        weight: 400,
        key: 'Installation packages',
        klId: 'navigation.network.deploymentAndAssignment.distributives',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'hardware',
        weight: 500,
        key: 'Hardware',
        klId: 'navigation.operations.storages.hardware',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'deleted-objects',
        weight: 600,
        key: 'Deleted objects',
        klId: 'navigation.operations.storages.deleted-objects',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'adaptive-security',
        weight: 700,
        key: 'Triggering of rules in smart training state',
        klId: 'navigation.operations.storages.adaptive-security',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'kl-applications',
      weight: 400,
      key: 'Kaspersky applications',
      itemClass: null,
      klId: 'navigation.operations.applications',
      items: [
        {
          state: 'seamless-updates',
          weight: 200,
          key: 'Seamless updates',
          klId: 'navigation.operations.vapm.seamlessUpdates',
          onClick: () => clickHandler('Menu item click')
        },
        {
          key: 'Current application versions',
          weight: 300,
          klId: 'navigation.operations.klever',
          onClick: () => clickHandler('Menu item click')
        }]
    },
    {
      state: 'patch-managment',
      weight: 500,
      key: 'Patch management',
      klId: 'navigation.operations.patch-managment',
      items: [{
        state: 'software-vulnerabilities',
        weight: 100,
        key: 'Software vulnerabilities',
        klId: 'navigation.operations.app-management.software-vulnerabilities',
        onClick: () => clickHandler('Menu item click')
      }, {
        state: 'software-updates',
        weight: 200,
        key: 'Software updates',
        klId: 'navigation.operations.patch-managment.updates',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'encryption',
      weight: 600,
      key: 'Data encryption and protection',
      klId: 'navigation.operations.encryption',
      items: [
        {
          state: 'encrypted-devices',
          weight: 100,
          key: 'Encrypted drives',
          klId: 'navigation.operations.encryption.encrypted-devices',
          onClick: () => clickHandler('Menu item click')
        },
        {
          state: 'encryption-events',
          weight: 200,
          key: 'Encryption events',
          klId: 'navigation.operations.encryption.encryption-events',
          onClick: () => clickHandler('Menu item click')
        }
      ]
    },
    {
      state: 'migration',
      weight: 700,
      key: 'Migration',
      klId: 'navigation.operations.migration',
      itemClass: 'js-tutorial-welcome-step-migration-selector',
      onClick: () => clickHandler('Menu item click')
    }]
  },
  {
    key: 'Endpoint security',
    isCaption: true,
    isRoot: true
  },
  {
    state: 'network',
    weight: 600,
    key: 'Discovery & deployment',
    iconClass: 'deploymentAssignment',
    itemClass: 'js-tutorial-welcome-step-4-selector',
    icon: Search,
    klId: 'navigation.main.network',
    isRoot: true,
    elementAfter: <Badge mode="in-progress" text="10" />,
    items: [{
      state: 'unassigned-devices',
      weight: 100,
      key: 'Unassigned devices',
      itemClass: 'js-tutorial-welcome-step-6-selector',
      klId: 'navigation.network.unassignedDevices',
      onClick: () => clickHandler('Menu item click')
    },
    {
      state: 'scanning-tasks',
      weight: 200,
      key: 'Discovery',
      itemClass: 'js-tutorial-welcome-step-5-selector',
      klId: 'navigation.network.scanningTasks',
      items: [
        {
          state: 'ip-poll',
          weight: 100,
          key: 'IP ranges',
          klId: 'navigation.network.scanningTasks.ipPoll',
          onClick: () => clickHandler('Menu item click')
        },
        {
          state: 'windows-domains',
          weight: 200,
          key: 'Windows domains',
          klId: 'navigation.network.scanningTasks.winDomains',
          onClick: () => clickHandler('Menu item click')
        },
        {
          state: 'active-directory',
          weight: 300,
          key: 'Domain controllers',
          klId: 'navigation.network.scanningTasks.domainControllers',
          onClick: () => clickHandler('Menu item click')
        },
        {
          state: 'cloud',
          weight: 400,
          key: 'Cloud',
          klId: 'navigation.network.scanningTasks.cloud',
          onClick: () => clickHandler('Menu item click')
        }
      ]
    },
    {
      state: 'deployment-assignment',
      weight: 300,
      key: 'Deployment & assignment',
      iconClass: 'deploymentAssignment',
      itemClass: 'js-tutorial-welcome-step-7-selector',
      klId: 'navigation.network.deploymentAndAssignment',
      items: [{
        state: 'device-relocation-rules',
        weight: 100,
        key: 'Moving rules',
        klId: 'navigation.network.deploymentAndAssignment.relocationRules',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'deployment-wizard',
        weight: 200,
        key: 'Protection deployment wizard',
        klId: 'navigation.network.deploymentAndAssignment.deploymentWizard',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'quick-start-wizard',
        weight: 300,
        key: 'Quick start wizard',
        klId: 'navigation.network.deploymentAndAssignment.quickStartWizard',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'cloud-protection-wizard',
        weight: 400,
        key: 'Configure cloud environment',
        klId: 'navigation.network.deploymentAndAssignment.cloudProtectionWizard',
        onClick: () => clickHandler('Menu item click')
      },
      {
        state: 'distributives',
        weight: 500,
        key: 'Installation packages',
        klId: 'navigation.network.deploymentAndAssignment.distributives',
        onClick: () => clickHandler('Menu item click')
      }]
    },
    {
      state: 'device-selections',
      weight: 400,
      key: 'Device selections',
      itemClass: null,
      klId: 'navigation.network.deviceSelections',
      onClick: () => clickHandler('Menu item click')
    }]
  },
  {
    iconClass: 'marketplace',
    icon: Store,
    state: 'marketplace',
    weight: 700,
    key: 'Marketplace',
    klId: 'navigation.monitoring.marketplace',
    isRoot: true,
    disabled: true,
    onClick: () => clickHandler('Menu item click')
  },
  {
    state: 'submenu',
    weight: 800,
    key: 'Submenu',
    iconClass: 'deploymentAssignment',
    icon: Placeholder,
    klId: 'navigation.main.submenu',
    isRoot: true,
    submenuItems: mockedItemsWithoutContent
  },
  {
    state: 'longTitle',
    weight: 800,
    icon: Placeholder,
    key: 'Long title'.repeat(20),
    isRoot: true,
    submenuItems: mockedItemsWithoutContent,
    lineClamp: 2
  }
]

export const navUserItems: NavItemData[] = [
  {
    iconClass: 'settings',
    icon: SettingsGear,
    state: 'settings',
    weight: 100,
    key: 'Settings',
    klId: 'navigation.settings',
    isRoot: true,
    items: [{
      key: 'Account',
      isCaption: true
    },
    {
      key: 'Profile',
      onClick: () => clickHandler('Profile')
    },
    {
      key: 'Logout',
      onClick: () => clickHandler('Logout')
    },
    {
      key: 'Interface language',
      isCaption: true,
      itemDivider: ItemDivider.Before,
      onClick: () => clickHandler('Interface language')
    },
    {
      key: 'English',
      onClick: () => clickHandler('English')
    },
    {
      key: 'Русский',
      onClick: () => clickHandler('Русский')
    },
    {
      key: 'Additional information',
      isCaption: true,
      itemDivider: ItemDivider.Before
    },
    {
      klId: 'ca-certificate',
      key: 'CA certificate',
      onClick: () => clickHandler('CA certificate')
    }]
  },
  {
    mode: 'user',
    userProps: {
      role: 'Operator',
      name: 'WIN-BTDS5ATJUI2\\Administrator',
      status: 'unavailable'
    },
    iconClass: 'user',
    icon: UserAccount,
    state: 'user',
    weight: 100,
    key: 'WIN-BTDS5ATJUI2\\Administrator',
    klId: 'navigation.user',
    isRoot: true,
    onClick: () => clickHandler('User')
  }
]

export const favItems: Record<string, unknown>[] = [
  {
    state: 'cloud-protection-wizard',
    weight: 400,
    key: 'Configure cloud environment',
    klId: 'navigation.network.deploymentAndAssignment.cloudProtectionWizard',
    onClick: () => clickHandler('Configure cloud environment')
  }
]
