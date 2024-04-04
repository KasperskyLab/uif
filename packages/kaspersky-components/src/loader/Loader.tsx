import React, { FC } from 'react'
import { Spin as SpinAntd } from 'antd'
import styled from 'styled-components'
import cn from 'classnames'
import { LoaderIcon as Icon } from './LoaderIcon'
import { iconCss, loaderCss } from './loaderCss'
import { LoaderProps, LoaderViewProps } from './types'
import { useThemedLoader } from './useThemedLoader'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

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

export const LoaderView: FC<LoaderViewProps> = ({
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
