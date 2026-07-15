import{G as t,R as e}from"./iframe-4-PRSI1I.js";import{g as m,c as g}from"./propPresentation-CfZ5yVim.js";import{B as u}from"./Button-D2E54Ulj.js";import{P as s}from"./FormLabel-CoXJxjwh.js";const v="https://pixso.net/app/design/PHPHITQ2KtQY9vcutiWXbg",P={pixsoView:v},y=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],b=["click","hover","focus"],i={placement:{description:"Позиция popover относительно триггера. По умолчанию — `bottom`.",control:"select",options:[...y]},trigger:{description:"Способ открытия popover: `click`, `hover` или `focus`. По умолчанию — `click`.",control:"select",options:[...b]},shouldLimitSize:{description:"Ограничивает максимальную ширину и высоту popover. При переполнении появляется прокрутка.",control:"boolean"},width:{description:"Ширина popover в пикселях.",control:{type:"number",min:0,step:1}},height:{description:"Высота popover в пикселях.",control:{type:"number",min:0,step:1}},defaultVisible:{description:"Открыт ли popover по умолчанию при монтировании.",control:"boolean"},content:{description:"Содержимое popover: текст или произвольная разметка с компонентами Hexa UI.",control:"text"},children:{description:"Элемент-триггер, к которому привязан popover. В Playground отображается как Button с переданной подписью.",control:"text"}},c={argTypes:g(i),args:{trigger:"click",placement:"bottom",shouldLimitSize:!0,defaultVisible:!1,content:"Popover content",children:"Open popover"},parameters:{badges:[t.stable,t.reviewedByDesign],design:P.pixsoView}},f={title:"Hexa UI Components/Popover",component:s,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["popoverStorySettings"],...c},o={name:"Playground",render:({content:l,children:a,...d})=>e.createElement("div",{style:{padding:"120px"}},e.createElement(s,{...d,content:l},e.createElement(u,null,a))),parameters:{controls:{include:m(i)}}};var r,n,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    content,
    children,
    ...rest
  }: PopoverPlaygroundProps) => <div style={{
    padding: '120px'
  }}>
      <PopoverComponent {...rest} content={content}>
        <Button>{children}</Button>
      </PopoverComponent>
    </div>,
  parameters: {
    controls: {
      include: getControlsInclude(popoverPropPresentation)
    }
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const h=["popoverStorySettings","Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:h,default:f,popoverStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{_ as P,c as p};
