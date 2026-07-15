import{w as Pa}from"./withMeta-FY6bIYTP.js";import{s as Ra,a as r,g as _,o as C,b as L,c as xa,d as Ia,e as Oa,f as Ma,T as Ea,h as Fa}from"./timelineBarChartStub-JH_N-CM9.js";import{R as o}from"./iframe-C54-I-iN.js";import{a as za}from"./data-bnNFmSzB.js";import{D as Ua,a as e}from"./TextTruncateWithPopup-BlhaZ82M.js";import{L as Ya}from"./LocalizationProvider-XmtfnBij.js";import{B as Xa}from"./helpers-BOPFFCdb.js";import"./Link-B6aRyTdF.js";import"./index-LUg1m9AG.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./useChartTheme-BtoCm5ur.js";import"./lodash-TNMe4onG.js";import"./toString-CaMIQdMU.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./Legend-Tpo_QXAT.js";import"./clsx-B-dksMZM.js";import"./generateId-d8nD6DCH.js";import"./getPaddings-DLadn5mT.js";import"./constants-CymJ51aP.js";import"./ChartTooltip-S5xgWCzw.js";import"./index-C-EMKpYj.js";import"./preload-helper-C1FmrZbK.js";const Ga={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!1},Na="TimelineBarChart",Za=`Поддержка нескольких серий и групп. Например: если у компонента одинаковое время/дата, то они рисуются 'в стопку' друг над другом в одной колонке времени. 

 Если у серии разные 'group', компонент сначала делит серии по группам и каждую группу рисует как отдельный набор(стопку) на графике`,ja=`TimelineBarChart - столбиковый time-series график. 

 - Ось X: время/дата (metric) 

 - Ось Y: числовая метрика (value). 

Используется для распределения событий по времени.`,qa={dod:Ga,component:Na,description:Za,usage:ja},{action:B}=__STORYBOOK_MODULE_ACTIONS__,Ka=Object.keys(Xa),Le={title:"Charts/TimelineBarChart",component:Ea,decorators:[(t,{args:a})=>o.createElement("div",{style:{width:a.width,height:a.height}},o.createElement(Ya,{locale:a.locale},o.createElement(t,{...a})))],args:{width:e,height:Ua,horizontal:!1,locale:"en",yScale:"linear",padding:{bottom:100},timeScaleInterval:Fa(24),showTooltip:!0,otherLabel:"someOtherLabel",onClickData:B("onClickData"),onHoverData:B("onHoverData"),totalLabel:"Total",showTotal:!0,xTickHide:!1,yTickHide:!1},argTypes:{data:{description:"Данные графика: массив серий с полями name/group/color и data[{ metric, value }].",table:{category:"Data"}},domain:{description:"Явный диапазон оси X (времени): [startDate, endDate].",table:{category:"Data"}},timeScaleInterval:{description:"Шаг времени (мс) для вычисления ширины бара.",table:{category:"Data"}},isStack100:{description:"Режим 100%, каждая колонка разбивается на проценты, значения показываются как вклад серии в общую сумму",table:{category:"Data"},type:"boolean"},width:{control:{type:"range",min:100,max:1400,step:10},description:"Ширина графика.",table:{category:"Layout"}},height:{control:{type:"range",min:100,max:1e3,step:10},description:"Высота графика.",table:{category:"Layout"}},size:{control:"select",options:Ka,description:"Фиксированный размер скруглений TimelineBar. Ширина бара остаётся адаптивной; если size не задан, radius выбирается по фактической ширине бара.",table:{category:"Layout"}},padding:{description:"Внутренние отступы графика.",table:{category:"Layout"}},horizontal:{description:"Горизонтальная ориентация графика.",table:{category:"Layout"}},standalone:{description:"True: рендерит только содержимое графика для встраивания в уже существующий svg, false: рендерит самостоятельный svg",table:{category:"Layout"},type:"boolean"},yScale:{control:"radio",options:["linear","sqrt","log"],description:"Тип шкалы Y",table:{category:"Scale"},type:"string"},yMin:{description:"Нижняя граница оси Y.",table:{category:"Scale"},type:"number"},yMax:{description:"Верхняя граница оси Y.",table:{category:"Scale"},type:"number"},showTooltip:{description:"Включить tooltip при hover по бару.",table:{category:"Tooltip"}},tooltipDateFormat:{description:"Кастомный форматтер даты в tooltip.",table:{category:"Tooltip"}},showTotal:{description:"Показать суммарное значение в tooltip.",table:{category:"Tooltip"}},totalLabel:{description:"Подпись строки суммы в tooltip.",table:{category:"Tooltip"}},maxTooltipItems:{description:"Максимум элементов в tooltip до агрегации в other.",table:{category:"Tooltip"},type:"number"},otherLabel:{description:"Подпись для агрегированного “прочее” в tooltip.",table:{category:"Tooltip"}},xTickFormat:{description:"Кастомный форматтер подписей оси X.",table:{category:"Axis"}},yTickFormat:{description:"Кастомный форматтер подписей оси Y.",table:{category:"Axis"}},xTickHide:{description:"Скрыть подписи оси X.",table:{category:"Axis"}},yTickHide:{description:"Скрыть подписи оси Y.",table:{category:"Axis"}},minTickLabelXLength:{description:"Ограничение длины подписи тика оси X.",table:{category:"Axis"},type:"number"},minTickLabelYLength:{description:"Ограничение длины подписи тика оси Y.",table:{category:"Axis"},type:"number"},onClickData:{description:"Событие клика по бару.",table:{category:"Events"}},onHoverData:{description:"Событие наведения на бар.",table:{category:"Events"}},onMoveData:{description:"Событие движения мыши по бару.",table:{category:"Events"}},onLeaveData:{description:"Событие ухода курсора с бара.",table:{category:"Events"}},locale:{control:"radio",options:["en","ru"],description:"Локаль для автоформатирования дат.",table:{category:"Localization"}}},parameters:{docs:{page:Pa(qa)}}},i={args:{data:r,domain:Ra}},Va=za(15),s={args:{data:Va}},n={args:{showTooltip:!1,data:r}},c={args:{data:xa,yMin:2,yMax:10}},d={args:{width:e*2,data:xa}},l={args:{width:e*3,data:r}},p={args:{data:L,domain:C},render:t=>o.createElement("div",{style:{display:"grid",gap:24}},[e*3,e*2,e].map(a=>o.createElement("div",{key:a,style:{width:a,height:t.height}},o.createElement(Ea,{...t,width:a}))))},m={args:{width:e*2,data:L,domain:C}},g={args:{width:e*2,horizontal:!0,data:L,domain:C}},u={args:{width:e*3,data:L,domain:C,tooltipDateFormat:t=>t.toLocaleString()+"TZ",xTickFormat:(t,a,Ja,fa)=>String(fa)}},h={args:{data:Ma}},T={args:{horizontal:!0,data:r}},D={args:{locale:"ru",data:r}},y={args:{data:_}},k={args:{data:r,xTickHide:!0}},S={args:{data:r,yTickHide:!0}},b={name:"Stack 100% mode",args:{isStack100:!0,data:_}},H={args:{yScale:"log",data:_}},W={args:{data:Oa,domain:Ia,timeScaleInterval:Fa(1)}};var A,w,v;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: singleStackedBarChartData,
    domain: singleStackedBarChartDomain
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,E,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: generatedData
  }
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var f,P,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showTooltip: false,
    data: singleStackedBarChartData
  }
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var I,O,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: singleStackedBarChartDataOne,
    yMin: 2,
    yMax: 10
  }
}`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var z,U,Y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: singleStackedBarChartDataOne
  }
}`,...(Y=(U=d.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,G,N;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 3,
    data: singleStackedBarChartData
  }
}`,...(N=(G=l.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Z,j,q;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  },
  render: args => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {[DEFAULT_CHART_WIDTH * 3, DEFAULT_CHART_WIDTH * 2, DEFAULT_CHART_WIDTH].map(width => <div key={width} style={{
      width,
      height: args.height
    }}>
          <TimelineBarChart {...args} width={width} />
        </div>)}
    </div>
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var K,V,J;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  }
}`,...(J=(V=m.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,$,aa;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    horizontal: true,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  }
}`,...(aa=($=g.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,ta,ra;u.parameters={...u.parameters,docs:{...(ea=u.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 3,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain,
    tooltipDateFormat: (date: number | Date) => {
      return date.toLocaleString() + 'TZ';
    },
    xTickFormat: (arg1, arg2, arg3, supposedFormat) => {
      return String(supposedFormat);
    }
  }
}`,...(ra=(ta=u.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var oa,ia,sa;h.parameters={...h.parameters,docs:{...(oa=h.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    data: oneWeekPeriodStackedData
  }
}`,...(sa=(ia=h.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var na,ca,da;T.parameters={...T.parameters,docs:{...(na=T.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: singleStackedBarChartData
  }
}`,...(da=(ca=T.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var la,pa,ma;D.parameters={...D.parameters,docs:{...(la=D.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    locale: 'ru',
    data: singleStackedBarChartData
  }
}`,...(ma=(pa=D.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ga,ua,ha;y.parameters={...y.parameters,docs:{...(ga=y.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    data: groupStackedBarChartData
  }
}`,...(ha=(ua=y.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var Ta,Da,ya;k.parameters={...k.parameters,docs:{...(Ta=k.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    data: singleStackedBarChartData,
    xTickHide: true
  }
}`,...(ya=(Da=k.parameters)==null?void 0:Da.docs)==null?void 0:ya.source}}};var ka,Sa,ba;S.parameters={...S.parameters,docs:{...(ka=S.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    data: singleStackedBarChartData,
    yTickHide: true
  }
}`,...(ba=(Sa=S.parameters)==null?void 0:Sa.docs)==null?void 0:ba.source}}};var Ha,Wa,Ca;b.parameters={...b.parameters,docs:{...(Ha=b.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  name: 'Stack 100% mode',
  args: {
    isStack100: true,
    data: groupStackedBarChartData
  }
}`,...(Ca=(Wa=b.parameters)==null?void 0:Wa.docs)==null?void 0:Ca.source}}};var La,_a,Ba;H.parameters={...H.parameters,docs:{...(La=H.parameters)==null?void 0:La.docs,source:{originalSource:`{
  args: {
    yScale: 'log',
    data: groupStackedBarChartData
  }
}`,...(Ba=(_a=H.parameters)==null?void 0:_a.docs)==null?void 0:Ba.source}}};var Aa,wa,va;W.parameters={...W.parameters,docs:{...(Aa=W.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    data: singlePointData,
    domain: singlePointDomain,
    timeScaleInterval: hoursToMilliseconds(1)
  }
}`,...(va=(wa=W.parameters)==null?void 0:wa.docs)==null?void 0:va.source}}};const _e=["Default","DataBigger10","WithoitTooltip","MinMaxYDomain","WidthX2","WidthX3","RadiusBreakpoints","OneWeekWithTooltip","HorizontalOneWeekWithTooltip","WithTooltipDateFormat","StackedOneWeekWithTooltip","Horizontal","i18nRu","Group","xTickHide","yTickHide","Stack100","ScaleLog","SinglePointNarrowDomain"];export{s as DataBigger10,i as Default,y as Group,T as Horizontal,g as HorizontalOneWeekWithTooltip,c as MinMaxYDomain,m as OneWeekWithTooltip,p as RadiusBreakpoints,H as ScaleLog,W as SinglePointNarrowDomain,b as Stack100,h as StackedOneWeekWithTooltip,d as WidthX2,l as WidthX3,u as WithTooltipDateFormat,n as WithoitTooltip,_e as __namedExportsOrder,Le as default,D as i18nRu,k as xTickHide,S as yTickHide};
