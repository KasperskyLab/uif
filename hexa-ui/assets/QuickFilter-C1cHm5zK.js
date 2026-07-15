import{H as o,w as u,R as n}from"./iframe-4-PRSI1I.js";import{S as m}from"./SegmentedButton-CErJIP_5.js";import{T as f}from"./Toggle-Cpn23pdP.js";import{T as g}from"./ToggleButtonGroup-DA0k7xyv.js";import{F as b}from"./Field-D3g66Aq-.js";import{S as y}from"./Select-Bfc69stS.js";import{R as k}from"./RangePicker-C6GJLe5x.js";import{C as w}from"./Calendar-Dc4U6dxV.js";const h=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`,I=o(b)`
  width: unset;
  max-width: unset;

  && .kl6-field-control-wrapper .kl6-field-control-box {
    min-width: max-content;
  }

  &&.kl6-field-label-position-before .kl6-field-label {
    width: max-content;
    padding-right: 8px;
  }

  &&.kl6-field-label-position-top .kl6-field-control-wrapper {
    justify-content: end;
  }
`,T=o(y)`
  ${e=>e.$width&&`width: ${e.$width};`}
`,x=o.span`
  height: 32px;
  display: flex;
  align-items: center;
`,F=(e,r)=>{switch(e.component){case"select":{const{component:l,label:t,width:a,...i}=e;return{control:n.createElement(T,{$width:a,disabled:r,...i}),label:t}}case"segmented-button":{const{component:l,label:t,...a}=e;return{control:n.createElement(m,{disabled:r,...a}),label:t}}case"toggle":{const{component:l,...t}=e;return{control:n.createElement(x,null,n.createElement(f,{disabled:r,...t}))}}case"toggle-button-group":{const{component:l,label:t,...a}=e;return{control:n.createElement(g,{disabled:r,...a}),label:t}}case"date-picker":{const{component:l,label:t,...a}=e;return{control:n.createElement(w,{...a}),label:t}}case"range-picker":{const{component:l,label:t,...a}=e;return{control:n.createElement(k,{...a}),label:t}}}},p=({filters:e,disabled:r,className:l,labelPosition:t="before",...a})=>{const{testAttributes:i}=u(a);return n.createElement(h,{...i,className:l},e.map((s,c)=>{const d=F(s,r);return n.createElement(I,{key:s.testId||s.klId||c,control:d.control,label:d.label,labelPosition:t})}))};try{p.displayName="QuickFilter",p.__docgenInfo={description:"",displayName:"QuickFilter",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},filters:{defaultValue:null,description:"Filters array",name:"filters",required:!0,type:{name:"QuickFilterItem[]"}},labelPosition:{defaultValue:{value:"before"},description:"Label position",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"top"'}]}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{p as Q};
