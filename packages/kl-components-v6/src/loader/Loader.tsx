import * as React from 'react'
import { Spin as SpinAntd } from 'antd'
import styled from 'styled-components'

import { LoaderIcon as Icon } from './LoaderIcon'
import { iconCss, loaderCss } from './loaderCss'
import { ILoaderProps, ILoaderViewProps } from './types'
import { useThemedLoader } from './useThemedLoader'

const StyledSpin = styled(SpinAntd).withConfig({
  shouldForwardProp: prop => !['centered', 'cssConfig'].includes(prop)
})`${loaderCss}`

const StyledIcon = styled(Icon)`${iconCss}`

export const Loader: React.FC<ILoaderProps> = (rawProps) => {
  const props = useThemedLoader(rawProps)
  return <LoaderView {...props} />
}

export const LoaderView: React.FC<ILoaderViewProps> = ({
  spinning = true,
  klId,
  cssConfig,
  ...rest
}) => {
  return (
    <StyledSpin
      kl-id={klId}
      indicator={<StyledIcon color={cssConfig.color} />}
      spinning={spinning}
      cssConfig={cssConfig}
      {...rest}
    />
  )
}
