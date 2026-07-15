import{w as Ca}from"./withMeta-FY6bIYTP.js";import{R as e}from"./iframe-C54-I-iN.js";import{D as Ba,a as za}from"./TextTruncateWithPopup-BlhaZ82M.js";import{s as a,d as Da,a as Ma,b as z,c as wa,e as ya,B as Sa}from"./barChartStub-hlI34qWB.js";import{B as Ta}from"./helpers-BOPFFCdb.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./StackedBarChart-C0knf9Px.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./getPaddings-DLadn5mT.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./Legend-Tpo_QXAT.js";import"./generateId-d8nD6DCH.js";import"./constants-CymJ51aP.js";import"./ChartTooltip-S5xgWCzw.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./index-Chjiymov.js";const fa={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},xa="BarChart",Ha="BarChart - компонент для отображения данных в виде столбчатой диаграммы. Используется для сравнения категорий по количественным значениям.",_a="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?page-id=156%3A160777",La="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?file_type=10&icon_type=1&page-id=2544%3A49894",Wa={dod:fa,component:xa,usage:Ha,pixsoView:_a,designLink:La},{action:D}=__STORYBOOK_MODULE_ACTIONS__,ba=Object.keys(Ta),nr={title:"Charts/BarChart",component:Sa,decorators:[(r,{args:t})=>e.createElement("div",{style:{width:t.width,height:t.height}},e.createElement(r,null))],parameters:{docs:{page:Ca(Wa)}},args:{width:za,height:Ba,horizontal:!1,showTooltip:!0,showBarValues:!1,showSideLabels:!1,onClickData:D("onClickData"),onHoverData:D("onHoverData"),totalLabel:"Total",showTotal:!0},argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},size:{control:"select",options:ba,description:"Фиксированный размер BarChart. Если задан, переопределяет ручные barWidth, cornerRadius и gap-пропсы: large = 32/8, medium = 24/4, small = 16/2.",table:{category:"Layout"}},horizontal:{control:"boolean"},showTooltip:{control:"boolean"},showBarValues:{control:"boolean"},showSideLabels:{control:"boolean"},yMin:{control:{type:"range",min:-500,max:1e3,step:10}},yMax:{control:{type:"range",min:-500,max:1e3,step:10}},showTotal:{control:"boolean"},totalLabel:{control:"text"}}},s={args:{data:a}},o={args:{data:a,size:"small"},render:r=>e.createElement("div",{style:{display:"grid",gap:24}},ba.map(t=>e.createElement("div",{key:t,style:{width:r.width,height:r.height}},e.createElement(Sa,{...r,size:t}))))},n={args:{data:a,size:"small",barWidth:64,cornerRadius:16}},i={args:{showTooltip:!1,data:a}},l={args:{showBarValues:!0,data:a}},c={args:{horizontal:!0,data:a}},p={args:{horizontal:!0,showBarValues:!0,data:a}},d={args:{horizontal:!0,data:wa,showSideLabels:!0}},u={args:{data:z}},m={args:{data:Da,width:584,height:280,size:"small"}},h={args:{horizontal:!0,data:z}},g={args:{data:z,colors:["#ff0000"]}},S={args:{data:ya}},b={args:{data:Ma}},C={args:{data:a,yMin:5,yMax:10}},B={args:{data:a,horizontal:!0,yMin:5,yMax:10}};var M,w,y;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: stubSingleBarChartData
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,f,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: stubSingleBarChartData,
    size: 'small'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {chartSizes.map(size => <div key={size} style={{
      width: args.width,
      height: args.height
    }}>
          <BarChart {...args} size={size} />
        </div>)}
    </div>
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var H,_,L;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: stubSingleBarChartData,
    size: 'small',
    barWidth: 64,
    cornerRadius: 16
  }
}`,...(L=(_=n.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var W,E,V;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    showTooltip: false,
    data: stubSingleBarChartData
  }
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var v,O,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showBarValues: true,
    data: stubSingleBarChartData
  }
}`,...(A=(O=l.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var I,R,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: stubSingleBarChartData
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,F,P;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    showBarValues: true,
    data: stubSingleBarChartData
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var N,U,Y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: stubSingleBarChartDataWithSideLabels,
    showSideLabels: true
  }
}`,...(Y=(U=d.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,X,Z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: stubMultipleBarChartData
  }
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var j,q,K;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: denseBarChartData,
    width: 584,
    height: 280,
    size: 'small'
  }
}`,...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,$,aa;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: stubMultipleBarChartData
  }
}`,...(aa=($=h.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ra,ta,ea;g.parameters={...g.parameters,docs:{...(ra=g.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    data: stubMultipleBarChartData,
    colors: ['#ff0000']
  }
}`,...(ea=(ta=g.parameters)==null?void 0:ta.docs)==null?void 0:ea.source}}};var sa,oa,na;S.parameters={...S.parameters,docs:{...(sa=S.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    data: stubMultipleColorInChartData
  }
}`,...(na=(oa=S.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var ia,la,ca;b.parameters={...b.parameters,docs:{...(ia=b.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    data: stubGroupBarChartData
  }
}`,...(ca=(la=b.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var pa,da,ua;C.parameters={...C.parameters,docs:{...(pa=C.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    data: stubSingleBarChartData,
    yMin: 5,
    yMax: 10
  }
}`,...(ua=(da=C.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,ha,ga;B.parameters={...B.parameters,docs:{...(ma=B.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  args: {
    data: stubSingleBarChartData,
    horizontal: true,
    yMin: 5,
    yMax: 10
  }
}`,...(ga=(ha=B.parameters)==null?void 0:ha.docs)==null?void 0:ga.source}}};const ir=["Default","Sizes","SizeOverridesManualProps","WithoutTooltip","WithBarValues","Horizontal","HorizontalWithBarValues","HorizontalWithSideLabels","Multiple","Dense","HorizontalMultiple","MultipleColor","MultipleColorInData","Group","MinMax","MinMaxHorizontal"];export{s as Default,m as Dense,b as Group,c as Horizontal,h as HorizontalMultiple,p as HorizontalWithBarValues,d as HorizontalWithSideLabels,C as MinMax,B as MinMaxHorizontal,u as Multiple,g as MultipleColor,S as MultipleColorInData,n as SizeOverridesManualProps,o as Sizes,l as WithBarValues,i as WithoutTooltip,ir as __namedExportsOrder,nr as default};
