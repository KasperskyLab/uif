import{D as i,C as x,j as K}from"./CodeViewer-CqIgjl1m.js";import{T as Z}from"./Palette-Bcbt30O7.js";import{v as q}from"./typesHelpers-tpz7Of7L.js";import{b as f,R as a,c as G,r as ee,z as te,H as ae}from"./iframe-DlY6n6Um.js";import{w as re}from"./withMeta-B77fl0Sa.js";import{s as ne}from"./helpers-BytZKRkB.js";import{S as oe}from"./StoryComponents-5Ni7_M0_.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./index-Chjiymov.js";import"./ResizeInput-DtUKzJyg.js";import"./StatusDangerSolid1-Dpju5bSe.js";import"./StatusWarningSolid-C-5m-AdQ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./Tag-Cd3srqW9.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";import"./Popover-D8ys_ap7.js";const ie={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},se="Code viewer",le="Компонент Code viewer используется в сценариях, когда нужно работать с кодом и функциями.",ce="Нотации и языки по умолчанию: HTML, JSON, XML, JavaScript, JSX, TypeScript, TSX.",me="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=53702%3A194802",pe="https://pixso.net/app/design/v67aCRl5t--3QSa2Az8TaQ",y={dod:ie,component:se,description:le,usage:ce,designLink:me,pixsoView:pe},Y='console.log("Hello, World!")',ue=`<html>
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
`,Q=`{
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
}`,de=`<manifest xmlns:android="http://schemas.android.com/apk/res/android"
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
`,ge=`import React, { FC, useState } from "react";

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
`,he=`rule ExampleRule
{
    strings:  // this is comment
        $my_text_string = "text here"
        $my_hex_string = { E2 34 A1 C8 23 FB }

    condition:
        $my_text_string or $my_hex_string
}
`,Ue={title:"Hexa UI Components/Inputs/CodeViewer",component:x,argTypes:{language:{control:{type:"select"},options:["json","xml","html"]},width:{control:{type:"range",min:i.minConstraints[0],max:i.maxConstraints[0],step:10}},height:{control:{type:"range",min:i.minConstraints[1],max:i.maxConstraints[1],step:10}},validationStatus:{control:{type:"radio"},options:q},...ne(["theme","initialValue","minConstraints","maxConstraints","customLanguages","linter","onChange","className","wrapperClassName"])},args:{resizable:!0,resizeAxis:"both",readonly:!1,validationStatus:"default",language:"javascript",initialValue:Y,linesHighlighted:["2-4","7-10","15"],testId:"code-viewer-test-id",klId:"code-viewer-kl-id"},parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:re(y)},design:y.pixsoView}},xe=ae.div`
  font-size: 12px;
  border: 1px solid lightgray;
  padding: 4px;
  white-space: pre-wrap;
  ${({theme:t})=>t==="light"?"color: black;":"color: white;"}
`,s={render:t=>{const[n,e]=ee.useState(Y),r=te();return a.createElement(oe,null,a.createElement(x,{...t,onChange:e}),a.createElement(xe,{theme:r.key},"Current value:",a.createElement("br",null),n))}},l={args:{initialValue:ue,language:"html"}},c={args:{initialValue:Q,language:"json"}},Ce=t=>async e=>{const r=[],C=e.state.doc,o=C.toString();return console.log(C.toString()),o.includes("hello")||r.push({from:o.indexOf("title"),to:o.indexOf("title")+5,message:"Error",severity:t}),r};function fe(){const t=n=>{const e=n.matchBefore(/\w*/);return(e==null?void 0:e.from)===(e==null?void 0:e.to)&&!n.explicit?null:{from:e==null?void 0:e.from,options:[{label:"match",type:"keyword"},{label:"hello",type:"variable",info:"(World)"},{label:"magic",type:"text",apply:"⠁⭒*.✩.*⭒⠁",detail:"macro"}]}};return K.data.of({autocomplete:t})}const m={args:{initialValue:Q,language:"json",resizeAxis:"y",width:1e3,height:300,completions:fe(),linter:Ce("error")}},p={args:{initialValue:de,language:"xml"}},u={args:{initialValue:he,language:"yara"}},d={args:{initialValue:ge,language:"tsx",width:600,height:600}},S=t=>async e=>{const r=[],o=e.state.doc.toString();return o.includes("function main(")||r.push({from:0,to:o.length,message:"Function should include a `main` function for code execution",severity:t}),r},g={render:t=>a.createElement(a.Fragment,null,a.createElement(x,{...t,linter:S("error")}),a.createElement(x,{...t,linter:S("warning")}))},h={args:{source:G.input_code_viewer},render:t=>a.createElement(Z,{...t})};var E,w,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var V,v,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    initialValue: htmlExample,
    language: 'html'
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var L,k,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json'
  }
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var H,A,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    initialValue: jsonExample,
    language: 'json',
    resizeAxis: 'y',
    width: 1000,
    height: 300,
    completions: createCustomCompletions(),
    linter: createJSONCustomLinter('error')
  }
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,O,J;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialValue: xmlExample,
    language: 'xml'
  }
}`,...(J=(O=p.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var M,z,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    initialValue: yaraExample,
    language: 'yara'
  }
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var W,P,X;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    initialValue: tsxExample,
    language: 'tsx',
    width: 600,
    height: 600
  }
}`,...(X=(P=d.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var I,R,B;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: CodeViewerPropsStory) => <>
      <CodeViewer {...args} linter={createCustomLinter('error')} />
      <CodeViewer {...args} linter={createCustomLinter('warning')} />
    </>
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var D,U,$;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_code_viewer
  },
  render: args => <ThemedPalette {...args} />
}`,...($=(U=h.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const $e=["Basic","ExampleHTML","ExampleJSON","ExampleJSONWithCompletions","ExampleXML","ExampleYara","ExampleTSX","WithLinter","ColorTokens"];export{s as Basic,h as ColorTokens,l as ExampleHTML,c as ExampleJSON,m as ExampleJSONWithCompletions,d as ExampleTSX,p as ExampleXML,u as ExampleYara,g as WithLinter,$e as __namedExportsOrder,Ue as default};
