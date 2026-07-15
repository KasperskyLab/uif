import{C as j,R as e,K as B,au as X,T as Y,r as d,w as K,l as g,A as W,aD as F,H as G}from"./iframe-4-PRSI1I.js";const J=j`
  --panel-padding: var(--spacing--padding_xl);

  width: var(--panel-size, 280px);
  min-width: 200px;
  max-width: 80%;
  position: relative;
  background-color: var(--panel--bg--enabled);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing--gap_section);
  padding: var(--panel-padding) 0;
  
  &.panel-hidden {
    display: none;
  }
  
  &.panel-medium {
    --panel-padding: var(--spacing--padding_l);
  }

  &.panel-horizontal {
    width: auto;
    height: var(--panel-size, 180px);
  }

  &.panel-resizable {
    > .hexa-ui-panel-handle {
      cursor: col-resize;

      &:before,
      &:after {
        display: block;
      }

      &:hover {
        &:after,
        &:before {
          background-color: var(--panel--border--hover);
        }
      }
    }

    &.panel-horizontal {
      > .hexa-ui-panel-handle {
        cursor: row-resize;
      }
    }
  }

  &.panel-horizontal {
    max-width: unset;
    min-height: 135px;
    max-height: 80%;
  }

  &.panel-parent {
    padding: 0;

    > .hexa-ui-panel-handle {
      z-index: 2;
    }

    > .hexa-ui-panel-container {
      padding: 0;
      margin: 0;
      scrollbar-gutter: auto;
      justify-content: stretch;
      flex-direction: column;

      > .hexa-ui-panel {
        width: auto;
        max-width: unset;
        min-height: 24px;
        max-height: 90%;

        &.panel-not-resizable {
          flex: auto;

          .hexa-ui-panel-handle {
            display: none;
          }
        }
      }
    }

    &.panel-horizontal {
      > .hexa-ui-panel-container {
        flex-direction: row;

        > .hexa-ui-panel {
          width: var(--panel-size, 280px);
          min-width: 200px;
          max-width: 80%;
        }
      }
    }
  }

  .hexa-ui-panel-handle {
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;
    width: 7px;
    align-items: center;
    user-select: none;
    z-index: 1;
    transform: translate(0);
    

    &:before {
      content: '';
      width: 1px;
      background-color: var(--panel--border--enabled);
      align-self: normal;
    }

    &:after {
      position: fixed;
      content: '';
      display: none;
      width: 3px;
      height: 40px;
      border-radius: 6px;
      background-color: var(--panel--border--enabled);
      translate: -1px 0;
    }

    &.handle-right {
      left: auto;
      right: 0;
      flex-direction: row-reverse;

      &:after {
        translate: 1px 0;
      }
    }

    &.handle-top,
    &.handle-bottom {
      left: 0;
      right: 0;
      top: 0;
      width: auto;
      height: 8px;
      flex-direction: column;

      &:before {
        width: auto;
        height: 1px;
      }

      &:after {
        width: 40px;
        height: 3px;
        translate: 0 -1px;
      }
    }

    &.handle-bottom {
      top: auto;
      bottom: 0;
      flex-direction: column-reverse;

      &:after {
        translate: 0 1px;
      }
    }
  }

  .hexa-ui-panel-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 var(--panel-padding);
    gap: 8px;

    &:empty {
      display: none;
    }

    .hexa-ui-panel-header-title {
      margin-inline-end: auto;
    }
  }

  .hexa-ui-panel-container {
    flex: 1 1 0;
    display: flex;
    overflow: auto;
    padding: 0 8px 0 var(--panel-padding);
    margin-right: 8px;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar--bar--enabled);
      border-radius: 6px;
    }
  }

  .hexa-ui-panel-bottom {
    padding: 0 var(--panel-padding);
  }
`,Q={small:Y,medium:X,large:B},x=({text:n,size:p="large"})=>{const u=Q[p];return e.createElement(u,null,n)};try{x.displayName="PanelTitle",x.__docgenInfo={description:"",displayName:"PanelTitle",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const ee=G.div`
  ${J}
`,s={HORIZONTAL:"horizontal",VERTICAL:"vertical"},A=({children:n,className:p,testId:u,klId:C,componentId:L,componentType:S,resizeHandle:a="left",resizable:c=!1,closable:R=!0,onClose:m,open:h=!0,title:b,titleSize:H="large",sectionBottom:v,elementAfter:y,initialSize:f,padding:M="large",parentLayout:o,onResize:t})=>{const[O,w]=d.useState(!h),{testAttributes:I}=K({testId:u,klId:C,componentId:L,componentType:S}),l=d.useRef(null),V=["left","right"].includes(a)?s.VERTICAL:s.HORIZONTAL;d.useEffect(()=>{w(!h)},[h]),d.useEffect(()=>{var i;f&&((i=l.current)==null||i.style.setProperty("--panel-size",`${f}px`))},[f]);const D=()=>{w(!0),m==null||m()},U=i=>{if(!l.current)return;const z={x:i.clientX,y:i.clientY},N=window.getComputedStyle(l.current),$=parseInt(N.width,10),Z=parseInt(N.height,10),P=["right","bottom"].includes(a)?1:-1,q=E=>{var _,k;if(V===s.VERTICAL){const r=$+(E.clientX-z.x)*P;t==null||t(r),(_=l.current)==null||_.style.setProperty("--panel-size",`${r}px`)}else{const r=Z+(E.clientY-z.y)*P;t==null||t(r),(k=l.current)==null||k.style.setProperty("--panel-size",`${r}px`)}},T=()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",T)};c&&(document.addEventListener("mousemove",q),document.addEventListener("mouseup",T))};return e.createElement(ee,{className:g("hexa-ui-panel",p,{"panel-horizontal":V===s.HORIZONTAL},{"panel-resizable":c},{"panel-not-resizable":!c},{"panel-hidden":O},{"panel-medium":M==="medium"},{"panel-parent":o}),ref:l,...I},e.createElement("div",{className:g("hexa-ui-panel-handle",{"handle-left":a==="left"},{"handle-right":a==="right"},{"handle-top":a==="top"},{"handle-bottom":a==="bottom"}),onMouseDown:U}),!o&&e.createElement("div",{className:"hexa-ui-panel-header"},b&&e.createElement("div",{className:"hexa-ui-panel-header-title"},e.createElement(x,{text:b,size:H})),y&&e.createElement("div",{className:"hexa-ui-panel-header-after"},y),R&&!o&&e.createElement(W,{className:"hexa-ui-panel-close",size:"large",onClick:D})),e.createElement("div",{className:g("hexa-ui-panel-container"),...F("body",I)},n),v&&!o&&e.createElement("div",{className:"hexa-ui-panel-bottom"},v))};try{A.displayName="Panel",A.__docgenInfo={description:"",displayName:"Panel",props:{children:{defaultValue:null,description:"Panel body content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Css class",name:"className",required:!1,type:{name:"string"}},resizeHandle:{defaultValue:{value:"left"},description:"Resize control position",name:"resizeHandle",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},resizable:{defaultValue:{value:"false"},description:"Panel is resizable  *",name:"resizable",required:!1,type:{name:"boolean"}},closable:{defaultValue:{value:"true"},description:"Panel is closable  *",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback on close",name:"onClose",required:!1,type:{name:"(() => void)"}},open:{defaultValue:{value:"true"},description:"Panel is open  *",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Panel title text",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"large"},description:"Panel title size",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},sectionBottom:{defaultValue:null,description:"Panel section bottom with ReactNode",name:"sectionBottom",required:!1,type:{name:"ReactNode"}},elementAfter:{defaultValue:null,description:"Panel element after title with ReactNode",name:"elementAfter",required:!1,type:{name:"ReactNode"}},initialSize:{defaultValue:null,description:"Initial panel size",name:"initialSize",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"large"},description:"Initial padding size",name:"padding",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},parentLayout:{defaultValue:null,description:"Panel layout for children panels",name:"parentLayout",required:!1,type:{name:"boolean"}},onResize:{defaultValue:null,description:"A callback when resizing the panel",name:"onResize",required:!1,type:{name:"((panelSize: number) => void)"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{A as P};
