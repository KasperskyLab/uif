import{M as e,I as l,R as o}from"./iframe-DedYZBTA.js";import{g as c,c as g}from"./propPresentation-BNIeMkgM.js";import{a as d}from"./StoryComponents--bOGC0xv.js";import{B as m}from"./Button-Dn3YNhT7.js";const u="https://pixso.net/app/design/4XYVGB274R5-e8c7lGsxDA",f={pixsoView:u},y=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],S=["hover","click","focus","contextMenu"],x={placement:"top",trigger:"hover",defaultAlign:!1,text:"Подсказка"},a={placement:{control:"select",description:"Расположение подсказки относительно элемента",options:y},trigger:{control:"select",description:"Действие, по которому открывается подсказка",options:[...S]},defaultAlign:{control:"boolean",description:"Использовать стандартное выравнивание базового компонента"},text:{control:"text",description:"Содержимое подсказки"}},i={argTypes:g(a),args:x,parameters:{badges:[e.stable,e.reviewedByDesign],design:f.pixsoView}},T={title:"Hexa UI Components/Tooltip",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["tooltipStorySettings"],...i},t={name:"Playground",parameters:{controls:{include:c(a),sort:"none"}},render:p=>o.createElement(d,{style:{paddingLeft:"200px"}},o.createElement(l,{...p},o.createElement(m,null,"Навести курсор")))};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(tooltipPropPresentation),
      sort: 'none'
    }
  },
  render: (args: TooltipProps) => <StoryColumn style={{
    paddingLeft: '200px'
  }}>
      <Tooltip {...args}>
        <Button>Навести курсор</Button>
      </Tooltip>
    </StoryColumn>
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const P=["tooltipStorySettings","Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:P,default:T,tooltipStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{_ as T,i as t};
