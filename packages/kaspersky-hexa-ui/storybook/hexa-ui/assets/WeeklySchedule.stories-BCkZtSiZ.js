import{H as u,a1 as ae,a0 as N,R as t,T as w,w as se,r as d,b as H}from"./iframe-zz6a49H8.js";import{w as ue}from"./withMeta-CjSZnBk7.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";const b=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],de=(e,n)=>b.flatMap(r=>{var i;return((i=e==null?void 0:e[r])==null?void 0:i.length)!==24?Array(24).fill(n):e[r].map(l=>!!l)}),le=e=>{const n={};return b.forEach((i,l)=>{n[i]=e.slice(l*24,l*24+24).map(c=>c?1:0)}),n},ie=({cellSize:e,startCoordinate:n,endCoordinate:r})=>{const i=Math.min(n.x,r.x),l=Math.max(n.x,r.x),c=Math.min(n.y,r.y),k=Math.max(n.y,r.y);return e.y+e.height>=c&&e.y<=k&&e.x+e.width>=i&&e.x<=l},S=ae(),oe=u.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 350px;
`,ce=u.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,me=u.div`
  gap: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`,ye=N`
  flex-basis: calc((100% - 23px) / 24);
  cursor: pointer;
  background-color: ${e=>e.selected?S("selected.color")(e):S("enabled.color")(e)}
  `,pe=u.div`
  display: flex;
`,ge=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
  margin-right: 8px;
`,he=u.div`
  display: flex;
  flex-direction: row;
`,fe=u.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 20px;
  flex-basis: calc(100% / 7);
`,we=N`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;
  background-color: ${e=>e.selected?S("selected.color")(e):S("enabled.color")(e)}
