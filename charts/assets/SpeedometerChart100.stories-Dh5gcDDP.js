import{w as d}from"./withMeta-FY6bIYTP.js";import{R as i}from"./iframe-C54-I-iN.js";import{a as s}from"./Speedometer100Chart-0gUZNa5f.js";import{M as h}from"./meta-ElGNHWJH.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./preload-helper-C1FmrZbK.js";import"./lodash-TNMe4onG.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./clsx-B-dksMZM.js";import"./getPaddings-DLadn5mT.js";import"./useChartTheme-BtoCm5ur.js";import"./transform-DCyssGlG.js";import"./throttle-ZeV-RQBx.js";import"./debounce-Rb0A5Rg5.js";import"./toNumber-BFWmeo_E.js";import"./line-Cv5G64lG.js";import"./pie-5migKnfG.js";const l=["","var(--chart--base--status--primary--positive)","var(--chart--base--status--primary--medium)","var(--chart--base--status--primary--critical)"],g=[0,30,70,100],I={title:"Charts/Speedometer100Chart",component:s,args:{height:180,width:180,value:300,minValue:0,maxValue:500,labelDescription:"SomeDescription",segments:[0,30,70,100]},argTypes:{colors:{description:"Colors of speedometer"},labelDescription:{description:"Description under precentage"},padding:{description:"Speedometer padding"},segments:{description:"Segments on speedometer"},showLabels:{description:"Show labels inside of speedometer"},showTotal:{description:"Show precentage"},ticksGroup:{description:"Number of ticks groups"},ticksUnitInGroup:{description:"Number of ticks in group"},ticksUnitInGroupLength:{description:"Length of group starting tick line"},tickUnitLength:{description:"Length of tick line"},value:{description:"Value between max and min values"},maxValue:{description:"Max value (100%)"},minValue:{description:"Min value (0)"},width:{table:{disable:!0}},height:{table:{disable:!0}}},parameters:{docs:{page:d(h)},visual:{delayMs:3e3}}},t={render:e=>i.createElement("div",{style:{width:e.width,height:e.height}},i.createElement(s,{...e}))},r={args:{segments:g,colors:l},render:e=>i.createElement("div",{style:{width:e.width,height:e.height}},i.createElement(s,{...e}))};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div style={{
    width: args.width,
    height: args.height
  }}>
      <Speedometer100Chart {...args} />
    </div>
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    segments: trafficLightSegments,
    colors: trafficLightColors
  },
  render: args => <div style={{
    width: args.width,
    height: args.height
  }}>
      <Speedometer100Chart {...args} />
    </div>
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Default","TrafficLight"];export{t as Default,r as TrafficLight,N as __namedExportsOrder,I as default};
