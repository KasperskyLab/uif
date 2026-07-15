import{C as m,w as u,R as t,l as f,an as g,T as y,H as b}from"./iframe-4-PRSI1I.js";import{T as x}from"./Tag-B3SARhhR.js";import{B as N}from"./Breadcrumbs-YahFHogo.js";const e="hexa-ui-page-header",$=m`
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
`,d=n=>{const{breadcrumbs:l,description:s,iconBefore:r,tagsAfter:a,elementAfter:i,title:c,testAttributes:o,className:p}=u(n);return t.createElement(E,{className:f(e,p),...o},l&&t.createElement(N,{...l,size:"small"}),t.createElement("div",{className:`${e}-content`},t.createElement("div",{className:`${e}-content-left`},r&&t.createElement("div",{className:`${e}-content-left-before`},r),t.createElement("div",{className:`${e}-content-left-main`},t.createElement("div",{className:`${e}-content-left-main-title`},t.createElement(g,null,c),a&&a.length&&t.createElement("div",{className:`${e}-content-left-main-title-tags`},t.createElement(x.Group,{items:a}))),s&&t.createElement(y,{type:"BTR2"},s))),i&&t.createElement("div",{className:`${e}-content-right`},i)))};try{d.displayName="PageHeader",d.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbsProps"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},elementAfter:{defaultValue:null,description:"",name:"elementAfter",required:!1,type:{name:"ReactNode"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"ReactNode"}},tagsAfter:{defaultValue:null,description:"",name:"tagsAfter",required:!1,type:{name:"TagProps[] | ReactElement<TagProps, string | JSXElementConstructor<any>>[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{d as P};
