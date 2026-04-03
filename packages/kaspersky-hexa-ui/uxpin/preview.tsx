import { type ButtonProps } from '@src/button/types'
import { type DropdownItemProps } from '@src/dropdown/types'
import { type NavItemData } from '@src/menu/types'
import { type QuickFilterProps } from '@src/quick-filter/types'
import { type SegmentedButtonOption } from '@src/segmented-button/types'
import { type SegmentedControlItemProps } from '@src/segmented-control/types'
import { type SubmenuItemProps } from '@src/submenu/types'
import {
  type TenantFilterTreeDataItem
} from '@src/tenantFilter/types'
import { type DataNode } from '@src/tree/types'
import {
  type UploaderProps,
  type UploadRequestOption
} from '@src/upload/types'
import {
  type DaysOfWeek,
  type InitialSchedule,
  type Legend
} from '@src/weekly-schedule/types'
import React from 'react'

import {
  ArrowDown1,
  BookmarkOutline,
  BookmarkSolid,
  Browser,
  Folder,
  Moon,
  Placeholder,
  Search as SearchIcon,
  SettingsGear,
  Shield,
  SignOut,
  UserAccount,
  Web
} from '@kaspersky/hexa-ui-icons/16'
import { type ITerminalAddon, type Terminal as XTerminal } from '@xterm/xterm'

export const noop = (): void => {}

export const previewLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel justo ac nibh luctus volutpat. Sed interdum, nisl at dapibus gravida, dui massa mattis sem, vitae viverra lectus arcu eget nibh.'

export const previewMarkdown = `# Preview title

This is a **Markdown** preview with a [link](https://example.com).

- First point
- Second point
- Third point`

export const previewCode = `const release = {
  version: '6.323.10',
  status: 'ready'
}

export default release`

export const previewUpdatedCode = `const release = {
  version: '6.323.11',
  status: 'published'
}

export default release`

export const previewBreadcrumbRoutes = [
  { name: 'Home', url: '#' },
  { name: 'Components', url: '#' },
  { name: 'Accordion' }
]

export const previewAnchorItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'details', label: 'Details' },
  { id: 'notes', label: 'Notes' }
]

export const previewHorizontalNavItems = [
  { key: 'overview', label: 'Overview', selected: true },
  { key: 'details', label: 'Details' },
  { key: 'activity', label: 'Activity' }
]

export const previewPageHeaderTags = [
  { label: 'Stable' },
  { label: 'Reviewed' }
]

export const previewRadioOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' }
]

export const previewSegmentedButtonItems: SegmentedButtonOption[] = [
  { value: 'overview', text: 'Overview' },
  { value: 'details', text: 'Details' },
  { value: 'activity', text: 'Activity' }
]

export const previewSegmentedControlTabsData: SegmentedControlItemProps[] = [
  { name: 'overview', text: 'Overview' },
  { name: 'details', text: 'Details' },
  { name: 'activity', text: 'Activity' }
]

export const previewSegmentedControlContentData = {
  overview: () => <div>{previewLongText}</div>,
  details: () => <div>Detailed preview content</div>,
  activity: () => <div>Latest activity preview</div>
}

export const previewQuickFilterFilters: QuickFilterProps['filters'] = [
  {
    component: 'segmented-button',
    label: 'Mode',
    items: [
      { text: 'Quick', value: 'quick' },
      { text: 'Full', value: 'full' }
    ],
    onChange: noop,
    value: ['quick']
  },
  {
    component: 'select',
    label: 'Status',
    options: [
      { label: 'Any', value: 'any' },
      { label: 'Active', value: 'active' },
      { label: 'Paused', value: 'paused' }
    ],
    value: 'any',
    onChange: noop,
    width: '180px'
  },
  {
    component: 'date-picker',
    label: 'Created'
  },
  {
    component: 'toggle',
    children: 'Only favorites'
  }
]

export const previewSubmenuItems: SubmenuItemProps[] = [
  {
    type: 'title',
    key: 'title',
    text: 'Quick actions'
  },
  {
    type: 'row',
    key: 'overview',
    text: 'Overview',
    content: 'Overview content'
  },
  {
    type: 'row',
    key: 'details',
    text: 'Details',
    description: 'Additional context',
    content: 'Detailed content'
  }
]

export const previewMenuBeforeItems: NavItemData[] = [
  {
    key: 'workspace',
    icon: Shield,
    isRoot: true,
    onClick: noop
  }
]

export const previewMenuNavItems: NavItemData[] = [
  {
    key: 'Dashboard',
    icon: Browser,
    isRoot: true,
    onClick: noop,
    items: [
      {
        key: 'Overview',
        onClick: noop
      },
      {
        key: 'Analytics',
        onClick: noop
      }
    ]
  },
  {
    key: 'Settings',
    icon: SettingsGear,
    isRoot: true,
    onClick: noop,
    items: [
      {
        key: 'General',
        onClick: noop
      },
      {
        key: 'Access',
        onClick: noop
      }
    ]
  }
]

export const previewMenuUserItems: NavItemData[] = [
  {
    state: 'user',
    key: 'Preview User',
    icon: UserAccount,
    isRoot: true,
    userProps: {
      name: 'Preview User',
      role: 'Administrator',
      status: 'available'
    },
    items: [
      {
        key: 'My profile',
        onClick: noop
      },
      {
        key: 'Log out',
        onClick: noop
      }
    ]
  }
]

