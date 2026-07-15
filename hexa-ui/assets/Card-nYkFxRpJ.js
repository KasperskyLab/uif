import{H as r,A as m,C as b,a1 as N,a2 as S,D as A,R as a,T as z,aq as P,w as F,l as D,aH as M}from"./iframe-4-PRSI1I.js";import{D as L}from"./Dropdown-BZXGqesC.js";import{o as R}from"./Delete-CDlfwLSW.js";import{t as U}from"./DragDrop-Cv_pZeq3.js";import{o as B}from"./Menu2-CvX9huZG.js";import{u as O}from"./useThemedScrollbar-Cg6KmBOg.js";import{s as j}from"./scrollbarCss-D90YlJlw.js";import{a as W}from"./Checkbox-C_Wci0Rq.js";import{I as K}from"./IconResolver-CjN0_zDB.js";import{R as G}from"./Radio-DUuhhrf2.js";import{T as J}from"./Toggle-Cpn23pdP.js";const o=A(),I=r(m)``,Q=r(m)``,$=r.div``,X=r.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,Y=r.div`
  display: flex;
  gap: 8px;
  width: 100%;
`,V=r.span`
  display: flex;
  align-items: center;
  height: 24px;
`,E=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;

  .card-action-button {
    height: max-content;
  }
`,Z=r.div.withConfig({shouldForwardProp:e=>!["$isScrollable","cssConfig"].includes(e)})`
  ${({$isScrollable:e})=>e&&b`
    overflow: auto;
  `}

  ${({$isScrollable:e,cssConfig:n,$size:t})=>e&&n&&b`
      ${j}
      margin-inline-end: ${t==="medium"?"-15px":"-19px"};
    `}
`,ee=b`
  ${N(S.BTR3)};
  position: relative;
  border-radius: 12px;
  padding: ${o("padding")};
  background: ${o("enabled.background")};
  color: ${o("enabled.color")};
  border: 1px solid ${o("enabled.border")};
  display: flex;
  gap: var(--spacing--gap_grouped);
  flex-direction: column;
  
  &.hexa-ui-card-scrollable {
    display: flex;
    flex: 1 1 auto;
    max-height: var(--max-height);
    flex-direction: column;
  }

  ${e=>e.draggable&&"margin-left: 16px;"}

  ${e=>e.interactive&&`
  &:hover {
    background: ${o("hover.background")(e)};
    border-color: ${o("hover.border")(e)};
  }

  &:active {
    background: ${o("active.background")(e)};
    border-color: ${o("active.border")(e)};
  }`}

  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  ${I} {
    position: absolute;
    top: 6px;
    left: -16px;
  }

  ${$} {
    position: absolute;
    top: 4px;
    right: 4px;

    ${E} {
      height: unset;
    }
  }
