import{r as n,R as e}from"./index-B3FZByPw.js";import{P as l}from"./Popover-D3xfojl9.js";const s="_disablePointEvents_n7jl3_1",o={disablePointEvents:s},r=n.memo(({tooltipContentComponent:t,horizontal:i=!1,...a})=>e.createElement(l,{content:e.createElement(t,{...a}),placement:i?"right":"top",shouldLimitSize:!0,defaultVisible:!0,destroyTooltipOnHide:!0,overlayClassName:o.disablePointEvents},e.createElement("div",null)));r.displayName="ChartTooltip";r.__docgenInfo={description:"",methods:[],displayName:"ChartTooltip",props:{theme:{required:!1,tsType:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}]},description:""},tooltipContentComponent:{required:!0,tsType:{name:"FC"},description:""},activeRecord:{required:!1,tsType:{name:"unknown"},description:""},enrichedData:{required:!1,tsType:{name:"unknown"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},totalStacks:{required:!1,tsType:{name:"number"},description:""},otherLabel:{required:!1,tsType:{name:"string"},description:""}}};export{r as C};
