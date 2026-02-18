import { COMPONENTS_CONFIG } from '@design-system/css-configs/components'
import { ComponentsConfig } from '@design-system/css-configs/types'
import { Theme } from '@design-system/types'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
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

type BaseComponentProps = BaseComponentThemeProps & {
  className?: string
}

type Config<ComponentThemeProps> = {
  componentName: keyof ComponentsConfig['components'],
  defaultValues: Required<Omit<ComponentThemeProps, 'theme'>>,
  propsToDrill?: (keyof ComponentThemeProps)[]
}

export const useComponentCssConfig = <ComponentProps extends BaseComponentProps, CssConfigType, ComponentThemeProps extends BaseComponentThemeProps>(
  rawProps: ComponentProps,
  config: Config<ComponentThemeProps>
): ComponentProps & { cssConfig: CssConfigType } => {
  const props = smartMerge.objects({ skipUndefined: true })(config.defaultValues, rawProps)

  const componentThemeConfig = COMPONENTS_CONFIG.components[config.componentName] as ComponentThemeConfig

  const sizeConfig = useMemo(() => (
    props.size && componentThemeConfig.sizes
      ? componentThemeConfig.sizes[props.size]
      : {}
  ), [componentThemeConfig.sizes, props.size])

  const colorConfig = useMemo(() => (
    props.mode && componentThemeConfig.colors
      ? componentThemeConfig.colors[props.mode]
      : componentThemeConfig.colors
  ), [componentThemeConfig.colors, props.mode])

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

  return { ...propsDrilled, className: getClassNameWithTheme(props), cssConfig }
}
