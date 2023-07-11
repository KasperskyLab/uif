
import { useMemo } from 'react'
import { useTheme, useThemedColors } from '../../design-system/theme/hooks'
import { upload } from '../../design-system/theme/themes/light/upload'

export const useUploaderColors = () => {
  const theme = useTheme()
  const colors = useThemedColors(theme.key)
  const cssConfig = useMemo(() => upload({ colors }), [theme.key])
  return cssConfig
}
