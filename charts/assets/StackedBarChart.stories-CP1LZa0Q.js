import{w as Or}from"./withMeta-FY6bIYTP.js";import{R as Q}from"./iframe-C54-I-iN.js";import{g as Yr}from"./data-bnNFmSzB.js";import{D as $r,a as Gr}from"./TextTruncateWithPopup-BlhaZ82M.js";import{g as Ur,a as Jr}from"./useChartTheme-BtoCm5ur.js";import{i as aa}from"./isChartDataPoint-CeoHD7To.js";import{S as Pr}from"./StackedBarChart-C0knf9Px.js";import{m as i,a as Vr,b as Fr,g as J,c as Z,s as Xr,d as Qr,y as Zr}from"./stackedBarChartStub-XpuGAVcu.js";import{u as Kr}from"./Link-B6aRyTdF.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-EMKpYj.js";import"./ChartTooltipContent-h7gd72Bx.js";import"./MetricLabel-CK4qoczM.js";import"./toString-CaMIQdMU.js";import"./lodash-TNMe4onG.js";import"./isObject-BMjquL3L.js";import"./FormLabel-SCvX2okj.js";import"./Popover-CRuxH5S3.js";import"./toInteger-DWltlFOm.js";import"./toNumber-BFWmeo_E.js";import"./Legend-Tpo_QXAT.js";import"./clsx-B-dksMZM.js";import"./generateId-d8nD6DCH.js";import"./getPaddings-DLadn5mT.js";import"./constants-CymJ51aP.js";import"./ChartTooltip-S5xgWCzw.js";import"./getCategoriesFromData-DqNPhb-_.js";import"./transform-DCyssGlG.js";import"./index-Chjiymov.js";import"./index-LUg1m9AG.js";function at(a){return typeof a=="object"&&a!==null&&"r"in a&&"g"in a&&"b"in a}function U(a){return parseInt(a,16)}function rt(a){return Math.round(U(a)/255*100)/100}function tt(a){if(!a)throw new Error("hex is required");var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=a.replace(t,function(p,g,m,u){return g+g+m+m+u+u}),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);if(!o)throw new Error("Invalid color provided. Expected color to match #rgb, #rgba, #rrggbb, or #rrggbbaa");var r=o,s=r[1],c=r[2],d=r[3],l=r[4],n={r:U(s),g:U(c),b:U(d)};return l!==void 0&&l!=="ff"&&(n.a=rt(l)),n}function et(a){if(!a)throw new Error("hsl is required");var t=/^hsla?\((\d{0,3})(,\s?|\s{1,})(\d{0,3})%(,\s?|\s{1,})(\d{0,3})%((,\s?|\s?\/\s?)((0?\.)?\d*))?\)$/i.exec(a);if(!t)throw new Error("Invalid color provided. Expected color to match hsl(h s l), hsl(h s l / a), hsl(h, s, l) or hsla(h, s, l, a)");var e=t[1],o=t[3],r=t[5],s=t[8],c=Number(e)/60,d=Number(r)/100,l=Number(o)/100,n=(1-Math.abs(2*d-1))*l,p=n*(1-Math.abs(c%2-1)),g=d-n/2,m=0,u=0,h=0;switch(!0){case c<1:m=n,u=p,h=0;break;case c<2:m=p,u=n,h=0;break;case c<3:m=0,u=n,h=p;break;case c<4:m=0,u=p,h=n;break;case c<5:m=p,u=0,h=n;break;case c<6:m=n,u=0,h=p;break}var S=Math.round((m+g)*255),V=Math.round((u+g)*255),jr=Math.round((h+g)*255),K={r:S,g:V,b:jr};return s!==void 0&&s!=="1"&&(K.a=Number(s)),K}function ot(a){if(!a)throw new Error("rgb is required");var t=/^rgba?\((\d{0,3})(,\s?|\s{1,})(\d{0,3})(,\s?|\s{1,})(\d{0,3})((,\s?|\s?\/\s?)((0?\.)?\d*))?\)$/i.exec(a);if(!t)throw new Error("Invalid color provided. Expected color to match rgb(r g b), rgb(r g b / a), rgb(r, g, b) or rgba(r, g, b, a)");var e=t[1],o=t[3],r=t[5],s=t[8],c={r:Number(e),g:Number(o),b:Number(r)};return s!==void 0&&s!=="1"&&(c.a=Number(s)),c}function ra(a){if(at(a))return a;try{return tt(a)}catch{}try{return ot(a)}catch{}try{return et(a)}catch{}throw new Error("Invalid color provided")}function qr(a){return"0".concat(Number(a).toString(16)).slice(-2)}function st(a){return qr(Math.round(Number(a)*255))}function nt(a){if(!a)throw new Error("rgbObject is required");var t=a.r,e=a.g,o=a.b,r=a.a,s=[t,e,o].map(qr).join("");return r!==void 0&&r!==1?"#".concat(s).concat(st(r)):"#".concat(s)}function X(a,t,e){var o=a*e,r=t*(1-e);return Math.round(o+r)}function ct(a,t,e){if(e===void 0&&(e=.5),!a)throw new Error("color1 is required");if(isNaN(e))throw new Error("Invalid ratio");e!==0&&!e&&(e=.5);var o=ra(a),r=ra(t);if(!o||!r)throw new Error("Invalid color provided");var s=o.r,c=o.g,d=o.b,l=o.a,n=l===void 0?1:l,p=r.r,g=r.g,m=r.b,u=r.a,h=u===void 0?1:u,S=e*(n/h),V={r:X(s,p,S),g:X(c,g,S),b:X(d,m,S)};return nt(V)}function ta(a,t){return ct(a,"fff",t)}function it(a){return!!a&&typeof a=="object"&&"name"in a&&"data"in a}function dt(a,t,e=.3){const o=new Map;return a.map(r=>{if(r.color)return r;const s=aa(r)?r.metric:r.name,c=aa(r)?void 0:r.group;let d=o.get(s);return d||(d=Ur(t.line.colorScale,o.size),o.set(s,d)),c==="previous"&&(d=ta(d,e),it(r)&&(r.data=r.data.map(n=>({...n,color:n.color?ta(n.color,e):void 0})))),{...r,color:d}})}const ut={designTokens:!1,unitTests:!1,screenshotTests:!1,storybook:!0,pixsoView:!0},mt="StackedBarChart",lt="Stacked bar chart — компонент для отображения составных значений по категориям. Каждая колонка (или строка, в зависимости от ориентации) состоит из нескольких сегментов, складывающихся в общее значение. Используется для демонстрации структуры данных внутри одной категории: например, долей, распределений или прогресса",pt="https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw?file_type=10&icon_type=1&page-id=2544%3A49895",ht="https://pixso.net/app/design/LaTmaWE_JObQIc6YZuYaWw?page-id=156%3A179472",gt={dod:ut,component:mt,usage:lt,designLink:pt,pixsoView:ht},Vt={title:"Charts/StackedBarChart",component:Pr,decorators:[(a,{args:t})=>Q.createElement("div",{style:{width:t.width,height:t.height}},Q.createElement(a,null))],args:{width:Gr,height:$r,horizontal:!1,showTooltip:!0,otherLabel:"someOtherLabel",totalLabel:"Total"},argTypes:{width:{control:{type:"range",min:100,max:1e3,step:10}},height:{control:{type:"range",min:100,max:1e3,step:10}},horizontal:{control:"boolean"},showTooltip:{control:"boolean"},stack100Precision:{control:"number"},yMin:{control:{type:"range",min:0,max:1e3,step:10}},yMax:{control:{type:"range",min:0,max:1e3,step:10}},otherLabel:{control:"text"},totalLabel:{control:"text"}},parameters:{docs:{page:Or(gt)}}},St=J.map(a=>({...a,data:a.data.slice(0,2)})),ft=i.map(a=>({...a,data:a.data.slice(0,2)})),kt=Yr(15),f={args:{data:Xr}},k={args:{data:i}},C={args:{data:Fr}},b={args:{data:Fr,horizontal:!0}},D={args:{data:i,xTickHide:!0}},T={args:{data:i,yTickHide:!0}},x={args:{data:kt}},w={args:{showTooltip:!1,data:i}},v={args:{data:Zr}},B={args:{data:ft}},H={args:{yMax:20,data:i}},z={args:{yMax:20,horizontal:!0,data:i}},y={args:{data:Qr}},M={args:{data:Z}},L={args:{horizontal:!0,data:i}},E={args:{height:200,horizontal:!0,data:i}},W={args:{width:200,data:i}},R={args:{width:200,data:Z}},A={args:{horizontal:!0,data:Z}},N={render:a=>{const t=Kr(),e=Jr(t),o=dt(i,e);return Q.createElement(Pr,{...a,data:o})}},I={args:{data:i,isStack100:!0}},_={args:{width:200,data:i,isStack100:!0}},G={args:{height:200,horizontal:!0,isStack100:!0,data:i}},P={args:{data:i,colors:["#ff0000"]}},F={args:{data:Vr}},q={args:{width:Gr*2,data:J}},j={args:{data:J}},O={args:{horizontal:!0,data:J}},Y={args:{data:St}},$={args:{data:[]}};var ea,oa,sa;f.parameters={...f.parameters,docs:{...(ea=f.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    data: singleStackedBarChartData
  }
}`,...(sa=(oa=f.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var na,ca,ia;k.parameters={...k.parameters,docs:{...(na=k.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData
  }
}`,...(ia=(ca=k.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var da,ua,ma;C.parameters={...C.parameters,docs:{...(da=C.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    data: multipleCornerRadiusStackedBarChartData
  }
}`,...(ma=(ua=C.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var la,pa,ha;b.parameters={...b.parameters,docs:{...(la=b.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    data: multipleCornerRadiusStackedBarChartData,
    horizontal: true
  }
}`,...(ha=(pa=b.parameters)==null?void 0:pa.docs)==null?void 0:ha.source}}};var ga,Sa,fa;D.parameters={...D.parameters,docs:{...(ga=D.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData,
    xTickHide: true
  }
}`,...(fa=(Sa=D.parameters)==null?void 0:Sa.docs)==null?void 0:fa.source}}};var ka,Ca,ba;T.parameters={...T.parameters,docs:{...(ka=T.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData,
    yTickHide: true
  }
}`,...(ba=(Ca=T.parameters)==null?void 0:Ca.docs)==null?void 0:ba.source}}};var Da,Ta,xa;x.parameters={...x.parameters,docs:{...(Da=x.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    data: exampleData
  }
}`,...(xa=(Ta=x.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var wa,va,Ba;w.parameters={...w.parameters,docs:{...(wa=w.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    showTooltip: false,
    data: multipleStackedBarChartData
  }
}`,...(Ba=(va=w.parameters)==null?void 0:va.docs)==null?void 0:Ba.source}}};var Ha,za,ya;v.parameters={...v.parameters,docs:{...(Ha=v.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    data: yLess1StackedBarChartData
  }
}`,...(ya=(za=v.parameters)==null?void 0:za.docs)==null?void 0:ya.source}}};var Ma,La,Ea;B.parameters={...B.parameters,docs:{...(Ma=B.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData2
  }
}`,...(Ea=(La=B.parameters)==null?void 0:La.docs)==null?void 0:Ea.source}}};var Wa,Ra,Aa;H.parameters={...H.parameters,docs:{...(Wa=H.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    yMax: 20,
    data: multipleStackedBarChartData
  }
}`,...(Aa=(Ra=H.parameters)==null?void 0:Ra.docs)==null?void 0:Aa.source}}};var Na,Ia,_a;z.parameters={...z.parameters,docs:{...(Na=z.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    yMax: 20,
    horizontal: true,
    data: multipleStackedBarChartData
  }
}`,...(_a=(Ia=z.parameters)==null?void 0:Ia.docs)==null?void 0:_a.source}}};var Ga,Pa,Fa;y.parameters={...y.parameters,docs:{...(Ga=y.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartDataWithShortText
  }
}`,...(Fa=(Pa=y.parameters)==null?void 0:Pa.docs)==null?void 0:Fa.source}}};var qa,ja,Oa;M.parameters={...M.parameters,docs:{...(qa=M.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartDataWithLongText
  }
}`,...(Oa=(ja=M.parameters)==null?void 0:ja.docs)==null?void 0:Oa.source}}};var Ya,$a,Ua;L.parameters={...L.parameters,docs:{...(Ya=L.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: multipleStackedBarChartData
  }
}`,...(Ua=($a=L.parameters)==null?void 0:$a.docs)==null?void 0:Ua.source}}};var Ja,Va,Xa;E.parameters={...E.parameters,docs:{...(Ja=E.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    height: 200,
    horizontal: true,
    data: multipleStackedBarChartData
  }
}`,...(Xa=(Va=E.parameters)==null?void 0:Va.docs)==null?void 0:Xa.source}}};var Qa,Za,Ka;W.parameters={...W.parameters,docs:{...(Qa=W.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  args: {
    width: 200,
    data: multipleStackedBarChartData
  }
}`,...(Ka=(Za=W.parameters)==null?void 0:Za.docs)==null?void 0:Ka.source}}};var ar,rr,tr;R.parameters={...R.parameters,docs:{...(ar=R.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    width: 200,
    data: multipleStackedBarChartDataWithLongText
  }
}`,...(tr=(rr=R.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var er,or,sr;A.parameters={...A.parameters,docs:{...(er=A.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: multipleStackedBarChartDataWithLongText
  }
}`,...(sr=(or=A.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var nr,cr,ir;N.parameters={...N.parameters,docs:{...(nr=N.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    const chartTheme = getChartTheme(theme);
    const data = defaultAddColorToData(multipleStackedBarChartData, chartTheme);
    return <StackedBarChart {...args} data={data} />;
  }
}`,...(ir=(cr=N.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,ur,mr;I.parameters={...I.parameters,docs:{...(dr=I.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData,
    isStack100: true
  }
}`,...(mr=(ur=I.parameters)==null?void 0:ur.docs)==null?void 0:mr.source}}};var lr,pr,hr;_.parameters={..._.parameters,docs:{...(lr=_.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    width: 200,
    data: multipleStackedBarChartData,
    isStack100: true
  }
}`,...(hr=(pr=_.parameters)==null?void 0:pr.docs)==null?void 0:hr.source}}};var gr,Sr,fr;G.parameters={...G.parameters,docs:{...(gr=G.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    height: 200,
    horizontal: true,
    isStack100: true,
    data: multipleStackedBarChartData
  }
}`,...(fr=(Sr=G.parameters)==null?void 0:Sr.docs)==null?void 0:fr.source}}};var kr,Cr,br;P.parameters={...P.parameters,docs:{...(kr=P.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    data: multipleStackedBarChartData,
    colors: ['#ff0000']
  }
}`,...(br=(Cr=P.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Dr,Tr,xr;F.parameters={...F.parameters,docs:{...(Dr=F.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    data: multipleStackedColorInDataBarChartData
  }
}`,...(xr=(Tr=F.parameters)==null?void 0:Tr.docs)==null?void 0:xr.source}}};var wr,vr,Br;q.parameters={...q.parameters,docs:{...(wr=q.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: groupStackedBarChartData
  }
}`,...(Br=(vr=q.parameters)==null?void 0:vr.docs)==null?void 0:Br.source}}};var Hr,zr,yr;j.parameters={...j.parameters,docs:{...(Hr=j.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    data: groupStackedBarChartData
  }
}`,...(yr=(zr=j.parameters)==null?void 0:zr.docs)==null?void 0:yr.source}}};var Mr,Lr,Er;O.parameters={...O.parameters,docs:{...(Mr=O.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    data: groupStackedBarChartData
  }
}`,...(Er=(Lr=O.parameters)==null?void 0:Lr.docs)==null?void 0:Er.source}}};var Wr,Rr,Ar;Y.parameters={...Y.parameters,docs:{...(Wr=Y.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    data: groupStackedBarChartData2
  }
}`,...(Ar=(Rr=Y.parameters)==null?void 0:Rr.docs)==null?void 0:Ar.source}}};var Nr,Ir,_r;$.parameters={...$.parameters,docs:{...(Nr=$.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(_r=(Ir=$.parameters)==null?void 0:Ir.docs)==null?void 0:_r.source}}};const Xt=["Single","Default","CornerRadius","CornerRadiusHorizontal","xTickHide","yTickHide","DataBigger10","WithoutTooltip","YLess1","Default2","MinMax","MinMaxHorizontal","WithShortText","WithLongText","Horizontal","HorizontalScroll","Scroll","ScrollWithLongText","HorizontalWithLongText","ColorFromTheme","Stack100","Stack100Scroll","Stack100HorizontalScroll","Color","ColorInData","Group","GroupScroll","GroupHorizontalScroll","Group2","Empty"];export{P as Color,N as ColorFromTheme,F as ColorInData,C as CornerRadius,b as CornerRadiusHorizontal,x as DataBigger10,k as Default,B as Default2,$ as Empty,q as Group,Y as Group2,O as GroupHorizontalScroll,j as GroupScroll,L as Horizontal,E as HorizontalScroll,A as HorizontalWithLongText,H as MinMax,z as MinMaxHorizontal,W as Scroll,R as ScrollWithLongText,f as Single,I as Stack100,G as Stack100HorizontalScroll,_ as Stack100Scroll,M as WithLongText,y as WithShortText,w as WithoutTooltip,v as YLess1,Xt as __namedExportsOrder,Vt as default,D as xTickHide,T as yTickHide};
