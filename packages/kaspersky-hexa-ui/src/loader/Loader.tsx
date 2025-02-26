import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Spin as SpinAntd } from 'antd'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { iconCss, loaderCss } from './loaderCss'
import { LoaderIcon as Icon } from './LoaderIcon'
import { LoaderProps, LoaderViewProps } from './types'
import { useThemedLoader } from './useThemedLoader'

const StyledSpin = styled(SpinAntd).withConfig({
  shouldForwardProp: (prop) => !['centered', 'cssConfig'].includes(prop)
})`
  ${loaderCss}
`

const StyledIcon = styled(Icon)`
  ${iconCss}
`

export const Loader: FC<LoaderProps> = (rawProps: LoaderProps) => {
  const themedProps = useThemedLoader(rawProps)
  const props = useTestAttribute(themedProps)
  return <LoaderView {...props} />
}

const LoaderView: FC<LoaderViewProps> = ({
  spinning = true,
  cssConfig,
  className,
  centered,
  testAttributes,
  ...rest
}: LoaderViewProps) => {
  return (
    <StyledSpin
      className={cn(className, { 'ant-spinner-centered': centered })}
      centered={centered}
      indicator={<StyledIcon color={cssConfig.color} />}
      spinning={spinning}
      cssConfig={cssConfig}
      {...testAttributes}
      {...rest}
    />
  )
}
