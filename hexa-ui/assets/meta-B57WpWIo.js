import{a0 as a,H as n,B as t,R as p,j as d}from"./iframe-DlY6n6Um.js";const x=a`
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
`,m=a`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`,c=({className:s,size:e,flexWidth:o,testAttributes:i,...r})=>{const l={small:e===t.Small,medium:e===t.Medium,large:e===t.Large,flex:e==="flex"};return p.createElement("div",{className:d(s,l,{"flex-width":o}),...i,...r})},S=n(c)`
  ${x}
`,v=n.div`
  ${m}
`,h={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},g="Skeleton",f="Skeleton — это заглушка, которая используется во время загрузки страницы",w="Помогает создать предсказуемую структуру интерфейса перед появлением реального контента, но не является его точной имитацией",k="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=62851%3A220976",u="https://pixso.net/app/design/w0W4gLFjwQpE8XQ6Kyh3nQ",y={dod:h,component:g,description:f,usage:w,designLink:k,pixsoView:u};export{y as M,S,v as a};
