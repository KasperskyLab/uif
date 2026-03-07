import{R as l,b as t,T as s,H as e}from"./iframe-zz6a49H8.js";import{w as a}from"./withMeta-CjSZnBk7.js";const o={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},r="Panel",n="Панель — сервисный компонент, являющийся контейнером для контента. Панель может встраиваться в страницу или сайдбар. Панель может быть горизонтальной или вертикальной. Панель может иметь статическую ширину или растягиваться.",u="Панель может располагаться на уровне контента и при раскрытии сдвигать контентную область. Панель может располагаться над уровнем контента и при раскрытии перекрывать контентную область. Например, в графах панель находится на уровне контролов и сдвигает их, а также над уровнем самого графа и перекрывает его.",m="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=140826%3A286962",d="https://pixso.net/app/design/2EFkFswKkyLptDhPcW8Wbg",i={dod:o,component:r,description:n,usage:u,designLink:m,pixsoView:d},c=e.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-self: normal;
  margin: calc(var(--spacing--padding_xl) * -1);
`,b=e.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-self: normal;

  &.footer,
  &.header {
    flex: 0;
  }
`,x=e.div`
  padding: var(--spacing--padding_l);
  flex: 1;
  background-image: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 10px, transparent 10px, transparent 20px);
`,p=l.createElement(s,null,"Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis. Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis."),q={parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:a(i)},design:i.pixsoView},argTypes:{initialSize:{control:{type:"range",min:130,max:900,step:1}},elementAfter:{control:!1},sectionBottom:{control:!1},padding:{control:{type:"radio"},options:["large","medium"]}},args:{children:p,testId:"panel-test-id",klId:"panel-kl-id",closable:!0,resizable:!0,title:"Panel title",padding:"large"}};export{x as O,c as P,b as a,p as m,q as s};
