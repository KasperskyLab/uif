import React, { FC } from 'react'
import styled from 'styled-components'
import { shortcuts } from '@design-system/tokens'
import { ThemeKey } from '@design-system/types'
import { Meta, StoryObj } from '@storybook/react'
import { staticpalette } from '@design-system/tokens/figma-colors-tokens.json'

/**
 * Components
 */
const ColorBox = styled.div<{ outlineColor?: any, color?: any }>`
  margin: 0 10px;
  color: #787878;

  .ds-colorBox {
    background-color: ${props => props.color};
    ${({ outlineColor }) => outlineColor ? `outline: 1px solid ${outlineColor}` : ''};
    width: 150px;
    height: 50px;
  }
`

const ColorGroup = styled.div`
  padding: 10px 10px 20px 10px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  display: block;

  .ds-theme-name {
    position: relative;
    color: #787878;
    margin-top: 10px;
    font-size: 8px;
  }
`

type PaletteProps = { source: Record<any, any> }
const Palette: FC<PaletteProps> = ({ source }: PaletteProps) => (
  <Container>
    {
      Object.entries(source).map(([key, value]) => {
        const { value: color, type = 'group' }: any = value
        return type === 'color'
          ? <ColorGroup key={key}>
            <ColorBox color={color} outlineColor={key === 'staticwhite' ? 'rgba(41,77,117,0.09)' : false}>
              {key}
              <div className='ds-colorBox'></div>
            </ColorBox>
          </ColorGroup>
          : <ColorGroup key={key}>
            <ColorBox
              color={(() => {
                const colorValue = Object.values(value)[4] as unknown as Record<any, any>
                return colorValue.value
              })()}
            >
              {key}
              <div className='ds-colorBox'></div>
            </ColorBox>
            {
              Object.entries(value).map(([key, value]: [any, any]) => (
                <ColorBox color={value.color} key={key}>
                  {key}
                  <div className='ds-colorBox'></div>
                </ColorBox>
              ))
            }
          </ColorGroup>
      })
    }
  </Container>
)

type ColorsSetProps = { sectionName: string }
const ColorsSet: FC<ColorsSetProps> = ({ sectionName }: ColorsSetProps) => (
  <Container>
    {
      Object.entries(shortcuts).map(([theme, sections]) => {
        const {
          elements: { separator },
          bg: { base }
        } = shortcuts[theme as ThemeKey]
        return <>
          <div className='ds-theme-name'>
            {theme}
          </div>
          <ColorGroup color={base}>
            {
              Object.entries(sections)
                .filter(([section]) => section === sectionName)
                .map(([, tokens]) => (
                  Object.entries(tokens).map(([token, color]) => (
                    <ColorBox
                      color={color}
                      outlineColor={color === base ? separator : false}
                      key={color}
                    >
                      {token}
                      <div className='ds-colorBox'></div>
                    </ColorBox>
                  ))
                ))
            }
          </ColorGroup>
        </>
      })
    }
  </Container>
)

/**
 * Storybook
 */
const meta: Meta = {
  title: 'Design/Colors',
  component: ColorsSet
}
export default meta

type Story = StoryObj<ColorsSetProps>
type StoryPalette = StoryObj<PaletteProps>

const genStoryObj = (name: string) => ({
  args: {
    sectionName: name
  }
})

export const States: Story = genStoryObj('statestatuses')

export const Statuses: Story = genStoryObj('criticalitystatuses')

export const Backgrounds: Story = genStoryObj('bg')

export const Text: Story = genStoryObj('text-icons-elements')

export const Elements: Story = genStoryObj('elements')

export const Tags: Story = genStoryObj('tags')

export const Surface: Story = genStoryObj('surface')

export const FullPalette: StoryPalette = {
  args: { source: staticpalette },
  render: args => <Palette {...args}/>
}
