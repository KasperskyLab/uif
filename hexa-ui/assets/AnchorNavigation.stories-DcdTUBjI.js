import{R as e,an as _,K as k,au as E,P as d,H as P,G as y}from"./iframe-4-PRSI1I.js";import{g as C,b as S}from"./propPresentation-CfZ5yVim.js";import{w as T}from"./withMeta-BwOuJ6tr.js";import{A as h,N as L}from"./DocPageLayout-CZPyVaN8.js";import{B as r}from"./Badge-B3_Y1H2J.js";const q={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},j="AnchorNavigation",z="",H="AnchorNavigation — это вспомогательный компонент для ориентации пользователя внутри одной страницы. По своей сути AnchorNavigation — это карта страницы, которая отражает структуру контента, показывает взаимосвязь разделов и подразделов, помогает пользователю понимать, где он находится в рамках текущей страницы.",V="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?page-id=29963%3A101579",$="https://pixso.net/app/design/hD3Tb31jr4YLaPBf6JEN5Q",f={dod:q,component:j,description:z,usage:H,designLink:V,pixsoView:$},B={title:"Page Content",sectionCount:10,withNestedItems:!0,withElementAfter:!0,withLongLabels:!0},A={title:{control:"text",description:"Заголовок над списком пунктов навигации"},sectionCount:{control:{type:"number",min:1,max:20,step:1},description:"Количество разделов в демо Playground"},withNestedItems:{control:"boolean",description:"Показать вложенные пункты навигации"},withElementAfter:{control:"boolean",description:"Добавить Badge в elementAfter у части пунктов"},withLongLabels:{control:"boolean",description:"Добавить пункты с длинными подписями"}},m="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";function p({sectionCount:t,withElementAfter:n=!1,withLongLabels:s=!1,withNestedItems:i=!1}){const u=Math.max(1,Math.min(20,t)),o=Array(u).fill(0).map((c,a)=>({id:`section-${a+1}`,label:`Section ${a+1}`}));if(s&&o.length>3&&o.splice(3,0,{id:"two-line-text",label:"Pack my box with five dozen liquor jugs. ".repeat(2)},{id:"three-line-text",label:"The quick brown fox jumps over the lazy dog. ".repeat(2)}),n&&o.length>1&&(o[1]={...o[1],elementAfter:e.createElement(r,{mode:"critical",count:1})}),i&&o.length>=2){const c=Math.min(2,o.length-1),a=o[c].id;o[c]={...o[c],children:[{children:[{id:`${a}-subsubsection-1`,label:"Subsubsection"},{elementAfter:n?e.createElement(r,{mode:"resolved",text:"new"}):void 0,id:`${a}-subsubsection-2`,label:"The quick brown fox jumps over the lazy dog. ".repeat(2)}],id:`${a}-subsection-1`,label:"Subsection"},{elementAfter:n?e.createElement(r,{mode:"resolved",text:"new"}):void 0,id:`${a}-subsection-2`,label:"The quick brown fox jumps over the lazy dog. ".repeat(3)}]}}return o}const b=Array(20).fill(0).map((t,n)=>({id:`section-${n+1}`,label:`Section ${n+1}`}));b.splice(3,0,{id:"two-line-text",label:"Pack my box with five dozen liquor jugs. ".repeat(2)},{id:"three-line-text",label:"The quick brown fox jumps over the lazy dog. ".repeat(2)});b[1].elementAfter=e.createElement(r,{mode:"critical",count:1});b[8].children=[{children:[{id:"subsubsection-1",label:"Subsubsection"},{elementAfter:e.createElement(r,{mode:"resolved",text:"new"}),id:"subsubsection-2",label:"The quick brown fox jumps over the lazy dog. ".repeat(2)}],id:"subsection-1",label:"Subsection"},{elementAfter:e.createElement(r,{mode:"resolved",text:"new"}),id:"subsection-2",label:"The quick brown fox jumps over the lazy dog. ".repeat(3)}];const M=P.div`
  & + & {
    margin-top: 10px;
  }
`;function N(t,n=0){const s=n===0?_:n===1?k:E;return e.createElement(e.Fragment,{key:t.id},e.createElement(M,null,e.createElement(s,{id:t.id},t.label),e.createElement(d,{style:{marginTop:"1em"}},m),e.createElement(d,{style:{marginTop:"1em"}},m),e.createElement(d,{style:{marginTop:"1em"}},m)),t.children&&t.children.map(i=>N(i,n+1)))}function g(t){return t.map(n=>N(n))}try{p.displayName="buildPlaygroundItems",p.__docgenInfo={description:"",displayName:"buildPlaygroundItems",props:{sectionCount:{defaultValue:null,description:"",name:"sectionCount",required:!0,type:{name:"number"}},withElementAfter:{defaultValue:{value:"false"},description:"",name:"withElementAfter",required:!1,type:{name:"boolean"}},withLongLabels:{defaultValue:{value:"false"},description:"",name:"withLongLabels",required:!1,type:{name:"boolean"}},withNestedItems:{defaultValue:{value:"false"},description:"",name:"withNestedItems",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="renderAnchorContent",g.__docgenInfo={description:"",displayName:"renderAnchorContent",props:{}}}catch{}const O=C(A),I={argTypes:S([h,L],A),parameters:{badges:[y.stable,y.reviewedByDesign],docs:{page:T(f)},design:f.pixsoView}},D={title:"Hexa UI Components/AnchorNavigation",component:h,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["anchorNavigationStorySettings"],...I,args:B},l={name:"Playground",parameters:{controls:{include:O,sort:"none"}},render:({title:t,sectionCount:n,withElementAfter:s,withLongLabels:i,withNestedItems:u})=>{const o=p({sectionCount:n,withElementAfter:s,withLongLabels:i,withNestedItems:u});return e.createElement(e.Fragment,null,e.createElement(d,{style:{marginBottom:"1em"}},m),e.createElement(h,{items:o,title:t},g(o)))}};var w,v,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: anchorNavigationControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    title,
    sectionCount,
    withElementAfter,
    withLongLabels,
    withNestedItems
  }) => {
    const items = buildPlaygroundItems({
      sectionCount,
      withElementAfter,
      withLongLabels,
      withNestedItems
    });
    return <>
        <P style={{
        marginBottom: '1em'
      }}>{dummyText}</P>

        <AnchorNavigationComponent items={items} title={title}>
          {renderAnchorContent(items)}
        </AnchorNavigationComponent>
      </>;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const F=["anchorNavigationStorySettings","Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,__namedExportsOrder:F,anchorNavigationStorySettings:I,default:D},Symbol.toStringTag,{value:"Module"}));export{U as A,b as a,I as b,m as d,g as r};
