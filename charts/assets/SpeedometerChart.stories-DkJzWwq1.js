import{R as r}from"./index-B3FZByPw.js";import{S as t}from"./SpeedometerChart-Covj0CaR.js";import"./lodash-CJBAAX9X.js";import"./getPaddings-DLadn5mT.js";import"./useChartTheme-DIDp3-G3.js";import"./constants-CCkeIBqD.js";import"./palette-CcbSufZ2.js";import"./useTheme-77ICjQQS.js";import"./Typography-CwddtZBH.js";import"./config-ByFdgwor.js";import"./transform-BfyqfA4I.js";import"./throttle-BSKUDDXS.js";import"./debounce-CyCbfCwk.js";import"./toNumber-CcgC_4-M.js";import"./line-BPuaW5bH.js";import"./pie-CabiigDw.js";const de={title:"Charts/SpeedometerChart",component:t,decorators:[(e,{args:i})=>r.createElement("div",{style:{width:i.width,height:i.height}},r.createElement(e,null))],args:{height:180,width:180,value:5,segments:[0,2,4,6,8,10],labelDescription:"SomeDescription"},argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}}}},a=e=>r.createElement(t,{...e}),d={render:e=>r.createElement(t,{...e}),args:{height:300,width:300}},y={render:e=>r.createElement(t,{...e}),args:{height:800,width:800}},n=e=>r.createElement(t,{...e,labelDescription:void 0}),s=e=>r.createElement(t,{...e,labelDescription:"Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua"}),l=e=>{var i;return r.createElement(t,{...e,value:(((i=e.segments)==null?void 0:i.at(-1))||0)+10})},o=e=>r.createElement(t,{...e,value:(e.segments.at(0)||0)-10}),c=e=>r.createElement(t,{...e,showLabels:"hide"}),u=e=>r.createElement(t,{...e,showLabels:"bySegments"}),p=e=>r.createElement(t,{...e,value:40,segments:[0,15,85,100],showLabels:"bySegments"}),m=e=>r.createElement(t,{...e,value:40,segments:[0,40,100],showLabels:"bySegments"}),g=e=>r.createElement(t,{...e,value:4e3,segments:[0,100,1e3,2e3,1e4],showLabels:"bySegments"});a.__docgenInfo={description:"",methods:[],displayName:"Default",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"WithoutDescription",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"LongDescription",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"ValueGreaterMax",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ValueLessMin",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ShowLabelsHide",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"ShowLabelsBySegments",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"PercentageSegments",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"TwoSegments",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"OtherSegments",props:{padding:{required:!1,tsType:{name:"BlockProps"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},standalone:{required:!1,tsType:{name:"boolean"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,elements:[{name:"Partial",elements:[{name:"VictoryThemeDefinition"}],raw:"Partial<VictoryThemeDefinition>"},{name:"signature",type:"object",raw:`{
  line: { colorScale: string[], metricLineColor?: string },
  bar: { colorScale: string[] },
  chart: { colorScale: string[] },
  labels: { style?: VictoryLabelStyleObject },
  speedometer: {
    colorScale: string[],
    padding: BlockProps,
    style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
  }
}`,signature:{properties:[{key:"line",value:{name:"signature",type:"object",raw:"{ colorScale: string[], metricLineColor?: string }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"metricLineColor",value:{name:"string",required:!1}}]},required:!0}},{key:"bar",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"chart",value:{name:"signature",type:"object",raw:"{ colorScale: string[] }",signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}},{key:"labels",value:{name:"signature",type:"object",raw:"{ style?: VictoryLabelStyleObject }",signature:{properties:[{key:"style",value:{name:"VictoryLabelStyleObject",required:!1}}]},required:!0}},{key:"speedometer",value:{name:"signature",type:"object",raw:`{
  colorScale: string[],
  padding: BlockProps,
  style?: { tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},ticksGroup:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroup:{required:!1,tsType:{name:"number"},description:""},tickUnitLength:{required:!1,tsType:{name:"number"},description:""},ticksUnitInGroupLength:{required:!1,tsType:{name:"number"},description:""},segments:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},labelDescription:{required:!1,tsType:{name:"string"},description:""},showLabels:{required:!1,tsType:{name:"union",raw:"'always' | 'hide' | 'bySegments'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hide'"},{name:"literal",value:"'bySegments'"}]},description:""},showTotal:{required:!1,tsType:{name:"boolean"},description:""}}};var b,S,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <SpeedometerChart {...args} />",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,q,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: SpeedometerChartProps) => <SpeedometerChart {...args} />,
  args: {
    height: 300,
    width: 300
  }
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var h,v,T;y.parameters={...y.parameters,docs:{...(h=y.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: SpeedometerChartProps) => <SpeedometerChart {...args} />,
  args: {
    height: 800,
    width: 800
  }
}`,...(T=(v=y.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var L,P,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:"args => <SpeedometerChart {...args} labelDescription={undefined} />",...(j=(P=n.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,V,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:'args => <SpeedometerChart {...args} labelDescription="Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua" />',...(R=(V=s.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var A,D,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"args => <SpeedometerChart {...args} value={(args.segments?.at(-1) || 0) + 10} />",...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var O,G,I;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:"args => <SpeedometerChart {...args} value={(args.segments.at(0) || 0) - 10} />",...(I=(G=o.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var U,_,E;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:'args => <SpeedometerChart {...args} showLabels="hide" />',...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,x,M;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:'args => <SpeedometerChart {...args} showLabels="bySegments" />',...(M=(x=u.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var H,W,z;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:'args => <SpeedometerChart {...args} value={40} segments={[0, 15, 85, 100]} showLabels="bySegments" />',...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var F,J,K;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:'args => <SpeedometerChart {...args} value={40} segments={[0, 40, 100]} showLabels="bySegments" />',...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:'args => <SpeedometerChart {...args} value={4000} segments={[0, 100, 1000, 2000, 10000]} showLabels="bySegments" />',...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ye=["Default","Default300","Default800","WithoutDescription","LongDescription","ValueGreaterMax","ValueLessMin","ShowLabelsHide","ShowLabelsBySegments","PercentageSegments","TwoSegments","OtherSegments"];export{a as Default,d as Default300,y as Default800,s as LongDescription,g as OtherSegments,p as PercentageSegments,u as ShowLabelsBySegments,c as ShowLabelsHide,m as TwoSegments,l as ValueGreaterMax,o as ValueLessMin,n as WithoutDescription,ye as __namedExportsOrder,de as default};
