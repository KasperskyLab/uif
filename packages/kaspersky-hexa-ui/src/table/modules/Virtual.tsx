import { Checkbox } from '@src/checkbox'
import { ITableProps, TableRecord } from '@src/table'
import { TableModule } from '@src/table/modules/index'
import { useVirtualizer } from '@tanstack/react-virtual'
import React, { useRef } from 'react'

export const VirtualTanstack: TableModule = Component => (props: ITableProps) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: props.dataSource?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 5
  })

  const renderVirtualTable = (data: TableRecord[]) => {
    return <div ref={parentRef} style={{ height: 600, width: '100%', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <table>
          <tbody className="ant-table-tbody">
          {virtualizer.getVirtualItems().map((virtualRow, index) => {
            const row = data[virtualRow.index]
            const currentRowKey = row.key

            const renderSelectionColumn = () => {
              if (!props.rowSelection) return null

              const { selectedRowKeys = [], onChange } = props.rowSelection
              const isRowChecked = selectedRowKeys.includes(currentRowKey)

              const handleChange = () => {
                if (isRowChecked) {
                  onChange?.(selectedRowKeys.filter(key => key !== currentRowKey), [])
                } else {
                  onChange?.([...selectedRowKeys, currentRowKey], [])
                }
              }

              return <td className="ant-table-cell ant-table-selection-column ant-table-cell-with-append">
                <Checkbox checked={isRowChecked} onChange={handleChange}></Checkbox>
              </td>
            }

            return (
              <tr
                className="ant-table-row"
                key={row.key}
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${
                    virtualRow.start - index * virtualRow.size
                  }px)`
                }}
              >
                {renderSelectionColumn()}
                {props.columns?.map((col, index) => {
                  const isLastColumn = props.columns?.length ? index === props.columns?.length - 1 : false
                  return (
                    <td
                      className="ant-table-cell"
                      key={`${row.key}-${col.dataIndex}`}
                      style={{
                        width: isLastColumn ? 'auto' : col.width ? col.width : '200px',
                        maxWidth: '200px',
                        minWidth: '100px'
                      }}
                    >
                      {row[col.dataIndex!]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  }

  if (!props.__EXPERIMENTAL__VIRTUAL) {
    return <Component
      {...props}
    />
  }

  return <Component
    {...props}
    pagination={false}
    resizingMode="last"
    components={{
      body: renderVirtualTable as any
    }}
  />
}
