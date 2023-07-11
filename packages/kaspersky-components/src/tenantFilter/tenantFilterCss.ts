import styled, { css } from 'styled-components'

export const tenantFilterTreeCss = css`
  overflow-y: hidden;
  .ant-tree {
    background: #151515;
  }
  .ant-tree-list-holder-inner {
    background: #151515;
    color: white;
  }
  .ant-tree-switcher {
    background: #151515;
  }
`

export const FilterPanel = styled.div`
  background: #151515;
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`
export const Footer = styled.div`
  margin-top: 15px;
  text-align: center;
`
export const TitleBox = styled.div`
`
export const CounterIconBox = styled.div`
  position: relative;
  right: 20px;
`
export const CounterBox = styled.div``
export const SearchBox = styled.div`
  margin-bottom: 35px;
`
export const TreeBox = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`
export const SearchedString = styled.span`
  background: rgb(0, 96, 174);
`
