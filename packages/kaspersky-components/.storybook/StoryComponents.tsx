import { HTMLAttributes } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../design-system/global-style'
import { Theme, ThemeKey } from '../design-system/types'
import { useTheme } from '../design-system/theme/hooks'

const GlobalStyleProxy: any = GlobalStyle
const Container = styled.div<HTMLAttributes<HTMLDivElement>>(
  (props: { theme: ThemeKey }) => ({
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '1.5rem',
    background: props.theme === ThemeKey.Light ? '#FFFFFF' : '#0D0D15',
    '& > div > h3': {
      color: props.theme !== ThemeKey.Light ? '#FFFFFF' : '#0D0D15'
    }
  })
)

export const StoryLayout: React.FC<
  HTMLAttributes<HTMLDivElement> & { theme?: ThemeKey | Theme }
> = (props) => {

  const theme = useTheme()
  return (
    <>
      <GlobalStyleProxy />
      <Container theme={props.theme || theme.key} {...props} />
    </>
  )
}

export const StoryWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const StoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`
