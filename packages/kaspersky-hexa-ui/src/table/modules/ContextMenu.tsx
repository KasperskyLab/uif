import {
  ContextMenu as ContextMenuComponent,
  ContextMenuRef
} from '@helpers/components/ContextMenu'
import { DropdownItemProps } from '@src/dropdown'
import { ToolbarItems } from '@src/toolbar'
import { mapToolbarItemsIntoDropdownItems } from '@src/toolbar/helpers'
import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useTableContext } from '../context/TableContext'
import styles from '../Table.module.scss'
import { ITableProps, TableRecord } from '../types'

import { GetLeftItemsProps } from './ToolbarIntegration/types'

import { TableComponent } from './index'

function filterContextMenuItems (items: ToolbarItems[]): ToolbarItems[] {
  return items.filter(item => {
    if (item.visible === false) {
      return false
    }

    if ('disabled' in item && item.disabled === true) {
      return false
    }

    return true
  }).filter((item, i, ar) => !(i > 0 && item.type === 'divider' && ar[i - 1].type === 'divider'))
}

function getSelectedRows <T extends TableRecord = TableRecord> (toolbarContext: GetLeftItemsProps<T>) {
  return toolbarContext
    .dataSource
    ?.filter(x => toolbarContext.selectedRowKeys?.includes(x.key)) ?? []
}

export function getContextParams<T extends TableRecord = TableRecord> (
  clickedRow: T,
  toolbarContext: GetLeftItemsProps<T>,
  pagination: ITableProps<T>['pagination']
): [
  T[],
  GetLeftItemsProps<T>,
  number
] {
  const singleRowContext = {
    ...toolbarContext,
    deselectedRowKeys: [],
    isSelectedAll: false,
    selectedRowKeys: [clickedRow.key]
  }

  if (toolbarContext.isSelectedAll && toolbarContext.deselectedRowKeys?.includes(clickedRow.key)) {
    return [[clickedRow], singleRowContext, 1]
  }

  if (toolbarContext.isSelectedAll) {
    const contextRows = getSelectedRows(toolbarContext)
    let count = pagination ? pagination.total ?? 0 : 0
    count -= toolbarContext.deselectedRowKeys?.length ?? 0

    return [contextRows, toolbarContext, count]
  }

  if (toolbarContext.selectedRowKeys?.includes(clickedRow.key)) {
    const contextRows = getSelectedRows(toolbarContext)

    return [contextRows, toolbarContext, contextRows.length]
  }

  return [[clickedRow], singleRowContext, 1]
}

export const ContextMenu = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
): TableComponent<T> => function ContextMenuModule ({
  contextMenu,
  ...props
}) {
  const { toolbarContext } = useTableContext<T>()
  const { t } = useTranslation()
  const menuRef = React.useRef<ContextMenuRef>(null)

  const [overlay, setOverlay] = React.useState<DropdownItemProps[]>([])

  const onRow = React.useMemo<ITableProps<T>['onRow']>(() => {
    if (!contextMenu) {
      return props.onRow
    }

    return (row, rowIndex) => {
      const orig = props.onRow?.(row, rowIndex)

      return {
        ...orig,
        onContextMenu: async event => {
          event.preventDefault()

          const [
            contextRows,
            context,
            count
          ] = getContextParams(row, toolbarContext, props.pagination)

          const contextItems = mapToolbarItemsIntoDropdownItems(
            filterContextMenuItems(
              await contextMenu!(contextRows, context)
            )
          )

          if (count > 1) {
            contextItems.unshift({
              children: (
                <Text className={styles.contextMenuCounter} type="BTM4">
                  {t('table.contextMenu.selected', { count })}
                </Text>
              )
            })
          }

          setOverlay(contextItems)

          menuRef.current?.open(event)
          orig?.onContextMenu?.(event)
        }
      }
    }
  }, [t, contextMenu, props.onRow, toolbarContext, props.pagination])

  return (
    <>
      {contextMenu && (
        <ContextMenuComponent
          ref={menuRef}
          klId="table-context-menu"
          overlay={overlay}
          testId="table-context-menu"
        />
      )}
      <Component {...props} onRow={onRow} />
    </>
  )
}
