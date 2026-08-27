/* eslint-disable react-hooks/rules-of-hooks, max-lines */
// import { TextReducer } from '@helpers/components/TextReducer'
import { useDebounce } from '@helpers/hooks/useDebounce'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Loader } from '@src/loader'
import { Placeholder } from '@src/placeholder'
import { allPlugins, CustomFormats, Descendant, RichTextEditor } from '@src/rich-text-editor'
import { Search } from '@src/search'
import { Select } from '@src/select'
import { OptionType } from '@src/select/types'
import { Status } from '@src/status'
import {
  FilterOperation,
  FilterType,
  Table,
  TableColumn,
  TableRecord
} from '@src/table'
import { Tag } from '@src/tag'
import { tagModes } from '@src/tag/types'
import { Toggle } from '@src/toggle'
import { ToolbarItemKeyConst } from '@src/toolbar'
import { Text } from '@src/typography'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

import {
  EmojiHappy,
  Search1,
  StatusLevelCritical,
  StatusLevelHigh,
  StatusLevelLow,
  StatusLevelMedium
} from '@kaspersky/hexa-ui-icons/16'

import { Story, Wrapper } from './_commonConstants'

enum ImportanceLabel {
  CRITICAL = 4,
  HIGH = 3,
  MEDIUM = 2,
  LOW = 1,
  NOT_DEFINED = 0
}

enum TypeLabel {
  WORKSTATION = 1,
  SERVER = 2,
  SQL_SERVER = 3,
  PRIMARY_DOMAIN_CONTROLLER = 4,
  BACKUP_DOMAIN_CONTROLLER = 5,
  TIMESOURCE_SERVER = 6,
  APPLE_FILE_PROTOCOL_SERVER = 7,
  NOVELL_SERVER = 8,
  DOMAIN_MEMBER = 9,
  PRINT_QUEUE_SERVER = 10,
  DIAL_IN_SERVICE_SERVER = 11,
  UNIX = 12,
  WINDOWS_NT_FAMILY = 13,
  FREEBSD = 14,
  NETWARE_FILE_PRINT = 15,
  NON_DC_WINDOWS_SERVER = 16,
  BROWSER_SERVICE_CAPABLE = 17,
  BACKUP_BROWSER_SERVICE = 18,
  PRIMARY_BROWSER_SERVICE = 19,
  DOMAIN_PRIMARY_BROWSER = 20,
  OSF = 21,
  LINUX = 22,
  WINDOWS_9X_ME = 23,
  DFS_ROOT = 24,
  NT_CLUSTER = 25,
  IBM_DSS_OR_EQUIVALENT = 26
}

enum ArchitectureLabel {
  X_86 = 3,
  X_64 = 2,
  ARM_64 = 1,
  UNKNOWN = 0
}

enum VirtualMachineTypeLabel {
  UNKNOWN = 0,
  UNINDENTIFIED_VM = 1,
  REAL_HARDWARE = 2,
  VM_WARE = 3,
  HYPER_V = 4,
  VIRTUAL_PC = 5,
  PARALLELS = 6,
  VIRTUAL_BOX = 7,
  XEN = 8,
  KVM = 9
}

function getImportance (index: number) {
  if (index < 100) {
    return ImportanceLabel.CRITICAL
  }

  if (index < 200) {
    return ImportanceLabel.HIGH
  }

  if (index < 300) {
    return ImportanceLabel.LOW
  }

  if (index < 400) {
    return ImportanceLabel.MEDIUM
  }

  return ImportanceLabel.NOT_DEFINED
}

function toSingleDigit (n: number) {
  return 1 + (n - 1) % 9
}

const longText = 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. Sphinx of black quartz, judge my vow.'

