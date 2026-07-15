import{w as K}from"./withMeta-FY6bIYTP.js";import{R as t,r as c}from"./iframe-C54-I-iN.js";import{P as i,a as h}from"./PieChart-DfCmv4ZS.js";import{u as Q}from"./useActiveDataPoints-D8qKhEJx.js";import{p as U,a as $,b as n}from"./pieChartStub-B5ggHMlB.js";import{S as E,T as ee}from"./Link-B6aRyTdF.js";import"./preload-helper-C1FmrZbK.js";import"./lodash-TNMe4onG.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./clsx-B-dksMZM.js";import"./useChartTheme-BtoCm5ur.js";import"./MetricLabel-CK4qoczM.js";import"./toString-CaMIQdMU.js";import"./ChartTooltip-S5xgWCzw.js";import"./Popover-CRuxH5S3.js";import"./pie-5migKnfG.js";import"./isChartDataPoint-CeoHD7To.js";import"./index-LUg1m9AG.js";const te={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},ae="PieChart",re="Pie chart — это компонент для визуализации данных в виде линий на координатной сетке. Используется для отображения изменений значений во времени или зависимости между переменными. Позволяет анализировать динамику, тренды и сравнивать несколько наборов данных.",ie="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?file_type=10&icon_type=1&page-id=2544%3A498923",ne="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?page-id=156%3A118430",se={dod:te,component:ae,usage:re,designLink:ie,pixsoView:ne},{action:b}=__STORYBOOK_MODULE_ACTIONS__,z=Object.keys(h),v=72,l=220,f=180,oe=e=>{const a=c.useRef(null),[r,d]=c.useState(f),[s,X]=c.useState(f);return c.useEffect(()=>{const o=a.current;if(!o)return;const T=()=>{const{width:j,height:q}=o.getBoundingClientRect();X(Math.round(Math.min(j,q)))};T();const _=new ResizeObserver(T);return _.observe(o),()=>_.disconnect()},[]),t.createElement(E,{gap:16,direction:"vertical"},t.createElement(ee,null,"Container size: ",r,"px",t.createElement("input",{min:v,max:l,type:"range",value:r,onChange:o=>d(Number(o.target.value)),style:{display:"block",width:l}})),t.createElement("div",{ref:a,style:{width:r,height:r,minWidth:v,minHeight:v,maxWidth:l,maxHeight:l,overflow:"visible",outline:"1px dashed var(--color--neutral400)"}},t.createElement(i,{...e,width:s,height:s})))},ye={title:"Charts/PieChart",component:i,args:{data:n,onClickData:b("onClickData"),onHoverData:b("onHoverData")},parameters:{docs:{page:K(se)}},argTypes:{size:{control:"select",options:z}}},p={args:{data:$},render:e=>t.createElement(E,{gap:16},z.map(a=>t.createElement("div",{key:a,style:{width:h[a].dimension,height:h[a].dimension}},t.createElement(i,{...e,size:a}))))},m={args:{data:U,showTooltip:!0,width:260,height:260},render:e=>t.createElement("div",{style:{width:e.width,height:e.height}},t.createElement(i,{...e}))},u={args:{data:n,showTooltip:!0,size:"medium"},render:e=>t.createElement(E,{gap:16},z.map(a=>t.createElement("div",{key:a,style:{width:h[a].dimension,height:h[a].dimension}},t.createElement(i,{...e,size:a}))))},g={args:{data:n,showTotal:!0},render:e=>t.createElement(oe,{...e})},C={args:{data:n,showTotal:!0,width:180,height:180,size:"large"},render:e=>t.createElement("div",{style:{width:e.width,height:e.height}},t.createElement(i,{...e}))},w={args:{standalone:!1,showTotal:!0,width:180,height:180},render:e=>{const{widgetData:a,updateActiveSlice:r}=Q(n);return t.createElement("div",{style:{width:e.width,height:e.height}},t.createElement(i,{...e,data:a,onHoverData:(d,s)=>{s&&r(s)},onLeaveData:()=>r(void 0)}))}},S={args:{standalone:!1,showTotal:!0,width:180,height:180},render:e=>{const a=c.useMemo(()=>n.map((r,d)=>({...r,active:d===2})),[n]);return t.createElement("div",{style:{width:e.width,height:e.height}},t.createElement(i,{...e,data:a}))}};var y,x,A;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: pieChartStubImplicitColor
  },
  render: args => <Space gap={16}>
      {chartSizes.map(size => {
      return <div key={size} style={{
        width: PIE_CHART_SIZE_CONFIG[size].dimension,
        height: PIE_CHART_SIZE_CONFIG[size].dimension
      }}>
            <PieChart {...args} size={size} />
          </div>;
    })}
    </Space>
}`,...(A=(x=p.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var P,I,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: pieChartStubAllColors,
    showTooltip: true,
    width: 260,
    height: 260
  },
  render: args => <div style={{
    width: args.width,
    height: args.height
  }}>
      <PieChart {...args} />
    </div>
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var O,R,W;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: pieChartStubExplicitColor,
    showTooltip: true,
    size: 'medium'
  },
  render: args => <Space gap={16}>
      {chartSizes.map(size => {
      return <div key={size} style={{
        width: PIE_CHART_SIZE_CONFIG[size].dimension,
        height: PIE_CHART_SIZE_CONFIG[size].dimension
      }}>
            <PieChart {...args} size={size} />
          </div>;
    })}
    </Space>
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var k,H,M;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: pieChartStubExplicitColor,
    showTotal: true
  },
  render: args => <ResizablePieChart {...args} />
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,F,Z;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: pieChartStubExplicitColor,
    showTotal: true,
    width: 180,
    height: 180,
    size: 'large'
  },
  render: args => <div style={{
    width: args.width,
    height: args.height
  }}>
      <PieChart {...args} />
    </div>
}`,...(Z=(F=C.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var G,L,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    standalone: false,
    showTotal: true,
    width: 180,
    height: 180
  },
  render: args => {
    const {
      widgetData,
      updateActiveSlice
    } = useActiveDataPoints(pieChartStubExplicitColor);
    return <div style={{
      width: args.width,
      height: args.height
    }}>
        <PieChart {...args} data={widgetData} onHoverData={(_, payload) => {
        if (payload) updateActiveSlice(payload);
      }} onLeaveData={() => updateActiveSlice(undefined)} />
      </div>;
  }
}`,...(Y=(L=w.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var B,J,V;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    standalone: false,
    showTotal: true,
    width: 180,
    height: 180
  },
  render: args => {
    const dataWithActive = useMemo(() => {
      return pieChartStubExplicitColor.map((record, index) => {
        return {
          ...record,
          active: index === 2
        };
      });
    }, [pieChartStubExplicitColor]);
    return <div style={{
      width: args.width,
      height: args.height
    }}>
        <PieChart {...args} data={dataWithActive} />
      </div>;
  }
}`,...(V=(J=S.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const xe=["Default","AllColors","WithTooltip","ResizableContainer","WithTotal","WithOutterState","WithExplicitActiveSlice"];export{m as AllColors,p as Default,g as ResizableContainer,S as WithExplicitActiveSlice,w as WithOutterState,u as WithTooltip,C as WithTotal,xe as __namedExportsOrder,ye as default};
