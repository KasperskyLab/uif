import { ActionButton } from '@src/action-button'
import { Dropdown, DropdownItemProps } from '@src/dropdown'
import cn from 'classnames'
import React, { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Delete, Menu3, Rename } from '@kaspersky/hexa-ui-icons/16'

import { usePresetsUpdate, useTableContext } from '../../context/tableStore'
import { TableRecord } from '../../types'

import styles from './Presets.module.scss'
import { TablePreset, TablePresetAction, TableView } from './types'

type PresetActionsProps <T extends TableRecord> = {
  onActionClicked: () => void,
  preset: TablePreset<T>,
  view?: TableView<T>
}

export const PresetActions = <T extends TableRecord>({
  onActionClicked,
  preset,
  view
}: PresetActionsProps<T>) => {
  const { t } = useTranslation()
  const [opened, setOpened] = useState(false)
  const updateContext = usePresetsUpdate<T>()
  const [onPresetUpdated, currentPresetId] = useTableContext(state => [state.presets.onPresetUpdated, state.presets.currentPresetId])

  const handleRename = useCallback((): void => {
    onActionClicked()
    updateContext({ presetToRename: preset })
    setOpened(false)
  }, [onActionClicked, preset, updateContext])

  const handleDelete = useCallback((): void => {
    onActionClicked()
    updateContext({ presetToDelete: preset })
    setOpened(false)
  }, [onActionClicked, preset, updateContext])

  const getActionHandler = useCallback((action: TablePresetAction<T>): () => void => {
    return async () => {
      onActionClicked()
      setOpened(false)

      const updatedPreset = await action.onClick(preset)

      if (updatedPreset) {
        onPresetUpdated?.(updatedPreset)
      }
    }
  }, [onActionClicked, onPresetUpdated, preset])

  const overlay: DropdownItemProps[] = useMemo(() => {

    if (preset.system) {
      return []
    }

    const result: DropdownItemProps[] = []

    if (view?.settings?.presetActions?.length) {
      const items: DropdownItemProps[] = view.settings.presetActions.map(x => ({
        key: x.key,
        componentsBefore: x.icon ? [x.icon] : undefined,
        children: x.name,
        onClick: getActionHandler(x),
        testId: x.key
      }))

      result.push(
        ...items,
        {
          key: 'divider',
          children: null,
          type: 'divider'
        }
      )
    }

    result.push(
      {
        key: 'rename-table-preset',
        componentsBefore: [<Rename key="0" />],
        children: t('common.rename'),
        onClick: handleRename,
        testId: 'rename-table-preset'
      },
      {
        key: 'delete-table-preset',
        componentsBefore: [<Delete key="0" />],
        children: t('common.delete'),
        onClick: handleDelete,
        disabled: preset.id === currentPresetId,
        testId: 'delete-table-preset'
      }
    )
    return result
  }, [getActionHandler, handleDelete, handleRename, preset.system, t, view?.settings?.presetActions, currentPresetId])

  return (
    <Dropdown
      getPopupContainer={triggerNode => triggerNode.closest('.ant-dropdown-menu')!}
      onOverlayClick={(e) => {
        e.stopPropagation()
        setOpened(false)
      }}
      onVisibleChange={setOpened}
      overlay={overlay}
      placement="bottomRight"
      selectedItemsKeys={[]}
      trigger={['click']}
    >
      <ActionButton
        className={cn(styles.presetMenuButton, opened && styles.opened)}
        icon={<Menu3 />}
        onClick={e => e.stopPropagation()}
        testId="preset-actions"
      />
    </Dropdown>
  )
}