export const previewTopNavigationAccountMenu: DropdownItemProps[] = [
  {
    children: 'Profile settings',
    componentsBefore: [<UserAccount key="profile-icon" />]
  },
  {
    type: 'submenu',
    title: 'Language',
    componentsBefore: [<Web key="language-icon" />],
    children: [
      { children: 'English' },
      { children: 'Русский' }
    ]
  },
  {
    children: 'Dark mode',
    componentsBefore: [<Moon key="mode-icon" />]
  },
  {
    type: 'divider',
    children: ''
  },
  {
    children: 'Sign out',
    componentsBefore: [<SignOut key="sign-out-icon" />]
  }
]

export const previewTreeData: DataNode[] = [
  {
    key: 'root',
    title: 'Workspace',
    children: [
      {
        key: 'devices',
        title: 'Devices',
        icon: <Folder />
      },
      {
        key: 'policies',
        title: 'Policies',
        icon: <Folder />,
        children: [
          {
            key: 'default-policy',
            title: 'Default policy'
          }
        ]
      }
    ]
  }
]

const previewTenantTree: TenantFilterTreeDataItem[] = [
  {
    key: 'north',
    title: 'North region',
    children: [
      {
        key: 'north-1',
        title: 'Branch 1'
      },
      {
        key: 'north-2',
        title: 'Branch 2'
      }
    ]
  },
  {
    key: 'south',
    title: 'South region',
    children: [
      {
        key: 'south-1',
        title: 'Branch 3'
      }
    ]
  }
]

const flattenTenantKeys = (items: TenantFilterTreeDataItem[]): string[] => items.flatMap((item) => [
  item.key,
  ...(item.children ? flattenTenantKeys(item.children) : [])
])

export const previewTenantFilterData = previewTenantTree
export const previewTenantFilterAllKeys = flattenTenantKeys(previewTenantTree)
export const previewTenantFilterSelectedKeys = ['north-1']

const createScheduleDay = (selected: number[]): number[] => Array.from({ length: 24 }, (_, index) => (
  selected.includes(index) ? 1 : 0
))

export const previewWeeklyScheduleState: InitialSchedule = {
  monday: createScheduleDay([9, 10, 11, 12, 13, 14, 15, 16]),
  tuesday: createScheduleDay([9, 10, 11, 12, 13, 14, 15, 16]),
  wednesday: createScheduleDay([9, 10, 11, 12, 13, 14, 15, 16]),
  thursday: createScheduleDay([9, 10, 11, 12, 13, 14, 15, 16]),
  friday: createScheduleDay([9, 10, 11, 12, 13, 14]),
  saturday: createScheduleDay([]),
  sunday: createScheduleDay([])
}

export const previewDaysOfWeek: DaysOfWeek = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
  sunday: 'Sun'
}

export const previewLegend: Legend = {
  selected: 'Scheduled',
  notSelected: 'Not scheduled'
}

export const previewToolbarLeft = [
  {
    key: 'search',
    type: 'button' as const,
    label: 'Search',
    iconBefore: <SearchIcon />,
    onClick: noop
  },
  {
    key: 'divider',
    type: 'divider' as const
  },
  {
    key: 'favorite',
    type: 'button' as const,
    label: 'Favorite',
    iconBefore: <BookmarkOutline />,
    onClick: noop
  }
]

export const previewToolbarRight = [
  {
    key: 'save',
    type: 'button' as const,
    label: 'Save',
    iconBefore: <BookmarkSolid />,
    onClick: noop
  }
]

export const previewStatusCardActions: ButtonProps[] = [
  {
    text: 'Resolve',
    mode: 'primary',
    onClick: noop
  },
  {
    text: 'Open details',
    mode: 'secondary',
    onClick: noop
  }
]

export const previewCodeCompareOptions = [
  {
    value: '1.0.0',
    label: '1.0.0'
  },
  {
    value: '1.1.0',
    label: '1.1.0'
  }
]

export const previewUploadCustomRequest: NonNullable<UploaderProps['customRequest']> = ({
  onProgress,
  onSuccess
}: UploadRequestOption) => {
  onProgress?.({ percent: 100 })
  setTimeout(() => onSuccess?.({}), 150)

  return {
    abort: noop
  }
}

class NoopTerminalAddon implements ITerminalAddon {
  activate (): void {}

  dispose (): void {}
}

class PreviewTerminalOutputAddon implements ITerminalAddon {
  activate (terminal: XTerminal): void {
    terminal.writeln('Preview terminal session')
    terminal.writeln('$ npm run build')
    terminal.writeln('Build completed successfully')
  }

  dispose (): void {}
}

export const createPreviewTerminalAddons = () => ({
  dataTransferAddon: new NoopTerminalAddon(),
  customAddons: [new PreviewTerminalOutputAddon()]
})

export const mergeFrameStyle = (style?: React.CSSProperties): React.CSSProperties => ({
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  ...style
})

type FrameFillProps = {
  children: React.ReactNode,
  style?: React.CSSProperties
}

export const FrameFill = ({
  children,
  style
}: FrameFillProps): JSX.Element => (
  <div style={mergeFrameStyle(style)}>
    {children}
  </div>
)

type PreviewSurfaceProps = {
  children: React.ReactNode,
  minHeight?: number,
  style?: React.CSSProperties
}

export const PreviewSurface = ({
  children,
  minHeight = 200,
  style
}: PreviewSurfaceProps): JSX.Element => (
  <div
    style={{
      position: 'relative',
      boxSizing: 'border-box',
      minHeight,
      padding: 24,
      borderRadius: 16,
      border: '1px dashed rgba(0, 0, 0, 0.15)',
      background: '#ffffff',
      ...mergeFrameStyle(style)
    }}
  >
    {children}
  </div>
)
