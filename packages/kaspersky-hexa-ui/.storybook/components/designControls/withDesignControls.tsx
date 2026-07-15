import { Meta } from '@storybook/react-vite'

interface withDesignControlsArguments<ComponentProps> {
  componentName: string,
  meta: Meta<ComponentProps>
  designArgs?: Partial<Record<keyof ComponentProps, unknown>>
}

export function withDesignControls<ComponentProps> ({
  meta
}: withDesignControlsArguments<ComponentProps>): Meta<ComponentProps> {
  const declaredOrder = Object.keys(meta.argTypes || {})

  return {
    ...meta,
    parameters: {
      ...meta.parameters,
      controls: {
        ...meta.parameters?.controls,
        sort: buildControlsSort(declaredOrder)
      }
    }
  }
}

function buildControlsSort (order: string[]) {
  const orderIndex = new Map(order.map((key, index) => [key, index]))

  return (a: any, b: any) => {
    const nameA = String(a?.[0] ?? '')
    const nameB = String(b?.[0] ?? '')
    const rankA = orderIndex.get(nameA) ?? Number.MAX_SAFE_INTEGER
    const rankB = orderIndex.get(nameB) ?? Number.MAX_SAFE_INTEGER

    if (rankA !== rankB) {
      return rankA - rankB
    }

    return nameA.localeCompare(nameB)
  }
}
