import { useMemo } from 'react'
import { PopoverProps, PopoverViewProps, PopoverCssConfig, PopoverThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

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
