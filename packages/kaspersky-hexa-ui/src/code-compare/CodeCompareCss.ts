import { Loader } from '@src/loader'
import { Text } from '@src/typography/text'
import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 280px) max-content minmax(0, 280px) 1fr min-content;
  gap: 4px;
  align-items: center;
  margin-bottom: 16px;
`

export const ChangeIcon = styled(Text)`
  width: 24px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoaderWithTip = styled(Loader)`
  ${props => props.tip ? 'min-height: 200px;' : ''}
`
