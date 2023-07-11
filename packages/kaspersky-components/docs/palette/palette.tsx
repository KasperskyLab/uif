import React from 'react'
import styled from 'styled-components'
import { shortcuts } from '../../design-system/tokens'

const ColorBox = styled.div`
  margin: 0 10px;
  color: #787878;

  .ds-colorBox {
    background-color: ${props => props.color};
    ${(props: any) => props.outlineColor ? `outline: 1px solid ${props.outlineColor}` : ''};
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

export const Palette = ({ source }: Record<any, any>) => {
  return <Container>{
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
          <ColorBox color={Object.values(value as Record<any, any>)[4].value}>
            {key}
            <div className='ds-colorBox'></div>
          </ColorBox>
          {
            Object.entries(value as Record<any, any>).map(([key, value]) => {
              const { value: color } = value
              return <ColorBox color={color} key={key}>
                {key}
                <div className='ds-colorBox'></div>
              </ColorBox>
            })
          }
        </ColorGroup>
    })
  }</Container>
}

export const ColorsSet = ({ sectionName }: Record<string, string>) => {
  return <Container>{
    Object.entries(shortcuts).map(([theme, sections]): Record<string, any> => {
      const {
        elements: { seporator },
        bg: { base }
      } = shortcuts[theme]
      return <>
        <div className='ds-theme-name'>{theme}</div>
        <ColorGroup color={base}>
          { Object.entries(sections).filter(([section]) => {
            return section === sectionName
          }).map(([, tokens]): Record<string, any>[] => {
            return Object.entries(tokens).map(([token, color]) => {
              return <ColorBox color={color} outlineColor={color === base ? seporator : false}>
                {token}
                <div className='ds-colorBox'></div>
              </ColorBox>
            })
          })}
        </ColorGroup>
      </>
    })
  }</Container>
}
