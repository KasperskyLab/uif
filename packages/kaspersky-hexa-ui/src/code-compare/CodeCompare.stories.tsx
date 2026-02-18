import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Grid, GridItem } from '@src/grid'
import { HelpMessage } from '@src/help-message'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { FC, useState } from 'react'

import MetaData from './__meta__/meta.json'
import { CodeCompare as CodeCompareComponent, CodeCompareProps } from './CodeCompare'
import { IVersionOption } from './types'

const CodeCompareVersionWrapper: FC<CodeCompareProps> = (props) => {
  const [v1, setV1] = useState(props.oldVersion)
  const [v2, setV2] = useState(props.newVersion)
  const [v1Code, setV1Code] = useState(props.oldValue)
  const [v2Code, setV2Code] = useState(props.newValue)

  const handleVersionsChange = (v1?: IVersionOption, v2?: IVersionOption): void => {
    setV1(v1)
    setV2(v2)

    setV1Code(getCodeByVersion(v1))
    setV2Code(getCodeByVersion(v2))
  }

  return (
    <CodeCompareComponent
      {...props}
      oldVersion={v1}
      newVersion={v2}
      oldValue={v1Code}
      newValue={v2Code}
      onVersionChange={handleVersionsChange}
    />
  )
}

const storySettings: Meta<CodeCompareProps> = {
  parameters: {
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof CodeCompareComponent> = {
  title: 'Hexa UI Components/CodeCompare',
  component: CodeCompareVersionWrapper,
  ...withDesignControls<CodeCompareProps>({
    componentName: 'codeCompare',
    meta: storySettings
  })
}

export default meta

type Story = StoryObj<typeof CodeCompareComponent>;

export const CodeCompare: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}

export const CompareMode: Story = {
  render: () => {
    const props: CodeCompareProps = {
      oldVersion: getVersions()[0],
      newVersion: getVersions()[1],
      options: getVersions(),
      oldValue: getCodeByVersion(getVersions()[0]),
      newValue: getCodeByVersion(getVersions()[8])
    }

    return (
      <Grid layout={{ cols: ['140px 6fr'] }} layoutProperty={{ gap: 32, alignItems: 'center' }}>
        <GridItem >
          <HelpMessage text="сompareMode = Unified" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="unified" />
        </GridItem>
        <HelpMessage text="сompareMode = Split" />
        <CodeCompareVersionWrapper {...props} compareMode="split" />
      </Grid>
    )
  }
}

export const NoValues: Story = {
  args: {
    oldVersion: undefined,
    newVersion: undefined,
    options: getVersions()
  }
}

export const EqualValues: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[6],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[6])
  }
}

export const EmptyValues: Story = {
  args: {
    oldVersion: getVersions()[4],
    newVersion: getVersions()[5],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[4]),
    newValue: getCodeByVersion(getVersions()[5])
  }
}

export const NoValuesLoading: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[7],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[7])
  }
}

export const LoadingWithCode: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}

export const ManyChanges: Story = {
  args: {
    oldVersion: getVersions()[2],
    newVersion: getVersions()[3],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[2]),
    newValue: getCodeByVersion(getVersions()[3])
  }
}

function getVersions (): IVersionOption[] {
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

function getBaseCode (): string {
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

function getCodeByVersion (version?: IVersionOption): string | undefined {
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
