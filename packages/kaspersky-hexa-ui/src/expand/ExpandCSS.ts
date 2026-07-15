import { css } from 'styled-components'

const ExpandCSS = css`
  .hexa-ui-expand-container {
    display: flex;
    row-gap: 0;
  }

  .hexa-ui-expand-button {
    margin-top: 4px;
  }

  &.hexa-ui-expand-collapsed .hexa-ui-expand-container {
    overflow: hidden;
  }
`
export default ExpandCSS
