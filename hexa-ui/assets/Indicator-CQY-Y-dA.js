import{w as i,at as a,u as c,R as m,H as p}from"./iframe-DlY6n6Um.js";import{s as u}from"./shouldForwardProp-Cdy-RLhZ.js";const l=["accent","not-active","new","update","inProgress","resolved","inIncident","high","critical","medium","info","positive","low"],b=e=>i(e,{componentName:"indicator",defaultValues:{mode:"accent"}}),h=p.span.withConfig({shouldForwardProp:u})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background: ${e=>e.cssConfig.background};
  ${e=>e.border&&`border: 2px solid ${e.cssConfig.border};`}
  flex: none;
`,f=e=>{const{mode:o="accent",...n}=e;let t=o;l.includes(o)||(t="accent",a("mode",o));const r=b({...n,mode:t}),{testAttributes:s,...d}=c(r);return m.createElement(h,{...s,...d})};f.__docgenInfo={description:"",methods:[],displayName:"Indicator",props:{border:{required:!1,tsType:{name:"boolean"},description:"Show border"},mode:{required:!1,tsType:{name:"IndicatorModes[number]",raw:"typeof IndicatorModes[number]"},description:"Color mode"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};export{f as I,l as a};
