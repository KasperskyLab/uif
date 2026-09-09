import{R as a,b as N,H as r,A as v,C as h,ai as z,aE as A,l as P,T as M,al as D,u as F,d as R,aH as B}from"./iframe-DedYZBTA.js";import{D as L}from"./Dropdown-C8Jtav0F.js";import{o as O}from"./Delete-27yiPRcg.js";import{o as U}from"./Menu2-vNCkCt-I.js";import{u as j}from"./useThemedScrollbar-CBVjJbCI.js";import{s as W}from"./scrollbarCss-D6fBG7vz.js";import{I as K}from"./IconResolver-DW8XVFKA.js";import{R as G}from"./Radio-Cpvj7bye.js";import{a as J}from"./Checkbox-CNZ65EGY.js";import{T as Q}from"./Toggle-B_SlzXxU.js";const X=a.forwardRef((e,n)=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",ref:n,...e},a.createElement("path",{fill:N(e.color)||e.color||"currentColor",fillRule:"evenodd",d:"M7.0417 3.2088c0 .7938-.6436 1.4373-1.4374 1.4373S4.167 4.0026 4.167 3.2088s.6435-1.4373 1.4373-1.4373 1.4373.6435 1.4373 1.4373m4.7911 0c0 .7938-.6435 1.4373-1.4373 1.4373S8.958 4.0026 8.958 3.2088s.6435-1.4373 1.4374-1.4373c.7938 0 1.4373.6435 1.4373 1.4373m0 4.7912c0 .7938-.6435 1.4373-1.4373 1.4373S8.9581 8.7938 8.9581 8s.6435-1.4374 1.4374-1.4374c.7938 0 1.4373.6435 1.4373 1.4374M7.0416 8c0 .7938-.6435 1.4373-1.4373 1.4373S4.167 8.7938 4.167 8s.6435-1.4374 1.4373-1.4374S7.0416 7.2061 7.0416 8m3.3539 6.2284c.7938 0 1.4373-.6436 1.4373-1.4374s-.6435-1.4373-1.4373-1.4373-1.4374.6435-1.4374 1.4373.6435 1.4374 1.4374 1.4374m-4.7912 0c.7938 0 1.4373-.6436 1.4373-1.4374s-.6435-1.4373-1.4373-1.4373-1.4373.6435-1.4373 1.4373.6435 1.4374 1.4373 1.4374"}))),$=a.memo(a.forwardRef((e,n)=>{const{klId:t,testId:c,...u}=e;return a.createElement(X,{"kl-id":t,"data-testid":c,ref:n,...u})}));$.displayName="DragDrop";const i=P(),q=r(v)``,Y=r(v)``,V=r.div``,Z=r.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,ee=r.div`
  display: flex;
  gap: 8px;
  width: 100%;
`,E=r.span`
  display: flex;
  align-items: center;
  height: 24px;
`,T=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;

  .card-action-button {
    height: max-content;
  }
`,ae=r.div.withConfig({shouldForwardProp:e=>!["$isScrollable","cssConfig"].includes(e)})`
  ${({$isScrollable:e})=>e&&h`
    overflow: auto;
  `}

  ${({$isScrollable:e,cssConfig:n,$size:t})=>e&&n&&h`
      ${W}
      margin-inline-end: ${t==="medium"?"-15px":"-19px"};
    `}
`,te=h`
  ${z(A.BTR3)};
  position: relative;
  border-radius: 12px;
  padding: ${i("padding")};
  background: ${i("enabled.background")};
  color: ${i("enabled.color")};
  border: 1px solid ${i("enabled.border")};
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
    background: ${i("hover.background")(e)};
    border-color: ${i("hover.border")(e)};
  }

  &:active {
    background: ${i("active.background")(e)};
    border-color: ${i("active.border")(e)};
  }`}

  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  ${q} {
    position: absolute;
    top: 6px;
    left: -16px;
  }

  ${V} {
    position: absolute;
    top: 4px;
    right: 4px;

    ${T} {
      height: unset;
    }
  }
