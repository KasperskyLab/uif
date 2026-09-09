import{R as e,b as M,T as y,H as C,M as p}from"./iframe-DedYZBTA.js";import{e as w,g as z,c as V}from"./propPresentation-BNIeMkgM.js";import{w as k}from"./withMeta-DvkmiJqW.js";import{o as i}from"./Placeholder-DXWNW80D.js";import{C as T}from"./Card-C6AxAZ3v.js";import{s as P}from"./resolveDesignControls-CFhBuB_d.js";const _=e.forwardRef((t,n)=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24",ref:n,...t},e.createElement("path",{fill:M(t.color)||t.color||"currentColor",fillRule:"evenodd",d:"M9 3a1 1 0 0 1 .3385.0588l5.6302 1.8767 4.6599-1.864A1 1 0 0 1 21 4v13.5a1 1 0 0 1-.5528.8944l-4.9821 2.4911a.995.995 0 0 1-.5113.1134.99.99 0 0 1-.3589-.0844l-5.557-2.3154-4.5907 2.2953A1 1 0 0 1 3 20V6a1 1 0 0 1 .6286-.9285L8.6074 3.08A1 1 0 0 1 9 3m7 15.382 3-1.5V5.477l-3 1.2zM14 6.7208V18.5l-4-1.6667V5.3874zM5 6.677l3-1.2v11.405l-3 1.5z"}))),c=e.memo(e.forwardRef((t,n)=>{const{klId:r,testId:l,...a}=t;return e.createElement(_,{"kl-id":r,"data-testid":l,ref:n,...a})}));c.displayName="Map";const B={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},H="Card",I="Компонент Card — это компонент, предназначенный для группировки связанного контента или действий.",O="Карточка помогает организовать информацию, выделить её на фоне остального контента, и показать на какие элементы интерфейса распространяются возможности настройки или редактирования.",R="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=98007%3A285970",D="https://pixso.net/app/design/Nh-gabA5flR-UqNiiMDMgw",u={dod:B,component:H,description:I,usage:O,designLink:R,pixsoView:D},d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu. Fusce accumsan erat purus.",le=e.createElement(y,null,d),s=C.div`
  width: 400px;
`,ae={value:"Title",elementBefore:e.createElement(c,null),elementAfter:{component:"text",children:"Text",type:"BTM3"},size:"small"},ie={value:d,size:"small",elementBefore:{component:"checkbox"},elementAfter:{component:"toggle"}},v={component:"radio",options:[{label:"Option 1",value:"option1"}],value:"option1"},q=[{icon:e.createElement(i,null),value:"Action 1"},{icon:e.createElement(i,null),value:"Action 2"}];try{s.displayName="StoryWrapper",s.__docgenInfo={description:"",displayName:"StoryWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const L=["base","filled","selected"],N=["small","medium","large"],W=["small","medium"],j=["none","icon","checkbox","radio","toggle"],U=["none","text","toggle","radio"],J=["none","single","multiple"],Y=(t,n={})=>w(P[t],n),F={mode:"base",size:"medium",draggable:!1,closable:!1,interactive:!1,maxHeight:"",contentText:d,titleText:"",titleSize:"small",titleElementBefore:"none",titleElementAfter:"none",actionsMode:"none"},E={mode:{control:"select",description:"Цветовой вариант карточки",options:[...L]},size:Y("size",{options:[...N],description:"Размер внутренних отступов и компоновки"}),draggable:{control:"boolean",description:"Показывает иконку перетаскивания слева от карточки"},closable:{control:"boolean",description:"Показывает кнопку закрытия в области действий"},interactive:{control:"boolean",description:"Включает интерактивные состояния hover и active"},maxHeight:{control:"text",description:"Максимальная высота контента. При превышении включается прокрутка (кроме size small)"},contentText:{control:"text",description:"Текст основного содержимого карточки"},titleText:{control:"text",description:"Текст заголовка. Пустая строка — заголовок не отображается"},titleSize:{control:"select",description:"Типографика заголовка: small — H6, medium — H5",options:[...W]},titleElementBefore:{control:"select",description:"Элемент перед текстом заголовка",options:[...j]},titleElementAfter:{control:"select",description:"Элемент после текста заголовка",options:[...U]},actionsMode:{control:"select",description:"Действия в шапке: одна кнопка или выпадающее меню",options:[...J]}},K={none:void 0,icon:e.createElement(c,null),checkbox:{component:"checkbox"},radio:v,toggle:{component:"toggle"}},Q={none:void 0,text:{component:"text",children:"Text",type:"BTM3"},toggle:{component:"toggle"},radio:v},Z={none:void 0,single:[{icon:e.createElement(i,null),onClick:()=>{}}],multiple:q},h={argTypes:V(E),parameters:{badges:[p.stable,p.reviewedByDesign],docs:{page:k(u)},design:u.pixsoView},decorators:[(t,n)=>e.createElement(s,null,e.createElement(t,{...n}))]},$={title:"Hexa UI Components/Card",component:T,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["cardStorySettings"],...h},o={name:"Playground",args:{...F,testId:"card-test-id",klId:"card-kl-id"},parameters:{controls:{include:z(E),sort:"none"}},render:({actionsMode:t,contentText:n,maxHeight:r,titleElementAfter:l,titleElementBefore:a,titleSize:b,titleText:m,...A})=>{const S=m?{value:m,size:b,elementBefore:K[a],elementAfter:Q[l]}:void 0;return e.createElement(T,{...A,actions:Z[t],maxHeight:r||void 0,title:S},e.createElement(y,null,n))}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const G=["cardStorySettings","Playground"],se=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:G,cardStorySettings:h,default:$},Symbol.toStringTag,{value:"Module"}));export{se as C,ae as a,le as b,h as c,q as d,d as e,ie as l};
