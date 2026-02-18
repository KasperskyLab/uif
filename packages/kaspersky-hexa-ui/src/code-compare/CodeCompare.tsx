import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import React, { FC, useMemo, useState } from 'react'
import { ViewType } from 'react-diff-view'
import { useTranslation } from 'react-i18next'

import { Change, SettingsGear } from '@kaspersky/hexa-ui-icons/16'

import { CodeCompareBody } from './code-compare-body'
import { ChangeIcon, Header, LoaderWithTip } from './CodeCompareCss'
import { DiffViewer } from './diff-viewer'
import { SelectWithDescription } from './select-with-description'
import { IVersionOption } from './types'

export interface CodeCompareProps {
  options: IVersionOption[],
  compareMode?: ViewType,
  oldVersion?: IVersionOption,
  newVersion?: IVersionOption,
  oldValue?: string,
  newValue?: string,
  loading?: boolean,
  onVersionChange?: (version?: IVersionOption, compareVersion?: IVersionOption) => void
}

export const CodeCompare: FC<CodeCompareProps> = ({
  oldVersion,
  newVersion,
  oldValue,
  newValue,
  options,
  loading = false,
  onVersionChange,
  compareMode = 'split'
}) => {
  const { t } = useTranslation()

  const [viewType, setViewType] = useState<ViewType>(compareMode)
  const codeOptions = useMemo(() => options.filter(option => option.value !== newVersion?.value), [options, newVersion])
  const compareCodeOptions = useMemo(() => options.filter(option => option.value !== oldVersion?.value), [options, oldVersion])

  const noValues = oldValue === undefined || newValue === undefined
  const valuesEqual = oldValue === newValue

  return <div>
    <Header>
      <SelectWithDescription
        value={oldVersion}
        onChange={(version) => onVersionChange?.(version, newVersion)}
        options={codeOptions}
        placeholder={t('codeCompare.basicVersion')}
      />
      <ChangeIcon color="secondary">
        <Change />
      </ChangeIcon>
      <SelectWithDescription
        value={newVersion}
        onChange={(compareVersion) => onVersionChange?.(oldVersion, compareVersion)}
        options={compareCodeOptions}
        placeholder={t('codeCompare.comparableVersion')}
      />
      <div />
      {!valuesEqual && <Dropdown
        trigger={['click']}
        placement="bottomRight"
        overlay={
          <Dropdown.Menu selectedKeys={[viewType]}>
            <Dropdown.GroupTitle>{t('codeCompare.compareMode')}</Dropdown.GroupTitle>
            <Dropdown.MenuItem key="unified" onClick={() => setViewType('unified')}>
              {t('codeCompare.unified')}
            </Dropdown.MenuItem>
            <Dropdown.MenuItem key="split" onClick={() => setViewType('split')}>
              {t('codeCompare.split')}
            </Dropdown.MenuItem>
          </Dropdown.Menu>
        }
      >
        <ActionButton icon={<SettingsGear />} />
      </Dropdown>}
    </Header>
    <LoaderWithTip
      spinning={loading}
      delay={1000}
      tip={noValues ? t('codeCompare.loader') : undefined}
      size="medium"
    >
      <CodeCompareBody oldValue={oldValue} newValue={newValue}>
        <DiffViewer oldValue={oldValue} newValue={newValue} viewType={viewType} key={`${oldValue}-${newValue}`} />
      </CodeCompareBody>
    </LoaderWithTip>
  </div>
}
