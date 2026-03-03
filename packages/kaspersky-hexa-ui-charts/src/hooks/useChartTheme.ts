import { cloneDeep, merge, mergeWith } from 'lodash'
import { useMemo } from 'react'
import { BlockProps, VictoryLabelStyleObject, VictoryTheme, VictoryThemeDefinition } from 'victory'

import { ThemeConfig, useTheme } from '@kaspersky/hexa-ui/design-system'
import { widgetColorsShortcuts } from '@kaspersky/hexa-ui-core/colors/js'

import { DEFAULT_CHART_PADDING } from '../constants'
import { getFontFamily } from '../helpers/getFontFamily'
import { getCommonPalette, getPiePalette, getSpeedometerPalette } from '../helpers/getPalette'

export type CustomTheme = Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
};

export function useChartTheme (colors?: string[], chartTheme?: CustomTheme): CustomTheme {
  const theme = useTheme()

  return useMemo(() => {
    return getChartTheme(theme, colors, chartTheme)
  }, [theme, colors, chartTheme])
}

export function getChartTheme (theme: ThemeConfig, colors?: string[], chartTheme?: CustomTheme): CustomTheme {
  const commonColorScale = colors || getCommonPalette()
  return merge(
    mergeWith(
      cloneDeep(VictoryTheme.grayscale),
      {
        labels: {
          style: {
            fontSize: 18,
            fontFamily: getFontFamily(theme)
          }
        },
        area: {
          colorScale: commonColorScale,
          animate: false,
          style: {
            labels: {
              fontSize: 12,
              fontFamily: getFontFamily(theme)
            }
          }
        },
        axis: {
          animate: false,
          style: {
            tickLabels: {
              fontFamily: getFontFamily(theme),
              fontSize: 12,
              fill: 'var(--axis--text--enabled)'
            },
            labels: {
              fontSize: 12,
              fontFamily: getFontFamily(theme)
            },
            axis: {
              strokeWidth: 1,
              stroke: 'var(--axis--border--enabled)',
              shapeRendering: 'crispedges'
            }
          }
        },
        dependentAxis: {
          animate: false,
          style: merge(cloneDeep(VictoryTheme.grayscale.axis?.style), {
            grid: { stroke: 'var(--axis--border--enabled)', strokeWidth: 1, strokeDasharray: '5, 5' },
            axis: {
              strokeWidth: 0
            },
            tickLabels: {
              fill: 'var(--axis--text--enabled)'
            }
          })
        },
        independentAxis: {
          animate: false,
          style: merge(cloneDeep(VictoryTheme.grayscale.axis?.style), {
            axis: {
              stroke: 'var(--axis--border--enabled)',
              strokeWidth: 1
            },
            grid: { strokeWidth: 0 },
            tickLabels: {
              fontFamily: getFontFamily(theme),
              fontSize: 12,
              fill: 'var(--axis--text--enabled)'
            }
          })
        },
        tooltip: {
          flyoutStyle: {
            strokeWidth: 0,
            fill: theme.colors.bg['base-invert']
          },
          style: {
            fontFamily: getFontFamily(theme),
            fontSize: 12,
            fill: theme.colors['text-icons-elements']['primary-invert']
          }
        },
        pie: {
          animate: false,
          colorScale: colors || getPiePalette(),
          padding: { top: 10, right: 10, bottom: 10, left: 10 },
          style: {
            data: {
              stroke: theme.colors.bg.base
            }
          }
        },
        bar: {
          animate: false,
          colorScale: commonColorScale,
          padding: DEFAULT_CHART_PADDING
        },
        speedometer: {
          colorScale: colors || getSpeedometerPalette(),
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          style: {
            tick: {
              fill: theme.colors.text
            },
            tickLabel: {
              fill: theme.colors.text,
              fontSize: 10,
              fontWeight: 500
            },
            pointer: {
              fill: 'var(--axis--text--enabled)'
            }
          }
        },
        line: {
          animate: false,
          colorScale: commonColorScale,
          metricLineColor: theme.colors.defaultPalette.red600,
          padding: DEFAULT_CHART_PADDING
        },
        stack: {
          animate: false,
          colorScale: commonColorScale
        },
        group: {
          animate: false,
          colorScale: commonColorScale
        },
        chart: {
          animate: false,
          colorScale: commonColorScale,
          padding: DEFAULT_CHART_PADDING
        },
        voronoi: {
          animate: false,
          style: {
            flyout: {
              strokeWidth: 0,
              fill: theme.colors.bg.alternative2
            }
          }
        }
      } as CustomTheme,
      (targetObj, sourceObj) => {
        if (sourceObj === commonColorScale) {
          return sourceObj
        }
      }
    ),
    chartTheme
  )
}
