import{H as l,a1 as v,a2 as w,C as N,D as b,aB as C,R as t,A as o,am as k,aj as E,ak as T,al as _,F as q,w as V}from"./iframe-4-PRSI1I.js";import{g as f}from"./generateId-BXJELych.js";import{e as d}from"./index-C0IykO9V.js";import{c as $}from"./Kira-BxHDJInH.js";const p=["error","success","info","warning","ai"],a=b(),D=520;l.div`
  display: flex;
  gap: 20px;
`;const g=l.div``,A=N`
  .ant-notification-notice-message,
  .ant-notification-notice-description {
    ${v(w.BTR3)};
    gap: 32px;
  }

  .ant-notification-notice {
    width: ${D}px;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 14px 16px;
    gap: 8px;
    border-radius: 8px;
  }
  
  ${e=>p.map(n=>`
      .ant-notification-notice-${n} {
        background: ${a(`${n}.background`)(e)};
        color: ${a(`${n}.color`)(e)};
        
        .ant-notification-notice-description {
          color: ${a(`${n}.color`)(e)};
          padding-right: 0px;
        }

        .ant-notification-notice-close {
          position: initial;
          height: 20px;
        }
        .toast-text {
          padding-right: var(--spacing--padding_m);
        }
        .toast-action-button {
          padding: 0;
          white-space: nowrap;

          &:after {
            background:  ${a(`${n}.separator`)(e)};
            margin-top: -1px;
          }
        }
      }
    `).join("")}

  .toast-action-button::after {
    display: block;
    content: '';
    width: 1px;
    margin-left: 8px;
    height: 20px;
  }

  .ant-notification-notice-content {
    width: 100%;
  }

  .ant-notification-notice-with-icon {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    margin-left: 0px;
    gap: 8px;
  }

  .ant-notification-notice-description {
    margin: 1px 0 -1px 0;
  }
  .ant-notification-notice-description, ${g} {
    display: flex;
    align-items: start;
    width: 100%;
    justify-content: space-between;
    margin-left: 0px;
    word-break: break-word;
  }

  .ant-notification-notice-message {
    display: none;
  }

  .ant-notification-notice-icon {
    position: relative;
    margin-left: 0px;
    height: 20px;
    line-height: 20px;
  }

  ${e=>e.noIcon&&`
    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 0px;
    }
    .ant-notification-notice-closable .ant-notification-notice-message {
      padding-right: 0px;
    }
    .ant-notification-notice-icon {
      display: none;
    }`}
`,B=5,y=f(),R={error:()=>t.createElement(_,{"data-component-id":"icon-error"}),warning:()=>t.createElement(T,{"data-component-id":"icon-warning"}),success:()=>t.createElement(E,{"data-component-id":"icon-success"}),info:()=>t.createElement(k,{"data-component-id":"icon-info"}),ai:()=>t.createElement($,{"data-component-id":"icon-ai"})},z={error:()=>t.createElement(o,{size:"large",mode:"ghostInverted"}),warning:()=>t.createElement(o,{size:"large",mode:"onLight"}),success:()=>t.createElement(o,{size:"large",mode:"ghostInverted"}),info:()=>t.createElement(o,{size:"large",mode:"ghostInverted"}),ai:()=>t.createElement(o,{size:"large",mode:"ghostInverted"})},r=e=>{var u;const n=e.key||f();let i=e.mode;p.includes(e.mode)||(i="info",C("mode",e.mode));const s=e.mode==="warning"?"ghost":"ghostInverted",h=R[i],I=z[i],x=t.createElement(g,{"data-toasttype":i},t.createElement("span",{className:"toast-text"},e.description),e.actionButton&&t.createElement(o,{onClick:(u=e.actionButton)==null?void 0:u.onClick,mode:s,size:"large",className:"toast-action-button",noIcon:!0},e.actionButton.title));return d.open({message:"",duration:e.duration??B,description:x,getContainer:()=>document.getElementById(e.id?e.id:y),closeIcon:t.createElement(I,null),className:`ant-notification-notice-${i}`,icon:t.createElement(h,null),key:n,onClose:e.onClose,placement:"topRight"}),n};p.forEach(e=>{r[e]=n=>{let i;return typeof n=="string"?i={description:n}:i=n,r({...i,mode:e})}});r.close=e=>d.close(e);const m=r,P=()=>{d.destroy()};try{m.displayName="openNotification",m.__docgenInfo={description:"",displayName:"openNotification",props:{id:{defaultValue:null,description:"Notification Container id",name:"id",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"Component visual variant: 'error' | 'success' | 'info' | 'warning'",name:"mode",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"ai"'}]}},duration:{defaultValue:null,description:"Duration of showing Toast where 0 - never auto close",name:"duration",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"Text inside notification",name:"description",required:!1,type:{name:"ReactNode"}},key:{defaultValue:null,description:"The unique identifier of the Notification",name:"key",required:!1,type:{name:"string"}},place:{defaultValue:null,description:"@deprecated No effect",name:"place",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},actionButton:{defaultValue:null,description:"Action button before close icon",name:"actionButton",required:!1,type:{name:"{ title: string; onClick: (arg: any) => void; }"}},onClose:{defaultValue:null,description:"Callback on close",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const L=e=>q(e,{componentName:"notification",defaultValues:{}}),M=l.div.withConfig({shouldForwardProp:e=>!["cssConfig","noIcon"].includes(e)})`
 ${A}
`,c=({id:e=y,...n})=>{const{testAttributes:i,...s}=V(L(n));return t.createElement(M,{id:e,...i,...s})};c.displayName="Notification";try{c.displayName="Notification",c.__docgenInfo={description:"",displayName:"Notification",props:{id:{defaultValue:{value:"generateId()"},description:"",name:"id",required:!1,type:{name:"string"}},noIcon:{defaultValue:null,description:"Don't show first icon",name:"noIcon",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{c as N,P as n,m as o};
