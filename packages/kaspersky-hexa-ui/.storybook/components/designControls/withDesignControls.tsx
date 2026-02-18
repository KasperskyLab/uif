import { Components, designControlsConfig } from '@helpers/resolveDesignControls'
import { Meta } from '@storybook/react-webpack5'
import merge from 'lodash/merge'

interface withDesignControlsArguments<ComponentProps> {
  componentName: Components['type'],
  meta: Meta<ComponentProps>,
  designArgs?: Partial<Record<keyof ComponentProps, unknown>>
}

export function withDesignControls<ComponentProps> ({
  componentName,
  meta,
  designArgs = {}
}: withDesignControlsArguments<ComponentProps>): Meta<ComponentProps> {
  const showDesignControls = localStorage.getItem('showDesignControls') === 'true'

  if (showDesignControls) {
    const designControls = designControlsConfig[componentName]

    const keys = Object.keys(designControls)

    return {
      ...meta,
      argTypes: merge(meta.argTypes || {}, designControls),
      args: sortObjectByKeyOrder(keys, merge(meta.args || {}, designArgs)),
      parameters: {
        ...meta.parameters,
        controls: {
          ...meta.parameters?.controls,
          include: keys,
          sort: 'none'
        }
      }
    }
  }

  return {
    ...meta,
    parameters: {
      ...meta.parameters,
      controls: {
        ...meta.parameters?.controls,
        sort: 'alpha'
      }
    }
  }
}

function sortObjectByKeyOrder<T extends Record<string, unknown>> (order: string[], obj: T): T {
  const otherKeys = Object.keys(obj).filter(x => !order.includes(x))
  const out: any = {}

  for (const key of [...order, ...otherKeys]) {
    out[key] = obj[key]
  }

  return out as T
}
