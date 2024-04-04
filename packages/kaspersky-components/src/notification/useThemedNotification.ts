import { NotificationContainerProps, NotificationContainerViewProps, NotificationCssConfig, NotificationThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedNotification = (props: NotificationContainerProps): NotificationContainerViewProps => (
  useThemedComponent<NotificationContainerProps, NotificationCssConfig, NotificationThemeProps>({ ...props, mode: undefined }, {
    componentName: 'notification',
    defaultValues: {}
  })
)
