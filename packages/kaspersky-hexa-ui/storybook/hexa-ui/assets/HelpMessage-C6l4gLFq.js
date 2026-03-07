import{a1 as n,a0 as r,w as m,u as l,R as t,j as c,H as i,$ as p}from"./iframe-zz6a49H8.js";const d=n(),u=r`
  color: ${d("color")};
  white-space: pre-wrap;
`,g=e=>m(e,{componentName:"helpMessage",defaultValues:{mode:"common"}}),h=i(p).withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)}).attrs({type:"BTR4"})`
${u}
`,f=e=>{const s=g(e),a=l(s);return t.createElement(w,{...a})},w=({text:e,testAttributes:s,className:a,...o})=>t.createElement(h,{className:c("kl6-help-message",a),...s,...o},e);f.__docgenInfo={description:"",methods:[],displayName:"HelpMessage",props:{text:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Displayed text (instead of count)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},mode:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'common'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'common'"}]},description:"Color mode"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{f as H};
