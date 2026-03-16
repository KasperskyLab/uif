import{a1 as y,a0 as p,H as d,w as E,u as g,R as t,A as k,T as v,L as w}from"./iframe-DlY6n6Um.js";import{D as u}from"./Dropdown-WtVSJYv5.js";import{t as T}from"./Menu3-B3FR9-ED.js";const n=y(),b=p`
  font-family: ${n("fontFamily")};
  font-size: ${n("fontSize")};
  line-height: ${n("lineHeight")};
  font-weight: ${n("fontWeight")};
  font-style: ${n("fontStyle")};
  letter-spacing: ${n("letterSpacing")};
`,B=p`
  display: flex;
  align-items: center;

  && a {
    ${b}
    &, &:link, &:visited, &:focus, &:active {
      color: ${n("enabled.color")};
    }
    &:hover {
      color: ${n("hover.color")};
    }
    &.kl-components-link_disabled {
      color: ${n("disabled.color")};
    }
  }
`,$=d.span`
  ${b}
  color: ${n("enabled.color")};
  margin: 0 ${n("gap")};
`,S=d(u.MenuItem).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  &:not(.ant-dropdown-menu-item-selected) {
    a:not(.kl-components-link_disabled) {
      &, &:link, &:visited, &:focus, &:active, &:hover {
        color: ${n("selected.color")};
      }
    }
  }
`,A=e=>E(e,{componentName:"breadcrumbs",defaultValues:{size:"medium"},propsToDrill:["size"]}),C=5,I=1,L="/",M=d.nav.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${B}`,R=e=>{const r=A(e),a=g(r);return t.createElement(q,{...a})},c=({route:e,isLastItem:r,size:a,cssConfig:l})=>t.createElement(t.Fragment,null,a==="medium"&&r?t.createElement(v,{type:a==="medium"?"BTM3":"BTM4"},e.name):t.createElement(f,{route:e}),!r&&t.createElement(h,{cssConfig:l})),f=({route:e})=>t.createElement(w,{href:e.url,onClick:e.onClick,disabled:e.disabled},e.name),h=({cssConfig:e})=>t.createElement($,{cssConfig:e},L),q=({routes:e=[],size:r="medium",testAttributes:a,cssConfig:l,...s})=>t.createElement(M,{cssConfig:l,...a,...s},e.length<=C?e.map((o,m,{length:i})=>t.createElement(c,{route:o,key:o.url,isLastItem:i-1===m,cssConfig:l,size:r})):t.createElement(t.Fragment,null,e.slice(0,I).map(o=>t.createElement(c,{key:o.url,route:o,cssConfig:l,size:r})),t.createElement(u,{overlay:D(e,l)},t.createElement(k,{icon:t.createElement(T,null),size:r==="medium"?"large":"medium"})),t.createElement(h,{cssConfig:l}),e.slice(-2).map((o,m,{length:i})=>t.createElement(c,{key:o.url,route:o,isLastItem:i-1===m,cssConfig:l,size:r})))),D=(e,r)=>t.createElement(u.Menu,null,e.map((a,l,{length:s})=>t.createElement(S,{key:a.name,cssConfig:r,disabled:a.disabled,className:s-1===l?"ant-dropdown-menu-item-selected":""},t.createElement(f,{route:a}))));R.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"Size"},routes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Name of the breadcrumb */
  name: string,
  /** Disabled state */
  disabled?: boolean,
  /** URL of the breadcrumb */
  url?: string,
  /** Handler of the click event */
  onClick?: () => void
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"Name of the breadcrumb"},{key:"disabled",value:{name:"boolean",required:!1},description:"Disabled state"},{key:"url",value:{name:"string",required:!1},description:"URL of the breadcrumb"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Handler of the click event"}]}}],raw:"Route[]"},description:"Array of routes for breadcrumbs"}}};export{R as B};
