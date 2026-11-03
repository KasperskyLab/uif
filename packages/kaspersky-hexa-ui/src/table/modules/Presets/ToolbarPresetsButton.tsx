import { TextReducer } from '@helpers/components/TextReducer'
import { Button } from '@src/button'
import { Dropdown, DropdownItemProps, DropdownProps } from '@src/dropdown'
import dropdownStyles from '@src/dropdown/styles/Dropdown.module.scss'
import { Field } from '@src/field'
import { Loader } from '@src/loader'
import { Select } from '@src/select'
import { Toolbar } from '@src/toolbar'
import cn from 'classnames'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Presets, PresetsWithIndicator } from '@kaspersky/hexa-ui-icons/16'

import { usePresetsUpdate, useTableContext } from '../../context/tableStore'
import { sort } from '../../helpers/common'
import { TableColumn, TableRecord } from '../../types'
import { getStringWithCondition } from '../SortingAndFilters/helpers'

import { getPresetDescription } from './helpers'
import { PresetActions } from './PresetActions'
import styles from './Presets.module.scss'
import { TablePreset } from './types'

export const ToolbarPresetsButton = <T extends TableRecord> ({ columns, loading, testId }: {
  columns?: TableColumn<T>[],
  loading?: boolean,
  presets?: TablePreset<T>[],
  testId?: string
}): JSX.Element => {
  const { t } = useTranslation()
  const [dropdownOpened, setDropdownOpened] = useState(false)
  const [
    availablePresets,
    currentPreset,
    currentView,
    isPresetDirty,
    saveCurrentPreset,
    views
  ] = useTableContext(state => [
    state.presets.availablePresets,
    state.presets.currentPreset,
    state.presets.currentView,
    state.presets.isPresetDirty,
    state.presets.saveCurrentPreset,
    state.presets.views
  ])
  const updateContext = usePresetsUpdate()
  const [updating, setUpdating] = useState(false)

  const presetsList = currentView
    ? currentView.presets
    : availablePresets ?? []

  const handlePresetClick = (preset: TablePreset): void => {
    updateContext({ currentPresetId: preset.id })
  }

  const handleCreatePreset = (): void => {
    updateContext({ isCreatePresetOpen: true })
  }

  const handleUpdatePreset = async () => {
    try {
      setUpdating(true)
      await saveCurrentPreset?.()
    } finally {
      setUpdating(false)
    }
  }

  const showCreatePreset = !currentPreset || isPresetDirty
  const showUpdatePreset = isPresetDirty && !currentPreset?.system

  const sortedPresets = [
    ...presetsList.filter(x => x.default),
    ...[...presetsList.filter(x => !x.default)].sort((a, b) => sort(a.name, b.name))
  ]

  const handleActionClick = useCallback(() => {
    setDropdownOpened(false)
  }, [])

  const presetsMenu: DropdownItemProps[] = []

  if (loading) {
    presetsMenu.push({
      key: 'loader',
      type: 'innerActions',
      className: styles.loaderItem,
      children: (
        <Loader centered size="medium" />
      )
    })
  } else {
    if (views && views.length > 1 && currentView) {
      presetsMenu.push(
        {
          key: 'select-view',
          type: 'innerActions',
          children: (
            <div
              className={styles.viewSelectorItem}
              onClick={e => e.stopPropagation()}
            >
              <Field
                control={(
                  <Select
                    getPopupContainer={x => x.closest('.ant-dropdown')!}
                    options={views.map(x => ({
                      description: x.description,
                      label: x.name,
                      value: x.id,
                      view: x
                    }))}
                    onChange={(_, option) => {
                      updateContext({ currentViewId: (option as any).view!.id })
                    }}
                    testId={getStringWithCondition('select-table-view', testId)}
                    value={currentView.id}
                  />
                )}
              />
            </div>
          )
        },
        {
          key: 'view-divider',
          type: 'divider',
          children: null
        }
      )
    }

    presetsMenu.push({
      key: 'presets',
      type: 'group',
      title: t('tablePresets.presets'),
      children: sortedPresets.map(x => ({
        key: x.id,
        className: styles.presetsListItem,
        interactive: { baseStyles: true },
        componentsAfter: x.system ? undefined : [
          <PresetActions
            key="0"
            onActionClicked={handleActionClick}
            preset={x}
            view={currentView}
          />
        ],
        description: (
          <TextReducer>{getPresetDescription(x, columns)}</TextReducer>
        ),
        onClick: () => handlePresetClick(x),
        children: <TextReducer>{x.name}</TextReducer>
      }))
    })
  }

  let presetsMenuFooter: DropdownProps['footer'] | undefined
  if (!loading && presetsList.length === 1) {
    presetsMenuFooter = {
      key: 'footer',
      sticky: true,
      className: cn(
        dropdownStyles.dropdownInnerActions,
        styles.turnOffPointer
      ),
      children: (
        <div>
          <p className={styles.createFirstPresetTip}>
            {t('tablePresets.createFirstPresetTip')}
          </p>
          <Button
            disabled={!showCreatePreset}
            mode="secondary"
            onClick={handleCreatePreset}
            testId={getStringWithCondition('create-table-preset', testId)}
          >
            {t('tablePresets.actions.createPreset')}
          </Button>
        </div>
      )
    }
  }

  if (!loading && presetsList.length > 1 && (showCreatePreset || showUpdatePreset)) {
    presetsMenuFooter = {
      key: 'footer',
      sticky: true,
      className: cn(
        dropdownStyles.dropdownItemCustom,
        styles.turnOffPointer
      ),
      children: (
        <>
          {showCreatePreset && (
            <Button
              disabled={updating}
              mode="secondary"
              onClick={handleCreatePreset}
              testId={getStringWithCondition('create-table-preset', testId)}
            >
              {t('tablePresets.actions.createPreset')}
            </Button>
          )}
          {showUpdatePreset && (
            <Button
              loading={updating}
              mode="secondary"
              onClick={handleUpdatePreset}
              testId={getStringWithCondition('update-table-preset', testId)}
            >
              {t('tablePresets.actions.updatePreset')}
            </Button>
          )}
        </>
      )
    }
  }

  return (
    <Dropdown
      testId={getStringWithCondition('presets-menu', testId)}
      selectedItemsKeys={!loading && currentPreset ? [currentPreset.id] : undefined}
      placement="bottomRight"
      onOverlayClick={() => setDropdownOpened(false)}
      onVisibleChange={setDropdownOpened}
      overlay={presetsMenu}
      overlayStyle={{ width: 400 }}
      footer={presetsMenuFooter}
      trigger={['click']}
      visible={dropdownOpened}
    >
      <Toolbar.Button
        iconBefore={isPresetDirty ? <PresetsWithIndicator /> : <Presets />}
        indicatorMode="update"
        isPressed={dropdownOpened}
        showIndicator={isPresetDirty}
        testId="table-presets"
      />
    </Dropdown>
  )
}