`,Se=u.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
`,_=u.div`
  height: 20px;
  display: flex;
  align-items: center;
  column-gap: 4px;
`,Y=({daysOfWeek:e})=>t.createElement(he,null,b.map((n,r)=>t.createElement(fe,{key:r},t.createElement(w,{type:"BTR3",themedColor:"primary"},e[n]))));Y.__docgenInfo={description:"",methods:[],displayName:"ScheduleHeader",props:{daysOfWeek:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}},{key:"monday",value:{name:"string",required:!0}},{key:"tuesday",value:{name:"string",required:!0}},{key:"wednesday",value:{name:"string",required:!0}},{key:"thursday",value:{name:"string",required:!0}},{key:"friday",value:{name:"string",required:!0}},{key:"saturday",value:{name:"string",required:!0}},{key:"sunday",value:{name:"string",required:!0}}]}},description:""}}};const M=u.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${we}`,F=({cssConfig:e,legend:n})=>t.createElement(Se,null,t.createElement(_,null,t.createElement(M,{cssConfig:e,selected:!0}),t.createElement(w,{type:"BTR4",themedColor:"primary"},"- ",n.selected)),t.createElement(_,null,t.createElement(M,{cssConfig:e}),t.createElement(w,{type:"BTR4",themedColor:"primary"},"- ",n.notSelected)));F.__docgenInfo={description:"",methods:[],displayName:"ScheduleLegend",props:{cssConfig:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  enabled?: StateProps,
  selected?: StateProps
}`,signature:{properties:[{key:"enabled",value:{name:"signature",type:"object",raw:`{
  color?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}}]},required:!1}},{key:"selected",value:{name:"signature",type:"object",raw:`{
  color?: string
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},legend:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  selected: string,
  notSelected: string
}`,signature:{properties:[{key:"selected",value:{name:"string",required:!0}},{key:"notSelected",value:{name:"string",required:!0}}]}},description:""}}};const X=()=>{const e=Array.from({length:25},(n,r)=>r===24?"00:00":`${r.toString().padStart(2,"0")}:00`);return t.createElement(ge,null,e.map((n,r)=>t.createElement(pe,{key:r},t.createElement(w,{type:"BTR5",themedColor:"secondary2-solid"},n))))};X.__docgenInfo={description:"",methods:[],displayName:"ScheduleTimeColumn"};const ke=e=>se(e,{componentName:"weeklySchedule",defaultValues:{}}),V=7,G=24,J=!1,x=Array(V*G).fill(J),ve=new Array(V*G),xe=u.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${ye}`,q=e=>{const n=ke(e);return t.createElement(be,{...n})},be=({initialState:e,onChange:n,daysOfWeek:r,legend:i,cssConfig:l,testId:c,...k})=>{const E=d.useRef([...ve]),[m,T]=d.useState([...x]),[y,v]=d.useState([...x]),[K,C]=d.useState(!1),[Q,Z]=d.useState(!1),[D,A]=d.useState(!1),[z,I]=d.useState({x:null,y:null}),[p,W]=d.useState({x:null,y:null});d.useLayoutEffect(()=>{const a=de(e,J);T(a),v(a)},[]),d.useEffect(()=>{if(D){T([...y]),W({x:null,y:null}),I({x:null,y:null}),C(!1),A(!1);const a=le(y);n(a)}},[D]),d.useEffect(()=>{p.x!==null&&p.y!==null&&ne()},[p]);const R=a=>{a.preventDefault(),W({x:a.clientX,y:a.clientY})},j=()=>{A(!0),window.document.removeEventListener("mousemove",R),window.document.removeEventListener("mouseup",j)},ee=()=>{window.document.addEventListener("mousemove",R),window.document.addEventListener("mouseup",j)},te=(a,s)=>{if(a.button!==0||a.nativeEvent.button!==0)return;I({x:a.clientX,y:a.clientY}),C(!0),Z(!m[s]);const o=[...y];o[s]=!m[s],v(o),ee()},ne=()=>{const a=[...m];E.current.forEach((s,o)=>{const g=s.getBoundingClientRect(),re={x:g.x,y:g.y,width:g.width,height:g.height};ie({cellSize:re,startCoordinate:z,endCoordinate:p})&&(a[o]=Q)}),v(a)};return t.createElement(oe,{"data-testid":c,...k},t.createElement(X,null),t.createElement(ce,null,t.createElement(Y,{daysOfWeek:r}),t.createElement(me,null,x.map((a,s)=>t.createElement(xe,{cssConfig:l,onMouseDown:o=>te(o,s),ref:o=>E.current[s]=o,key:`${s}`,selected:K?y[s]:m[s],"data-testid":`cell-id-${s}`}))),t.createElement(F,{legend:i,cssConfig:l})))};q.__docgenInfo={description:"",methods:[],displayName:"WeeklySchedule",props:{initialState:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: DaySchedule,
  monday: DaySchedule,
  tuesday: DaySchedule,
  wednesday: DaySchedule,
  thursday: DaySchedule,
  friday: DaySchedule,
  saturday: DaySchedule,
  sunday: DaySchedule
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"monday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"tuesday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"wednesday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"thursday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"friday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"saturday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"sunday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}},description:`Initial state of the schedule,
 specified as an object with days of the week,
 each day of the week consists of array x24(one index - one hour) consisting of 0|1,
 when 0 - not selected, 1 - selected.
 If you have not filled in a day, the component will fill it in with 0 on its own`},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: InitialSchedule) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  [key: string]: DaySchedule,
  monday: DaySchedule,
  tuesday: DaySchedule,
  wednesday: DaySchedule,
  thursday: DaySchedule,
  friday: DaySchedule,
  saturday: DaySchedule,
  sunday: DaySchedule
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"monday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"tuesday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"wednesday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"thursday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"friday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"saturday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"sunday",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:"function that saves the schedule from component"},daysOfWeek:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}},{key:"monday",value:{name:"string",required:!0}},{key:"tuesday",value:{name:"string",required:!0}},{key:"wednesday",value:{name:"string",required:!0}},{key:"thursday",value:{name:"string",required:!0}},{key:"friday",value:{name:"string",required:!0}},{key:"saturday",value:{name:"string",required:!0}},{key:"sunday",value:{name:"string",required:!0}}]}},description:"dictionaries for days of the week"},legend:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  selected: string,
  notSelected: string
}`,signature:{properties:[{key:"selected",value:{name:"string",required:!0}},{key:"notSelected",value:{name:"string",required:!0}}]}},description:"dictionaries for legend"},theme:{required:!1,tsType:{name:"Theme"},description:""}}};const qe={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},Ee="WeeklySchedule",Te="Компонент с выбором расписания по дням недели",Ce=`Расписание можно выбирать посредством клика на каждую ячейку, а так же выделением с уходом за область компонента.

 Компонент подстраивается под размер родителя, min-height=350px, для корректного отображения столбца со временем`,De={dod:qe,component:Ee,usage:Te,description:Ce},Ae={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},Ie={monday:[0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],tuesday:[0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],wednesday:[0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],thursday:[0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],friday:[0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],saturday:[0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],sunday:[1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0]},We={monday:"Пн",tuesday:"Вт",wednesday:"Ср",thursday:"Чт",friday:"Пт",saturday:"Сб",sunday:"Вс"},Re={selected:"Разрешено",notSelected:"Запрещено"},Pe={title:"Hexa UI Components/WeeklySchedule",component:q,parameters:{badges:[H.stable,H.missingDesign],docs:{page:ue(De)}},args:{initialState:Ae,legend:Re,daysOfWeek:We,testId:"weekly-schedule-test-id"},decorators:[(e,n)=>t.createElement(je,null,t.createElement(e,{...n}))]},je=u.div`
  display: inline-block;
  text-align: center;
  width: 420px;
  height: 350px;
  margin: 4px 4px 8px 4px;
`,h={render:({...e})=>t.createElement(q,{...e})},f={args:{initialState:Ie}};var L,B,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    ...args
  }: WeeklyScheduleProps) => <WeeklySchedule {...args} />
}`,...(O=(B=h.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,U,$;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    initialState: initialScheduleWithSelected
  }
}`,...($=(U=f.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Ue=["Basic","WithInitialSelected"];export{h as Basic,f as WithInitialSelected,Ue as __namedExportsOrder,Pe as default};
