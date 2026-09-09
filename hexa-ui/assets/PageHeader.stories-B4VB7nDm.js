import{M as o,R as t}from"./iframe-DedYZBTA.js";import{g as f,b}from"./propPresentation-BNIeMkgM.js";import{B as P}from"./Button-Dn3YNhT7.js";import{g as A}from"./helpers-CTig38oc.js";import{o as y,s as l}from"./Settings-DP_VhfOn.js";import{P as r}from"./PageHeader-CF_ZAefx.js";const S="https://pixso.net/app/design/rU7ZxxlujCUls9Tm4NPAuw",x={pixsoView:S},B=["none","placeholder","settings"],H=["none","placeholder","button"],T={title:"Page title",description:"Page description",iconBefore:"placeholder",elementAfter:"placeholder",breadcrumbs:!0,tagsAfter:!0},i={title:{control:"text",description:"Заголовок страницы"},description:{control:"text",description:"Краткое описание страницы"},iconBefore:{control:"select",options:[...B],description:"Иконка перед заголовком"},elementAfter:{control:"select",options:[...H],description:"Элемент в правой части шапки"},breadcrumbs:{control:"boolean",description:"Показывать хлебные крошки"},tagsAfter:{control:"boolean",description:"Показывать теги после заголовка"}},h={none:void 0,placeholder:t.createElement(l,null),settings:t.createElement(y,null)},v={none:void 0,placeholder:t.createElement(l,null),button:t.createElement(P,{text:"Создать"})},c={argTypes:b(r,i),args:T,parameters:{badges:[o.stable,o.reviewedByDesign],design:x.pixsoView}},C={title:"Hexa UI Components/PageHeader",component:r,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["pageHeaderStorySettings"],...c},e={name:"Playground",render:({breadcrumbs:d,elementAfter:p,iconBefore:g,tagsAfter:m,...u})=>t.createElement(r,{...u,breadcrumbs:d?{routes:A()}:void 0,elementAfter:v[p],iconBefore:h[g],tagsAfter:m?[{label:"Tag 1"},{label:"Tag 2"}]:void 0}),parameters:{controls:{include:f(i),sort:"none"}}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    breadcrumbs,
    elementAfter,
    iconBefore,
    tagsAfter,
    ...args
  }) => <PageHeaderComponent {...args} breadcrumbs={breadcrumbs ? {
    routes: generateRoutes()
  } : undefined} elementAfter={elementAfterVariants[elementAfter]} iconBefore={iconBeforeVariants[iconBefore]} tagsAfter={tagsAfter ? [{
    label: 'Tag 1'
  }, {
    label: 'Tag 2'
  }] : undefined} />,
  parameters: {
    controls: {
      include: getControlsInclude(pageHeaderPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["pageHeaderStorySettings","Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:E,default:C,pageHeaderStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{I as P};
