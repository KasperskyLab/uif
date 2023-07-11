import styled from 'styled-components'

export const TooltipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2px 0;
  
  span:first-child {
    margin-right: 4px;
  }
`

export const NewSectionsData = styled.div`
  .json-unknown-data {
    display: flex;
    gap: 5px;
    padding: 2px;
    margin: 5px 0;
    border-radius: 3px;
  }
  
  .json-unknown-data-index {
    min-width: 5ch;
    text-align: left;
  }
`

export const ColorItemRow = styled.div`
  display: flex;
  gap: 5px;
  padding: 2px 5px;
  margin: 5px 0;
  border-radius: 3px;

  &.json-color-removed {
    outline: 1px solid rgba(178, 26, 53, 1);
  }

  &.json-color-affected {
    outline: 1px solid rgba(249, 197, 89, 1);
  }

  &.json-color-new {
    outline: 1px solid rgba(29, 161, 137, 1);
  }

  .json-color-box {
    width: 30px;
    height: 20px;
    cursor: help;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.23);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  .json-color-index {
    min-width: 5ch;
    text-align: left;
  }

  .json-color-value {
    display: flex;
    gap: 5px;
  }

  .json-color-value-original {
    min-width: 10ch;
  }

  .json-color-name {
    min-width: 140px;
    display: flex;
    gap: 5px;
  }
`

export const MergingDataTable = styled.div`
  display: flex;
  flex-direction: column;
  
  .merging-table {
    display: flex;
    gap: 20px;
  }
  
  .merging-column {
    min-width: 400px;
  }

  .merging-section {
    border-bottom: 1px dashed rgba(171, 148, 241, 1);
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  .merging-static-colors {
    margin: 20px 0;
  }
  
  .static-color {
    display: flex;
    gap: 5px;
    padding: 0 5px;
  }
  
  .static-color-index {
    min-width: 5ch;
    text-align: left;
  }
  
  .merging-diff {
    min-height: 20px;
    margin: 5px 0;
  }

  .json-section {
    margin-bottom: 40px;
  }
`
