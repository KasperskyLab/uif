import { DropdownProps, DropdownViewProps, DropdownThemeProps, DropdownColorConfig } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedDropdown = (props: DropdownProps): DropdownViewProps => (
  useThemedComponent<DropdownProps, DropdownColorConfig, DropdownThemeProps>(props, {
    componentName: 'dropdown',
    defaultValues: {}
  })
)
