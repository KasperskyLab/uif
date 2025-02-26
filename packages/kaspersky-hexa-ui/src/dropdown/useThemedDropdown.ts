import { useThemedComponent } from '@helpers/useThemedComponent'

import { DropdownColorConfig, DropdownProps, DropdownThemeProps, DropdownViewProps } from './types'

export const useThemedDropdown = (props: DropdownProps): DropdownViewProps => {
  const themedProps = useThemedComponent<DropdownProps, DropdownColorConfig, DropdownThemeProps>(props, {
    componentName: 'dropdown',
    defaultValues: {}
  })

  themedProps.cssConfig.popupMaxHeight = props.popupMaxHeight

  return themedProps
}
