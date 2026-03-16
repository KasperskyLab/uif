import{a0 as m,u as p,R as t,ah as d,T as f,H as g}from"./iframe-DlY6n6Um.js";import{T as u}from"./Tag-Cd3srqW9.js";import{B as x}from"./Breadcrumbs-DKJmdEj8.js";const e="hexa-ui-page-header",y=m`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 24px;

  .${e}-content {
    display: flex;
    justify-content: space-between;

    .${e}-content-left {
      display: flex;
      gap: 8px;

      .${e}-content-left-main {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .${e}-content-left-main-title {
          display: flex;
          gap: 8px;

          .${e}-content-left-main-title-tags {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .${e}-content-left-before, .${e}-content-right {
      display: flex;
      align-items: center;
      height: 32px;
    }
  }
`,$=g.div`
  ${y}
`,T=i=>{const{breadcrumbs:s,description:l,iconBefore:n,tagsAfter:a,elementAfter:r,title:c,testAttributes:o}=p(i);return t.createElement($,{className:e,...o},s&&t.createElement(x,{...s,size:"small"}),t.createElement("div",{className:`${e}-content`},t.createElement("div",{className:`${e}-content-left`},n&&t.createElement("div",{className:`${e}-content-left-before`},n),t.createElement("div",{className:`${e}-content-left-main`},t.createElement("div",{className:`${e}-content-left-main-title`},t.createElement(d,null,c),a&&a.length&&t.createElement("div",{className:`${e}-content-left-main-title-tags`},t.createElement(u.Group,{items:a}))),t.createElement(f,{type:"BTR2"},l))),r&&t.createElement("div",{className:`${e}-content-right`},r)))};T.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{breadcrumbs:{required:!1,tsType:{name:"BreadcrumbsProps"},description:""},description:{required:!1,tsType:{name:"string"},description:""},elementAfter:{required:!1,tsType:{name:"ReactNode"},description:""},iconBefore:{required:!1,tsType:{name:"ReactNode"},description:""},tagsAfter:{required:!1,tsType:{name:"TagGroupProps['items']",raw:"TagGroupProps['items']"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};export{T as P};
