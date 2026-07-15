import{G as t,R as p}from"./iframe-4-PRSI1I.js";import{e as l,g as b,c as g}from"./propPresentation-CfZ5yVim.js";import{w as y}from"./withMeta-BwOuJ6tr.js";import{B as d}from"./Breadcrumbs-YahFHogo.js";import{g as S}from"./helpers-CTig38oc.js";import{s as f}from"./resolveDesignControls-CL29RUJI.js";const P={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},x="Breadcrumbs",h="«Хлебные крошки» являются дополнительной навигацией, которая помогает пользователям понять, где они находятся в структуре сайта, и перемещаться между уровнями",C="«Хлебные крошки» оформляются в виде цепочки ссылок в header страницы над заголовком или в верхней части контентной области страницы над всем конетентом",T="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=30248%3A103015",w="https://pixso.net/app/design/YSMr2VeTLedxnbVrSfbwhA",o={dod:P,component:x,description:h,usage:C,designLink:T,pixsoView:w},z=["medium","small"],B=(r,s={})=>l(f[r],s),_={size:"medium",routeCount:5},c={size:B("size",{options:[...z],description:"Размер типографики и отступов."}),routeCount:{control:{type:"number",min:1,max:10,step:1},description:"Количество пунктов в демо."}},u={argTypes:g(c),args:{..._,testId:"breadcrumbs-test-id",klId:"breadcrumbs-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:y(o)},design:o.pixsoView}},k={title:"Hexa UI Components/Breadcrumbs",component:d,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["breadcrumbsStorySettings"],...u},e={name:"Playground",parameters:{controls:{include:b(c),sort:"none"}},render:({routeCount:r,size:s,...m})=>p.createElement(d,{...m,size:s,routes:S(r)})};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(breadcrumbsPropPresentation),
      sort: 'none'
    }
  },
  render: ({
    routeCount,
    size,
    ...rest
  }) => <BreadcrumbsComponent {...rest} size={size} routes={generateRoutes(routeCount)} />
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const V=["breadcrumbsStorySettings","Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:V,breadcrumbsStorySettings:u,default:k},Symbol.toStringTag,{value:"Module"}));export{Y as B,u as b};
