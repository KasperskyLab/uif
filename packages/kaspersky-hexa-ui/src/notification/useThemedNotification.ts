import { useThemedComponent } from '@helpers/useThemedComponent'

import { NotificationContainerProps, NotificationContainerViewProps, NotificationCssConfig, NotificationThemeProps } from './types'

export const useThemedNotification = (props: NotificationContainerProps): NotificationContainerViewProps => (
  useThemedComponent<NotificationContainerProps, NotificationCssConfig, NotificationThemeProps>(props, {
    componentName: 'notification',
    defaultValues: {}
  })
)
