import React from 'react'

import { WidgetContainer } from './components/WidgetContainer/WidgetContainer'
import { WidgetContent } from './components/WidgetContent/WidgetContent'
import { WidgetProps, WidgetViewPadding } from './types'

export {
  type TWidgetViewState,
  type WidgetAdditionalElementProps,
  type WidgetProps,
  type WidgetViewI18n,
  WidgetViewState
} from './types'

export const WidgetView: React.FC<WidgetProps> = ({
  header,
  invalid,
  active,
  legend,
  legendPosition,
  chartFooter,
  state,
  lifecycle,
  errorResetKey,
  children,
  i18n,
  elementAfter,
  elementBottom,
  padding = WidgetViewPadding.LARGE
}) => {
  return (
    <WidgetContainer padding={padding} active={active} invalid={invalid}>
      <WidgetContent
        header={header}
        legend={legend}
        legendPosition={legendPosition}
        chartFooter={chartFooter}
        state={state}
        errorResetKey={errorResetKey}
        lifecycle={lifecycle}
        i18n={i18n}
        elementAfter={elementAfter}
        elementBottom={elementBottom}
      >
        {children}
      </WidgetContent>
    </WidgetContainer>
  )
}
