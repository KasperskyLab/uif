import { css } from 'styled-components'

const ExpandCSS = css`
  .hexa-ui-expand-container {
    line-height: 0px
  }

  .hexa-ui-expand-button {
    margin-top: 4px;
  }

  &.hexa-ui-expand-collapsed .hexa-ui-expand-container {
    overflow: hidden;
  }
`
export default ExpandCSS