`,g=e=>{if(a.isValidElement(e))return e;if(!(typeof e=="object"&&e&&"component"in e))return a.createElement(a.Fragment,null);switch(e.component){case"checkbox":{const{component:n,...t}=e;return a.createElement(J,{...t})}case"radio":{const{component:n,...t}=e;return a.createElement(G,{...t})}case"toggle":{const{component:n,...t}=e;return a.createElement(Q,{...t})}case"icon":{const{component:n,...t}=e;return a.createElement(K,{...t})}case"text":{const{component:n,...t}=e;return a.createElement(M,{...t})}default:return a.createElement(a.Fragment,null)}};try{g.displayName="getMappedElement",g.__docgenInfo={description:"",displayName:"getMappedElement",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"icon"'},{value:'"checkbox"'},{value:'"radio"'},{value:'"toggle"'}]}},readonly:{defaultValue:null,description:`Readonly state
Is readonly`,name:"readonly",required:!1,type:{name:"unknown"}},labelPosition:{defaultValue:null,description:"Label position",name:"labelPosition",required:!1,type:{name:"unknown"}},text:{defaultValue:null,description:"Text",name:"text",required:!1,type:{name:"unknown"}},required:{defaultValue:null,description:"If form label is required",name:"required",required:!1,type:{name:"unknown"}},tooltip:{defaultValue:null,description:`Form label tooltip
Form label tooltip content`,name:"tooltip",required:!1,type:{name:"unknown"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"unknown"}},dependentElement:{defaultValue:null,description:"",name:"dependentElement",required:!1,type:{name:"unknown"}},theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"Theme | Readonly<{ key: ThemeKey; colors: { product: { text: { primary: string; secondary: string; disabled: string; link: string; critical: string; warning: string; positive: string; }; bg: { ...; }; icon: { ...; }; }; ... 123 more ...; defaultPalette: { ...; }; }; effects: { ...; }; shapes: { ...; }; spaces: { ......"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"If orientation is vertical",name:"vertical",required:!1,type:{name:"unknown"}},invalid:{defaultValue:null,description:"Is invalid",name:"invalid",required:!1,type:{name:"unknown"}},role:{defaultValue:null,description:"HTML role",name:"role",required:!1,type:{name:"string | (string & {})"}},options:{defaultValue:null,description:"Array of options",name:"options",required:!0,type:{name:"unknown"}},getPopupContainer:{defaultValue:null,description:"Popup container for tooltips",name:"getPopupContainer",required:!1,type:{name:"unknown"}},onFocus:{defaultValue:null,description:"Called when the checkbox is focused",name:"onFocus",required:!1,type:{name:'FocusEventHandler | FocusEventHandler<Omit<HTMLSpanElement, "color">>'}},mode:{defaultValue:null,description:"Form label mode",name:"mode",required:!1,type:{name:"unknown"}},size:{defaultValue:null,description:"Icon size. Use number value as it matches size from hexa-ui-icons package, string values are deprecated",name:"size",required:!0,type:{name:"unknown"}},themedColor:{defaultValue:null,description:"@deprecated Use 'color' prop instead",name:"themedColor",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"medium"'},{value:'"info"'},{value:'"positive"'},{value:'"low"'},{value:'"high"'},{value:'"critical"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondary2"'},{value:'"base-icon"'},{value:'"baseicon"'},{value:'"secondary-solid"'},{value:'"secondary2-solid"'},{value:'"base-icon-solid"'},{value:'"disabled-solid"'},{value:'"primary-invert"'},{value:'"secondary-invert"'},{value:'"secondary2-invert"'},{value:'"base-icon-invert"'},{value:'"baseicon-invert"'},{value:'"disabled-invert"'},{value:'"secondary-invert-solid"'},{value:'"secondary2-invert-solid"'},{value:'"base-icon-invert-solid"'},{value:'"disabled-invert-solid"'}]}},htmlTag:{defaultValue:null,description:"",name:"htmlTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'}]}}}}}catch{}const ne=e=>D(e,{componentName:"card",defaultValues:{size:"medium",mode:"base"},propsToDrill:["size"]}),m="menu-icon",p="dnd-icon",f="close-icon",le=r.div.withConfig({shouldForwardProp:e=>!["cssConfig","draggable","interactive"].includes(e)})`${te}`,C=e=>{const n=ne(e),t=F(n);return a.createElement(re,{...t,testId:n.testId,klId:n.klId})};C.defaultProps={mode:"base",size:"medium"};const re=({style:e,children:n,className:t,draggable:c,closable:u,onCloseButtonClick:I,size:y="medium",title:o,actions:l,maxHeight:x,testAttributes:_,klId:s,testId:d,...S})=>{const k=a.createElement(T,null,l&&l.length===1&&a.createElement(v,{size:"large",icon:l[0].icon,onClick:l[0].onClick}),l&&l.length>1&&a.createElement(L,{trigger:["click"],overlay:l.map(w=>({children:w.value,onClick:w.onClick}))},a.createElement(v,{size:"large",icon:a.createElement(U,null),testId:d?`${d}-${m}`:`${m}`,klId:s?`${s}-${m}`:`${m}`,className:"card-action-button"})),u&&a.createElement(Y,{size:"large",icon:a.createElement(O,null),onClick:I,testId:d?`${d}-${f}`:`${f}`,klId:s?`${s}-${f}`:`${f}`,className:"card-action-button"})),b=!!x&&y!=="small",{cssConfig:H}=j({});return a.createElement(le,{className:R(t,"hexa-ui-card",{"hexa-ui-card-scrollable":b}),style:{...e,...b&&{"--max-height":x}},draggable:c,..._,...S},c&&a.createElement(q,{icon:a.createElement($,null),testId:d?`${d}-${p}`:`${p}`,klId:s?`${s}-${p}`:`${p}`}),o&&a.createElement(Z,null,a.createElement(ee,null,o.elementBefore&&a.createElement(E,null,g(o.elementBefore)),a.createElement(B,{type:o.size==="medium"?"H5":"H6",style:{width:"100%"}},o.value),o.elementAfter&&a.createElement(E,null,g(o.elementAfter))),(l||u)&&k),!o&&y==="large"&&(l||u)&&a.createElement(V,null,k),a.createElement(ae,{$isScrollable:b,cssConfig:H,$size:y},n))};try{C.displayName="Card",C.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:{value:"base"},description:"Color mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"selected"'},{value:'"base"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},title:{defaultValue:null,description:"Card title",name:"title",required:!1,type:{name:"CardTitleProps"}},actions:{defaultValue:null,description:"Actions",name:"actions",required:!1,type:{name:"CardAction[]"}},draggable:{defaultValue:null,description:"If draggable",name:"draggable",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"If closable",name:"closable",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"If interactive",name:"interactive",required:!1,type:{name:"boolean"}},onCloseButtonClick:{defaultValue:null,description:"Handler for clicking close icon",name:"onCloseButtonClick",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Content of the card",name:"children",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},maxHeight:{defaultValue:null,description:"Max height. Scrollable when maxHeight provided, size !== 'small', and content overflows",name:"maxHeight",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}}}}}catch{}export{C,$ as t};
