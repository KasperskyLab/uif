import * as React from 'react'
import { StoryLayout } from '../../.storybook/StoryComponents'
import styled from 'styled-components'
import * as Icons from '../../../../kl-icons/src'

const StyleWrapper = styled(StoryLayout)`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 120px;
    margin: 4px 4px 8px 4px;
  }
  .icon-name {
    font-size: 10px;
  }
  .icon-wrap {
    display: inline-block;
    width: 100%;
  }
`

const DesignIcons = () => {
  return (
    <StyleWrapper>
      {Object.entries(Icons).map(([iconName, IconsComponent]) => {
        return (
          <div className='wrapper'>
            <IconsComponent className='icon-wrap' />
            <span className='icon-name'>{iconName}</span>
          </div>
        )
      })}
    </StyleWrapper>
  )
}

const ExampleIcon = () => {
  return (
    <Icons.AccountLogin/>
  )
}

const ExampleIconWithSize = () => {
  return (
    <Icons.AccountLogin size='medium'/>
  )
}

const ExampleIconWithSizeColor = () => {
  return (
    <Icons.AccountLogin size='medium' color='green'/>
  )
}

export { DesignIcons, ExampleIcon, ExampleIconWithSize, ExampleIconWithSizeColor  }