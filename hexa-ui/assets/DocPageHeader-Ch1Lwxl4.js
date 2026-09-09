import{H as n,R as e,ai as c,aE as s,T as p,I as E,ap as g,a as D}from"./iframe-DedYZBTA.js";import{Markdown as _}from"./Markdown-Bfn0KgDg.js";import{T}from"./Tag-BKPu3-sD.js";import{o as m}from"./StatusOkSolid-OcpnRZV_.js";const h=u=>{const a=u.replace(/^\r?\n/,"").replace(/\r?\n[\t ]*$/,"").split(/\r?\n/),i=a.filter(t=>t.trim()).map(t=>{var l;return((l=t.match(/^[\t ]*/))==null?void 0:l[0].length)??0}),r=Math.min(...i);return!Number.isFinite(r)||r===0?a.join(`
`):a.map(t=>t.trim()?t.slice(r):"").join(`
`)},M=n(_)`
  ${c(s.BTR3)}

  && strong {
    ${c(s.BTS4)}
  }
`,o=n.div`
  p {
    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }
`,d=({value:u})=>typeof u!="string"?e.createElement(e.Fragment,null,u):e.createElement(M,{value:h(u),breaks:!0});try{o.displayName="DocMarkdownContent",o.__docgenInfo={description:"",displayName:"DocMarkdownContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="DocMarkdownDescription",d.__docgenInfo={description:"",displayName:"DocMarkdownDescription",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const k=n.header`
  margin-bottom: 24px;
`,F=n.div`
  align-items: center;
  display: flex;
`,f=n(T)`
  &:first-of-type {
    margin-inline-start: auto;
  }
`,I=n.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,y=({title:u,description:a,rtlSupported:i,inBuilder:r,builderInfo:t,checkUIF:l})=>e.createElement(k,null,e.createElement(F,null,e.createElement(p,{type:"H2"},u),r&&e.createElement(f,{mode:"emerald",outlined:!0,icon:e.createElement(m,null)},e.createElement(I,null,"Есть в UI Builder",t&&e.createElement(E,{text:t},e.createElement(g,null)))),i&&e.createElement(f,{mode:"marina",outlined:!0,icon:e.createElement(m,null)},"Есть поддержка RTL")),e.createElement(o,null,e.createElement(d,{value:a})),!l&&e.createElement(D,{closable:!0,mode:"warning",style:{marginTop:16}},e.createElement("span",{style:{display:"flex",flexDirection:"column",gap:4}},e.createElement(p,{type:"BTM3"},"Эта документация сгенерирована AI и пока не проверена разработчиками. Она может содержать ошибки и неточности."))));try{y.displayName="DocPageHeader",y.__docgenInfo={description:"",displayName:"DocPageHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Markdown: абзацы через пустую строку, перенос строки — через `breaks`",name:"description",required:!0,type:{name:"ReactNode"}},rtlSupported:{defaultValue:null,description:"Есть поддержка RTL",name:"rtlSupported",required:!1,type:{name:"boolean"}},inBuilder:{defaultValue:null,description:"Компонент доступен в UI Builder",name:"inBuilder",required:!1,type:{name:"boolean"}},builderInfo:{defaultValue:null,description:"Особенности использования в UI Builder",name:"builderInfo",required:!1,type:{name:"string"}},checkUIF:{defaultValue:null,description:"Документация валидирована для UIF",name:"checkUIF",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{y as D,o as a,d as b};
