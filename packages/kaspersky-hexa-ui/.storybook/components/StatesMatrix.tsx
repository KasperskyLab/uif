import { ConfigProvider } from '@design-system/context'
import { GlobalStyle } from '@design-system/global-style'
import { ThemeKey } from '@design-system/types'
import React, { Fragment, ReactNode, useLayoutEffect } from 'react'

export type StatesMatrixItem = {
  /** Подставляется в класс ячейки как sb-state-<key> */
  key: string,
  label: string
}

export type StatesMatrixProps<R extends StatesMatrixItem, C extends StatesMatrixItem> = {
  /** Строки — состояния компонента */
  rows: R[],
  /** Колонки — варианты компонента */
  columns: C[],
  renderCell: (row: R, column: C) => ReactNode,
  /** По умолчанию — обе темы */
  themes?: ThemeKey[],
  /** Ширина колонки с подписями строк */
  labelWidth?: number
}

// Состояния, которые нельзя выставить пропами: их правила берутся
// из css самого компонента (см. useSimulatedPseudoStates)
const PSEUDO_BY_STATE: Record<string, RegExp> = {
  hover: /:hover/g,
  active: /:active/g,
  focus: /:focus(?!-)/g,
  'focus-visible': /:focus-visible/g
}

/**
 * Показывает hover, active и focus в статичной раскладке.
 *
 * Правила не дублируются: мы читаем таблицы стилей страницы, находим правила
 * компонента с нужной псевдоклассом, убираем из селектора сам псевдокласс и
 * префиксуем его классом ячейки. Получившееся правило и по специфичности, и по
 * порядку перебивает исходное, поэтому ячейка выглядит так, будто на неё навели
 * мышь. Меняются токены в компоненте — меняется и раскладка, править нечего.
 */
function useSimulatedPseudoStates (stateKeys: string[]) {
  useLayoutEffect(() => {
    const pseudos = stateKeys
      .map((key) => [key, PSEUDO_BY_STATE[key]] as const)
      .filter(([, pattern]) => pattern)

    if (!pseudos.length) return undefined

    const derived: string[] = []

    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList

      try {
        rules = sheet.cssRules
      } catch {
        // таблица с чужого origin — читать нельзя, пропускаем
        continue
      }

      for (const rule of Array.from(rules)) {
        if (!(rule instanceof CSSStyleRule)) continue

        for (const [key, pattern] of pseudos) {
          pattern.lastIndex = 0
          if (!pattern.test(rule.selectorText)) continue

          const selector = rule.selectorText
            .split(',')
            .map((part) => `.sb-state-${key} ${part.replace(pattern, '').trim()}`)
            .join(',')

          derived.push(`${selector}{${rule.style.cssText}}`)
        }
      }
    }

    if (!derived.length) return undefined

    const style = document.createElement('style')
    style.dataset.statesMatrix = 'true'
    style.textContent = derived.join('\n')
    document.head.appendChild(style)

    return () => style.remove()
  }, [stateKeys.join(',')])
}

const THEME_LABELS: Record<ThemeKey, string> = {
  [ThemeKey.Light]: 'Light theme',
  [ThemeKey.Dark]: 'Dark theme'
}

const cellStyle: React.CSSProperties = {
  padding: '4px 12px',
  display: 'flex',
  alignItems: 'center',
  minHeight: 32
}

const headerStyle: React.CSSProperties = {
  ...cellStyle,
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--fg--neutral--secondary)',
  textAlign: 'left'
}

function Grid<R extends StatesMatrixItem, C extends StatesMatrixItem> ({
  rows,
  columns,
  renderCell,
  labelWidth = 100
}: Pick<StatesMatrixProps<R, C>, 'rows' | 'columns' | 'renderCell' | 'labelWidth'>) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `${labelWidth}px repeat(${columns.length}, min-content)`
    }}
    >
      <div style={headerStyle} />
      {columns.map(column => <div key={column.key} style={headerStyle}>{column.label}</div>)}

      {rows.map(row => (
        <Fragment key={row.key}>
          <div style={headerStyle}>{row.label}</div>
          {columns.map(column => (
            <div key={column.key} style={cellStyle}>
              <div className={`sb-state-${row.key}`}>{renderCell(row, column)}</div>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

/**
 * Раскладка компонента по состояниям: строки — состояния, колонки — варианты,
 * каждая тема отдельным блоком. Строки с ключами hover, active, focus и
 * focus-visible показываются без вмешательства в стори — их правила берутся
 * из css компонента.
 */
export function StatesMatrix<R extends StatesMatrixItem, C extends StatesMatrixItem> ({
  themes = [ThemeKey.Light, ThemeKey.Dark],
  ...gridProps
}: StatesMatrixProps<R, C>) {
  useSimulatedPseudoStates(gridProps.rows.map(row => row.key))

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      {themes.map(theme => (
        <div key={theme} className={theme === ThemeKey.Dark ? 'theme-dark' : 'theme-light'}>
          <ConfigProvider theme={theme}>
            <GlobalStyle />
            <div style={{
              padding: 24,
              borderRadius: 8,
              background: 'var(--bg--global)',
              border: '1px solid var(--border--neutral--medium)'
            }}
            >
              <h2 style={{
                margin: '0 0 16px 0',
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--fg--neutral--primary)'
              }}
              >
                {THEME_LABELS[theme]}
              </h2>
              <Grid {...gridProps} />
            </div>
          </ConfigProvider>
        </div>
      ))}
    </div>
  )
}
