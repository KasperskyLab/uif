import { ConfigProvider } from '@design-system/context'
import { GlobalStyle } from '@design-system/global-style'
import { ThemeKey } from '@design-system/types'
import React, { Fragment, ReactNode, useLayoutEffect } from 'react'

export type StatesMatrixItem = {
  /** Подставляется в класс ячейки как sb-state-<key>; ключ loading замораживает анимации в ячейке */
  key: string,
  label: string
}

type StatesMatrixBase<R extends StatesMatrixItem, C extends StatesMatrixItem> = {
  /** Строки — состояния компонента */
  rows: R[],
  /** Колонки — варианты компонента */
  columns: C[],
  /** По умолчанию — обе темы */
  themes?: ThemeKey[],
  /** Ширина колонки с подписями строк и колонки размеров */
  labelWidth?: number
}

export type StatesMatrixProps<
  R extends StatesMatrixItem,
  C extends StatesMatrixItem,
  S extends StatesMatrixItem = StatesMatrixItem
> = StatesMatrixBase<R, C> & (
  | {
    /** Подстроки размера внутри каждого состояния. Без пропа сетка двумерная */
    sizes?: undefined,
    renderCell: (row: R, column: C) => ReactNode
  } |
  {
    sizes: S[],
    /** Заголовок колонки размеров */
    sizeColumnLabel?: string,
    renderCell: (row: R, column: C, size: S) => ReactNode
  }
)

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
export function useSimulatedPseudoStates (stateKeys: string[]) {
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

/**
 * Строки с ключом loading содержат анимированные индикаторы (Loader, спиннер
 * antd): без заморозки скриншот каждый раз ловил бы спиннер под другим углом.
 * animation: none показывает индикатор в начальном угле — детерминированно.
 */
const FREEZE_LOADING_STYLE = '.sb-state-loading, .sb-state-loading * { animation: none !important; }'

const THEME_LABELS: Record<ThemeKey, string> = {
  [ThemeKey.Light]: 'Light theme',
  [ThemeKey.Dark]: 'Dark theme'
}

const cellStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 24
}

const headerStyle: React.CSSProperties = {
  ...cellStyle,
  fontSize: 12,
  fontWeight: 500,
  color: 'var(--fg--neutral--secondary)',
  justifyContent: 'center'
}

function VariantCells<R extends StatesMatrixItem, C extends StatesMatrixItem> ({
  rowKey,
  columns,
  renderColumn
}: {
  rowKey: string,
  columns: C[],
  renderColumn: (column: C) => ReactNode
}) {
  return (
    <>
      {columns.map(column => (
        <div key={column.key} style={cellStyle}>
          <div className={`sb-state-${rowKey}`}>{renderColumn(column)}</div>
        </div>
      ))}
    </>
  )
}

function Grid<R extends StatesMatrixItem, C extends StatesMatrixItem, S extends StatesMatrixItem> (
  props: StatesMatrixProps<R, C, S>
) {
  const { rows, columns, labelWidth = 100 } = props
  const gridTemplateColumns = props.sizes
    ? `${labelWidth}px ${labelWidth}px repeat(${columns.length}, max-content)`
    : `${labelWidth}px repeat(${columns.length}, max-content)`

  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns }}>
      <div style={headerStyle} />
      {props.sizes && <div style={headerStyle}>{props.sizeColumnLabel ?? 'Size'}</div>}
      {columns.map(column => <div key={column.key} style={headerStyle}>{column.label}</div>)}

      {props.sizes
        ? rows.map(row => (
            <Fragment key={row.key}>
              {props.sizes.map((size, index) => (
                <Fragment key={`${row.key}-${size.key}`}>
                  {index === 0 ? <div style={headerStyle}>{row.label}</div> : <div />}
                  <div style={headerStyle}>{size.label}</div>
                  <VariantCells
                    rowKey={row.key}
                    columns={columns}
                    renderColumn={column => props.renderCell(row, column, size)}
                  />
                </Fragment>
              ))}
            </Fragment>
          ))
        : rows.map(row => (
            <Fragment key={row.key}>
              <div style={headerStyle}>{row.label}</div>
              <VariantCells
                rowKey={row.key}
                columns={columns}
                renderColumn={column => props.renderCell(row, column)}
              />
            </Fragment>
          ))}
    </div>
  )
}

/**
 * Раскладка компонента по состояниям: строки — состояния, колонки — варианты,
 * каждая тема отдельным блоком. Проп sizes добавляет подстроки размера
 * внутри каждого состояния и колонку Size. Строки с ключами hover, active,
 * focus и focus-visible показываются без вмешательства в стори — их правила
 * берутся из css компонента. В строках с ключом loading анимации заморожены.
 */
export function StatesMatrix<
  R extends StatesMatrixItem,
  C extends StatesMatrixItem,
  S extends StatesMatrixItem = StatesMatrixItem
> ({
  themes = [ThemeKey.Light, ThemeKey.Dark],
  ...gridProps
}: StatesMatrixProps<R, C, S>) {
  useSimulatedPseudoStates(gridProps.rows.map(row => row.key))

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      <style>{FREEZE_LOADING_STYLE}</style>
      {/* #storybook-root равен ширине вьюпорта и обрезает широкую матрицу */}
      <style>{'#storybook-root { width: max-content; }'}</style>
      {themes.map(theme => (
        <div key={theme} className={theme === ThemeKey.Dark ? 'theme-dark' : 'theme-light'}>
          <ConfigProvider theme={theme}>
            <GlobalStyle />
            <div style={{
              padding: 24,
              borderRadius: 8,
              background: 'var(--bg--neutral--level_0)',
              border: '1px solid var(--border--neutral--medium)'
            }}
            >
              <h2 style={{ color: 'var(--fg--neutral--primary)' }}>
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
