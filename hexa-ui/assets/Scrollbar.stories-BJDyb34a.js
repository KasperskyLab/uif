import{T as p}from"./Palette-CL2qD4Vl.js";import{c as u,G as n,R as o,J as g,H as h}from"./iframe-4-PRSI1I.js";import{g as b,c as S}from"./propPresentation-CfZ5yVim.js";import{M as y,w as H}from"./common-CX3Ap7n_.js";import{S as c}from"./Scrollbar-DKQRie9d.js";const P={autoHide:!1,children:"Scrollbar content"},i={children:{control:"text",description:"Содержимое прокручиваемой области"},autoHide:{control:"boolean",description:"Скрывать полосы прокрутки вне наведения и скролла"},autoHideTimeout:{control:"number",description:"Задержка перед скрытием в режиме autoHide, мс"},autoHideDuration:{control:"number",description:"Длительность анимации скрытия в режиме autoHide, мс"},autoHeight:{control:"boolean",description:"Подстраивать высоту контейнера по содержимому в пределах min/max"},autoHeightMin:{control:"text",description:"Минимальная высота контейнера при autoHeight"},autoHeightMax:{control:"text",description:"Максимальная высота контейнера при autoHeight"},thumbMinSize:{control:"number",description:"Минимальный размер ползунка в пикселях"},universal:{control:"boolean",description:"SSR-совместимый режим рендера"},theme:{control:"radio",description:"Тема оформления полосы прокрутки",options:["light","dark"]}},d={argTypes:S(i),args:P,parameters:{badges:[n.stable,n.reviewedByDesign],design:y.pixsoView}},f={title:"Hexa UI Components/Scrollbar",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["scrollbarStorySettings"],...d},x=h.div`
  p { width: 600px; }
  ${H}
`,r={name:"Playground",render:e=>{const t=g(),m=e.children?o.createElement("p",null,e.children):void 0;return o.createElement(x,{theme:t.key},o.createElement(c,{...e,theme:e.theme??t.key},m))},parameters:{controls:{include:b(i),sort:"none"}}},T={args:{source:u.scrollbar},render:e=>o.createElement(p,{...e})};var a,s,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  render: (args: ScrollbarProps) => {
    const theme = useTheme();
    const children = args.children ? <p>{args.children}</p> : undefined;
    return <Wrapper theme={theme.key}>
        <Scrollbar {...args} theme={args.theme ?? theme.key}>
          {children}
        </Scrollbar>
      </Wrapper>;
  },
  parameters: {
    controls: {
      include: getControlsInclude(scrollbarPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const k=["scrollbarStorySettings","Playground","ColorTokens"],E=Object.freeze(Object.defineProperty({__proto__:null,ColorTokens:T,Playground:r,__namedExportsOrder:k,default:f,scrollbarStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{E as S,d as s};
