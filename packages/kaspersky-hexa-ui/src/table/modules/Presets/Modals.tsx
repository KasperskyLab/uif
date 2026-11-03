import { Field } from '@src/field'
import { Textbox } from '@src/input'
import { Modal } from '@src/modal'
import { openNotification } from '@src/notification'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { usePresetsUpdate, useTableContext } from '../../context/tableStore'
import { TableColumn, TableRecord } from '../../types'
import { getPresetFilters } from '../Filters/helpers'

import { TablePreset, TablePresetDraft } from './types'

const PRESET_NAME_MAX_LENGTH = 255

type CreatePresetModalProps <T extends TableRecord> = {
  onCreate: (preset: TablePresetDraft<T>) => Promise<void>,
  pageSize: number,
  storageKey?: string,
  columns?: TableColumn<T>[]
}

function validate (name: string, presets: TablePreset[]): string | undefined {
  if (!name.trim()) {
    return 'tablePresets.validation.presetNameEmpty'
  }

  if (presets.some(x => x.name === name.trim())) {
    return 'tablePresets.validation.presetNameExists'
  }

  return undefined
}

export const CreatePresetModal = <T extends TableRecord> ({
  onCreate,
  pageSize,
  storageKey,
  columns
}: CreatePresetModalProps<T>): JSX.Element => {
  const { t } = useTranslation()
  const updateContext = usePresetsUpdate()

  const [
    availablePresets,
    columnsState,
    currentView,
    isCreatePresetOpen,
    filterApi,
    groupBy,
    sorting
  ] = useTableContext(state => [
    state.presets.availablePresets,
    state.presets.columnsState,
    state.presets.currentView,
    state.presets.isCreatePresetOpen,
    state.filterApi,
    state.groupBy,
    state.sorting
  ])

  const [name, setName] = useState('')
  const [validationError, setValidationError] = useState<string | undefined>()
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (isCreatePresetOpen) {
      setName('')
      setValidationError(undefined)
    }
  }, [isCreatePresetOpen])

  const close = (): void => {
    setName('')
    setValidationError(undefined)
    updateContext({ isCreatePresetOpen: false })
  }

  const save = async (): Promise<void> => {
    const presets = currentView ? currentView.presets : availablePresets ?? []
    const error = validate(name, presets)

    if (error) {
      setValidationError(error)
      return
    }

    try {
      setProcessing(true)
      const createdPreset: TablePresetDraft<T> = {
        name,
        settings: {
          columns: Object.fromEntries(
            Object.entries(columnsState ?? {}).map(([key, column]) => [
              key,
              { ...column, isUserDefinedWidth: false }
            ])
          ),
          filters: filterApi ? getPresetFilters(filterApi.getRootGroupFilters()) : [],
          groupBy,
          pageSize,
          sorting
        }
      }

      await onCreate(createdPreset)
      close()
      openNotification.success(t('tablePresets.presetCreated', { name })!)
    } catch {
      openNotification.error(t('tablePresets.errors.presetCreate', { name })!)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Modal
      header={t('tablePresets.createPresetModal.header')}
      onCancel={close}
      visible={!!isCreatePresetOpen}
      actions={{
        FIRST_ACTION: {
          loading: processing,
          onClick: save,
          testId: 'modal-confirm',
          text: t('common.save')!
        },
        SECOND_ACTION: {
          disabled: processing,
          mode: 'secondary',
          onClick: close,
          testId: 'modal-cancel',
          text: t('common.cancel')!
        }
      }}
      content={(
        <Field
          control={(
            <Textbox
              maxLength={PRESET_NAME_MAX_LENGTH}
              onChange={(value) => {
                setName(value)
                setValidationError(undefined)
              }}
              showClearButton
              testId="table-preset-name"
              value={name}
            />
          )}
          description={t('tablePresets.createPresetModal.tip')!}
          label={t('tablePresets.createPresetModal.presetName')}
          message={validationError ? t(validationError)! : undefined}
          messageMode="error"
          required
          style={{ marginBottom: 2 }}
        />
      )}
    />
  )
}

