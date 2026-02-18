import { css } from 'styled-components'

export const prefixClass = 'hexa-ui-page-header'

export const pageHeaderCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 24px;

  .${prefixClass}-content {
    display: flex;
    justify-content: space-between;

    .${prefixClass}-content-left {
      display: flex;
      gap: 8px;

      .${prefixClass}-content-left-main {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .${prefixClass}-content-left-main-title {
          display: flex;
          gap: 8px;

          .${prefixClass}-content-left-main-title-tags {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .${prefixClass}-content-left-before, .${prefixClass}-content-right {
      display: flex;
      align-items: center;
      height: 32px;
    }
  }
`
