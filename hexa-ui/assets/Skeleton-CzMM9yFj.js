import{C as i,H as r,M as t,R as m,l as p}from"./iframe-4-PRSI1I.js";const f=i`
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
`,c=i`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`,h=({className:a,size:e,flexWidth:s,testAttributes:d,...o})=>{const u={small:e===t.Small,medium:e===t.Medium,large:e===t.Large,flex:e==="flex"};return m.createElement("div",{className:p(a,u,{"flex-width":s}),...d,...o})},n=r(h)`
  ${f}
`,l=r.div`
  ${c}
`;try{n.displayName="Skeleton",n.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:null,description:"Css class",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:null,description:"size - specific height and width",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"flex"'}]}},testAttributes:{defaultValue:null,description:"",name:"testAttributes",required:!1,type:{name:"TestingProps"}},flexWidth:{defaultValue:null,description:"width fixed or auto",name:"flexWidth",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{l.displayName="SkeletonTemplate",l.__docgenInfo={description:"",displayName:"SkeletonTemplate",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{n as S,l as a};
