import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  AccordionCssConfig,
  AccordionPanelCssConfig,
  AccordionPanelProps,
  AccordionPanelThemeProps,
  AccordionPanelViewProps,
  AccordionProps,
  AccordionStyleConfig,
  AccordionTitleSize,
  AccordionViewProps
} from './types'

export const useThemedAccordion = (props: AccordionProps): AccordionViewProps => (
  useThemedComponent<AccordionProps, AccordionCssConfig, AccordionStyleConfig>(props, {
    componentName: 'accordion',
    defaultValues: {}
  })
)

type ToThemeProps<T> = Omit<T, 'titleSize'> & { size?: AccordionTitleSize }
export const useThemedAccordionPanel = ({
  titleSize = 'small',
  ...rest
}: AccordionPanelProps): AccordionPanelViewProps => (
  useThemedComponent<
    ToThemeProps<AccordionPanelProps>,
    AccordionPanelCssConfig,
    ToThemeProps<AccordionPanelThemeProps>
  >({ ...rest, size: titleSize }, {
    componentName: 'accordion',
    defaultValues: { size: 'small' }
  })
)
