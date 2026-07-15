import{C as f,H as c,D as E,F as I,w as h,R as t,A as _,T as v,L as T}from"./iframe-4-PRSI1I.js";import{D as u}from"./Dropdown-BZXGqesC.js";import{o as k}from"./Menu3-BM3aMNYq.js";const a=E(),y=f`
  font-family: ${a("fontFamily")};
  font-size: ${a("fontSize")};
  line-height: ${a("lineHeight")};
  font-weight: ${a("fontWeight")};
  font-style: ${a("fontStyle")};
  letter-spacing: ${a("letterSpacing")};
`,B=f`
  display: flex;
  align-items: center;

  && a {
    ${y}
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
  ${y}
  color: ${a("enabled.color")};
  margin: 0 ${a("gap")};
`,w=c(u.MenuItem).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  &:not(.ant-dropdown-menu-item-selected) {
    a:not(.kl-components-link_disabled) {
      &, &:link, &:visited, &:focus, &:active, &:hover {
        color: ${a("selected.color")};
      }
    }
  }
`,V=e=>I(e,{componentName:"breadcrumbs",defaultValues:{size:"medium"},propsToDrill:["size"]}),$=5,q=1,C=2,L="/",M=c.nav.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${B}`,p=e=>{const n=V(e),r=h(n);return t.createElement(A,{...r})},d=({route:e,isLastItem:n,size:r,cssConfig:l})=>t.createElement(t.Fragment,null,r==="medium"&&n?t.createElement(v,{type:r==="medium"?"BTM3":"BTM4"},e.name):t.createElement(b,{route:e}),!n&&t.createElement(g,{cssConfig:l})),b=({route:e})=>t.createElement(T,{href:e.url,onClick:e.onClick,disabled:e.disabled},e.name),g=({cssConfig:e})=>t.createElement(S,{cssConfig:e},L),A=({routes:e=[],size:n="medium",testAttributes:r,cssConfig:l,...o})=>t.createElement(M,{cssConfig:l,...r,...o},e.length<=$?e.map((s,i,{length:m})=>t.createElement(d,{route:s,key:s.url,isLastItem:m-1===i,cssConfig:l,size:n})):t.createElement(t.Fragment,null,e.slice(0,q).map(s=>t.createElement(d,{key:s.url,route:s,cssConfig:l,size:n})),t.createElement(u,{overlay:F(e,l)},t.createElement(_,{icon:t.createElement(k,null),size:n==="medium"?"large":"medium"})),t.createElement(g,{cssConfig:l}),e.slice(-C).map((s,i,{length:m})=>t.createElement(d,{key:s.url,route:s,isLastItem:m-1===i,cssConfig:l,size:n})))),F=(e,n)=>t.createElement(u.Menu,null,e.map((r,l,{length:o})=>t.createElement(w,{key:r.name,cssConfig:n,disabled:r.disabled,className:o-1===l?"ant-dropdown-menu-item-selected":""},t.createElement(b,{route:r}))));try{p.displayName="Breadcrumbs",p.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},routes:{defaultValue:{value:"[]"},description:"Array of routes for breadcrumbs",name:"routes",required:!1,type:{name:"Route[]"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{d.displayName="BreadcrumbsItem",d.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"Route"}},isLastItem:{defaultValue:null,description:"",name:"isLastItem",required:!1,type:{name:"boolean"}},cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"BreadcrumbsCssConfig"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}}}catch{}export{p as B,C as I,$ as M,L as S,d as a,q as b};
