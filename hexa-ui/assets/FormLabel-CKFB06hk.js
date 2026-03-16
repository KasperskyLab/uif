import{a1 as y,a0 as T,w as v,u as P,R as e,j as w,T as i,A as x,aj as C,H as q}from"./iframe-DlY6n6Um.js";import{M as E}from"./Markdown-9a6sqH5b.js";import{T as N}from"./Tag-Cd3srqW9.js";import{P as F}from"./Popover-D8ys_ap7.js";const m=y(),L=T`
  display: inline;
  
  & .form-label-text {
    color: ${m("text")};
  }
  
  & .form-label-asterisk {
    color: ${m("asterisk")};
  }
  
  & .form-label-info-icon {
    margin-left: 4px;
    height: 10px;
    transform: translateY(3px);
    display: inline-flex;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 4px;
    }
  }

  .form-label-tag {
    margin: 0 0 0 8px;
  }

  .form-label-tag + .form-label-tag {
    margin-left: 4px;
  }
`,k=t=>v(t,{componentName:"formLabel",defaultValues:{mode:"primary"},propsToDrill:["mode"]}),A=q("label").withConfig({shouldForwardProp:t=>!["cssConfig"].includes(t)})`${L}`,R=t=>{const{disabled:o,mode:l,...s}=t,n=k({...s,disabled:o,mode:o?"disabled":l}),a=P(n);return e.createElement($,{...a})},$=({mode:t,children:o,className:l,disabled:s,required:n,tooltip:a,tagsAfter:p=[],testAttributes:d,getPopupContainer:c,popoverPlacement:f,popoverWidth:u,...b})=>{const g=r=>r.parentElement;return e.createElement(A,{...b,...d,className:w("form-label",l)},e.createElement(i,{type:"BTR3",className:"form-label-text"},o),n&&e.createElement(i,{type:"BTR3",className:"form-label-asterisk"},"*"),a&&e.createElement(F,{content:typeof a=="string"?e.createElement(E,{withoutTextStyle:!0,value:a}):a,getPopupContainer:c||g,placement:f,width:u},e.createElement(x,{mode:"ghost",size:"large",interactive:!1,icon:e.createElement(C,null),className:"form-label-info-icon"})),p.map((r,h)=>r&&e.createElement(N,{key:`${r}-${h}`,label:r,className:"form-label-tag",outlined:!(s||t==="disabled")})))};R.__docgenInfo={description:"",methods:[],displayName:"FormLabel",props:{required:{required:!1,tsType:{name:"boolean"},description:"Is required"},disabled:{required:!1,tsType:{name:"boolean"},description:"Is disabled"},tagsAfter:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Tags after label"},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"Popover content"},getPopupContainer:{required:!1,tsType:{name:"PopoverProps['getPopupContainer']",raw:"PopoverProps['getPopupContainer']"},description:"Parent Node which the popover should be rendered to"},popoverPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'left' | 'right' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"Popover position relative to the info icon"},popoverWidth:{required:!1,tsType:{name:"number"},description:"Custom width for popover"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'disabled'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'disabled'"}]},description:"Color mode"}}};export{R as F};
