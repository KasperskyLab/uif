import{H as o,C as M,D as J,R as n,T as h,F as K,r as d}from"./iframe-4-PRSI1I.js";const C=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Q=(e,t)=>C.flatMap(l=>{var c;return((c=e==null?void 0:e[l])==null?void 0:c.length)!==24?Array(24).fill(t):e[l].map(s=>!!s)}),Z=e=>{const t={};return C.forEach((c,s)=>{t[c]=e.slice(s*24,s*24+24).map(u=>u?1:0)}),t},z=({cellSize:e,startCoordinate:t,endCoordinate:l})=>{const c=Math.min(t.x,l.x),s=Math.max(t.x,l.x),u=Math.min(t.y,l.y),x=Math.max(t.y,l.y);return e.y+e.height>=u&&e.y<=x&&e.x+e.width>=c&&e.x<=s},g=J(),ee=o.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 350px;
`,te=o.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,ne=o.div`
  gap: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`,le=M`
  flex-basis: calc((100% - 23px) / 24);
  cursor: pointer;
  background-color: ${e=>e.selected?g("selected.color")(e):g("enabled.color")(e)}
  `,ae=o.div`
  display: flex;
`,re=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
  margin-right: 8px;
`,de=o.div`
  display: flex;
  flex-direction: row;
`,oe=o.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 20px;
  flex-basis: calc(100% / 7);
`,se=M`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background-color: ${e=>e.selected?g("selected.color")(e):g("enabled.color")(e)}
`,ce=o.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
`,N=o.div`
  height: 20px;
  display: flex;
  align-items: center;
  column-gap: 4px;
`,E=({daysOfWeek:e})=>n.createElement(de,null,C.map((t,l)=>n.createElement(oe,{key:l},n.createElement(h,{type:"BTR3",themedColor:"primary"},e[t]))));try{E.displayName="ScheduleHeader",E.__docgenInfo={description:"",displayName:"ScheduleHeader",props:{daysOfWeek:{defaultValue:null,description:"",name:"daysOfWeek",required:!0,type:{name:"DaysOfWeek"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const W=o.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${se}`,_=({cssConfig:e,legend:t})=>n.createElement(ce,null,n.createElement(N,null,n.createElement(W,{cssConfig:e,selected:!0}),n.createElement(h,{type:"BTR4",themedColor:"primary"},"- ",t.selected)),n.createElement(N,null,n.createElement(W,{cssConfig:e}),n.createElement(h,{type:"BTR4",themedColor:"primary"},"- ",t.notSelected)));try{_.displayName="ScheduleLegend",_.__docgenInfo={description:"",displayName:"ScheduleLegend",props:{cssConfig:{defaultValue:null,description:"",name:"cssConfig",required:!0,type:{name:"WeeklyScheduleColorConfig"}},legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"Legend"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const v=()=>{const e=Array.from({length:25},(t,l)=>l===24?"00:00":`${l.toString().padStart(2,"0")}:00`);return n.createElement(re,null,e.map((t,l)=>n.createElement(ae,{key:l},n.createElement(h,{type:"BTR5",themedColor:"secondary2-solid"},t))))};try{v.displayName="ScheduleTimeColumn",v.__docgenInfo={description:"",displayName:"ScheduleTimeColumn",props:{children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ie=e=>K(e,{componentName:"weeklySchedule",defaultValues:{}}),O=7,A=24,U=!1,w=Array(O*A).fill(U),ue=new Array(O*A),pe=o.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${le}`,D=e=>{const t=ie(e);return n.createElement(me,{...t})},me=({initialState:e,onChange:t,daysOfWeek:l,legend:c,cssConfig:s,testId:u,...x})=>{const k=d.useRef([...ue]),[p,I]=d.useState([...w]),[m,S]=d.useState([...w]),[B,b]=d.useState(!1),[$,F]=d.useState(!1),[T,R]=d.useState(!1),[Y,V]=d.useState({x:null,y:null}),[f,q]=d.useState({x:null,y:null});d.useLayoutEffect(()=>{const a=Q(e,U);I(a),S(a)},[]),d.useEffect(()=>{if(T){I([...m]),q({x:null,y:null}),V({x:null,y:null}),b(!1),R(!1);const a=Z(m);t(a)}},[T]),d.useEffect(()=>{f.x!==null&&f.y!==null&&X()},[f]);const L=a=>{a.preventDefault(),q({x:a.clientX,y:a.clientY})},H=()=>{R(!0),window.document.removeEventListener("mousemove",L),window.document.removeEventListener("mouseup",H)},j=()=>{window.document.addEventListener("mousemove",L),window.document.addEventListener("mouseup",H)},P=(a,r)=>{if(a.button!==0||a.nativeEvent.button!==0)return;V({x:a.clientX,y:a.clientY}),b(!0),F(!p[r]);const i=[...m];i[r]=!p[r],S(i),j()},X=()=>{const a=[...p];k.current.forEach((r,i)=>{const y=r.getBoundingClientRect(),G={x:y.x,y:y.y,width:y.width,height:y.height};z({cellSize:G,startCoordinate:Y,endCoordinate:f})&&(a[i]=$)}),S(a)};return n.createElement(ee,{"data-testid":u,...x},n.createElement(v,null),n.createElement(te,null,n.createElement(E,{daysOfWeek:l}),n.createElement(ne,null,w.map((a,r)=>n.createElement(pe,{cssConfig:s,onMouseDown:i=>P(i,r),ref:i=>k.current[r]=i,key:`${r}`,selected:B?m[r]:p[r],"data-testid":`cell-id-${r}`}))),n.createElement(_,{legend:c,cssConfig:s})))};try{D.displayName="WeeklySchedule",D.__docgenInfo={description:"",displayName:"WeeklySchedule",props:{initialState:{defaultValue:null,description:`Initial state of the schedule,
specified as an object with days of the week,
each day of the week consists of array x24(one index - one hour) consisting of 0|1,
when 0 - not selected, 1 - selected.
If you have not filled in a day, the component will fill it in with 0 on its own`,name:"initialState",required:!0,type:{name:"InitialSchedule"}},onChange:{defaultValue:null,description:"function that saves the schedule from component",name:"onChange",required:!0,type:{name:"(value: InitialSchedule) => void"}},daysOfWeek:{defaultValue:null,description:"dictionaries for days of the week",name:"daysOfWeek",required:!0,type:{name:"DaysOfWeek"}},legend:{defaultValue:null,description:"dictionaries for legend",name:"legend",required:!0,type:{name:"Legend"}},testId:{defaultValue:null,description:"Actual identifier for autotesting, will be passed to HTML attribute data-testid",name:"testId",required:!1,type:{name:"string"}},klId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead. Identifier for backward compatibility in autotesting, will be passed to HTML attribute kl-id",name:"klId",required:!1,type:{name:"string"}},componentId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"componentId",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"@deprecated Use 'testId' prop instead",name:"dataTestId",required:!1,type:{name:"string"}},componentType:{defaultValue:null,description:"",name:"componentType",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{D as W};