`,f=e=>{if(a.isValidElement(e))return e;if(!(typeof e=="object"&&e&&"component"in e))return a.createElement(a.Fragment,null);switch(e.component){case"checkbox":{const{component:n,...t}=e;return a.createElement(W,{...t})}case"radio":{const{component:n,...t}=e;return a.createElement(G,{...t})}case"toggle":{const{component:n,...t}=e;return a.createElement(J,{...t})}case"icon":{const{component:n,...t}=e;return a.createElement(K,{...t})}case"text":{const{component:n,...t}=e;return a.createElement(z,{...t})}default:return a.createElement(a.Fragment,null)}};try{f.displayName="getMappedElement",f.__docgenInfo={description:"",displayName:"getMappedElement",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"icon"'},{value:'"checkbox"'},{value:'"radio"'},{value:'"toggle"'}]}},readonly:{defaultValue:null,description:`Readonly state
Is readonly`,name:"readonly",required:!1,type:{name:"unknown"}},labelPosition:{defaultValue:null,description:"Label position",name:"labelPosition",required:!1,type:{name:"unknown"}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"unknown"}},required:{defaultValue:null,description:"If form label is required",name:"required",required:!1,type:{name:"unknown"}},tooltip:{defaultValue:null,description:`Form label tooltip
Form label tooltip content`,name:"tooltip",required:!1,type:{name:"unknown"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"unknown"}},dependentElement:{defaultValue:null,description:"",name:"dependentElement",required:!1,type:{name:"unknown"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"Theme | Readonly<{ key: ThemeKey; colors: { product: { text: { primary: string; secondary: string; disabled: string; link: string; critical: string; warning: string; positive: string; }; bg: { ...; }; icon: { ...; }; }; ... 123 more ...; defaultPalette: { ...; }; }; effects: { ...; }; shapes: { ...; }; spaces: { ......"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"If orientation is vertical",name:"vertical",required:!1,type:{name:"unknown"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"unknown"}},role:{defaultValue:null,description:"HTML role",name:"role",required:!1,type:{name:"string | (string & {})"}},options:{defaultValue:null,description:"Array of options",name:"options",required:!0,type:{name:"unknown"}},getPopupContainer:{defaultValue:null,description:"Popup container for tooltips",name:"getPopupContainer",required:!1,type:{name:"unknown"}},onFocus:{defaultValue:null,description:"Called when the checkbox is focused",name:"onFocus",required:!1,type:{name:'FocusEventHandler<Omit<HTMLSpanElement, "color">> | FocusEventHandler'}},mode:{defaultValue:null,description:"Form label mode",name:"mode",required:!1,type:{name:"unknown"}},size:{defaultValue:null,description:"Icon size. Use number value as it matches size from hexa-ui-icons package, string values are deprecated",name:"size",required:!0,type:{name:"unknown"}},themedColor:{defaultValue:null,description:"@deprecated Use 'color' prop instead",name:"themedColor",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"medium"'},{value:'"primary"'},{value:'"secondary"'},{value:'"critical"'},{value:'"positive"'},{value:'"secondary2"'},{value:'"base-icon"'},{value:'"baseicon"'},{value:'"secondary-solid"'},{value:'"secondary2-solid"'},{value:'"base-icon-solid"'},{value:'"disabled-solid"'},{value:'"primary-invert"'},{value:'"secondary-invert"'},{value:'"secondary2-invert"'},{value:'"base-icon-invert"'},{value:'"baseicon-invert"'},{value:'"disabled-invert"'},{value:'"secondary-invert-solid"'},{value:'"secondary2-invert-solid"'},{value:'"base-icon-invert-solid"'},{value:'"disabled-invert-solid"'},{value:'"high"'},{value:'"low"'},{value:'"info"'}]}},htmlTag:{defaultValue:null,description:"",name:"htmlTag",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}}}}}catch{}const ae=e=>P(e,{componentName:"card",defaultValues:{size:"medium",mode:"base"},propsToDrill:["size"]}),u="menu-icon",c="dnd-icon",p="close-icon",te=r.div.withConfig({shouldForwardProp:e=>!["cssConfig","draggable","interactive"].includes(e)})`${ee}`,k=e=>{const n=ae(e),t=F(n);return a.createElement(ne,{...t,testId:n.testId,klId:n.klId})},ne=({style:e,children:n,className:t,draggable:h,closable:g,onCloseButtonClick:T,size:v="medium",title:i,actions:l,maxHeight:C,testAttributes:w,klId:s,testId:d,..._})=>{const x=a.createElement(E,null,l&&l.length===1&&a.createElement(m,{size:"large",icon:l[0].icon,onClick:l[0].onClick}),l&&l.length>1&&a.createElement(L,{trigger:["click"],overlay:l.map(q=>({children:q.value,onClick:q.onClick}))},a.createElement(m,{size:"large",icon:a.createElement(B,null),testId:d?`${d}-${u}`:`${u}`,klId:s?`${s}-${u}`:`${u}`,className:"card-action-button"})),g&&a.createElement(Q,{size:"large",icon:a.createElement(R,null),onClick:T,testId:d?`${d}-${p}`:`${p}`,klId:s?`${s}-${p}`:`${p}`,className:"card-action-button"})),y=!!C&&v!=="small",{cssConfig:H}=O({});return a.createElement(te,{className:D(t,"hexa-ui-card",{"hexa-ui-card-scrollable":y}),style:{...e,...y&&{"--max-height":C}},draggable:h,...w,..._},h&&a.createElement(I,{icon:a.createElement(U,null),testId:d?`${d}-${c}`:`${c}`,klId:s?`${s}-${c}`:`${c}`}),i&&a.createElement(X,null,a.createElement(Y,null,i.elementBefore&&a.createElement(V,null,f(i.elementBefore)),a.createElement(M,{type:i.size==="medium"?"H5":"H6",style:{width:"100%"}},i.value),i.elementAfter&&a.createElement(V,null,f(i.elementAfter))),(l||g)&&x),!i&&v==="large"&&(l||g)&&a.createElement($,null,x),a.createElement(Z,{$isScrollable:y,cssConfig:H,$size:v},n))};try{k.displayName="Card",k.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"base"'},{value:'"selected"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"Card title",name:"title",required:!1,type:{name:"CardTitleProps"}},actions:{defaultValue:null,description:"Actions",name:"actions",required:!1,type:{name:"CardAction[]"}},draggable:{defaultValue:null,description:"If draggable",name:"draggable",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"If closable",name:"closable",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"If interactive",name:"interactive",required:!1,type:{name:"boolean"}},onCloseButtonClick:{defaultValue:null,description:"Handler for clicking close icon",name:"onCloseButtonClick",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Content of the card",name:"children",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},maxHeight:{defaultValue:null,description:"Max height. Scrollable when maxHeight provided, size !== 'small', and content overflows",name:"maxHeight",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{k as C};
