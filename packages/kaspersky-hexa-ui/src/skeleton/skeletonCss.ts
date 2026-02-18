import { css } from 'styled-components'

export const skeletonCss = css`
  display: block;
  background: var(--skeleton--bg);
  height: 24px;
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &.small {
    height: 20px;
    max-width: 320px;
  }

  &.medium {
    height: 24px;
    max-width: 400px;
  }

  &.large {
    height: 32px;
    max-width: 88px;
  }

  &.flex {
    height: auto;
    max-width: none;
  }

  &.flex-width {
    max-width: none;
    flex: 1;
  }

  &:before {
    color: transparent;
    content: '';
    height: 100%;
    inset: 0;
    position: absolute;
    width: 80px;
    transform: translateX(-300px);
    background: linear-gradient(90deg, transparent 0%, var(--skeleton--bg_wave) 50%, transparent 100%);
    animation: 4s infinite animation-wave ease-in;
  }

  @keyframes animation-wave {
    0% {
      transform: translateX(-100px);
    }
    50% {
      transform: translateX(4000px);
    }
    100% {
      transform: translateX(4000px);
    }
  }
`
export const skeletonTemplateCss = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`
