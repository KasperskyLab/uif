import{w as te}from"./withMeta-FY6bIYTP.js";import{R as e,r as R}from"./iframe-C54-I-iN.js";import{S as re}from"./StackedBarChart-C0knf9Px.js";import{s as d}from"./stackedBarChartStub-XpuGAVcu.js";import{L as s}from"./Legend-Tpo_QXAT.js";import{w as ae,L as ne,W as f}from"./constants-DVX35qGT.js";import{W as r,t as E}from"./helpers-Z5IEJiwJ.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./getPaddings-DLadn5mT.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./constants-CymJ51aP.js";import"./ChartTooltip-S5xgWCzw.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./index-Chjiymov.js";import"./generateId-d8nD6DCH.js";import"./Dropdown-BdgOeymL.js";import"./debounce-Rb0A5Rg5.js";import"./v4-CcQs6ztn.js";import"./Placeholder-DmqZoLUM.js";import"./Button-BaSpBHYv.js";const oe={designTokens:!0,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!1},se="WidgetView",de="WidgetView — infrastructure container for widgets: per-chart state, optional headers, legends, additional chart slots (elementAfter, elementBottom), lifecycle callbacks, and render-error handling via WidgetErrorBoundary.",ie={dod:oe,component:se,usage:de},{action:b}=__STORYBOOK_MODULE_ACTIONS__,Z={width:900,height:420},n=t=>e.createElement(re,{...t,data:d}),o=e.createElement(f,{title:"Widget title",description:"Optional description for the main chart slot."}),Pe={title:"Widget/WidgetView",component:r,decorators:[t=>e.createElement("div",{style:Z},e.createElement(t,null))],args:{state:"ready",invalid:!1,active:!1,legendPosition:ne.RIGHT,errorResetKey:0,i18n:{empty:{noDataTitle:"No data",noDataDescription:"Please refresh the page",emptyLabel:"No items"},error:{title:"Error",reason:"Something went wrong"}},children:e.createElement(n,null)},argTypes:ae,parameters:{docs:{page:te(ie)}}},w={header:e.createElement("div",{style:{padding:8,border:"1px solid brown"}},"Header slot"),chartFooter:e.createElement("div",{style:{padding:8,width:"100%",color:"#6b7684",border:"1px solid green"}},"Chart footer slot"),legend:e.createElement("div",{style:{width:"100%",height:"100%",padding:8,color:"#6b7684",border:"1px solid red"}},"Legend slot")},i={args:{header:w.header,chartFooter:w.chartFooter,legend:w.legend},render:t=>e.createElement(r,{...t,state:"ready"},e.createElement("div",{style:{height:"100%",padding:8,color:"#6b7684",border:"1px solid black"}},"Chart slot"))},l={render:t=>{const a=E(d);return e.createElement(r,{...t,header:o,legend:e.createElement(s,{items:a})},e.createElement(n,null))}},c={args:{state:"loading",children:e.createElement(n,null)},render:t=>e.createElement(r,{...t,header:o},t.children)},m={args:{state:"no-data",i18n:{empty:{noDataTitle:"No data",noDataDescription:"Refresh the page or change filters"}}},render:t=>e.createElement(r,{...t,header:o})},g={args:{state:"empty",i18n:{empty:{emptyLabel:"Nothing to show yet"}}},render:t=>e.createElement(r,{...t,header:o})},h={args:{state:"error",i18n:{error:{title:"Error",reason:"NetworkError",details:"503 Service unavailable"}}},render:t=>e.createElement(r,{...t,header:o})},p={decorators:[t=>e.createElement("div",{style:{...Z,height:620}},e.createElement(t,null))],render:t=>{const a=E(d);return e.createElement(r,{...t,state:"ready",header:e.createElement(f,{title:"Main chart",size:"medium"}),legend:e.createElement(s,{items:a}),elementAfter:{state:"ready",header:e.createElement(f,{title:"Side chart",size:"small"}),legend:e.createElement(s,{items:a}),chart:e.createElement(n,null)},elementBottom:{state:"ready",header:e.createElement(f,{title:"Bottom chart",description:"Independent state from other slots"}),i18n:{empty:{noDataTitle:"No data (bottom chart)",noDataDescription:"Bottom chart has no data"}},chart:e.createElement(n,null)}},e.createElement(n,null))}},le=({shouldCrash:t})=>{if(t)throw new Error("Intentional render error");return e.createElement(n,null)},u={parameters:{docs:{description:{story:"Demonstrates render-time error capture via `WidgetErrorBoundary`. Toggle crash/recover and bump `errorResetKey` to reset the boundary after fixing the chart."}}},render:t=>{const[a,W]=R.useState(0),[$,C]=R.useState(!0),ee=E(d);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,height:"100%"}},e.createElement("div",{style:{display:"flex",gap:8}},e.createElement("button",{onClick:()=>{C(!0),W(S=>S+1)},type:"button"},"Crash again"),e.createElement("button",{onClick:()=>{C(!1),W(S=>S+1)},type:"button"},"Recover")),e.createElement(r,{...t,header:o,legend:e.createElement(s,{items:ee}),state:"ready",errorResetKey:a,i18n:{error:{title:"Render error",reason:"internalError",details:"Chart threw during render. Increase errorResetKey after recovery."}}},e.createElement(le,{shouldCrash:$})))}},y={parameters:{docs:{description:{story:"Open the Actions panel: `lifecycle.onMount`, `onReady`, and `onUnmount` fire for the main chart when `lifecycle.enabled` is true."}}},args:{lifecycle:{enabled:!0,onMount:b("lifecycle:onMount"),onReady:b("lifecycle:onReady"),onUnmount:b("lifecycle:onUnmount")}},render:t=>{const a=E(d);return e.createElement(r,{...t,header:o,legend:e.createElement(s,{items:a}),state:"ready"},e.createElement(n,null))}};var D,v,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    header: slotStubs.header,
    chartFooter: slotStubs.chartFooter,
    legend: slotStubs.legend
  },
  render: args => <WidgetView {...args} state="ready">
      <div style={{
      height: '100%',
      padding: 8,
      color: '#6b7684',
      border: '1px solid black'
    }}>Chart slot</div>
    </WidgetView>
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var I,L,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData);
    return <WidgetView {...args} header={defaultWidgetHeader} legend={<Legend items={legendItems} />}>
        <DemoChart />
      </WidgetView>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var x,B,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'loading',
    children: <DemoChart />
  },
  render: args => <WidgetView {...args} header={defaultWidgetHeader}>
      {args.children}
    </WidgetView>
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var H,K,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    state: 'no-data',
    i18n: {
      empty: {
        noDataTitle: 'No data',
        noDataDescription: 'Refresh the page or change filters'
      }
    }
  },
  render: args => <WidgetView {...args} header={defaultWidgetHeader} />
}`,...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var A,M,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    state: 'empty',
    i18n: {
      empty: {
        emptyLabel: 'Nothing to show yet'
      }
    }
  },
  render: args => <WidgetView {...args} header={defaultWidgetHeader} />
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,_,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'error',
    i18n: {
      error: {
        title: 'Error',
        reason: 'NetworkError',
        details: '503 Service unavailable'
      }
    }
  },
  render: args => <WidgetView {...args} header={defaultWidgetHeader} />
}`,...(U=(_=h.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var z,P,G;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    ...storyContainerStyle,
    height: 620
  }}>
        <Story />
      </div>],
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData);
    return <WidgetView {...args} state="ready" header={<WidgetHeader title="Main chart" size="medium" />} legend={<Legend items={legendItems} />} elementAfter={{
      state: 'ready',
      header: <WidgetHeader title="Side chart" size="small" />,
      legend: <Legend items={legendItems} />,
      chart: <DemoChart />
    }} elementBottom={{
      state: 'ready',
      header: <WidgetHeader title="Bottom chart" description="Independent state from other slots" />,
      i18n: {
        empty: {
          noDataTitle: 'No data (bottom chart)',
          noDataDescription: 'Bottom chart has no data'
        }
      },
      chart: <DemoChart />
    }}>
        <DemoChart />
      </WidgetView>;
  }
}`,...(G=(P=p.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var Y,j,q;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates render-time error capture via \`WidgetErrorBoundary\`. Toggle crash/recover and bump \`errorResetKey\` to reset the boundary after fixing the chart.'
      }
    }
  },
  render: args => {
    const [errorResetKey, setErrorResetKey] = useState(0);
    const [shouldCrash, setShouldCrash] = useState(true);
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      height: '100%'
    }}>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <button onClick={() => {
          setShouldCrash(true);
          setErrorResetKey(key => key + 1);
        }} type="button">
            Crash again
          </button>
          <button onClick={() => {
          setShouldCrash(false);
          setErrorResetKey(key => key + 1);
        }} type="button">
            Recover
          </button>
        </div>

        <WidgetView {...args} header={defaultWidgetHeader} legend={<Legend items={legendItems} />} state="ready" errorResetKey={errorResetKey} i18n={{
        error: {
          title: 'Render error',
          reason: 'internalError',
          details: 'Chart threw during render. Increase errorResetKey after recovery.'
        }
      }}>
          <CrashOnRender shouldCrash={shouldCrash} />
        </WidgetView>
      </div>;
  }
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,X;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Open the Actions panel: \`lifecycle.onMount\`, \`onReady\`, and \`onUnmount\` fire for the main chart when \`lifecycle.enabled\` is true.'
      }
    }
  },
  args: {
    lifecycle: {
      enabled: true,
      onMount: action('lifecycle:onMount'),
      onReady: action('lifecycle:onReady'),
      onUnmount: action('lifecycle:onUnmount')
    }
  },
  render: args => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData);
    return <WidgetView {...args} header={defaultWidgetHeader} legend={<Legend items={legendItems} />} state="ready">
        <DemoChart />
      </WidgetView>;
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ge=["ShowWidgetSlots","Ready","Loading","NoData","Empty","ExternalError","WithAdditionalCharts","RenderErrorAndRecovery","LifecycleCallbacks"];export{g as Empty,h as ExternalError,y as LifecycleCallbacks,c as Loading,m as NoData,l as Ready,u as RenderErrorAndRecovery,i as ShowWidgetSlots,p as WithAdditionalCharts,Ge as __namedExportsOrder,Pe as default};
