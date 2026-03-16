import{r as Be,c as d}from"./resolveColorToken-B6lo3lEf.js";import{R as r,g as Ee,r as qe}from"./index-B3FZByPw.js";import{a as Re,T}from"./Typography-CwddtZBH.js";import{r as Pe}from"./toInteger-BtpJ4YlI.js";import{r as Se}from"./toNumber-CcgC_4-M.js";import{r as ye,S as y}from"./Space-Vk4CFeXY.js";import{r as De}from"./constants-CCkeIBqD.js";import"./palette-CcbSufZ2.js";const He=r.forwardRef((e,a)=>r.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,...e},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.84961 7.96396C1.84961 7.60498 2.14062 7.31396 2.49961 7.31396L13.4996 7.31396C13.8586 7.31396 14.1496 7.60498 14.1496 7.96396C14.1496 8.32295 13.8586 8.61396 13.4996 8.61396L2.49961 8.61396C2.14062 8.61396 1.84961 8.32295 1.84961 7.96396Z",fill:Be(e.color)||e.color||"currentColor"}))),Ne=r.memo(r.forwardRef((e,a)=>{const{klId:s,testId:u,...c}=e;return r.createElement(He,{"kl-id":s,"data-testid":u,ref:a,...c})}));Ne.displayName="Minus";const ze=r.forwardRef((e,a)=>r.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,...e},r.createElement("path",{d:"M1.42474 1.3252H6.57567C7.16935 1.3252 7.52346 1.98686 7.19415 2.48083L4.61868 6.34403C4.32446 6.78536 3.67595 6.78536 3.38173 6.34403L0.806266 2.48083C0.476949 1.98686 0.831059 1.3252 1.42474 1.3252Z",fill:Be(e.color)||e.color||"currentColor"}))),Ce=r.memo(r.forwardRef((e,a)=>{const{klId:s,testId:u,...c}=e;return r.createElement(ze,{"kl-id":s,"data-testid":u,ref:a,...c})}));Ce.displayName="ArrowDownSolid";var R,D;function Ie(){if(D)return R;D=1;function e(a){return a==null}return R=e,R}var Ae=Ie();const Me=Ee(Ae);var P,H;function Le(){if(H)return P;H=1;var e=Re(),a=Pe(),s=Se(),u=ye(),c=e.isFinite,N=Math.min;function C(x){var l=Math[x];return function(n,i){if(n=s(n),i=i==null?0:N(a(i),292),i&&c(n)){var o=(u(n)+"e").split("e"),W=l(o[0]+"e"+(+o[1]+i));return o=(u(W)+"e").split("e"),+(o[0]+"e"+(+o[1]-i))}return l(n)}}return P=C,P}var S,z;function ke(){if(z)return S;z=1;var e=Le(),a=e("round");return S=a,S}var Fe=ke();const xe=Ee(Fe),je="_counterValues_16s3z_1",$e="_value_16s3z_5",Oe="_previousValueWrapper_16s3z_9",Ze="_previousValue_16s3z_9",Ue="_valueWrapper_16s3z_18",Ge="_withPreviousValue_16s3z_18",Je="_trend_16s3z_22",Ke="_bigger_16s3z_29",Qe="_equal_16s3z_32",Xe="_description_16s3z_36",Ye="_good_16s3z_41",er="_bad_16s3z_49",t={counterValues:je,value:$e,previousValueWrapper:Oe,previousValue:Ze,valueWrapper:Ue,withPreviousValue:Ge,trend:Je,bigger:Ke,equal:Qe,description:Xe,good:Ye,bad:er};function rr(e,a,s=2){return e===a?"0 %":a===0?"- %":`${xe((e-a)/a*100,s)} %`}const We=({data:e,biggerBetter:a=!0,height:s,width:u,precision:c=2,color:N})=>{const[C,x]=qe.useState(!1),l=!Me(e.previousValue),n=e.value>e.previousValue,i=e.value===e.previousValue,o=l&&(a&&n||!n&&!a)&&!i,W=l?rr(e.value,e.previousValue,c):0;return r.createElement(y,{direction:"vertical",gap:0,wrap:"nowrap",align:"stretch",justify:"center",style:{height:s,width:u}},r.createElement(y,{align:"baseline",justify:"center",direction:"horizontal",gap:8,wrap:"nowrap",className:t.counterValues},r.createElement("div",{className:d(t.valueWrapper,l&&t.withPreviousValue)},r.createElement(T,{type:"H1",className:d(t.value),style:{color:N}},e.value),l&&r.createElement(r.Fragment,null,i?r.createElement(Ne,{className:d(t.trend,t.equal)}):r.createElement(Ce,{className:d(t.trend,{[t.bigger]:n,[t.good]:o,[t.bad]:!o})}))),l&&r.createElement("div",{className:t.previousValueWrapper},r.createElement(T,{mode:"BTR2",className:d(t.previousValue,{[t.equal]:i,[t.good]:o,[t.bad]:!i&&!o}),onClick:()=>{x(Te=>!Te)}},xe(e.value-e.previousValue,c||De)," (",C?e.previousValue:W,")"))),r.createElement("div",{className:t.description},r.createElement(T,{mode:"BTR4",color:"secondary"},e.metric)))},ar=qe.memo(We);We.__docgenInfo={description:"",methods:[],displayName:"TypedCounterChart",props:{data:{required:!0,tsType:{name:"ICounterChartData"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},biggerBetter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""}}};const dr={title:"Charts/Counter",component:ar,args:{data:{value:4412}}},p={args:{data:{metric:"",value:1e3,previousValue:1400},biggerBetter:!1}},m={args:{data:{metric:"",value:1e3,previousValue:1400},biggerBetter:!0}},g={args:{data:{metric:"",value:1e3,previousValue:400},biggerBetter:!0}},v={args:{data:{metric:"",value:1e3,previousValue:400},biggerBetter:!1}},f={args:{data:{metric:"",value:1e3,previousValue:1e3},biggerBetter:!1}},b={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1}},V={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:300}},h={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:500}},_={args:{data:{metric:"",value:71650726357978,previousValue:98721390582},biggerBetter:!1,width:700}},w={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0}},B={args:{data:{metric:"description",value:551,previousValue:442},biggerBetter:!0,color:"var(--color-marina300)"}},E={args:{data:{metric:"Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.",value:551,previousValue:442},biggerBetter:!0}},q={args:{data:{metric:"Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.",value:551,previousValue:442},biggerBetter:!0,width:500}};var I,A,M;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },
    biggerBetter: false
  }
}`,...(M=(A=p.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var L,k,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },
    biggerBetter: true
  }
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,$,O;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: true
  }
}`,...(O=($=g.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var Z,U,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: false
  }
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1000
    },
    biggerBetter: false
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false
  }
}`,...(ee=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,ae,te;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 300
  }
}`,...(te=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,oe,se;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 500
  }
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ue,ne,ce;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 700
  }
}`,...(ce=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,de,pe;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}`,...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,ve;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    color: 'var(--color-marina300)'
  }
}`,...(ve=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,be,Ve;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}`,...(Ve=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Ve.source}}};var he,_e,we;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    data: {
      metric: 'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    width: 500
  }
}`,...(we=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};const pr=["WithPreviousValueLessAndBetter","WithPreviousValueLessAndWorse","WithPreviousValueBiggerAndBetter","WithPreviousValueBiggerAndWorse","WithPreviousValueEqual","HugeNumbersNoExplicitWidth","HugeNumbers300","HugeNumbers500","HugeNumbers700","Description","ExplicitColor","HugeDescriptionNoExplicitWidth","HugeDescription500"];export{w as Description,B as ExplicitColor,q as HugeDescription500,E as HugeDescriptionNoExplicitWidth,V as HugeNumbers300,h as HugeNumbers500,_ as HugeNumbers700,b as HugeNumbersNoExplicitWidth,g as WithPreviousValueBiggerAndBetter,v as WithPreviousValueBiggerAndWorse,f as WithPreviousValueEqual,p as WithPreviousValueLessAndBetter,m as WithPreviousValueLessAndWorse,pr as __namedExportsOrder,dr as default};
