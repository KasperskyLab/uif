import{R as e,T as u,H as C,G as l}from"./iframe-4-PRSI1I.js";import{e as M,g as P,c as _}from"./propPresentation-CfZ5yVim.js";import{w as z}from"./withMeta-BwOuJ6tr.js";import{o as r}from"./Placeholder-DoG1ulbQ.js";import{t as g}from"./Map-BIywhbB-.js";import{C as f}from"./Card-nYkFxRpJ.js";import{s as k}from"./resolveDesignControls-CL29RUJI.js";const B={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},H="Card",V="Компонент Card — это компонент, предназначенный для группировки связанного контента или действий.",w="Карточка помогает организовать информацию, выделить её на фоне остального контента, и показать на какие элементы интерфейса распространяются возможности настройки или редактирования.",I="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=98007%3A285970",O="https://pixso.net/app/design/Nh-gabA5flR-UqNiiMDMgw",c={dod:B,component:H,description:V,usage:w,designLink:I,pixsoView:O},a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu. Fusce accumsan erat purus.",re=e.createElement(u,null,a),i=C.div`
  width: 400px;
`,ie={value:"Title",elementBefore:e.createElement(g,null),elementAfter:{component:"text",children:"Text",type:"BTM3"},size:"small"},ae={value:a,size:"small",elementBefore:{component:"checkbox"},elementAfter:{component:"toggle"}},x={component:"radio",options:[{label:"Option 1",value:"option1"}],value:"option1"},D=[{icon:e.createElement(r,null),value:"Action 1"},{icon:e.createElement(r,null),value:"Action 2"}];try{i.displayName="StoryWrapper",i.__docgenInfo={description:"",displayName:"StoryWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const q=["base","filled","selected"],R=["small","medium","large"],L=["small","medium"],N=["none","icon","checkbox","radio","toggle"],W=["none","text","toggle","radio"],j=["none","single","multiple"],U=(t,n={})=>M(k[t],n),J={mode:"base",size:"medium",draggable:!1,closable:!1,interactive:!1,maxHeight:"",contentText:a,titleText:"",titleSize:"small",titleElementBefore:"none",titleElementAfter:"none",actionsMode:"none"},T={mode:{control:"select",description:"Цветовой вариант карточки",options:[...q]},size:U("size",{options:[...R],description:"Размер внутренних отступов и компоновки"}),draggable:{control:"boolean",description:"Показывает иконку перетаскивания слева от карточки"},closable:{control:"boolean",description:"Показывает кнопку закрытия в области действий"},interactive:{control:"boolean",description:"Включает интерактивные состояния hover и active"},maxHeight:{control:"text",description:"Максимальная высота контента. При превышении включается прокрутка (кроме size small)"},contentText:{control:"text",description:"Текст основного содержимого карточки"},titleText:{control:"text",description:"Текст заголовка. Пустая строка — заголовок не отображается"},titleSize:{control:"select",description:"Типографика заголовка: small — H6, medium — H5",options:[...L]},titleElementBefore:{control:"select",description:"Элемент перед текстом заголовка",options:[...N]},titleElementAfter:{control:"select",description:"Элемент после текста заголовка",options:[...W]},actionsMode:{control:"select",description:"Действия в шапке: одна кнопка или выпадающее меню",options:[...j]}},Y={none:void 0,icon:e.createElement(g,null),checkbox:{component:"checkbox"},radio:x,toggle:{component:"toggle"}},F={none:void 0,text:{component:"text",children:"Text",type:"BTM3"},toggle:{component:"toggle"},radio:x},G={none:void 0,single:[{icon:e.createElement(r,null),onClick:()=>{}}],multiple:D},y={argTypes:_(T),parameters:{badges:[l.stable,l.reviewedByDesign],docs:{page:z(c)},design:c.pixsoView},decorators:[(t,n)=>e.createElement(i,null,e.createElement(t,{...n}))]},K={title:"Hexa UI Components/Card",component:f,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["cardStorySettings"],...y},o={name:"Playground",args:{...J,testId:"card-test-id",klId:"card-kl-id"},parameters:{controls:{include:P(T),sort:"none"}},render:({actionsMode:t,contentText:n,maxHeight:E,titleElementAfter:b,titleElementBefore:h,titleSize:v,titleText:s,...S})=>{const A=s?{value:s,size:v,elementBefore:Y[h],elementAfter:F[b]}:void 0;return e.createElement(f,{...S,actions:G[t],maxHeight:E||void 0,title:A},e.createElement(u,null,n))}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    ...defaultArgs,
    testId: 'card-test-id',
    klId: 'card-kl-id'
  },
  parameters: {
    controls: {
      include: getControlsInclude(cardPropPresentation),
      sort: 'none'
    }
  },
  render: ({
    actionsMode,
    contentText,
    maxHeight,
    titleElementAfter,
    titleElementBefore,
    titleSize,
    titleText,
    ...rest
  }: StoryCardProps) => {
    const title: CardTitleProps | undefined = titleText ? {
      value: titleText,
      size: titleSize,
      elementBefore: titleElementBeforeVariants[titleElementBefore],
      elementAfter: titleElementAfterVariants[titleElementAfter]
    } : undefined;
    return <CardComponent {...rest} actions={actionsModeVariants[actionsMode]} maxHeight={maxHeight || undefined} title={title}>
        <Text>{contentText}</Text>
      </CardComponent>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Q=["cardStorySettings","Playground"],se=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:Q,cardStorySettings:y,default:K},Symbol.toStringTag,{value:"Module"}));export{se as C,ie as a,re as b,y as c,D as d,a as e,ae as l};
