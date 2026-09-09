import{H as r,u,R as n}from"./iframe-DedYZBTA.js";import{T as m}from"./ToggleButtonGroup-D4of78Bd.js";import{F as f}from"./Field-DDFvGKqW.js";import{S as b}from"./Select-xZT8Da8H.js";import{R as g}from"./RangePicker-DbMw3oSo.js";import{C as y}from"./Calendar-Bhrbz6cn.js";import{T as k}from"./Toggle-B_SlzXxU.js";import{S as w}from"./SegmentedButton-B-fNJlic.js";const h=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`,x=r(f)`
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
`,F=r(b)`
  ${e=>e.$width&&`width: ${e.$width};`}
`,I=r.span`
  height: 32px;
  display: flex;
  align-items: center;
`,T=(e,o)=>{switch(e.component){case"select":{const{component:a,label:t,width:l,...i}=e;return{control:n.createElement(F,{$width:l,disabled:o,...i}),label:t}}case"segmented-button":{const{component:a,label:t,...l}=e;return{control:n.createElement(w,{disabled:o,...l}),label:t}}case"toggle":{const{component:a,...t}=e;return{control:n.createElement(I,null,n.createElement(k,{disabled:o,...t}))}}case"toggle-button-group":{const{component:a,label:t,...l}=e;return{control:n.createElement(m,{disabled:o,...l}),label:t}}case"date-picker":{const{component:a,label:t,...l}=e;return{control:n.createElement(y,{...l}),label:t}}case"range-picker":{const{component:a,label:t,...l}=e;return{control:n.createElement(g,{...l}),label:t}}}},p=({filters:e,disabled:o,className:a,labelPosition:t="before",...l})=>{const{testAttributes:i}=u(l);return n.createElement(h,{...i,className:a},e.map((s,d)=>{const c=T(s,o);return n.createElement(x,{key:s.testId||s.klId||d,control:c.control,label:c.label,labelPosition:t})}))};try{p.displayName="QuickFilter",p.__docgenInfo={description:"",displayName:"QuickFilter",props:{className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},filters:{defaultValue:null,description:"Filters array",name:"filters",required:!0,type:{name:"QuickFilterItem[]"}},labelPosition:{defaultValue:{value:"before"},description:"Label position",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"before"'}]}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{p as Q};
