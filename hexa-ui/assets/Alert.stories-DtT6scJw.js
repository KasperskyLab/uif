import{G as o,R as r,T as g}from"./iframe-4-PRSI1I.js";import{g as m,c as y}from"./propPresentation-CfZ5yVim.js";import{w as b}from"./withMeta-BwOuJ6tr.js";import{a as i,A as c}from"./Alert-D7JgAXni.js";const h={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},x="Alert",T="",S="Alert — это компонент, который используется для отображения важных уведомлений или сообщений, относящихся ко всему продукту. Основное назначение компонента — привлечение внимания пользователя к критически важной информации, требующей его действия или осведомлённости. Эти уведомления отображаются на всех экранах продукта, располагаясь вверху контентной области страницы, чтобы быть видимыми независимо от того, на какой странице находится пользователь. Alert не пропадает с течением времени.",f="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=43876%3A184415",A="https://pixso.net/app/design/R8Tue1E22g_9u5mWBIWvlQ",s={dod:h,component:x,description:T,usage:S,designLink:f,pixsoView:A},d={mode:{control:"select",description:"Семантический стиль компонента",options:[...i]},children:{control:"text",description:"Текст сообщения"},closable:{control:"boolean",description:"Показывать кнопку закрытия"},width:{control:"text",description:"Ширина компонента в px"}},w=m(d),p={args:{mode:"info",closable:!1,children:"You can swap «children»",testId:"alert-test-id",klId:"alert-kl-id"},argTypes:y(d),parameters:{badges:[o.stable,o.reviewedByDesign],docs:{page:b(s)},design:s.pixsoView}},P={title:"Hexa UI Components/Alert",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["alertModes","alertStorySettings"],...p},e={args:{mode:"success",closable:!0,children:"Текст сообщения",width:""},name:"Playground",parameters:{controls:{include:w,sort:"none"}},render:({children:t,...u})=>r.createElement(c,{...u},typeof t=="string"?r.createElement(g,{type:"BTR3"},t):t)};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'success',
    closable: true,
    children: 'Текст сообщения',
    width: ''
  },
  name: 'Playground',
  parameters: {
    controls: {
      include: alertControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    children,
    ...rest
  }: AlertProps) => <AlertComponent {...rest}>
      {typeof children === 'string' ? <Text type="BTR3">{children}</Text> : children}
    </AlertComponent>
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const _=["alertModes","alertStorySettings","Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:_,alertModes:i,alertStorySettings:p,default:P},Symbol.toStringTag,{value:"Module"}));export{O as A,p as a};
