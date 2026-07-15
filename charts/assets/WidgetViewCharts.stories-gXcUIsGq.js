import{T as Z,a as w,h as $}from"./timelineBarChartStub-JH_N-CM9.js";import{R as e}from"./iframe-C54-I-iN.js";import{B as ee,s as k}from"./barChartStub-hlI34qWB.js";import{C as te}from"./CounterChart-CKZhnNe_.js";import{L as D}from"./LineChart-4bG8qsTp.js";import{a as s}from"./lineChartStub-Dso8l3XJ.js";import{P as re}from"./PieChart-DfCmv4ZS.js";import{b as W}from"./pieChartStub-B5ggHMlB.js";import{S as ae}from"./Speedometer100Chart-0gUZNa5f.js";import{S as oe}from"./StackedBarChart-C0knf9Px.js";import{c as H}from"./stackedBarChartStub-XpuGAVcu.js";import{L as n}from"./Legend-Tpo_QXAT.js";import{w as ie,L,W as i}from"./constants-DVX35qGT.js";import{W as o,t as d,a as ne}from"./helpers-Z5IEJiwJ.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./clsx-B-dksMZM.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./getPaddings-DLadn5mT.js";import"./constants-CymJ51aP.js";import"./ChartTooltip-S5xgWCzw.js";import"./helpers-BOPFFCdb.js";import"./data-bnNFmSzB.js";import"./index-C-EMKpYj.js";import"./preload-helper-C1FmrZbK.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./v4-CcQs6ztn.js";import"./pie-5migKnfG.js";import"./line-Cv5G64lG.js";import"./throttle-ZeV-RQBx.js";import"./debounce-Rb0A5Rg5.js";import"./index-Chjiymov.js";import"./generateId-d8nD6DCH.js";import"./Dropdown-BdgOeymL.js";import"./Placeholder-DmqZoLUM.js";import"./Button-BaSpBHYv.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,se={width:980,height:460},de={state:"ready",legendPosition:L.RIGHT},rt={title:"Widget/WidgetView/WithCharts",component:o,decorators:[t=>e.createElement("div",{style:se},e.createElement(t,null))],args:de,argTypes:ie},l={name:"LineChart Horizontal",render:t=>{const r=d(s);return e.createElement(o,{...t,header:e.createElement(i,{title:"Line chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(D,{data:s,lineWidth:2,pointSize:3,gradient:!0,showTooltip:!0,onClickData:a("line:onClickData"),onHoverData:a("line:onHoverData")}))}},m={name:"LineChart Vertical",render:t=>{const r=d(s);return e.createElement(o,{...t,legendPosition:L.BOTTOM,header:e.createElement(i,{title:"Line chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(D,{data:s,lineWidth:2,pointSize:3,gradient:!0,showTooltip:!0,onClickData:a("line:onClickData"),onHoverData:a("line:onHoverData")}))}},c={name:"LineChart Vertical With Horizontal Legend",render:t=>{const r=d(s);return e.createElement(o,{...t,legendPosition:L.BOTTOM,header:e.createElement(i,{title:"Line chart"}),legend:e.createElement(n,{items:r,widthMode:"flex",orientation:"horizontal"})},e.createElement(D,{data:s,lineWidth:2,pointSize:3,gradient:!0,showTooltip:!0,onClickData:a("line:onClickData"),onHoverData:a("line:onHoverData")}))}},h={name:"PieChart",render:t=>{const r=ne(W);return e.createElement(o,{...t,header:e.createElement(i,{title:"Pie chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(re,{data:W,showTooltip:!0,onClickData:a("pie:onClickData"),onHoverData:a("pie:onHoverData"),showTotal:!0}))}},g={name:"BarChart",render:t=>{const r=d(k);return e.createElement(o,{...t,header:e.createElement(i,{title:"Bar chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(ee,{data:k,showTooltip:!0,onClickData:a("bar:onClickData"),onHoverData:a("bar:onHoverData")}))}},p={name:"StackedBarChart",render:t=>{const r=d(H);return e.createElement(o,{...t,header:e.createElement(i,{title:"Stacked bar chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(oe,{minTickLabel:{y:5,xHorizontal:3,xVertical:7},data:H,showTooltip:!0,otherLabel:"Others"}))}},C={name:"TimelineBarChart",render:t=>{const r=d(w);return e.createElement(o,{...t,header:e.createElement(i,{title:"Timeline bar chart"}),legend:e.createElement(n,{items:r,widthMode:"flex"})},e.createElement(Z,{data:w,timeScaleInterval:$(24),showTooltip:!0,onClickData:a("timeline:onClickData"),onHoverData:a("timeline:onHoverData")}))}},u={name:"SpeedometerChart",parameters:{visual:{delayMs:3e3}},render:t=>{const X=[0,2,4,6,8,10];return e.createElement(o,{...t,header:e.createElement(i,{title:"Speedometer"})},e.createElement(ae,{value:5,segments:X,labelDescription:"SomeDescription"}))}},S={name:"CounterChart",render:t=>{const r={metric:"description",value:551,previousValue:442};return e.createElement(o,{...t,header:e.createElement(i,{title:"Counter"})},e.createElement(te,{data:r,biggerBetter:!0}))}};var T,E,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'LineChart Horizontal',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData);
    return <WidgetView {...args} header={<WidgetHeader title="Line chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <LineChart data={stubLineChartData} lineWidth={2} pointSize={3} gradient showTooltip onClickData={action('line:onClickData')} onHoverData={action('line:onHoverData')} />
      </WidgetView>;
  }
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var B,I,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'LineChart Vertical',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData);
    return <WidgetView {...args} legendPosition={LegendPosition.BOTTOM} header={<WidgetHeader title="Line chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <LineChart data={stubLineChartData} lineWidth={2} pointSize={3} gradient showTooltip onClickData={action('line:onClickData')} onHoverData={action('line:onHoverData')} />
      </WidgetView>;
  }
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var b,f,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'LineChart Vertical With Horizontal Legend',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData);
    return <WidgetView {...args} legendPosition={LegendPosition.BOTTOM} header={<WidgetHeader title="Line chart" />} legend={<Legend items={legendItems} widthMode="flex" orientation="horizontal" />}>
        <LineChart data={stubLineChartData} lineWidth={2} pointSize={3} gradient showTooltip onClickData={action('line:onClickData')} onHoverData={action('line:onHoverData')} />
      </WidgetView>;
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,M,P;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'PieChart',
  render: args => {
    const legendItems = toLegendItemsFromPieData(pieChartStubExplicitColor);
    return <WidgetView {...args} header={<WidgetHeader title="Pie chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <PieChart data={pieChartStubExplicitColor} showTooltip onClickData={action('pie:onClickData')} onHoverData={action('pie:onHoverData')} showTotal />
      </WidgetView>;
  }
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,O,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'BarChart',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(stubSingleBarChartData);
    return <WidgetView {...args} header={<WidgetHeader title="Bar chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <BarChart data={stubSingleBarChartData} showTooltip onClickData={action('bar:onClickData')} onHoverData={action('bar:onHoverData')} />
      </WidgetView>;
  }
}`,...(F=(O=g.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var _,R,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'StackedBarChart',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(multipleStackedBarChartDataWithLongText);
    return <WidgetView {...args} header={<WidgetHeader title="Stacked bar chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <StackedBarChart minTickLabel={{
        y: 5,
        xHorizontal: 3,
        xVertical: 7
      }} data={multipleStackedBarChartDataWithLongText} showTooltip otherLabel="Others" />
      </WidgetView>;
  }
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var G,K,N;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'TimelineBarChart',
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData);
    return <WidgetView {...args} header={<WidgetHeader title="Timeline bar chart" />} legend={<Legend items={legendItems} widthMode="flex" />}>
        <TimelineBarChart data={singleStackedBarChartData} timeScaleInterval={hoursToMilliseconds(24)} showTooltip onClickData={action('timeline:onClickData')} onHoverData={action('timeline:onHoverData')} />
      </WidgetView>;
  }
}`,...(N=(K=C.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,Y,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'SpeedometerChart',
  parameters: {
    visual: {
      delayMs: 3000
    }
  },
  render: args => {
    const value = 5;
    const segments = [0, 2, 4, 6, 8, 10];
    return <WidgetView {...args} header={<WidgetHeader title="Speedometer" />}>
        <SpeedometerChart value={value} segments={segments} labelDescription="SomeDescription" />
      </WidgetView>;
  }
}`,...(j=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var q,J,Q;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'CounterChart',
  render: args => {
    const data = {
      metric: 'description',
      value: 551,
      previousValue: 442
    };
    return <WidgetView {...args} header={<WidgetHeader title="Counter" />}>
        <CounterChart data={data} biggerBetter />
      </WidgetView>;
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const at=["LineChartHorizontalStory","LineChartVerticalStory","LineChartVerticalWithHorizontalLegendStory","PieChartStory","BarChartStory","StackedBarChartStory","TimelineBarChartStory","SpeedometerChartStory","CounterChartStory"];export{g as BarChartStory,S as CounterChartStory,l as LineChartHorizontalStory,m as LineChartVerticalStory,c as LineChartVerticalWithHorizontalLegendStory,h as PieChartStory,u as SpeedometerChartStory,p as StackedBarChartStory,C as TimelineBarChartStory,at as __namedExportsOrder,rt as default};
