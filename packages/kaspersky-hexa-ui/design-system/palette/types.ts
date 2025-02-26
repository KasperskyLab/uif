export type StaticPalette = {
  [key: string]: string
}

export type StaticPaletteProps = { source: StaticPalette }

export type Palette<T> = {
  [key: string]: T | Palette<T>
}

export type PaletteWithValues = Palette<{
  light: string,
  dark: string
}>

export type ColorToken = {
  value: string,
  alias: string
}

export type ThemedColorToken = {
  light: ColorToken,
  dark: ColorToken
}

export type PaletteWithAliases = Palette<ThemedColorToken>

export type ThemedPaletteProps = { source: PaletteWithValues }

export type KeyToLevelMap = Record<number, { textType: string, margin: number }>
