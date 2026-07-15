import{w as Q}from"./withMeta-FY6bIYTP.js";import{R as u}from"./iframe-C54-I-iN.js";import{S as h}from"./Speedometer100Chart-0gUZNa5f.js";import{M as X}from"./meta-ElGNHWJH.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./lodash-TNMe4onG.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./clsx-B-dksMZM.js";import"./getPaddings-DLadn5mT.js";import"./useChartTheme-BtoCm5ur.js";import"./transform-DCyssGlG.js";import"./throttle-ZeV-RQBx.js";import"./debounce-Rb0A5Rg5.js";import"./toNumber-BFWmeo_E.js";import"./line-Cv5G64lG.js";import"./pie-5migKnfG.js";const e=["","var(--chart--base--status--primary--positive)","var(--chart--base--status--primary--medium)","var(--chart--base--status--primary--critical)"],he={title:"Charts/SpeedometerChart",component:h,decorators:[(r,{args:s})=>u.createElement("div",{style:{width:s.width,height:s.height}},u.createElement(r,null))],args:{height:180,width:180,value:5,segments:[0,30,70,100],labelDescription:"SomeDescription"},argTypes:{colors:{description:"Colors of speedometer"},labelDescription:{description:"Description under precentage"},padding:{description:"Speedometer padding"},segments:{description:"Segments on speedometer"},showLabels:{description:"Show labels inside of speedometer"},showTotal:{description:"Show precentage"},ticksGroup:{description:"Number of ticks groups"},ticksUnitInGroup:{description:"Number of ticks in group"},ticksUnitInGroupLength:{description:"Length of group starting tick line"},tickUnitLength:{description:"Length of tick line"},value:{description:"Selected value on speedometer"},width:{table:{disable:!0}},height:{table:{disable:!0}}},parameters:{docs:{page:Q(X)},visual:{delayMs:3e3}}},o={args:{colors:e}},t={args:{labelDescription:void 0,colors:e}},a={args:{labelDescription:"Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua",colors:e}},n={args:{colors:e},render:r=>{var s;return u.createElement(h,{...r,value:(((s=r.segments)==null?void 0:s.at(-1))||0)+10})}},i={args:{colors:e},render:r=>u.createElement(h,{...r,value:(r.segments.at(0)||0)-10})},c={args:{colors:e,showLabels:"hide"}},m={args:{colors:e,showLabels:"bySegments"}},l={args:{segments:[0,15,85,100],colors:e,showLabels:"bySegments",value:40}},p={args:{segments:[0,40,100],showLabels:"bySegments",value:40}},g={args:{segments:[0,3e3,7e3,1e4],colors:e,showLabels:"bySegments",value:4e3}},d={args:{segments:[0,100,300,800,1e3],showLabels:"bySegments",value:400}};var S,b,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    colors: trafficLightColors
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var f,w,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    labelDescription: undefined,
    colors: trafficLightColors
  }
}`,...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var y,C,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    labelDescription: 'Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua',
    colors: trafficLightColors
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,M,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    colors: trafficLightColors
  },
  render: args => <SpeedometerChart {...args} value={(args.segments?.at(-1) || 0) + 10} />
}`,...(x=(M=n.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var V,E,G;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    colors: trafficLightColors
  },
  render: args => <SpeedometerChart {...args} value={(args.segments.at(0) || 0) - 10} />
}`,...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var q,B,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    colors: trafficLightColors,
    showLabels: 'hide'
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,O,U;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    colors: trafficLightColors,
    showLabels: 'bySegments'
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var H,I,N;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    segments: [0, 15, 85, 100],
    colors: trafficLightColors,
    showLabels: 'bySegments',
    value: 40
  }
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var R,W,_;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    segments: [0, 40, 100],
    showLabels: 'bySegments',
    value: 40
  }
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var j,z,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    segments: [0, 3000, 7000, 10000],
    colors: trafficLightColors,
    showLabels: 'bySegments',
    value: 4000
  }
}`,...(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,J,K;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    segments: [0, 100, 300, 800, 1000],
    showLabels: 'bySegments',
    value: 400
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Se=["Default","WithoutDescription","LongDescription","ValueGreaterMax","ValueLessMin","ShowLabelsHide","ShowLabelsBySegments","PercentageSegments","TwoSegments","BigValues","OtherSegments"];export{g as BigValues,o as Default,a as LongDescription,d as OtherSegments,l as PercentageSegments,m as ShowLabelsBySegments,c as ShowLabelsHide,p as TwoSegments,n as ValueGreaterMax,i as ValueLessMin,t as WithoutDescription,Se as __namedExportsOrder,he as default};