const dataSource: TableRecord[] = Array.from({ length: 1000 }, (_, index) => ++index).map(index => ({
  key: index,
  id: index,
  name: `ub2004-x64-${index}`,
  description: 'Workstation on Linux',
  type: TypeLabel.WORKSTATION,
  importance: getImportance(index),
  addedAt: '2025-06-01T16:05:50Z',
  ipAddresses: [],
  vulnerabilities: toSingleDigit(index),
  lastSeenOnline: '2025-04-15T10:30:00Z',
  ipAddressesV6: [
    '2001:db8::1 2001:db8::1 2001:db8::1',
    '2001:db8::2',
    '2001:db8::3',
    '2001:db8::1',
    '2001:db8::2'
  ],
  dnsName: `dev-pc${index}.corp.example.com`,
  dnsDomain: 'corp.example.com',
  os: 'Ubuntu',
  architecture: ArchitectureLabel.UNKNOWN,
  networkAgentID: `NA-7F3A2B9C-${index}`,
  networkAgentVersion: '15.4.0.8873',
  netBiosName: `UB2404-X64-${index}`,
  windowsDomain: 'WORKGROUP',
  buildNumber: '10.0.10000',
  virtualMachineType: VirtualMachineTypeLabel.UNKNOWN,
  services: 'Oracle DB, RabbitMQ, OpenVPN,',
  openPorts: 'TCP: 21, 22, 80, 3306, 6379',
  motherboardPublisher: 'Dell Inc.',
  motherboardFirmwareVersion: '1.10',

  TextReducer: longText,
  ExpandableText: longText,
  tags: new Array(toSingleDigit(index)).fill('tag'),
  Textbox: 'edit me',
  Textarea: longText.repeat(2),
  RichTextEditor: [
    {
      type: CustomFormats.HEADING_TWO,
      children: [{ text: 'RichTextEditor' }]
    },
    {
      type: CustomFormats.PARAGRAPH,
      children: [
        { text: 'Edit me. ' },
        { text: 'Жирный', bold: true },
        { text: ', ' },
        { text: 'подчеркнутый', underline: true },
        { text: ' и ' },
        { text: 'код', code: true }
      ]
    }
  ],
  Toggle: index % 3 === 0,
  Select: 'option_2',
  ...Object.fromEntries(Array.from({ length: 10 }, (_, i) => ++i).map(i => [`col${i}`, `col${i}`]))
}))

function patchDataSource (id: string, patch: Partial<TableRecord>) {
  for (const index in dataSource) {
    if (dataSource[index].id === id) {
      dataSource[index] = {
        ...dataSource[index],
        ...patch
      }
      break
    }
  }
}

const ImportanceLabelComponent = ({ importance }: { importance: ImportanceLabel }) => {
  switch (importance) {
    case ImportanceLabel.CRITICAL:
      return <Status icon={<StatusLevelCritical color="severity.severitylevel6" />} label="critical" />
    case ImportanceLabel.HIGH:
      return <Status icon={<StatusLevelHigh color="severity.severitylevel5" />} label="high" />
    case ImportanceLabel.MEDIUM:
      return <Status icon={<StatusLevelMedium color="severity.severitylevel3" />} label="medium" />
    case ImportanceLabel.LOW:
      return <Status icon={<StatusLevelLow color="severity.severitylevel0" />} label="low" />
    case ImportanceLabel.NOT_DEFINED:
      return <Status icon={null} label="not_defined" />
  }
}

const createDefaultColumn = (key: string): TableColumn => ({
  key: key,
  title: key,
  dataIndex: key,
  isSortable: true,
  show: true,
  expandableText: true,
  hideColumnAvailable: true,
  hasEmptyCellDash: true,
  filterType: {
    type: FilterType.Text,
    operations: [{ operation: FilterOperation.eq }, { operation: FilterOperation.neq }]
  }
})

const createNumericEnumFilterType = (enumMap: Record<number, string>) => ({
  type: FilterType.Enum,
  getAvailableOptions: () =>
    Promise.resolve(
      Object.entries(enumMap)
        .filter(([, value]) => typeof value === 'number' && !isNaN(value))
        .map(([key, value]) => ({
          label: key.toLowerCase(),
          value
        }))
    )
})

