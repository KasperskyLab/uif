/* eslint-disable security/detect-object-injection */
import { ThemeKey } from '@design-system/types'
import { Text as BaseText } from '@src/typography'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import { colors } from '@kaspersky/hexa-ui-core/colors/js'

import { hexToRGBA } from './hexToRGBA'
import {
  KeyToLevelMap,
  PaletteWithAliases,
  PaletteWithValues,
  StaticPalette as StaticPaletteType,
  StaticPaletteProps,
  ThemedColorToken,
  ThemedPaletteProps
} from './types'

const getTokenByColorValue = <T, >(colors: Record<string, T>, value: T) =>
  Object.keys(colors).find(token => colors[token] === value && token.includes('_'))

const ColorItem = styled.div<{ margin?: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${props => props.margin && `margin-left: ${props.margin}px;`};
`

const Text = styled(BaseText)<{ width?: number, margin?: number }>`
  ${props => props.width && `width: ${props.width}px;`};
  ${props => props.margin && `margin-left: ${props.margin}px;`};
`

const ColorItemRow = styled.div<{ theme?: ThemeKey, color?: string }>`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;

  .ds-colorBox {
    background-color: ${props => props.color};
    width: 48px;
    height: 32px;
  }

  ${props => props.theme === ThemeKey.Dark && `
    background-color: ${colors.coldgrey_900};
    color: ${colors.neutral_0};
  `}
`

const ColorBox = styled.div<{ color?: string }>`
  margin: 0 8px;

  .ds-colorBox {
    background-color: ${props => props.color};
    width: 150px;
    height: 50px;
  }
`

const ColorGroup = styled.div`
  padding: 10px 10px 20px 10px;
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 1200px;
`

const groupColors = (colorPalette: StaticPaletteType): { [key: string]: StaticPaletteType } => {
  const groupedColors: { [key: string]: StaticPaletteType } = {}

  Object.keys(colorPalette).forEach((key) => {
    const groupKey = key.split('_').slice(0, -1).join('_')
    if (!groupedColors[groupKey]) {
      groupedColors[groupKey] = {}
    }
    groupedColors[groupKey][key] = colorPalette[key]
  })

  return groupedColors
}

export const StaticPalette: React.FC<StaticPaletteProps> = ({ source }) => {
  const groupedColors = groupColors(source)

  return (
    <Container>
      {Object.entries(groupedColors).map(([groupKey, groupValue]) => (
        <ColorGroup key={groupKey}>
          {Object.entries(groupValue).map(([colorKey, colorValue]) =>
            <ColorBox color={colorValue} key={colorKey}>
              {colorKey}
              <div className="ds-colorBox" />
            </ColorBox>
          )}
        </ColorGroup>
      ))}
    </Container>
  )
}

const KEY_TO_LEVEL_MAP: KeyToLevelMap = {
  1: {
    textType: 'H5',
    margin: 0
  },
  2: {
    textType: 'H6',
    margin: 8
  },
  3: {
    textType: 'BTM2',
    margin: 16
  },
  4: {
    textType: 'BTM3',
    margin: 32
  },
  5: {
    textType: 'BTM4',
    margin: 64
  }
}

export const ThemedPalette: React.FC<ThemedPaletteProps> = ({ source }) => {
  const withTokensAliases = useMemo(() => {
    const addAliases = (obj: PaletteWithValues, level = 1): PaletteWithAliases => {
      return Object.keys(obj).reduce((acc, key) => {
        if (typeof obj[key] === 'object' && !('dark' in obj[key])) {
          acc[key] = addAliases(obj[key] as PaletteWithValues, level + 1)
        } else {
          acc[key] = {
            light: {
              value: obj[key].light,
              alias: getTokenByColorValue(colors, obj[key].light)
            },
            dark: {
              value: obj[key].dark,
              alias: getTokenByColorValue(colors, obj[key].dark)
            }
          } as ThemedColorToken
        }
        return acc
      }, {} as PaletteWithAliases)
    }

    return addAliases(source)
  }, [source])

  const displayPalette = (obj: PaletteWithAliases, level = 1) =>
    Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'object' && 'dark' in obj[key] && 'light' in obj[key]) {
        const color = obj[key] as ThemedColorToken
        return (
          <ColorItem margin={KEY_TO_LEVEL_MAP[level].margin} key={key}>
            <Text width={128}>{key}</Text>
            <ColorItemRow color={color.light.value}>
              <div className="ds-colorBox" />
              <Text width={120}>{color.light.alias}</Text>
              <Text width={90}>{color.light.value}</Text>
              <Text width={160}>{hexToRGBA(color.light.value)}</Text>
            </ColorItemRow>
            <ColorItemRow color={color.dark.value} theme={ThemeKey.Dark}>
              <div className="ds-colorBox" />
              <Text width={120} theme={ThemeKey.Dark}>{color.dark.alias}</Text>
              <Text width={90} theme={ThemeKey.Dark}>{color.dark.value}</Text>
              <Text width={160} theme={ThemeKey.Dark}>{hexToRGBA(color.dark.value)}</Text>
            </ColorItemRow>
          </ColorItem>
        )
      } else {
        return (
          <div key={key}>
            <Text type={KEY_TO_LEVEL_MAP[level].textType || 'BTM4'} margin={KEY_TO_LEVEL_MAP[level].margin}>
              {key}
              {displayPalette(obj[key] as PaletteWithAliases, level + 1)}
            </Text>
          </div>
        )
      }
    })

  return <Container>{displayPalette(withTokensAliases)}</Container>
}
