import { Button } from '@src/button'
import { ItemDivider, NavItemData } from '@src/menu'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { ToolbarItems } from '@src/toolbar'
import React from 'react'

import {
  Delete,
  Edit, 
  Placeholder,
  PlusM,
  SettingsGear,
  UserAccount
} from '@kaspersky/hexa-ui-icons/16'

export const navItems: Record<string, unknown>[] = [
  {
    key: 'Tree nav item 1',
    icon: Placeholder,
    isRoot: true,
    state: 'tree-nav-item-1',
    weight: 100
  },
  {
    key: 'Tree nav item 2',
    icon: Placeholder,
    isRoot: true,
    state: 'tree-nav-item-2',
    weight: 100
  }
]

export const navUserItems: NavItemData[] = [
  {
    key: 'Settings',
    icon: SettingsGear,
    isRoot: true,
    state: 'settings',
    weight: 100,
    
    items: [
      {
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
        key: 'CA certificate',
        onClick: () => clickHandler('CA certificate')
      }
    ]
  },
  {
    key: 'alexeysidorov@mail.ru',
    icon: UserAccount,
    isRoot: true,
    mode: 'user',
    onClick: () => clickHandler('User'),
    state: 'user',
    userProps: {
      role: 'Operator',
      name: 'alexeysidorov@mail.ru'
    },
    weight: 100
  }
]

export const tableColumns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name'
  },
  {
    key: 'local',
    dataIndex: 'local',
    title: 'Local prefix'
  },
  {
    key: 'remote',
    dataIndex: 'remote',
    title: 'Remote prefix'
  },
  {
    key: 'ipsec',
    dataIndex: 'ipsec',
    title: 'IPsec profile'
  },
  {
    key: 'mode',
    dataIndex: 'mode',
    title: 'Mode'
  },
  {
    key: 'ike',
    dataIndex: 'ike',
    title: 'IKE gateway'
  }
]

export const tableDataSource = [
  {
    key: 1,
    name: 'Default',
    local: '10.0.0.46',
    remote: '10.0.0.46',
    ipsec: 'Default',
    mode: 'Policy',
    ike: 'Default'
  },
  {
    key: 2,
    name: 'Profiles_1',
    local: '10.0.0.46',
    remote: '10.0.0.46',
    ipsec: 'Profiles_1',
    mode: 'Policy',
    ike: 'Main'
  }
]

export const tableToolbarButtons: ToolbarItems[] = [
  { 
    key: 'create',
    iconBefore: <PlusM />,
    label: 'Create',
    onClick: () => clickHandler('create'),
    type: 'button'
  },
  { 
    key: 'edit',
    disabled: true,
    iconBefore: <Edit />,
    label: 'Edit',
    onClick: () => clickHandler('edit'),
    type: 'button'
  },
  { 
    key: 'delete',
    children: (
      <Button 
        disabled
        iconBefore={<Delete />} 
        mode="tertiary"
        onClick={() => clickHandler('delete')}
      >Delete</Button>
    ),
    type: 'children'
  }
]

export const gridItems = [
  { 
    description: 'Сканирует все файлы, которые открываются, сохраняются или выполняются.',
    title: 'Защита файлов от угроз'
  },
  { 
    description: 'Отслеживает действия приложений в системе и регулирует их активность в зависимости от статуса.',
    title: 'Предотвращение вторжений на хосте'
  },
  { 
    description: 'Предотвращает подключение зараженных USB-устройств, имитирующих клавиатуру, к компьютеру.',
    title: 'Предотвращение атак USB'
  },
  { 
    description: 'Что делать, когда съемный диск подключен к компьютеру.',
    title: 'Сканирование съемных дисков'
  },
  { 
    description: 'Позволяет сканировать объекты, полученные от сторонних приложений через интерфейс сканирования антивирусного ПО (AMSI).',
    title: 'Защита AMSI'
  },
  { 
    description: 'Анализирует поведение приложений и обнаруживает сложные угрозы, такие как программное обеспечение-вымогатель.',
    title: 'Анализ поведения'
  }
]
