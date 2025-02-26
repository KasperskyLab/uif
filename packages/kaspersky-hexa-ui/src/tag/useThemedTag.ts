import { useThemedComponent } from '@helpers/useThemedComponent'

import { TagCssConfig, TagProps, TagThemeProps, TagViewProps } from './types'

export const useThemedTag = (props: TagProps): TagViewProps => (
  useThemedComponent<TagProps, TagCssConfig, TagThemeProps>(props, {
    componentName: 'tag',
    defaultValues: { mode: 'neutral', size: 'medium' },
    propsToDrill: ['mode', 'size']
  })
)
