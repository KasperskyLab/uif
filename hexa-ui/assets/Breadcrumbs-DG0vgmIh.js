import{C as f,H as c,l as g,j as h,u as _,R as t,A as v,T as I,L as k}from"./iframe-DedYZBTA.js";import{D as u}from"./Dropdown-C8Jtav0F.js";import{o as B}from"./Menu3-CAgzKlIF.js";const a=g(),b=f`
  font-family: ${a("fontFamily")};
  font-size: ${a("fontSize")};
  line-height: ${a("lineHeight")};
  font-weight: ${a("fontWeight")};
  font-style: ${a("fontStyle")};
  letter-spacing: ${a("letterSpacing")};
`,T=f`
  display: flex;
  align-items: center;

  && a {
    ${b}
    &, &:link, &:visited, &:focus, &:active {
      color: ${a("enabled.color")};
    }
    &:hover {
      color: ${a("hover.color")};
    }
    &.kl-components-link_disabled {
      color: ${a("disabled.color")};
    }
  }
`,S=c.span`
  ${b}
  color: ${a("enabled.color")};
  margin: 0 ${a("gap")};
`,$=c(u.MenuItem).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  &:not(.ant-dropdown-menu-item-selected) {
    a:not(.kl-components-link_disabled) {
      &, &:link, &:visited, &:focus, &:active, &:hover {
        color: ${a("selected.color")};
      }
    }
  }
`,w=e=>h(e,{componentName:"breadcrumbs",defaultValues:{size:"medium"},propsToDrill:["size"]}),C=5,V=1,L=2,M="/",q=c.nav.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${T}`,p=e=>{const r=w(e),n=_(r);return t.createElement(A,{...n})},o=({route:e,isLastItem:r,size:n,cssConfig:l})=>t.createElement(t.Fragment,null,n==="medium"&&r?t.createElement(I,{type:n==="medium"?"BTM3":"BTM4"},e.name):t.createElement(y,{route:e}),!r&&t.createElement(E,{cssConfig:l})),y=({route:e})=>t.createElement(k,{href:e.url,onClick:e.onClick,disabled:e.disabled},e.name),E=({cssConfig:e})=>t.createElement(S,{cssConfig:e},M),A=({routes:e=[],size:r="medium",testAttributes:n,cssConfig:l,...i})=>t.createElement(q,{cssConfig:l,...n,...i},e.length<=C?e.map((s,m,{length:d})=>t.createElement(o,{route:s,key:s.url,isLastItem:d-1===m,cssConfig:l,size:r})):t.createElement(t.Fragment,null,e.slice(0,V).map(s=>t.createElement(o,{key:s.url,route:s,cssConfig:l,size:r})),t.createElement(u,{overlay:R(e,l)},t.createElement(v,{icon:t.createElement(B,null),size:r==="medium"?"large":"medium"})),t.createElement(E,{cssConfig:l}),e.slice(-L).map((s,m,{length:d})=>t.createElement(o,{key:s.url,route:s,isLastItem:d-1===m,cssConfig:l,size:r})))),R=(e,r)=>t.createElement(u.Menu,null,e.map((n,l,{length:i})=>t.createElement($,{key:n.name,cssConfig:r,disabled:n.disabled,className:i-1===l?"ant-dropdown-menu-item-selected":""},t.createElement(y,{route:n}))));try{p.displayName="Breadcrumbs",p.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},routes:{defaultValue:{value:"[]"},description:"Array of routes for breadcrumbs",name:"routes",required:!1,type:{name:"Route[]"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{o.displayName="BreadcrumbsItem",o.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"Route"}},isLastItem:{defaultValue:null,description:"",name:"isLastItem",required:!1,type:{name:"boolean"}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"BreadcrumbsCssConfig"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}}}catch{}export{p as B,L as I,C as M,M as S,o as a,V as b};
