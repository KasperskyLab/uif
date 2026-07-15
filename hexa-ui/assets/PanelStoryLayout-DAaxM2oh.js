import{H as e,R as s,T as o,G as a}from"./iframe-4-PRSI1I.js";import{w as u}from"./withMeta-BwOuJ6tr.js";const d={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},m="Panel",p="Панель — сервисный компонент, являющийся контейнером для контента. Панель может встраиваться в страницу или сайдбар. Панель может быть горизонтальной или вертикальной. Панель может иметь статическую ширину или растягиваться.",f="Панель может располагаться на уровне контента и при раскрытии сдвигать контентную область. Панель может располагаться над уровнем контента и при раскрытии перекрывать контентную область. Например, в графах панель находится на уровне контролов и сдвигает их, а также над уровнем самого графа и перекрывает его.",c="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=140826%3A286962",g="https://pixso.net/app/design/2EFkFswKkyLptDhPcW8Wbg",l={dod:d,component:m,description:p,usage:f,designLink:c,pixsoView:g},i=e.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-self: normal;
  margin: calc(var(--spacing--padding_xl) * -1);
`,n=e.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-self: normal;

  &.footer,
  &.header {
    flex: 0;
  }
`,r=e.div`
  padding: var(--spacing--padding_l);
  flex: 1;
  background-image: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 10px, transparent 10px, transparent 20px);
`,y=s.createElement(o,null,"Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis."),b={parameters:{badges:[a.stable,a.reviewedByDesign],docs:{page:u(l)},design:l.pixsoView},argTypes:{initialSize:{control:{type:"range",min:130,max:900,step:1}},elementAfter:{control:!1},sectionBottom:{control:!1},padding:{control:{type:"radio"},options:["large","medium"]}},args:{children:y,testId:"panel-test-id",klId:"panel-kl-id",closable:!0,resizable:!0,title:"Panel title",padding:"large"}};try{i.displayName="PanelsLayout",i.__docgenInfo={description:"",displayName:"PanelsLayout",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{n.displayName="PanelsCol",n.__docgenInfo={description:"",displayName:"PanelsCol",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="OtherArea",r.__docgenInfo={description:"",displayName:"OtherArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{r as O,i as P,n as a,y as m,b as s};
