function t(){return[{label:"Code 2024-06-05 16:50:54",description:"konstantinopsky.konstantin",value:0},{label:"Changed Code 2024-06-05 16:50:54",description:"popov.ivan",value:1},{label:"ManyChanges 2024-06-05 16:50:54",description:"popov.ivan",value:2},{label:"ManyChanges Compare 2024-06-05 16:50:54",description:"popov.ivan",value:3},{label:"Empty 2024-06-05 16:50:54",description:"popov.ivan",value:4},{label:"Empty 2024-06-05 16:50:54",description:"popov.ivan",value:5},{label:"Same Code 2024-06-05 16:50:54",description:"popov.ivan",value:6},{label:"Not loaded 2024-06-05 16:50:54",description:"popov.ivan",value:7},{label:"Line changed 2024-06-05 16:50:54",description:"popov.ivan",value:8}]}function r(){return`import { ActionButton } from '@src/action-button'
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

  const [viewType, setviewType] = useState<ViewType>(compareMode)
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
          <Dropdown.Menu>
            <Dropdown.GroupTitle>{t('codeCompare.compareMode')}</Dropdown.GroupTitle>
            <Dropdown.MenuItem onClick={() => setviewType('unified')} >
              {t('codeCompare.unified')}
            </Dropdown.MenuItem>
            <Dropdown.MenuItem onClick={() => setviewType('split')}>
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
        <DiffViewer oldValue={oldValue} newValue={newValue} viewType={viewType} />
      </CodeCompareBody>
    </LoaderWithTip>
  </div>
}`}function n(e){const o=[];for(let i=0;i<e;i++)o.push(`line ${i}`);return o.join(`
`)}function a(e){if(!(!e||e.value===7)){if(e.value===0||e.value===6)return r();if(e.value===1){const o=r().split(`
`);return o[10]='import { PlusRing } from "randomtext"',o.splice(40,2),o.splice(45,0,"      <Change />"),o.join(`
`)}if(e.value===2)return`${n(1e3)}${n(1e3)}${n(1e3)}`;if(e.value===3)return`${n(4e3)}`;if(e.value===8){const o=r().split(`
`);return o[48]="        onModify={handleModifyValue}",o.join(`
`)}return""}}export{t as a,a as g};
