import{D as s,C as i,j as ee}from"./CodeViewer-BA7SF8HH.js";import{T as te}from"./Palette-DypzKIWI.js";import{v as re}from"./typesHelpers-tpz7Of7L.js";import{b as f,R as r,c as ae,r as Q,z as K,H as ne}from"./iframe-DijVn6lr.js";import{w as oe}from"./withMeta-Cvuu-gnO.js";import{s as ie}from"./helpers-BytZKRkB.js";import{S as Z}from"./StoryComponents-DmWAqy50.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./index-Chjiymov.js";import"./ResizeInput-Dyuwuz2a.js";import"./StatusDangerSolid1-BoAfxRDS.js";import"./StatusWarningSolid-BjUfrWFZ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-CCWRtDLv.js";import"./StatusOkOutline-rTkgZuSC.js";import"./Divider-D-bCk8Cb.js";import"./FormLabel-671wf7jJ.js";import"./Markdown-DOYaVGrQ.js";import"./Tag-UgBikWKe.js";import"./TextReducer-BIfgSXBQ.js";import"./StatusDangerSolid1-BFRjkrKA.js";import"./Group-CAP3cdvx.js";import"./index-tjmVxM9w.js";import"./type-DN7uEUoT.js";import"./colors-CLXBBt7C.js";import"./wave-B_Kd_ldv.js";import"./Popover-CTNslkPb.js";const se={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},le="Code viewer",ce='Компонент Code viewer используется в сценариях, когда нужно работать с кодом и функциями. Редактор построен на CodeMirror 6: все пакеты @codemirror/* в приложении-потребителе должны резолвиться в одну физическую копию, иначе возможен runtime-crash (в том числе при language="json"). В @kaspersky/hexa-ui версии @codemirror зафиксированы через overrides и прямые зависимости. Если в проекте есть собственные @codemirror, настройте дедупликацию: Vite — resolve.dedupe для @codemirror/state, @codemirror/view, @codemirror/language, @codemirror/lint, @codemirror/autocomplete и @codemirror/commands; Webpack — resolve.alias на единственный экземпляр этих пакетов; npm/yarn — overrides с версиями из package.json hexa-ui (@codemirror/state 6.5.0, @codemirror/view 6.36.1 и др.). Проверка: npm ls @codemirror/state — должна быть одна версия без вложенных дубликатов.',me="Нотации и языки по умолчанию: HTML, JSON, XML, JavaScript, JSX, TypeScript, TSX.",ue="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=53702%3A194802",pe="https://pixso.net/app/design/v67aCRl5t--3QSa2Az8TaQ",S={dod:se,component:le,description:ce,usage:me,designLink:ue,pixsoView:pe},q='console.log("Hello, World!")',de=`<html>
  <head>
    <title>Href Attribute Example</title>
  </head>
  <body>
    <h1>Href Attribute Example</h1>
    <p>
      <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
    </p>
  </body>
</html>
`,y=`{
  "widget": {
    "debug": "on",
    "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
}`,ge=`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatpoint.hello"
    android:versionCode="1"
    android:versionName="1.0" >

    <uses-sdk
        android:minSdkVersion="8"
        android:targetSdkVersion="15" />

    <application
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".MainActivity"
            android:label="@string/title_activity_main" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
`,he=`import React, { FC, useState } from "react";

interface Props {
  title: string;
  initialCount: number;
}

const FunctionalCounter: FC<Props> = ({ title, initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const add = (factor = 1) => {
    setCount(count + factor);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => add(-1)}>-</button>
    </div>
  );
};

export default FunctionalCounter;
`,Ce=`rule ExampleRule
{
    strings:  // this is comment
        $my_text_string = "text here"
        $my_hex_string = { E2 34 A1 C8 23 FB }

    condition:
        $my_text_string or $my_hex_string
}
`,Ue={title:"Hexa UI Components/Inputs/CodeViewer",component:i,argTypes:{language:{control:{type:"select"},options:["json","xml","html"]},width:{control:{type:"range",min:s.minConstraints[0],max:s.maxConstraints[0],step:10}},height:{control:{type:"range",min:s.minConstraints[1],max:s.maxConstraints[1],step:10}},validationStatus:{control:{type:"radio"},options:re},...ie(["theme","initialValue","minConstraints","maxConstraints","customLanguages","linter","onChange","className","wrapperClassName"])},args:{resizable:!0,resizeAxis:"both",readonly:!1,validationStatus:"default",language:"javascript",initialValue:q,linesHighlighted:["2-4","7-10","15"],testId:"code-viewer-test-id",klId:"code-viewer-kl-id"},parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:oe(S)},design:S.pixsoView}},G=ne.div`
  font-size: 12px;
  border: 1px solid lightgray;
  padding: 4px;
  white-space: pre-wrap;
  ${({theme:e})=>e==="light"?"color: black;":"color: white;"}
`,l={render:e=>{const[n,t]=Q.useState(q),a=K();return r.createElement(Z,null,r.createElement(i,{...e,onChange:t}),r.createElement(G,{theme:a.key},"Current value:",r.createElement("br",null),n))}},c={args:{initialValue:de,language:"html"}},m={args:{initialValue:y,language:"json",width:600,height:400,resizeAxis:"y"},render:e=>{const[n,t]=Q.useState(e.initialValue??y),a=K();return r.createElement(Z,null,r.createElement(i,{...e,onChange:t}),r.createElement(G,{theme:a.key},"Current value:",r.createElement("br",null),n))}},xe=e=>async t=>{const a=[],x=t.state.doc,o=x.toString();return console.log(x.toString()),o.includes("hello")||a.push({from:o.indexOf("title"),to:o.indexOf("title")+5,message:"Error",severity:e}),a};function ye(){const e=n=>{const t=n.matchBefore(/\w*/);return(t==null?void 0:t.from)===(t==null?void 0:t.to)&&!n.explicit?null:{from:t==null?void 0:t.from,options:[{label:"match",type:"keyword"},{label:"hello",type:"variable",info:"(World)"},{label:"magic",type:"text",apply:"⠁⭒*.✩.*⭒⠁",detail:"macro"}]}};return ee.data.of({autocomplete:e})}const u={args:{initialValue:y,language:"json",resizeAxis:"y",width:1e3,height:300,completions:ye(),linter:xe("error")}},p={args:{initialValue:ge,language:"xml"}},d={args:{initialValue:Ce,language:"yara"}},g={args:{initialValue:he,language:"tsx",width:600,height:600}},V=e=>async t=>{const a=[],o=t.state.doc.toString();return o.includes("function main(")||a.push({from:0,to:o.length,message:"Function should include a `main` function for code execution",severity:e}),a},h={render:e=>r.createElement(r.Fragment,null,r.createElement(i,{...e,linter:V("error")}),r.createElement(i,{...e,linter:V("warning")}))},C={args:{source:ae.input_code_viewer},render:e=>r.createElement(te,{...e})};var w,E,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: CodeViewerPropsStory) => {
    const [currentValue, setCurrentValue] = useState(basicExample);
    const theme = useTheme();
    return <StoryColumn>
        <CodeViewer {...args} onChange={setCurrentValue} />
        <ValueContainer theme={theme.key}>
          Current value:<br />{currentValue}
        </ValueContainer>
      </StoryColumn>;
  }
}`,...(b=(E=l.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var v,k,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initialValue: htmlExample,
    language: 'html'
  }
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var L,_,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json',
    width: 600,
    height: 400,
    resizeAxis: 'y'
  },
  render: (args: CodeViewerPropsStory) => {
    const [currentValue, setCurrentValue] = useState(args.initialValue ?? jsonExample);
    const theme = useTheme();
    return <StoryColumn>
        <CodeViewer {...args} onChange={setCurrentValue} />
        <ValueContainer theme={theme.key}>
          Current value:<br />{currentValue}
        </ValueContainer>
      </StoryColumn>;
  }
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var A,H,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json',
    resizeAxis: 'y',
    width: 1000,
    height: 300,
    completions: createCustomCompletions(),
    linter: createJSONCustomLinter('error')
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,O,J;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialValue: xmlExample,
    language: 'xml'
  }
}`,...(J=(O=p.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var z,W,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    initialValue: yaraExample,
    language: 'yara'
  }
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,X,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    initialValue: tsxExample,
    language: 'tsx',
    width: 600,
    height: 600
  }
}`,...(I=(X=g.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var R,B,D;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: CodeViewerPropsStory) => <>
      <CodeViewer {...args} linter={createCustomLinter('error')} />
      <CodeViewer {...args} linter={createCustomLinter('warning')} />
    </>
}`,...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var U,$,Y;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_code_viewer
  },
  render: args => <ThemedPalette {...args} />
}`,...(Y=($=C.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const $e=["Basic","ExampleHTML","ExampleJSON","ExampleJSONWithCompletions","ExampleXML","ExampleYara","ExampleTSX","WithLinter","ColorTokens"];export{l as Basic,C as ColorTokens,c as ExampleHTML,m as ExampleJSON,u as ExampleJSONWithCompletions,g as ExampleTSX,p as ExampleXML,d as ExampleYara,h as WithLinter,$e as __namedExportsOrder,Ue as default};
