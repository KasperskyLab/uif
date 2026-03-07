import{H as i,A as p,a2 as q,a1 as A,aw as I,a0 as N,R as e,T as _,a5 as z,u as P,as as R}from"./iframe-zz6a49H8.js";import{D as B}from"./Dropdown-D5otA5yN.js";import{o as D}from"./Upload-BgoxvLW9.js";import{w as S}from"./index-BDzolQnr.js";import{t as H}from"./Menu2-gmgzxp5q.js";import{C as O}from"./Checkbox-CLDGkQjT.js";import{R as j}from"./Radio-Be_5Z3PZ.js";import{T as F}from"./Toggle-DQagZAli.js";import{I as M}from"./IconResolver-BTOOgpNr.js";const l=A(),T=i(p)``,L=i(p)``,E=i.div``,V=i.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,W=i.div`
  display: flex;
  gap: 8px;
  width: 100%;
`,y=i.span`
  display: flex;
  align-items: center;
  height: 24px;
`,h=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;

  .card-action-button {
    height: max-content;
  }
`,U=N`
  ${q(I.BTR3)};
  position: relative;
  border-radius: 12px;
  padding: ${l("padding")};
  background: ${l("enabled.background")};
  color: ${l("enabled.color")};
  border: 1px solid ${l("enabled.border")};

  ${n=>n.draggable&&"margin-left: 16px;"}

  ${n=>n.interactive&&`
  &:hover {
    background: ${l("hover.background")(n)};
    border-color: ${l("hover.border")(n)};
  }

  &:active {
    background: ${l("active.background")(n)};
    border-color: ${l("active.border")(n)};
  }`}

  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  ${T} {
    position: absolute;
    top: 6px;
    left: -16px;
  }

  ${E} {
    position: absolute;
    top: 4px;
    right: 4px;

    ${h} {
      height: unset;
    }
  }
`,f=n=>{switch(n.component){case"checkbox":{const{component:r,...t}=n;return e.createElement(O,{...t})}case"radio":{const{component:r,...t}=n;return e.createElement(j,{...t})}case"toggle":{const{component:r,...t}=n;return e.createElement(F,{...t})}case"icon":{const{component:r,...t}=n;return e.createElement(M,{...t})}case"text":{const{component:r,...t}=n;return e.createElement(_,{...t})}default:return e.createElement(e.Fragment,null)}};f.__docgenInfo={description:"",methods:[],displayName:"getMappedElement"};const G=n=>z(n,{componentName:"card",defaultValues:{size:"medium",mode:"base"},propsToDrill:["size"]}),m="menu-icon",d="dnd-icon",u="close-icon",J=i.div.withConfig({shouldForwardProp:n=>!["cssConfig","draggable","interactive"].includes(n)})`${U}`,K=n=>{const r=G(n),t=P(r);return e.createElement(Q,{...t,testId:r.testId,klId:r.klId})},Q=({style:n,children:r,className:t,draggable:v,closable:g,onCloseButtonClick:k,size:$,title:o,actions:a,testAttributes:w,klId:s,testId:c,...x})=>{const C=e.createElement(h,null,a&&a.length===1&&e.createElement(p,{size:"large",icon:a[0].icon,onClick:a[0].onClick}),a&&a.length>1&&e.createElement(B,{trigger:["click"],overlay:a.map(b=>({children:b.value,onClick:b.onClick}))},e.createElement(p,{size:"large",icon:e.createElement(H,null),testId:c?`${c}-${m}`:`${m}`,klId:s?`${s}-${m}`:`${m}`,className:"card-action-button"})),g&&e.createElement(L,{size:"large",icon:e.createElement(D,null),onClick:k,testId:c?`${c}-${u}`:`${u}`,klId:s?`${s}-${u}`:`${u}`,className:"card-action-button"}));return e.createElement(J,{className:t,style:n,draggable:v,...w,...x},v&&e.createElement(T,{icon:e.createElement(S,null),testId:c?`${c}-${d}`:`${d}`,klId:s?`${s}-${d}`:`${d}`}),o&&e.createElement(V,null,e.createElement(W,null,o.elementBefore&&e.createElement(y,null,f(o.elementBefore)),e.createElement(R,{type:o.size==="medium"?"H5":"H6",style:{width:"100%"}},o.value),o.elementAfter&&e.createElement(y,null,f(o.elementAfter))),(a||g)&&C),!o&&$==="large"&&(a||g)&&e.createElement(E,null,C),r)};K.__docgenInfo={description:"",methods:[],displayName:"Card",props:{theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'filled' | 'base' | 'selected'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'base'"},{name:"literal",value:"'selected'"}]},description:"Color mode"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size"},title:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  value: string,
  size?: CardTitleSize,
  elementBefore?: ElementBefore,
  elementAfter?: ElementAfter
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1}},{key:"elementBefore",value:{name:"union",raw:`TitleElement
| ({ component: 'checkbox' } & CheckboxProps)
| ({ component: 'icon' } & IconResolverProps)`,elements:[{name:"union",raw:"({ component: 'toggle' } & ToggleProps) | ({ component: 'radio' } & RadioProps)",elements:[{name:"unknown"},{name:"unknown"}]},{name:"unknown"},{name:"unknown"}],required:!1}},{key:"elementAfter",value:{name:"union",raw:"TitleElement | ({ component: 'text' } & TextProps)",elements:[{name:"union",raw:"({ component: 'toggle' } & ToggleProps) | ({ component: 'radio' } & RadioProps)",elements:[{name:"unknown"},{name:"unknown"}]},{name:"unknown"}],required:!1}}]}},description:"Card title"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: ReactNode,
  onClick?: () => void,
  value?: string
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"value",value:{name:"string",required:!1}}]}}],raw:"CardAction[]"},description:"Actions"},draggable:{required:!1,tsType:{name:"boolean"},description:"If draggable"},closable:{required:!1,tsType:{name:"boolean"},description:"If closable"},interactive:{required:!1,tsType:{name:"boolean"},description:"If interactive"},onCloseButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for clicking close icon"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content of the card"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};export{K as C};
