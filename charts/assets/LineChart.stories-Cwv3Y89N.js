import{w as ca}from"./withMeta-FY6bIYTP.js";import{R as x}from"./iframe-C54-I-iN.js";import{g as pa}from"./data-bnNFmSzB.js";import{D as da,a as la}from"./TextTruncateWithPopup-BlhaZ82M.js";import{L as ua}from"./LocalizationProvider-XmtfnBij.js";import{L as ga}from"./LineChart-4bG8qsTp.js";import{s as ha,a as D,b as a,c as Ta,d as xa,e as Da,f as La}from"./lineChartStub-Dso8l3XJ.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-EMKpYj.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./Legend-Tpo_QXAT.js";import"./clsx-B-dksMZM.js";import"./generateId-d8nD6DCH.js";import"./getPaddings-DLadn5mT.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./v4-CcQs6ztn.js";import"./pie-5migKnfG.js";import"./line-Cv5G64lG.js";import"./throttle-ZeV-RQBx.js";import"./debounce-Rb0A5Rg5.js";const Sa={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},ya="LineChart",Ca="Line chart — это компонент для визуализации данных в виде линий на координатной сетке. Используется для отображения изменений значений во времени или зависимости между переменными. Позволяет анализировать динамику, тренды и сравнивать несколько наборов данных.",ba="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?file_type=10&icon_type=1&page-id=2544%3A49893",fa="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?page-id=156%3A131126",ka={dod:Sa,component:ya,usage:Ca,designLink:ba,pixsoView:fa},{action:L}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Charts/LineChart",component:ga,decorators:[(e,{args:t})=>x.createElement("div",{style:{width:t.width,height:t.height}},x.createElement(ua,{locale:t.locale},x.createElement(e,null)))],args:{width:la,height:da,locale:"en",lineWidth:2,pointSize:3,padding:{bottom:100},showTooltip:!0,gradient:!0,otherLabel:"someOtherLabel",onClickData:L("onClickData"),onHoverData:L("onHoverData"),totalLabel:"Total",showTotal:!0},argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},lineWidth:{control:{type:"range",min:1,max:10,step:1}},pointSize:{control:{type:"range",min:1,max:10,step:1}},xMin:{control:{type:"range",min:-500,max:1e3,step:10}},xMax:{control:{type:"range",min:-500,max:1e3,step:10}},yMin:{control:{type:"range",min:-500,max:1e4,step:10}},yMax:{control:{type:"range",min:-500,max:1e4,step:10}},metricLineWidth:{control:{type:"range",min:1,max:100,step:1}}},parameters:{docs:{page:ca(ka)}}},Ha=pa(15),r={args:{data:D}},o={args:{data:Ha}},s={args:{data:xa}},n={args:{data:D,showTooltip:!1}},i={args:{data:D,gradient:!1}},m={args:{locale:"ru",xScale:"time",data:a}},c={args:{data:Ta,yScale:"log"}},p={args:{data:ha}},d={args:{data:a,xScale:"time"}},l={args:{data:a,xScale:"time",xTickFormat:(e,t,Ma,ma)=>String(ma),tooltipDateFormat:e=>e.toString()}},u={args:{data:La,xScale:"time"}},g={args:{data:Da,xScale:"time",xMin:void 0,xMax:void 0,yMin:void 0,yMax:void 0}},h={args:{data:a,xTickHide:!0}},T={args:{data:a,yTickHide:!0}};var S,y,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: stubLineChartData
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,f,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: exampleData
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var H,M,_;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: stubLineChartDataOne
  }
}`,...(_=(M=s.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var w,O,W;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: stubLineChartData,
    showTooltip: false
  }
}`,...(W=(O=n.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var E,I,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: stubLineChartData,
    gradient: false
  }
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var v,A,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    locale: 'ru',
    xScale: 'time',
    data: stubLineTimeChartData
  }
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var z,B,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: stubLineChartWithLongTextData,
    yScale: 'log'
  }
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var P,U,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: stubLineColorInDataChartData
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,N,V;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeChartData,
    xScale: 'time'
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var X,q,K;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeChartData,
    xScale: 'time',
    xTickFormat: (tick: any, index: number, ticks: any[], supposedFormat?: string) => {
      return String(supposedFormat);
    },
    tooltipDateFormat: (date: number | Date) => {
      return date.toString();
    }
  }
}`,...(K=(q=l.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,Z,j;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeChartDataOne,
    xScale: 'time'
  }
}`,...(j=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var $,aa,ea;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeEmpty,
    xScale: 'time',
    xMin: undefined,
    xMax: undefined,
    yMin: undefined,
    yMax: undefined
  }
}`,...(ea=(aa=g.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,ra,oa;h.parameters={...h.parameters,docs:{...(ta=h.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeChartData,
    xTickHide: true
  }
}`,...(oa=(ra=h.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var sa,na,ia;T.parameters={...T.parameters,docs:{...(sa=T.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    data: stubLineTimeChartData,
    yTickHide: true
  }
}`,...(ia=(na=T.parameters)==null?void 0:na.docs)==null?void 0:ia.source}}};const ie=["Default","DataBigger10","Single","WithoutTooltip","WithoutGradient","I18nRu","Logarithmic","ColorInData","Timeline","TimelineWithTimezone","TimelineOne","TimelineEmpty","xTickHide","yTickHide"];export{p as ColorInData,o as DataBigger10,r as Default,m as I18nRu,c as Logarithmic,s as Single,d as Timeline,g as TimelineEmpty,u as TimelineOne,l as TimelineWithTimezone,i as WithoutGradient,n as WithoutTooltip,ie as __namedExportsOrder,ne as default,h as xTickHide,T as yTickHide};
