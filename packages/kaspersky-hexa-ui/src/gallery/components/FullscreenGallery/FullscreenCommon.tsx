import { ActionButton } from '@src/action-button'
import styled from 'styled-components'

export const FullscreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const PreviewsColumn = styled.div`
  width: 222px;
  height: 100vh;
`

export const PreviewsColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`

export const CloseButton = styled(ActionButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`
