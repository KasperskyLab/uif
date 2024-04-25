import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from './__meta__/meta.json'
import { Layout as AntLayout, SiderProps } from 'antd'
import { Sider, Hamburger } from './Sider'
import { Menu, UserMenu } from './SiderMenu'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { colors } from '@design-system/theme/themes/dark/colors'
import { Grid, UserGroup, Desktop, Store, Search, Server, AppUpdate, UserAccount, Settings2, Help, Alarm as AlarmIcon } from '@kaspersky/icons/16'

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

  .left {
    margin-right: auto;
  }
`

const RootLayout = styled(AntLayout)`
  height: 100vh;
  background: transparent;
`

const AppLogo = () => {
  return (
    <StyledAppLogo href={'#'} className='logo-ksc'>
      <svg className="logo-svg" width="128" height="128" viewBox="0 0 128 128" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_0_4722)">
          <g clip-path="url(#clip1_0_4722)">
            <g clip-path="url(#clip2_0_4722)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M113.495 33.4495L67.4951 6.93934C65.3318 5.69261 62.6682 5.69261 60.5049 6.93934L14.5049 33.4495C12.3363 34.6993 11 37.0119 11 39.5149V88.4929C11 90.9959 12.3363 93.3085 14.5049 94.5583L60.5049 121.068C62.6682 122.315 65.3318 122.315 67.4951 121.068L113.495 94.5583C115.664 93.3085 117 90.9959 117 88.4929V39.5149C117 37.0119 115.664 34.6993 113.495 33.4495ZM70.4909 1.74043C66.4733 -0.574934 61.5267 -0.574935 57.5091 1.74043L11.5091 28.2506C7.48177 30.5716 5 34.8664 5 39.5149V88.4929C5 93.1414 7.48177 97.4362 11.5091 99.7572L57.5091 126.267C61.5267 128.583 66.4733 128.583 70.4909 126.267L116.491 99.7572C120.518 97.4362 123 93.1414 123 88.4929V39.5149C123 34.8664 120.518 30.5716 116.491 28.2506L70.4909 1.74043Z"
                    fill="#29CCB1"></path>
            </g>
            <path
              d="M45 56C43.8954 56 43 56.8954 43 58C43 59.1046 43.8954 60 45 60H47V79C47 79.5523 47.4477 80 48 80C48.5523 80 49 79.5523 49 79V60H51C52.1046 60 53 59.1046 53 58C53 56.8954 52.1046 56 51 56H45Z"
              fill="white"></path>
            <path
              d="M81 60V57C81 56.4477 80.5523 56 80 56C79.4477 56 79 56.4477 79 57V60H77C75.8954 60 75 60.8954 75 62C75 63.1046 75.8954 64 77 64H79V79C79 79.5523 79.4477 80 80 80C80.5523 80 81 79.5523 81 79V64H83C84.1046 64 85 63.1046 85 62C85 60.8954 84.1046 60 83 60H81Z"
              fill="white"></path>
            <path
              d="M65 57V72H67C68.1046 72 69 72.8954 69 74C69 75.1046 68.1046 76 67 76H65V79C65 79.5523 64.5523 80 64 80C63.4477 80 63 79.5523 63 79V76H61C59.8954 76 59 75.1046 59 74C59 72.8954 59.8954 72 61 72H63V57C63 56.4477 63.4477 56 64 56C64.5523 56 65 56.4477 65 57Z"
              fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M30 87C30 88.6569 31.3431 90 33 90H95C96.6569 90 98 88.6569 98 87V41C98 39.3431 96.6569 38 95 38H33C31.3431 38 30 39.3431 30 41V87ZM34 50H94V86H34V50Z"
                  fill="white"></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_4722">
            <rect width="128" height="128" fill="white"></rect>
          </clipPath>
          <clipPath id="clip1_0_4722">
            <rect width="128" height="128" fill="white"></rect>
          </clipPath>
          <clipPath id="clip2_0_4722">
            <rect width="128" height="128" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div className='logo-text'>
        <div className='logo-text-osmp'>Open Single</div>
        <div className='logo-text-osmp'>Management Platform</div>
      </div>
    </StyledAppLogo>
  )
}

const StyledAppLogo = styled.a`
    min-height: 64px;
    display: flex;
    margin: 10px 20px 20px 20px;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
    align-items: center;
    opacity: 1;
    position: relative;
    transition: opacity 0.1s 0.15s ease;

    .logo-text-strong {
      font-size: 14px;
      line-height: 1.1;
      font-weight: 600;
    }

    .logo-text-light {
      font-size: 10px;
      line-height: 1;
      font-weight: 600;
      margin-top: 0.2em;
    }

    .logo-text-osmp {
      font-size: 14px;
      line-height: 1.1;
      font-weight: 600;
      margin-top: 0.2em;
    }

    &:active,
    &:hover,
    &:focus {
      color: #fff;
      text-decoration: none;
    }

    .logo-svg {
      position: relative;
      top: 0;
      width: 64px;
      height: 64px;
      margin: 0 5px;
    }

    &.logo-ksc {
      .logo-path-primary {
        fill: var(--header-logo-ksc-primary-fill);
      }

      .logo-path-secondary {
        fill: var(--header-logo-ksc-secondary-fill);
      }
    }

    &.logo-ksc-cloud {

      .logo-path-border {
        fill: none;
        stroke: #00A88E;
      }

      .logo-path-icon {
        fill: var(--header-logo-ksc-cloud-icon-fill);
      }

      .logo-text-strong {
        font-size: 14px;
        line-height: 1;
        font-weight: 600;
        margin: 0.2em 0;
      }

      .logo-text-light {
        font-size: 10px;
        line-height: 1;
        font-weight: 600;
      }
    }

    .ant-layout-sider-collapsed & {
      opacity: 0;
      transition: opacity 0s 0s ease;
      width: 0;
      height: 0;
      overflow: hidden;
      position: absolute;
    }

    --header-logo-ksc-primary-fill: #1D1D1B;
    --header-logo-ksc-secondary-fill: #ffffff;
    --header-logo-ksc-cloud-icon-fill: #ffffff;
    --icon-kl_logo-fill-color: #00A88E;
  `

const menuItems: Record<string, unknown>[] = [
  {
    state: 'monitoring',
    weight: 100,
    key: 'Monitoring & reporting',
    iconClass: 'monitoring',
    icon: Grid,
    klId: 'navigation.main.monitoring',
    isRoot: true,
    items: [{
      state: 'dashboard',
      weight: 100,
      key: 'Dashboard',
      klId: 'navigation.monitoring.dashboard',
      onClick: () => console.log('Dashboard')
    },
    {
      state: 'reports',
      weight: 200,
      key: 'Reports',
      klId: 'navigation.monitoring.reports'
    },
    {
      state: 'events',
      weight: 300,
      key: 'Event selections',
      klId: 'navigation.selections.events'
    },
    {
      state: 'notifications',
      weight: 400,
      key: 'Notifications',
      klId: 'navigation.selections.notifications'
    },
    {
      state: 'announcements',
      weight: 500,
      key: 'Kaspersky announcements',
      klId: 'navigation.selections.announcements'
    }
    ]
  },
  {
    state: 'management',
    weight: 200,
    key: 'Assets (Devices)',
    iconClass: 'assets',
    icon: Desktop,
    klId: 'navigation.main.management',
    isRoot: true,
    items: [{
      state: 'policies',
      weight: 100,
      key: 'Policies & profiles',
      klId: 'navigation.management.policies',
      groupsTree: true
    },
    {
      state: 'tasks',
      weight: 200,
      key: 'Tasks',
      klId: 'navigation.management.tasks',
      groupsTree: true
    },
    {
      state: 'hosts',
      weight: 300,
      key: 'Managed devices',
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
      key: 'Moving rules',
      klId: 'relocationRules.displayName',
      groupsTree: true
    },
    {
      state: 'device-selections',
      weight: 600,
      key: 'Device selections',
      itemClass: null,
      klId: 'navigation.selections.deviceSelections',
      groupsTree: true
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
        klId: 'navigation.operations.tags.hostsTags'
      },
      {
        state: 'autotagging-rules',
        weight: 200,
        key: 'Auto-tagging rules',
        klId: 'navigation.operations.tags.autotaggingRules'
      }
      ]
    },
    {
      state: 'administration-groups',
      weight: 800,
      key: 'Hierarchy of groups',
      itemClass: null,
      klId: 'navigation.management.administration-groups'
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
    items: [{
      state: 'users',
      weight: 100,
      key: 'Users & groups',
      itemClass: null,
      klId: 'navigation.users-and-roles.users'
    },
    {
      state: 'roles',
      weight: 200,
      key: 'Roles',
      itemClass: null,
      klId: 'navigation.users-and-roles.roles'
    }
    ]
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
        klId: 'navigation.operations.licensing.kl'
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
        klId: 'navigation.operations.applications.applicationsCategories'
      },
      {
        state: 'ApplicationsRegistry',
        weight: 200,
        key: 'Applications registry',
        klId: 'navigation.operations.applications.applicationsRegistry'
      },
      {
        state: 'ApplicationsTags',
        weight: 300,
        key: 'Application tags',
        klId: 'navigation.operations.applications.applicationsTags'
      },
      {
        state: 'exec-files',
        weight: 400,
        key: 'Executable files',
        klId: 'navigation.operations.applications.executables'
      },
      {
        state: 'MonitoredApplications',
        weight: 500,
        key: 'Monitored applications',
        klId: 'navigation.operations.applications.monitoredApplications'
      }
      ]
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
        klId: 'navigation.operations.storages.backup'
      },
      {
        state: 'quarantine',
        weight: 200,
        key: 'Quarantine',
        klId: 'navigation.operations.storages.quarantine'
      },
      {
        state: 'unprocessed-files',
        weight: 300,
        key: 'Active threats',
        klId: 'navigation.operations.storages.unprocessed'
      },
      {
        state: 'distributives-in-stores',
        weight: 400,
        key: 'Installation packages',
        klId: 'navigation.network.deploymentAndAssignment.distributives'
      },
      {
        state: 'hardware',
        weight: 500,
        key: 'Hardware',
        klId: 'navigation.operations.storages.hardware'
      },
      {
        state: 'deleted-objects',
        weight: 600,
        key: 'Deleted objects',
        klId: 'navigation.operations.storages.deleted-objects'
      },
      {
        state: 'adaptive-security',
        weight: 700,
        key: 'Triggering of rules in smart training state',
        klId: 'navigation.operations.storages.adaptive-security'
      }
      ]
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
          klId: 'navigation.operations.vapm.seamlessUpdates'
        },
        {
          key: 'Current application versions',
          weight: 300,
          klId: 'navigation.operations.klever'
        }
      ]
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
        klId: 'navigation.operations.app-management.software-vulnerabilities'
      }, {
        state: 'software-updates',
        weight: 200,
        key: 'Software updates',
        klId: 'navigation.operations.patch-managment.updates'
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
          klId: 'navigation.operations.encryption.encrypted-devices'
        },
        {
          state: 'encryption-events',
          weight: 200,
          key: 'Encryption events',
          klId: 'navigation.operations.encryption.encryption-events'
        }
      ]
    },
    {
      state: 'migration',
      weight: 700,
      key: 'Migration',
      klId: 'navigation.operations.migration',
      itemClass: 'js-tutorial-welcome-step-migration-selector'
    }]
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
    items: [{
      state: 'unassigned-devices',
      weight: 100,
      key: 'Unassigned devices',
      itemClass: 'js-tutorial-welcome-step-6-selector',
      klId: 'navigation.network.unassignedDevices'
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
          klId: 'navigation.network.scanningTasks.ipPoll'
        },
        {
          state: 'windows-domains',
          weight: 200,
          key: 'Windows domains',
          klId: 'navigation.network.scanningTasks.winDomains'
        },
        {
          state: 'active-directory',
          weight: 300,
          key: 'Domain controllers',
          klId: 'navigation.network.scanningTasks.domainControllers'
        },
        {
          state: 'cloud',
          weight: 400,
          key: 'Cloud',
          klId: 'navigation.network.scanningTasks.cloud'
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
        klId: 'navigation.network.deploymentAndAssignment.relocationRules'
      },
      {
        state: 'deployment-wizard',
        weight: 200,
        key: 'Protection deployment wizard',
        klId: 'navigation.network.deploymentAndAssignment.deploymentWizard'
      },
      {
        state: 'quick-start-wizard',
        weight: 300,
        key: 'Quick start wizard',
        klId: 'navigation.network.deploymentAndAssignment.quickStartWizard'
      },
      {
        state: 'cloud-protection-wizard',
        weight: 400,
        key: 'Configure cloud environment',
        klId: 'navigation.network.deploymentAndAssignment.cloudProtectionWizard'
      },
      {
        state: 'distributives',
        weight: 500,
        key: 'Installation packages',
        klId: 'navigation.network.deploymentAndAssignment.distributives'
      }
      ]
    },
    {
      state: 'device-selections',
      weight: 400,
      key: 'Device selections',
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
    key: 'Marketplace',
    klId: 'navigation.monitoring.marketplace',
    isRoot: true
  }
]

const menuUserItems: Record<string, unknown>[] = [
  {
    iconClass: 'settings',
    icon: Settings2,
    state: 'settings',
    weight: 100,
    key: 'Settings',
    klId: 'navigation.settings',
    isRoot: true,
    items: [{
      key: 'Help',
      onClick: () => true
    },
    {
      klId: 'about-window',
      key: 'About',
      onClick: () => true
    },
    {
      key: 'Logout',
      onClick: () => true
    }]
  },
  {
    iconClass: 'user',
    icon: UserAccount,
    state: 'user',
    weight: 100,
    key: 'WIN-BTDS5ATJUI2\\Administrator',
    klId: 'navigation.user',
    isRoot: true
  }
]

function getNotificationsIcon (hasNotifications: boolean): React.ReactNode {
  let icon = null
  // @if BUILD_TARGET='local'
  icon = <NotificationButton
    className={`item js-tutorial-notifications header-notification${hasNotifications ? ' active' : ''}`}
    role='button'
    onClick={() => alert('Notifications')}
  >
    <AlarmIcon/>
  </NotificationButton>
  // @endif
  return icon
}

const NotificationButton = styled.span`
  position: relative;
  display: inline-block;
  height: 16px;

  &.active {
    &:before {
      content: '';
      display: block;
      position: absolute;
      right: -5px;
      top: -6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.criticalitystatuses.high};
    }
  }
`

export const SiderWithMenu: StoryObj<SiderProps> = {
  render: (args: SiderProps) => {
    const [menuMinimized, setMenuMinimized] = useState(false)
    return (
      <RootLayout>
        <Sider {...args} collapsed={menuMinimized} >
          <ServicesMenu>
            <Hamburger className='item left' role='button' name='hamburger' onClick={ () => { setMenuMinimized(!menuMinimized) } } />
            {getNotificationsIcon(true)}
            <Help className='item' role='button' onClick={ () => alert('open online help') } />
          </ServicesMenu>
          <AppLogo/>
          <Menu menuItems={menuItems} minimized={menuMinimized} />
          <UserMenu menuItems={menuUserItems} minimized={menuMinimized} subsPop={true} />
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
