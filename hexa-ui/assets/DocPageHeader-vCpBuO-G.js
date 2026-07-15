import{H as n,R as a,a1 as u,a2 as d,T as i}from"./iframe-4-PRSI1I.js";import{M as c}from"./Markdown-BenFmRMk.js";const s=n(c)`
  ${u(d.BTR3)}

  && strong {
    ${u(d.BTS4)}
  }
`,t=n.div`
  p {
    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }
`,r=({value:e})=>typeof e!="string"?a.createElement(a.Fragment,null,e):a.createElement(s,{value:e,breaks:!0});try{t.displayName="DocMarkdownContent",t.__docgenInfo={description:"",displayName:"DocMarkdownContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="DocMarkdownDescription",r.__docgenInfo={description:"",displayName:"DocMarkdownDescription",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const p=n.header`
  margin-bottom: 48px;
`,l=({title:e,description:o})=>a.createElement(p,null,a.createElement(i,{type:"H2"},e),a.createElement(t,null,a.createElement(r,{value:o})));try{l.displayName="DocPageHeader",l.__docgenInfo={description:"",displayName:"DocPageHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Markdown: абзацы через пустую строку, перенос строки — через `breaks`",name:"description",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{l as D,t as a,r as b};
