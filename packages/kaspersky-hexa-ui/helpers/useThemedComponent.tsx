import { useTheme } from '@design-system/theme/hooks'
import { Theme, ThemeConfig } from '@design-system/types'
import smartMerge from '@helpers/smartMerge'
import { useMemo } from 'react'

type ComponentThemeConfig = {
  colors: any,
  sizes: any
}

type BaseComponentThemeProps = {
  theme?: Theme,
  size?: string,
  mode?: string
}

type Config<ComponentThemeProps> = {
  componentName: keyof ThemeConfig['components'],
  defaultValues: Required<Omit<ComponentThemeProps, 'theme'>>,
  propsToDrill?: (keyof ComponentThemeProps)[]
}

const useThemedComponent = <ComponentProps extends ComponentThemeProps, CssConfigType, ComponentThemeProps extends BaseComponentThemeProps>(
  rawProps: ComponentProps,
  config: Config<ComponentThemeProps>
): ComponentProps & { cssConfig: CssConfigType } => {
  const props = smartMerge.objects({ skipUndefined: true })(config.defaultValues, rawProps)

  const theme = useTheme({ theme: props.theme })

  const componentThemeConfig = theme.components[config.componentName] as ComponentThemeConfig

  const sizeConfig = useMemo(() => {
    if (props.size && componentThemeConfig.sizes) {
      return componentThemeConfig.sizes[props.size]
    }

    return {}
  }, [componentThemeConfig.sizes, props.size])

  const colorConfig = useMemo(() => {
    if (props.mode && componentThemeConfig.colors) {
      return componentThemeConfig.colors[props.mode]
    }

    return componentThemeConfig.colors
  }, [componentThemeConfig.colors, props.mode])

  const cssConfig = useMemo<CssConfigType>(() => ({
    ...sizeConfig,
    ...colorConfig
  }), [sizeConfig, colorConfig])

  const propsToDrill = config.propsToDrill || []
  const propsDrilled: ComponentProps = {
    ...props,
    theme: propsToDrill.includes('theme') ? props.theme : undefined,
    size: propsToDrill.includes('size') ? props.size : undefined,
    mode: propsToDrill.includes('mode') ? props.mode : undefined
  }
  return { ...propsDrilled, cssConfig }
}

export { useThemedComponent }
