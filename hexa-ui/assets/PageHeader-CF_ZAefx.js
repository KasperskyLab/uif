import{C as p,u,R as t,d as f,W as g,T as y,H as b}from"./iframe-DedYZBTA.js";import{T as x}from"./Tag-BKPu3-sD.js";import{B as N}from"./Breadcrumbs-DG0vgmIh.js";const e="hexa-ui-page-header",$=p`
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
`,E=b.div`
  ${$}
`,c=n=>{const{breadcrumbs:l,description:r,iconBefore:i,tagsAfter:a,elementAfter:s,title:d,testAttributes:o,className:m}=u(n);return t.createElement(E,{className:f(e,m),...o},l&&t.createElement(N,{...l,size:"small"}),t.createElement("div",{className:`${e}-content`},t.createElement("div",{className:`${e}-content-left`},i&&t.createElement("div",{className:`${e}-content-left-before`},i),t.createElement("div",{className:`${e}-content-left-main`},t.createElement("div",{className:`${e}-content-left-main-title`},t.createElement(g,null,d),a&&a.length&&t.createElement("div",{className:`${e}-content-left-main-title-tags`},t.createElement(x.Group,{items:a}))),r&&t.createElement(y,{type:"BTR2"},r))),s&&t.createElement("div",{className:`${e}-content-right`},s)))};try{c.displayName="PageHeader",c.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsProps"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"ReactNode"}},tagsAfter:{defaultValue:null,description:"",name:"tagsAfter",required:!1,type:{name:"TagProps[] | ReactElement<TagProps, string | JSXElementConstructor<any>>[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{c as P};
