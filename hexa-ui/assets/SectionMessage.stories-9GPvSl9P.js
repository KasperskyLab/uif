import{N as g,G as o,a as d,R as n,T as u}from"./iframe-4-PRSI1I.js";import{g as m,c as S}from"./propPresentation-CfZ5yVim.js";import{w as y}from"./withMeta-BwOuJ6tr.js";const M={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},b="Section Message",x="Section Message используется как статичное уведомление для акцента на информации вутри контента, требующего внимания или действий.",f="Используется для инлайн уведомлений. Размещается в теле страницы, Section Message не пропадает с течением времени.",T="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=69315%3A242253",P="https://pixso.net/app/design/KkB-rzGoq7IXsGE5wJyzaQ",r={dod:M,component:b,description:x,usage:f,designLink:T,pixsoView:P},h={mode:"info",title:"Title",children:"Текст сообщения",closable:!0,expandable:!1,defaultExpanded:!0},t={mode:{control:"select",description:"Семантический стиль компонента",options:[...g]},title:{control:"text",description:"Заголовок сообщения"},children:{control:"text",description:"Текст сообщения"},closable:{control:"boolean",description:"Показывать кнопку закрытия"},expandable:{control:"boolean",description:"Показывать кнопку сворачивания содержимого"},defaultExpanded:{control:"boolean",description:"Начальное состояние — развёрнуто (true) или свёрнуто (false). Применяется только вместе с expandable"}},k=m(t),l={args:{...h,testId:"section-message-test-id",klId:"section-message-kl-id"},argTypes:S(t),parameters:{badges:[o.stable,o.reviewedByDesign],docs:{page:y(r)},design:r.pixsoView}},_={title:"Hexa UI Components/SectionMessage",component:d,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["sectionMessagePropPresentation","sectionMessageStorySettings"],...l},e={name:"Playground",parameters:{controls:{include:k,sort:"none"}},render:({children:s,...p})=>n.createElement(d,{...p},typeof s=="string"?n.createElement(u,{type:"BTR3"},s):s)};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: sectionMessageControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    children,
    ...rest
  }: SectionMessageProps) => <SectionMessage {...rest}>
      {typeof children === 'string' ? <Text type="BTR3">{children}</Text> : children}
    </SectionMessage>
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["sectionMessagePropPresentation","sectionMessageStorySettings","Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:w,default:_,sectionMessagePropPresentation:t,sectionMessageStorySettings:l},Symbol.toStringTag,{value:"Module"}));export{B as S,l as s};
