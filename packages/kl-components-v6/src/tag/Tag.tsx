import React from 'react'
import { Tag as AntdTag } from 'antd'
import { TagCssConfig, TagProps } from './types'
import { useThemedTag } from './useThemeTag'
import styled from 'styled-components'
import { tagCss } from './tagCss'
import { Icon } from '../icon'

const StyledTag = styled(AntdTag).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
 ${tagCss}
`

export const Tag = (rawProps: TagProps): JSX.Element => {
  const props = useThemedTag(rawProps)
  return <TagView {...props} />
}

export const TagView: React.FC<Pick<TagProps, 'klId' | 'icon' | 'theme' | 'label'> & {
  cssConfig: TagCssConfig
}> = ({
  klId,
  children,
  theme: themeProps,
  icon,
  cssConfig,
  label,
  ...rest
}) => {
  return (
    <StyledTag
      onMouseDown={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      kl-id={klId}
      cssConfig={cssConfig}
      {...rest}
    >
      {icon && <Icon name={icon} size='small' color={cssConfig.iconColor} klId={'tag-icon'}/>}
      <span className='kl-components-tag-text'>{children || label}</span>
    </StyledTag>
  )
}

export default Tag
