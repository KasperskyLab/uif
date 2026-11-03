import { css } from 'styled-components'

export const prefixClass = 'hexa-ui-hexadecimal-view'

export const hexadecimalViewCss = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--color--neutral_350);
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .${prefixClass}-grid-row {
    width: 100%;
    display: grid;
    grid-template-columns: 8ch 45% 1fr;
    column-gap: 16px;
    position: absolute;
    
    & span {
      font-family: "Kaspersky Sans Mono";
    }

    .${prefixClass}-address {
      color: var(--fg--neutral--tertiary);
      text-transform: uppercase;
    }

    .${prefixClass}-symbols-row {
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template-columns: repeat(var(--bytes-per-row), 1fr);
      gap: 1ch;
      color: var(--fg--neutral--primary);
      text-transform: uppercase;
    }

    div.${prefixClass}-decoded-text {
      text-transform: none;
      white-space: pre;
      text-wrap: nowrap;
    }
  }

  .${prefixClass}-header-row {
    position: sticky !important;
    transform: translateY(0px);
    top: 0;
    left: 0;
    scrollbar-gutter: stable;
    overflow: auto;
    .${prefixClass}-text-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
    }
  }

  .${prefixClass}-header-row, .${prefixClass}-header-row .${prefixClass}-symbols-row {
    color: var(--fg--neutral--tertiary);
  }

  .${prefixClass}-view-table-virtual {
    width: 100%;
    height: 100%;
    scrollbar-gutter: stable;
    overflow-y: auto;

    .${prefixClass}-view-table {
      width: 100%;
      height: 100%;
      display: grid;
      position: relative;
      grid-template-columns: 8ch 45% 1fr;
      grid-auto-rows: min-content;
      column-gap: 16px;
    }
  }
`