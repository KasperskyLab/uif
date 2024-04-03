import { TagProps, TagViewProps, TagCssConfig, TagThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTag = (props: TagProps): TagViewProps => (
  useThemedComponent<TagProps, TagCssConfig, TagThemeProps>(props, {
    componentName: 'tag',
    defaultValues: { mode: 'neutral', size: 'medium' },
    propsToDrill: ['mode', 'size']
  })
)
