import{H as r,a2 as w,aw as y,a1 as E,a0 as $,at as C,R as e,A as i,aj as N,aO as b,aP as T,aQ as v,w as k,u as D}from"./iframe-DlY6n6Um.js";import{g as m}from"./generateId-BXJELych.js";import{o as A}from"./Kira-YbMWu56z.js";import{e as d}from"./type-Cyafuwrq.js";const p=["error","success","info","warning","ai"],a=E(),z=520;r.div`
  display: flex;
  gap: 20px;
`;const f=r.div``,B=$`
  .ant-notification-notice-message,
  .ant-notification-notice-description {
    ${w(y.BTR3)};
    gap: 32px;
  }

  .ant-notification-notice {
    width: ${z}px;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 14px 16px;
    gap: 8px;
    border-radius: 8px;
  }
  
  ${t=>p.map(n=>`
      .ant-notification-notice-${n} {
        background: ${a(`${n}.background`)(t)};
        color: ${a(`${n}.color`)(t)};
        
        .ant-notification-notice-description {
          color: ${a(`${n}.color`)(t)};
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
            background:  ${a(`${n}.separator`)(t)};
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
  .ant-notification-notice-description, ${f} {
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

  ${t=>t.noIcon&&`
    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 0px;
    }
    .ant-notification-notice-closable .ant-notification-notice-message {
      padding-right: 0px;
    }
    .ant-notification-notice-icon {
      display: none;
    }`}
`,M=5,g=m(),R={error:()=>e.createElement(v,{"data-component-id":"icon-error"}),warning:()=>e.createElement(T,{"data-component-id":"icon-warning"}),success:()=>e.createElement(b,{"data-component-id":"icon-success"}),info:()=>e.createElement(N,{"data-component-id":"icon-info"}),ai:()=>e.createElement(A,{"data-component-id":"icon-ai"})},_={error:()=>e.createElement(i,{size:"large",mode:"ghostInverted"}),warning:()=>e.createElement(i,{size:"large",mode:"onLight"}),success:()=>e.createElement(i,{size:"large",mode:"ghostInverted"}),info:()=>e.createElement(i,{size:"large",mode:"ghostInverted"}),ai:()=>e.createElement(i,{size:"large",mode:"ghostInverted"})},c=t=>{var l;const n=t.key||m();let o=t.mode;p.includes(t.mode)||(o="info",C("mode",t.mode));const s=t.mode==="warning"?"ghost":"ghostInverted",h=R[o],x=_[o],I=e.createElement(f,{"data-toasttype":o},e.createElement("span",{className:"toast-text"},t.description),t.actionButton&&e.createElement(i,{onClick:(l=t.actionButton)==null?void 0:l.onClick,mode:s,size:"large",className:"toast-action-button",noIcon:!0},t.actionButton.title));return d.open({message:"",duration:t.duration??M,description:I,getContainer:()=>document.getElementById(t.id?t.id:g),closeIcon:e.createElement(x,null),className:`ant-notification-notice-${o}`,icon:e.createElement(h,null),key:n,onClose:t.onClose,placement:"topRight"}),n};p.forEach(t=>{c[t]=n=>{let o;return typeof n=="string"?o={description:n}:o=n,c({...o,mode:t})}});c.close=t=>d.close(t);const O=c,S=()=>{d.destroy()},j=t=>k(t,{componentName:"notification",defaultValues:{}}),P=r.div.withConfig({shouldForwardProp:t=>!["cssConfig","noIcon"].includes(t)})`
 ${B}
`,u=({id:t=g,...n})=>{const{testAttributes:o,...s}=D(j(n));return e.createElement(P,{id:t,...o,...s})};u.displayName="Notification";u.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"generateId()",computed:!0}},noIcon:{required:!1,tsType:{name:"boolean"},description:"Don't show first icon"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{u as N,S as n,O as o};
