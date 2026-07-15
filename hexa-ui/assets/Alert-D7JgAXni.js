import{H as i,S as p,C,D as b,a1 as x,ao as w,aB as A,F as E,w as N,r as S,R as e,l as _,L as d,A as k,am as v,aj as V,ak as O,al as $}from"./iframe-4-PRSI1I.js";const n=b(),q=i.span`
  min-width: 16px;
  height: 20px;
  display: flex;
  align-items: center;

  svg {
    color: ${n("icon")};
  }
`,c=i(p)`
  ${({direction:t})=>t==="horizontal"?{display:"grid",gridTemplateColumns:"1fr auto",flexDirection:"row",flexWrap:"nowrap",alignItems:"start",justifyContent:"space-between",width:"100%"}:{width:"100%"}}
`,D={fontStretch:"normal",margin:0,...x(w.BTR3)},R=C`
  display: flex;
  gap: 8px;
  padding: 12px 16px 11px 16px;
  align-items: start;
  position: relative;
  border-bottom: 1px solid ${n("border")};
  background: ${n("background")};
  color: ${n("color")};
  width: ${({width:t})=>t?`${t}px`:"100%"};
  ${D};
  
  .alert-action-separator:after {
    display: block;
    content: '';
    width: 1px;
    height: 20px;
    background: ${n("separator")};
  }
`,z=["info","success","warning","error"],F=t=>{let a=t.mode;return z.includes(a)||(A("mode",a),a="info"),E({...t,mode:a},{componentName:"alert",defaultValues:{mode:"info"},propsToDrill:["mode"]})},P={error:()=>e.createElement($,{"data-testid":"alert-error-icon","data-component-id":"icon-error"}),warning:()=>e.createElement(O,{"data-testid":"alert-warning-icon","data-component-id":"icon-warning"}),success:()=>e.createElement(V,{"data-testid":"alert-success-icon","data-component-id":"icon-success"}),info:()=>e.createElement(v,{"data-testid":"alert-info-icon","data-component-id":"icon-info"})},B=i.div.withConfig({shouldForwardProp:t=>!["cssConfig","componentId"].includes(t)})`
  ${R}
`,r=t=>{const{actions:a,children:u,closable:s,cssConfig:l,mode:m,onClose:o,testAttributes:f,...g}=N(F(t)),[I,h]=S.useState(!0),y=P[m],T=()=>{o==null||o(),h(!1)};return I?e.createElement(B,{cssConfig:l,...f,...g},e.createElement(q,{cssConfig:l},e.createElement(y,null)),e.createElement(c,{gap:8,direction:"horizontal",align:"flex-start"},e.createElement(c,{gap:24,direction:"horizontal",align:"flex-start"},u,a&&e.createElement(p,{gap:8,className:_(s&&"alert-action-separator"),direction:"horizontal"},a.FIRST_ACTION&&e.createElement(d,{...a.FIRST_ACTION},a.FIRST_ACTION.text),a.SECOND_ACTION&&e.createElement(d,{...a.SECOND_ACTION},a.SECOND_ACTION.text))),s&&e.createElement(k,{size:"large",onClick:()=>T()}))):null};r.displayName="Alert";try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{theme:{defaultValue:null,description:"Custom theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},mode:{defaultValue:null,description:"Color mode",name:"mode",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'}]}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},closable:{defaultValue:null,description:"If alert can be closed",name:"closable",required:!1,type:{name:"boolean"}},actions:{defaultValue:null,description:`Actions set
Use the actions prop to let users act on the content in the section message.`,name:"actions",required:!1,type:{name:'Partial<Record<"FIRST_ACTION" | "SECOND_ACTION", ActionType>>'}},onClose:{defaultValue:null,description:"Callback on close",name:"onClose",required:!1,type:{name:"(() => void)"}},width:{defaultValue:null,description:"Width in pixels",name:"width",required:!1,type:{name:"string | number"}}}}}catch{}export{r as A,z as a};
