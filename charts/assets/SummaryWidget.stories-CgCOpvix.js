import{w as P}from"./withMeta-FY6bIYTP.js";import{l as b}from"./legendItemsStub-BC2KppLC.js";import{R as e}from"./iframe-C54-I-iN.js";import{L as h}from"./LineChart-4bG8qsTp.js";import{P as S}from"./PieChart-DfCmv4ZS.js";import{L as f}from"./Legend-Tpo_QXAT.js";import{H as o,L as s}from"./Link-B6aRyTdF.js";import{a as t}from"./index-C-EMKpYj.js";import"./preload-helper-C1FmrZbK.js";import"./TextTruncateWithPopup-BlhaZ82M.js";import"./clsx-B-dksMZM.js";import"./getPaddings-DLadn5mT.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./v4-CcQs6ztn.js";import"./pie-5migKnfG.js";import"./line-Cv5G64lG.js";import"./throttle-ZeV-RQBx.js";import"./debounce-Rb0A5Rg5.js";import"./ChartTooltip-S5xgWCzw.js";import"./generateId-d8nD6DCH.js";import"./index-LUg1m9AG.js";const T={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!1,pixsoView:!1},D="Widget",w="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?item-id=2545%3A37779",q="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?item-id=156%3A55900",L={dod:T,component:D,designLink:w,pixsoView:q},I="_simpleWidgetPieLine_bdtbm_1",E="_widgetCols_bdtbm_10",x="_simpleWidgetPieLineCol_bdtbm_16",n={simpleWidgetPieLine:I,widgetCols:E,simpleWidgetPieLineCol:x},j={lineWidth:2,pointSize:0,xMin:10,xMax:50,yMin:0,yMax:0,gradient:!0,height:180},R={width:180,height:180,showTotal:!0,innerRadius:.1},p=({pieChartProps:y,pieWidgetLink:i,lineWidgetLink:l,lineChartProps:g,legendProps:k,titlePie:v,titleLine:C})=>e.createElement("div",{className:n.simpleWidgetPieLine},e.createElement("div",{className:n.simpleWidgetPieLineCol},e.createElement(o,null,v),i?e.createElement(s,{onClick:i.clickHandler},i.text):null,e.createElement("div",{className:n.widgetCols},e.createElement(S,{...R,...y}),e.createElement(f,{...k}))),e.createElement("div",{className:n.simpleWidgetPieLineCol},e.createElement(o,null,C),l?e.createElement(s,{onClick:l.clickHandler},l.text):null,e.createElement("div",{style:{height:180}},e.createElement(h,{...j,...g}))));p.__docgenInfo={description:"",methods:[],displayName:"SummaryWidget",props:{titlePie:{required:!0,tsType:{name:"string"},description:""},titleLine:{required:!0,tsType:{name:"string"},description:""},lineChartProps:{required:!0,tsType:{name:"intersection",raw:`BaseChartProps &
Pick<
  ChartTooltipWrapperProps,
  'tooltipComponent' | 'lineComponent' | 'tooltipContentComponent' | 'metricLineWidth' | 'tooltipDateFormat'
> & {
  data: IStackedChartData<T>
  xMin?: number
  xMax?: number
  yMin?: number
  yMax?: number
  totalLabel?: string
  showTotal?: boolean
  lineWidth?: number
  pointSize?: number
  xScale?: ScaleName
  yScale?: ScaleName
  chartAfter?: ReactElement | ReactElement[]
  minTickLabelYLength?: number
  yFixLabelOverlap?: boolean
  xTickFormat?: (tick: any, index: number, ticks: any[], supposedFormat?: string) => string
  yTickFormat?: (tick: any, index: number, ticks: any[]) => string
  yTickCount?: number
  xTickHide?: boolean
  yTickHide?: boolean
  showTooltip?: boolean
  gradient?: boolean
  maxLinesForGradient?: number
  domain?: DomainPropType
  otherLabel?: string
  tickLetterSize?: number
  onClickData?: TChartEventCallback<T>
  onHoverData?: TChartEventCallback<T>
  onLeaveData?: TChartEventCallback<T>
  onMoveData?: TChartEventCallback<T>
}`,elements:[{name:"BaseChartProps"},{name:"Pick",elements:[{name:"intersection",raw:`VictoryTooltipProps & {
  theme?: CustomTheme,
  metricLineWidth?: number,
  tooltipComponent?: FC<ChartTooltipProps>,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  padding?: BlockProps,
  xScale?: ScaleName,
  yScale?: ScaleName,
  totalLabel?: string,
  showTotal?: boolean,
  otherLabel?: string,
  onClick?: TChartEventCallback<T>,
  tooltipDateFormat?: (date: number | Date) => string
}`,elements:[{name:"VictoryTooltipProps"},{name:"signature",type:"object",raw:`{
  theme?: CustomTheme,
  metricLineWidth?: number,
  tooltipComponent?: FC<ChartTooltipProps>,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  padding?: BlockProps,
  xScale?: ScaleName,
  yScale?: ScaleName,
  totalLabel?: string,
  showTotal?: boolean,
  otherLabel?: string,
  onClick?: TChartEventCallback<T>,
  tooltipDateFormat?: (date: number | Date) => string
}`,signature:{properties:[{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"metricLineWidth",value:{name:"number",required:!1}},{key:"tooltipComponent",value:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  theme?: CustomTheme,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  top?: number,
  left?: number,
  x?: number,
  y?: number,
  height?: number,
  width?: number,
  totalLabel?: string,
  showTotal?: boolean,
  metricLineWidth?: number,
  activeRecord: IChartDataPoint<T>,
  enrichedData?: StackedChartTooltipPointsData<T>,
  data?: IStackedChartData<T>,
  padding?: BlockProps,
  xScale?: ScaleName,
  otherLabel?: string,
  tooltipDateFormat?: (date: number | Date) => string,
  onClick?: TChartEventCallback<T>
}`,signature:{properties:[{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"lineComponent",value:{name:"FC",elements:[{name:"MetricLineProps"}],raw:"FC<MetricLineProps>",required:!1}},{key:"tooltipContentComponent",value:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  activeRecord?: IChartDataPoint,
  enrichedData?: StackedChartTooltipPointsData,
  theme?: CustomTheme,
  otherLabel?: string,
  xScale?: ScaleName,
  maxTooltipItems?: number,
  totalLabel?: string,
  showTotal?: boolean,
  tooltipDateFormat?: (date: number | Date, supposedFormat: string) => string
}`,signature:{properties:[{key:"activeRecord",value:{name:"IChartDataPoint",required:!1}},{key:"enrichedData",value:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`,required:!1}},{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"maxTooltipItems",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date, supposedFormat: string) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}},required:!1}}]}}],raw:"FC<ChartTooltipContentProps>",required:!1}},{key:"top",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"x",value:{name:"number",required:!1}},{key:"y",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"metricLineWidth",value:{name:"number",required:!1}},{key:"activeRecord",value:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>",required:!0}},{key:"enrichedData",value:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`,required:!1}},{key:"data",value:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"}],return:{name:"string"}},required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}}]}}],raw:"FC<ChartTooltipProps>",required:!1}},{key:"lineComponent",value:{name:"FC",elements:[{name:"MetricLineProps"}],raw:"FC<MetricLineProps>",required:!1}},{key:"tooltipContentComponent",value:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  activeRecord?: IChartDataPoint,
  enrichedData?: StackedChartTooltipPointsData,
  theme?: CustomTheme,
  otherLabel?: string,
  xScale?: ScaleName,
  maxTooltipItems?: number,
  totalLabel?: string,
  showTotal?: boolean,
  tooltipDateFormat?: (date: number | Date, supposedFormat: string) => string
}`,signature:{properties:[{key:"activeRecord",value:{name:"IChartDataPoint",required:!1}},{key:"enrichedData",value:{name:"Array",elements:[{name:"unknown"}],raw:`(Pick<
  IStackedChartDataPoint,
  'name' | 'color' | 'title' | 'group'
> &
  IChartDataPoint<T> & { childName?: string })[]`,required:!1}},{key:"theme",value:{name:"intersection",raw:`Partial<VictoryThemeDefinition> & {
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
}`,signature:{properties:[{key:"colorScale",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"padding",value:{name:"BlockProps",required:!0}},{key:"style",value:{name:"signature",type:"object",raw:"{ tick: { fill?: string }, tickLabel?: React.CSSProperties, pointer?: { fill?: string } }",signature:{properties:[{key:"tick",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}},{key:"tickLabel",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"pointer",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!1}}]},required:!1}}]},required:!0}}]}}],required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"maxTooltipItems",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date, supposedFormat: string) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}},required:!1}}]}}],raw:"FC<ChartTooltipContentProps>",required:!1}},{key:"padding",value:{name:"BlockProps",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"yScale",value:{name:"ScaleName",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"tooltipDateFormat",value:{name:"signature",type:"function",raw:"(date: number | Date) => string",signature:{arguments:[{type:{name:"union",raw:"number | Date",elements:[{name:"number"},{name:"Date"}]},name:"date"}],return:{name:"string"}},required:!1}}]}}]},{name:"union",raw:"'tooltipComponent' | 'lineComponent' | 'tooltipContentComponent' | 'metricLineWidth' | 'tooltipDateFormat'",elements:[{name:"literal",value:"'tooltipComponent'"},{name:"literal",value:"'lineComponent'"},{name:"literal",value:"'tooltipContentComponent'"},{name:"literal",value:"'metricLineWidth'"},{name:"literal",value:"'tooltipDateFormat'"}]}],raw:`Pick<
  ChartTooltipWrapperProps,
  'tooltipComponent' | 'lineComponent' | 'tooltipContentComponent' | 'metricLineWidth' | 'tooltipDateFormat'
>`},{name:"signature",type:"object",raw:`{
  data: IStackedChartData<T>
  xMin?: number
  xMax?: number
  yMin?: number
  yMax?: number
  totalLabel?: string
  showTotal?: boolean
  lineWidth?: number
  pointSize?: number
  xScale?: ScaleName
  yScale?: ScaleName
  chartAfter?: ReactElement | ReactElement[]
  minTickLabelYLength?: number
  yFixLabelOverlap?: boolean
  xTickFormat?: (tick: any, index: number, ticks: any[], supposedFormat?: string) => string
  yTickFormat?: (tick: any, index: number, ticks: any[]) => string
  yTickCount?: number
  xTickHide?: boolean
  yTickHide?: boolean
  showTooltip?: boolean
  gradient?: boolean
  maxLinesForGradient?: number
  domain?: DomainPropType
  otherLabel?: string
  tickLetterSize?: number
  onClickData?: TChartEventCallback<T>
  onHoverData?: TChartEventCallback<T>
  onLeaveData?: TChartEventCallback<T>
  onMoveData?: TChartEventCallback<T>
}`,signature:{properties:[{key:"data",value:{name:"Array",elements:[{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"}],raw:"IStackedChartDataPoint<T>[]",required:!0}},{key:"xMin",value:{name:"number",required:!1}},{key:"xMax",value:{name:"number",required:!1}},{key:"yMin",value:{name:"number",required:!1}},{key:"yMax",value:{name:"number",required:!1}},{key:"totalLabel",value:{name:"string",required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"lineWidth",value:{name:"number",required:!1}},{key:"pointSize",value:{name:"number",required:!1}},{key:"xScale",value:{name:"ScaleName",required:!1}},{key:"yScale",value:{name:"ScaleName",required:!1}},{key:"chartAfter",value:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}],required:!1}},{key:"minTickLabelYLength",value:{name:"number",required:!1}},{key:"yFixLabelOverlap",value:{name:"boolean",required:!1}},{key:"xTickFormat",value:{name:"signature",type:"function",raw:"(tick: any, index: number, ticks: any[], supposedFormat?: string) => string",signature:{arguments:[{type:{name:"any"},name:"tick"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"ticks"},{type:{name:"string"},name:"supposedFormat"}],return:{name:"string"}},required:!1}},{key:"yTickFormat",value:{name:"signature",type:"function",raw:"(tick: any, index: number, ticks: any[]) => string",signature:{arguments:[{type:{name:"any"},name:"tick"},{type:{name:"number"},name:"index"},{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"ticks"}],return:{name:"string"}},required:!1}},{key:"yTickCount",value:{name:"number",required:!1}},{key:"xTickHide",value:{name:"boolean",required:!1}},{key:"yTickHide",value:{name:"boolean",required:!1}},{key:"showTooltip",value:{name:"boolean",required:!1}},{key:"gradient",value:{name:"boolean",required:!1}},{key:"maxLinesForGradient",value:{name:"number",required:!1}},{key:"domain",value:{name:"DomainPropType",required:!1}},{key:"otherLabel",value:{name:"string",required:!1}},{key:"tickLetterSize",value:{name:"number",required:!1}},{key:"onClickData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onHoverData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onLeaveData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onMoveData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"LC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"LC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"LC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}}]}}]},description:""},pieChartProps:{required:!0,tsType:{name:"intersection",raw:`BaseChartProps & {
  data: IChartDataPoint<T>[];
  size?: PieChartSize;
  showTotal?: boolean;
  showTooltip?: boolean;
  innerRadiusRatio?: number;
  padAngle?: number;
  description?: string;
  standalone?: boolean;
  onClickData?: TChartEventCallback<T>;
  onHoverData?: TChartEventCallback<T>;
  onLeaveData?: TChartEventCallback<T>;
  onMoveData?: TChartEventCallback<T>;
}`,elements:[{name:"BaseChartProps"},{name:"signature",type:"object",raw:`{
  data: IChartDataPoint<T>[];
  size?: PieChartSize;
  showTotal?: boolean;
  showTooltip?: boolean;
  innerRadiusRatio?: number;
  padAngle?: number;
  description?: string;
  standalone?: boolean;
  onClickData?: TChartEventCallback<T>;
  onHoverData?: TChartEventCallback<T>;
  onLeaveData?: TChartEventCallback<T>;
  onMoveData?: TChartEventCallback<T>;
}`,signature:{properties:[{key:"data",value:{name:"Array",elements:[{name:"IChartDataPoint",elements:[{name:"PC"}],raw:"IChartDataPoint<T>"}],raw:"IChartDataPoint<T>[]",required:!0}},{key:"size",value:{name:"union",raw:"keyof typeof PIE_CHART_SIZE_CONFIG",elements:[{name:"literal",value:"large"},{name:"literal",value:"medium"},{name:"literal",value:"small"}],required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}},{key:"showTooltip",value:{name:"boolean",required:!1}},{key:"innerRadiusRatio",value:{name:"number",required:!1}},{key:"padAngle",value:{name:"number",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"standalone",value:{name:"boolean",required:!1}},{key:"onClickData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"PC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"PC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"PC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onHoverData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"PC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"PC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"PC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onLeaveData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"PC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"PC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"PC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}},{key:"onMoveData",value:{name:"signature",type:"function",raw:`(
  eventParams: IEventParams<T>,
  selectedDataPoint: IChartDataPoint<T>,
  selectedStackDataPoint?: IStackedChartDataPoint<T>
) => void`,signature:{arguments:[{type:{name:"IEventParams",elements:[{name:"PC"}],raw:"IEventParams<T>"},name:"eventParams"},{type:{name:"IChartDataPoint",elements:[{name:"PC"}],raw:"IChartDataPoint<T>"},name:"selectedDataPoint"},{type:{name:"IStackedChartDataPoint",elements:[{name:"PC"}],raw:"IStackedChartDataPoint<T>"},name:"selectedStackDataPoint"}],return:{name:"void"}},required:!1}}]}}]},description:""},legendProps:{required:!0,tsType:{name:"ILegendProps",elements:[{name:"L"}],raw:"ILegendProps<L>"},description:""},pieWidgetLink:{required:!1,tsType:{name:"signature",type:"object",raw:"{ clickHandler?: React.MouseEventHandler<HTMLAnchorElement>, text: string }",signature:{properties:[{key:"clickHandler",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}],required:!1}},{key:"text",value:{name:"string",required:!0}}]}},description:""},lineWidgetLink:{required:!1,tsType:{name:"signature",type:"object",raw:"{ clickHandler?: React.MouseEventHandler<HTMLAnchorElement>, text: string }",signature:{properties:[{key:"clickHandler",value:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}],required:!1}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const F=[{name:"one",color:"var(--color-grass500)",data:[{value:450,metric:10},{value:520,metric:20},{value:380,metric:30},{value:2400,metric:40},{value:330,metric:50}]}],a=new Date;a.valueOf(),t(a,{days:1}).valueOf(),t(a,{days:2}).valueOf(),t(a,{days:3}).valueOf(),t(a,{days:4}).valueOf(),a.valueOf(),t(a,{days:1}).valueOf(),t(a,{days:2}).valueOf(),t(a,{days:3}).valueOf(),t(a,{days:4}).valueOf();const M=[{metric:"first",value:44,originalPayload:["first",44],clickHandler:()=>console.log("first")},{metric:"second",value:55,originalPayload:["second",55],clickHandler:()=>console.log("second")},{metric:"third",value:13,originalPayload:["third",13],clickHandler:()=>console.log("third")},{metric:"fourth",value:33,originalPayload:["fourth",33]}],{action:m}=__STORYBOOK_MODULE_ACTIONS__,ye={title:"Widget/SummaryWidget",component:p,args:{titlePie:"Protection status of devices",titleLine:"Detection of threats durning last 7 days",pieWidgetLink:{clickHandler:()=>console.log("click"),text:"View the list of devices"},lineWidgetLink:{clickHandler:()=>console.log("click threats"),text:"View the list of threats"},pieChartProps:{data:M,onClickData:m("onPieChartClick")},lineChartProps:{data:F,onClickData:m("onLineChartClick")},legendProps:{items:b}},parameters:{docs:{page:P(L)}}},r={};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ge=["Default"];export{r as Default,ge as __namedExportsOrder,ye as default};