function getColumns (setData: React.Dispatch<React.SetStateAction<TableRecord[]>>) {
  function patchDataState (id: string, patch: Partial<TableRecord>) {
    setData(prev => {
      setTimeout(() => patchDataSource(id, patch), 0)

      return prev.map(row => {
        if (row.id !== id) {
          return row
        }

        return { ...row, ...patch }
      })
    })
  }

  const options: OptionType[] = Array.from({ length: 9 }, (_, i) => ++i).map(i => ({
    description: [2, 3, 5].includes(i) ? longText : undefined,
    label: `option ${i}` + ([1, 4, 6].includes(i) ? ` ${longText}` : ''),
    value: `option_${i}`
  }))

  const columns: TableColumn[] = [
    {
      ...createDefaultColumn('id'),
      width: 75
    },
    {
      ...createDefaultColumn('name'),
      filterType: { type: FilterType.Text },
      hideColumnAvailable: false,
      render: (value: string) => (
        <Link href="">
          {/* <TextReducer>{value}</TextReducer> */}
          {value}
        </Link>
      ),
      width: 150
    },
    {
      ...createDefaultColumn('importance'),
      filterType: createNumericEnumFilterType(ImportanceLabel),
      render: (value: ImportanceLabel) => <ImportanceLabelComponent importance={value} />,
      width: 120
    },
    {
      ...createDefaultColumn('vulnerabilities'),
      filterType: { type: FilterType.Number, min: 0 },
      render: (value: string) => <Link href="">{value}</Link>,
      width: 140
    },
    {
      ...createDefaultColumn('TextReducer')
    },
    {
      ...createDefaultColumn('ExpandableText'),
      expandableText: true
    },
    {
      ...createDefaultColumn('tags'),
      isSortable: false,
      render: (value: string[]) => value
        .map((_, i) => tagModes[i])
        .map(tag => <Tag mode={tag} key={tag}>{tag}</Tag>)
    },
    {
      ...createDefaultColumn('Textbox'),
      render: (value: string, currentRow: TableRecord) => {
        return (
          <Textbox
            onChange={newValue => patchDataState(currentRow.id, { Textbox: newValue })}
            value={value}
          />
        )
      }
    },
    {
      ...createDefaultColumn('Textarea'),
      render: (value: string, currentRow: TableRecord) => {
        return (
          <Textbox.Textarea
            onChange={newValue => patchDataState(currentRow.id, { Textarea: newValue })}
            maxLength={1000}
            showCount
            value={value}
          />
        )
      },
      width: 300
    },
    // {
    //   ...createDefaultColumn('RichTextEditor'),
    //   render: (value: Descendant[], currentRow: TableRecord) => {
    //     return (
    //       <RichTextEditor
    //         autoFocus={false}
    //         initialValue={value}
    //         onChange={newValue => patchDataState(currentRow.id, { RichTextEditor: newValue })}
    //         plugins={allPlugins}
    //       />
    //     )
    //   },
    //   width: 400
    // },
    {
      ...createDefaultColumn('Select'),
      ellipsis: false,
      render: (value: string, currentRow: TableRecord) => {
        return (
          <Select
            onChange={newValue => patchDataState(currentRow.id, { Select: newValue })}
            options={options}
            value={value}
          />
        )
      }
    },
    {
      ...createDefaultColumn('Toggle'),
      render: (value: boolean, currentRow: TableRecord) => {
        return (
          <Toggle
            checked={value}
            onChange={newValue => patchDataState(currentRow.id, { Toggle: newValue })}
          >
            toggle me
          </Toggle>
        )
      }
    },
    ...Array.from({ length: 10 }, (_, i) => ++i).map(i => ({
      ...createDefaultColumn(`col${i}`),
      render: (value: any) => {
        switch (i % 3) {
          case 0:
            return <Text type="BTR3">{value}</Text>
          case 1:
            return <Link decoration="icon" icon={<EmojiHappy />}>{value}</Link>
          default:
            return <EmojiHappy />
        }
      }
    })),
    {
      ...createDefaultColumn('type'),
      isSortable: false,
      filterType: createNumericEnumFilterType(TypeLabel),
      render: (value: TypeLabel) => (
        // <TextReducer>{TypeLabel[value]}</TextReducer>
        TypeLabel[value]
      ),
      width: 180
    },
    {
      ...createDefaultColumn('lastSeenOnline'),
      filterType: { type: FilterType.DateTime, dateOnly: true },
      width: 180
    },
    {
      ...createDefaultColumn('ipAddresses'),
      // render: (value: string[]) => <TextReducer>{value?.join(', ')}</TextReducer>,
      render: (value: string[]) => value?.join(', '),
      width: 140
    },
    {
      ...createDefaultColumn('dnsDomain'),
      filterType: { type: FilterType.Text },
      width: 180
    },
    {
      ...createDefaultColumn('os'),
      width: 250
    },
    {
      ...createDefaultColumn('openPorts'),
      isSortable: false,
      width: 250
    },
    {
      ...createDefaultColumn('services'),
      isSortable: false,
      width: 250
    },
    {
      ...createDefaultColumn('buildNumber'),
      width: 120
    },
    {
      ...createDefaultColumn('description'),
      filterType: { type: FilterType.Text },
      width: 250
    },
    {
      ...createDefaultColumn('addedAt'),
      filterType: { type: FilterType.DateTime, dateOnly: true },
      width: 180
    },
    {
      ...createDefaultColumn('ipAddressesV6'),
      // render: (value: string[]) => <TextReducer>{value?.join(', ')}</TextReducer>,
      render: (value: string[]) => value?.join(', '),
      width: 250
    },
    {
      ...createDefaultColumn('dnsName'),
      filterType: { type: FilterType.Text },
      width: 220
    },
    {
      ...createDefaultColumn('architecture'),
      filterType: createNumericEnumFilterType(ArchitectureLabel),
      render: (value: ArchitectureLabel) => (
        // <TextReducer>{ArchitectureLabel[value]}</TextReducer>
        ArchitectureLabel[value]
      ),
      width: 140
    },
    {
      ...createDefaultColumn('networkAgentID'),
      width: 160
    },
    {
      ...createDefaultColumn('networkAgentVersion'),
      width: 160
    },
    {
      ...createDefaultColumn('netBiosName'),
      filterType: { type: FilterType.Text },
      width: 150
    },
    {
      ...createDefaultColumn('windowsDomain'),
      filterType: { type: FilterType.Text },
      width: 150
    },
    {
      ...createDefaultColumn('virtualMachineType'),
      filterType: createNumericEnumFilterType(VirtualMachineTypeLabel),
      render: (type: VirtualMachineTypeLabel) => (
        // <TextReducer>{VirtualMachineTypeLabel[type]}</TextReducer>
        VirtualMachineTypeLabel[type]
      ),
      width: 200
    }
  ]

  return columns
}

