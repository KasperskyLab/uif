import { IVersionOption } from '../types'

export function getVersions (): IVersionOption[] {
  return [
    {
      label: 'Code 2024-06-05 16:50:54',
      description: 'konstantinopsky.konstantin',
      value: 0
    },
    {
      label: 'Changed Code 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 1
    },
    {
      label: 'ManyChanges 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 2
    },
    {
      label: 'ManyChanges Compare 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 3
    },
    {
      label: 'Empty 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 4
    },
    {
      label: 'Empty 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 5
    },
    {
      label: 'Same Code 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 6
    },
    {
      label: 'Not loaded 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 7
    },
    {
      label: 'Line changed 2024-06-05 16:50:54',
      description: 'popov.ivan',
      value: 8
    }
  ]
}

export function getBaseCode (): string {
  return `import { ActionButton } from '@src/action-button'
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
}`
}

function generateLines (count: number): string {
  const lines: string[] = []
  for (let i = 0; i < count; i++) {
    lines.push(`line ${i}`)
  }
  return lines.join('\n')
}

export function getCodeByVersion (version?: IVersionOption): string | undefined {
  if (!version || version.value === 7) {
    return undefined
  }

  if (version.value === 0 || version.value === 6) {
    return getBaseCode()
  }

  if (version.value === 1) {
    const lines = getBaseCode().split('\n')

    lines[10] = 'import { PlusRing } from "randomtext"'
    lines.splice(40, 2)
    lines.splice(45, 0, '      <Change />')

    return lines.join('\n')
  }

  if (version.value === 2) {
    return `${generateLines(1000)}${generateLines(1000)}${generateLines(1000)}`
  }

  if (version.value === 3) {
    return `${generateLines(4000)}`
  }

  if (version.value === 8) {
    const lines = getBaseCode().split('\n')
    lines[48] = '        onModify={handleModifyValue}'
    return lines.join('\n')
  }

  return ''
}
