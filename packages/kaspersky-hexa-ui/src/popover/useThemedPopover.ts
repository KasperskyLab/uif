import { useThemedComponent } from '@helpers/useThemedComponent'
import { useMemo } from 'react'

import { PopoverCssConfig, PopoverProps, PopoverThemeProps, PopoverViewProps } from './types'

export const useThemedPopover = (props: PopoverProps): PopoverViewProps => {
  const { cssConfig, ...rest } = useThemedComponent<PopoverProps, PopoverCssConfig, PopoverThemeProps>(props, {
    componentName: 'popover',
    defaultValues: {}
  })

  const newCssConfig = useMemo(
    () => ({ ...cssConfig, width: props.width, height: props.height }),
    [cssConfig, props.width, props.height]
  )

  return { ...rest, cssConfig: newCssConfig }
}
