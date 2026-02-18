import styled from 'styled-components'

export const ScreensListContainer =
  styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(${({ columnsNumber = 5 }: ScreensListContainerParams) => columnsNumber}, min-content);
  `

type ScreensListContainerParams = {
  columnsNumber?: number
}