type RenamePresetModalProps = {
  onRename: (preset: TablePreset) => Promise<void>,
}

export const RenamePresetModal: FC<RenamePresetModalProps> = ({ onRename }) => {
  const { t } = useTranslation()
  const updateContext = usePresetsUpdate()
  const [
    availablePresets,
    currentView,
    presetToRename
  ] = useTableContext(state => [
    state.presets.availablePresets,
    state.presets.currentView,
    state.presets.presetToRename
  ])

  const [name, setName] = useState('')
  const [validationError, setValidationError] = useState<string | undefined>()
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    setName(presetToRename?.name ?? '')
    setValidationError(undefined)
  }, [presetToRename])

  const close = (): void => {
    setName('')
    setValidationError(undefined)
    updateContext({ presetToRename: undefined })
  }

  const save = async (): Promise<void> => {
    if (!presetToRename) return

    const presets = currentView ? currentView.presets : availablePresets ?? []
    const error = validate(name, presets.filter(x => x.id !== presetToRename.id))

    if (error) {
      setValidationError(error)
      return
    }

    try {
      setProcessing(true)
      await onRename({ ...presetToRename, name })
      close()
      openNotification.success(t('tablePresets.presetUpdated', { name })!)
    } catch {
      openNotification.error(t('tablePresets.errors.presetUpdate', { name: presetToRename.name })!)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Modal
      header={t('tablePresets.renamePresetModal.header')}
      onCancel={close}
      visible={!!presetToRename}
      actions={{
        FIRST_ACTION: {
          loading: processing,
          onClick: save,
          testId: 'modal-confirm',
          text: t('common.save')!
        },
        SECOND_ACTION: {
          disabled: processing,
          mode: 'secondary',
          onClick: close,
          testId: 'modal-cancel',
          text: t('common.cancel')!
        }
      }}
      content={(
        <Field
          control={(
            <Textbox
              maxLength={PRESET_NAME_MAX_LENGTH}
              onChange={(value) => {
                setName(value)
                setValidationError(undefined)
              }}
              showClearButton
              testId="table-preset-name"
              value={name}
            />
          )}
          label={t('tablePresets.createPresetModal.presetName')}
          message={validationError ? t(validationError)! : undefined}
          messageMode="error"
          required
          style={{ marginBottom: 2 }}
        />
      )}
    />
  )
}

type DeletePresetModalProps = {
  onDelete: () => Promise<void>
}

export const DeletePresetModal: FC<DeletePresetModalProps> = ({ onDelete }) => {
  const { t } = useTranslation()
  const updateContext = usePresetsUpdate()
  const presetToDelete = useTableContext(state => state.presets.presetToDelete)

  const [processing, setProcessing] = useState(false)

  const close = (): void => {
    updateContext({ presetToDelete: undefined })
  }

  const remove = async (): Promise<void> => {
    try {
      setProcessing(true)
      await onDelete()
      close()
      openNotification.success(t('tablePresets.presetDeleted', { name: presetToDelete?.name })!)
    } catch {
      openNotification.error(t('tablePresets.errors.presetDelete', { name: presetToDelete?.name })!)
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Modal
      header={t('tablePresets.deletePresetModal.header')}
      mode="error"
      onCancel={close}
      visible={!!presetToDelete}
      actions={{
        FIRST_ACTION: {
          loading: processing,
          onClick: remove,
          testId: 'modal-confirm',
          text: t('common.delete')!
        },
        SECOND_ACTION: {
          disabled: processing,
          mode: 'secondary',
          onClick: close,
          testId: 'modal-cancel',
          text: t('common.cancel')!
        }
      }}
      content={(
        <>{t('tablePresets.deletePresetModal.message', { name: presetToDelete?.name })!}</>
      )}
    />
  )
}
