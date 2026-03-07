import{a0 as $,R as e,v as j,ai as Z,T as X,r as i,u as Y,j as h,A as B,aC as U,H as W}from"./iframe-zz6a49H8.js";const F=$`
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
`,G={small:X,medium:Z,large:j},I=({text:o,size:s="large"})=>{const d=G[s];return e.createElement(d,null,o)};I.__docgenInfo={description:"",methods:[],displayName:"PanelTitle",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"panelTitleSize[number]",raw:"typeof panelTitleSize[number]"},description:"",defaultValue:{value:"'large'",computed:!1}}}};const J=W.div`
  ${F}
`,r={HORIZONTAL:"horizontal",VERTICAL:"vertical"},K=({children:o,className:s,testId:d,klId:A,componentId:V,componentType:k,resizeHandle:a="left",resizable:p=!1,closable:C=!0,onClose:c,open:u=!0,title:f,titleSize:S="large",sectionBottom:x,elementAfter:g,initialSize:m,padding:L="large",parentLayout:l})=>{const[O,b]=i.useState(!u),{testAttributes:v}=Y({testId:d,klId:A,componentId:V,componentType:k}),t=i.useRef(null),y=["left","right"].includes(a)?r.VERTICAL:r.HORIZONTAL;i.useEffect(()=>{b(!u)},[u]),i.useEffect(()=>{var n;m&&((n=t.current)==null||n.style.setProperty("--panel-size",`${m}px`))},[m]);const _=()=>{b(!0),c==null||c()},M=n=>{if(!t.current)return;const w={x:n.clientX,y:n.clientY},T=window.getComputedStyle(t.current),H=parseInt(T.width,10),D=parseInt(T.height,10),z=["right","bottom"].includes(a)?1:-1,R=E=>{var P,q;y===r.VERTICAL?(P=t.current)==null||P.style.setProperty("--panel-size",`${H+(E.clientX-w.x)*z}px`):(q=t.current)==null||q.style.setProperty("--panel-size",`${D+(E.clientY-w.y)*z}px`)},N=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",N)};p&&(document.addEventListener("mousemove",R),document.addEventListener("mouseup",N))};return e.createElement(J,{className:h("hexa-ui-panel",s,{"panel-horizontal":y===r.HORIZONTAL},{"panel-resizable":p},{"panel-not-resizable":!p},{"panel-hidden":O},{"panel-medium":L==="medium"},{"panel-parent":l}),ref:t,...v},e.createElement("div",{className:h("hexa-ui-panel-handle",{"handle-left":a==="left"},{"handle-right":a==="right"},{"handle-top":a==="top"},{"handle-bottom":a==="bottom"}),onMouseDown:M}),!l&&e.createElement("div",{className:"hexa-ui-panel-header"},f&&e.createElement("div",{className:"hexa-ui-panel-header-title"},e.createElement(I,{text:f,size:S})),g&&e.createElement("div",{className:"hexa-ui-panel-header-after"},g),C&&!l&&e.createElement(B,{className:"hexa-ui-panel-close",size:"large",onClick:_})),e.createElement("div",{className:h("hexa-ui-panel-container"),...U("body",v)},o),x&&!l&&e.createElement("div",{className:"hexa-ui-panel-bottom"},x))};K.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Panel body content"},className:{required:!1,tsType:{name:"string"},description:"Css class"},resizeHandle:{required:!1,tsType:{name:"union",raw:"'top' | 'left' | 'right' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"Resize control position",defaultValue:{value:"'left'",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"Panel is resizable  *",defaultValue:{value:"false",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"Panel is closable  *",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback on close"},open:{required:!1,tsType:{name:"boolean"},description:"Panel is open  *",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Panel title text"},titleSize:{required:!1,tsType:{name:"panelTitleSize[number]",raw:"typeof panelTitleSize[number]"},description:"Panel title size",defaultValue:{value:"'large'",computed:!1}},sectionBottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Panel section bottom with ReactNode"},elementAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Panel element after title with ReactNode"},initialSize:{required:!1,tsType:{name:"number"},description:"Initial panel size"},padding:{required:!1,tsType:{name:"union",raw:"'large' | 'medium'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"}]},description:"Initial padding size",defaultValue:{value:"'large'",computed:!1}},parentLayout:{required:!1,tsType:{name:"boolean"},description:"Panel layout for children panels"}}};export{K as P};
