export const dynamicHexaUIGlobalStyles = `
    .ant-select[data-component-version="v6"] input[type="search"],
    .ant-picker[data-component-version="v6"] input[type="search"],
    .ant-input[data-component-version="v6"].kl-v6-textarea,
    .ant-input-number [data-component-version="v6"].ant-input-number-input-wrap {
      height: inherit;
    }

    .ant-input-number input[data-component-version="v6"]:focus,
    .ant-input-number input[data-component-version="v6"][type="search"]:focus,
    .ant-input-number input[data-component-version="v6"][type="datetime-local"]:focus,
    .ant-input-number input[data-component-version="v6"][type="email"]:focus,
    .ant-input-number input[data-component-version="v6"][type="file"]:focus,
    .ant-input-number input[data-component-version="v6"][type="number"]:focus,
    .ant-input-number input[data-component-version="v6"][type="password"]:focus,
    .ant-input-number input[data-component-version="v6"][type="tel"]:focus,
    .ant-input-number input[data-component-version="v6"][type="text"]:focus,
    .ant-input-number input[data-component-version="v6"][type="time"]:focus,
    .ant-input-number input[data-component-version="v6"][type="url"]:focus,
    .ant-select[data-component-version="v6"] input:focus,
    .ant-select[data-component-version="v6"] input[type="search"]:focus,
    .ant-select[data-component-version="v6"] input[type="datetime-local"]:focus,
    .ant-select[data-component-version="v6"] input[type="email"]:focus,
    .ant-select[data-component-version="v6"] input[type="file"]:focus,
    .ant-select[data-component-version="v6"] input[type="number"]:focus,
    .ant-select[data-component-version="v6"] input[type="password"]:focus,
    .ant-select[data-component-version="v6"] input[type="tel"]:focus,
    .ant-select[data-component-version="v6"] input[type="text"]:focus,
    .ant-select[data-component-version="v6"] input[type="time"]:focus,
    .ant-select[data-component-version="v6"] input[type="url"]:focus,
    .ant-picker[data-component-version="v6"] input:focus,
    .ant-picker[data-component-version="v6"] input[type="search"]:focus,
    .ant-picker[data-component-version="v6"] input[type="datetime-local"]:focus,
    .ant-picker[data-component-version="v6"] input[type="email"]:focus,
    .ant-picker[data-component-version="v6"] input[type="file"]:focus,
    .ant-picker[data-component-version="v6"] input[type="number"]:focus,
    .ant-picker[data-component-version="v6"] input[type="password"]:focus,
    .ant-picker[data-component-version="v6"] input[type="tel"]:focus,
    .ant-picker[data-component-version="v6"] input[type="text"]:focus,
    .ant-picker[data-component-version="v6"] input[type="time"]:focus,
    .ant-picker[data-component-version="v6"] input[type="url"]:focus {
      border: none;
      box-shadow: none;
      font-weight: initial;
    }

    .ant-input-number input.ant-input-number-input:not([type]) {
      border: none;
      background: transparent;
    }
    .ant-input-number input.ant-input-number-input:not([type]):focus {
      box-shadow: none;
      background: transparent;
    }

    .ant-picker input[data-component-version="v6"]:focus,
    .ant-picker input[data-component-version="v6"][type="search"]:focus,
    .ant-picker input[data-component-version="v6"][type="datetime-local"]:focus,
    .ant-picker input[data-component-version="v6"][type="email"]:focus,
    .ant-picker input[data-component-version="v6"][type="file"]:focus,
    .ant-picker input[data-component-version="v6"][type="number"]:focus,
    .ant-picker input[data-component-version="v6"][type="password"]:focus,
    .ant-picker input[data-component-version="v6"][type="tel"]:focus,
    .ant-picker input[data-component-version="v6"][type="text"]:focus,
    .ant-picker input[data-component-version="v6"][type="time"]:focus {
      border: none;
      box-shadow: none;
      font-weight: initial;
    }
    
    .ant-slide-up-enter,
    .ant-slide-up-appear {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-up-leave {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-up-enter.ant-slide-up-enter-active,
    .ant-slide-up-appear.ant-slide-up-appear-active {
      animation-name: antSlideUpIn;
      animation-play-state: running;
    }
    .ant-slide-up-leave.ant-slide-up-leave-active {
      animation-name: antSlideUpOut;
      animation-play-state: running;
      pointer-events: none;
    }
    .ant-slide-up-enter,
    .ant-slide-up-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .ant-slide-up-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    .ant-slide-down-enter,
    .ant-slide-down-appear {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-down-leave {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-down-enter.ant-slide-down-enter-active,
    .ant-slide-down-appear.ant-slide-down-appear-active {
      animation-name: antSlideDownIn;
      animation-play-state: running;
    }
    .ant-slide-down-leave.ant-slide-down-leave-active {
      animation-name: antSlideDownOut;
      animation-play-state: running;
      pointer-events: none;
    }
    .ant-slide-down-enter,
    .ant-slide-down-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .ant-slide-down-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    .ant-slide-left-enter,
    .ant-slide-left-appear {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-left-leave {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-left-enter.ant-slide-left-enter-active,
    .ant-slide-left-appear.ant-slide-left-appear-active {
      animation-name: antSlideLeftIn;
      animation-play-state: running;
    }
    .ant-slide-left-leave.ant-slide-left-leave-active {
      animation-name: antSlideLeftOut;
      animation-play-state: running;
      pointer-events: none;
    }
    .ant-slide-left-enter,
    .ant-slide-left-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .ant-slide-left-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    .ant-slide-right-enter,
    .ant-slide-right-appear {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-right-leave {
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-play-state: paused;
    }
    .ant-slide-right-enter.ant-slide-right-enter-active,
    .ant-slide-right-appear.ant-slide-right-appear-active {
      animation-name: antSlideRightIn;
      animation-play-state: running;
    }
    .ant-slide-right-leave.ant-slide-right-leave-active {
      animation-name: antSlideRightOut;
      animation-play-state: running;
      pointer-events: none;
    }
    .ant-slide-right-enter,
    .ant-slide-right-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    .ant-slide-right-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    @keyframes antSlideUpIn {
      0% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
    }
    @keyframes antSlideUpOut {
      0% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
    }
    @keyframes antSlideDownIn {
      0% {
        transform: scaleY(0.8);
        transform-origin: 100% 100%;
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }
    }
    @keyframes antSlideDownOut {
      0% {
        transform: scaleY(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }
      100% {
        transform: scaleY(0.8);
        transform-origin: 100% 100%;
        opacity: 0;
      }
    }
    @keyframes antSlideLeftIn {
      0% {
        transform: scaleX(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
      100% {
        transform: scaleX(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
    }
    @keyframes antSlideLeftOut {
      0% {
        transform: scaleX(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleX(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
    }
    @keyframes antSlideRightIn {
      0% {
        transform: scaleX(0.8);
        transform-origin: 100% 0%;
        opacity: 0;
      }
      100% {
        transform: scaleX(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
    }
    @keyframes antSlideRightOut {
      0% {
        transform: scaleX(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleX(0.8);
        transform-origin: 100% 0%;
        opacity: 0;
      }
    }
`