export const Performance: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(100)
    const [loading, setLoading] = useState<boolean>(false)
    const [filteredData, setFilteredData] = useState<TableRecord[]>([])
    const [search, setSearch] = useState<string>('')
    const debouncedSearch = useDebounce(search, 500)
    const columns = useMemo(() => getColumns(setFilteredData), [])
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

    const handleSortChange = useCallback(() => {
      //
    }, [])
    const handleColumnsChange = useCallback(() => {
      //
    }, [])
    const handleManualColumnResize = useCallback(() => {
      //
    }, [])
    const handleSearchChange = useCallback((value: string) => {
      setSearch(value)
      setCurrentPage(1)
    }, [])
    const handleSearchClear = useCallback(() => {
      setSearch('')
      setCurrentPage(1)
    }, [])
    const handlePaginationChange = useCallback((page: number) => {
      setCurrentPage(page)
    }, [])
    const onShowSizeChange = useCallback((_, size: number) => {
      setPageSize(size)
    }, [])
    const onSelect = useCallback((_: TableRecord, __: boolean, selectedRows: TableRecord[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }, [])
    const onSelectAll = useCallback((_: boolean, selectedRows: TableRecord[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }, [])

    useEffect(() => {
      const fakeApiCall = async (search: string, page: number): Promise<TableRecord[]> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        const data = dataSource.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
        const start = (page - 1) * pageSize
        return data.slice(start, start + pageSize)
      }

      setLoading(true)
      console.log('Request start...')
      fakeApiCall(debouncedSearch, currentPage)
        .then((data) => {
          console.log('Request finished:', data)
          setFilteredData(data)
        })
        .catch((error) => {
          console.error('Request error:', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [debouncedSearch, currentPage, pageSize])

    return (
      <Wrapper>
        <Table
          {...args}
          columns={columns}
          dataSource={filteredData}
          emptyText={(
            <Placeholder
              description="Nothing not found"
              image="noData"
              mode="filled"
              title="Ooops"
              size="small"
            />
          )}
          fullHeight={!filteredData.length}
          loading={loading}
          loaderProps={{
            indicator: <Loader />,
            style: { maxHeight: '100%' }
          }}
          onColumnsChange={handleColumnsChange}
          onManualColumnResize={handleManualColumnResize}
          onSearch={handleSearchChange}
          onSortChange={handleSortChange}
          rowSelection={{
            onSelect,
            onSelectAll,
            preserveSelectedRowKeys: true,
            selectedRowKeys
          }}
          toolbar={{
            autoDropdown: true,
            showColumns: true,
            showFilterSidebar: true,
            showSearch: false,
            left: [
              {
                key: 'children-stub',
                type: ToolbarItemKeyConst.CHILDREN,
                children: <></>
              }
            ],
            right: (existingElements: ReactNode[]): ReactNode[] => [
              <Search
                key="search"
                placeholder="Search by name"
                value={search}
                suffix={<Search1 color="status.statusneutral" />}
                onChange={handleSearchChange}
                onClearClick={handleSearchClear}
              />,
              ...existingElements
            ]
          }}
          pagination={{
            current: currentPage,
            onChange: handlePaginationChange,
            onShowSizeChange: onShowSizeChange,
            pageSize,
            showSizeChanger: true,
            total: dataSource.length
          }}
        />
      </Wrapper>
    )
  },
  args: {
    isServerFiltering: true,
    resizingMode: 'scroll',
    rowMode: 'compact',
    stickyHeader: 0,
    useFiltersSidebar: true
  }
}
