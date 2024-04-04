import React, { FC } from 'react'
import styled from 'styled-components'
import { StoryObj } from '@storybook/react'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { H4, Text } from '@src/typography'

export type DesignSizingComponentProps = {
  obj: typeof BORDER_RADIUS | typeof SPACES,
  name: 'SPACES' | 'BORDER_RADIUS'
}

type StyledProps = keyof typeof SPACES | keyof typeof BORDER_RADIUS

const StyledSizeExample = styled.div<{size: StyledProps}>`
  display: flex;
  .ds-info {
    font-size: ${({ theme: { spaces } }) => spaces[4]}px;
    color: ${({ theme: { colors } }) => colors.mainInteractPrimary};
    width: 200px;
  }

  .ds-example {
    width: 300px;
    height: ${({ size, theme: { spaces } }) => `${spaces[size]}px` || '4px'};
    background: ${({ theme: { colors } }) => colors.defaultPalette.marina500};
    margin: 10px 0;
  }
`

const StyledSizing = styled.div`
  display: flex;
  flex-direction: column;
  
  .ds-container {
    display: flex;
    flex-wrap: wrap;
  }
`

const DesignSizingComponent: FC<DesignSizingComponentProps> = ({
  obj,
  name
}: DesignSizingComponentProps) => {
  return (
    <StyledSizing>
      <H4 color={'marina600'}>{name}</H4>
      <div className='ds-constainer'>
        {Object.entries(obj).map(([key, value]) => (
          <StyledSizeExample size={key as unknown as StyledProps} key={key}>
            <div className='ds-info'>
              <Text level='BTR3' color='marina600'>{key} Unit - {value}px</Text>
            </div>
            <div className='ds-example'/>
          </StyledSizeExample>
        ))}
      </div>
    </StyledSizing>
  )
}

const meta = {
  title: 'Design/Sizing & Spacing',
  component: DesignSizingComponent
}
export default meta

type Story = StoryObj<DesignSizingComponentProps>

export const Spaces: Story = {
  args: {
    obj: SPACES,
    name: 'SPACES'
  }
}

export const BorderRadius: Story = {
  args: {
    obj: BORDER_RADIUS,
    name: 'BORDER_RADIUS'
  }
}
